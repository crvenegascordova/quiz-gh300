# Especificación: cuestionario GH-300

## Objetivo
Permitir que una persona practique preguntas de GitHub Copilot GH-300 y reciba retroalimentación inmediata y un resumen medible por competencia.

## Requisitos funcionales

- La sesión inicia con 30 preguntas por defecto.
- La persona puede configurar entre 1 y 420 preguntas y elegir todos los balotarios o uno específico.
- Las preguntas se seleccionan aleatoriamente sin repetir dentro de una sesión.
- Se muestra una pregunta con sus opciones por pantalla.
- `Revisar respuesta` se habilita después de seleccionar una opción y muestra acierto/error, desglose del motivo de descarte para respuestas incorrectas según la documentación oficial de Microsoft/GitHub, explicación oficial y fuente.
- `Continuar` solo se habilita después de revisar y avanza hasta completar la sesión.
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
