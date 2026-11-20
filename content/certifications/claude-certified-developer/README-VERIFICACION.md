# Verificación de balotarios

Sistema para saber qué preguntas de `balotarios.md` ya fueron verificadas contra la documentación oficial y cuáles hay que revisar de nuevo. Evita re-verificar las 308 preguntas cada vez.

## Archivos

| Archivo | Rol |
|---|---|
| `verify_questions.py` | Script (solo biblioteca estándar de Python 3) |
| `verification-state.json` | Estado por pregunta. Se versiona |
| `source-hashes.json` | Hash del texto de cada URL oficial. Se versiona |
| `balotarios.md` | Fuente de verdad de las preguntas |

## Registro por pregunta

Clave: `claude-certified-developer-balotario-{B}-{P}`.

```json
{
  "last_verified_at": "2026-11-20",
  "source_url": "https://platform.claude.com/docs/en/api/overview",
  "source_hash": "…",
  "content_hash": "…",
  "status": "verified",
  "review_notes": "Header auth corregido a A y B"
}
```

- `source_hash`: hash de la página oficial cuando verificaste.
- `content_hash`: hash del enunciado, opciones, clave y explicación (sin la línea "Fuente oficial").
- `status`: `verified` o `needs_review`.

## Cuándo una pregunta queda pendiente

`status` la lista si ocurre cualquiera de estas:

1. No tiene registro.
2. `status` distinto de `verified`.
3. Su contenido cambió desde la verificación (`content_hash`).
4. Su URL de "Fuente oficial" cambió.
5. La página oficial cambió (hash actual en `source-hashes.json` distinto de `source_hash`).

## Flujo de actualización

```bash
cd content/certifications/claude-certified-developer

# 1. Detectar cambios en las docs oficiales (sin costo de tokens)
python3 verify_questions.py check-sources --catalog

# 2. Ver qué hay que revisar
python3 verify_questions.py status --list

# 3. Revisar SOLO esas preguntas contra la doc. Corregir balotarios.md si hace falta.

# 4. Registrar lo revisado
python3 verify_questions.py mark 3:10-20 --note "sin cambios"
python3 verify_questions.py mark 1:9 --note "clave corregida a A y B"

# 5. Regenerar traducciones y dataset si hubo cambios de contenido
#    (desde la raíz del repo)
python3 scripts_translate_claude.py      # solo traduce ids ausentes del caché
python3 scripts_prepare_questions.py claude-certified-developer

# 6. Commit
git add content/certifications/claude-certified-developer src/data/certifications
git commit -m "chore(content): re-verify balotarios"
```

Si cambiaste una pregunta, borra su entrada de `translations-es.json` antes del paso 5, o no se retraducirá.

## Comandos

| Comando | Qué hace |
|---|---|
| `status [-b N] [--list]` | Resumen de pendientes por motivo. `--list` muestra cada pregunta |
| `check-sources [--catalog] [-b N]` | Descarga las URLs y actualiza `source-hashes.json`. `--catalog` agrega el catálogo temático |
| `mark <selector>... [--all] [--note "…"]` | Marca como `verified` con fecha de hoy y los hashes actuales |
| `flag <selector>... --note "…"` | Marca como `needs_review` |
| `urls` | Lista el catálogo de URLs oficiales por tema |

Selectores: `3` (todo B3), `3:10` (B3 P10), `3:10-20` (B3 P10 a P20).

Importante: `mark` guarda el hash que hay en `source-hashes.json`. Corre `check-sources` **antes** de `mark`, o el estado quedará sin hash de fuente.

## Catálogo de URLs

`OFFICIAL_SOURCES` en el script agrupa las páginas por tema: errores, rate limits, caché, tool use, thinking, Claude Code (hooks, settings, memory, MCP, subagents), MCP y artículos de Anthropic. Úsalo para ir directo a la página correcta al verificar. `python3 verify_questions.py urls` lo imprime.

## Límites

- **Falsos positivos:** el hash cubre la página completa. Un cambio ajeno a la pregunta, o contenido dinámico, marca la pregunta como pendiente. Cuesta una revisión de más, nada más.
- **Falsos negativos:** si la fuente de una pregunta es genérica (por ejemplo `docs.anthropic.com/en/docs/welcome`), el hash casi no detecta cambios relevantes. Conviene apuntarlas a páginas específicas.
- **El hash no verifica nada:** solo avisa de que algo cambió. La comparación contra la doc la sigues haciendo tú o un agente.
- **Fetch simple:** `urllib` sin JavaScript. Si una página se renderiza en el cliente, el hash puede reflejar solo el contenido estático.
- **Traducciones:** `scripts_translate_claude.py` usa Google Translate sin revisión humana.

## Estado inicial

2026-11-20: las 308 preguntas se marcaron `verified` tras la revisión lineal de B1 a B6. Historial de cambios en `git log -- balotarios.md`.
