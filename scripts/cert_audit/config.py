from __future__ import annotations

import json
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any


@dataclass
class ScraperConfig:
    content_selectors: list[str] = field(default_factory=lambda: ["main", "article", "#main-content", ".content"])
    strip_elements: list[str] = field(
        default_factory=lambda: ["nav", "header", "footer", "aside", "script", "style", "noscript", ".feedback-section"]
    )
    cache_ttl_days: int = 7
    timeout_seconds: int = 25
    user_agent: str = "Mozilla/5.0 (compatible; CertificationAuditor/1.0)"


@dataclass
class ObsoletePattern:
    pattern: str
    message: str
    severity: str = "medium"


@dataclass
class AuditConfig:
    cert_id: str
    name: str
    cert_dir: Path
    source_file: str = "balotarios.md"
    allowed_domains: list[str] = field(default_factory=list)
    scraper: ScraperConfig = field(default_factory=ScraperConfig)
    obsolete_patterns: list[ObsoletePattern] = field(default_factory=list)
    generic_patterns: list[str] = field(default_factory=list)
    official_sources_catalog: dict[str, str] = field(default_factory=dict)

    @property
    def source_md_path(self) -> Path:
        return self.cert_dir / self.source_file

    @property
    def state_path(self) -> Path:
        return self.cert_dir / "verification-state.json"

    @property
    def hashes_path(self) -> Path:
        return self.cert_dir / "source-hashes.json"

    @property
    def cache_dir(self) -> Path:
        return self.cert_dir / "source-cache"

    @property
    def report_md_path(self) -> Path:
        return self.cert_dir / "audit-report.md"

    @property
    def report_json_path(self) -> Path:
        return self.cert_dir / "audit-report.json"


def load_config(cert_dir: Path | str) -> AuditConfig:
    cert_path = Path(cert_dir).resolve()
    config_file = cert_path / "audit-config.json"
    if not config_file.exists():
        raise FileNotFoundError(f"No se encontró audit-config.json en: {cert_path}")

    raw: dict[str, Any] = json.loads(config_file.read_text(encoding="utf-8"))

    scraper_data = raw.get("scraper", {})
    scraper = ScraperConfig(
        content_selectors=scraper_data.get("content_selectors", ["main", "article", "#main-content", ".content"]),
        strip_elements=scraper_data.get(
            "strip_elements", ["nav", "header", "footer", "aside", "script", "style", "noscript", ".feedback-section"]
        ),
        cache_ttl_days=scraper_data.get("cache_ttl_days", 7),
        timeout_seconds=scraper_data.get("timeout_seconds", 25),
        user_agent=scraper_data.get("user_agent", "Mozilla/5.0 (compatible; CertificationAuditor/1.0)"),
    )

    obsolete_patterns = [
        ObsoletePattern(
            pattern=item.get("pattern", ""),
            message=item.get("message", ""),
            severity=item.get("severity", "medium"),
        )
        for item in raw.get("obsolete_patterns", [])
    ]

    return AuditConfig(
        cert_id=raw.get("cert_id", cert_path.name),
        name=raw.get("name", cert_path.name),
        cert_dir=cert_path,
        source_file=raw.get("source_file", "balotarios.md"),
        allowed_domains=raw.get("allowed_domains", []),
        scraper=scraper,
        obsolete_patterns=obsolete_patterns,
        generic_patterns=raw.get("generic_patterns", []),
        official_sources_catalog=raw.get("official_sources_catalog", {}),
    )
