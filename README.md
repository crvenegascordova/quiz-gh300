# Quiz GH-300

Aplicación web para practicar el examen de certificación **GitHub Copilot GH-300**. Permite configurar la cantidad de preguntas, elegir un balotario, responder y revisar cada respuesta con una explicación y un enlace a la fuente oficial.

Al terminar un examen, la aplicación muestra el porcentaje, los aciertos, los errores y el desempeño por competencia. También guarda cada intento localmente en SQLite para consultar posteriormente la fecha, el balotario, la cantidad de preguntas y los resultados.

## Requisitos

- **Node.js 22.12 o superior**. Se utiliza tanto para ejecutar Astro como para acceder al módulo integrado `node:sqlite`.
- **npm** para instalar dependencias y ejecutar los comandos del proyecto.
- **Bun** es opcional. El repositorio incluye `bun.lock`, por lo que también puede utilizarse como gestor de paquetes si el entorno de Bun funciona correctamente.
- Python es necesario únicamente para regenerar el archivo de preguntas desde `balotarios.md`.

## Tecnologías y dependencias

- **Astro 7**: framework principal de la aplicación.
- **@astrojs/node**: adaptador que permite ejecutar Astro como servidor Node.js.
- **Node.js `node:sqlite`**: almacenamiento local de los intentos de examen, sin necesidad de instalar un servidor de base de datos.
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

El proyecto se compila como servidor (`output: 'server'`) usando `@astrojs/node`. Para probar la compilación:

```bash
npm run preview
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

## Reglas para implementar cambios

Antes de implementar cualquier requerimiento:

1. Consultar `graphify-out/graph.json` para entender la estructura del código y sus relaciones.
2. Revisar los archivos y dependencias involucrados en el cambio.
3. Implementar el cambio siguiendo los patrones existentes.
4. Ejecutar las pruebas o `npm run build` para validar el resultado.
5. Regenerar el grafo con `graphify . --code-only` después de terminar el cambio.

El grafo debe mantenerse actualizado para que los futuros desarrolladores puedan comprender el proyecto antes de modificarlo. Si se necesita analizar también la documentación, se requiere configurar una API key de un proveedor LLM; para el análisis estructural del código no es necesaria.

## Recomendaciones para futuros cambios

- Modificar las preguntas en `balotarios.md`, no directamente en `src/data/questions.json`.
- Regenerar `questions.json` después de cambiar la fuente Markdown.
- Mantener `source.url` y `source.title` para que las explicaciones conserven sus referencias oficiales.
- Revisar `specs/quiz-gh300.md` antes de cambiar el comportamiento del cuestionario.
- Ejecutar `npm run build` después de cada cambio importante.
- No borrar `data/quiz-history.sqlite` si se quieren conservar los intentos locales.

## Documentación relacionada

- `docs/context-map.md`: flujo de datos, estado de la sesión y puntos de extensión.
- `specs/quiz-gh300.md`: requisitos y criterios de aceptación.
- `AGENTS.md`: instrucciones de desarrollo del proyecto.
