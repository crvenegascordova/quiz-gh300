# 🚀 Quiz de Práctica: Certificación GitHub Copilot GH-300

¡Bienvenido/a! 👋 Este proyecto es una plataforma web interactiva de estudio diseñada especialmente para desarrolladores y estudiantes que se están preparando para rendir la certificación oficial **Microsoft / GitHub Copilot (GH-300)**.

Cuenta con **420 preguntas prácticas**, explicaciones pedagógicas detalladas y motivos de descarte fundamentados exclusivamente en la documentación oficial de **Microsoft Learn** y **GitHub Docs**.

---

## 🎯 Contenido de esta guía

1. **[Hito 1: Instalación y práctica en tu equipo local (Lo mínimo para empezar)](#-hito-1-instalación-y-práctica-en-tu-equipo-local)**
2. **[Hito 2: Despliegue gratuito 24/7 en Google Cloud (Always Free)](#-hito-2-despliegue-gratuito-247-en-google-cloud-always-free)**
3. **[Cómo funciona el examen y dinámica de estudio](#-cómo-funciona-el-examen)**
4. **[Desarrollo avanzado y contribución (Spec-Driven Development)](#-desarrollo-avanzado-y-contribución-sdd)**

---

## 💻 Hito 1: Instalación y Práctica en tu Equipo Local

Para comenzar a estudiar en tu propia computadora no necesitas conocimientos avanzados de servidores. Sigue estos simples pasos:

### 1.1 Lo mínimo indispensable (Requisitos previos)

Antes de empezar, asegúrate de tener instalado en tu computadora:

1. **Node.js (versión 22.12 o superior)** o **[Bun](https://bun.sh/)**:
   - Abre una terminal y comprueba si lo tienes con:
     ```bash
     node -v
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
npm install
# (o si prefieres Bun: bun install)

# 4. Iniciar el servidor de práctica local
npm run dev
# (o si prefieres Bun: bun run dev)
```

¡Listo! La terminal te mostrará un enlace local:
👉 **`http://localhost:4321`**

Abre ese enlace en tu navegador web (Chrome, Edge, Firefox, Safari) y ya podrás empezar a resolver tus exámenes de práctica.

---

### 1.3 Verificar que todo funcione con las Pruebas Unitarias

El proyecto cuenta con una suite completa de **pruebas unitarias automatizadas** que validan la lógica de corrección, descarte de distractores y navegación:

```bash
npm test
# (o con Bun: bun test)
```

Verás las **38 pruebas aprobadas en verde**, asegurando que el motor de evaluación funciona correctamente en tu máquina.

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
npm run build
# (o con Bun: bun run build)

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
Description=Quiz GH300 Web App
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

1. **Configura tu práctica**:
   - Selecciona cuántas preguntas deseas resolver (entre 1 y 420).
   - Puedes elegir practicar un **Balotario específico** o elegir **Todos los balotarios** para un examen global.
2. **Responde y recibe retroalimentación inmediata**:
   - Marca una o más casillas según lo solicite la pregunta.
   - Presiona **Revisar respuesta**. Si fallas, el sistema te mostrará un **desglose estructurado** explicando exactamente por qué la opción elegida no es la adecuada, contrastándola con la documentación técnica oficial de Microsoft y GitHub.
3. **Navegación pensada para el estudiante**:
   - Pulsa **Continuar →** para avanzar a la siguiente pregunta (en móvil la pantalla se desplazará suavemente hacia arriba de forma automática).
   - Si deseas repasar una pregunta anterior, pulsa **← Pregunta anterior** para consultarla en **modo solo lectura** con su explicación visible.
   - En cualquier momento puedes usar el botón **✕ Abandonar** en la esquina superior para cancelar el examen mediante un modal elegante de confirmación.
4. **Historial de intentos**:
   - Al finalizar, tus resultados se guardan en la base de datos local SQLite (`data/quiz-history.sqlite`).
   - Puedes hacer clic en **Ver mis exámenes** en la pantalla de inicio para revisar tu progreso histórico y puntajes por competencia.

---

## 🛠️ Desarrollo Avanzado y Contribución (SDD)

Si deseas colaborar, agregar nuevas preguntas o mejorar el diseño, este proyecto sigue estrictamente la metodología **Spec-Driven Development (SDD)**:

1. **Especificación primero**: Toda modificación de requerimientos debe definirse previamente en [`specs/quiz-gh300.md`](specs/quiz-gh300.md) y [`docs/context-map.md`](docs/context-map.md).
2. **Pruebas unitarias obligatorias**: Toda nueva regla o ajuste debe contar con pruebas en [`tests/evaluation.test.ts`](tests/evaluation.test.ts).
3. **Fuentes oficiales exclusivas**: Toda explicación, distractor o justificación debe basarse **únicamente en Microsoft Learn (`learn.microsoft.com`) y GitHub Docs (`docs.github.com`)**.
4. **Verificación doble antes de enviar cambios**:
   ```bash
   bun test          # Todas las pruebas deben pasar (100%)
   npm run build     # El build de producción debe compilar con cero errores
   ```

### ¿Cómo actualizar o editar preguntas?
La fuente de verdad de las preguntas es el archivo Markdown:
```text
balotarios.md
```
Si corriges o agregas preguntas en ese archivo, regenera el archivo JSON compilado con:
```bash
python scripts_prepare_questions.py
# (En Windows: py -3 scripts_prepare_questions.py)
bun test && npm run build
```

---

## 📁 Estructura del Proyecto

```text
quiz-gh300/
├── balotarios.md                  # Fuente original de las 420 preguntas
├── scripts_prepare_questions.py   # Script que convierte balotarios.md en questions.json
├── package.json                   # Scripts y dependencias
├── astro.config.mjs               # Configuración de Astro con adaptador Node
├── specs/
│   └── quiz-gh300.md              # Especificaciones funcionales y criterios de aceptación
├── docs/
│   └── context-map.md             # Flujo de datos y arquitectura del proyecto
├── tests/
│   └── evaluation.test.ts         # Suite de pruebas unitarias automatizadas
├── data/                          # Base de datos SQLite local (excluida de git)
└── src/
    ├── data/
    │   └── questions.json         # Dataset compilado consumido por la app
    ├── utils/
    │   └── evaluation.ts          # Lógica pura desacoplada (evaluación, navegación, rationales)
    └── pages/
        ├── index.astro            # Interfaz SPA completa, componentes y estilos Tailwind
        └── api/
            └── attempts.ts        # Endpoint REST para consultar y guardar intentos en SQLite
```

---

## 📄 Licencia y Créditos

Este proyecto fue creado con fines educativos para apoyar a la comunidad de desarrolladores en su preparación para la certificación oficial **GitHub Copilot GH-300**. ¡Mucho éxito en tu certificación! 🚀
