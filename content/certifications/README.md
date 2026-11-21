# Banco de Certificaciones: Guía Unificada de Auditoría y Verificación

Este directorio contiene las fuentes de verdad pedagógicas (`balotarios.md`), guías de estudio (`study-guide.md`) y registros de verificación para todas las certificaciones técnicas de la plataforma.

---

## 📁 Estructura Estandarizada por Certificación

Cada subdirectorio representa una certificación y contiene **únicamente sus archivos específicos y únicos**:

```text
content/certifications/
├── README.md                          # Esta guía unificada de mantenimiento
├── gh-300/                            # GitHub Copilot GH-300
│   ├── balotarios.md                  # 458 preguntas prácticas (Tests 1-7)
│   ├── study-guide.md                 # Guía de estudio y ponderaciones oficiales Microsoft
│   ├── audit-config.json              # Configuración declarativa (dominios, patrones, catálogo)
│   ├── verification-state.json        # Estado incremental de verificación por pregunta
│   ├── source-hashes.json             # Hashes limpios de URLs oficiales
│   ├── source-cache/                  # Caché local de fuentes descargadas sin ruido HTML
│   ├── audit-report.md                # Informe determinista generado
│   └── audit-report.json              # Datos estructurados exportados
└── claude-certified-developer/        # Anthropic Claude Certified Developer
    ├── balotarios.md                  # 308 preguntas prácticas en inglés (Tests 1-6)
    ├── study-guide.md                 # Temario y módulos oficiales Anthropic Partners
    ├── translations-es.json           # Diccionario de traducción al español para modo bilingüe
    ├── audit-config.json              # Configuración declarativa (dominios, patrones, catálogo)
    ├── verification-state.json        # Estado incremental de verificación por pregunta
    ├── source-hashes.json             # Hashes limpios de URLs oficiales
    ├── source-cache/                  # Caché local de fuentes descargadas sin ruido HTML
    ├── audit-report.md                # Informe determinista generado
    └── audit-report.json              # Datos estructurados exportados
```

---

## 🚀 Flujo de Trabajo Unificado (Ahorro de Tokens para IA)

Para auditar, actualizar o verificar **cualquier certificación**, se utiliza la CLI centralizada desde la raíz del proyecto pasando el ID de la certificación (`gh-300`, `claude-certified-developer` o cualquier futura certificación):

```bash
# 1. Consultar estado del inventario (0 tokens consumidos)
python3 scripts/verify_certification.py <cert-id> status --list

# 2. Descargar y actualizar fuentes oficiales detectando cambios semánticos
python3 scripts/verify_certification.py <cert-id> check-sources

# 3. Ejecutar auditoría determinista sintáctica y de términos obsoletos (0 tokens)
python3 scripts/verify_certification.py <cert-id> audit

# 4. Generar ficha compacta de contexto para revisión con IA (< 400 tokens)
#    (Extrae únicamente el extracto relevante de la documentación oficial)
python3 scripts/verify_certification.py <cert-id> context 1:9

# 5. Marcar preguntas revisadas y al día
python3 scripts/verify_certification.py <cert-id> mark 1:9 --note "Verificación confirmada"
python3 scripts/verify_certification.py <cert-id> mark 2:1-10 --note "Lote validado"
```

---

## 🛠️ Comandos de la CLI (`scripts/verify_certification.py`)

| Comando | Sintaxis | Descripción |
|---|---|---|
| `status` | `python3 scripts/verify_certification.py <cert-id> status [-b N] [--list]` | Resumen de preguntas al día vs. pendientes agrupadas por motivo. |
| `check-sources` | `python3 scripts/verify_certification.py <cert-id> check-sources [--refresh] [--catalog]` | Actualiza la caché y hashes de fuentes oficiales descartando ruido HTML. |
| `audit` | `python3 scripts/verify_certification.py <cert-id> audit [--fail-on-review]` | Aplica validaciones deterministas y genera `audit-report.md` y `.json`. |
| `context` | `python3 scripts/verify_certification.py <cert-id> context <selector> [--format md\|json]` | Genera prompt ultra-compacto con el extracto oficial para la IA (< 400 tokens). |
| `mark` | `python3 scripts/verify_certification.py <cert-id> mark <targets>... [--all] [--note "…"]` | Marca preguntas como `verified` con los hashes vigentes. |
| `flag` | `python3 scripts/verify_certification.py <cert-id> flag <targets>... --note "…"` | Marca preguntas como `needs_review`. |
| `urls` | `python3 scripts/verify_certification.py <cert-id> urls` | Imprime el catálogo temático de URLs oficiales de la certificación. |

*Selectores válidos*: `3` (todo el Test 3), `3:10` (Test 3, Pregunta 10), `3:10-25` (Test 3, Preguntas 10 a 25), `--all` (todo el cuestionario).

---

## ➕ Cómo Agregar una Nueva Certificación

Gracias al diseño desacoplado del motor, para añadir una nueva certificación (ejemplo: `aws-ai-practitioner` o `azure-ai-fundamentals`):

1. **Crear su directorio**:
   ```bash
   mkdir -p content/certifications/<nueva-cert-id>
   ```
2. **Crear `balotarios.md`**:
   Con las preguntas en formato estándar `# Balotario 1`, `Pregunta N`, opciones `A-D`, `Respuesta correcta: ...`, `Explicación` y `Fuente oficial: [Título](URL)`.
3. **Crear `audit-config.json`**:
   Definiendo `cert_id`, `name`, `allowed_domains`, `obsolete_patterns` y `official_sources_catalog`.
4. **Registrar en la CLI**:
   ¡Listo! La CLI reconocerá automáticamente la nueva certificación:
   ```bash
   python3 scripts/verify_certification.py <nueva-cert-id> status
   python3 scripts/verify_certification.py <nueva-cert-id> audit
   ```
