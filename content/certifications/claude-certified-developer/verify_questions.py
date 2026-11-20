#!/usr/bin/env python3
"""Control de verificación de balotarios.md contra documentación oficial.

Evita re-verificar preguntas ya procesadas. Una pregunta necesita revisión si:
  - no tiene registro, o su status != verified
  - su contenido (enunciado/opciones/clave/explicación) cambió desde la verificación
  - el hash de su fuente oficial cambió desde la verificación

Archivos (junto al script):
  verification-state.json  estado por pregunta (se versiona)
  source-hashes.json       hash del texto de cada URL oficial (se versiona)

Uso:
  python3 verify_questions.py status [-b N] [--list]
  python3 verify_questions.py check-sources [--catalog] [-b N]
  python3 verify_questions.py mark (--all | 3 | 3:10 | 3:10-20 ...) [--note "..."]
  python3 verify_questions.py flag 3:10 --note "motivo"
  python3 verify_questions.py urls
Flujo: status -> revisar SOLO las pendientes -> mark -> commit.
"""
import argparse
import hashlib
import json
import re
import sys
import urllib.request
from datetime import date, datetime, timezone
from html.parser import HTMLParser
from pathlib import Path

BASE = Path(__file__).parent
MD = BASE / "balotarios.md"
STATE = BASE / "verification-state.json"
HASHES = BASE / "source-hashes.json"
PREFIX = "claude-certified-developer-balotario"

# Catálogo de documentación oficial por tema (usar para verificar sin buscar URLs).
OFFICIAL_SOURCES = {
    "api-overview/auth/headers": "https://platform.claude.com/docs/en/api/overview",
    "errors": "https://platform.claude.com/docs/en/api/errors",
    "rate-limits": "https://platform.claude.com/docs/en/api/rate-limits",
    "stop-reasons": "https://platform.claude.com/docs/en/build-with-claude/handling-stop-reasons",
    "streaming": "https://platform.claude.com/docs/en/build-with-claude/streaming",
    "batch": "https://platform.claude.com/docs/en/build-with-claude/batch-processing",
    "prompt-caching": "https://platform.claude.com/docs/en/build-with-claude/prompt-caching",
    "thinking": "https://platform.claude.com/docs/en/build-with-claude/thinking",
    "context-windows": "https://platform.claude.com/docs/en/build-with-claude/context-windows",
    "tool-handle-calls": "https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls",
    "tool-define": "https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools",
    "pricing": "https://platform.claude.com/docs/en/about-claude/pricing",
    "versioning": "https://platform.claude.com/docs/en/api/versioning",
    "mitigate-injection": "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks",
    "claude-code-hooks": "https://code.claude.com/docs/en/hooks",
    "claude-code-settings": "https://code.claude.com/docs/en/settings",
    "claude-code-memory": "https://code.claude.com/docs/en/memory",
    "claude-code-mcp": "https://code.claude.com/docs/en/mcp",
    "claude-code-subagents": "https://code.claude.com/docs/en/sub-agents",
    "building-effective-agents": "https://www.anthropic.com/research/building-effective-agents",
    "context-engineering": "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents",
    "multi-agent-research": "https://www.anthropic.com/engineering/multi-agent-research-system",
    "mcp-spec-transports": "https://modelcontextprotocol.io/specification/2025-06-18/basic/transports",
    "mcp-server-concepts": "https://modelcontextprotocol.io/docs/learn/server-concepts",
}

SOURCE_RE = re.compile(r"^Fuente oficial:\s*\[(.*?)\]\((.*?)\)\s*$")


def norm(text):
    return re.sub(r"\s+", " ", text).strip()


def sha(text):
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def load(path):
    return json.loads(path.read_text(encoding="utf-8")) if path.exists() else {}


def save(path, data):
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2, sort_keys=True) + "\n", encoding="utf-8")


def parse_questions():
    """id -> {bal, num, source_url, content_hash}"""
    blocks, bal, cur = {}, None, None
    for line in MD.read_text(encoding="utf-8").splitlines():
        m = re.match(r"# Balotario (\d+)", line)
        if m:
            bal, cur = int(m[1]), None
            continue
        m = re.match(r"Pregunta (\d+)$", line)
        if m and bal:
            cur = {"bal": bal, "num": int(m[1]), "lines": []}
            blocks[f"{PREFIX}-{bal}-{m[1]}"] = cur
            continue
        if cur is not None:
            cur["lines"].append(line)
    out = {}
    for qid, b in blocks.items():
        url, body = "", []
        for ln in b["lines"]:
            m = SOURCE_RE.match(ln.strip())
            if m:
                url = m[2]
            else:
                body.append(ln)
        out[qid] = {"bal": b["bal"], "num": b["num"], "source_url": url, "content_hash": sha(norm(" ".join(body)))}
    return out


class _Text(HTMLParser):
    def __init__(self):
        super().__init__()
        self.parts, self.skip = [], 0

    def handle_starttag(self, tag, attrs):
        if tag in ("script", "style", "noscript"):
            self.skip += 1

    def handle_endtag(self, tag):
        if tag in ("script", "style", "noscript") and self.skip:
            self.skip -= 1

    def handle_data(self, data):
        if not self.skip:
            self.parts.append(data)


def fetch_hash(url):
    """Devuelve (hash, longitud) del texto normalizado de la URL, o None si falla."""
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=25) as r:
            raw = r.read().decode("utf-8", errors="replace")
    except Exception as e:
        print(f"  ERROR {url}: {e}")
        return None
    p = _Text()
    p.feed(raw)
    text = norm(" ".join(p.parts))
    return sha(text), len(text)


def review_reason(q, st, hashes):
    if not st:
        return "sin verificar"
    if st.get("status") != "verified":
        return f"status={st.get('status')}"
    if st.get("content_hash") != q["content_hash"]:
        return "contenido modificado"
    if st.get("source_url") != q["source_url"]:
        return "fuente cambiada de URL"
    cur = hashes.get(q["source_url"], {}).get("hash")
    if cur and st.get("source_hash") and cur != st["source_hash"]:
        return "fuente oficial modificada"
    return None


def select_ids(questions, specs, all_):
    if all_:
        return list(questions)
    ids = []
    for s in specs:
        m = re.fullmatch(r"(\d+)(?::(\d+)(?:-(\d+))?)?", s)
        if not m:
            sys.exit(f"Selector inválido: {s}")
        b, a, z = int(m[1]), m[2], m[3]
        for qid, q in questions.items():
            if q["bal"] != b:
                continue
            if a is None or (int(a) <= q["num"] <= int(z or a)):
                ids.append(qid)
    return ids


def cmd_status(args):
    qs, state, hashes = parse_questions(), load(STATE), load(HASHES)
    if args.balotario:
        qs = {k: v for k, v in qs.items() if v["bal"] == args.balotario}
    pending = {}
    for qid, q in qs.items():
        r = review_reason(q, state.get(qid), hashes)
        if r:
            pending[qid] = r
    print(f"Total: {len(qs)} | verificadas vigentes: {len(qs) - len(pending)} | pendientes: {len(pending)}")
    by = {}
    for qid, r in pending.items():
        by.setdefault(r, []).append(qid)
    for r, ids in sorted(by.items()):
        print(f"  {r}: {len(ids)}")
        if args.list:
            for i in ids:
                print(f"    B{qs[i]['bal']}:P{qs[i]['num']}  {qs[i]['source_url']}")


def cmd_check_sources(args):
    qs, hashes = parse_questions(), load(HASHES)
    urls = {q["source_url"] for q in qs.values()
            if q["source_url"] and (not args.balotario or q["bal"] == args.balotario)}
    if args.catalog:
        urls |= set(OFFICIAL_SOURCES.values())
    changed = 0
    for url in sorted(urls):
        res = fetch_hash(url)
        if not res:
            continue
        h, n = res
        old = hashes.get(url, {}).get("hash")
        tag = "nuevo" if old is None else ("CAMBIÓ" if old != h else "igual")
        changed += tag == "CAMBIÓ"
        print(f"  {tag:6} {url}")
        hashes[url] = {"hash": h, "length": n, "fetched_at": datetime.now(timezone.utc).isoformat(timespec="seconds")}
    save(HASHES, hashes)
    print(f"{len(urls)} URLs, {changed} cambiaron. Las preguntas ligadas aparecerán en 'status'.")
    print("Nota: páginas con contenido dinámico pueden dar falsos 'CAMBIÓ'; revisa antes de re-verificar.")


def cmd_mark(args):
    qs, state, hashes = parse_questions(), load(STATE), load(HASHES)
    ids = select_ids(qs, args.targets, args.all)
    if not ids:
        sys.exit("Nada seleccionado.")
    for qid in ids:
        q = qs[qid]
        state[qid] = {
            "last_verified_at": date.today().isoformat(),
            "source_url": q["source_url"],
            "source_hash": hashes.get(q["source_url"], {}).get("hash", ""),
            "content_hash": q["content_hash"],
            "status": "verified",
            "review_notes": args.note,
        }
    save(STATE, state)
    print(f"Marcadas como verified: {len(ids)}")


def cmd_flag(args):
    qs, state = parse_questions(), load(STATE)
    ids = select_ids(qs, args.targets, False)
    for qid in ids:
        st = state.get(qid, {})
        st.update({"status": "needs_review", "review_notes": args.note,
                   "last_verified_at": st.get("last_verified_at", "")})
        state[qid] = st
    save(STATE, state)
    print(f"Marcadas needs_review: {len(ids)}")


def cmd_urls(_):
    for k, v in OFFICIAL_SOURCES.items():
        print(f"{k:28} {v}")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)
    p = sub.add_parser("status"); p.add_argument("-b", "--balotario", type=int); p.add_argument("--list", action="store_true"); p.set_defaults(f=cmd_status)
    p = sub.add_parser("check-sources"); p.add_argument("-b", "--balotario", type=int); p.add_argument("--catalog", action="store_true"); p.set_defaults(f=cmd_check_sources)
    p = sub.add_parser("mark"); p.add_argument("targets", nargs="*"); p.add_argument("--all", action="store_true"); p.add_argument("--note", default=""); p.set_defaults(f=cmd_mark)
    p = sub.add_parser("flag"); p.add_argument("targets", nargs="+"); p.add_argument("--note", required=True); p.set_defaults(f=cmd_flag)
    p = sub.add_parser("urls"); p.set_defaults(f=cmd_urls)
    args = ap.parse_args()
    args.f(args)


if __name__ == "__main__":
    main()
