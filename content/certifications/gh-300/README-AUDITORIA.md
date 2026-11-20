# Automatización de revisión del balotario GH-300

Este directorio contiene un auditor local para ayudar a mantener actualizado `balotarios.md` frente a las fuentes oficiales enlazadas en cada pregunta. Descarga y conserva en caché esas fuentes, ejecuta controles deterministas y genera informes para priorizar la revisión.

> **Importante:** el auditor no decide semánticamente si una respuesta es correcta y no modifica preguntas, claves ni explicaciones. Un estado `verified` significa únicamente que no se activaron las reglas automáticas actuales; no certifica que el contenido sea verdadero o esté completamente actualizado.

## Archivos

- `audit_sources.py`: analiza las preguntas, consulta fuentes oficiales y genera los informes.
- `test_audit_sources.py`: pruebas de parsing, validación de opciones, dominios y normalización de URLs.
- `audit-report.md`: resumen legible de las preguntas con hallazgos.
- `audit-report.json`: datos estructurados por pregunta y metadatos de las fuentes consultadas.
- `source-cache/`: copia local en texto de las fuentes descargadas; sus JSON están excluidos de Git.

## Flujo de trabajo

1. El script lee `balotarios.md` y separa los bloques que comienzan con `Pregunta N`.
2. De cada bloque extrae el enunciado, las opciones, la clave, la explicación y la URL de fuente.
3. Agrupa las preguntas por URL para descargar cada fuente única una sola vez por ejecución.
4. Comprueba que las URLs pertenezcan a dominios oficiales permitidos y descarga el contenido HTML con la biblioteca estándar de Python.
5. Elimina etiquetas HTML, calcula un SHA-256 del texto normalizado y guarda el contenido y metadatos en la caché local.
6. Revisa cada pregunta mediante reglas deterministas: integridad de las opciones y clave, fuentes faltantes o no permitidas, errores de descarga y términos conocidos como potencialmente obsoletos.
7. Calcula también una coincidencia léxica entre la pregunta/respuesta y la fuente, y marca si la explicación usa frases genéricas. Estos dos datos son indicadores auxiliares, no una prueba de veracidad.
8. Escribe el informe Markdown y el JSON. No altera el balotario.

Los dominios oficiales admitidos están definidos en `ALLOWED_DOMAINS` dentro de `audit_sources.py`. Las reglas de obsolescencia se mantienen en `OBSOLETE_PATTERNS`; hay que revisarlas cuando cambien los productos, los planes o la documentación.

## Requisitos

- Python 3 con soporte para anotaciones de tipos modernas.
- Acceso de red a las fuentes oficiales cuando no haya una entrada de caché vigente.
- No requiere paquetes externos, API keys, tokens ni credenciales.

## Ejecución

Desde este directorio:

```bash
python3 audit_sources.py
```

También se puede ejecutar desde la raíz del repositorio:

```bash
python3 content/certifications/gh-300/audit_sources.py
```

Opciones disponibles:

```bash
python3 audit_sources.py --refresh
python3 audit_sources.py --timeout 60
python3 audit_sources.py --fail-on-review
```

- Sin opciones, cada fuente usa una copia cacheada si fue descargada durante los últimos siete días. Si no existe o expiró, se vuelve a descargar.
- `--refresh` ignora la caché y vuelve a descargar todas las fuentes del balotario.
- `--timeout` cambia el tiempo máximo de espera HTTP por fuente; el valor predeterminado es 30 segundos.
- `--fail-on-review` termina con código de salida `1` si existe al menos una pregunta marcada para revisión. Es útil para CI, pero no significa que la auditoría haya encontrado un error semántico confirmado.

Una conexión fallida se registra como hallazgo; la copia anterior no se usa como si fuera una descarga exitosa vigente.

## Caché y detección de cambios

Cada URL normalizada obtiene un nombre de archivo derivado de su hash SHA-256. El archivo de caché contiene:

- URL original y URL final después de redirecciones;
- fecha de descarga y estado;
- hash SHA-256 del texto descargado;
- contenido HTML convertido a texto.

El hash ayuda a comparar versiones, pero el script actual no mantiene un historial de versiones ni resume automáticamente diferencias entre ejecuciones. `--refresh` actualiza la copia local actual. La carpeta está excluida de Git mediante `source-cache/.gitignore`, ya que el contenido se puede regenerar.

## Cómo interpretar los informes

### `audit-report.md`

Muestra el total de preguntas y solo las preguntas con hallazgos. Cada entrada incluye el número global de pregunta, el enunciado, la clave, la fuente y el motivo por el que requiere atención.

### `audit-report.json`

Incluye:

- resumen de preguntas revisadas y hallazgos;
- estado, clave y URL de fuente por pregunta;
- hash y estado de caché de la fuente;
- cantidad de palabras compartidas entre pregunta/respuesta y fuente;
- indicador `generic_explanation`;
- hallazgos estructurados con tipo, severidad y mensaje.

Las preguntas numeradas se repiten en distintos balotarios; el informe les asigna un índice global siguiendo su orden en el archivo.

### Severidad

- **Alta:** clave que refiere a una opción inexistente, opciones no parseables, fuente ausente/no permitida o error al descargarla.
- **Media:** término detectado como potencialmente obsoleto o no respaldado. Es una alerta para revisar; no demuestra por sí sola que la clave esté equivocada.
- **Baja:** el script reserva esta categoría para reglas futuras. La explicación genérica y la coincidencia léxica actualmente no bloquean la pregunta.

## Revisión recomendada de cada alerta

1. Abrir la URL de la fuente oficial indicada y confirmar que sigue vigente y cubre el concepto de la pregunta.
2. Comparar el enunciado y cada opción con esa fuente, no solo el texto de la respuesta seleccionada.
3. Confirmar que la clave resuelve exactamente lo que pregunta el enunciado, incluyendo “selecciona dos” u otras instrucciones.
4. Revisar la explicación: debe justificar por qué la respuesta es correcta y evitar garantías que la documentación no ofrece.
5. Corregir manualmente `balotarios.md` y volver a ejecutar el auditor y sus pruebas.

Una fuente que se descarga correctamente o comparte palabras con la pregunta no demuestra que esa fuente respalde la respuesta. Las explicaciones genéricas pueden pasar los controles automáticos; deben revisarse separadamente para confirmar su exactitud y que expliquen el razonamiento.

## Pruebas

Desde este directorio:

```bash
python3 -m unittest test_audit_sources.py
python3 -m py_compile audit_sources.py test_audit_sources.py
```

Las pruebas no acceden a la red ni verifican la verdad de las 458 respuestas; cubren funciones y estructura del auditor.
