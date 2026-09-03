# Quiz GH-300

Aplicación web para practicar el examen de certificación **GitHub Copilot GH-300**. Permite configurar la cantidad de preguntas, elegir un balotario, responder y revisar cada respuesta con una explicación y un enlace a la fuente oficial.

Al terminar un examen, la aplicación muestra el porcentaje, los aciertos, los errores y el desempeño por competencia. También guarda cada intento localmente en SQLite para consultar posteriormente la fecha, el balotario, la cantidad de preguntas y los resultados.

## Requisitos

- **Node.js 22.12 o superior** o **Bun**. Se utiliza tanto para ejecutar Astro como para acceder a la base de datos SQLite integrada (`node:sqlite` en Node o `bun:sqlite` en Bun).
- **npm** o **Bun** para instalar dependencias y ejecutar los comandos del proyecto.
- Python es necesario únicamente para regenerar el archivo de preguntas desde `balotarios.md`.

## Tecnologías y dependencias

- **Astro 7**: framework principal de la aplicación.
- **@astrojs/node**: adaptador que permite ejecutar Astro como servidor Node.js o Bun.
- **SQLite nativo (`node:sqlite` / `bun:sqlite`)**: almacenamiento local de los intentos de examen sin necesidad de instalar un servidor de base de datos externo.
- **JavaScript/TypeScript**: lógica del navegador y endpoint de historial.
- **Tailwind CSS 4**: estilos utilitarios y tokens visuales definidos en `src/pages/index.astro`.
- **@tailwindcss/vite**: integración de Tailwind CSS con el proceso de build de Astro.

Las dependencias de JavaScript están declaradas en `package.json`. El archivo `package-lock.json` o `bun.lock` registra las versiones instaladas según el gestor utilizado. La configuración de Tailwind se carga mediante `@import "tailwindcss"` y el plugin de Vite en `astro.config.mjs`; no es necesario crear un archivo `tailwind.config.js` para esta configuración.

## Instalación

Desde este directorio:

```bash
npm install
```

Si se prefiere Bun:

```bash
bun install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible normalmente en `http://localhost:4321`.

También se puede ejecutar con Bun:

```bash
bun run dev
```

## Crear una compilación de producción

```bash
npm run build
```

```bash
npm run preview
```

## Pruebas unitarias automatizadas

El proyecto incluye una suite de pruebas unitarias automatizadas en [`tests/evaluation.test.ts`](file:///Users/cristianvenegas/projects/quiz-gh300/tests/evaluation.test.ts) que valida:
- La verificación y registro de finalización de preguntas (`isQuestionCompleted`, `recordQuestionAnswer`).
- La correcta evaluación de opciones simples, dobles y múltiples (`"A y B"`, `"A, D"`, etc.), resolviendo problemas de desorden o sobreselección.
- La generación de motivos pedagógicos de descarte para respuestas incorrectas fundamentados en fuentes oficiales de Microsoft y GitHub Copilot (`buildIncorrectRationale`).
- El desglose estructurado completo del diagnóstico de revisión (`buildReviewBreakdown`).

Para ejecutar las pruebas:

```bash
bun test
# o:
npm test
```

## Fuente de las preguntas

La fuente principal de información es:

```text
balotarios.md
```

Este archivo contiene los 6 balotarios, con 420 preguntas, opciones, respuestas correctas, explicaciones y fuentes oficiales.

El flujo de datos es:

```text
balotarios.md
    ↓
scripts_prepare_questions.py
    ↓
src/data/questions.json
    ↓
src/pages/index.astro
```

Para regenerar el dataset después de modificar `balotarios.md`:

```bash
python scripts_prepare_questions.py
```

En Windows también puede ser necesario utilizar:

```bash
py -3 scripts_prepare_questions.py
```

El script valida que existan exactamente 420 preguntas. Después de regenerar los datos, hay que ejecutar `npm run build` para comprobar que la aplicación sigue compilando.

Los scripts auxiliares `ordenar_balotarios.py` y `generar_explicaciones.py` también utilizan `quiz-gh300/balotarios.md` como fuente.

## Estructura general

```text
quiz-gh300/
├── balotarios.md                  # Fuente editable de las preguntas
├── package.json                   # Dependencias y comandos del proyecto
├── package-lock.json              # Versiones instaladas con npm
├── bun.lock                       # Versiones instaladas con Bun
├── astro.config.mjs               # Configuración de Astro y del adaptador Node
├── scripts_prepare_questions.py   # Convierte Markdown en JSON
├── public/                        # Archivos públicos, como favicon
├── src/
│   ├── data/
│   │   └── questions.json         # Dataset consumido por la interfaz
│   └── pages/
│       ├── index.astro            # Interfaz, cuestionario y resultados
│       └── api/
│           └── attempts.ts        # API para guardar y consultar intentos
├── docs/
│   └── context-map.md             # Mapa de contexto y flujo de datos
└── specs/
    └── quiz-gh300.md              # Requisitos funcionales
```

## Persistencia de los intentos

El endpoint `src/pages/api/attempts.ts` crea automáticamente la base de datos cuando se utiliza por primera vez. El archivo se guarda en:

```text
data/quiz-history.sqlite
```

La carpeta `data/` está excluida de Git porque contiene datos locales de cada usuario. La tabla `attempts` almacena la fecha, el balotario, el total de preguntas, los aciertos, los errores, el porcentaje y el resumen por categoría.

La interfaz consulta los intentos mediante `GET /api/attempts` y guarda un nuevo registro mediante `POST /api/attempts` al finalizar un examen.

## Flujo básico de uso

1. Abrir la aplicación.
2. Elegir la cantidad de preguntas y el balotario.
3. Comenzar el examen.
4. Seleccionar una o más opciones y pulsar **Revisar respuesta**.
5. Leer la explicación y continuar hasta terminar.
6. Consultar el resultado final.
7. Pulsar **Ver mis exámenes** para revisar el historial guardado en SQLite.

## Despliegue gratuito en Google Cloud (Always Free)

Es posible alojar este proyecto permanentemente de forma gratuita utilizando una máquina virtual **`e2-micro`** en Google Cloud Compute Engine (bajo el nivel *Always Free*).

> **Nota sobre el rendimiento:** La instancia `e2-micro` tiene solo 1 GB de memoria RAM. Compilar Astro y Tailwind CSS directamente en el servidor puede agotar la memoria y congelar la máquina. Por ello, **se compila en tu máquina local** y solo se suben los archivos generados de producción.

### 1. Crear la máquina virtual en Google Cloud

En Google Cloud Console (**Compute Engine > Instancias de VM > Crear instancia**):

1. **Región**: Selecciona una región gratuita de EE.UU., como `us-central1` (Iowa), `us-east1` (Carolina del Sur) o `us-west1` (Oregón).
2. **Tipo de máquina**: Serie **E2**, tipo **`e2-micro`** (2 vCPU compartidas, 1 GB de memoria).
3. **Disco de arranque**: Haz clic en *Cambiar*:
   - Sistema operativo: **Debian 12/13** o **Ubuntu 24.04 LTS**.
   - Tipo de disco: **Disco persistente estándar** (*Standard persistent disk*).
   - Tamaño: **10 a 30 GB** (hasta 30 GB entra en la cuota gratuita mensual).
4. **Firewall**: Marca las casillas **Permitir tráfico HTTP** y **Permitir tráfico HTTPS**.
5. Haz clic en **Crear**.

*(La consola mostrará una estimación de ~$7 USD/mes, pero Google descuenta el 100% de esta máquina al procesar la factura mensual gracias al crédito Always Free).*

### 2. Compilar y empaquetar en local

En tu máquina de desarrollo, compila el proyecto y empaqueta solo los archivos de producción:

```bash
# 1. Compilar el proyecto
bun run build    # o: npm run build

# 2. Empaquetar el build y package.json (pesa aprox. 200 KB)
tar -czf deploy.tar.gz dist/ package.json
```

### 3. Subir y configurar el servidor

1. En la consola de Google Cloud, pulsa el botón **SSH** junto a tu máquina virtual para abrir la terminal web.
2. En la esquina superior derecha de la ventana SSH, haz clic en el ícono de engranaje ⚙️ y selecciona **Subir archivo** (*Upload file*), subiendo el archivo `deploy.tar.gz`.
3. En la terminal SSH del servidor, ejecuta los siguientes comandos para configurar la memoria de intercambio (SWAP), instalar Bun y preparar la aplicación:

```bash
# Configurar 2 GB de memoria SWAP (indispensable para estabilidad en 1 GB de RAM)
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab

# Instalar unzip y el runtime Bun
sudo apt update && sudo apt install -y unzip
curl -fsSL https://bun.sh/install | bash
export PATH="$HOME/.bun/bin:$PATH"

# Descomprimir la app e instalar solo dependencias de producción
mkdir -p ~/quiz
tar -xzf deploy.tar.gz -C ~/quiz
cd ~/quiz
~/.bun/bin/bun install --production
mkdir -p data
```

### 4. Configurar el servicio persistente con systemd

Para que la aplicación se ejecute en segundo plano en el puerto web estándar (**80**) y se reinicie automáticamente ante caídas o reinicios del servidor:

```bash
sudo tee /etc/systemd/system/quiz.service > /dev/null <<EOF
[Unit]
Description=Quiz GH300 Astro App
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

# Iniciar y habilitar el servicio
sudo systemctl daemon-reload
sudo systemctl enable --now quiz
```

Abre en tu navegador la IP externa de tu máquina virtual (`http://<TU_IP_EXTERNA>`) y la aplicación ya estará en línea.

### 5. (Opcional) Alerta de facturación preventiva

Para tener total tranquilidad y evitar cobros por consumos imprevistos, puedes crear una alerta de presupuesto mensual desde tu terminal con `gcloud`:

```bash
# Iniciar sesión en Google Cloud CLI
gcloud auth login

# Crear alerta de presupuesto mensual (ejemplo de $1.000 CLP / ~$1 USD)
gcloud billing budgets create --billing-account=<TU_BILLING_ACCOUNT_ID> \
  --display-name="Alerta Free Tier" \
  --budget-amount=1000CLP \
  --calendar-period=month \
  --threshold-rule=percent=0.50 \
  --threshold-rule=percent=0.90 \
  --threshold-rule=percent=1.00 \
  --threshold-rule=percent=1.00,basis=forecasted-spend
```

## Reglas para implementar cambios (Spec-Driven Development)

De aquí en adelante, **todo requerimiento debe procesarse bajo la metodología Spec-Driven Development (SDD)**:

1. **Especificar primero (SDD)**: Antes de codificar, consultar `specs/quiz-gh300.md`, `docs/context-map.md` y `graphify-out/graph.json` para documentar la solución y los criterios de aceptación.
2. **Pruebas unitarias obligatorias**: Cada requerimiento implica **crear o actualizar pruebas unitarias** en `tests/` para validar tanto los flujos exitosos como los casos límite y de error.
3. **Fuentes oficiales exclusivas**: Toda justificación, explicación de descarte o respuesta debe fundamentarse **únicamente en documentación oficial de Microsoft Learn y GitHub Copilot**.
4. **Implementación modular**: Mantener la lógica pura de evaluación y reglas desacoplada en `src/utils/` y preservar las convenciones de interfaz en español.
5. **Verificación integral**: Ejecutar obligatoriamente `bun test` (o `npm test`) y `npm run build` para asegurar 100% de pruebas en verde y compilación sin errores.
6. **Grafo actualizado**: Regenerar el grafo de Graphify (`graphify . --code-only`) ante cambios estructurales significativos.

## Recomendaciones para futuros cambios

- Modificar las preguntas en `balotarios.md`, no directamente en `src/data/questions.json`.
- Regenerar `questions.json` (`python scripts_prepare_questions.py`) después de cambiar la fuente Markdown.
- Mantener `source.url` y `source.title` enlazando exclusivamente a fuentes oficiales de Microsoft y GitHub.
- Actualizar `tests/evaluation.test.ts` cada vez que se ajuste la lógica de evaluación, completitud o cálculo de puntajes.
- Ejecutar `bun test && npm run build` antes de realizar commits o despliegues.
- No borrar `data/quiz-history.sqlite` si se desean conservar los intentos locales.

## Documentación relacionada

- `docs/context-map.md`: flujo de datos, estado de la sesión y puntos de extensión.
- `specs/quiz-gh300.md`: requisitos y criterios de aceptación.
- `AGENTS.md`: instrucciones de desarrollo del proyecto.
