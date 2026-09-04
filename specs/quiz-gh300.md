# Especificación: cuestionario GH-300

## Objetivo
Permitir que una persona practique preguntas de GitHub Copilot GH-300 y reciba retroalimentación inmediata y un resumen medible por competencia.

## Requisitos funcionales

- La sesión inicia con 30 preguntas por defecto.
- La persona puede configurar entre 1 y 420 preguntas y elegir todos los balotarios o uno específico.
- Las preguntas se seleccionan aleatoriamente sin repetir dentro de una sesión.
- Se muestra una pregunta con sus opciones por pantalla.
- `Revisar respuesta` se habilita después de seleccionar una opción y muestra acierto/error, desglose del motivo de descarte para respuestas incorrectas según la documentación oficial de Microsoft/GitHub, explicación oficial y fuente. Al revisarse la pregunta, este botón se oculta automáticamente para dejar visible prioritariamente `Continuar`.
- `Continuar` solo se muestra y habilita después de revisar la respuesta, permitiendo avanzar a la siguiente pregunta o a la pantalla de resultados. Al avanzar a la siguiente pregunta, la interfaz realiza un desplazamiento suave (`scrollIntoView`) hacia el inicio de la tarjeta de la pregunta para una experiencia óptima en dispositivos móviles.
- Botón inferior de navegación / salida (`back-button`):
  - En la primera pregunta (`current === 0`): muestra el texto `Salir y configurar`. Si no hay selección activa ni revisión (`selected.length === 0 && !reviewed`), está habilitado y permite volver a la pantalla de configuración. Si hay opción seleccionada o está en revisión, se deshabilita y se torna gris.
  - En preguntas posteriores (`current > 0`): muestra el texto `Pregunta anterior`. Si la pregunta actual no tiene selección ni está en revisión, está habilitado y retrocede a la pregunta anterior mostrándola en **modo revisión solo lectura** (con sus respuestas previas, desglose de revisión y explicación oficial visible, sin poder alterar el puntaje ya registrado). Si hay opción seleccionada o está en revisión, se deshabilita y se torna gris.
- Botón superior de abandono (`abandon-button`): en la cabecera `quiz-topline` se ubica una acción clara `✕ Abandonar examen` con confirmación mediante modal elegante para salir y reiniciar la sesión en cualquier momento.
- Botón de historial local (`history-button`): al hacer clic en `Ver mis exámenes`, se despliega u oculta el panel de historial. Mientras esté abierto/desplegado, la flecha visible en el botón debe apuntar hacia arriba (`↑`) y su atributo de accesibilidad debe ser `aria-expanded="true"`. Al cerrarse, la flecha retorna hacia abajo (`↓`) con `aria-expanded="false"`.
- Accesibilidad y cursores de formulario: todos los elementos interactivos `input` (número de preguntas, checkboxes de opciones) y `select` (origen de balotarios) deben desplegar el cursor de manito interactiva (`cursor: pointer`) al posicionar el cursor sobre ellos, y cursor restringido (`cursor: not-allowed`) en estado deshabilitado.
- El resultado muestra porcentaje, aciertos, errores y desempeño por competencia GH-300.
- La interfaz funciona en pantallas móviles y de escritorio y permite navegación mediante teclado.

## Categorías GH-300

- Uso responsable de GitHub Copilot
- Funciones de GitHub Copilot
- Datos y arquitectura de GitHub Copilot
- Ingeniería de prompts y contexto
- Productividad del desarrollador
- Privacidad, exclusiones y salvaguardas

## Criterios de aceptación

- Cada sesión contiene exactamente el límite solicitado o la cantidad disponible en el balotario elegido.
- No se puede avanzar sin revisar una respuesta.
- Al hacer clic en 'Revisar respuesta', dicho botón se oculta de la vista (`hidden`), quedando visible el botón principal 'Continuar'.
- Al pasar a una nueva pregunta no revisada, 'Revisar respuesta' reaparece (deshabilitado hasta que se marque una opción) y 'Continuar' se oculta.
- Al pulsar 'Continuar', la pantalla se desplaza suavemente hacia el inicio del panel de la pregunta.
- En la pregunta inicial (`current === 0`), el botón inferior dice `Salir y configurar`, activo únicamente con selección vacía; al seleccionar o revisar se deshabilita en gris.
- A partir de la segunda pregunta (`current > 0`), el botón inferior cambia a `Pregunta anterior`, activo únicamente sin selección en la pregunta actual; al pulsar retrocede y muestra la pregunta previa en solo lectura de su revisión ya efectuada.
- La cabecera del examen incluye `✕ Abandonar examen` con confirmación antes de resetear la sesión.
- Al hacer clic en 'Ver mis exámenes', el panel de historial se abre y el icono del botón cambia a flecha arriba `↑` con `aria-expanded="true"`; al pulsar de nuevo se cierra y vuelve a flecha abajo `↓`.
- Al pasar el cursor sobre cualquier `input` o `select`, el puntero del ratón muestra la manito interactiva (`cursor: pointer`), con `cursor: not-allowed` en caso de inputs deshabilitados.
- Al finalizar, la suma de aciertos e incorrectas coincide con el total de preguntas.
- Las preguntas de respuesta múltiple (ej. "A y B", "A, D") se evalúan como correctas si y solo si se seleccionan exactamente todas las opciones requeridas, con total independencia del orden de selección.
- Ante una respuesta incorrecta, el sistema presenta un desglose estructurado indicando cada opción errónea seleccionada y su motivo de descarte fundamentado en fuentes oficiales de Microsoft Learn / GitHub Copilot.
- Cada categoría presentada incluye preguntas respondidas y un porcentaje calculado sobre su propio total.
- Las explicaciones enlazan a una fuente oficial incluida en el dataset.
- Toda modificación de reglas o evaluación debe estar respaldada por pruebas unitarias automatizadas (`bun test`).

## Evolución

- Mantener el dataset separado de la presentación para incorporar nuevas preguntas sin reescribir la interfaz.
- Mantener el estado de sesión aislado para añadir persistencia, historial y modos de examen posteriormente.
- Validar cambios del esquema de preguntas antes de construir la aplicación.
