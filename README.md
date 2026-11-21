# 🚀 Plataforma de Práctica: Simulador de Certificaciones Técnicas (GH-300 y Claude Certified Developer)

¡Bienvenido/a! 👋 Este proyecto es una plataforma web interactiva de simulación y evaluación diseñada para desarrolladores, arquitectos de software e ingenieros que se preparan para certificaciones técnicas de IA líderes en la industria:

1. **GitHub Copilot (GH-300)**: 458 preguntas prácticas en 7 tests, alineadas con las competencias oficiales de Microsoft Learn y GitHub Docs.
2. **Anthropic Claude Certified Developer**: 308 preguntas prácticas en 6 tests, estructuradas según los 5 módulos oficiales de Anthropic Partners (MSO Foundations, Production-Grade Prompting, Claude Code & MCP, Evals & Security y Accelerators).

Cuenta con un banco de **766 preguntas técnicas**, traducción instantánea (inglés/español) para certificaciones internacionales, explicaciones pedagógicas detalladas, guías de estudio oficiales y desgloses estructurados de descarte de distractores fundamentados exclusivamente en documentación oficial.

---

## 🎯 Contenido de esta guía

1. **[Hito 1: Instalación y práctica en tu equipo local (Lo mínimo para empezar)](#-hito-1-instalación-y-práctica-en-tu-equipo-local)**
2. **[Hito 2: Despliegue gratuito 24/7 en Google Cloud (Always Free)](#-hito-2-despliegue-gratuito-247-en-google-cloud-always-free)**
3. **[Cómo funciona el examen y dinámica de estudio](#-cómo-funciona-el-examen)**
4. **[Desarrollo avanzado y contribución (Spec-Driven Development)](#-desarrollo-avanzado-y-contribución-sdd)**
   - 4.1 **[Mantenimiento y verificación de preguntas (Web Scraping y Ahorro de Tokens)](#41-mantenimiento-y-verificación-de-veracidad-de-preguntas-web-scraping-y-ahorro-de-tokens)**
   - 4.2 **[Cómo agregar una nueva certificación (Paso a paso para desarrolladores)](#42-cómo-agregar-una-nueva-certificación-paso-a-paso)**
   - 4.3 **[Edición y compilación de preguntas](#43-edición-y-compilación-de-preguntas)**
   - 4.4 **[Estructura del proyecto](#-estructura-del-proyecto)**

---

## 💻 Hito 1: Instalación y Práctica en tu Equipo Local

Para comenzar a estudiar en tu propia computadora no necesitas conocimientos avanzados de servidores. Sigue estos simples pasos:

### 1.1 Lo mínimo indispensable (Requisitos previos)

Antes de empezar, asegúrate de tener instalado en tu computadora:

1. **Node.js (versión 22.12 o superior)** o **[Bun](https://bun.sh/)**:
   - Abre una terminal y comprueba si lo tienes con:
     ```bash
     node -v
     # o bien
     bun -v
     ```
   - Si no lo tienes o tu versión es inferior a `v22.12.0`, descárgalo gratis desde [nodejs.org](https://nodejs.org/) (versión LTS o Current recomendada). *(Requerido porque el proyecto utiliza la base de datos SQLite nativa integrada).*
   - *(Alternativa recomendada)*: También puedes instalar **Bun** (`curl -fsSL https://bun.sh/install | bash`), que es ultra rápido y compatible al 100%.
2. **Git**: Para descargar el proyecto. Comprueba con `git --version`. Si no lo tienes, descárgalo desde [git-scm.com](https://git-scm.com/).

---

### 1.2 Paso a paso para iniciar en menos de 3 minutos

Abre tu terminal (PowerShell o CMD en Windows, Terminal en macOS o Linux) y ejecuta estos 4 comandos:

```bash
# 1. Clonar el repositorio en tu equipo
git clone https://github.com/crvenegascordova/quiz-gh300.git

# 2. Entrar a la carpeta del proyecto
cd quiz-gh300

# 3. Instalar las dependencias
bun install
# (o si prefieres npm: npm install)

# 4. Iniciar el servidor de práctica local
bun run dev
# (o si prefieres npm: npm run dev)
```

¡Listo! La terminal te mostrará un enlace local:
👉 **`http://localhost:4321`**

Abre ese enlace en tu navegador web (Chrome, Edge, Firefox, Safari) y ya podrás empezar a resolver tus exámenes de práctica.

---

### 1.3 Verificar que todo funcione con las Pruebas Unitarias

El proyecto cuenta con una suite completa de **pruebas unitarias automatizadas** que validan la lógica de corrección, descarte de distractores y navegación:

```bash
bun test
# (o con npm: npm test)
```

Verás las **50 pruebas aprobadas en verde**, asegurando que el motor de evaluación funciona correctamente en tu máquina.

---

## ☁️ Hito 2: Despliegue Gratuito 24/7 en Google Cloud (Always Free)

¿Quieres poder practicar desde tu teléfono móvil en el transporte público, en tu tablet o compartir la plataforma con tus compañeros de estudio?

Puedes alojar este proyecto en tu propio servidor en la nube **de por vida y sin pagar nada ($0.00 USD/mes)** aprovechando el nivel *Always Free* de **Google Cloud Compute Engine**.

---

### ¿Por qué es 100% gratis?

Google Cloud incluye en su capa gratuita mensual permanente:
* **1 máquina virtual `e2-micro`** en regiones seleccionadas de EE.UU.
* **Hasta 30 GB de disco estándar** de almacenamiento.
* **1 GB de tráfico de salida a internet** por mes (el tráfico de subida es ilimitado y gratis).

> 💡 **Regla de oro para desarrolladores:**  
> La máquina virtual gratuita tiene **1 GB de memoria RAM**. Si intentas compilar Astro y Tailwind dentro de la máquina virtual, se quedará sin memoria y se congelará.  
> Por eso usamos la mejor práctica de la industria: **compilamos en tu computadora en 2 segundos y solo subimos los archivos listos para producción (`deploy.tar.gz`)**.

---

### Paso a paso para crear tu servidor en la nube:

#### Paso 1: Crear la Máquina Virtual en Google Cloud Console
1. Entra a [Google Cloud Console](https://console.cloud.google.com/) con tu cuenta de Google.
2. En el menú de navegación, ve a: **Compute Engine > Instancias de VM** y haz clic en **Crear instancia**.
3. Rellena los datos con estas opciones exactas para que sea 100% gratis:
   - **Nombre:** `quiz-gh300` (o el nombre que prefieras).
   - **Región:** Elige una de las regiones gratuitas de EE.UU.:
     - `us-central1` (Iowa)
     - `us-east1` (Carolina del Sur)
     - `us-west1` (Oregón)
   - **Configuración de máquina:**
     - Serie: **E2**
     - Tipo de máquina: **`e2-micro`** (2 vCPU compartidas, 1 GB de memoria RAM).
   - **Disco de arranque:** Haz clic en el botón **Cambiar**:
     - Sistema operativo: **Ubuntu** (versión *Ubuntu 24.04 LTS*) o **Debian 12**.
     - Tipo de disco de arranque: **Disco persistente estándar** (*Standard persistent disk*).
     - Tamaño: **15 a 20 GB** (el límite gratuito es hasta 30 GB).
     - Haz clic en *Seleccionar*.
   - **Firewall:**
     - ✅ Marca la casilla **Permitir tráfico HTTP**
     - ✅ Marca la casilla **Permitir tráfico HTTPS**
4. Haz clic en **Crear**. En un minuto tu máquina estará encendida con una **IP externa** asignada.  
*(La consola puede mostrar una estimación de ~$7 USD/mes, pero Google descuenta el 100% en tu factura mensual gracias al crédito Always Free).*

---

#### Paso 2: Compilar y empaquetar en tu computadora local
En tu terminal local (dentro de la carpeta del proyecto en tu PC):

```bash
# 1. Compilar la aplicación para producción
bun run build
# (o con npm: npm run build)

# 2. Empaquetar el build generado y package.json (pesa apenas ~200 KB)
tar -czf deploy.tar.gz dist/ package.json
```
Esto creará un archivo comprimido llamado `deploy.tar.gz`.

---

#### Paso 3: Subir el paquete a tu servidor
1. En la lista de Instancias de VM de Google Cloud Console, busca tu máquina y pulsa el botón **SSH** para abrir la terminal web.
2. En la esquina superior derecha de la ventana SSH, haz clic en el ícono de engranaje ⚙️ y elige **Subir archivo** (*Upload file*).
3. Selecciona el archivo `deploy.tar.gz` de tu computadora y espera a que la barra de subida llegue al 100%.

---

#### Paso 4: Preparar el servidor (Copiar y pegar en la terminal SSH)
Copia y pega este bloque en la terminal SSH de Google Cloud:

```bash
# 1. Configurar 2 GB de memoria de intercambio SWAP (fundamental para estabilidad en 1 GB de RAM)
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo "/swapfile none swap sw 0 0" | sudo tee -a /etc/fstab

# 2. Instalar herramientas base y el runtime Bun
sudo apt update && sudo apt install -y unzip curl
curl -fsSL https://bun.sh/install | bash
export PATH="$HOME/.bun/bin:$PATH"

# 3. Descomprimir la aplicación e instalar dependencias de producción
mkdir -p ~/quiz
tar -xzf deploy.tar.gz -C ~/quiz
cd ~/quiz
~/.bun/bin/bun install --production
mkdir -p data
```

---

#### Paso 5: Configurar el servicio en segundo plano con `systemd`
Para que tu aplicación se ejecute en el puerto web estándar (**puerto 80**), continúe funcionando cuando cierres la ventana SSH y se reinicie sola si el servidor se reinicia, pega este comando:

```bash
# Crear el archivo de servicio
sudo tee /etc/systemd/system/quiz.service > /dev/null <<EOF
[Unit]
Description=Quiz Multi-Certification Web App
After=network.target

[Service]
Type=simple
User=$USER
WorkingDirectory=/home/$USER/quiz
ExecStart=/home/$USER/.bun/bin/bun dist/server/entry.mjs
Restart=always
RestartSec=5
Environment=HOST=0.0.0.0
Environment=PORT=80
AmbientCapabilities=CAP_NET_BIND_SERVICE

[Install]
WantedBy=multi-user.target
EOF

# Iniciar y habilitar el servicio para arranque automático
sudo systemctl daemon-reload
sudo systemctl enable --now quiz
```

---

#### Paso 6: ¡Probar tu aplicación en vivo!
Copia la **IP externa** que aparece al lado de tu máquina en la consola de Google Cloud (por ejemplo `http://136.116.255.241`).

Ábrela en el navegador de tu teléfono o computadora:
👉 **`http://<TU_IP_EXTERNA>`**

¡Felicidades! 🎉 Ya tienes tu plataforma de estudio montada en la nube para practicar cuando quieras.

---

### 🛡️ Alerta de facturación preventiva (Tranquilidad total)
Para asegurarte de que nunca tengas cargos accidentales:
1. En Google Cloud Console ve al menú: **Facturación > Presupuestos y alertas**.
2. Haz clic en **Crear presupuesto**.
3. Ponle un monto simbólico (por ejemplo **$1 USD** o **$1.000 CLP**).
4. Si por alguna razón activaras un servicio de pago fuera del Always Free y consumieras $0.01, Google te enviará una notificación por correo de inmediato.

---

## 📚 Cómo funciona el Examen

1. **Selecciona tu Certificación**:
   - Al ingresar, elige entre **GitHub Copilot GH-300** o **Claude Certified Developer**.
   - Cada certificación cuenta con su propio banco de preguntas, historial aislado y guía oficial de estudio.
   - En cualquier momento puedes pulsar **← Cambiar certificación** para alternar de examen.
2. **Configura tu sesión de práctica**:
   - Selecciona cuántas preguntas deseas resolver (entre 1 y el total disponible).
   - Puedes elegir practicar un **Test específico** o **Todos los tests** para un examen global aleatorio.
   - Opciones avanzadas: **Solo preguntas aún no vistas** (cobertura total de inventario) o **Repasar preguntas falladas históricas** (refuerzo de errores).
3. **Traducción Instantánea**:
   - Para certificaciones en inglés (como Claude Certified Developer), pulsa el botón **ES / EN - Traducir cuestionario** en la barra superior para alternar en vivo entre inglés original y español.
4. **Responde y recibe retroalimentación inmediata**:
   - Marca una o más casillas según lo solicite la pregunta.
   - Presiona **Revisar respuesta**. Si fallas, el sistema te mostrará un **desglose estructurado** explicando exactamente por qué la opción elegida no es la adecuada, contrastándola con la documentación técnica oficial (Microsoft Learn, GitHub Docs o Anthropic).
5. **Navegación pensada para el estudiante**:
   - Pulsa **Continuar →** para avanzar a la siguiente pregunta (en móvil la pantalla se desplazará suavemente hacia arriba de forma automática).
   - Si deseas repasar una pregunta anterior, pulsa **← Pregunta anterior** para consultarla en **modo solo lectura** con su explicación y tus respuestas visibles.
   - En cualquier momento puedes usar el botón **✕ Abandonar** en la esquina superior para cancelar el examen mediante un modal de confirmación.
6. **Historial de intentos y métricas de inventario**:
   - Al finalizar, tus resultados se guardan en la base de datos local SQLite (`data/quiz-history.sqlite`) aislados por certificación.
   - Puedes hacer clic en **Ver mis exámenes** en la pantalla de inicio para revisar tu progreso histórico, puntajes por competencia y tabla de cobertura de preguntas vistas y pendientes.

---

## 🛠️ Desarrollo Avanzado y Contribución (SDD)

Si deseas colaborar, agregar nuevas preguntas o mejorar el diseño, este proyecto sigue estrictamente la metodología **Spec-Driven Development (SDD)**:

1. **Especificación primero**: Toda modificación de requerimientos debe definirse previamente en [`specs/quiz-certification.md`](specs/quiz-certification.md), [`specs/questionnaire-verification-system.md`](specs/questionnaire-verification-system.md) y [`docs/context-map.md`](docs/context-map.md).
2. **Pruebas unitarias obligatorias**: Toda nueva regla o ajuste debe contar con pruebas automatizadas en [`tests/evaluation.test.ts`](tests/evaluation.test.ts) y [`tests/test_cert_audit.py`](tests/test_cert_audit.py).
3. **Fuentes oficiales exclusivas**: Toda explicación, distractor o justificación debe basarse **únicamente en documentación oficial** (Microsoft Learn, GitHub Docs o Anthropic Docs/Skilljar).
4. **Verificación doble antes de enviar cambios**:
   ```bash
   bun test                                  # Pruebas unitarias de la app (50 pass)
   python3 -m unittest tests/test_cert_audit.py # Pruebas del motor de auditoría (13 pass)
   bun run lint                              # Linter con cero advertencias
   bun run build                             # Build de producción sin errores
   ```

---

### 4.1 Mantenimiento y Verificación de Veracidad de Preguntas (Web Scraping y Ahorro de Tokens)

La documentación técnica oficial evoluciona constantemente (nuevas versiones de modelos, cambios de límites, parámetros obsoletos). Para mantener los cuestionarios **100% verídicos y vigentes sin gastar miles de tokens de IA**, el proyecto cuenta con un sistema centralizado de auditoría determinista, scraping anti-ruido y verificación incremental.

#### ¿Cómo funciona el ahorro de tokens?
1. **Reglas Deterministas Locales (0 tokens)**: Valida opciones A-Z, claves huérfanas, dominios oficiales permitidos y detecta patrones de términos obsoletos con expresiones regulares en milisegundos.
2. **Web Scraping Semántico y Detección de Drift (0 tokens)**: Descarga las fuentes oficiales aislando únicamente el contenedor principal (`<main>`, `<article>`), descartando barras de navegación, pies de página, scripts y banners de cookies. Almacena el texto limpio en `source-cache/` y detecta cambios de versión mediante SHA-256 sin falsos positivos cosméticos.
3. **Generador de Contexto Mínimo (`context`)**: Cuando una pregunta requiere revisión por parte de una IA (o de un desarrollador), el script **no envía la página web completa de 5.000 palabras**. Aplica coincidencia léxica local y extrae únicamente el fragmento relevante (< 250 palabras), reduciendo el consumo de tokens de ~8.000 a **~350 tokens por pregunta (>95% de ahorro)**.

#### Comandos de la CLI de Verificación (`scripts/verify_certification.py`)

Desde la raíz del repositorio, ejecutando `python3 scripts/verify_certification.py <cert-id> <comando>`:

```bash
# 1. Consultar estado del inventario de preguntas (0 tokens)
python3 scripts/verify_certification.py gh-300 status --list
python3 scripts/verify_certification.py claude-certified-developer status --list

# 2. Descargar y actualizar fuentes oficiales detectando cambios semánticos
python3 scripts/verify_certification.py gh-300 check-sources
python3 scripts/verify_certification.py claude-certified-developer check-sources --catalog

# 3. Ejecutar auditoría determinista sintáctica y de términos obsoletos (0 tokens)
python3 scripts/verify_certification.py gh-300 audit
python3 scripts/verify_certification.py claude-certified-developer audit

# 4. Generar ficha compacta de contexto para revisión con IA (< 400 tokens)
#    (Extrae únicamente el extracto relevante de la documentación oficial)
python3 scripts/verify_certification.py gh-300 context 1:5
python3 scripts/verify_certification.py claude-certified-developer context 1:9 --format json

# 5. Registrar preguntas revisadas y al día
python3 scripts/verify_certification.py gh-300 mark 1:5 --note "Validado contra Trust Center"
python3 scripts/verify_certification.py claude-certified-developer mark 3:10-20 --note "Sin cambios"

# 6. Marcar preguntas como pendientes de revisión
python3 scripts/verify_certification.py gh-300 flag 2:15 --note "Verificar nuevo límite de contexto"

# 7. Consultar catálogo temático de URLs oficiales
python3 scripts/verify_certification.py claude-certified-developer urls
```

*Selectores válidos*: `3` (todo el Balotario/Test 3), `3:10` (Test 3, Pregunta 10), `3:10-25` (Test 3, Preguntas 10 a 25), `--all` (todo el cuestionario).

---

### 4.2 Cómo Agregar una Nueva Certificación (Paso a Paso)

El sistema utiliza una arquitectura modular y desacoplada basada en configuración declarativa. Para incorporar una certificación técnica nueva (por ejemplo, `azure-ai-fundamentals` o `aws-ai-practitioner`):

#### Paso 1: Crear la carpeta de la certificación
```bash
mkdir -p content/certifications/<nueva-id>
```

#### Paso 2: Crear `balotarios.md`
Redacta las preguntas en el formato estándar del proyecto (`content/certifications/<nueva-id>/balotarios.md`):
```markdown
# Balotario 1

Pregunta 1
¿Cuál es la función principal de...?
A. Opción primera
B. Opción segunda
C. Opción tercera
D. Opción cuarta
Respuesta correcta: A
Explicación
Justificación detallada de por qué A es correcta y las demás no aplican.
Fuente oficial: [Título del recurso oficial](https://learn.microsoft.com/es-es/...)
```

#### Paso 3: Crear `study-guide.md`
Documenta el temario oficial, ponderaciones y competencias de la certificación en `content/certifications/<nueva-id>/study-guide.md`.

#### Paso 4: Crear la configuración declarativa `audit-config.json`
Crea `content/certifications/<nueva-id>/audit-config.json` definiendo la lista blanca de dominios y términos obsoletos:
```json
{
  "cert_id": "<nueva-id>",
  "name": "Nombre de la Certificación",
  "source_file": "balotarios.md",
  "allowed_domains": [
    "learn.microsoft.com",
    "docs.aws.amazon.com"
  ],
  "scraper": {
    "content_selectors": ["main", "article", "#main-content", ".content"],
    "strip_elements": ["nav", "header", "footer", "aside", "script", "style", "noscript", ".feedback-section"],
    "cache_ttl_days": 7,
    "timeout_seconds": 25
  },
  "obsolete_patterns": [
    {
      "pattern": "(?i)\\btermino_obsoleto\\b",
      "message": "Descripción de por qué el término está en desuso",
      "severity": "medium"
    }
  ],
  "official_sources_catalog": {
    "tema-principal": "https://docs.ejemplo.com/..."
  }
}
```

#### Paso 5: Registrar la certificación en la aplicación web
1. En **`scripts_prepare_questions.py`**, añade la entrada a `CERT_CONFIGS`:
   ```python
   "<nueva-id>": {
       "name": "Nombre de la Certificación",
       "source_md": CONTENT_CERT_DIR / "<nueva-id>" / "balotarios.md",
       "target_json": DATA_CERT_DIR / "<nueva-id>.json",
       "expected_count": <numero_de_preguntas>,
       "category_rules": [ ... ],
   }
   ```
2. En **`src/data/certifications/index.ts`**, agrega los metadatos a `CERTIFICATIONS` y vincula los datos JSON a `CERTIFICATION_DATA`.

#### Paso 6: Compilar dataset e inicializar verificación
```bash
# Compilar dataset JSON
python3 scripts_prepare_questions.py <nueva-id>

# Registrar estado inicial verificado de las preguntas
python3 scripts/verify_certification.py <nueva-id> mark --all --note "Carga inicial de certificación"

# Ejecutar auditoría determinista
python3 scripts/verify_certification.py <nueva-id> audit
```

#### Paso 7: Validar la suite de pruebas
```bash
bun test && python3 -m unittest tests/test_cert_audit.py
```

---

### 4.3 Edición y Compilación de Preguntas

Si realizas correcciones o agregas preguntas a las certificaciones existentes:
1. Edita el archivo `content/certifications/<id>/balotarios.md`.
2. Regenera los datasets compilados y corre las pruebas:
   ```bash
   python3 scripts_prepare_questions.py
   bun test && python3 -m unittest tests/test_cert_audit.py && bun run build
   ```
3. Registra la verificación con la CLI:
   ```bash
   python3 scripts/verify_certification.py <id> mark <selector> --note "Corrección aplicada"
   ```

---

## 📁 Estructura del Proyecto

```text
quiz-gh300/
├── content/
│   └── certifications/
│       ├── README.md                      # Guía maestra de auditoría y verificación
│       ├── gh-300/                        # GitHub Copilot GH-300 (458 preguntas)
│       │   ├── audit-config.json          # Configuración declarativa (dominios, regex, scraping)
│       │   ├── audit-report.md            # Informe determinista generado
│       │   ├── audit-report.json          # Datos estructurados exportados
│       │   ├── balotarios.md              # Fuente Markdown de las 458 preguntas
│       │   ├── source-cache/              # Caché local de páginas descargadas y limpias
│       │   ├── source-hashes.json         # Hashes limpios de URLs oficiales
│       │   ├── study-guide.md             # Guía oficial Microsoft GH-300
│       │   └── verification-state.json    # Estado incremental de verificación por pregunta
│       └── claude-certified-developer/    # Claude Certified Developer (308 preguntas)
│           ├── audit-config.json          # Configuración declarativa (dominios, regex, scraping)
│           ├── audit-report.md            # Informe determinista generado
│           ├── audit-report.json          # Datos estructurados exportados
│           ├── balotarios.md              # Fuente Markdown de las 308 preguntas en inglés
│           ├── source-cache/              # Caché local de páginas descargadas y limpias
│           ├── source-hashes.json         # Hashes limpios de URLs oficiales
│           ├── study-guide.md             # Guía oficial Anthropic Partners
│           ├── translations-es.json       # Diccionario bilingüe para alternancia en vivo
│           └── verification-state.json    # Estado incremental de verificación por pregunta
├── scripts/
│   ├── cert_audit/                        # Motor agnóstico común de auditoría y scraping
│   │   ├── config.py                      # Parser y validador de audit-config.json
│   │   ├── context_builder.py             # Generador de contexto mínimo para IA (< 400 tokens)
│   │   ├── parser.py                      # Parser universal de balotarios.md
│   │   ├── reporter.py                    # Generador de audit-report.md y .json
│   │   ├── rules.py                       # Reglas deterministas locales (A-Z, regex, dominios)
│   │   ├── scraper.py                     # Web scraper semántico anti-ruido con caché
│   │   └── state.py                       # Gestor de hashes y verification-state.json
│   └── verify_certification.py            # CLI unificada accesible desde la raíz del proyecto
├── scripts_prepare_questions.py           # Compilador de balotarios Markdown a datasets JSON
├── package.json                           # Scripts y dependencias
├── astro.config.mjs                       # Configuración de Astro con adaptador Node y Tailwind Vite
├── specs/
│   ├── quiz-certification.md              # Especificaciones funcionales de la aplicación
│   └── questionnaire-verification-system.md # Especificación técnica del sistema de verificación
├── docs/
│   └── context-map.md                     # Flujo de datos y arquitectura de la plataforma
├── tests/
│   ├── evaluation.test.ts                 # 50 pruebas unitarias de la aplicación (Bun test)
│   └── test_cert_audit.py                 # 13 pruebas unitarias del motor de auditoría (Python unittest)
├── data/                                  # Base de datos SQLite local (excluida de git)
└── src/
    ├── components/                        # Componentes UI de Astro (CertificationSelector, Hero, Setup, etc.)
    ├── data/
    │   └── certifications/                # Datasets compilados (gh-300.json, claude-certified-developer.json)
    ├── pages/
    │   ├── index.astro                    # Página principal con Islands y selector multi-certificación
    │   └── api/
    │       └── attempts.ts                # Endpoint REST para consultar e insertar intentos en SQLite
    ├── scripts/
    │   └── quiz-client.ts                 # Máquina de estados del examen, traducción y eventos en navegador
    ├── styles/
    │   └── global.css                     # Estilos globales y tokens Tailwind 4
    ├── types/                             # Definiciones de TypeScript (Question, Certification, Attempt)
    └── utils/
        └── evaluation.ts                  # Lógica pura desacoplada (evaluación, scoring, navegación)
```

---

## 📄 Licencia y Créditos

Este proyecto fue creado con fines educativos y de preparación profesional para certificaciones oficiales de Inteligencia Artificial (Microsoft / GitHub Copilot GH-300 y Anthropic Claude Certified Developer). ¡Mucho éxito en tus certificaciones! 🚀
