from __future__ import annotations

import hashlib
import html
import json
import re
import urllib.parse
import urllib.request
from dataclasses import dataclass
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path
from urllib.error import HTTPError, URLError

from scripts.cert_audit.config import ScraperConfig


def normalize_url(url: str) -> str:
    url = url.strip()
    parsed = urllib.parse.urlsplit(url)
    host = parsed.netloc.lower()
    if host.startswith("www."):
        host = host[4:]
    return urllib.parse.urlunsplit((parsed.scheme.lower(), host, parsed.path, parsed.query, ""))


def cache_filename(url: str) -> str:
    return hashlib.sha256(url.encode("utf-8")).hexdigest()[:16] + ".json"


class SemanticContentExtractor(HTMLParser):
    """Extractor semántico de HTML que descarta navegación, cabeceras, pies de página,
    scripts, estilos y banners de cookies, priorizando el contenido técnico principal.
    """

    DEFAULT_SKIP_TAGS = {"script", "style", "noscript", "nav", "header", "footer", "aside", "svg"}

    BLOCK_TAGS = {
        "p", "div", "article", "section", "main", "h1", "h2", "h3", "h4", "h5", "h6",
        "li", "tr", "br", "blockquote", "pre"
    }

    SKIP_CLASS_PATTERNS = re.compile(
        r"(?i)\b(nav|navbar|sidebar|menu|footer|header|cookie|banner|feedback|breadcrumb|toc)\b"
    )

    def __init__(self, strip_tags: set[str] | None = None) -> None:
        super().__init__()
        self.strip_tags = strip_tags or self.DEFAULT_SKIP_TAGS
        self.skip_depth = 0
        self.main_depth = 0
        self.has_seen_main = False
        self.main_parts: list[str] = []
        self.all_parts: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attr_dict = {k.lower(): (v or "") for k, v in attrs}
        classes = attr_dict.get("class", "")
        role = attr_dict.get("role", "")
        tag_id = attr_dict.get("id", "")

        is_skip_tag = tag in self.strip_tags
        is_skip_class = bool(self.SKIP_CLASS_PATTERNS.search(classes) or self.SKIP_CLASS_PATTERNS.search(tag_id))

        if is_skip_tag or is_skip_class:
            self.skip_depth += 1
            return

        if self.skip_depth > 0:
            self.skip_depth += 1
            return

        # Detección de contenedor semántico principal
        is_main = (
            tag in ("main", "article")
            or role == "main"
            or tag_id in ("main-content", "content")
        )

        if is_main:
            self.has_seen_main = True
            self.main_depth += 1
        elif self.main_depth > 0:
            self.main_depth += 1

        if tag in self.BLOCK_TAGS:
            target = self.main_parts if self.main_depth > 0 else self.all_parts
            target.append("\n")

    def handle_endtag(self, tag: str) -> None:
        if self.skip_depth > 0:
            self.skip_depth -= 1
            return

        if self.main_depth > 0:
            self.main_depth -= 1

        if tag in self.BLOCK_TAGS:
            target = self.main_parts if self.main_depth > 0 else self.all_parts
            target.append("\n")

    def handle_data(self, data: str) -> None:
        if self.skip_depth > 0:
            return
        if not data.strip():
            return

        if self.main_depth > 0:
            self.main_parts.append(data)
        self.all_parts.append(data)

    def get_clean_text(self) -> str:
        # Si detectamos un contenedor principal con texto sustancial, lo usamos
        raw_text = "".join(self.main_parts) if (self.has_seen_main and len("".join(self.main_parts).strip()) > 100) else "".join(self.all_parts)
        text = html.unescape(raw_text)
        text = re.sub(r"[ \t]+", " ", text)
        text = re.sub(r"\n\s+", "\n", text)
        text = re.sub(r"\n{3,}", "\n\n", text)
        return text.strip()


@dataclass
class SourceResult:
    url: str
    final_url: str
    fetched_at: str
    status: str
    error: str | None
    sha256: str
    clean_text: str
    length: int
    from_cache: bool


def clean_html(raw_html: str, strip_elements: list[str] | None = None) -> tuple[str, str]:
    """Devuelve (clean_text, sha256) del contenido semántico."""
    strip_tags = set(strip_elements) if strip_elements else None
    extractor = SemanticContentExtractor(strip_tags=strip_tags)
    extractor.feed(raw_html)
    clean_text = extractor.get_clean_text()
    digest = hashlib.sha256(clean_text.encode("utf-8")).hexdigest()
    return clean_text, digest


def fetch_source_live(url: str, user_agent: str, timeout: int) -> tuple[str, str]:
    """Descarga el HTML crudo vía urllib retornando (raw_html, final_url)."""
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": user_agent,
            "Accept": "text/html,application/xhtml+xml,text/plain",
        },
    )
    with urllib.request.urlopen(req, timeout=timeout) as response:
        charset = response.headers.get_content_charset() or "utf-8"
        raw_bytes = response.read()
        raw_html = raw_bytes.decode(charset, errors="replace")
        final_url = normalize_url(response.geturl())
    return raw_html, final_url


def get_source_content(
    url: str,
    cache_dir: Path,
    scraper_cfg: ScraperConfig,
    refresh: bool = False,
) -> SourceResult:
    """Obtiene el contenido de una URL, usando caché local si está vigente o descargándolo."""
    norm_url = normalize_url(url)
    cache_dir.mkdir(parents=True, exist_ok=True)
    cache_file = cache_dir / cache_filename(norm_url)

    # Intentar leer desde caché si no se fuerza refresh
    if not refresh and cache_file.exists():
        try:
            cached_data = json.loads(cache_file.read_text(encoding="utf-8"))
            fetched_at_str = cached_data.get("fetched_at", "")
            fetched_dt = datetime.fromisoformat(fetched_at_str)
            age_seconds = (datetime.now(timezone.utc) - fetched_dt).total_seconds()
            ttl_seconds = scraper_cfg.cache_ttl_days * 86400

            if age_seconds <= ttl_seconds and cached_data.get("status") == "ok":
                return SourceResult(
                    url=cached_data.get("url", norm_url),
                    final_url=cached_data.get("final_url", norm_url),
                    fetched_at=fetched_at_str,
                    status=cached_data.get("status", "ok"),
                    error=cached_data.get("error"),
                    sha256=cached_data.get("sha256", ""),
                    clean_text=cached_data.get("clean_text") or cached_data.get("text", ""),
                    length=cached_data.get("length") or len(cached_data.get("clean_text", "")),
                    from_cache=True,
                )
        except Exception:
            pass  # Fallo al leer caché, proceder a descarga

    # Descarga en vivo
    try:
        raw_html, final_url = fetch_source_live(
            norm_url,
            user_agent=scraper_cfg.user_agent,
            timeout=scraper_cfg.timeout_seconds,
        )
        clean_text, digest = clean_html(raw_html, scraper_cfg.strip_elements)
        status = "ok"
        error = None
    except (HTTPError, URLError, TimeoutError, OSError, Exception) as exc:
        raw_html = ""
        clean_text = ""
        final_url = norm_url
        digest = ""
        status = "error"
        error = str(exc)

    now_str = datetime.now(timezone.utc).replace(microsecond=0).isoformat()
    result = SourceResult(
        url=norm_url,
        final_url=final_url,
        fetched_at=now_str,
        status=status,
        error=error,
        sha256=digest,
        clean_text=clean_text,
        length=len(clean_text),
        from_cache=False,
    )

    # Guardar en caché local
    cache_payload = {
        "url": result.url,
        "final_url": result.final_url,
        "fetched_at": result.fetched_at,
        "status": result.status,
        "error": result.error,
        "sha256": result.sha256,
        "clean_text": result.clean_text,
        "length": result.length,
    }
    cache_file.write_text(json.dumps(cache_payload, ensure_ascii=False, indent=2), encoding="utf-8")

    return result
