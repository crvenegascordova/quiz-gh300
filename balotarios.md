# Balotario 1

Cuestionario de práctica: GitHub Copilot GH-300
Preguntas traducidas al español con clave de respuestas
Preguntas
Pregunta 1
Eres un desarrollador que trabaja con código sensible y tu empresa está preocupada por el manejo de
datos de GitHub Copilot. Necesitas explicar cómo Copilot procesa los datos de entrada, como código y
comentarios, y si el código propietario se almacena o se comparte. ¿Qué afirmación describe mejor el
manejo de datos de GitHub Copilot?
A. GitHub Copilot almacena permanentemente todo el código del usuario y los datos del proyecto para
mejorar continuamente su modelo de machine learning.
B. GitHub Copilot procesa temporalmente las entradas de código en servidores externos, pero no almacena
el código ni usa las entradas del usuario para reentrenar el modelo subyacente.
C. GitHub Copilot almacena todo el código del usuario para mejorar futuras sugerencias y puede
compartirlo con otros usuarios.
D. GitHub Copilot no almacena código específico del usuario, pero envía snippets anonimizados al modelo
Codex para análisis y generación de sugerencias.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Docs: alojamiento de modelos](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)

Pregunta 2
Una corporación multinacional con estrictos requisitos de seguridad y regulación necesita GitHub Copilot
con SSO, logs de auditoría detallados y despliegue tanto en entornos cloud como self-hosted. ¿Qué plan
satisface mejor estas necesidades?
A. Copilot Individual.
B. Copilot Enterprise.
C. Copilot Business para entornos no GHE.
D. Copilot Business.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 3
¿Cuál es la secuencia correcta del ciclo de vida del pipeline de datos de GitHub Copilot para generar una
sugerencia de código, desde la solicitud inicial hasta su aparición en el IDE, incluyendo procesamiento
backend y postprocesamiento?
A. La solicitud se envía desde el IDE directamente al modelo de GitHub Copilot, que procesa los datos, los
envía a un proxy para postprocesamiento y devuelve la respuesta al IDE.
B. La solicitud se envía desde el IDE a los servidores de GitHub, donde el proxy hace postprocesamiento
antes de enviarla al modelo.
C. La solicitud se envía a los servidores de GitHub Copilot, pasa por un proxy que preprocesa la entrada,
luego va al modelo, y la respuesta se postprocesa en el proxy antes de volver al IDE.
D. La solicitud se procesa localmente en el IDE mediante un proxy sin transmitir datos a servidores
externos.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 4
Como desarrollador individual que usa GitHub Copilot Individual en un IDE JetBrains como IntelliJ IDEA,
quieres aprovechar sus funciones para mejorar tu productividad. ¿Qué característica clave puedes usar en
el IDE para generar código de manera más eficiente?
A. Usar Copilot para refactorizar automáticamente todo el codebase y aplicar buenas prácticas.
B. Usar una función de debugging por chat para identificar problemas y proponer soluciones.
C. Habilitar Copilot para ejecutar pruebas unitarias y generar reportes de test.
D. Usar las sugerencias inline de Copilot, que proporcionan código mientras escribes según el contexto
actual.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 5
Estás programando en Python con GitHub Copilot habilitado en tu IDE. Mientras escribes, Copilot sugiere
snippets. ¿Cómo procesa tu entrada y genera sugerencias?
A. Recupera código desde una base de datos local preentrenada en tu equipo y lo compara con proyectos
anteriores.
B. Transmite tu código a un modelo de IA en la nube, analiza tu código y repositorios marcados como
favoritos, y genera sugerencias personalizadas.
C. Envía tu código a un servidor remoto, lo compara con repositorios open-source y copia código de
proyectos populares.
D. Envía tu código y contexto cercano a un modelo de lenguaje grande alojado remotamente, entrenado
con repositorios públicos y otras fuentes, y devuelve sugerencias relevantes.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 6
Como gerente de seguridad IT, necesitas asegurar que el uso de GitHub Copilot Business sea registrado y
monitoreado para cumplimiento. ¿Qué función proporciona visibilidad sobre acciones de usuarios y
administradores, incluyendo cambios de configuración, sugerencias de código y modificaciones de acceso?
A. Logs individuales de acceso de usuario para monitorear actividades específicas de desarrolladores.
B. Logs de auditoría organizacionales que rastrean acciones significativas relacionadas con Copilot.
C. Alertas en tiempo real para acciones sensibles como acceso a código propietario.
D. Permisos granulares para controlar acceso a Copilot por proyecto.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 7
Una institución financiera está modernizando un sistema legacy basado en COBOL migrando lógica crítica
de negocio a Python, manteniendo precisión y cumplimiento. El equipo quiere usar GitHub Copilot para
acelerar el proceso. ¿Cuál representa el mejor enfoque?
A. Reemplazar toda la aplicación COBOL con código generado por IA sin conocer la lógica original.
B. Permitir que Copilot reescriba toda la aplicación COBOL en Python sin verificación humana.
C. Desplegar directamente en producción el código Python generado por Copilot, asumiendo que es
correcto.
D. Usar Copilot para generar código Python a partir de funciones COBOL y validar manualmente corrección
y cumplimiento.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: auditoría de GitHub Copilot](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/review-audit-logs)

Pregunta 8
Trabajas con una función Python find_max(numbers) que devuelve el número más grande de una lista.
Para obtener sugerencias completas de pruebas con casos borde usando GitHub Copilot, ¿qué enfoque
deberías tomar?
A. Confiar en que Copilot genere una prueba básica con tres números y probar manualmente los demás
casos.
B. Pedir a Copilot casos de prueba describiendo edge cases como lista vacía, lista de un solo elemento o
lista con elementos idénticos.
C. Pedir pruebas solo para listas con números positivos, asumiendo que los negativos no son relevantes.
D. Pedir pruebas con grandes conjuntos de números aleatorios para asegurar escalabilidad.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque usa Copilot como apoyo para proponer pruebas y casos límite, no como sustituto de la validación. Las pruebas generadas deben revisarse, ejecutarse y ampliarse para cubrir comportamiento esperado, entradas inválidas, errores y requisitos de seguridad o rendimiento.

Fuente oficial: [GitHub Docs: escribir pruebas con GitHub Copilot](https://docs.github.com/en/copilot/tutorials/write-tests)

Pregunta 9
Estás desarrollando una aplicación Python y quieres implementar pruebas unitarias para una función que
calcula el factorial. La función ya existe y quieres usar GitHub Copilot para crear pruebas útiles. ¿Cuál es el
enfoque correcto?
A. Confiar únicamente en las sugerencias de Copilot, asumiendo que cubrirán todos los casos borde.
B. Pedir a Copilot una nueva implementación del factorial junto con sus pruebas.
C. Empezar a escribir la definición de prueba, por ejemplo def test_factorial(): , y dejar que Copilot
sugiera casos basados en la función.
D. Pedir directamente pruebas de integración en lugar de pruebas unitarias.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque usa Copilot como apoyo para proponer pruebas y casos límite, no como sustituto de la validación. Las pruebas generadas deben revisarse, ejecutarse y ampliarse para cubrir comportamiento esperado, entradas inválidas, errores y requisitos de seguridad o rendimiento.

Fuente oficial: [GitHub Docs: escribir pruebas con GitHub Copilot](https://docs.github.com/en/copilot/tutorials/write-tests)

Pregunta 10
Eres administrador de una organización GitHub y debes automatizar la administración de suscripciones
GitHub Copilot Business. ¿Qué endpoint REST API debes usar para ver los detalles actuales de la suscripción
y cuál es el método correcto de autenticación?
A. GET /orgs/{org}/copilot_subscription con personal access token.
B. GET /orgs/{org}/copilot_subscription con token OAuth2.
C. GET /orgs/{org}/copilot_subscription con JWT.
D. POST /orgs/{org}/copilot_subscription con token OAuth2.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 11
Has usado GitHub Copilot en tu editor, pero ahora quieres explorar Copilot en la CLI. Buscas un comando
que muestre ayuda o documentación sobre los comandos disponibles. ¿Qué comando deberías usar?
A. copilot commands
B. copilot doc
C. copilot help
D. copilot list

Respuesta correcta: C

Explicación
La opción C es la adecuada porque corresponde al uso de Copilot desde la terminal para obtener orientación o proponer comandos. Los comandos generados deben revisarse antes de ejecutarse, especialmente si pueden modificar archivos, repositorios o infraestructura.

Fuente oficial: [GitHub Docs: GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli)

Pregunta 12
Tu equipo desarrolla una aplicación financiera y configuró exclusiones de contenido en copilot.yaml
para evitar que GitHub Copilot acceda a algoritmos financieros sensibles. Algunos desarrolladores temen
que excluir muchos archivos limite las sugerencias útiles. ¿Qué describe correctamente el impacto de
excluir contenido?
A. Excluir archivos deshabilita todas las sugerencias para todo el repositorio.
B. Excluir archivos impide que Copilot genere sugerencias en todos los proyectos asociados a la cuenta.
C. Las exclusiones solo afectan el archivo donde se definen, no otros archivos.
D. Excluir ciertos archivos evita sugerencias basadas en ese contenido, pero Copilot puede seguir usando el
resto del proyecto.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque aplica una salvaguarda explícita para limitar el contexto que Copilot puede usar. La exclusión de contenido debe configurarse en los controles admitidos por la organización; revisar el resultado, proteger los secretos y aplicar las obligaciones de privacidad siguen siendo responsabilidad del equipo.

Fuente oficial: [GitHub Docs: exclusión de contenido](https://docs.github.com/en/copilot/concepts/content-exclusion)

Pregunta 13
Estás optimizando una función que procesa grandes arrays de datos de usuarios y quieres mejorar
rendimiento manteniendo seguridad, como validación de entradas y protección contra buffer overflow.
¿Qué sugerencia es mejor?
A. Sanitizar entradas solo con expresiones regulares sin manejar casos borde.
B. Eliminar validación de entradas para mejorar velocidad.
C. Reemplazar la función por una solución recursiva para reducir bucles.
D. Usar caché para resultados previamente procesados.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 14
Estás depurando una fuga de memoria en una aplicación web Node.js que consume memoria
gradualmente. Ya identificaste que existe la fuga, pero no su origen. ¿Cómo puede ayudar mejor GitHub
Copilot?
A. Reescribiendo automáticamente las partes de manejo de memoria, asumiendo que resolverá el
problema.
B. Generando funciones para monitorear uso de memoria en intervalos específicos y ayudar a identificar
dónde ocurre la fuga.
C. Sugiriendo optimizaciones aleatorias en todo el codebase.
D. Reemplazando completamente los pasos manuales de debugging.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 15
Estás configurando una Knowledge Base interna para tu equipo de ingeniería que usa GitHub Copilot. Para
mejorar consistencia de código y buenas prácticas, ¿qué información debería incluirse para aportar mayor
valor?
A. Organigramas y estructura jerárquica del equipo.
B. Snippets y templates que sigan estándares de codificación y patrones de diseño de la empresa.
C. Una lista completa de errores y bugs comunes del equipo.
D. Reportes detallados de bugs históricos con logs y patch notes.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 16
Usas GitHub Copilot para generar una función Python que recibe una lista de enteros y un valor objetivo, y
retorna dos números que sumen ese objetivo. Debe ser eficiente y manejar casos borde como que no exista
un par válido. ¿Cuál prompt es mejor?
A. “Write a Python function that returns two integers from a list that add up to a target sum.”
B. “Create a Python function that accepts a list and a target sum and returns two numbers from the list that
add up to the target sum. If no such pair exists, return None.”
C. “Create Python code that implements an algorithm for finding a pair of numbers in a list that sum to a
target value.”
D. “Generate Python code for a function that finds two integers in a list that sum to a target, and handle
edge cases like no pair found. Prioritize an efficient approach.”

Respuesta correcta: D

Explicación
La opción D es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 17
Como desarrollador en proyectos sensibles, te preocupa la privacidad de datos y cómo GitHub Copilot
maneja datos durante sugerencias de código. ¿Qué afirmaciones describen correctamente el pipeline de
datos de Copilot? Selecciona dos.
A. Las sugerencias generadas por Copilot siempre se conservan para entrenamiento futuro del modelo.
B. Copilot tiene acceso a todo el codebase de tus repositorios privados en todo momento.
C. Copilot solo procesa pequeños snippets de contexto de código, no todo el proyecto.
D. Copilot usa técnicas de privacidad diferencial para evitar que el modelo recuerde datos específicos de
sesiones individuales.

Respuesta correcta: C y D

Explicación
La opción C y D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 18
Tu organización quiere crear una Knowledge Base para mejorar calidad y consistencia de código con GitHub
Copilot Enterprise. ¿Cuál describe mejor cómo funciona la Knowledge Base?
A. Convierte documentación y código existentes en nuevos datos de entrenamiento para el modelo de
Copilot.
B. Proporciona sugerencias de debugging en tiempo real basadas en incidentes pasados.
C. Permite almacenar y compartir estándares de codificación, templates y snippets reutilizables que Copilot
prioriza al sugerir código.
D. Entrena el modelo de Copilot en tiempo real con snippets internos.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 19
Un equipo usa GitHub Copilot Enterprise para mejorar eficiencia. El líder de ingeniería quiere que los
desarrolladores usen resúmenes de pull request generados por Copilot. ¿Qué afirmación describe
correctamente cómo se generan y sus limitaciones?
A. Los resúmenes se generan automáticamente según mensajes de commit, cambios de archivos y
contexto general del proyecto.
B. Garantizan que todos los commits sigan Conventional Commits.
C. Los desarrolladores pueden entrenar el modelo de PR summaries con el estilo de la organización.
D. Detectan y explican automáticamente la intención completa de los cambios, garantizando cumplimiento.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 20
GitHub Copilot construye un prompt antes de enviarlo al modelo de IA para generar sugerencias. ¿Qué
describe mejor cómo construye ese prompt?
A. El usuario define manualmente la porción exacta de código incluida en el prompt.
B. Copilot extrae partes relevantes del archivo actual, incluyendo código cercano, comentarios, firmas de
función y posición del cursor.
C. Copilot considera solo las últimas líneas antes del cursor e ignora comentarios, funciones e imports.
D. Copilot considera todo el codebase y envía el proyecto completo.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 21
Como administrador GitHub, necesitas rastrear el uso de GitHub Copilot Business mediante audit logs para
asegurar cumplimiento. ¿Qué información puedes obtener?
A. Los prompts detallados ingresados por los desarrolladores.
B. Los repositorios exactos donde se usó Copilot.
C. Las líneas específicas sugeridas por Copilot.
D. Si un usuario habilitó o deshabilitó Copilot en su configuración.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 22
Quieres entender el flujo de datos cuando GitHub Copilot genera una sugerencia en tu IDE. ¿Cuál visualiza
correctamente el ciclo de vida?
A. Código de entrada → IDE genera sugerencias aleatorias → cloud verifica → sugerencia final.
B. Código de entrada → modelo preentrenado en la nube → tokenización y análisis del input → sugerencia
contextual.
C. Código de entrada → modelo local → cloud processing → sugerencia.
D. Código de entrada → repositorio GitHub local → modelo preentrenado → sugerencia desde IDE.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 23
¿Cuál afirmación describe correctamente una limitación de GitHub Copilot al sugerir completions de
código?
A. Puede generar código sintácticamente correcto pero sin relevancia funcional para el contexto específico
del usuario.
B. Genera código completamente optimizado y libre de vulnerabilidades para cualquier lenguaje.
C. Garantiza código sin bugs si el usuario escribe comentarios claros.
D. Garantiza cumplimiento con todos los requisitos de licenciamiento.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 24
Como usuario nuevo de GitHub Copilot Chat, encuentras que sus sugerencias no sirven para tu caso y que
la documentación está desactualizada. Para mejorar futuras actualizaciones, ¿cuál es la forma correcta de
enviar feedback a GitHub?
A. Usar directamente los botones thumbs-up o thumbs-down en Copilot Chat.
B. Abrir un issue en el repositorio GitHub de Copilot.
C. Enviar únicamente un correo al equipo de soporte.
D. No existe método oficial para enviar feedback.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 25
Desarrollas un proyecto privado de healthcare con código propietario y datos de pacientes que requiere
cumplimiento HIPAA. Tu equipo usa GitHub Copilot, pero debe evitar acceso a datos sensibles. ¿Cuál es la
mejor forma de configurar Copilot?
A. Deshabilitar GitHub Copilot en todo el repositorio.
B. Activar reglas de exclusión a nivel repositorio para archivos y directorios con código propietario o datos
de pacientes.
C. Hacer privado el repositorio para excluirlo automáticamente de Copilot.
D. Agregar archivos sensibles a .gitignore .

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 26
Usas GitHub Copilot para generar funciones Python de un pipeline de procesamiento de datos. Necesitas
crear un prompt que maximice la calidad de salida. ¿Qué estrategia es más efectiva?
A. Usar lenguaje claro y estructurado, ejemplos de entrada/salida y restricciones o casos borde.
B. Dar una descripción general de una sola oración.
C. Incluir la mayor cantidad posible de palabras clave relacionadas.
D. Mezclar varios lenguajes de programación en el mismo prompt.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 27
DevTech Inc. adoptó GitHub Copilot Business para todos los desarrolladores. Como administrador GitHub,
debes configurar políticas organizacionales para evitar sugerencias de repositorios públicos y restringir
acceso a equipos específicos. ¿Qué pasos deberías tomar?
A. Configurar políticas mediante security policies generales en Admin Console.
B. Usar GitHub Actions para aplicar políticas de Copilot en todos los repositorios.
C. Habilitar políticas de Copilot Business a nivel enterprise y desactivar sugerencias provenientes de
repositorios públicos.
D. Asignar licencias a nivel organización y configurar políticas por repositorio.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 28
Evalúas GitHub Copilot para un equipo grande en una organización mediana que trabaja con repos públicos
y privados. Necesitas gestionar costos, seguridad de código y funciones enterprise. ¿Qué planes se ajustan
mejor? Selecciona dos.
A. GitHub Copilot for Enterprise.
B. GitHub Copilot for Individuals, plan pagado.
C. GitHub Copilot for Individuals, gratis para repos públicos.
D. GitHub Copilot for Business.

Respuesta correcta: A y D

Explicación
La opción A y D es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 29
Construyes una funcionalidad e-commerce para calcular el precio total de items en un carrito, incluyendo
impuestos y descuentos, usando JavaScript. Con poco tiempo, decides usar Copilot. ¿Qué describe mejor
cómo puede ayudarte?
A. Puede garantizar mejores prácticas y optimización para e-commerce a gran escala.
B. Puede proporcionar snippets para operaciones básicas como total, impuestos y descuentos, ahorrando
tiempo en tareas repetitivas.
C. Puede escribir toda la lógica, incluyendo leyes fiscales y reglas de descuento, sin input del desarrollador.
D. Puede reemplazar pruebas manuales generando tests que cubren todos los edge cases.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 30
Trabajas en JavaScript con estilos inconsistentes y documentación incompleta. Las sugerencias de Copilot
para una función deep clone son incompletas por un prompt poco claro. ¿Qué prompt refinado daría el
resultado más preciso?
A. “Write a JavaScript deep clone function without recursion and avoid arrays.”
B. “Write a JavaScript function to clone an object.”
C. “Write a JavaScript function to perform a deep clone of a JavaScript object using recursion, ensuring it
handles arrays and objects.”
D. “Write a JavaScript function that copies properties of an object.”

Respuesta correcta: C

Explicación
La opción C es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 31
Como desarrollador en una institución financiera usando Copilot para datos sensibles como SSNs, datos
bancarios y transacciones, tu equipo se preocupa por IA responsable y riesgos legales. ¿Qué acción
demuestra mejor un uso responsable?
A. Usar Copilot para generar código y revisar todo código generado, especialmente secciones que manejan
datos sensibles y cifrado, antes de producción.
B. Confiar completamente en Copilot para implementar cifrado porque está entrenado con mucho código.
C. Usar código generado para datos sensibles sin revisión porque Copilot se asume confiable.
D. Permitir Copilot en todas las áreas sin consultar legal o compliance.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 32
Una empresa que usa GitHub Copilot Business quiere entender cómo los audit logs apoyan políticas
internas de seguridad. ¿Cuál opción ilustra mejor un beneficio de seguridad?
A. Proporcionan reportes detallados de errores en sugerencias de Copilot.
B. Bloquean automáticamente intentos de inicio de sesión sospechosos.
C. Capturan decisiones internas del modelo para explicar cada sugerencia.
D. Permiten a administradores identificar acceso no autorizado a GitHub Copilot.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 33
Como administrador IT de GitHub Copilot Business, necesitas automatizar la administración de
suscripciones con REST API. ¿Qué endpoint y método debes usar para listar suscripciones activas y qué
permisos se requieren?
A. POST /orgs/{org}/copilot/assign-license con scope write:org .
B. GET /users/{username}/copilot/licenses con scope read:org .
C. GET /orgs/{org}/copilot/subscriptions con scope admin:org .
D. GET /orgs/{org}/copilot/licenses con scope admin:org .

Respuesta correcta: C

Explicación
La opción C es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 34
Tu equipo usa GitHub Copilot for Individuals, pero ahora trabaja en un repositorio privado con código
sensible. Necesitan mejor seguridad y gestión de permisos. ¿Qué plan ofrece estas funciones?
A. GitHub Copilot for Open-Source Projects.
B. GitHub Copilot Free Plan.
C. GitHub Copilot for Business.
D. Mantener GitHub Copilot for Individuals.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque aplica una salvaguarda explícita para limitar el contexto que Copilot puede usar. La exclusión de contenido debe configurarse en los controles admitidos por la organización; revisar el resultado, proteger los secretos y aplicar las obligaciones de privacidad siguen siendo responsabilidad del equipo.

Fuente oficial: [GitHub Docs: exclusión de contenido](https://docs.github.com/en/copilot/concepts/content-exclusion)

Pregunta 35
Tu equipo desarrolla software open-source con Copilot y se preocupa por duplicación de código y licencias.
¿Qué explicación describe mejor cómo funciona el filtro detector de duplicados?
A. Bloquea sugerencias que coinciden con más de 150 caracteres de repositorios open-source existentes.
B. Escanea automáticamente el repositorio y alerta sobre duplicados.
C. Compara sugerencias contra licencias open-source y bloquea posibles infracciones.
D. Evita duplicados solo si el código sugerido supera 100 líneas.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 36
Desarrollas una función Python para calcular costo total de una orden incluyendo impuestos y descuentos.
Tu prompt inicial omite lógica de descuento. ¿Qué estrategia mejoraría más las sugerencias?
A. Agregar varios ejemplos de test cases dentro del prompt.
B. Especificar solo la sintaxis del lenguaje.
C. Agregar detalles específicos, como “Function to calculate total cost of order with 10% tax and 5%
discount.”
D. Reducir el prompt a “Function to calculate order cost.”

Respuesta correcta: C

Explicación
La opción C es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 37
Usas GitHub Copilot para JavaScript y notas variación en la precisión. Quieres saber cómo procesa datos,
por qué algunas sugerencias son imprecisas y si aprende de tu código. ¿Qué afirmación es correcta?
A. Copilot solo funciona con lenguajes populares y no soporta lenguajes de nicho.
B. Copilot genera sugerencias con un LLM entrenado en repositorios públicos, pero no siempre entiende
contexto o dependencias específicas del proyecto.
C. Copilot sugiere patrones del archivo actual, pero no usa datos externos.
D. Copilot aprende continuamente del código que escribes y adapta sugerencias futuras.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 38
Una consultora tecnológica evalúa GitHub Copilot Business para varios equipos. El CTO busca seguridad,
gestionabilidad y cumplimiento. ¿Qué función es exclusiva de Copilot Business frente a Individual?
A. Restricción de sugerencias generadas por IA según políticas organizacionales.
B. Personalización de prompts a nivel organización.
C. Soporte de Copilot Chat en repos privados sin costo adicional.
D. Licenciamiento por usuario sin adopción organizacional completa.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque aplica una salvaguarda explícita para limitar el contexto que Copilot puede usar. La exclusión de contenido debe configurarse en los controles admitidos por la organización; revisar el resultado, proteger los secretos y aplicar las obligaciones de privacidad siguen siendo responsabilidad del equipo.

Fuente oficial: [GitHub Docs: exclusión de contenido](https://docs.github.com/en/copilot/concepts/content-exclusion)

Pregunta 39
GitHub Copilot está integrado en IDEs. En VS Code, al escribir fetch en JavaScript, Copilot sugiere una
función completa con manejo de errores y parsing de respuesta. ¿Cómo generó esa sugerencia?
A. Accedió a repositorios privados para encontrar el snippet más relevante.
B. Analizó las librerías instaladas localmente.
C. Escaneó todo el repositorio del proyecto para entender su estructura.
D. Usó el modelo Codex entrenado con un gran dataset de código público para generar la sugerencia según
patrones similares.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 40
Un equipo en arquitectura de microservicios compleja quiere mejorar documentación: comentarios inline,
docstrings y README. ¿Qué práctica aprovecharía mejor Copilot?
A. Ignorar sugerencias de Copilot y escribir todo manualmente.
B. Confiar en que Copilot genere documentación detallada sin revisión.
C. Usar Copilot para generar borradores iniciales de documentación y luego revisarlos y personalizarlos
manualmente.
D. Usar Copilot solo para convertir código a lenguaje natural esperando que describa lógica compleja con
precisión.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 41
Un desarrollador quiere usar GitHub Copilot Chat eficientemente manteniendo calidad y seguridad. ¿Cuál
es una buena práctica?
A. Validar y probar siempre el código generado por IA antes de integrarlo a producción.
B. Permitir que Copilot Chat haga commits directamente.
C. Deshabilitar comentarios humanos porque Copilot puede generar explicaciones.
D. Usar Copilot Chat para generar aplicaciones completas sin intervención humana.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 42
¿Cuál es una limitación principal de GitHub Copilot al ayudar en tareas con código altamente específico de
un dominio?
A. Puede generar código especializado con precisión sin intervención del usuario.
B. Está entrenado específicamente con datos propietarios de todos los dominios.
C. Se adapta automáticamente a cualquier estándar o guía del repositorio.
D. Puede carecer de experiencia en dominios especializados, generando sugerencias imprecisas o no
estándar.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 43
Trabajas en una app web que maneja PII como nombres, emails y SSNs, y debes cumplir GDPR. Para evitar
logging de datos sensibles, Copilot sugiere imprimir user.name , user.email y user.ssn . ¿Qué
sugerencia es mejor?
A. Imprimir solo user.name y user.email , excluyendo el SSN.
B. Hashear el SSN y luego imprimirlo.
C. Mostrar el SSN como *** .
D. Mostrar el SSN solo si el usuario tiene rol debug .

Respuesta correcta: A

Explicación
La opción A es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 44
Debes explicar cómo GitHub Copilot genera sugerencias garantizando privacidad. La empresa está
preocupada por compliance. ¿Qué describe mejor sus medidas de privacidad?
A. Envía continuamente inputs a la nube, donde se almacenan para mejorar el modelo.
B. Envía código privado directamente al modelo cloud usando datos públicos y privados.
C. Procesa inputs localmente y no envía datos externos.
D. Envía inputs a un proxy que anonimiza y filtra información sensible antes de enviarlos al modelo cloud.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 45
¿Cuál escenario describe mejor cuándo GitHub Copilot Chat es más útil para mejorar eficiencia del
desarrollador?
A. Optimizar automáticamente queries SQL para mejorar rendimiento.
B. Aclarar el propósito de un segmento de código desconocido en una librería open-source.
C. Generar un reporte completo de auditoría de seguridad.
D. Ejecutar pruebas end-to-end en múltiples entornos.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 46
Un equipo de una empresa mediana quiere integrar Copilot y le preocupan privacidad de datos, seguridad
de código e indemnidad IP. Sus políticas restringen compartir código con datasets externos de
entrenamiento. ¿Qué plan es más adecuado?
A. GitHub Copilot Individual.
B. GitHub Copilot Free.
C. GitHub Copilot Business.
D. GitHub Copilot for Open Source.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Docs: alojamiento de modelos](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)

Pregunta 47
¿Cuál afirmación describe correctamente limitaciones y funciones de planes GitHub Copilot para equipos
enterprise?
A. Copilot Enterprise ofrece gestión centralizada, pero solo un número limitado de sugerencias diarias.
B. Copilot Enterprise requiere cuentas individuales sin facturación centralizada.
C. Copilot Enterprise ofrece sugerencias ilimitadas, insights de seguridad mejorados e integración con IDEs
como Visual Studio y JetBrains.
D. Copilot Enterprise solo funciona en IDEs cloud y no en máquinas locales.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 48
Construyes una app web y necesitas una función de autenticación segura. Un prompt simple como “write
an authentication function” genera prácticas obsoletas. ¿Qué prompt ayudaría a obtener métodos
modernos y seguros?
A. “Create an authentication function for user login.”
B. “Generate an authentication function using bcrypt for hashing passwords and JWT for session
management.”
C. “Write a secure authentication function that uses SHA-1 to hash passwords.”
D. “Write a function that hashes passwords for authentication.”

Respuesta correcta: B

Explicación
La opción B es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 49
¿Cuál afirmación describe una limitación clave de Copilot Individual frente a Copilot Business?
A. Individual solo completa código en JavaScript y Python.
B. Individual limita el número de sugerencias por sesión.
C. Individual no ofrece funciones de gestión de equipo como control de acceso; Business sí.
D. Individual limita el número de repositorios privados accesibles.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 50
Como ingeniero usando Copilot para una funcionalidad de procesamiento con PII, ¿cuál es la acción más
responsable para asegurar ética y cumplimiento de privacidad cuando Copilot sugiere validación de datos?
A. Probar con una herramienta automática sin revisión manual.
B. Implementar inmediatamente el snippet sugerido porque la IA sigue buenas prácticas.
C. Asumir que Copilot ya revisó cumplimiento regulatorio.
D. Analizar el código generado para asegurar buenas prácticas de manejo de PII, como cifrado y
anonimización, antes de implementarlo.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 51
Tienes una función Python calculate_discount(price, discount_rate) que calcula el precio con
descuento. Quieres usar Copilot para generar pruebas. ¿Qué test es más apropiado para varias
condiciones?
A. Probar casos con descuento 2.0 y esperar precios negativos.
B. Probar calculate_discount(100, 0.1) == 90 , calculate_discount(200, 0.2) == 160 ,
calculate_discount(50, 0) == 50 , calculate_discount(0, 0.1) == 0 y
calculate_discount(-100, 0.1) == -90 .
C. Probar solo tres casos normales como 50%, 0 y 20%.
D. Probar strings como "100" y "0.1" esperando resultados numéricos.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque usa Copilot como apoyo para proponer pruebas y casos límite, no como sustituto de la validación. Las pruebas generadas deben revisarse, ejecutarse y ampliarse para cubrir comportamiento esperado, entradas inválidas, errores y requisitos de seguridad o rendimiento.

Fuente oficial: [GitHub Docs: escribir pruebas con GitHub Copilot](https://docs.github.com/en/copilot/tutorials/write-tests)

Pregunta 52
Usas GitHub Copilot en Python y notas que comentarios detallados y código mejoran sus sugerencias. ¿Qué
principio de prompt crafting es más importante?
A. Usar solo una palabra en el prompt para obtener sugerencias más específicas.
B. Evitar ejemplos para que Copilot tenga libertad total.
C. La longitud del prompt no importa porque el modelo genera igual.
D. Usar comentarios claros y específicos o código parcialmente escrito para dar mejor contexto.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 53
Un ingeniero nota que algunas sugerencias de Copilot son obsoletas o incorrectas. ¿Qué afirmación
describe correctamente una limitación de Copilot y LLMs?
A. Copilot detecta y elimina cualquier vulnerabilidad antes de presentar sugerencias.
B. Copilot conoce en tiempo real librerías, APIs y vulnerabilidades recién publicadas.
C. Copilot siempre produce código seguro, optimizado y siguiendo mejores prácticas.
D. Las sugerencias de Copilot son probabilísticas, por lo que puede generar salidas diferentes para el
mismo input.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 54
Usando Copilot para JavaScript, quieres saber cómo genera sugerencias y si almacena tu input. ¿Qué
describe correctamente el ciclo de vida del pipeline?
A. Las sugerencias se generan localmente sin enviar datos a GitHub.
B. El código se procesa temporalmente en memoria para generar sugerencias, el modelo corre en
servidores GitHub usando datos públicos y no se almacena ni registra el código.
C. Las sugerencias se generan con análisis local y datos crowdsourced de otros usuarios.
D. Los snippets se guardan continuamente para mejorar futuras versiones del modelo.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Docs: alojamiento de modelos](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)

Pregunta 55
Construyes un modelo predictivo para clasificar comportamiento de clientes con datos transaccionales.
Necesitas feature engineering para crear variables útiles. ¿Cómo puede ayudar Copilot?
A. Generando código para transformaciones básicas de features basadas en conocimiento de dominio,
revisando sus sugerencias.
B. Identificando automáticamente el mejor set de features y usándolo directamente.
C. Creando y seleccionando todas las features sin intervención manual.
D. Evitando Copilot porque las features generadas por IA no sirven.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 56
Tu organización considera adoptar GitHub Copilot en equipos de ingeniería y legal, pero tiene
preocupaciones de privacidad. ¿Qué SKU satisface mejor estas necesidades?
A. GitHub Copilot Enterprise con controles avanzados de privacidad e integración de políticas corporativas.
B. GitHub Copilot for Education.
C. GitHub Copilot for Teams.
D. GitHub Copilot Free for Individuals.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 57
¿Qué salvaguarda contractual de GitHub Copilot Business protege contra reclamos de propiedad intelectual
de terceros por código generado?
A. Elimina automáticamente cualquier código parecido a open-source.
B. Incluye indemnización para todos los outputs sin condiciones.
C. Proporciona indemnización solo si el código no se parece a repos públicos.
D. Ofrece una cláusula de indemnización bajo términos específicos, sin garantía total para todos los
outputs.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 58
Tu organización implementará GitHub Copilot Enterprise y quiere usar Knowledge Base para prácticas
compartidas, librerías e APIs internas. ¿Qué paso es necesario para crear, administrar e indexar una
Knowledge Base?
A. Habilitar control de acceso para que solo usuarios autorizados contribuyan.
B. Usar GitHub Actions para sincronizar la KB con el motor de sugerencias.
C. Crear un repositorio dedicado para la Knowledge Base y habilitar la indexación del repositorio.
D. Etiquetar manualmente cada archivo relevante.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 59
GitHub Copilot Chat mejora la productividad mediante interacciones con IA. ¿Qué describe una
característica clave?
A. Ejecuta comandos shell directamente desde el chat sin confirmación.
B. Permite hacer preguntas de programación en lenguaje natural y recibir respuestas de IA adaptadas al
contexto actual.
C. Genera arquitecturas completas de aplicaciones desde una descripción general.
D. Analiza repositorios privados completos sin permisos explícitos.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 60
Un desarrollador usa Copilot en JetBrains IntelliJ IDEA, pero no aparecen sugerencias para archivos Java,
aunque sí funcionan en Python y JavaScript. ¿Qué paso de troubleshooting es más efectivo?
A. Activar verbose logging y reportar a GitHub Support.
B. Borrar manualmente la caché de Copilot y reiniciar IntelliJ.
C. Verificar que Copilot esté habilitado para archivos Java en la configuración .copilot y ajustar si hace
falta.
D. Cambiar a VS Code porque JetBrains tiene menor soporte.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 61
GitHub Copilot Chat mejora la experiencia en el IDE con asistencia de IA. ¿Qué describe mejor sus
capacidades y limitaciones?
A. Genera código con prompts conversacionales, pero no considera el contexto del archivo abierto.
B. Requiere Copilot Individual y no está disponible para Business.
C. Explica errores, pero no sugiere soluciones alternativas.
D. Puede explicar código, sugerir fixes y generar documentación, pero no ejecuta código directamente en el
chat.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 62
¿Qué afirmación describe correctamente una función principal de GitHub Copilot Chat?
A. Se integra con IDEs como VS Code y JetBrains, dando respuestas contextuales basadas en archivos
abiertos y estructura del proyecto.
B. Permite ejecutar código directamente dentro del chat.
C. Modifica código en tiempo real sin confirmación del usuario.
D. Obliga a aprobar manualmente cada sugerencia antes de insertarla.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 63
GitHub Copilot genera sugerencias según datos de entrenamiento e inputs del usuario. ¿Qué afirmación
sobre propiedad del código generado es correcta?
A. El código generado es open-source y debe publicarse con licencia MIT.
B. Si una sugerencia se parece a open-source, el usuario debe acreditar a GitHub.
C. Los usuarios conservan la propiedad del código generado, pero son responsables de cumplir leyes de
licencias y propiedad intelectual.
D. GitHub es dueño de las sugerencias y las licencia al usuario.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Docs: alojamiento de modelos](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)

Pregunta 64
Como líder de DevStream Solutions, tu equipo usa Copilot Individual pero considera Enterprise por
crecimiento y seguridad. ¿Qué característica de Enterprise da mayor ventaja para un equipo en
crecimiento?
A. Excluir tipos de archivo o directorios a nivel individual.
B. Gestión de políticas enterprise-wide con controles centralizados de seguridad y cumplimiento, como
SAML SSO y audit logs.
C. Respuesta más rápida por infraestructura dedicada.
D. Generación automática de estructuras completas de proyecto.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 65
Un desarrollador nota que Copilot sugiere sintaxis obsoleta o APIs deprecadas. Quiere entender el origen y
antigüedad de los datos. ¿Qué afirmación es correcta?
A. Copilot aprende del estilo personal del usuario con el tiempo.
B. Copilot obtiene datos en tiempo real de GitHub antes de sugerir.
C. Las sugerencias se basan en un dataset fijo de código público y los datos de entrenamiento pueden tener
meses o años.
D. El training data se actualiza diariamente.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 66
Trabajas en una app Node.js con PostgreSQL usando pg y quieres generar integration tests para queries.
¿Cómo puede ayudar mejor Copilot?
A. Generar unit tests para cada función en lugar de integration tests.
B. Crear tests contra la base de datos live sin mocks.
C. Pedir un test completo sin dar contexto.
D. Crear un archivo de test, importar el módulo de base de datos y agregar comentarios con resultados
esperados para guiar los casos.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque usa Copilot como apoyo para proponer pruebas y casos límite, no como sustituto de la validación. Las pruebas generadas deben revisarse, ejecutarse y ampliarse para cubrir comportamiento esperado, entradas inválidas, errores y requisitos de seguridad o rendimiento.

Fuente oficial: [GitHub Docs: escribir pruebas con GitHub Copilot](https://docs.github.com/en/copilot/tutorials/write-tests)

Pregunta 67
Como lead engineer, evalúas políticas de manejo de datos de Copilot. Algunos se preocupan por seguridad
de código propietario y si Copilot usa datos privados para training. ¿Qué afirmaciones son correctas?
Selecciona dos.
A. El modelo de Copilot se entrena principalmente con datos públicos y repositorios open-source, no con
datos privados de usuarios.
B. Copilot genera sugerencias en tiempo real sin almacenar los snippets reales proporcionados por
usuarios.
C. Copilot usa datos de repos públicos y privados para mejorar su modelo con el tiempo.
D. Los snippets generados se almacenan hasta 30 días para entrenamiento.
E. Copilot envía telemetría detallada incluyendo sugerencias de código para auditoría.

Respuesta correcta: A y B

Explicación
La opción A y B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 68
Usas Copilot para generar una función JavaScript que obtiene datos de una API, parsea JSON y muestra
campos específicos. ¿Qué prompt incluye contexto, instrucción y restricciones?
A. “Fetch data from an API using JavaScript.”
B. “Write a JavaScript function that fetches data from an API, parses the JSON, and logs fields 'id' and 'name'
to the console.”
C. “Can you help me write a JavaScript function to work with APIs?”
D. “Fetch data from an API using JavaScript and process it.”

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 69
Tu equipo implementa GitHub Copilot y quiere alinear el flujo de datos con políticas de privacidad. ¿Qué
opción explica mejor cómo se transmiten datos entre el entorno local y servidores GitHub para
sugerencias?
A. Copilot procesa todo localmente sin enviar datos.
B. Copilot envía todo el codebase a GitHub para analizarlo.
C. Copilot cifra todo el proyecto y lo almacena en la nube.
D. Copilot envía snippets de código a servidores GitHub para procesamiento en tiempo real y generación de
sugerencias, pero no transmite todo el codebase.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 70
Usas GitHub Copilot en un proyecto healthcare con datos médicos protegidos por HIPAA. Un día Copilot
sugiere código que incluye datos reales de pacientes, como nombre o número médico. Como project lead,
¿cuál es la mejor acción?
A. Asumir que es benigno porque Copilot no almacena datos y continuar.
B. Apagar Copilot para todos los proyectos futuros con información sensible.
C. Reportar de inmediato una brecha de datos a GitHub y eliminar Copilot del proyecto.
D. Deshabilitar Copilot temporalmente, reportar el incidente al responsable interno de privacidad e
investigar si los datos provienen del código propietario o de un repositorio externo.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

# Balotario 2

Cuestionario de práctica: GitHub Copilot GH-300(2)
Preguntas traducidas al español con clave de respuestas
Preguntas
Pregunta 1
GitHub Copilot Business está diseñado para mejorar la colaboración y la eficiencia de codificación en
equipos y organizaciones. ¿Cuál de las siguientes afirmaciones describe correctamente una característica
exclusiva de GitHub Copilot Business que no está disponible en GitHub Copilot Individual?
A. GitHub Copilot Business incluye un escáner de vulnerabilidades integrado que detecta automáticamente
fallas de seguridad en el código generado.
B. GitHub Copilot Business requiere que todos los usuarios tengan una cuenta GitHub Enterprise para
acceder.
C. GitHub Copilot Business proporciona controles de políticas a nivel organizacional, incluyendo la
capacidad de deshabilitar sugerencias que coinciden con código público.
D. GitHub Copilot Business permite completions ilimitadas en todos los IDEs, mientras que GitHub Copilot
Individual tiene un límite diario.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque aplica una salvaguarda explícita para limitar el contexto que Copilot puede usar. La exclusión de contenido debe configurarse en los controles admitidos por la organización; revisar el resultado, proteger los secretos y aplicar las obligaciones de privacidad siguen siendo responsabilidad del equipo.

Fuente oficial: [GitHub Docs: exclusión de contenido](https://docs.github.com/en/copilot/concepts/content-exclusion)

Pregunta 2
Una empresa está evaluando GitHub Copilot Individual frente a GitHub Copilot Business para sus equipos
de desarrollo. ¿Cuál de las siguientes afirmaciones describe correctamente una diferencia clave entre
ambos planes?
A. GitHub Copilot Individual concede automáticamente acceso a toda la empresa, mientras que Copilot
Business requiere licenciamiento por usuario.
B. GitHub Copilot Business permite deshabilitar toda la telemetría y el intercambio de datos, mientras que
Copilot Individual no.
C. GitHub Copilot Individual bloquea sugerencias basadas en repositorios públicos, mientras que Copilot
Business no.
D. GitHub Copilot Business proporciona indemnización de propiedad intelectual, mientras que Copilot
Individual no.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 3
Tu equipo de desarrollo está modernizando una aplicación legacy usando metodología Agile con sprints de
dos semanas. GitHub Copilot se integró al flujo de desarrollo para ayudar en varias etapas del SDLC,
incluyendo planificación, codificación, pruebas y despliegue. ¿Cómo puede GitHub Copilot ayudar mejor al
equipo en el SDLC?
A. Gestionando tareas del proyecto, como asignar issues, rastrear progreso y administrar pipelines de
despliegue.
B. Ayudando a mejorar la calidad del código durante la fase de codificación mediante generación de código
alineado con estándares y prácticas comunes.
C. Generando automáticamente especificaciones funcionales e historias de usuario para los sprints.
D. Escribiendo casos de prueba, garantizando cobertura completa y corrigiendo automáticamente los
errores encontrados.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 4
En GitHub Copilot, las exclusiones de contexto son importantes para definir qué datos se usan al generar
completions asistidas por IA. Al usar GitHub Copilot Business, ¿cuál describe correctamente cómo
funcionan las context exclusions?
A. Permiten a las organizaciones especificar qué repositorios deben excluirse de las sugerencias generadas
por IA para cumplir políticas de seguridad.
B. Una vez excluido un archivo o repositorio, Copilot conserva conocimiento de sugerencias previas
provenientes de ese repositorio.
C. Impiden que GitHub Copilot acceda a cualquier código del repositorio local del usuario.
D. Por defecto, Copilot aplica exclusiones a todos los repositorios que contienen información privada sin
configuración del usuario.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 5
Estás construyendo una aplicación web y necesitas generar código para autenticación de usuarios: login,
logout y password reset. Escribes el prompt: # Implement user authentication with login,
logout, and password reset . Sin embargo, Copilot no incluye buenas prácticas como hashing de
contraseñas y MFA. ¿Qué cambio de prompt probablemente generaría código más seguro?
A. Quitar detalles de login, logout y password reset para enfocarse solo en hashing: “Implement user
authentication with password hashing.”
B. Usar múltiples prompts, uno por funcionalidad: “Implement login”, “Implement password reset” y
“Implement logout”.
C. Agregar requisitos específicos de seguridad, como “Implement user authentication with login, logout,
password reset, using hashed passwords and multi-factor authentication.”
D. Mantener el prompt vago y permitir que Copilot maneje la implementación según prácticas por defecto
del training data.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 6
Un equipo evalúa GitHub Copilot Chat para varias tareas de ingeniería de software. ¿En cuál de los
siguientes escenarios es más efectivo GitHub Copilot Chat?
A. Un desarrollador junior necesita guía para implementar una función recursiva en Python, incluyendo
explicación de buenas prácticas.
B. Un ingeniero DevOps quiere que Copilot Chat genere desde cero una configuración Terraform completa
para infraestructura cloud.
C. Un arquitecto necesita que Copilot Chat refactorice un monolito completo a microservicios sin
intervención manual.
D. Un analista de seguridad quiere que Copilot Chat detecte y parchee automáticamente todas las
vulnerabilidades en múltiples repositorios en tiempo real.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 7
Eres líder de equipo en una empresa de software que explora GitHub Copilot Chat para mejorar
productividad y ayudar a resolver problemas de código. ¿Cuál es una característica clave de GitHub Copilot
Chat que lo diferencia de las funciones tradicionales de Copilot?
A. Puede documentar automáticamente codebases completos generando README y documentación
completa sin input del usuario.
B. Permite a los desarrolladores pedir explicaciones sobre líneas específicas de código en lenguaje natural y
recibir respuestas contextuales.
C. Se integra con GitHub Actions para activar despliegues automáticos desde conversaciones en el chat.
D. Puede ejecutar código directamente dentro de la interfaz de chat.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 8
Un ingeniero usa GitHub Copilot en Visual Studio Code mientras trabaja en un repositorio privado, pero
Copilot no genera sugerencias. ¿Cuál es el paso más efectivo para solucionar el problema?
A. Verificar que GitHub Copilot esté habilitado en la configuración de extensiones de VS Code y que el
usuario haya iniciado sesión en GitHub.
B. Reinstalar Visual Studio Code porque Copilot no funciona si el IDE lleva mucho tiempo abierto.
C. Crear un nuevo Personal Access Token y agregarlo a la configuración de Copilot en VS Code.
D. Limpiar manualmente la caché del workspace y reiniciar el editor en cada uso.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 9
Un desarrollador freelance usa GitHub Copilot Individual y está preocupado por si su código propietario
podría almacenarse o compartirse. ¿Cuál es la afirmación correcta sobre cómo GitHub Copilot Individual
maneja los datos del usuario?
A. Comparte automáticamente snippets generados por el usuario con otros usuarios de Copilot.
B. Recopila todos los prompts y respuestas para futuros fine-tunings del modelo.
C. Cifra y almacena todo el código asistido por IA para revisión interna de GitHub.
D. No retiene ni comparte el código del usuario y no lo usa para entrenamiento del modelo de IA.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Docs: alojamiento de modelos](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)

Pregunta 10
Trabajas en un proyecto Python que procesa input de usuario y realiza cálculos, asegurando seguridad y
eficiencia. Usaste Copilot para escribir pruebas unitarias de vulnerabilidades de seguridad y rendimiento.
¿Qué caso de prueba cubre mejor seguridad y performance?
A. Una prueba que usa assert para verificar que el input sea sanitizado comparando el output con un
valor SQL-safe predefinido.
B. Una prueba que mide tiempo de ejecución con timeit , asegurando que complete en menos de un
segundo para inputs típicos.
C. Una prueba con fuzz testing generado por Copilot para evaluar variaciones de input, validando
sanitización y rendimiento aceptable.
D. Una prueba que compara si una librería externa es más rápida que una función custom.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque usa Copilot como apoyo para proponer pruebas y casos límite, no como sustituto de la validación. Las pruebas generadas deben revisarse, ejecutarse y ampliarse para cubrir comportamiento esperado, entradas inválidas, errores y requisitos de seguridad o rendimiento.

Fuente oficial: [GitHub Docs: escribir pruebas con GitHub Copilot](https://docs.github.com/en/copilot/tutorials/write-tests)

Pregunta 11
Lideras un equipo que usa VS Code como IDE principal y decidiste implementar GitHub Copilot para
acelerar la generación de código. ¿Cómo deberías integrarlo correctamente en VS Code?
A. Pegar manualmente sugerencias desde la web app de GitHub Copilot en VS Code.
B. Instalar la extensión GitHub Copilot para VS Code y configurarla para dar sugerencias en el editor,
incluyendo atajos de teclado.
C. Usar solo IntelliSense porque ofrece sugerencias AI equivalentes.
D. Instalar GitHub Copilot como software standalone separado de VS Code.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 12
Eres un desarrollador preocupado por cómo GitHub Copilot procesa y almacena tus datos, especialmente
en proyectos sensibles. ¿Qué afirmación describe mejor cómo maneja GitHub Copilot los datos del usuario,
incluyendo código y sugerencias?
A. Registra temporalmente inputs y sugerencias para mejorar el modelo y luego los elimina.
B. Cifra y almacena todos los inputs para personalizar sugerencias.
C. Almacena permanentemente todas las sugerencias en servidores GitHub.
D. No almacena inputs ni sugerencias del usuario de una forma que comprometa la privacidad.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Docs: alojamiento de modelos](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)

Pregunta 13
Tu empresa de cientos de desarrolladores implementa GitHub Copilot Enterprise para aumentar
productividad y reducir tiempo de code review. Como lead developer, debes asegurar configuración
correcta manteniendo seguridad y cumplimiento. ¿Qué característica de Copilot Enterprise apoya mejor el
uso seguro en toda la organización?
A. Gestión centralizada del uso de GitHub Copilot y políticas de acceso entre equipos para aplicar
estándares de seguridad consistentes.
B. Control de acceso personalizable para que cada desarrollador elija sus propios settings.
C. Generación automática de documentación del proyecto desde comentarios de código.
D. Escaneo en tiempo real de todo código antes del commit para detectar vulnerabilidades.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 14
Contribuyes a un proyecto open-source de healthcare y usas Copilot para acelerar tu trabajo. Algunas
sugerencias se parecen a código de otros proyectos. ¿Qué acción se alinea con el uso ético de IA?
A. Modificar el código sugerido para que sea menos reconocible.
B. Evitar cualquier código generado por IA en contribuciones open-source.
C. Usar el código generado sin preocuparte porque todo lo sugerido por Copilot se considera open-source.
D. Comparar el código generado con licencias open-source existentes para asegurar compatibilidad antes
de incorporarlo.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque considera el posible parecido con código público y las obligaciones de licencia. Los filtros y referencias de Copilot son salvaguardas, no una garantía de ausencia total de coincidencias; el equipo debe revisar la licencia y la procedencia antes de reutilizar código.

Fuente oficial: [GitHub Docs: referencias a código público](https://docs.github.com/en/copilot/concepts/completions/code-referencing)

Pregunta 15
Estás configurando GitHub Copilot en tu IDE por primera vez y quieres entender sus funciones. ¿Qué
afirmaciones describen correctamente cómo opera Copilot en el IDE? Selecciona tres.
A. Puede sugerir líneas completas, funciones o incluso clases completas según el contexto.
B. Ofrece sugerencias basadas en código de repositorios públicos y proyectos open-source.
C. Genera código según comentarios y código existente en el archivo.
D. Funciona offline y no necesita internet.
E. Solo está disponible en Visual Studio Code.

Respuesta correcta: A, B y C

Explicación
La opción A, B y C es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 16
Trabajas en una app web cuyo equipo agregó una función que interactúa con una API de clima de terceros,
pero la documentación está incompleta. Necesitas implementar una función que llame la API y procese la
respuesta eficientemente. ¿Cómo puede Copilot mejorar tu productividad? Selecciona dos.
A. Puede ayudar a generar casos de prueba para la interacción con la API, incluyendo edge cases como
timeouts o respuestas inválidas.
B. Puede reemplazar completamente la necesidad de entender la documentación de la API.
C. Generará automáticamente todo el manejo de errores necesario para cualquier API, asegurando que la
función nunca falle.
D. Puede generar completions basadas en el contexto del código, creando una posible implementación del
llamado API según patrones previos.
E. Entenderá automáticamente los detalles exactos de la API de terceros y generará el código preciso.

Respuesta correcta: A y D

Explicación
La opción A y D es la adecuada porque corresponde al uso de Copilot desde la terminal para obtener orientación o proponer comandos. Los comandos generados deben revisarse antes de ejecutarse, especialmente si pueden modificar archivos, repositorios o infraestructura.

Fuente oficial: [GitHub Docs: GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli)

Pregunta 17
Usas GitHub Copilot Chat en tu IDE para agilizar generación de código y recibir ayuda contextual. Necesitas
sugerencias de snippets y respuestas sobre lógica, sintaxis y buenas prácticas. ¿Qué acción puedes realizar
con Copilot Chat?
A. Obtener sugerencias de snippets en tiempo real según el contexto activo del código.
B. Crear pull requests directamente desde el IDE sin usar GitHub.
C. Agregar parches de seguridad basados en vulnerabilidades detectadas por Copilot Chat.
D. Generar automáticamente documentación completa del proyecto basada en comentarios.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 18
¿Qué acción puede auditarse en el audit log de GitHub Copilot Business para rastrear uso y eventos de
seguridad dentro de una organización?
A. Monitorear cuándo un usuario habilita o deshabilita GitHub Copilot dentro del repositorio de la
organización.
B. Registrar el training data específico usado durante una sugerencia.
C. Registrar cada vez que Copilot autocompleta una función en el IDE.
D. Ver y buscar sugerencias individuales generadas por Copilot para cada desarrollador.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 19
Desarrollas una herramienta interna en una gran empresa usando GitHub Copilot y te preocupa cómo
genera sugerencias y maneja código sensible. ¿Cómo administra Copilot el uso de datos y sugerencias
futuras, especialmente con datos públicos y privados?
A. Solo genera sugerencias basadas en el proyecto específico abierto en el IDE, sin fuentes externas.
B. Recopila y almacena datos de repositorios privados para mejorar futuras sugerencias de todos los
usuarios.
C. Usa repositorios públicos para entrenar su modelo, pero puede usar datos de repos privados durante la
sesión como contexto, sin almacenarlos para entrenamiento futuro.
D. Genera sugerencias exclusivamente desde repositorios públicos y no usa datos privados durante la
sesión.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 20
Usas GitHub Copilot para generar una función que entrena una red neuronal con PyTorch. Quieres mejorar
precisión usando few-shot prompting, ya que escribiste una función similar antes. ¿Cómo deberías formular
el prompt?
A. “Write a PyTorch function to train a neural network. Here’s an example of how to load data and define the
network architecture.”
B. “Train a neural network using PyTorch.”
C. “I want a function that uses PyTorch to train a neural network.”
D. “Write code for a PyTorch neural network. I’ll provide examples later.”

Respuesta correcta: A

Explicación
La opción A es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 21
Debes implementar un sistema que usa código generado por IA mediante GitHub Copilot. Como parte de
Responsible AI, necesitas asegurar transparencia y responsabilidad. ¿Qué estrategia deberías adoptar?
A. Confiar solo en el control de versiones normal de GitHub sin documentación adicional.
B. Marcar claramente el código generado por IA en el sistema de control de versiones y documentar
cambios hechos durante code review.
C. Documentar solo el código escrito manualmente, ya que el generado por IA se considera confiable.
D. Registrar cada sugerencia de Copilot y su resultado.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 22
Eres consultor de seguridad y debes asegurar que los flujos de desarrollo cumplan regulaciones como
GDPR. El cliente está preocupado por cómo Copilot maneja código propietario para entrenamiento o uso
entre usuarios. ¿Qué afirmaciones reflejan el enfoque de Copilot sobre privacidad y datos? Selecciona dos.
A. Las sugerencias de Copilot pueden contener snippets sintácticamente similares a código público, lo que
podría exponer inadvertidamente lógica propietaria.
B. El modelo de Copilot se entrena con código público y no recibe actualizaciones basadas en código
privado.
C. Copilot recopila y transmite sugerencias específicas del usuario a GitHub para mejorar predicción.
D. Copilot cifra automáticamente el código del usuario localmente y durante transmisión para evitar acceso
no autorizado.

Respuesta correcta: A y B

Explicación
La opción A y B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Docs: alojamiento de modelos](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)

Pregunta 23
Tu equipo actualizó a GitHub Copilot Enterprise y quiere usar resúmenes de pull request para agilizar code
reviews. Un desarrollador abre un PR y Copilot sugiere un resumen. ¿Qué es cierto sobre cómo Copilot
genera esos resúmenes?
A. Aprueba automáticamente PRs si el resumen indica que no hay problemas.
B. Puede generar un resumen incluso antes de que existan cambios de código.
C. Genera resúmenes a partir del análisis de cambios de código, historial de commits y comentarios en
lenguaje natural del PR.
D. Requiere commits escritos manualmente antes de poder generar un resumen.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 24
Trabajas en un proyecto colaborativo con datos sensibles de clientes. El equipo usa Copilot para
completions, pero surgen dudas sobre el pipeline de datos. ¿Qué describe mejor el ciclo de vida del dato
desde el IDE hasta el procesamiento y retorno?
A. Un snippet alrededor del cursor se envía a servidores GitHub, se procesa y la sugerencia vuelve al IDE sin
almacenar datos en GitHub.
B. El archivo completo se envía y se almacena en GitHub para referencia futura.
C. Se envía telemetría de todo el proyecto y las sugerencias se basan en todos los archivos.
D. Se envía todo el codebase para analizarlo y devolver sugerencias.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 25
Usas GitHub Copilot para escribir código de un pipeline ML en Python. Copilot sugiere funciones básicas,
pero tiene dificultad para entender lógica amplia y reglas de negocio. ¿Qué afirmación describe
correctamente esa limitación?
A. Copilot tiene acceso a información actualizada de todas las librerías y frameworks.
B. Las sugerencias suelen basarse en patrones sintácticos más que en comprensión semántica profunda, lo
que puede generar código incorrecto o inseguro.
C. Copilot puede entender perfectamente requisitos de proyecto si los comentarios son detallados.
D. Los LLMs pueden crear soluciones para cualquier problema sin importar complejidad o dominio.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 26
Eres líder de equipo modernizando un codebase antiguo con Copilot. Quieres explicar posibles problemas
sobre la antigüedad de las sugerencias. ¿Qué describe mejor la edad y relevancia del código sugerido por
GitHub Copilot?
A. Usa un modelo actualizado continuamente que garantiza sugerencias basadas en versiones recientes.
B. Excluye automáticamente librerías obsoletas y funciones deprecadas.
C. Solo sugiere código de los últimos 12 meses de commits.
D. Sus sugerencias se basan en un modelo entrenado con repositorios públicos, que puede incluir código
de varios años y ya no relevante.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 27
Eres lead developer en una empresa mediana que contrató GitHub Copilot for Business. Quieres asegurar
que todo el equipo cumpla políticas organizacionales. ¿Cuál es la mejor forma de establecer y aplicar
políticas de uso?
A. Permitir que cada desarrollador configure Copilot independientemente.
B. Gestionar políticas usando settings locales de cada IDE.
C. Deshabilitar Copilot en repositorios privados porque no puede aplicar políticas organizacionales allí.
D. Aplicar la gestión de políticas mediante GitHub Enterprise settings, administrando permisos y uso de
Copilot centralmente.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 28
Trabajas en una aplicación financiera sensible con procesamiento de transacciones, validación de inputs e
integración con APIs de terceros. Usas Copilot para acelerar el desarrollo de un componente crítico de
seguridad. ¿Qué describe mejor una limitación?
A. Copilot siempre genera código optimizado para rendimiento en entornos de alta seguridad.
B. Copilot puede sugerir buenas prácticas de seguridad, pero aún puede producir código con
vulnerabilidades ocultas que requiere revisión manual.
C. Copilot detecta y corrige automáticamente todos los problemas de seguridad.
D. Copilot no requiere pruebas ni validación porque asegura outputs sin errores.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque aplica una salvaguarda explícita para limitar el contexto que Copilot puede usar. La exclusión de contenido debe configurarse en los controles admitidos por la organización; revisar el resultado, proteger los secretos y aplicar las obligaciones de privacidad siguen siendo responsabilidad del equipo.

Fuente oficial: [GitHub Docs: exclusión de contenido](https://docs.github.com/en/copilot/concepts/content-exclusion)

Pregunta 29
Un desarrollador trabaja en una industria altamente regulada donde la privacidad es crítica. Usa Copilot en
su editor. ¿Qué práctica asegura que datos privados o sensibles del codebase se excluyan de las
sugerencias?
A. Configurar .gitignore para excluir archivos sensibles.
B. Revisar manualmente todas las sugerencias generadas.
C. Habilitar context exclusions para evitar que Copilot use ciertos archivos, rutas o tipos de datos.
D. Deshabilitar Copilot en toda la organización.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 30
Usas Copilot en un proyecto con datos sensibles como PII y te preocupa que estos datos se usen como
contexto. ¿Qué debes hacer para excluirlos del procesamiento durante generación de código?
A. Confiar en que las funciones de privacidad de Copilot excluyen automáticamente los datos sensibles.
B. Ofuscar datos sensibles dentro del código.
C. Usar comentarios inline indicando que Copilot no debe procesar datos sensibles.
D. Deshabilitar GitHub Copilot para ciertos archivos que contienen información sensible.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 31
Usas Copilot para escribir un script Python que parsea archivos XML grandes y extrae datos según input del
usuario. Necesitas minimizar memoria, pero las sugerencias cargan todo el archivo. ¿Qué ajuste de prompt
guiaría mejor a una solución eficiente en memoria?
A. “Write a Python function that parses large XML files and extracts data based on user input.”
B. “Generate Python code to parse an XML file and extract specific data efficiently.”
C. “Generate Python code that parses XML files and uses minimal memory while extracting data.”
D. “Write a Python function that reads a large XML file and extracts data without loading the entire file into
memory. Use an iterative approach.”

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 32
Un equipo de seguridad en una gran empresa financiera revisa GitHub Copilot Business para cumplir
auditoría y regulación. Quiere visibilidad de cómo se usa Copilot en la organización. ¿Cómo ayudan los audit
logs?
A. Registran cuándo usuarios habilitan o deshabilitan Copilot en repositorios, dando visibilidad de uso y
cumplimiento.
B. Permiten personalizar el training data de Copilot según repositorios.
C. Analizan código generado por IA para detectar vulnerabilidades antes del commit.
D. Rastrean todos los snippets generados por Copilot para revisión administrativa.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 33
Tienes una aplicación Node.js con dos funciones: una parsea input y otra ejecuta lógica de negocio. Quieres
usar Copilot para generar integration tests que validen que ambas funcionan juntas. ¿Cómo deberías
proceder?
A. Usar Copilot para generar casos que ejecuten parseInput y processData en secuencia y validen el
flujo completo.
B. Usar mocks y stubs para aislar ambas funciones durante las pruebas.
C. Dejar que Copilot genere solo validación de input y probar manualmente la integración.
D. Pedir unit tests separados para parseInput y processData .

Respuesta correcta: A

Explicación
La opción A es la adecuada porque usa Copilot como apoyo para proponer pruebas y casos límite, no como sustituto de la validación. Las pruebas generadas deben revisarse, ejecutarse y ampliarse para cubrir comportamiento esperado, entradas inválidas, errores y requisitos de seguridad o rendimiento.

Fuente oficial: [GitHub Docs: escribir pruebas con GitHub Copilot](https://docs.github.com/en/copilot/tutorials/write-tests)

Pregunta 34
¿Qué característica es exclusiva de GitHub Copilot for Business y Enterprise, y no está disponible en GitHub
Copilot for Individuals?
A. Integración con pull requests.
B. Soporte para proyectos open-source.
C. Sugerencias inline de código.
D. Integración con Single Sign-On, SSO.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque aplica una salvaguarda explícita para limitar el contexto que Copilot puede usar. La exclusión de contenido debe configurarse en los controles admitidos por la organización; revisar el resultado, proteger los secretos y aplicar las obligaciones de privacidad siguen siendo responsabilidad del equipo.

Fuente oficial: [GitHub Docs: exclusión de contenido](https://docs.github.com/en/copilot/concepts/content-exclusion)

Pregunta 35
Tu organización restringe Copilot a equipos aprobados, pero sospechas que usuarios no autorizados lo
están habilitando. ¿Qué acción puedes rastrear en GitHub audit logs?
A. Cuando un usuario commitea código generado por Copilot.
B. Cuando un usuario recibe una sugerencia generada por Copilot.
C. Cuando un usuario copia y pega código generado por Copilot.
D. Cuando un administrador asigna o revoca una licencia de Copilot Business.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: auditoría de GitHub Copilot](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/review-audit-logs)

Pregunta 36
Construyes un web scraper en Python con BeautifulSoup para extraer títulos y fechas de artículos desde un
sitio web. Quieres que Copilot genere una función que acepte una URL y devuelva una lista de diccionarios.
¿Qué prompt maximiza la precisión?
A. “Generate Python code that scrapes article titles and dates from a URL using BeautifulSoup and returns
them in a list of dictionaries.”
B. “Write a Python script to scrape a website using BeautifulSoup.”
C. “Write Python code to use BeautifulSoup for scraping.”
D. “Write code to extract information from a website using Python.”

Respuesta correcta: A

Explicación
La opción A es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 37
Tu equipo considera GitHub Copilot para un proyecto enterprise y necesita integración con VS Code,
completions multilínea y detección de vulnerabilidades. ¿Qué plan recomendarías?
A. GitHub Copilot Basic.
B. GitHub Copilot Business Plan.
C. GitHub Copilot Individual Plan.
D. GitHub Copilot Free Plan.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 38
Tu equipo usa GitHub Copilot Enterprise para ayudar en code reviews de una aplicación grande con datos
sensibles. Quieres identificar vulnerabilidades durante revisión de PRs. ¿Cuál es el mejor enfoque?
A. Confiar en las sugerencias de seguridad de Copilot sin validación adicional.
B. Usar sugerencias de Copilot para identificar patrones inseguros y combinarlas con GitHub Advanced
Security, CodeQL y Dependabot.
C. Confiar en Copilot para detectar y corregir todas las vulnerabilidades automáticamente.
D. Usar Copilot para reescribir el código en estilo “AI-friendly” e ignorar sugerencias de seguridad.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 39
Tu empresa adoptó GitHub Copilot Chat y quieres presentar sus funciones principales. ¿Cuál es una
característica clave de Copilot Chat?
A. Colabora en tiempo real con otros desarrolladores en el mismo proyecto.
B. Genera suites de pruebas completas y detalladas sin prompts específicos.
C. Proporciona explicaciones paso a paso de snippets de código sugeridos.
D. Refactoriza automáticamente codebases completos cuando se le solicita.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 40
Lideras un equipo con muchos code reviews, y el proceso se volvió lento. Quieres usar Copilot para mejorar
productividad en revisiones. ¿Cuál es el uso más efectivo?
A. Automatizar solo issues de estilo como espacios, nombres y declaraciones.
B. Usar Copilot para proponer mejoras de código o algoritmos más eficientes que luego los revisores
evalúan.
C. Depender de Copilot para detectar y corregir bugs automáticamente sin supervisión.
D. Usar Copilot para aceptar automáticamente todos los cambios y sugerencias.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 41
Desarrollas una aplicación Java y usas Copilot para código repetitivo, como getters y setters. A veces genera
código que no sigue el estilo del proyecto. ¿Cómo determina Copilot el contexto del prompt?
A. Siempre analiza todo el proyecto en todos los archivos para dar sugerencias consistentes con la
arquitectura.
B. Usa solo el texto de la línea actual donde está el cursor.
C. Usa únicamente la función o clase donde está el cursor.
D. Analiza código y comentarios cercanos dentro del archivo para entender el contexto y generar
sugerencias.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 42
Luego de recibir una sugerencia de Copilot en el IDE, notas que es relevante pero necesita refinamiento.
¿Qué explica mejor el postprocesamiento mediante proxy server?
A. El proxy registra y anonimiza input del usuario, lo reenvía al modelo Codex y ayuda a excluir información
sensible de las sugerencias finales.
B. El proxy valida sugerencias ejecutando análisis estático de seguridad antes de mostrarlas.
C. El proxy elimina referencias a librerías externas o APIs para evitar problemas legales.
D. El proxy ejecuta el código en un entorno virtual para verificar que no tenga errores runtime.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 43
Tu organización compró licencias Copilot Business y necesita asignarlas programáticamente con GitHub
REST API. ¿Qué endpoint debe usarse para asignar un seat a un usuario?
A. PATCH /orgs/{org}/copilot/license
B. PUT /orgs/{org}/memberships/{username}/copilot
C. POST /users/{username}/copilot/access
D. POST /orgs/{org}/copilot/seats

Respuesta correcta: D

Explicación
La opción D es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 44
Exploras GitHub Copilot Chat para obtener sugerencias y resolver problemas mediante chat interactivo.
¿Cuál describe correctamente el flujo de datos?
A. Envía queries y contexto relevante temporalmente a servidores GitHub, pero los datos de repos privados
no se almacenan ni se usan para entrenamiento.
B. Procesa todas las interacciones localmente sin enviar datos a GitHub.
C. Envía snippets y queries a GitHub, donde se almacenan para entrenamiento futuro.
D. Usa solo datos públicos e ignora el contexto local de repos privados.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 45
Un usuario suscrito a GitHub Copilot Individual quiere integrarlo en un proyecto de equipo. ¿Qué
afirmación sobre limitaciones y funciones del plan Individual es correcta?
A. Solo soporta IDEs alojados en GitHub como Codespaces.
B. Integra varios IDEs locales, pero se orienta a repos personales y requiere licencia por usuario.
C. Da acceso ilimitado a sugerencias en múltiples repos privados de la organización.
D. Permite que varios desarrolladores compartan una sola licencia en un proyecto de equipo.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 46
Trabajas en un proyecto complejo con muchos bugs y requisitos poco claros. Usas Copilot Chat para
entender y corregir problemas. ¿Cuál es un beneficio clave de Copilot Chat en GitHub.com frente a usar
Copilot solo en IDE?
A. Proporciona sugerencias inline de documentación en tiempo real mientras escribes.
B. Permite hacer preguntas en lenguaje natural sobre pull requests, issues y tareas del proyecto.
C. Se integra automáticamente con cualquier sistema externo de tracking.
D. Ofrece debugging avanzado directamente en el navegador.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 47
Trabajas en un proyecto open-source global y notas que Copilot sugiere código con sesgos, como roles de
género en comentarios o variables. ¿Qué acción aborda mejor los riesgos de sesgo de IA?
A. Apagar Copilot para el proyecto y evitar herramientas AI en open-source.
B. Seguir usando Copilot y editar manualmente sugerencias sesgadas.
C. Revisar profundamente sugerencias de Copilot por sesgo, incorporar solo código neutral y concientizar al
equipo.
D. Reportar el problema a GitHub y seguir usando el código generado sin modificarlo.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 48
Tu empresa habilitó GitHub Copilot Enterprise y quiere personalizar resúmenes de PR para alinearlos con
estándares internos de documentación. ¿Qué puede hacer un administrador?
A. Deshabilitar resúmenes de PR revocando write access de Copilot.
B. Activar “Strict Summary Mode” para forzar formato uniforme.
C. Modificar directamente settings de generación de resumen en el panel Enterprise Cloud Admin.
D. Configurar políticas o templates de PR para guiar el formato y usar Copilot alineado a esas reglas.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 49
Trabajas en un proyecto confidencial con información sensible, como PII, y consideras usar Copilot. ¿Qué
acción protege mejor esa información?
A. Remover Copilot completamente del repositorio.
B. Activar configuraciones de privacidad para excluir archivos con contenido sensible del entrenamiento/
contexto.
C. Entrenar Copilot con tu repositorio privado para adaptar sugerencias.
D. Usar comentarios inline para indicar a Copilot cuándo hay información sensible.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque aplica una salvaguarda explícita para limitar el contexto que Copilot puede usar. La exclusión de contenido debe configurarse en los controles admitidos por la organización; revisar el resultado, proteger los secretos y aplicar las obligaciones de privacidad siguen siendo responsabilidad del equipo.

Fuente oficial: [GitHub Docs: exclusión de contenido](https://docs.github.com/en/copilot/concepts/content-exclusion)

Pregunta 50
Como security officer, debes evaluar cómo Copilot maneja snippets en el IDE para asegurar que no exponga
información sensible ni retenga código propietario. ¿Qué explica mejor su manejo?
A. Procesa snippets localmente en el IDE, sin transmitir código a servidores externos.
B. Transmite pequeños snippets desde el IDE a sus servidores para procesamiento en tiempo real, pero no
almacena ni retiene esos datos después de sugerir.
C. Cifra todos los snippets enviados y los almacena permanentemente para mejorar el modelo.
D. Agrega toda la telemetría de usuarios y la usa para reentrenar modelos con cada actualización.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 51
Usas Copilot Chat para debugging y tu manager pide explicar el flujo entre tu máquina, GitHub Copilot y
servidores OpenAI, y si se almacena la información. ¿Qué describe mejor el flujo?
A. Las interacciones se almacenan permanentemente en GitHub para mejorar modelos, sin compartir con
terceros.
B. Copilot Chat envía input a la API Codex de OpenAI para procesamiento, y ningún input se almacena
permanentemente por GitHub u OpenAI.
C. Todo se procesa localmente sin enviar datos externos.
D. Las interacciones se envían a GitHub y luego a OpenAI, almacenando parte del chat para mejorar futuras
respuestas.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Docs: alojamiento de modelos](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)

Pregunta 52
GitHub Copilot incorpora salvaguardas para ayudar a evitar vulnerabilidades de seguridad. ¿Qué afirmación
sobre checks y warnings de seguridad es correcta?
A. Puede identificar y advertir riesgos potenciales en código generado, pero no impide que el usuario
acepte sugerencias inseguras.
B. Las advertencias de seguridad están activadas por defecto y no pueden deshabilitarse.
C. Se integra directamente con GHAS y Dependabot para alertas en tiempo real en cada sugerencia.
D. Tiene escaneo de seguridad integrado que bloquea automáticamente sugerencias vulnerables.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 53
Estás entrenando un modelo tipo Copilot para generar queries SQL eficientes considerando índices y
performance. ¿Qué método de entrenamiento sería más apropiado?
A. Transfer learning usando un modelo conversacional.
B. Reinforcement learning con queries SQL aleatorias y recompensas por ejecuciones exitosas.
C. Unsupervised learning para encontrar patrones en queries SQL.
D. Supervised learning usando un dataset de queries SQL correctamente estructuradas y modelos de datos
correspondientes.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Docs: alojamiento de modelos](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)

Pregunta 54
Lideras juniors y les presentas Copilot. Uno pregunta si siempre da la mejor solución. ¿Qué describe una
limitación clave de Copilot y otros LLMs al generar código?
A. Siempre genera código documentado y actualizado con estándares recientes.
B. Refactoriza automáticamente para alinear todas las sugerencias con arquitectura y estilo del proyecto.
C. Siempre da la solución más eficiente porque aprende de los mejores repos open-source.
D. Puede dar sugerencias obsoletas o subóptimas porque no entiende las mejores prácticas más recientes
ni todo el contexto del proyecto.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 55
Un equipo de GitHub Copilot Business crea una Knowledge Base para ayudar en onboarding. ¿Qué tipo de
conocimiento sería más efectivo para mejorar consistencia y patrones de desarrollo?
A. Timelines de proyectos con ciclos y fechas de releases.
B. Buenas prácticas de estándares de codificación, guías de comentarios y protocolos de manejo de errores.
C. Notas del equipo sobre responsabilidades y roles.
D. Snippets aislados de imports e inicialización de librerías.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 56
Eres parte de un equipo de cinco personas que necesita Copilot para code completion. El líder se preocupa
por costo, cumplimiento de políticas y minimizar riesgos de código de terceros. ¿Qué plan conviene más?
A. GitHub Copilot for Individuals.
B. GitHub Copilot Free Plan.
C. GitHub Enterprise Plan.
D. GitHub Copilot for Business.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 57
Desarrollas una función Python add(a, b) que suma dos enteros. Quieres usar Copilot para generar
boilerplate de unit tests. ¿Cuál es la mejor estrategia?
A. Pedir a Copilot múltiples casos, incluyendo edge cases como add(0, 0) y números negativos como
add(-1, -5) .
B. Pedir solo tests para enteros positivos y escribir edge cases manualmente después.
C. Pedir performance tests para verificar velocidad bajo carga.
D. Generar un solo caso que verifique add(2, 3) .

Respuesta correcta: A

Explicación
La opción A es la adecuada porque usa Copilot como apoyo para proponer pruebas y casos límite, no como sustituto de la validación. Las pruebas generadas deben revisarse, ejecutarse y ampliarse para cubrir comportamiento esperado, entradas inválidas, errores y requisitos de seguridad o rendimiento.

Fuente oficial: [GitHub Docs: escribir pruebas con GitHub Copilot](https://docs.github.com/en/copilot/tutorials/write-tests)

Pregunta 58
CodeTrust Financial adoptó GitHub Copilot Enterprise. El equipo genera PRs frecuentemente y quiere
mejorar reviews. ¿Qué feature de PR summaries sería más útil?
A. Sugerir reviewers automáticamente según historial y experiencia.
B. Resumir cambios del PR destacando actualizaciones importantes en formato fácil de leer.
C. Integración de chat en tiempo real con reviewers para aprobación rápida.
D. Generación automática de explicaciones detalladas por archivo.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 59
Trabajas en Python y necesitas filtrar una lista de órdenes por estado. El prompt “write a function to filter
orders” no sirve. ¿Qué técnica de prompt crafting ayuda más?
A. Omitir detalles y dejar que Copilot dé múltiples opciones.
B. Incluir detalles específicos: formato de entrada, criterio de filtrado y output esperado.
C. Confiar en que Copilot detecte automáticamente lo que necesitas desde el proyecto.
D. Mantener el prompt corto y vago.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 60
Exploras GitHub Copilot Chat para generar, depurar y optimizar código. ¿Qué describe una característica
primaria?
A. Ejecuta scripts directamente dentro del chat sin integración IDE.
B. Hace commits y push automáticamente sin confirmación del usuario.
C. Puede explicar y generar snippets inline, permitiendo interacción en tiempo real con IA mientras
codificas.
D. Solo ofrece autocomplete tradicional sin consultas interactivas.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 61
Como DevOps en servicios financieros usando Copilot Business, tu organización debe rastrear acciones que
impactan producción por regulación. ¿Cómo apoya Copilot Business auditoría y tracking?
A. Con un dashboard en tiempo real de sugerencias Copilot.
B. Habilitando audit logs organizacionales que documentan cambios de configuración y uso de Copilot.
C. Generando reportes manuales de todas las sugerencias durante un sprint.
D. Dando logs detallados por usuario sobre qué sugerencias fueron aceptadas.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 62
Una empresa quiere implementar Copilot en toda la organización, pero le preocupa privacidad de datos.
¿Qué SKU ofrece funciones diseñadas para privacidad enterprise?
A. GitHub Copilot Plus.
B. GitHub Copilot for Business.
C. GitHub Copilot Free.
D. GitHub Copilot Individual.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 63
Tu equipo evalúa capacidades de Copilot en distintos lenguajes. ¿Qué afirmación sobre soporte de
lenguajes es correcta?
A. Copilot funciona óptimamente solo en Python y JavaScript.
B. Soporta múltiples lenguajes, pero funciona mejor en lenguajes con repositorios open-source
abundantes.
C. Funciona igual de bien en todos los lenguajes sin importar popularidad.
D. Puede generar código en cualquier lenguaje aunque nunca haya aparecido en repos públicos.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 64
Eres desarrollador Python automatizando entrada de datos en Excel con openpyxl . Quieres que Copilot
escriba una función que agregue una fila a un archivo Excel existente. ¿Qué prompt generará mejores
sugerencias?
A. “Add data to an Excel sheet.”
B. “Write a function that adds data to a file.”
C. “How to use openpyxl in Python?”
D. “Use openpyxl to write a row of data into the Excel file named 'data.xlsx', in the 'Sheet1' sheet, starting
from the first empty row.”

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 65
Un equipo considera usar Copilot para código de producción, pero sabe que los asistentes basados en LLM
tienen limitaciones. ¿Cuál es la descripción más precisa de una limitación clave?
A. Copilot puede alucinar patrones de código incorrectos o inseguros, por lo que los desarrolladores deben
verificar sus sugerencias.
B. Garantiza corrección y seguridad de todo el código generado.
C. Entiende completamente todo el codebase y mantiene contexto global del proyecto.
D. Genera código solo desde repositorios propietarios de GitHub.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 66
Tu equipo usa Copilot para acelerar generación de código manteniendo cumplimiento GDPR. Un
desarrollador obtuvo sugerencias con contenido sensible, como nombres de variables similares a clientes.
¿Cómo prevenir sugerencias similares?
A. Configurar Copilot para sugerir solo en repos públicos.
B. Contactar a GitHub Support para eliminar sugerencias del training data.
C. Desconectar Copilot inmediatamente y dejar de usarlo.
D. Revisar y modificar archivos del proyecto para excluir sugerencias específicas de contexto.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque aplica una salvaguarda explícita para limitar el contexto que Copilot puede usar. La exclusión de contenido debe configurarse en los controles admitidos por la organización; revisar el resultado, proteger los secretos y aplicar las obligaciones de privacidad siguen siendo responsabilidad del equipo.

Fuente oficial: [GitHub Docs: exclusión de contenido](https://docs.github.com/en/copilot/concepts/content-exclusion)

Pregunta 67
GitHub Copilot ofrece completions mediante modelos de machine learning entrenados con código público.
¿Qué ocurre cuando un desarrollador escribe un snippet y Copilot sugiere una completion?
A. Consulta una knowledge base centralizada de completions aceptadas previamente.
B. Sube todo el repositorio del usuario, incluyendo código privado, a servidores GitHub.
C. Recupera completions desde una lista cacheada de snippets open-source.
D. Envía el contexto local del archivo, incluyendo código y comentarios cercanos, a la API del modelo de
Copilot para inferencia.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 68
Has usado Copilot para crear una app JavaScript. Durante la sesión escribiste prompts para login, API calls y
manejo de errores. Ahora quieres generar código para registrar respuestas exitosas de API en una base de
datos. ¿Cómo usará Copilot el historial de chat?
A. Usará el historial para entender el contexto de la aplicación y generar código consistente con funciones
existentes, como la misma API y estructura de manejo de errores.
B. Ignorará el historial previo y responderá solo al prompt actual.
C. Referenciará el historial, pero no influirá en el código generado.
D. Usará el historial para combinar todo el código previo y devolver un único script con toda la
funcionalidad.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 69
Trabajas en Node.js con Jest. Copilot generó un test básico para calculateTotal(numbers) , que suma
un array. ¿Qué dos acciones mejorarían el test y seguirían buenas prácticas? Selecciona dos.
A. Confiar en pruebas manuales para edge cases como números grandes o floats.
B. Modificar el test para incluir un array vacío como input.
C. Agregar un caso donde el input incluya números negativos y ceros.
D. Confiar en el test generado como suficiente y no agregar más pruebas.

Respuesta correcta: B y C

Explicación
La opción B y C es la adecuada porque usa Copilot como apoyo para proponer pruebas y casos límite, no como sustituto de la validación. Las pruebas generadas deben revisarse, ejecutarse y ampliarse para cubrir comportamiento esperado, entradas inválidas, errores y requisitos de seguridad o rendimiento.

Fuente oficial: [GitHub Docs: escribir pruebas con GitHub Copilot](https://docs.github.com/en/copilot/tutorials/write-tests)

Pregunta 70
Una organización quiere establecer una política que restrinja el uso de Copilot a repositorios específicos por
cumplimiento. ¿Cuál es el paso más efectivo con GitHub Copilot Enterprise?
A. Implementar RBAC específico de Copilot en GitHub Enterprise Server para repositorios autorizados.
B. Configurar controles repository-specific en GitHub Settings para deshabilitar Copilot en repos no
autorizados.
C. Configurar la política de GitHub Copilot a nivel organización, seleccionando solo los repositorios donde
debe estar habilitado.
D. Usar settings de Enterprise Account para restringir Copilot según ubicación geográfica de los
contribuidores.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

# Balotario 3

Cuestionario de práctica: GitHub Copilot
Pregunta 1
Estás configurando GitHub Copilot para tu equipo y quieres personalizar cómo se comporta en distintas
partes del código fuente. Has decidido crear un archivo copilot.yaml para controlar en qué archivos
Copilot puede sugerir código y mantener un comportamiento consistente en los editores del equipo.
¿Cuál de las siguientes opciones es una configuración válida para controlar el comportamiento de
GitHub Copilot?
A. Forzar a Copilot a entrenarse exclusivamente con el código del repositorio actual.
B. Deshabilitar las sugerencias de Copilot para tipos de archivo específicos, como .json o .xml .
C. Configurar Copilot para priorizar rendimiento sobre precisión en sus sugerencias.
D. Hacer que Copilot complete automáticamente todos los comentarios TODO sin confirmación del
usuario.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 2
Un desarrollador está depurando una función JavaScript que calcula el precio total de los productos en
un carrito de compras. A veces la función devuelve NaN en lugar del total correcto. ¿Cuál es la mejor
forma de usar GitHub Copilot para depurar y corregir este problema?
A. Pedir a Copilot que cambie el ciclo for...of por forEach , ya que el tipo de bucle puede estar
causando el error.
B. Pedir a Copilot que reescriba toda la función desde cero sin analizar la causa del problema.
C. Desactivar Copilot y depurar únicamente con console.log .
D. Usar Copilot para sugerir validaciones que verifiquen si price y quantity son números válidos
antes de multiplicarlos.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 3
Estás desarrollando una aplicación web que procesa transacciones de usuarios. Para que tus pruebas
unitarias sean efectivas, necesitas generar datos de prueba estructurados que simulen transacciones
reales. ¿Cómo puede ayudarte GitHub Copilot de forma eficiente?
A. Generando datos de prueba en formato JSON basados en el contexto del código y los comentarios.
B. Conectándose directamente a la base de datos de producción para obtener registros reales.
C. Creando manualmente un dataset y pidiendo a Copilot que lo almacene en una base de datos.
D. Generando datos completamente aleatorios sin validar estructura ni contenido.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 4
Eres un desarrollador que usa frecuentemente la línea de comandos y quieres integrar GitHub Copilot
en tu flujo de trabajo. ¿Cuál de las siguientes afirmaciones describe mejor cómo puede usarse GitHub
Copilot en la CLI?
A. Copilot CLI puede ejecutar automáticamente los comandos generados sin revisión del usuario.
B. Copilot CLI reemplaza por completo la necesidad de usar comandos Git.
C. Copilot CLI puede generar comandos de shell a partir de descripciones en lenguaje natural.
D. Copilot CLI está diseñado principalmente para depurar código fuente dentro del terminal.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque corresponde al uso de Copilot desde la terminal para obtener orientación o proponer comandos. Los comandos generados deben revisarse antes de ejecutarse, especialmente si pueden modificar archivos, repositorios o infraestructura.

Fuente oficial: [GitHub Docs: GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli)

Pregunta 5
Estás usando GitHub Copilot Chat mientras desarrollas una nueva funcionalidad para una aplicación
web de tu empresa. La herramienta te proporciona varias sugerencias de código. ¿Qué opciones tienes
frente a esas sugerencias?
A. Puedes aceptar, modificar o rechazar las sugerencias proporcionadas por Copilot Chat.
B. Puedes hacer que las sugerencias se confirmen automáticamente en el repositorio sin revisión.
C. Solo puedes aceptar sugerencias si pasan inmediatamente el análisis estático del proyecto.
D. Debes aceptar las sugerencias exactamente como se presentan, sin posibilidad de editarlas.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 6
GitHub Copilot genera sugerencias de código basándose en el contexto del código y los comentarios
del desarrollador. ¿Cuál es la secuencia correcta del ciclo de vida de una sugerencia de Copilot dentro
del IDE?
A. Copilot recupera repositorios públicos en tiempo real, genera una sugerencia y confirma
automáticamente el código.
B. El usuario escribe código o un comentario, Copilot envía el contexto a servidores de GitHub, el
modelo genera sugerencias, el IDE las muestra y el usuario decide si acepta, modifica o ignora.
C. Copilot descarga el código localmente, usa modelos offline y confirma el código automáticamente.
D. Copilot escribe código automáticamente, guarda las confirmaciones del usuario y reentrena el
modelo con ellas.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 7
Estás trabajando en un script Python para procesar grandes volúmenes de datos y quieres que Copilot
ayude a escribir una función que filtre filas según condiciones específicas. Las sugerencias no son
precisas y notas que tu prompt puede ser poco claro. ¿Qué práctica mejoraría más la calidad de las
sugerencias?
A. Usar nombres vagos y genéricos como process_data para dar mayor flexibilidad a Copilot.
B. Escribir solo el nombre de la función y dejar que Copilot complete toda la implementación.
C. Proporcionar comentarios detallados y restricciones que expliquen el comportamiento esperado
antes de la definición de la función.
D. Escribir manualmente todo el código y evitar usar Copilot.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 8
Estás trabajando en un IDE con GitHub Copilot habilitado y tienes dudas sobre cómo accede y procesa
tus datos. ¿Cuál de las siguientes opciones describe mejor cómo Copilot maneja tu código y datos al
generar sugerencias?
A. Usa un modelo preentrenado y envía fragmentos relevantes del archivo actual a servidores de
GitHub para generar sugerencias.
B. Procesa todo localmente en tu equipo sin enviar ningún dato a servidores externos.
C. Usa tus datos personales para personalizar sugerencias según tus preferencias.
D. Procesa todos los archivos del repositorio, incluidos privados, para entrenar modelos.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 9
GitHub Copilot incluye un filtro de detección de duplicados para ayudar a evitar que el modelo sugiera
copias textuales de código público. ¿Cuál afirmación es correcta?
A. El filtro bloquea toda sugerencia de código que tenga más de cinco líneas.
B. El filtro compara sugerencias con repositorios públicos y bloquea coincidencias exactas.
C. El filtro solo aplica a usuarios de Copilot Business y Enterprise.
D. El filtro garantiza que ninguna sugerencia se parezca, ni siquiera parcialmente, a código público.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque considera el posible parecido con código público y las obligaciones de licencia. Los filtros y referencias de Copilot son salvaguardas, no una garantía de ausencia total de coincidencias; el equipo debe revisar la licencia y la procedencia antes de reutilizar código.

Fuente oficial: [GitHub Docs: referencias a código público](https://docs.github.com/en/copilot/concepts/completions/code-referencing)

Pregunta 10
Un equipo trabaja en una plataforma de comercio electrónico grande con deuda técnica acumulada.
Quieren usar GitHub Copilot para ayudar a refactorizar y mejorar mantenibilidad y rendimiento. ¿Cuál
es el mejor uso de Copilot para esta tarea?
A. Permitir que Copilot refactorice automáticamente todo el código sin intervención del equipo.
B. Usar Copilot únicamente para documentar el código legacy, sin permitir sugerencias de cambio.
C. Pedir a Copilot que genere nuevos componentes para todo el sistema legacy sin revisión.
D. Usar Copilot para sugerir mejoras en partes pequeñas y aisladas del código, revisando y probando
manualmente antes de integrar.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 11
Como desarrollador que usa GitHub Copilot, un miembro de tu equipo está preocupado por si Copilot
usa repositorios privados para entrenamiento. ¿Qué afirmación explica correctamente el manejo de
datos y seguridad?
A. Copilot usa todos los datos de repositorios públicos y privados para entrenar sus modelos.
B. Copilot no almacena ni usa datos de repositorios privados para reentrenar sus modelos subyacentes.
C. Copilot envía todo el código del usuario a servidores externos fuera de GitHub para procesarlo.
D. Copilot solo usa el archivo actual y nunca recopila ningún tipo de telemetría.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Docs: alojamiento de modelos](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)

Pregunta 12
GitHub Copilot incluye un filtro de duplicación para reducir el riesgo de plagio y evitar sugerencias muy
similares a código público. ¿Cuál describe correctamente su función y limitaciones?
A. Escanea todo el código del usuario y bloquea cualquier duplicado exacto dentro del repositorio.
B. Marca código común de repositorios públicos y lo reemplaza automáticamente por una alternativa
única.
C. Compara sugerencias generadas contra código abierto popular y las marca o bloquea si superan un
umbral de similitud.
D. Detecta código reutilizado de todos los repositorios privados de GitHub para garantizar unicidad.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque considera el posible parecido con código público y las obligaciones de licencia. Los filtros y referencias de Copilot son salvaguardas, no una garantía de ausencia total de coincidencias; el equipo debe revisar la licencia y la procedencia antes de reutilizar código.

Fuente oficial: [GitHub Docs: referencias a código público](https://docs.github.com/en/copilot/concepts/completions/code-referencing)

Pregunta 13
Un equipo de ingenieros senior evalúa GitHub Copilot Chat para desarrollo empresarial a gran escala.
Quieren conocer sus limitaciones para evitar riesgos. ¿Cuál de las siguientes opciones describe una
limitación real de Copilot Chat?
A. No garantiza la exactitud de sus respuestas; los desarrolladores deben verificar las sugerencias antes
de implementarlas.
B. Soporta todos los lenguajes de programación con el mismo nivel de precisión contextual.
C. Puede usarse sin conexión a internet porque genera respuestas localmente.
D. Garantiza que todas las respuestas cumplan con estándares internos de seguridad y estilo.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 14
Estás usando GitHub Copilot en tu IDE y notas que algunas sugerencias parecen específicas y similares
a proyectos open-source. Te preguntas cómo Copilot obtiene y procesa datos para generar sugerencias.
¿Cuál afirmación lo describe mejor?
A. Copilot aprende en tiempo real de tu repositorio privado y comparte ese aprendizaje con otros
usuarios.
B. Copilot solo usa plantillas genéricas predefinidas y no se basa en datos reales.
C. Copilot accede automáticamente a todo código público y privado disponible para personalizar
sugerencias.
D. Copilot usa un modelo entrenado con código público, pero no accede ni usa código privado salvo
que exista permiso explícito.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 15
Una organización evalúa GitHub Copilot Business para su equipo de desarrollo, con el objetivo de
atender preocupaciones de propiedad intelectual y administrar pagos para múltiples usuarios. ¿Cuál es
un beneficio específico frente al plan Individual?
A. Permite entrenar el modelo con código propietario de la organización.
B. Permite facturación centralizada para todos los usuarios bajo una cuenta organizacional.
C. Incluye cifrado de datos, mientras que el plan Individual no lo soporta.
D. Permite uso ilimitado en múltiples cuentas sin asignar licencias individuales.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 16
Tu organización evalúa GitHub Copilot Enterprise para mejorar colaboración y seguridad. Como project
manager, debes informar al equipo legal y DevOps sobre características, licencias e integración. ¿Qué
afirmaciones son correctas? Selecciona dos.
A. GitHub Copilot Enterprise soporta integración con LDAP y single sign-on, SSO, para autenticación
segura.
B. GitHub Copilot Enterprise ofrece un plan gratuito para equipos con menos de 10 usuarios.
C. GitHub Copilot Enterprise permite uso ilimitado de repositorios privados sin costo adicional por
usuarios.
D. GitHub Copilot Enterprise incluye telemetría mejorada y políticas de retención de datos para
organizaciones.

Respuesta correcta: A, D

Explicación
La opción A, D es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 17
Estás usando GitHub Copilot en tu IDE para generar código en un proyecto grande. Quieres entender
cómo funciona el pipeline desde que empiezas a escribir hasta que aparece una sugerencia. ¿Cuál
descripción es correcta?
A. Al escribir, Copilot envía contexto del código a un modelo en la nube, procesa la entrada usando
datos preentrenados y devuelve sugerencias, sin usar tus entradas específicas para entrenar modelos
futuros.
B. Todo el modelo de Copilot corre localmente en tu equipo y no transmite datos por la red.
C. Copilot procesa la entrada únicamente de forma local, sin enviar datos a la nube.
D. Copilot accede a tu código local, lo envía a la nube y entrena el modelo en tiempo real con tus
entradas.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 18
Un desarrollador nota que Copilot Chat genera respuestas lentas o poco relevantes en un proyecto
JavaScript grande. ¿Qué acción mejoraría más su rendimiento y relevancia?
A. Aumentar manualmente los tiempos de espera de Copilot Chat.
B. Desactivar resaltado de sintaxis y autocompletado del editor.
C. Mantener abiertos los archivos relevantes y proporcionar prompts explícitos con contexto detallado.
D. Reducir el tamaño del proyecto eliminando archivos y dependencias no usados.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 19
TechInnovate Solutions considera pasar de Copilot Individual a Copilot Enterprise para mejorar
colaboración, productividad, seguridad y cumplimiento. Como líder DevOps, ¿qué característica de
Copilot Enterprise es más beneficiosa para colaboración segura a gran escala?
A. Acceso a GitHub Copilot Labs para probar funciones experimentales.
B. Controles administrativos centralizados y funciones de seguridad como SAML SSO y auditoría.
C. Acceso a sugerencias de IA en editores como VS Code, Neovim y JetBrains.
D. Sugerencias personalizadas basadas únicamente en patrones locales de cada desarrollador.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 20
Un ingeniero usa GitHub Copilot en su IDE para generar sugerencias en un proyecto Python. Al escribir
una función, Copilot muestra sugerencias inline. ¿Cuál describe mejor el ciclo de vida de datos en ese
proceso?
A. El código del usuario se guarda permanentemente en logs de GitHub para mejorar sugerencias
futuras.
B. Copilot se ejecuta localmente sin internet, basado solo en interacciones pasadas.
C. El código y contexto pasan por un servicio proxy que aplica filtros antes de llegar al modelo, que
genera la sugerencia según el contexto.
D. El código se envía directamente al modelo sin preprocesamiento ni filtros.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 21
Mantienes un codebase JavaScript legacy con bloques repetidos en múltiples funciones. Quieres
refactorizarlo para mejorar legibilidad y mantenibilidad. ¿Cómo puede ayudar Copilot?
A. Sugiriendo reemplazar bloques repetidos por funciones reutilizables.
B. Agregando más comentarios al código existente, sin cambiar estructura.
C. Escribiendo una nueva base de código desde cero.
D. Actualizando automáticamente todo el código a la última versión de JavaScript.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 22
Emma es una desarrolladora cuya empresa no usa GitHub para alojar su código fuente. Ella quiere usar
GitHub Copilot en Visual Studio Code, pero no sabe si necesita alojar su código en GitHub ni qué plan le
permite acceder. ¿Cuál afirmación explica correctamente cómo pueden acceder a Copilot los clientes
que no alojan su código en GitHub?
A. GitHub Copilot está disponible solo para usuarios con un plan GitHub Enterprise activo.
B. GitHub Copilot puede usarse sin cuenta GitHub si el usuario inicia sesión con una cuenta Microsoft.
C. GitHub Copilot requiere una cuenta GitHub y un plan activo, pero puede usarse en IDEs compatibles
aunque el código esté alojado en otro proveedor como GitLab, Bitbucket o Azure Repos.
D. GitHub Copilot es gratuito para cualquier desarrollador, incluso sin cuenta GitHub.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 23
Un backend developer trabaja en un proyecto grande de microservicios y Copilot Chat tiene problemas
para generar sugerencias precisas debido a la complejidad del código. ¿Cuál es el mejor enfoque para
mejorar su eficiencia?
A. Aumentar memoria y CPU del equipo local para que Copilot procese más rápido.
B. Usar comentarios inline y docstrings para explicar la intención de funciones y clases.
C. Dividir obligatoriamente el codebase en repositorios más pequeños para que Copilot no procese
demasiado.
D. Copiar manualmente grandes bloques de código en el chat antes de cada pregunta.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 24
Lideras un equipo en un proyecto financiero con información sensible, como claves de cifrado,
algoritmos financieros y datos de usuarios. Quieres usar Copilot, pero necesitas impedir que acceda a
ciertos archivos. ¿Cuál es el mejor enfoque para exclusiones de contenido?
A. Agregar comentarios dentro del código indicando a Copilot que ignore ciertas secciones.
B. Deshabilitar Copilot para todo el proyecto, aunque solo algunos archivos sean sensibles.
C. Deshabilitar Copilot únicamente para archivos o directorios que contienen información sensible.
D. Ofuscar los datos sensibles para que Copilot no los entienda.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 25
Trabajas en un proyecto Node.js y necesitas escribir una función de validación de entrada de usuario.
Quieres explorar diferentes formas en que Copilot puede sugerir snippets y variaciones. ¿Cuál es el
mejor enfoque?
A. Usar Copilot CLI para buscar ejemplos de validación y luego implementarlos manualmente.
B. Aceptar solo la primera sugerencia inline que aparezca.
C. Usar el atajo de teclado para abrir múltiples sugerencias y recorrer diferentes variaciones de la
función.
D. Invocar una función automática de manejo de excepciones para resolver toda la validación.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 26
Tu empresa desarrolla una aplicación web con backend Flask y necesita pruebas de integración para
validar endpoints de API. ¿Qué prompt es más adecuado para generar boilerplate de pruebas de
integración con Copilot?
A. “Write some tests for my Flask app.”
B. “Generate an integration test for the Flask endpoint /api/orders using pytest and requests to
check status codes and response data.”
C. “Write a Python function to check if my API is working.”
D. “Write a test script to send requests to my API.”

Respuesta correcta: B

Explicación
La opción B es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 27
Una empresa de software negocia un contrato con un cliente preocupado por el uso de Copilot y la
protección de datos propietarios. El cliente quiere garantías por escrito de que sus datos no serán
expuestos o mal usados. ¿Cómo debe abordarse esta preocupación en el contrato?
A. Garantizar que ningún dato del proyecto será usado jamás por Copilot en entrenamiento o
sugerencias.
B. Indicar que GitHub será responsable por cualquier fuga de datos causada por el uso de Copilot.
C. Especificar que el equipo configurará Copilot para excluir archivos sensibles de su contexto durante
el uso.
D. Afirmar que Copilot no usará código open-source para generar sugerencias en código propietario.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 28
Trabajas en un proyecto Node.js y tienes una función sumArray(arr) que recibe un array de
números y retorna su suma. Quieres generar pruebas completas con Copilot, incluyendo casos borde
como array vacío o entrada inválida. ¿Cómo deberías proceder? Selecciona dos.
A. Proporcionar solo el nombre de la función y esperar que Copilot genere automáticamente todas las
pruebas completas.
B. Incluir comentarios claros sobre el comportamiento esperado, como retornar 0 para un array vacío y
lanzar error ante entradas inválidas.
C. Especificar casos borde como arrays con elementos no numéricos o arrays extremadamente
grandes.
D. Pedir a Copilot solo pruebas para entradas normales y escribir manualmente todos los casos borde.

Respuesta correcta: B, C

Explicación
La opción B, C es la adecuada porque usa Copilot como apoyo para proponer pruebas y casos límite, no como sustituto de la validación. Las pruebas generadas deben revisarse, ejecutarse y ampliarse para cubrir comportamiento esperado, entradas inválidas, errores y requisitos de seguridad o rendimiento.

Fuente oficial: [GitHub Docs: escribir pruebas con GitHub Copilot](https://docs.github.com/en/copilot/tutorials/write-tests)

Pregunta 29
Estás construyendo un pipeline de machine learning en Python con Copilot. Sabes que los LLM tienen
limitaciones, como generar código incompleto o impreciso en archivos grandes o complejos. ¿Cómo
afecta la ventana de contexto limitada a la precisión de Copilot?
A. Copilot no usa ventana de contexto y puede analizar múltiples archivos simultáneamente.
B. Copilot puede acceder a todas las líneas de un archivo sin importar su tamaño.
C. La ventana de contexto se expande dinámicamente según el tamaño del proyecto.
D. Copilot solo puede procesar una porción del código cercano a la vez, por lo que sus sugerencias
pueden no alinearse con todo el codebase.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 30
Estás desarrollando una función Python para calcular factorial usando recursión. Copilot sugiere
soluciones que no usan recursión o no manejan casos borde. ¿Qué prompt deberías usar?
A. “Write a Python function to calculate the factorial of a number.”
B. “Write a Python function that calculates the factorial using recursion, including error handling for
negative numbers.”
C. “Write a Python program that returns the factorial of an integer.”
D. “Write a Python function for calculating factorial, with recursion, and return None for negative
inputs.”

Respuesta correcta: B

Explicación
La opción B es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 31
Tu equipo desarrolla una funcionalidad basada en base de datos para una app móvil y necesita probar
rendimiento bajo carga pesada, simulando decenas de miles de usuarios. ¿Cómo puede ayudar Copilot
a generar datasets grandes de forma válida y realista?
A. Generando datos aleatorios sin considerar estructura ni casos de uso.
B. Generando la máxima cantidad de datos posible sin considerar la capacidad de la base de datos.
C. Generando un dataset grande que imite comportamiento real de usuarios y verificando que los datos
sean válidos y estructurados.
D. Generando datasets mínimos y completando manualmente los registros faltantes.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 32
Taylor usa Copilot para acelerar el desarrollo en una startup. Su manager está preocupado por posibles
violaciones de licencias o material con copyright en código generado. ¿Cuál afirmación describe mejor
una limitación legal y ética de Copilot?
A. Copilot puede generar código parecido a código público, por lo que los desarrolladores deben
verificar cumplimiento de licencias antes de usarlo comercialmente.
B. Todo código generado por Copilot es automáticamente open-source y libre para uso comercial.
C. Usar Copilot elimina la necesidad de revisar políticas internas o regulaciones de la industria.
D. Copilot incluye un mecanismo que detecta y bloquea todo código con copyright.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 33
Un equipo quiere evaluar el impacto de GitHub Copilot en productividad tras varias semanas de uso.
Buscan medir aceptación de sugerencias y ahorro de tiempo mediante la Productivity API. ¿Cuál es el
enfoque correcto?
A. Medir únicamente la cantidad de pull requests enviados.
B. Medir solo el total de líneas de código escritas sin distinguir entre código humano y sugerido por
Copilot.
C. Usar únicamente logs generales de actividad de GitHub.
D. Habilitar la recopilación de telemetría de Copilot y usar la Productivity API para medir el porcentaje
de sugerencias aceptadas y adopción.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 34
Desarrollas una app de e-commerce y necesitas una función compleja para calcular costos de envío
según peso, distancia y velocidad de entrega. Tu prompt inicial, “write a function to calculate shipping
costs”, genera código demasiado simple. ¿Qué estrategia de prompt ayudaría más?
A. Escribir un prompt detallado que desglose peso, distancia, velocidad, ejemplos de datos y formato de
salida esperado.
B. Usar un prompt vago y confiar en que Copilot genere una solución sofisticada.
C. Usar un prompt amplio y esperar que Copilot ofrezca opciones suficientes.
D. Dar una función incompleta y dejar que Copilot infiera toda la lógica de e-commerce.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 35
Tienes curiosidad por el ciclo de vida de datos cuando GitHub Copilot genera una sugerencia en tu IDE.
¿Cuál describe mejor el flujo desde tu código hasta la generación de la sugerencia?
A. El modelo corre dentro del IDE y entrena con archivos del proyecto cada vez que se solicita una
sugerencia.
B. El IDE envía partes relevantes del código, el prompt, a servidores de GitHub, donde un modelo
procesa la entrada y devuelve una sugerencia.
C. Copilot entrena dinámicamente con repositorios open-source en segundo plano para generar
sugerencias en tiempo real.
D. El IDE recopila todo el proyecto y lo envía al modelo para entrenarlo antes de sugerir.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 36
Un junior developer usa Copilot para generar código automáticamente y expresa preocupaciones por
posibles riesgos de copyright y seguridad. ¿Qué acciones debe tomar el equipo para mitigar estos
riesgos?
A. Confiar únicamente en los filtros internos de Copilot para evitar código inseguro o con copyright.
B. Permitir el uso de Copilot solo a desarrolladores senior.
C. Dejar de usar Copilot inmediatamente porque es imposible asegurar cumplimiento.
D. Capacitar a los desarrolladores para revisar cuidadosamente el código generado por seguridad,
licencias y cumplimiento de políticas internas.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 37
Estás automatizando el onboarding de nuevos desarrolladores y quieres que cada nuevo miembro de la
organización reciba acceso a GitHub Copilot Business. ¿Cómo puedes usar la REST API para lograrlo?
A. Usar la API para ajustar permisos de Copilot según los repositorios a los que tenga acceso cada
usuario.
B. Crear un script que revise periódicamente nuevos miembros de la organización y les asigne seats de
GitHub Copilot.
C. Asignar automáticamente seats de Copilot basándose únicamente en el rol del usuario.
D. Ajustar automáticamente el nivel de suscripción según la frecuencia de uso de Copilot.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 38
¿Cuál es un enfoque recomendado para mejorar el rendimiento de GitHub Copilot Chat en proyectos
complejos con múltiples archivos interdependientes?
A. Abrir solo los archivos directamente relevantes para la tarea actual y cerrar archivos innecesarios.
B. Usar bloques de código más grandes en cada prompt para que Copilot procese funciones completas.
C. Crear un archivo especial “Copilot-only” con snippets frecuentes.
D. Refactorizar todo el proyecto para eliminar interdependencias entre archivos.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 39
Notas que Copilot genera snippets similares a código open-source disponible en GitHub. Quieres
entender cómo identifica código relevante y genera sugerencias según el contexto. ¿Cuál afirmación es
correcta?
A. Copilot genera sugerencias desde un modelo entrenado con código público, usando reconocimiento
de patrones y procesamiento de lenguaje natural para relacionar tu entrada con código relevante.
B. Copilot usa únicamente las librerías importadas en el archivo para generar sugerencias.
C. Copilot se basa en repositorios privados subidos por usuarios para ofrecer sugerencias
personalizadas.
D. Copilot consulta una base de datos indexada de código para buscar coincidencias exactas.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 40
El equipo de seguridad de XYZ Corp necesita auditar el uso de Copilot en la organización: quién lo
habilitó o deshabilitó, qué equipos tienen acceso y si hubo cambios de políticas. ¿Cómo se deben
buscar eventos relacionados con Copilot Business en los audit logs?
A. Accediendo únicamente mediante API, ya que la UI no permite ver estos eventos.
B. Usando herramientas de terceros porque Copilot Business no soporta audit logging.
C. Buscando el término copilot en el audit log de la organización de GitHub.
D. Exportando todos los logs y analizándolos manualmente fuera de GitHub.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 41
Usas GitHub Copilot en Visual Studio Code y quieres generar sugerencias de código eficientemente con
distintos métodos. ¿Qué acción activa correctamente una sugerencia de Copilot?
A. Ejecutar git copilot suggest desde la terminal.
B. Escribir // Copilot: y presionar Tab para forzar una función completa.
C. Presionar Ctrl + Space en una línea vacía de un archivo soportado para solicitar una sugerencia.
D. Esperar a que Copilot detecte automáticamente una excepción en runtime y sugiera un bloque de
manejo.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 42
GitHub Copilot ofrece asistencia con IA para desarrolladores, incluyendo uso en CLI. ¿Cuál afirmación
describe mejor cómo mejora los flujos de línea de comandos?
A. Genera y sugiere comandos shell a partir de instrucciones en lenguaje natural, ayudando con sintaxis
y tareas repetitivas.
B. Requiere un servidor local dedicado para funcionar.
C. Reemplaza shells tradicionales como Bash, Zsh o PowerShell.
D. Modifica configuraciones del sistema y aplica parches de seguridad sin intervención del usuario.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque corresponde al uso de Copilot desde la terminal para obtener orientación o proponer comandos. Los comandos generados deben revisarse antes de ejecutarse, especialmente si pueden modificar archivos, repositorios o infraestructura.

Fuente oficial: [GitHub Docs: GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli)

Pregunta 43
Una data scientist construye un pipeline end-to-end de machine learning en Python usando pandas,
scikit-learn y TensorFlow. Tareas repetitivas como transformaciones y métricas ralentizan el desarrollo.
¿Cómo puede Copilot agilizar el flujo?
A. Desplegando automáticamente modelos entrenados en servicios cloud sin configuración adicional.
B. Sugiriendo completions contextuales para operaciones comunes como limpieza de datos,
entrenamiento y evaluación.
C. Detectando y corrigiendo automáticamente sesgos en datasets antes del entrenamiento.
D. Generando y validando de forma autónoma datos sintéticos para mejorar generalización.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 44
Tu equipo trabaja en un proyecto altamente sensible y propietario. Están considerando usar Copilot,
pero existen preocupaciones sobre colaboración y código propietario. ¿Qué limitaciones deben tener en
cuenta? Selecciona dos.
A. Copilot maneja automáticamente datos sensibles y evita que se exponga información confidencial.
B. Copilot puede sugerir código similar a código público, generando posibles riesgos de propiedad
intelectual.
C. Copilot garantiza que el código generado es seguro para proyectos propietarios.
D. Copilot no entiende todo el contexto del proyecto, lo que puede causar inconsistencias o sugerencias
conflictivas.

Respuesta correcta: B, D

Explicación
La opción B, D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 45
Desarrollas una app Node.js con autenticación y quieres probar vulnerabilidades como SQL injection y
XSS. El código usa interpolación directa en una consulta SQL. ¿Cómo deberías aprovechar Copilot para
mejorar las pruebas de seguridad?
A. Generar pruebas funcionales generales sin mencionar riesgos específicos.
B. Pedir a Copilot pruebas enfocadas en seguridad usando comentarios que indiquen riesgos como SQL
injection y XSS.
C. Generar solo pruebas para autenticación válida con usuario y contraseña correctos.
D. Pedir a Copilot que optimice la consulta SQL por rendimiento y asumir que eso mejora seguridad.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque usa Copilot como apoyo para proponer pruebas y casos límite, no como sustituto de la validación. Las pruebas generadas deben revisarse, ejecutarse y ampliarse para cubrir comportamiento esperado, entradas inválidas, errores y requisitos de seguridad o rendimiento.

Fuente oficial: [GitHub Docs: escribir pruebas con GitHub Copilot](https://docs.github.com/en/copilot/tutorials/write-tests)

Pregunta 46
Eres administrador de un repositorio privado con datos sensibles de usuarios, como información
personal y pagos. Quieres asegurarte de que Copilot no acceda ni use ese contenido para sugerencias y
mantener cumplimiento GDPR. ¿Qué acción excluye contenido sensible?
A. Hacer privado el repositorio, ya que eso excluye automáticamente todo de Copilot.
B. Agregar comentarios como # copilot:ignore en archivos sensibles.
C. Activar reglas de exclusión de Copilot en la configuración del repositorio y especificar archivos o
directorios sensibles.
D. Quitar archivos sensibles del .gitignore .

Respuesta correcta: C

Explicación
La opción C es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 47
Tienes una función recursiva calculate_fibonacci(n) que calcula Fibonacci correctamente, pero
tiene bajo rendimiento con entradas grandes. Quieres usar Copilot para identificar problemas y sugerir
mejoras. ¿Cómo puede ayudarte?
A. Sugiriendo algoritmos más eficientes, como programación dinámica o memoización, y generando
pruebas para entradas grandes.
B. Generando pruebas solo para valores pequeños y asumiendo que funcionará igual para valores
grandes.
C. Generando pruebas para n = 1000 , pero ignorando sugerencias de refactorización.
D. Reescribiendo la función con lógica recursiva más compleja.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 48
¿Cuál de las siguientes funcionalidades es exclusiva de GitHub Copilot Business y no está disponible
para usuarios Individual?
A. Sugerencias de código contextuales en tiempo real.
B. Controles administrativos centralizados para gestionar acceso de usuarios y asignación de licencias.
C. Soporte para múltiples lenguajes de programación e IDEs.
D. Integración con IDEs cloud como GitHub Codespaces.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque aplica una salvaguarda explícita para limitar el contexto que Copilot puede usar. La exclusión de contenido debe configurarse en los controles admitidos por la organización; revisar el resultado, proteger los secretos y aplicar las obligaciones de privacidad siguen siendo responsabilidad del equipo.

Fuente oficial: [GitHub Docs: exclusión de contenido](https://docs.github.com/en/copilot/concepts/content-exclusion)

Pregunta 49
Estás desarrollando software de RR. HH. con Copilot. Al revisar sugerencias para una funcionalidad de
filtrado de candidatos, notas posible sesgo hacia atributos demográficos como género o etnia. ¿Cuál es
la acción más responsable?
A. Reentrenar localmente el modelo de Copilot con datos no sesgados.
B. Revisar y refactorizar manualmente la lógica sesgada, además de implementar pruebas de equidad
en el proceso de filtrado.
C. Confiar en auditorías posteriores al despliegue para detectar discriminación.
D. Ignorar el sesgo porque Copilot se entrenó con datos públicos.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 50
Como IT manager de una empresa mediana, quieres implementar GitHub Copilot para mejorar la
productividad del equipo. Copilot Business ofrece funciones de seguridad y cumplimiento. ¿Qué
característica influiría más en tu decisión?
A. Control centralizado sobre configuraciones y políticas organizacionales para sugerencias de IA.
B. Gestión individual de licencias de desarrolladores.
C. Funciones de colaboración como proyectos de equipo y repositorios compartidos.
D. Modelos de sugerencia restringidos específicamente por contexto organizacional.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 51
Un junior developer usa GitHub Copilot Chat para generar código y resolver problemas, pero encuentra
limitaciones en ciertos casos. ¿Cuál representa una limitación real que los desarrolladores deben
conocer?
A. Copilot Chat requiere conexión activa a internet y no puede usarse en entornos offline.
B. Copilot Chat solo puede sugerir bloques completos de código y no ayuda con código parcial.
C. Copilot Chat no puede dar ninguna sugerencia para lenguajes no soportados.
D. Copilot Chat se niega a interactuar si detecta vulnerabilidades abiertas en el proyecto.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 52
Estás creando una aplicación de machine learning para clasificar imágenes y quieres que Copilot genere
una función Python con TensorFlow que cargue un dataset, construya una CNN, entrene el modelo y
evalúe precisión. Tu prompt inicial fue incompleto. ¿Cuál prompt refinado guía mejor a Copilot?
A. “Write a Python function to classify images using TensorFlow and create a CNN.”
B. “Write a TensorFlow Python function to classify images using a CNN, handling training and testing.”
C. “Generate a Python function to classify images using TensorFlow and neural networks.”
D. “Write a Python function using TensorFlow to load a dataset, build a CNN, train it, and evaluate its
accuracy.”

Respuesta correcta: D

Explicación
La opción D es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 53
¿Qué función de GitHub Copilot Chat ayuda a los desarrolladores a explorar soluciones alternativas a un
problema de código mediante diferentes enfoques en tiempo real?
A. Prompts contextuales que se adaptan al código escrito.
B. Sugerencias de control de versiones para commits y ramas.
C. Depuración automática que identifica y corrige errores sin intervención.
D. Sugerencias de refactorización que ofrecen alternativas para mejorar eficiencia o calidad del código.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 54
Trabajas en un proyecto con varios colaboradores y debes escribir una función utilitaria que procese
entradas: aceptar solo enteros mayores a 10, multiplicarlos por 2 e ignorar entradas inválidas. ¿Qué
acciones con Copilot podrían mejorar tu productividad? Selecciona dos.
A. Usar Copilot para generar snippets iniciales de filtrado y luego ajustar manualmente la lógica a los
requisitos.
B. Dejar que Copilot complete toda la función sin revisar sus sugerencias.
C. Confiar en que Copilot manejará automáticamente excepciones para entradas no enteras sin
especificarlo.
D. Usar Copilot para ayudar con la transformación de entradas válidas y luego escribir pruebas para
validar el comportamiento.

Respuesta correcta: A, D

Explicación
La opción A, D es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 55
Trabajas en un proyecto JavaScript y quieres generar una función que sume dos números usando
Copilot. ¿Cuál prompt proporciona mejor contexto?
A. “Create a function.”
B. “Write a JavaScript function named add that takes two parameters, adds them, and returns the sum.”
C. “Sum two numbers.”
D. “Write a function that calculates the sum of two numbers in Python.”

Respuesta correcta: B

Explicación
La opción B es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 56
Tu equipo usa Copilot Chat desde hace semanas, pero algunos desarrolladores notan respuestas lentas
y sugerencias menos precisas. ¿Qué acción probablemente mejoraría rendimiento y relevancia?
A. Desactivar linting o validación de errores en tiempo real para evitar conflictos.
B. Organizar el código en funciones o módulos pequeños y bien definidos para que Copilot procese
bloques más claros.
C. Limpiar y reiniciar regularmente el workspace del IDE.
D. Evitar comentarios complejos o pseudocódigo, porque pueden confundir a Copilot.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 57
Trabajas en un backend de e-commerce que procesa órdenes y necesitas pruebas unitarias para casos
borde como campos faltantes, tipos incorrectos y datasets grandes. ¿Cuál es el mejor enfoque para
usar Copilot al generar datos de prueba?
A. Usar Copilot solo para datos triviales y escribir manualmente datasets complejos.
B. Usar Copilot para generar una variedad de datos de ejemplo, incluidos casos borde, y revisar
manualmente que sean válidos.
C. Usar Copilot para generar datos basados en clientes reales para mayor precisión.
D. Confiar en datos aleatorios generados por Copilot sin validación.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 58
Un desarrollador usa GitHub Copilot Chat para generar código Python y nota que las respuestas varían
según el tipo de entrada. ¿Cuál describe mejor cómo Copilot Chat procesa prompts?
A. Extrae código directamente de repositorios GitHub sin transformaciones adicionales.
B. Convierte automáticamente todos los prompts de texto en consultas SQL antes de procesarlos.
C. Trata todos los prompts exactamente igual, sin priorización.
D. Prioriza comentarios inline y código contextual antes de procesar consultas generales en lenguaje
natural.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 59
Un desarrollador quiere usar GitHub Copilot CLI para generar y refinar instrucciones de línea de
comandos. Antes de usarlo, necesita instalarlo y configurarlo. ¿Cuál es el primer paso correcto?
A. Ejecutar gh extension install github/copilot-cli para instalar Copilot como extensión de
GitHub CLI.
B. Ejecutar npm install -g copilot-cli para instalarlo globalmente como paquete NPM.
C. Descargar el binario de Copilot CLI desde GitHub Releases y agregarlo al PATH.
D. Habilitar Copilot CLI desde GitHub Settings antes de instalarlo.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque corresponde al uso de Copilot desde la terminal para obtener orientación o proponer comandos. Los comandos generados deben revisarse antes de ejecutarse, especialmente si pueden modificar archivos, repositorios o infraestructura.

Fuente oficial: [GitHub Docs: GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli)

Pregunta 60
GitHub Copilot usa machine learning para proporcionar sugerencias basadas en el contexto dentro del
editor. ¿Cuál describe mejor cómo genera sugerencias y maneja datos del usuario?
A. Usa reglas estáticas sin conexión a internet ni intercambio de datos con servidores de GitHub.
B. Ejecuta un modelo local en el equipo del usuario y procesa solo el sistema de archivos local.
C. Envía porciones de código del usuario a un modelo cloud, procesa la información y devuelve
sugerencias sin almacenar ese código a largo plazo.
D. Almacena todo el código e interacciones indefinidamente en la nube para mejorar el modelo.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 61
Un desarrollador usa Copilot en VS Code y quiere entender cómo se generan las sugerencias de código.
¿Cuál describe mejor el ciclo de vida de una sugerencia?
A. El IDE captura la entrada del usuario, envía contexto al modelo de Copilot, recibe una sugerencia y
espera que el usuario la acepte, modifique o rechace.
B. Copilot recupera sugerencias desde una base de datos estática de snippets preentrenados.
C. Copilot escanea todo el repositorio, encuentra código similar y pega el snippet más relevante.
D. Copilot monitorea todos los archivos del workspace y pregenera sugerencias sin entrada del usuario.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 62
Eres freelance y trabajas con múltiples lenguajes y frameworks. Estás evaluando suscribirte a GitHub
Copilot Individual para acelerar tus tareas. ¿Cuál es una característica principal del plan Individual?
A. Acceso a herramientas enterprise de seguridad y cumplimiento, incluyendo escaneo automático de
vulnerabilidades.
B. Acceso ilimitado a GitHub Actions como parte de la suscripción Copilot.
C. Gestión de permisos y niveles de acceso para miembros de equipo.
D. Acceso a sugerencias de código generadas por IA en múltiples lenguajes dentro de IDEs soportados,
con autocompletado en tiempo real y sugerencias contextuales.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 63
Lideras un equipo que desarrolla un sistema de recomendaciones de e-commerce con Copilot. Como
maneja datos sensibles de usuarios, quieres cumplir principios de IA Responsable. ¿Cuál es el enfoque
más responsable?
A. Usar las sugerencias de Copilot tal como vienen, ya que la herramienta proviene de una organización
reconocida.
B. Confiar en que el entrenamiento con datasets diversos garantiza salidas éticas y justas.
C. Revisar cuidadosamente cada pieza de código generada por Copilot y aplicar pruebas de equidad
durante el desarrollo.
D. Desactivar cualquier funcionalidad relacionada con datos sensibles para evitar problemas éticos.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 64
Has habilitado GitHub Copilot Chat en un proyecto complejo y quieres conocer sus capacidades para
aprovecharlo mejor. ¿Cuáles son características ofrecidas por Copilot Chat? Selecciona tres.
A. Explicaciones detalladas de fragmentos de código complejos directamente dentro del IDE.
B. Capacidad de hacer preguntas sobre el codebase y recibir respuestas impulsadas por IA.
C. Detección y corrección automática de bugs sin intervención del desarrollador.
D. Sugerencias contextuales basadas en el archivo actual y el proyecto.

Respuesta correcta: A, B, D

Explicación
La opción A, B, D es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 65
¿Cuál describe mejor una ventaja de usar modelos personalizados con GitHub Copilot para un equipo
enterprise?
A. Garantizar que Copilot produzca únicamente sugerencias de sintaxis.
B. Reemplazar la revisión humana de código mediante generación completamente probada.
C. Permitir que Copilot incorpore librerías y frameworks propietarios de la empresa para sugerencias
más contextuales.
D. Garantizar automáticamente que todas las sugerencias cumplan con guías de estilo corporativas.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 66
Trabajas en un codebase complejo y usas Copilot para sugerir snippets. Quieres entender cómo genera
sugerencias en tiempo real y cómo se alinea con el contexto del proyecto. ¿Qué lo describe mejor?
A. Copilot recupera snippets preescritos de repositorios GitHub que coinciden con tus palabras clave.
B. Copilot usa IA entrenada con repositorios open-source y contenido licenciado para predecir código
según el contexto del editor.
C. Copilot se basa únicamente en sugerencias que aceptaste previamente.
D. Copilot sugiere snippets aleatorios de repositorios públicos sin considerar contexto.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 67
Desarrollas una aplicación Python que procesa grandes datasets. Copilot sugiere varias optimizaciones.
¿Cuál de las siguientes sería una buena forma de optimizar rendimiento?
A. Reemplazar todos los bucles por llamadas recursivas para reducir líneas de código.
B. Reescribir todo el código en otro lenguaje, como Java, para hacerlo rápido por defecto.
C. Reemplazar operaciones de archivo con print() para monitorear flujo de datos en tiempo real.
D. Usar list comprehensions en lugar de bucles for simples cuando aplique.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 68
Desarrollas una app full-stack con Python en backend, JavaScript en frontend y SQL en base de datos.
Copilot acelera el desarrollo, pero sus sugerencias no siempre entienden la arquitectura del equipo.
¿Cómo mejorar respuestas personalizadas y contextuales?
A. Usar Copilot solo en archivos aislados y para funciones simples.
B. Refactorizar todo el proyecto para usar un único lenguaje de programación.
C. Usar Copilot en un entorno multiarchivo donde tenga acceso a archivos relevantes del proyecto y
pueda entender mejor el contexto.
D. Desactivar sugerencias específicas por lenguaje para evitar complejidad.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 69
Trabajas en un proyecto con archivos de configuración e información sensible, como API keys. Quieres
configurar el repositorio para que Copilot no use ciertos archivos o directorios al generar sugerencias.
¿Cuál opción excluye correctamente esos archivos?
A. Agregar las rutas en .gitignore .
B. Crear un archivo copilot.json en la raíz del repositorio y listar archivos o directorios a ignorar.
C. Agregar una sección copilot-ignore dentro de la carpeta .github .
D. Agregar las rutas al settings.json de Visual Studio Code.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque aplica una salvaguarda explícita para limitar el contexto que Copilot puede usar. La exclusión de contenido debe configurarse en los controles admitidos por la organización; revisar el resultado, proteger los secretos y aplicar las obligaciones de privacidad siguen siendo responsabilidad del equipo.

Fuente oficial: [GitHub Docs: exclusión de contenido](https://docs.github.com/en/copilot/concepts/content-exclusion)

Pregunta 70
Luego de instalar correctamente GitHub Copilot CLI, un desarrollador intenta usarlo, pero recibe un
error de autenticación. ¿Cuál es el siguiente paso correcto?
A. Ejecutar copilot auth --login .
B. Crear un personal access token y guardarlo manualmente en ~/.copilotrc .
C. Ejecutar gh auth login para autenticarse con GitHub CLI antes de usar comandos de Copilot.
D. Reiniciar la terminal y volver a ejecutar el comando de instalación.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque corresponde al uso de Copilot desde la terminal para obtener orientación o proponer comandos. Los comandos generados deben revisarse antes de ejecutarse, especialmente si pueden modificar archivos, repositorios o infraestructura.

Fuente oficial: [GitHub Docs: GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli)

# Balotario 4

Cuestionario de práctica: GitHub Copilot
Pregunta 1
Estás trabajando en un proyecto Python y no estás seguro de cómo manejar correctamente una
excepción cuando un archivo no se puede abrir. Decides usar GitHub Copilot para que te ayude a
generar código adecuado de manejo de excepciones. ¿Cuál es la mejor forma de activar la ayuda de
Copilot en esta situación?
A. Usar GitHub Copilot CLI para buscar un ejemplo de manejo de excepciones desde la línea de
comandos.
B. Empezar a escribir el inicio de un bloque try-except y permitir que Copilot sugiera el código de
manejo de excepciones.
C. Usar Copilot Chat para pegar todo el código y pedir la resolución del error.
D. Usar únicamente documentación externa y evitar Copilot para este caso.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 2
Un equipo de desarrolladores usa GitHub Copilot Chat para mejorar su flujo de trabajo. Un
desarrollador quiere asegurarse de que Copilot recuerde el contexto de la conversación cuando haga
preguntas de seguimiento sobre un problema de depuración. ¿Cuál es la mejor práctica para
aprovechar el historial de chat?
A. Subir documentación al historial de Copilot para que la recuerde permanentemente.
B. Iniciar una nueva sesión de chat para cada pregunta.
C. Mantener la conversación dentro de la misma sesión para que Copilot conserve el contexto.
D. Confiar en que Copilot recordará conversaciones pasadas entre distintos repositorios.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 3
Un ingeniero está refactorizando un proyecto Python legacy y quiere mejorar la legibilidad y el
rendimiento de sus funciones. Está considerando usar GitHub Copilot Chat. ¿Cuál es la mejor forma en
que Copilot Chat puede ayudar?
A. Ejecutando automáticamente el código refactorizado y verificando que funcione.
B. Sugiriendo reescrituras optimizadas de funciones basadas en buenas prácticas y contexto del código
existente.
C. Modificando todo el codebase en un solo comando.
D. Bloqueando cualquier código que no cumpla estrictamente PEP 8.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 4
Estás trabajando en un backend y quieres implementar manejo robusto de excepciones. Has escuchado
que GitHub Copilot puede sugerir código de manejo de errores. ¿Qué dos métodos pueden activar la
ayuda de Copilot para manejo de excepciones? Selecciona dos.
A. Usar Inline Chat para pedir patrones de manejo de excepciones.
B. Usar la integración de Copilot con GitHub Issues para reportar excepciones y recibir fixes.
C. Escribir comentarios que describan el comportamiento esperado ante excepciones.
D. Activar el modo especial “exception-aware mode”.

Respuesta correcta: A, C

Explicación
La opción A, C es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 5
Usas GitHub Copilot Chat para escribir y refactorizar código. Quieres entender qué tipos de entradas
procesa de forma efectiva para sacarle más provecho. ¿Cuál de las siguientes NO es un tipo de entrada
para el que GitHub Copilot Chat esté diseñado?
A. Solicitudes de refactorización, como “optimiza este código”.
B. Instrucciones simples de programación, como “escribe una función que sume dos números”.
C. Preguntas en lenguaje natural sobre buenas prácticas de programación.
D. Entrada visual como imágenes o diagramas.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 6
Desarrollas una aplicación web global que debe soportar varios idiomas, como español, alemán y
francés. Quieres usar GitHub Copilot para ayudarte con traducciones e internacionalización. ¿Cómo
puede ayudarte Copilot de forma productiva y segura?
A. Generando todos los archivos de traducción sin necesidad de validación posterior.
B. Ayudando a crear archivos de recursos por idioma, como .json o .po , mientras las traducciones
se revisan manualmente.
C. Traduciendo solo elementos visuales de la interfaz y dejando el resto en el idioma original.
D. Traduciendo automáticamente cualquier cadena en inglés sin revisión humana.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 7
Trabajas en un proyecto sensible y decides usar GitHub Copilot como asistente de código. Te preocupa
cómo procesa tus datos. ¿Cuál explicación describe mejor cómo Copilot maneja el código que escribes?
A. Envía proyectos completos a servidores de GitHub y los almacena para mejorar el modelo.
B. Solo envía metadatos como nombres de variables y firmas de funciones.
C. Envía un contexto limitado, como el código actual, a servidores de GitHub para generar sugerencias,
sin almacenarlo ni usarlo para reentrenamiento futuro.
D. Analiza todo el código localmente y nunca envía datos a servidores.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 8
¿Cuál acción puede mejorar más la relevancia y rendimiento de GitHub Copilot Chat en codebases
grandes?
A. Limitar la cantidad de archivos o pestañas abiertas en el editor.
B. Activar resaltado de sintaxis para mejorar el reconocimiento de patrones.
C. Aumentar la frecuencia de actualización de Copilot Chat.
D. Incrementar manualmente el límite máximo de tokens por respuesta.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 9
Estás usando Copilot para escribir un script Python y notas sugerencias repetitivas para tareas comunes
como bucles o manejo de errores. ¿Cómo influye la frecuencia de ejemplos comunes en los datos de
entrenamiento?
A. Copilot evita patrones frecuentes para favorecer soluciones creativas.
B. Los patrones más vistos aumentan la probabilidad de que Copilot sugiera soluciones genéricas y
repetitivas.
C. Copilot ignora ejemplos comunes y prioriza patrones raros.
D. Los ejemplos comunes garantizan soluciones altamente personalizadas para tu proyecto.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Docs: alojamiento de modelos](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)

Pregunta 10
Un desarrollador de microservicios cambia constantemente entre Java para backend, JavaScript para
frontend y YAML para Kubernetes, lo que reduce productividad. ¿Cómo puede Copilot ayudar a mitigar
el cambio de contexto?
A. Modificando automáticamente un archivo para que tenga el estilo de otro.
B. Restringiendo el acceso a archivos de otros proyectos.
C. Obligando al desarrollador a terminar un archivo antes de pasar a otro.
D. Detectando automáticamente el lenguaje y sugiriendo snippets relevantes según el contexto
reciente.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 11
Trabajas en un proyecto de salud y Copilot sugiere código para procesar datos de pacientes, incluyendo
PHI regulado por HIPAA. ¿Qué acción responsable debes tomar antes de usar ese código?
A. Usar el código tal como está, pero restringiendo el acceso al repositorio.
B. Asumir que Copilot aprendió buenas prácticas por estar entrenado con código ampliamente usado.
C. Verificar que el código cumpla los marcos legales y regulatorios aplicables, como HIPAA, consultando
expertos si es necesario.
D. Confiar solo en pruebas automatizadas para validar cumplimiento legal.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 12
Un ingeniero DevOps administra suscripciones de Copilot Business y quiere usar la REST API para
asignar licencias, consultar detalles y deshabilitar Copilot para usuarios específicos. ¿Cuál acción
describe correctamente la administración mediante API?
A. Usar DELETE /orgs/{org}/copilot/billing/seats/{username} para remover un usuario de
Copilot Business.
B. Generar reportes con timestamps y snippets completos de código sugerido por Copilot.
C. Ajustar el modelo de IA individual de cada usuario según su historial de código.
D. Usar obligatoriamente un token Enterprise incluso si la organización solo tiene Copilot Business.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 13
¿Cuál describe mejor el proceso de pipeline de datos que sigue GitHub Copilot al generar sugerencias
dentro del IDE?
A. Almacena toda la entrada localmente y usa datos cacheados de sesiones previas.
B. Envía la entrada a un modelo cloud que genera sugerencias según el contexto sin almacenar
permanentemente la entrada.
C. Usa modelos locales preentrenados y no interactúa con recursos cloud.
D. Registra toda la entrada en el historial del IDE para análisis offline.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 14
Administras un equipo que usa Copilot en una empresa con datos sensibles bajo regulaciones como
GDPR. En una revisión detectas sugerencias que parecen información sensible de proyectos previos.
¿Qué medidas deberían implementar?
A. Solicitar a GitHub que elimine todos los datos sensibles de su modelo.
B. Usar modo privado y excluir archivos sensibles del contexto de Copilot.
C. Desactivar Copilot en todo el proyecto.
D. Cifrar datos dentro del código para que Copilot no los lea.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 15
Una consultora evalúa GitHub Copilot Individual vs Business. Quiere indemnización de propiedad
intelectual y facturación centralizada. ¿Qué plan cumple mejor estos requisitos?
A. GitHub Copilot Individual, porque ofrece la misma indemnización a menor costo.
B. Ningún plan ofrece facturación centralizada.
C. GitHub Copilot Business, porque incluye indemnización IP y facturación centralizada.
D. GitHub Copilot Individual, porque permite facturación organizacional.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 16
GitHub Copilot Enterprise permite a organizaciones crear y almacenar una base de conocimiento para
mejorar productividad. ¿Qué tipos de conocimiento pueden almacenarse?
A. Credenciales cifradas y secretos de usuarios.
B. Código fuente completo de toda la aplicación para compartirlo con todos.
C. Snippets, buenas prácticas, patrones de diseño, documentación de APIs y guías internas de
codificación.
D. Logs de runtime e información de debugging de aplicaciones desplegadas.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Docs: alojamiento de modelos](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)

Pregunta 17
Estás creando una Knowledge Base para tu departamento de desarrollo, orientada a buenas prácticas,
estándares y patrones comunes. ¿Cuál NO es un tipo típico de conocimiento almacenado en una
Knowledge Base de desarrollo?
A. Snippets para tareas frecuentes.
B. Métricas de rendimiento del negocio para evaluar éxito de la aplicación.
C. Patrones de diseño para problemas comunes.
D. Buenas prácticas para escribir código limpio y mantenible.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Docs: alojamiento de modelos](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)

Pregunta 18
Trabajas en una empresa donde la privacidad es prioritaria y usas Copilot para sugerencias.
Management pregunta cómo maneja datos sensibles como algoritmos propietarios y API keys. ¿Cuál
afirmación lo describe mejor?
A. Copilot envía la entrada a servidores remotos, aplica filtros y no almacena la entrada después de
generar sugerencias.
B. Copilot detecta automáticamente todo dato sensible y evita procesarlo.
C. Copilot procesa todo localmente en el IDE.
D. Copilot almacena toda entrada para entrenar modelos futuros.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 19
Un desarrollador usa Copilot Chat para mejorar productividad. ¿Qué característica le permite recibir
explicaciones de código y sugerencias directamente en el editor?
A. Sugerencias inline para completar líneas de código.
B. Explicaciones de código en lenguaje natural para entender segmentos complejos.
C. Resaltado de sintaxis para mejorar lectura.
D. Colaboración en tiempo real con varios usuarios editando el mismo archivo.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 20
Trabajas en un codebase legacy con convenciones no estándar, poca documentación y librerías
obsoletas. Quieres usar Copilot, pero conoces sus limitaciones. ¿Cuáles dos limitaciones aplican mejor?
Selecciona dos.
A. Copilot puede tener comprensión limitada de librerías obsoletas y sugerir APIs modernas
incompatibles.
B. Copilot manejará perfectamente codebases multilenguaje con igual calidad en todos los lenguajes.
C. Copilot puede tener problemas con patrones no estándar y obsoletos del codebase legacy.
D. Copilot puede refactorizar automáticamente todo el legacy sin intervención humana.

Respuesta correcta: A, C

Explicación
La opción A, C es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 21
Eres lead developer y tu equipo evalúa GitHub Copilot Chat. Debes explicar sus funciones principales en
una demo. ¿Cuál es una característica primaria?
A. Generar explicaciones humanas para cualquier código de todo el repositorio.
B. Permitir hacer preguntas contextuales sobre código y recibir respuestas inteligentes.
C. Sugerir cambios basados en resultados de pruebas del proyecto.
D. Conectarse directamente con pipelines CI/CD para desplegar aplicaciones.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 22
GitHub Copilot está entrenado con una gran cantidad de código público. ¿Cómo afecta la prevalencia de
ejemplos comunes en sus datos de entrenamiento a las sugerencias que genera?
A. Copilot evita intencionalmente patrones frecuentes para generar soluciones novedosas.
B. Sus sugerencias siempre reflejan los estándares más recientes porque se actualiza en tiempo real.
C. Es más probable que genere patrones convencionales y ampliamente usados antes que soluciones
innovadoras o muy personalizadas.
D. Detecta patrones sobreutilizados y los reemplaza automáticamente por alternativas.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Docs: alojamiento de modelos](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)

Pregunta 23
John quiere usar GitHub Copilot Individual en JetBrains IntelliJ IDEA. Ha escuchado que Copilot puede
sugerir documentación, pruebas y refactorizaciones, pero no sabe qué está disponible directamente en
el IDE. ¿Cuál es una característica principal de Copilot Individual en el IDE?
A. Ejecutar automáticamente pruebas unitarias y validar resultados.
B. Generar código mediante comandos de voz.
C. Reemplazar herramientas tradicionales de debugging.
D. Sugerir funciones completas y snippets basados en comentarios y contexto.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 24
Lideras un equipo que integra Copilot en un proyecto con algoritmos propietarios y lógica confidencial.
Copilot usa el contenido de archivos habilitados para generar sugerencias. ¿Cómo puedes excluir
contenido específico y seguir usando Copilot en otras partes?
A. Deshabilitar Copilot en archivos o repositorios sensibles.
B. Ofuscar manualmente comentarios y código confidencial.
C. Usar variables de entorno para controlar el acceso de Copilot.
D. Confiar en filtros automáticos para excluir código sensible.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 25
Tu equipo quiere integrar Copilot y necesita entender sus limitaciones como herramienta basada en
LLM. ¿Qué afirmaciones describen correctamente sus limitaciones? Selecciona dos.
A. El código generado por Copilot puede usarse en producción sin validación.
B. Copilot puede generar código basado en patrones, pero no garantiza que sea óptimo en
rendimiento.
C. Copilot entiende automáticamente reglas de negocio específicas del proyecto durante la
configuración inicial.
D. Copilot puede generar código que no compile o no encaje correctamente con la sintaxis esperada.

Respuesta correcta: B, D

Explicación
La opción B, D es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 26
Lideras un equipo que evalúa Copilot Chat para programación, explicación de código y troubleshooting.
¿Qué función es más significativa para desarrolladores?
A. Chat interactivo con un asistente IA que da sugerencias, explicaciones y ayuda de troubleshooting
según el contexto del código.
B. Gestión automática de tareas y asignación de tickets.
C. Push y merge automáticos según conversaciones.
D. Colaboración en tiempo real entre múltiples desarrolladores dentro del chat.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 27
Un desarrollador quiere usar GitHub Copilot, pero no tiene cuenta GitHub y quiere conocer sus
opciones. ¿Cuál afirmación es correcta sobre disponibilidad para clientes que no usan GitHub?
A. Copilot solo está disponible para usuarios GitHub, con cuenta GitHub para todos los planes.
B. Usuarios no GitHub pueden acceder a Copilot mediante Microsoft Visual Studio y VS Code si tienen
suscripción Azure.
C. Usuarios no GitHub no pueden acceder porque solo admite autenticación GitHub.
D. Cualquier usuario puede acceder registrándose con cualquier correo desde Visual Studio.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque corresponde al uso de Copilot desde la terminal para obtener orientación o proponer comandos. Los comandos generados deben revisarse antes de ejecutarse, especialmente si pueden modificar archivos, repositorios o infraestructura.

Fuente oficial: [GitHub Docs: GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli)

Pregunta 28
Tu organización evalúa Copilot para desarrolladores que no usan GitHub como control de versiones.
Quieres entender funciones y limitaciones para clientes no GitHub. ¿Qué afirmación es verdadera?
A. Clientes no GitHub acceden a todas las funciones, incluidas herramientas de colaboración de equipo,
sin GitHub Teams o Enterprise.
B. No pueden usar sugerencias para frameworks alojados en GitHub.
C. Tienen acceso a funciones básicas, pero características avanzadas como revisión de código en equipo
y compliance se reservan para GitHub Enterprise.
D. Copilot ofrece funcionalidad idéntica para todos, sin restricciones por plan.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque corresponde al uso de Copilot desde la terminal para obtener orientación o proponer comandos. Los comandos generados deben revisarse antes de ejecutarse, especialmente si pueden modificar archivos, repositorios o infraestructura.

Fuente oficial: [GitHub Docs: GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli)

Pregunta 29
Trabajas en un proyecto grande y notas que las sugerencias de Copilot a veces son irrelevantes en
archivos extensos. ¿Qué describe mejor la limitación por ventana de contexto?
A. Copilot solo considera un número limitado de líneas alrededor del cursor.
B. Copilot analiza todo el proyecto sin importar el tamaño.
C. Copilot procesa todas las líneas de un archivo y prioriza cambios recientes.
D. Copilot aprende continuamente de todo el codebase mientras escribes.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 30
Tu equipo desarrolla una aplicación Python y quiere automatizar pruebas unitarias con Copilot. ¿Qué
prompt generaría mejor un boilerplate de prueba para calculate_discount(price,
discount_percentage) ?
A. “Write a test for the calculate_discount function.”
B. “Create a function in Python that tests discount calculations using random values.”
C. “Generate a Python unit test for the function calculate_discount(price, discount_percentage) that
checks for valid input, invalid input, and edge cases.”
D. “Use GitHub Copilot to generate a test function for calculating discounts.”

Respuesta correcta: C

Explicación
La opción C es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 31
Un desarrollador quiere entender cómo el modelo Codex detrás de Copilot genera completions. ¿Cuál
explicación es correcta?
A. Usa reglas predefinidas y templates fijos.
B. Ejecuta el código parcial en un entorno virtual y observa resultados.
C. Requiere siempre nombres de funciones y docstrings extensos.
D. Fue entrenado con código público diverso y usa deep learning, incluyendo arquitectura transformer,
para predecir la siguiente secuencia de código.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 32
Usas Copilot para un algoritmo matemático que requiere cálculos precisos. ¿Cuál describe mejor sus
capacidades y limitaciones?
A. Está diseñado para reemplazar herramientas como Wolfram Alpha.
B. Puede razonar pruebas matemáticas y garantizar lógica correcta.
C. Puede generar código para cálculos, pero depende de la lógica del prompt y no garantiza precisión
matemática.
D. Realiza cálculos complejos con precisión porque su modelo está optimizado para matemáticas.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 33
Eres technical lead y debes seleccionar una herramienta de asistencia para un equipo enterprise con
alta seguridad, cumplimiento y gestión centralizada. ¿Qué distingue a Copilot Enterprise?
A. Controles administrativos centralizados para políticas organizacionales y auditoría.
B. Modelos ML personalizados entrenables con datasets privados.
C. Integración directa de sugerencias Copilot en pipelines CI.
D. Versión self-hosted del modelo Codex.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 34
Un equipo evalúa distintos SKUs de GitHub Copilot y configura ajustes de editor para optimizar el flujo.
¿Cuál afirmación es correcta sobre SKUs y el archivo de configuración del editor?
A. El archivo .copilot permite definir templates de prompts.
B. El archivo de configuración permite deshabilitar Copilot para tipos de archivo o directorios
específicos.
C. Individual, Business y Enterprise tienen las mismas funciones.
D. Copilot Individual permite telemetría organizacional.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 35
Eres administrador de una empresa con Copilot Business y quieres configurar exclusiones para evitar
que Copilot sugiera snippets de repositorios internos. ¿Qué configuración es correcta?
A. Agregar "corporateDataProtection": true .
B. Usar "useBusinessRules": true .
C. Agregar "trainingData": false .
D. Usar la directiva "excludePatterns" para excluir repositorios, archivos o directorios privados de
completions.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 36
¿Qué afirmación describe correctamente una limitación de Copilot Chat en el IDE?
A. Sus sugerencias pueden no considerar variables personalizadas o contexto específico del proyecto si
el usuario no lo proporciona.
B. Solo genera código para JavaScript y Python.
C. Solo puede usarse con repositorios públicos.
D. Puede refactorizar automáticamente codebases grandes completos en una sola operación.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 37
Usas Copilot para escribir código Python en un proyecto de machine learning. ¿Cuál es una limitación
de Copilot y de los LLM en general?
A. Siempre genera código optimizado y libre de bugs.
B. No puede generar código en lenguajes de bajo nivel.
C. Puede generar código sintácticamente correcto, pero no siempre entiende el contexto ni entrega
soluciones lógicamente correctas para el problema.
D. Solo funciona en pocos lenguajes populares.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 38
Trabajas con datos financieros sensibles y quieres usar Copilot sin exponer datos al modelo. ¿Qué
práctica previene mejor la exposición?
A. Permitir a Copilot analizar todo el repositorio, asumiendo que anonimiza datos sensibles.
B. Usar Copilot en modo offline.
C. Enmascarar datos sensibles con ***** .
D. Deshabilitar sugerencias en archivos con información sensible mediante configuración de Copilot.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 39
Desarrollas una aplicación React que obtiene datos de usuarios desde una API, maneja estados de
carga y error, y muestra datos en una tabla. ¿Cuál es el mejor prompt?
A. “Write a React component to show user data.”
B. “Write a React component that fetches user data from an API, handles loading and error states, and
displays the data in a table.”
C. “Generate React code to display data from an API in a table.”
D. “Generate a React component that fetches data from an API.”

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 40
Trabajas en una app Express.js con pruebas básicas para /login y /register , pero faltan edge
cases como inputs inválidos, campos faltantes y rate limiting. ¿Cómo puede ayudar Copilot a mejorar la
cobertura?
A. Sugerir pruebas adicionales usando comentarios sobre escenarios como username inválido,
password faltante y account lockout.
B. Generar solo load tests en lugar de integration tests.
C. Reescribir automáticamente la API para cubrir edge cases.
D. Generar pruebas solo para casos exitosos.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque usa Copilot como apoyo para proponer pruebas y casos límite, no como sustituto de la validación. Las pruebas generadas deben revisarse, ejecutarse y ampliarse para cubrir comportamiento esperado, entradas inválidas, errores y requisitos de seguridad o rendimiento.

Fuente oficial: [GitHub Docs: escribir pruebas con GitHub Copilot](https://docs.github.com/en/copilot/tutorials/write-tests)

Pregunta 41
Tu proyecto implica cambios frecuentes de tarea: programar, corregir bugs, documentar y revisar
código. Esto afecta el foco. ¿Qué enfoque muestra mejor cómo Copilot reduce context switching?
A. Usar Copilot solo para bug fixes.
B. Usar Copilot para sugerir documentación mientras escribes código.
C. Permitir que Copilot escriba y haga commit automático.
D. Dejar que Copilot haga code reviews y bug fixes de forma autónoma.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 42
Eres desarrollador independiente full-stack y consideras Copilot Individual. ¿Qué funciones pueden
mejorar tu productividad? Selecciona dos.
A. Sugerencias de código impulsadas por IA basadas en comentarios.
B. Refactorización automática de código por rendimiento.
C. Generación automática de comentarios y documentación básica.
D. Integración con CI/CD para automatizar deployments.

Respuesta correcta: A, C

Explicación
La opción A, C es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 43
Desarrollas un sistema de reclutamiento con IA y usas Copilot para escribir código que filtra candidatos.
Dado que los datos de entrenamiento podrían contener sesgos históricos, ¿cómo evitar que el código
introduzca sesgo?
A. Pedir a Copilot que evite atributos como género, raza y edad, lo que elimina todo sesgo.
B. Realizar pruebas exhaustivas de sesgo sobre el código generado.
C. Confiar en que Copilot usa datasets diversos y por eso no tiene sesgo.
D. Asumir que las pruebas de sesgo no son necesarias porque la IA es neutral.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Docs: alojamiento de modelos](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)

Pregunta 44
Un desarrollador de una aplicación web grande quiere usar Copilot para tareas rutinarias como
boilerplate de API, funciones utilitarias y patrones de código. ¿Qué enfoque maximiza la productividad?
A. Usar Copilot solo para documentación.
B. Escribir manualmente todas las funciones utilitarias.
C. Usar Copilot para generar boilerplate y utilidades, revisando que cumplan requisitos del proyecto.
D. Permitir que Copilot genere todo el código sin revisión.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 45
Trabajas en un proyecto full-stack con frontend HTML/CSS/JavaScript y backend Python/Node.js. Quieres
buenas sugerencias. ¿Qué afirmación describe mejor el soporte de Copilot?
A. Solo funciona para lenguajes populares como Python, JavaScript y Java.
B. Soporta múltiples lenguajes y contextos, generando código full-stack para frontend y backend.
C. No soporta markup como HTML o CSS.
D. Solo puede sugerir código en el lenguaje exacto del archivo actual.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 46
Tu equipo moderniza una aplicación legacy en COBOL migrando funcionalidad a una arquitectura
cloud-native en Python. ¿Cuál es el mejor uso de Copilot?
A. Convertir comandos COBOL a Python sin pruebas adicionales.
B. Reescribir toda la lógica de negocio automáticamente.
C. Sugerir snippets Python equivalentes para partes específicas de COBOL, verificando con pruebas y
revisión manual.
D. Convertir toda la aplicación automáticamente sin intervención humana.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 47
Los desarrolladores pueden aprovechar Copilot Chat de varias formas. ¿Cuál es un método válido para
usar sus sugerencias?
A. Generar y hacer commit automáticamente sin intervención.
B. Usar prompts en lenguaje natural para generar código, revisar la salida y copiar/insertar
manualmente.
C. Usar “Insert & Run” para ejecutar código automáticamente sin confirmación.
D. Activar “Auto-Apply Mode” para reemplazar funciones en tiempo real.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 48
Trabajas en una app Python que procesa input de usuario y lo inserta en una base de datos mediante
interpolación de strings. Te preocupa SQL injection. ¿Cómo puede ayudar Copilot?
A. Generar pruebas solo para queries SQL válidas.
B. Probar solo strings largos e ignorar patrones de ataque.
C. Generar pruebas que simulen SQL injection con entradas maliciosas como '; DROP TABLE
users;-- .
D. Probar solo entradas estándar como John y Jane.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 49
Desarrollas una nueva funcionalidad en Python y las sugerencias de Copilot son muy precisas. ¿Cuál
describe mejor el pipeline de Copilot en el IDE?
A. La entrada se procesa localmente y se almacena para mejorar modelos futuros.
B. La entrada se envía primero a un servicio proxy para filtros, luego al modelo remoto, y las
sugerencias pasan por filtros adicionales antes de volver al IDE.
C. El código se almacena en servidores de GitHub para continuidad.
D. La entrada se hashea antes de enviarse y solo se procesa una versión anonimizada.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 50
Eres ingeniero Python y notas que las sugerencias de Copilot son relevantes. Quieres saber qué
contexto usa y hasta dónde mira en tu código. ¿Cuál explicación es correcta?
A. Analiza todo el proyecto, archivos abiertos y versiones previas.
B. Usa el contenido del archivo activo, especialmente líneas inmediatamente anteriores al cursor.
C. Requiere que el usuario seleccione manualmente el código relevante.
D. Usa únicamente la línea actual e ignora el resto.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 51
Desarrollas una app con HTML, JavaScript y Python. Al escribir JavaScript, Copilot parece sugerir basado
en Python reciente. ¿Cómo asegurar sugerencias relevantes de JavaScript?
A. Cerrar el archivo Python para reiniciar contexto.
B. Confiar en que Copilot cambiará de lenguaje sin ajustar el prompt.
C. Abrir un proyecto separado para JavaScript.
D. Asegurar que el prompt y el código circundante sean específicos y relevantes para JavaScript.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 52
Escribes una función Python isPalindrome() y Copilot genera una prueba básica con racecar .
¿Qué dos acciones mejorarían la robustez y buenas prácticas de testing? Selecciona dos.
A. Usar solo palíndromos simples como racecar y madam .
B. Agregar pruebas para palíndromos case-insensitive.
C. Modificar obligatoriamente la función para lanzar ValueError ante no strings.
D. Agregar pruebas para strings con espacios y puntuación.

Respuesta correcta: B, D

Explicación
La opción B, D es la adecuada porque usa Copilot como apoyo para proponer pruebas y casos límite, no como sustituto de la validación. Las pruebas generadas deben revisarse, ejecutarse y ampliarse para cubrir comportamiento esperado, entradas inválidas, errores y requisitos de seguridad o rendimiento.

Fuente oficial: [GitHub Docs: escribir pruebas con GitHub Copilot](https://docs.github.com/en/copilot/tutorials/write-tests)

Pregunta 53
Un equipo está preocupado por que su código propietario sea usado para entrenar GitHub Copilot.
¿Qué configuración debería aplicar?
A. Desactivar Copilot para toda la organización.
B. Restringir acceso al repositorio solo a miembros internos.
C. Desactivar sugerencias en Copilot CLI.
D. Activar “Content Exclusions” en GitHub Copilot for Business.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 54
Trabajas en e-commerce y necesitas una función JavaScript que calcule total de carrito aplicando
descuentos, impuestos y edge cases como carrito vacío o inputs inválidos. Copilot genera soluciones
simples. ¿Qué prompt aplica mejores prácticas?
A. “Create a function to calculate the total price for a cart after applying a discount.”
B. “Write a JavaScript function that calculates the total price of items in a cart, applying both a discount
and tax, and handling empty carts or invalid input.”
C. “Generate a JavaScript function for calculating cart totals with discounts and taxes.”
D. “Write a function that calculates the total price of items in a cart and applies a discount and tax.”

Respuesta correcta: B

Explicación
La opción B es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 55
Al usar resúmenes de pull request de GitHub Copilot, ¿cómo genera Copilot el texto del resumen?
A. Considera únicamente los mensajes de commit del pull request.
B. Analiza los cambios de código línea por línea, enfocándose en adiciones, eliminaciones y
modificaciones.
C. Examina todo el historial del proyecto antes de generar el resumen.
D. Usa templates basados en keywords de comentarios.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 56
Trabajas en un pipeline personalizado de procesamiento de datos en Python. Un prompt vago como
“write a function to process data” genera sugerencias genéricas. ¿Qué enfoque produce sugerencias
más específicas?
A. Incluir requisitos concretos como formato de entrada, salida esperada y librerías a usar, como pandas
o NumPy.
B. Confiar en el comportamiento por defecto de Copilot.
C. Usar un prompt general y elegir manualmente entre varias sugerencias.
D. Dar una descripción completa de todo el proyecto.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 57
Eres responsable de administrar suscripciones de GitHub Copilot for Business y quieres automatizar
con REST API. ¿Cómo usar la API efectivamente?
A. Gestionar directamente pagos y facturación.
B. Automatizar invitaciones y asignar seats automáticamente al agregar usuarios.
C. Actualizar suscripciones Individual a Business automáticamente.
D. Listar, agregar y remover seats de Copilot para usuarios de la organización.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 58
Un engineering manager quiere configurar Copilot a nivel organización en GitHub.com para alinear
completions con políticas internas. ¿Qué pasos son correctos?
A. Ir a Organization Settings → Copilot y configurar acceso a repositorios, bloqueo de código público y
deshabilitar Copilot en repositorios seleccionados.
B. Modificar .copilotconfig en cada repositorio.
C. Usar Enterprise Admin Dashboard para todos los repositorios enterprise.
D. Configurar exclusiones solo desde el IDE para que apliquen a toda la organización.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: auditoría de GitHub Copilot](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/review-audit-logs)

Pregunta 59
Debes implementar Copilot en tu organización y el equipo se preocupa por sesgos y consecuencias no
deseadas. ¿Qué pasos tomar para usarlo responsablemente?
A. Permitir que Copilot genere código automáticamente, asumiendo que no tiene sesgos.
B. Revisar regularmente el código generado por IA para detectar sesgos y evitar manejo innecesario de
datos sensibles.
C. Aceptar sugerencias sin modificación porque están optimizadas.
D. Confiar únicamente en feedback de usuarios para corregir sesgos.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 60
Un equipo quiere personalizar las sugerencias de Copilot para su proyecto. ¿Qué acción mejora más la
generación contextual?
A. Usar Copilot en modo read-only para que aprenda el proyecto.
B. Escribir comentarios inline detallados y firmas de funciones claras.
C. Vincular más repositorios a Copilot.
D. Ajustar manualmente los pesos del modelo de Copilot.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 61
Notas que Copilot sugiere patrones comunes de librerías populares. ¿Cómo influyen los ejemplos más
vistos en el entrenamiento y qué problema puede surgir?
A. Garantizan que Copilot siempre genere el código más óptimo.
B. No influyen, porque Copilot genera soluciones completamente nuevas.
C. Solo afectan código de bajo nivel, no arquitectura.
D. Copilot tiende a sugerir patrones comunes, que pueden no ser adecuados para escenarios únicos o
poco convencionales.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Docs: alojamiento de modelos](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)

Pregunta 62
Después de instalar GitHub Copilot CLI, quieres verificar que esté correctamente instalado y disponible
en terminal. ¿Qué comando debes ejecutar?
A. copilot --check
B. gh copilot test
C. gh extension list
D. gh copilot status

Respuesta correcta: C

Explicación
La opción C es la adecuada porque corresponde al uso de Copilot desde la terminal para obtener orientación o proponer comandos. Los comandos generados deben revisarse antes de ejecutarse, especialmente si pueden modificar archivos, repositorios o infraestructura.

Fuente oficial: [GitHub Docs: GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli)

Pregunta 63
Tu equipo integró GitHub Copilot Chat para mejorar productividad. ¿Qué afirmación representa mejor
una característica clave?
A. Corrige automáticamente comentarios inline para consistencia.
B. Analiza commits pasados para sugerir mejoras.
C. Solo funciona con comandos predefinidos.
D. Permite hacer preguntas en lenguaje natural y responde según el contexto de archivos abiertos.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 64
Al usar Copilot Chat, ¿qué método es efectivo para recibir sugerencias que sigan un estilo o formato
específico?
A. Agregar preferencias en .copilot-config .
B. Subir un JSON con guías de estilo para que Copilot lo parseé.
C. Incluir instrucciones de estilo directamente en el prompt del chat.
D. Configurar estilos globales desde el panel principal de Copilot Chat.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 65
Tu empresa adoptó GitHub Copilot Business. ¿Qué característica está incluida en este plan?
A. Integración con modelos IA personalizados en servidores privados.
B. Seguridad y cumplimiento enterprise, incluyendo SOC 2 Type 2 y GDPR.
C. Soporte solo para repositorios privados, no públicos.
D. Uso ilimitado sin restricciones en todos los repositorios GitHub.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 66
Trabajas en Node.js con transacciones financieras y usas Copilot para pruebas de seguridad y
rendimiento. ¿Qué test aborda mejor ambos aspectos?
A. Test que verifica HTTP 200 para entradas válidas.
B. Test que mide solo tiempo de ejecución por función.
C. Test que verifica cifrado de cookies de sesión.
D. Test que usa fuzzing con entradas maliciosas como SQL injection y XSS, y mide eficiencia del sistema
ante distintos tipos de requests.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque usa Copilot como apoyo para proponer pruebas y casos límite, no como sustituto de la validación. Las pruebas generadas deben revisarse, ejecutarse y ampliarse para cubrir comportamiento esperado, entradas inválidas, errores y requisitos de seguridad o rendimiento.

Fuente oficial: [GitHub Docs: escribir pruebas con GitHub Copilot](https://docs.github.com/en/copilot/tutorials/write-tests)

Pregunta 67
Asesoras a una empresa sobre diferencias entre Copilot Individual y Business. ¿Cuál es una diferencia
clave?
A. Copilot Business incluye indemnización IP y exclusiones de datos corporativos; Individual no.
B. Copilot Individual tiene mejor integración con repositorios corporativos.
C. Ambos planes ofrecen facturación centralizada.
D. Copilot Individual permite usuarios compartidos con controles por rol.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 68
Tu equipo usa Copilot Enterprise con Knowledge Bases para mejorar consistencia entre repositorios.
¿Cómo benefician las Knowledge Bases a completions y code review?
A. Reemplazan revisiones manuales en todos los pull requests.
B. Generan unit tests automáticamente sin intervención.
C. Rechazan automáticamente código que no siga convenciones.
D. Proporcionan contexto específico del proyecto para sugerencias alineadas con guías y buenas
prácticas del equipo.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 69
Un desarrollador encuentra un NullPointerException inesperado en Java y quiere diagnosticarlo
rápido. ¿Cómo usar Copilot Chat de forma efectiva?
A. Accediendo directamente a la app en ejecución para parchear el bug automáticamente.
B. Escaneando todo el proyecto y corrigiendo todas las posibles null pointer exceptions.
C. Reemplazando toda la función por una versión generada por IA.
D. Analizando el mensaje de error, explicando posibles causas y sugiriendo fixes según el contexto.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 70
¿Cómo mejora GitHub Copilot Enterprise el proceso de code review en equipos de desarrollo?
A. Proporciona analítica detallada del rendimiento individual de revisores.
B. Permite edición simultánea en tiempo real del mismo pull request.
C. Genera resúmenes de pull requests con IA, mostrando una vista general de cambios y archivos
impactados.
D. Rechaza automáticamente pull requests que no sigan la guía de estilo.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

# Balotario 5

Cuestionario de práctica: GitHub Copilot
Pregunta 1
Eres un desarrollador que empezó a usar GitHub Copilot para recibir sugerencias de código en tu IDE.
Te interesa entender cómo Copilot maneja tus datos y qué mecanismos usa para generar sugerencias.
Considerando preocupaciones de privacidad, ¿cómo procesa Copilot tu entrada y genera sugerencias?
A. Procesa todos los datos localmente, sin enviar nada a servidores remotos.
B. Envía cada línea de código a servidores de GitHub y la almacena indefinidamente.
C. Usa entradas cifradas y anonimizadas que se envían a un modelo remoto para procesamiento, sin
almacenarlas en servidores de GitHub.
D. Almacena todos los datos temporalmente para entrenar el modelo y elimina automáticamente API
keys.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 2
Trabajas en un proyecto web y notas que GitHub Copilot sugiere código HTML y JavaScript. Quieres
entender el ciclo de vida del pipeline de datos: cómo procesa y devuelve esas sugerencias. ¿Cuál
afirmación lo describe mejor?
A. Copilot se entrena diariamente para reflejar las librerías y estándares más recientes.
B. Copilot hace scraping en tiempo real de repositorios públicos.
C. Copilot aprende automáticamente del código que escribes y se adapta a los últimos cambios.
D. Las sugerencias se basan en una captura de código público disponible al momento del
entrenamiento, por lo que pueden estar desactualizadas.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 3
Como beta tester de GitHub Copilot Chat, se te pide compartir feedback sobre sugerencias
contextuales, flujo de interacción y problemas encontrados. ¿Cuál es el método recomendado para
enviar feedback detallado?
A. Contactar a GitHub Sales desde el sitio oficial.
B. Enviar correo a GitHub Support con detalles de la cuenta.
C. Usar el botón de feedback dentro del editor en IDEs soportados.
D. Crear un issue directamente en el repositorio oficial de GitHub Copilot.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque usa Copilot como apoyo para proponer pruebas y casos límite, no como sustituto de la validación. Las pruebas generadas deben revisarse, ejecutarse y ampliarse para cubrir comportamiento esperado, entradas inválidas, errores y requisitos de seguridad o rendimiento.

Fuente oficial: [GitHub Docs: escribir pruebas con GitHub Copilot](https://docs.github.com/en/copilot/tutorials/write-tests)

Pregunta 4
Un equipo usa GitHub Copilot Business y quiere evitar que Copilot sugiera fragmentos propietarios
basados en entradas anteriores, pero desea mantener completions generadas por IA. ¿Cuál es la
configuración más efectiva en GitHub.com?
A. Configurar exclusiones de repositorios a nivel organización.
B. Activar la protección de bloqueo de código público coincidente en la configuración de Copilot.
C. Cambiar la visibilidad del repositorio a privado.
D. Desactivar la telemetría de Copilot.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 5
Tu equipo trabaja en una aplicación web de alto rendimiento que requiere baja latencia y uso eficiente
de recursos. Quieren usar GitHub Copilot Enterprise para mejorar rendimiento durante revisión de
código. ¿Cuál es el mejor enfoque?
A. Usar Copilot para sugerir algoritmos optimizados, pero revisar y medir manualmente el rendimiento.
B. Aceptar todas las sugerencias porque Copilot fue entrenado con código de alto rendimiento.
C. Permitir que Copilot optimice automáticamente el rendimiento sin benchmarking.
D. Usar solo sugerencias de documentación y evitar mejoras de código.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 6
Mantienes una aplicación JavaScript con baja cobertura de pruebas y edge cases no cubiertos. Tienes
una prueba básica para palíndromos. ¿Cómo puedes usar Copilot para mejorar la cobertura?
A. Pedir a Copilot que reescriba todas las pruebas existentes.
B. Generar pruebas de integración en lugar de unitarias.
C. Escribir comentarios indicando edge cases no probados, como cadenas vacías y no palíndromos,
para que Copilot sugiera pruebas adicionales.
D. Generar strings aleatorios y asumir que eso cubre todos los casos.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque usa Copilot como apoyo para proponer pruebas y casos límite, no como sustituto de la validación. Las pruebas generadas deben revisarse, ejecutarse y ampliarse para cubrir comportamiento esperado, entradas inválidas, errores y requisitos de seguridad o rendimiento.

Fuente oficial: [GitHub Docs: escribir pruebas con GitHub Copilot](https://docs.github.com/en/copilot/tutorials/write-tests)

Pregunta 7
¿Cuál tipo de conocimiento sería menos adecuado para incluir en una Knowledge Base destinada a
ayudar a desarrolladores a implementar soluciones reutilizables con GitHub Copilot Business?
A. Patrones de diseño como Singleton o Factory.
B. Buenas prácticas de uso de APIs y estándares de codificación.
C. Snippets para tareas comunes como validación de datos o manejo de errores.
D. Datos históricos de releases, fechas límite e hitos del proyecto.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 8
Desarrollas un sistema de gestión de registros médicos con información sensible. Al integrar Copilot,
debes evitar que PII o datos clínicos sensibles se expongan durante la generación de código. ¿Cuál es la
forma más efectiva de excluir esos datos del contexto de Copilot?
A. Deshabilitar Copilot para archivos o repositorios específicos que contienen datos sensibles.
B. Deshabilitar Copilot solo para algunas funciones.
C. Cifrar los datos sensibles dentro de los archivos.
D. Anonimizar todos los datos sensibles dentro del código.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 9
¿Qué tipo de contenido se excluye del dataset de entrenamiento de GitHub Copilot para proteger
privacidad y cumplir estándares éticos?
A. Proyectos open-source disponibles en GitLab o Bitbucket.
B. Código público con licencias permisivas como MIT o Apache.
C. Código publicado en foros con licencias Creative Commons.
D. Código propietario de repositorios privados de GitHub.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Docs: alojamiento de modelos](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)

Pregunta 10
GitHub Copilot procesa código mediante un pipeline de datos desde que escribes en el IDE hasta que
recibes una sugerencia. ¿Cuál describe mejor ese proceso?
A. Envía solo metadatos como nombres de variables, pero no código real.
B. Envía únicamente el código en el que estás trabajando activamente a servidores remotos, donde se
procesa y se genera una sugerencia.
C. Procesa todo localmente para mantener privacidad.
D. Envía todo el proyecto para analizar su estructura completa.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 11
Al buscar eventos relacionados con GitHub Copilot en el audit log de Copilot Business, ¿qué filtro o
query sería más efectivo para rastrear acciones administrativas sobre acceso?
A. action:copilot.security.updated
B. action:copilot.code.reviewed
C. action:copilot.access_enabled
D. action:copilot.suggestion.created

Respuesta correcta: C

Explicación
La opción C es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 12
Trabajas en Python con una función calculate_discount(price, discount_rate) y quieres que
Copilot genere pruebas unitarias, incluyendo edge cases como entradas inválidas. ¿Cómo puedes
usarlo? Selecciona dos.
A. Confiar por completo en que Copilot cubra todos los edge cases.
B. Dar la firma de la función y pedirle que genere tests.
C. Pedirle solo pruebas positivas y escribir tú las negativas.
D. Agregar comentarios describiendo edge cases como precios negativos o descuentos demasiado
altos.

Respuesta correcta: B, D

Explicación
La opción B, D es la adecuada porque usa Copilot como apoyo para proponer pruebas y casos límite, no como sustituto de la validación. Las pruebas generadas deben revisarse, ejecutarse y ampliarse para cubrir comportamiento esperado, entradas inválidas, errores y requisitos de seguridad o rendimiento.

Fuente oficial: [GitHub Docs: escribir pruebas con GitHub Copilot](https://docs.github.com/en/copilot/tutorials/write-tests)

Pregunta 13
Quieres que Copilot genere una función Python que lea un CSV y calcule el promedio de una columna.
Tu prompt original es incompleto. ¿Cuál prompt sigue mejores prácticas?
A. “Create a Python function that calculates the mean of a column from a CSV file.”
B. “Write a Python function for reading and calculating averages from CSVs.”
C. “Write a Python function to calculate the average of a CSV column.”
D. “Write a Python function that reads a CSV file and returns the average of a specified column, handling
missing data and file errors.”

Respuesta correcta: D

Explicación
La opción D es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 14
Tu empresa evalúa implementar GitHub Copilot Chat. Debes identificar los casos de uso más efectivos.
¿En cuál situación es más útil?
A. Aprender un nuevo lenguaje de programación y necesitar explicaciones de sintaxis y patrones.
B. Automatizar despliegues en múltiples clouds.
C. Generar documentación completa de todo el proyecto.
D. Ejecutar migraciones complejas de bases de datos en múltiples entornos.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 15
Tu equipo usa Copilot en un proyecto con código sensible. Ya lo deshabilitaron en ciertos archivos, pero
quieren saber si eso protege toda la información sensible. ¿Cuál describe mejor la limitación de las
exclusiones de contenido?
A. Las exclusiones protegen automáticamente toda información sensible del codebase.
B. Las exclusiones también protegen metadatos y commit history.
C. Solo aplican a archivos deshabilitados manualmente y no protegen referencias relacionadas en
archivos habilitados.
D. Se aplican a todos los proyectos futuros automáticamente.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque aplica una salvaguarda explícita para limitar el contexto que Copilot puede usar. La exclusión de contenido debe configurarse en los controles admitidos por la organización; revisar el resultado, proteger los secretos y aplicar las obligaciones de privacidad siguen siendo responsabilidad del equipo.

Fuente oficial: [GitHub Docs: exclusión de contenido](https://docs.github.com/en/copilot/concepts/content-exclusion)

Pregunta 16
Quieres habilitar GitHub Copilot CLI en tu máquina local. ¿Cuáles son los pasos correctos para instalarlo
y configurarlo?
A. Instalar desde GitHub Marketplace, ejecutar gh auth configure y luego gh copilot start .
B. Instalar GitHub CLI, autenticar con gh auth login y ejecutar gh extension install github/
gh-copilot .
C. Clonar el repositorio gh-copilot , copiar binarios manualmente y usar un PAT.
D. Instalar la extensión de VS Code y ejecutar gh copilot enable .

Respuesta correcta: B

Explicación
La opción B es la adecuada porque corresponde al uso de Copilot desde la terminal para obtener orientación o proponer comandos. Los comandos generados deben revisarse antes de ejecutarse, especialmente si pueden modificar archivos, repositorios o infraestructura.

Fuente oficial: [GitHub Docs: GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli)

Pregunta 17
¿Qué afirmación describe una función única de GitHub Copilot Enterprise frente a otros planes?
A. Permite desplegar modelos Copilot en infraestructura privada.
B. Incluye un scanner de vulnerabilidades que corrige automáticamente problemas.
C. Permite crear y gestionar Knowledge Bases desde repositorios internos para mejorar respuestas de
Copilot Chat.
D. Limita las sugerencias únicamente a repositorios privados de la organización.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 18
Cuando programas en un IDE con Copilot habilitado, ¿qué usarías para pedir una explicación de código
o contexto sobre un snippet existente?
A. GitHub Copilot Multiple Suggestions.
B. GitHub Copilot CLI.
C. GitHub Copilot Inline Suggestions.
D. GitHub Copilot Chat.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 19
Necesitas implementar merge sort en Python, pero el prompt
# Python function to sort a list genera quicksort. ¿Qué cambio guía mejor a Copilot?
A. “Python function to sort a list of numbers alphabetically.”
B. “Efficient Python function to sort a list.”
C. “Python function to sort a list using merge sort.”
D. “Python function to recursively divide the list and merge sorted sublists.”

Respuesta correcta: C

Explicación
La opción C es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 20
Una empresa evalúa Copilot Individual vs Business y prioriza seguridad, evitando que código
propietario se use para entrenar modelos. ¿Cuál diferencia describe mejor las exclusiones de datos?
A. Ambos planes ofrecen el mismo control sobre datos de entrenamiento.
B. Copilot Business permite a administradores controlar exclusiones de entrenamiento a nivel
organización; Individual no.
C. Copilot Individual permite desactivar telemetría, Business no.
D. Copilot Individual excluye código por defecto y Business requiere proceso manual.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 21
Trabajas en un proyecto open-source colaborativo. Debes integrar una nueva funcionalidad alineada
con estilo del equipo, convenciones y módulos existentes. ¿Qué limitación de Copilot es más relevante?
A. Copilot se alinea automáticamente con todas las convenciones del equipo.
B. Copilot predice cambios futuros del proyecto.
C. Copilot puede generar código que no cumpla completamente los estándares del equipo y requiere
ajuste manual.
D. Copilot revisa automáticamente el código de todo el equipo.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque considera el posible parecido con código público y las obligaciones de licencia. Los filtros y referencias de Copilot son salvaguardas, no una garantía de ausencia total de coincidencias; el equipo debe revisar la licencia y la procedencia antes de reutilizar código.

Fuente oficial: [GitHub Docs: referencias a código público](https://docs.github.com/en/copilot/concepts/completions/code-referencing)

Pregunta 22
Tu empresa migra a GitHub Copilot Enterprise y debes comunicar beneficios exclusivos del plan. ¿Cuál
característica es exclusiva?
A. Sugerencias de código adaptadas al contexto del proyecto en múltiples IDEs.
B. Generación de casos de prueba con IA.
C. Gestión centralizada de licencias y políticas de seguridad para el uso de Copilot en la organización.
D. Colaboración en tiempo real mediante sesiones live.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque aplica una salvaguarda explícita para limitar el contexto que Copilot puede usar. La exclusión de contenido debe configurarse en los controles admitidos por la organización; revisar el resultado, proteger los secretos y aplicar las obligaciones de privacidad siguen siendo responsabilidad del equipo.

Fuente oficial: [GitHub Docs: exclusión de contenido](https://docs.github.com/en/copilot/concepts/content-exclusion)

Pregunta 23
Una empresa quiere establecer una política por defecto en GitHub Enterprise para excluir Copilot de
repositorios internos sensibles. ¿Qué acción cumple mejor el objetivo?
A. Configurar permisos de repositorio para negar sugerencias asistidas por IA.
B. Usar GitHub Actions para deshabilitar Copilot en repositorios nuevos.
C. Crear una política organizacional para deshabilitar Copilot por defecto y habilitarlo solo en
repositorios específicos.
D. Crear una regla de firewall para impedir acceso a repositorios internos.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque aplica una salvaguarda explícita para limitar el contexto que Copilot puede usar. La exclusión de contenido debe configurarse en los controles admitidos por la organización; revisar el resultado, proteger los secretos y aplicar las obligaciones de privacidad siguen siendo responsabilidad del equipo.

Fuente oficial: [GitHub Docs: exclusión de contenido](https://docs.github.com/en/copilot/concepts/content-exclusion)

Pregunta 24
Trabajas en un proyecto confidencial y te preocupa cómo Copilot procesa el código que escribes. ¿Cuál
afirmación sobre su funcionamiento y manejo de datos es correcta?
A. Envía todo el código a OpenAI para entrenar modelos.
B. Anonimiza todo el código y lo usa para fine-tuning.
C. Almacena una copia permanente del código.
D. Usa modelos preentrenados y no utiliza tu código para entrenamiento salvo configuración o
consentimiento aplicable.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 25
Trabajas en una web app con frontend JavaScript y backend Python. Quieres usar Copilot para
funciones repetitivas, refactoring y sugerencias sin sacrificar calidad. ¿Cómo aprovecharlo mejor?
A. Usar Copilot para sugerir snippets y refactorizar código, revisando cuidadosamente cada sugerencia.
B. Generar código frontend y backend sin ajustar diferencias entre JavaScript y Python.
C. Deshabilitar Copilot en librerías y frameworks comunes.
D. Dejar que Copilot escriba algoritmos complejos completos sin revisión.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 26
Usas Copilot para un sistema de salud con datos sensibles. El código debe ser confiable y no sesgado.
¿Cómo abordar sus limitaciones?
A. Revisar manualmente todas las sugerencias considerando que el entrenamiento puede no reflejar
estándares médicos o regulaciones actuales.
B. Asumir que el dataset grande garantiza precisión.
C. Deshabilitar Copilot por completo en salud.
D. Revisar solo código complejo, no sugerencias simples.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 27
Trabajas en un proyecto web y ves sugerencias HTML y JavaScript. ¿Cuál describe correctamente el
pipeline de Copilot?
A. La entrada pasa por un proxy de Copilot, luego por el modelo y después por filtros adicionales antes
de volver al IDE.
B. La entrada va directo al modelo sin procesamiento adicional.
C. Se almacena en una base de datos y el modelo la consulta.
D. Solo usa modelos entrenados con repositorios GitHub, sin filtros.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 28
En un codebase grande, Copilot sugiere un bloque complejo que no entiendes. ¿Cuál es la mejor
práctica?
A. Asumir que la sugerencia está optimizada y es segura.
B. Usarla como placeholder y refactorizar luego.
C. Aceptarla sin revisión.
D. Revisar manualmente el código sugerido para entender su lógica antes de integrarlo.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 29
Administras un equipo que usa JetBrains IDEs y Visual Studio Code. Quieres introducir Copilot en ambos
entornos. ¿Cómo configurarlo en JetBrains?
A. Instalar el plugin de GitHub Copilot para JetBrains, configurarlo y asegurar que el equipo lo habilite.
B. Usar solo autocompletado nativo de JetBrains porque es idéntico.
C. Copiar sugerencias desde VS Code a JetBrains.
D. No es posible usar Copilot en JetBrains.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 30
Sarah usa Copilot Individual en Visual Studio Code y quiere saber cómo recibe sugerencias y si puede
disparar completions manualmente. ¿Cuál afirmación es correcta?
A. Copilot da sugerencias en tiempo real mientras escribe y permite alternar sugerencias con atajos.
B. Copilot genera archivos completos automáticamente sin input.
C. Solo funciona en repositorios alojados en GitHub.
D. Solo se activa con un atajo específico, nunca automáticamente.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 31
Usas Copilot en un proyecto web, pero a veces genera JavaScript inexacto o irrelevante. ¿Cuál es una
limitación clave?
A. Puede fallar con tecnologías nuevas o poco documentadas porque depende de patrones del
entrenamiento.
B. Siempre genera código perfecto porque se entrena en repositorios populares.
C. Detecta y corrige todos los errores lógicos y runtime.
D. No necesita contexto para predecir código correctamente.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 32
Como junior developer usas Copilot Chat y recibes un snippet. Antes de aceptarlo, ¿qué buena práctica
debes seguir?
A. Revisar el código sugerido para vulnerabilidades y bugs.
B. Desactivar linters para evitar conflictos.
C. Copiarlo directamente a producción.
D. Aceptar siempre la primera sugerencia.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 33
Un nuevo desarrollador usa Copilot Enterprise y pregunta cómo hacer que las sugerencias incorporen
guías internas de la Knowledge Base. ¿Cómo debería utilizar esa información?
A. Mencionar temas relevantes en comentarios mientras programa para guiar a Copilot hacia
documentación interna.
B. Instalar un plugin separado de Copilot Enterprise.
C. Abrir manualmente la Knowledge Base y copiar snippets.
D. Usar un comando especial @copilot reference {topic} .

Respuesta correcta: A

Explicación
La opción A es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 34
Evalúas Copilot Business para un equipo con foco en privacidad y seguridad. ¿Qué afirmaciones son
correctas? Selecciona dos.
A. Requiere aprobar manualmente cada sugerencia antes de usarla.
B. Proporciona cifrado de extremo a extremo para proteger sugerencias de código.
C. Asegura que el entrenamiento no use datos de repositorios privados.
D. No permite a administradores deshabilitar sugerencias por lenguaje.

Respuesta correcta: B, C

Explicación
La opción B, C es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 35
Un desarrollador nota sugerencias poco relevantes o con preocupaciones de seguridad en Copilot Chat
y quiere reportarlo. ¿Cuál es la forma más adecuada?
A. Crear issues en el repositorio de Copilot.
B. Usar thumbs up/thumbs down dentro de la interfaz de Copilot Chat.
C. Publicar una queja en redes sociales.
D. Enviar correo directo a soporte con todas las completions.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 36
Tu empresa usa Copilot Chat para ayudar con desafíos de programación. ¿Cómo puede ayudar en
debugging?
A. Permite describir problemas en lenguaje natural y recibir posibles fixes según el contexto del código.
B. Se integra directamente con servicios de logs para analizar errores.
C. Detecta y corrige bugs automáticamente sin intervención.
D. Genera automáticamente unit tests para todas las funciones.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 37
Un equipo moderniza una aplicación legacy escrita en un lenguaje antiguo. Quiere refactorizar partes
para mejorar eficiencia y mantenibilidad usando Copilot. ¿Qué estrategia es mejor?
A. Usar Copilot solo para documentación y no para refactoring.
B. Depender de Copilot para detectar y refactorizar performance sin pruebas.
C. Usar Copilot para sugerir alternativas modernas a patrones obsoletos y revisar/probar manualmente.
D. Reescribir todo automáticamente en un lenguaje moderno.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 38
Una organización quiere proteger código y datos al usar Copilot. ¿Qué describe correctamente la
privacidad de datos en el SKU Business?
A. Solo Individual ofrece audit logs.
B. Business nunca envía datos a servidores externos.
C. Todos los SKUs almacenan snippets para mejorar el modelo continuamente.
D. Copilot Business permite excluir snippets de código para que no se usen en mejorar el modelo.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 39
Eres freelance y evalúas Copilot Individual para sugerencias de código, feedback en tiempo real y
proyectos personales en varios lenguajes. ¿Qué incluye este plan?
A. Control de acceso por roles y facturación centralizada.
B. SSO y audit logs.
C. Indemnización IP y exclusiones corporativas.
D. Soporte para múltiples lenguajes en varios IDEs.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 40
Tu empresa adoptó Copilot Enterprise y DevOps quiere configurar una Knowledge Base con
documentación interna y buenas prácticas. ¿Cuál es un paso correcto?
A. Subir documentación interna a un repositorio privado y permitir que Copilot la use como referencia
para sugerencias.
B. Configurar Knowledge Base en Copilot Business.
C. Activar “Auto-Reference” en preferencias personales.
D. Guardar buenas prácticas en un servicio cloud externo y conectarlo con webhooks.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 41
Tu equipo quiere entender el ciclo de vida desde que escribes código hasta que Copilot muestra
sugerencias, incluyendo backend y servidores externos. ¿Cuál lo describe mejor?
A. Copilot envía el contenido activo del editor al modelo remoto, se analiza para sugerencias
contextuales y no se almacena después del procesamiento.
B. Copilot procesa todo localmente.
C. Copilot envía inmediatamente todo el codebase.
D. Copilot almacena todo el proyecto en servidores GitHub.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 42
Como DevOps evalúas Copilot Business con políticas estrictas de seguridad, control de telemetría,
controles administrativos y prevención de exposición a Codex. ¿Qué característica crítica atiende estas
preocupaciones?
A. Panel administrativo para monitorear sugerencias en tiempo real.
B. Posibilidad de deshabilitar completamente toda telemetría.
C. RBAC por seniority del desarrollador.
D. Uso de Copilot sin enviar datos de repositorios privados al modelo Codex externo.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 43
Tu empresa pasó de Copilot Business a Enterprise. ¿Qué característica exclusiva debes destacar?
A. Aislamiento de red para impedir acceso a repositorios públicos.
B. Integración con Knowledge Bases internas para sugerencias basadas en documentación de la
empresa.
C. Fine-tuning del modelo con repositorios privados.
D. Modo offline completo.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque aplica una salvaguarda explícita para limitar el contexto que Copilot puede usar. La exclusión de contenido debe configurarse en los controles admitidos por la organización; revisar el resultado, proteger los secretos y aplicar las obligaciones de privacidad siguen siendo responsabilidad del equipo.

Fuente oficial: [GitHub Docs: exclusión de contenido](https://docs.github.com/en/copilot/concepts/content-exclusion)

Pregunta 44
Un equipo enterprise evalúa Copilot con foco en seguridad, IP y auditoría. ¿Qué plan/configuración
ofrece mayor protección contra sugerencias que contengan código público y permite monitoreo
organizacional?
A. Copilot Individual con filtro público en VS Code.
B. Copilot Business con telemetría desactivada y filtros apagados.
C. Copilot Business con filtro de código público habilitado y políticas organizacionales.
D. Copilot Chat en CLI sin conectividad.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 45
¿Cuál es el beneficio principal de configurar una Knowledge Base en Copilot Enterprise?
A. Permitir repositorios de datos internos que Copilot use para sugerencias basadas en información
propietaria.
B. Automatizar code review conectando sugerencias a CI/CD.
C. Crear entornos aislados sin conectividad.
D. Restringir Copilot solo a datos públicos.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 46
Un equipo usa Copilot Business y quiere aplicar buenas prácticas de seguridad. ¿Qué safeguard existe?
A. Copilot garantiza cumplimiento OWASP Top 10.
B. Copilot puede detectar patrones vulnerables y mostrar advertencias, pero no impide aceptar código.
C. Administradores pueden crear reglas para bloquear todo patrón inseguro.
D. Existe un modo estricto que elimina automáticamente código GPL.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 47
Como administrador GitHub, debes impedir que usuarios habiliten Copilot en repositorios fuera de la
organización gestionada. ¿Qué opción es más adecuada?
A. Exigir que todos trabajen solo en repositorios privados.
B. Configurar branch protection rules.
C. Usar Copilot Business y deshabilitar uso en cuentas personales mediante política.
D. Pedir a cada usuario que desactive Copilot manualmente.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: auditoría de GitHub Copilot](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/review-audit-logs)

Pregunta 48
Desarrollas una app JavaScript y Copilot a veces omite variables o funciones previas. ¿Qué factor es más
importante para determinar el contexto de Copilot?
A. Nombres de variables y funciones únicamente.
B. Todo el directorio del proyecto.
C. Solo el prompt.
D. El código inmediatamente anterior al prompt en el archivo actual.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 49
Tu organización configura una Knowledge Base de Copilot Enterprise para estándares y buenas
prácticas. ¿Qué contenido es apropiado almacenar?
A. Preferencias de IDE por usuario.
B. Contraseñas cifradas y API keys.
C. Snippets y funciones reutilizables de librerías internas.
D. Logs automáticos de producción.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Docs: alojamiento de modelos](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)

Pregunta 50
Un desarrollador pregunta por la propiedad del código generado por Copilot y posibles problemas
legales. ¿Cuál es el estado de propiedad?
A. El desarrollador que usa Copilot posee el output y puede usarlo como propio, con revisión de
licencias si reconoce similitud con código licenciado.
B. GitHub posee todo el código generado.
C. Todo código generado es open-source por defecto.
D. La propiedad depende del dato exacto de entrenamiento usado.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 51
Usas Copilot para generar boilerplate que interactúa con base de datos, pero te preocupan
vulnerabilidades SQL injection. ¿Qué debes hacer antes de producción?
A. Usarlo solo en partes no críticas.
B. Revisar el código por vulnerabilidades como SQL injection y probar con entradas normales y
maliciosas.
C. Asumir que Copilot genera código seguro.
D. Desplegarlo y monitorear incidentes después.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 52
Trabajas en un repositorio privado y usas Copilot. Te preocupa que código propietario se comparta
externamente. ¿Cómo maneja Copilot datos de repositorios privados?
A. Usa todo el código privado para entrenar modelos públicos.
B. Puede sugerir tu código privado a otros usuarios.
C. No usa código de repositorios privados para entrenar modelos ni sugerirlo a otros.
D. Procesa todo localmente y no envía datos a la nube.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 53
Configuras Copilot para un equipo con datos sensibles y quieres excluir ciertos proyectos de
completions. ¿Qué configuración en el editor config logra mejor privacidad?
A. Agregar "privateData": false .
B. Agregar "exclude": true para directorios sensibles.
C. Agregar "suggestions": "none" .
D. Agregar "allowPrivateRepositories": false .

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 54
Eres desarrollador solo y evalúas Copilot Individual. ¿Qué características incluye? Selecciona dos.
A. Seguridad y compliance enterprise.
B. Generación de pruebas asistida por IA.
C. Gestión de proyectos e issues.
D. Sugerencias y autocompletado de código en tiempo real.

Respuesta correcta: B, D

Explicación
La opción B, D es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 55
Tienes un modelo User con método is_adult() y quieres generar integration tests que verifiquen
su interacción con una vista que restringe contenido para adultos. ¿Cuál es el mejor enfoque con
Copilot?
A. Probar solo la función de forma aislada.
B. Generar unit tests y asumir que son suficientes.
C. Generar una prueba de integración que verifique el flujo completo, como acceso a contenido
restringido según edad.
D. Probar únicamente usuarios mayores de 18.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque usa Copilot como apoyo para proponer pruebas y casos límite, no como sustituto de la validación. Las pruebas generadas deben revisarse, ejecutarse y ampliarse para cubrir comportamiento esperado, entradas inválidas, errores y requisitos de seguridad o rendimiento.

Fuente oficial: [GitHub Docs: escribir pruebas con GitHub Copilot](https://docs.github.com/en/copilot/tutorials/write-tests)

Pregunta 56
Eres manager y evalúas SKUs de Copilot para un equipo enterprise mediano. Necesitas integración con
Visual Studio y cumplimiento de políticas de seguridad. ¿Qué SKU conviene?
A. GitHub Copilot for Students.
B. GitHub Copilot for Business.
C. GitHub Copilot Individual.
D. GitHub Copilot Free Tier.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 57
Usas Copilot para generar código Python de preprocesamiento ML. ¿Qué principio de prompt
engineering maximiza precisión y relevancia?
A. Usar solo lenguaje natural sin contexto de código.
B. Usar prompts mínimos para dejar que Copilot infiera todo.
C. Evitar edge cases porque Copilot los generaliza.
D. Incluir pasos, entradas esperadas, salidas y restricciones.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 58
¿Cuál es una ventaja única de Copilot Chat para troubleshooting en GitHub.com?
A. Corrige errores de sintaxis automáticamente sin input.
B. Genera tests completos automáticamente para todas las funciones con errores.
C. Bloquea commits con código incorrecto.
D. Genera snippets como respuesta a mensajes de error específicos, reduciendo búsquedas manuales.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 59
Como freelance con Copilot Individual, quieres saber cómo se usan tus datos personales, de uso e
interacciones, especialmente en repos privados. ¿Cuál es la descripción más precisa?
A. Usa tu código para mejorar el modelo, pero no lo comparte.
B. Usa tu código personal para entrenar el modelo.
C. Recopila telemetría anonimizada que puede compartirse con Microsoft y GitHub para mejorar
servicios.
D. Comparte tus datos con terceros para mejorar la IA.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 60
Tu proyecto requiere consultas SQL frecuentes, pero Copilot a veces genera queries ineficientes o sin
filtros. ¿Qué prompt mejora precisión y eficiencia?
A. “Write an SQL query to retrieve all user data from the users table.”
B. “Generate an SQL query to retrieve data from a database.”
C. “Write an SQL query to retrieve user data (user_id, first_name, last_name) from the users table, only
where status is active and created after 2021-01-01.”
D. “Create an SQL query that pulls data from a table using user data.”

Respuesta correcta: C

Explicación
La opción C es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 61
Un desarrollador usa Copilot en VS Code con Python, pero las sugerencias son genéricas. ¿Cómo
mejorar sugerencias?
A. Aumentar memoria caché de Copilot en VS Code.
B. Entrenar manualmente Copilot eligiendo mejores sugerencias.
C. Agregar comentarios descriptivos y firmas de funciones claras para dar contexto.
D. Reducir extensiones activas en VS Code.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 62
Un desarrollador empieza a escribir def fibonacci(n): y Copilot sugiere una implementación.
¿Cuál describe mejor el ciclo de vida de esa sugerencia?
A. Copilot toma contexto inmediato del archivo, lo envía al modelo Codex y genera una sugerencia
según patrones aprendidos.
B. Envía todo el proyecto y librerías importadas.
C. Monitorea todo el repositorio y lo envía completo.
D. Usa sugerencias pregeneradas desde caché local.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 63
Desarrollas e-commerce en JavaScript con una API de pagos. Quieres que Copilot genere una función
que procese pagos, maneje errores de API y registre transaction ID al éxito. ¿Cuál prompt es mejor?
A. “Write a JavaScript function to process payments using a payment API. Handle API errors and log
transaction ID on success.”
B. “Write a JavaScript function to process payments using a payment API.”
C. “Create JavaScript code that makes API requests.”
D. “Write a JavaScript payment processing function.”

Respuesta correcta: A

Explicación
La opción A es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 64
Tu empresa adoptó Copilot Business. ¿Qué feature incluye?
A. Seguridad y compliance enterprise, incluyendo SOC 2 Type 2 y GDPR.
B. Soporte solo para repositorios privados.
C. Integración con modelos IA personalizados en servidores privados.
D. Resolución automática de conflictos en pull requests.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 65
Necesitas refactorizar varias funciones similares en legacy: estandarizar nombres, optimizar lógica y
agregar manejo de errores. ¿Cómo puede ayudar Copilot? Selecciona dos.
A. Sugerir patrones de manejo de errores donde falten.
B. Reemplazar la necesidad de pruebas manuales o automatizadas.
C. Sugerir completions para estandarizar nombres y lógica refactorizada según patrones del código.
D. Detectar y reemplazar automáticamente todos los nombres en todo el codebase.

Respuesta correcta: A, C

Explicación
La opción A, C es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 66
GitHub Copilot, como otros LLMs, tiene limitaciones. ¿Cuál describe una limitación clave?
A. Aprende en tiempo real de la entrada del usuario.
B. Garantiza sugerencias seguras y sin vulnerabilidades.
C. Puede generar código funcional, pero no siempre alineado con buenas prácticas, seguridad o
convenciones del proyecto.
D. Solo funciona con repositorios propietarios de GitHub.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 67
Notas que algunas sugerencias de Copilot son irrelevantes o incorrectas. ¿Cuál describe una limitación
de Copilot y LLMs?
A. No generan vulnerabilidades porque fueron entrenados con datasets seguros.
B. Garantizan sugerencias precisas y optimizadas para tu proyecto.
C. Pueden generar sugerencias incorrectas porque no entienden todo el contexto o propósito del
código, especialmente requisitos específicos.
D. Entienden completamente lógica de negocio compleja con comentarios vagos.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 68
Tu empresa usa Copilot con un modelo personalizado para software propietario. ¿Qué beneficio ilustra
mejor su valor?
A. Los modelos personalizados pueden incluir patrones y buenas prácticas específicas de la empresa,
mejorando la relevancia de sugerencias.
B. Generan documentación automáticamente sin input.
C. Garantizan que no se sugiera código open-source.
D. Eliminan la necesidad de code review.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 69
Eres project manager y eliges un plan de Copilot para un equipo que trabaja en repos públicos y
privados, con necesidad de compliance y seguridad enterprise. ¿Qué plan seleccionarías?
A. GitHub Copilot Free.
B. GitHub Copilot for Business.
C. GitHub Copilot Individual.
D. GitHub Copilot Enterprise.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 70
Eres full-stack developer y quieres usar funciones completas de Copilot, como sugerencias inline, chat y
manejo de excepciones. ¿Qué dos métodos pueden disparar sugerencias? Selecciona dos.
A. Sugerencias inline mientras escribes código.
B. Usar Copilot Chat para pedir snippets o explicaciones.
C. Enviar mensajes por Copilot CLI para sugerencias en tiempo real.
D. Escribir test cases para generar código automáticamente sin más contexto.

Respuesta correcta: A, B

Explicación
La opción A, B es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

# Balotario 6

Cuestionario de práctica: GitHub Copilot
Pregunta 1
GitHub Copilot Business está diseñado para mejorar la colaboración y eficiencia de codificación en
equipos y organizaciones. ¿Cuál de las siguientes afirmaciones describe correctamente una
característica exclusiva de GitHub Copilot Business que no está disponible en GitHub Copilot Individual?
A. Incluye un escáner de vulnerabilidades integrado que detecta automáticamente fallas de seguridad
en el código generado.
B. Requiere que todos los usuarios tengan una cuenta GitHub Enterprise para acceder.
C. Proporciona controles de políticas a nivel organización, incluida la posibilidad de deshabilitar
sugerencias que coincidan con código público.
D. Permite completions ilimitadas en todos los IDEs, mientras Individual tiene límite diario.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque aplica una salvaguarda explícita para limitar el contexto que Copilot puede usar. La exclusión de contenido debe configurarse en los controles admitidos por la organización; revisar el resultado, proteger los secretos y aplicar las obligaciones de privacidad siguen siendo responsabilidad del equipo.

Fuente oficial: [GitHub Docs: exclusión de contenido](https://docs.github.com/en/copilot/concepts/content-exclusion)

Pregunta 2
Una empresa evalúa GitHub Copilot Individual frente a GitHub Copilot Business para sus equipos de
desarrollo. ¿Cuál afirmación describe correctamente una diferencia clave entre ambos planes?
A. Copilot Individual otorga acceso enterprise-wide automáticamente, mientras Business requiere
licencias por usuario.
B. Copilot Business permite deshabilitar toda telemetría y uso compartido de datos, mientras Individual
no.
C. Copilot Individual bloquea sugerencias basadas en repositorios públicos, mientras Business no.
D. Copilot Business proporciona indemnización de propiedad intelectual, mientras Copilot Individual no.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 3
Tu equipo moderniza una aplicación legacy siguiendo metodología Agile con sprints de dos semanas.
GitHub Copilot se integró al flujo SDLC para ayudar en planificación, codificación, pruebas y despliegue.
¿Cómo puede ayudar mejor Copilot a gestionar el SDLC?
A. Gestionando tareas de proyecto como asignación de issues, seguimiento de progreso y pipelines de
despliegue.
B. Mejorando la calidad del código al sugerir patrones comunes y buenas prácticas durante la fase de
codificación, reduciendo deuda técnica con el tiempo.
C. Generando automáticamente especificaciones de funcionalidades e historias de usuario a partir de
proyectos previos.
D. Escribiendo test cases, asegurando cobertura total y arreglando automáticamente errores
encontrados en pruebas.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 4
En GitHub Copilot, las exclusiones de contexto definen qué datos se usan para generar completions
asistidas por IA. Al usar GitHub Copilot Business, ¿cuál afirmación describe correctamente cómo
funcionan estas exclusiones?
A. Permiten especificar qué repositorios deben excluirse de las sugerencias generadas por Copilot para
cumplir políticas de seguridad.
B. Una vez excluido un repositorio, Copilot retiene conocimiento de sugerencias previas de ese
repositorio.
C. Impiden que Copilot acceda a cualquier código del repositorio local del usuario.
D. Se aplican automáticamente a todos los repositorios que contienen información privada sin
configuración.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 5
Estás creando una aplicación web y necesitas código para autenticación de usuarios: login, logout y
restablecimiento de contraseña. Escribes el prompt # Implement user authentication with
login, logout, and password reset , pero Copilot no incluye buenas prácticas como hashing de
contraseñas y MFA. ¿Qué cambio de prompt generaría código más seguro?
A. “Implement user authentication with password hashing.”
B. Usar prompts separados como “Implement login”, “Implement password reset” y “Implement
logout”.
C. “Implement user authentication with login, logout, password reset, using hashed passwords and
multi-factor authentication.”
D. Mantener el prompt vago y dejar que Copilot use prácticas por defecto de sus datos de
entrenamiento.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 6
Un equipo evalúa GitHub Copilot Chat para distintas tareas de ingeniería de software. ¿En cuál
escenario es más efectivo?
A. Un junior necesita guía para implementar una función recursiva en Python, incluyendo explicaciones
de buenas prácticas.
B. Un DevOps quiere que Copilot Chat genere toda una configuración Terraform desde cero.
C. Un arquitecto quiere refactorizar automáticamente un monolito completo a microservicios sin
intervención.
D. Un analista de seguridad quiere detectar y parchear vulnerabilidades en varios repositorios en
tiempo real.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 7
Eres team lead y tu empresa evalúa GitHub Copilot Chat para mejorar productividad y troubleshooting.
¿Qué característica clave lo diferencia de las funciones tradicionales de Copilot?
A. Permite pedir explicaciones de líneas específicas de código en lenguaje natural y recibir respuestas
contextuales.
B. Documenta automáticamente codebases completos sin input del usuario.
C. Se integra con GitHub Actions para disparar deployments desde conversaciones.
D. Ejecuta código directamente dentro del chat y muestra resultados inmediatos.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 8
Un ingeniero usa GitHub Copilot en Visual Studio Code con un repositorio privado, pero no recibe
sugerencias. Quiere solucionar el problema. ¿Cuál es el paso más efectivo?
A. Verificar que la extensión de GitHub Copilot esté habilitada en VS Code y que el usuario haya iniciado
sesión en GitHub.
B. Reinstalar Visual Studio Code porque Copilot deja de funcionar si el IDE lleva mucho tiempo abierto.
C. Crear un Personal Access Token y agregarlo manualmente a la configuración de Copilot.
D. Limpiar manualmente la caché del workspace porque Copilot requiere una sesión nueva siempre.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 9
Un freelance usa GitHub Copilot Individual y le preocupa si su código propietario puede almacenarse o
compartirse. ¿Cuál afirmación es correcta sobre la gestión de datos?
A. Copilot Individual comparte automáticamente snippets generados por usuarios con otros usuarios.
B. Copilot Individual recopila todos los prompts y respuestas para fine-tuning futuro.
C. Copilot Individual cifra y almacena todo código asistido por IA para revisión interna de GitHub.
D. Copilot Individual no retiene ni comparte código de usuario y no lo usa para entrenamiento del
modelo.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Docs: alojamiento de modelos](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)

Pregunta 10
Trabajas en un proyecto Python que procesa entradas de usuario y realiza cálculos con foco en
seguridad y eficiencia. Usas Copilot para escribir unit tests de vulnerabilidades, como SQL injection, y
rendimiento. ¿Qué test cubre mejor ambos aspectos?
A. Un test que verifica sanitización comparando la salida con un valor SQL-safe predefinido.
B. Un test que mide tiempo de ejecución con timeit para entradas típicas.
C. Un test con fuzzing para evaluar variaciones de entrada, verificando sanitización y rendimiento
aceptable.
D. Un test que compara rendimiento entre una librería externa y una función propia.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque usa Copilot como apoyo para proponer pruebas y casos límite, no como sustituto de la validación. Las pruebas generadas deben revisarse, ejecutarse y ampliarse para cubrir comportamiento esperado, entradas inválidas, errores y requisitos de seguridad o rendimiento.

Fuente oficial: [GitHub Docs: escribir pruebas con GitHub Copilot](https://docs.github.com/en/copilot/tutorials/write-tests)

Pregunta 11
Lideras un equipo que usa Visual Studio Code como IDE principal y quieres implementar GitHub Copilot
para acelerar generación de código. ¿Cómo integrarlo correctamente?
A. Pegar manualmente sugerencias desde la web app de Copilot.
B. Instalar la extensión GitHub Copilot para VS Code y configurarla para sugerencias en el editor,
usando atajos para aceptar o rechazar.
C. Usar solo IntelliSense porque ofrece las mismas sugerencias IA.
D. Instalar Copilot como software standalone separado de VS Code.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 12
Te preocupa cómo Copilot procesa y almacena datos en proyectos sensibles. Tu empresa maneja datos
confidenciales y quieres evitar que código privado se comparta o almacene de forma riesgosa. ¿Cuál
afirmación describe mejor el manejo de datos?
A. Copilot registra temporalmente entradas y sugerencias para mejorar el modelo, luego las elimina.
B. Copilot cifra y almacena entradas para personalizar sugerencias por usuario.
C. Copilot almacena permanentemente todas las sugerencias en servidores GitHub.
D. Copilot no almacena entradas de código ni sugerencias de usuario de una forma que comprometa la
privacidad.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Docs: alojamiento de modelos](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)

Pregunta 13
Tu empresa, con cientos de desarrolladores, implementa GitHub Copilot Enterprise para mejorar
productividad y reducir tiempo de code review. Como lead developer, debes mantener seguridad y
cumplimiento. ¿Qué feature apoya mejor el uso seguro?
A. Gestión centralizada de uso y políticas de acceso de Copilot para aplicar estándares de seguridad.
B. Acceso personalizable para que cada desarrollador elija sus propias reglas.
C. Generación automática de documentación desde comentarios.
D. Escaneo en tiempo real de todo código antes de commit.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 14
Contribuyes a un proyecto open-source de salud y usas Copilot. Algunas sugerencias parecen código de
otros proyectos. Sabiendo que Copilot fue entrenado con repositorios públicos, ¿qué acción se alinea
con uso ético de IA?
A. Modificar el código sugerido para que sea menos reconocible.
B. Evitar todo código generado por IA en open-source.
C. Usar el código sin preocupación porque todas las sugerencias son open-source.
D. Comparar el código generado con licencias open-source existentes para asegurar compatibilidad
antes de incorporarlo.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque considera el posible parecido con código público y las obligaciones de licencia. Los filtros y referencias de Copilot son salvaguardas, no una garantía de ausencia total de coincidencias; el equipo debe revisar la licencia y la procedencia antes de reutilizar código.

Fuente oficial: [GitHub Docs: referencias a código público](https://docs.github.com/en/copilot/concepts/completions/code-referencing)

Pregunta 15
Configuras GitHub Copilot en tu IDE por primera vez. Copilot puede dar sugerencias contextuales
directamente en el editor. ¿Qué afirmaciones describen correctamente cómo opera y sus funciones?
Selecciona tres.
A. Puede sugerir líneas completas, funciones o clases completas según el contexto.
B. Ofrece sugerencias basadas en código de repositorios públicos y proyectos open-source.
C. Genera código basado en comentarios y código existente en el archivo.
D. Funciona offline sin internet.

Respuesta correcta: A, B, C

Explicación
La opción A, B, C es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 16
Trabajas en una web app con una API externa de clima y documentación incompleta. Necesitas
implementar una función que llame la API y procese la respuesta eficientemente. ¿Cómo puede
ayudarte Copilot? Selecciona dos.
A. Generando pruebas para interacción con la API, incluyendo timeouts o respuestas inválidas.
B. Reemplazando por completo la necesidad de entender la documentación.
C. Generando automáticamente todo manejo de errores para cualquier API externa.
D. Sugiriendo implementación de la llamada API según el contexto y patrones previos del codebase.

Respuesta correcta: A, D

Explicación
La opción A, D es la adecuada porque corresponde al uso de Copilot desde la terminal para obtener orientación o proponer comandos. Los comandos generados deben revisarse antes de ejecutarse, especialmente si pueden modificar archivos, repositorios o infraestructura.

Fuente oficial: [GitHub Docs: GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli)

Pregunta 17
Usas Copilot Chat en tu IDE para generar código y recibir ayuda contextual. Necesitas snippets y
respuestas sobre lógica, sintaxis y buenas prácticas. ¿Qué acción puedes realizar?
A. Obtener sugerencias de snippets en tiempo real basadas en el contexto activo del código.
B. Crear pull requests directamente desde el chat sin usar GitHub.
C. Aplicar parches de seguridad detectados automáticamente por Copilot Chat.
D. Generar documentación completa de todo el proyecto automáticamente.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 18
¿Qué acción puede auditarse en el audit log de GitHub Copilot Business para rastrear uso y eventos de
seguridad?
A. Monitorear cuándo un usuario habilita o deshabilita GitHub Copilot dentro de repositorios de la
organización.
B. Registrar el training data específico usado para una sugerencia.
C. Registrar cada función autocompletada por Copilot en el IDE.
D. Ver y buscar sugerencias individuales generadas para cada desarrollador.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 19
Desarrollas una herramienta interna en una gran empresa y te preocupa cómo Copilot genera
sugerencias y maneja código sensible. ¿Cómo gestiona datos privados vs públicos?
A. Usa repositorios públicos para entrenar el modelo base; durante una sesión puede considerar
contexto de repos privados, pero no lo almacena para entrenamiento futuro.
B. Genera sugerencias solo desde el proyecto abierto en el IDE.
C. Recopila y almacena datos de repos privados para mejorar sugerencias de todos los usuarios.
D. Genera sugerencias solo con repos públicos y nunca usa contexto de repos privados.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 20
Quieres usar Copilot para generar una función PyTorch que entrene una red neuronal. Como ya
escribiste algo similar, quieres guiarlo con few-shot prompting. ¿Cómo deberías formular el prompt?
A. “Write a PyTorch function to train a neural network. Here’s an example of how to load data and define
the network architecture.”
B. “Train a neural network using PyTorch.”
C. “I want a function that uses PyTorch to train a neural network.”
D. “Write code for a PyTorch neural network. I’ll provide examples later.”

Respuesta correcta: A

Explicación
La opción A es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 21
Debes implementar un sistema que usa código generado por IA mediante Copilot. Según Responsible
AI, debes asegurar transparencia y accountability. ¿Qué estrategia adoptar?
A. Confiar en GitHub version control sin documentación adicional.
B. Marcar claramente el código generado por IA en version control y documentar cambios hechos
durante code review.
C. Documentar solo código manual porque el código IA es confiable por el tamaño del entrenamiento.
D. Registrar cada sugerencia y resultado de Copilot individualmente.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 22
Eres consultor de seguridad y debes asegurar cumplimiento de privacidad como GDPR. El cliente
pregunta si su código propietario se usa para entrenar IA o se comparte entre usuarios. ¿Qué refleja el
enfoque de Copilot? Selecciona dos.
A. Las sugerencias pueden contener snippets sintácticamente similares a código público, por lo que se
deben revisar.
B. El modelo se entrena con código público y no se actualiza con código privado.
C. Copilot recopila y transmite sugerencias específicas de usuario para mejorar precisión.
D. Copilot cifra automáticamente el código local del usuario durante su uso local.

Respuesta correcta: A, B

Explicación
La opción A, B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 23
Tu equipo actualizó a Copilot Enterprise y quiere usar resúmenes de pull request para agilizar reviews.
¿Qué es cierto sobre cómo Copilot genera estos resúmenes?
A. Aprueba automáticamente pull requests si el resumen no muestra problemas.
B. Puede generar resumen antes de que existan cambios de código.
C. Genera resúmenes analizando cambios de código, historial de commits y comentarios en lenguaje
natural del PR.
D. Requiere commit messages manuales antes de generar resumen.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 24
Trabajas en un proyecto colaborativo con datos sensibles. El equipo usa Copilot para completions y
quiere entender el ciclo de datos desde que inicia una sugerencia hasta que vuelve al IDE. ¿Qué lo
describe mejor?
A. Se envía un snippet cerca del cursor y se almacena el archivo completo para referencia futura.
B. Se envía telemetría con todo el proyecto.
C. Se envía un snippet del código en edición a servidores GitHub para procesamiento en tiempo real y la
sugerencia vuelve sin almacenamiento permanente.
D. Se envía todo el codebase para generar sugerencias del archivo actual.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 25
Usas Copilot para un pipeline ML en Python. Aunque sugiere funciones básicas, falla con lógica amplia y
reglas de negocio. ¿Qué limitación de los LLM describe esto?
A. Copilot siempre tiene información actualizada de todas las librerías.
B. Sus sugerencias se basan muchas veces en patrones sintácticos, no en comprensión semántica
profunda, y pueden ser incorrectas o inseguras.
C. Copilot entiende perfectamente requisitos de proyecto si los comentarios son detallados.
D. Los LLM pueden crear soluciones para cualquier problema sin importar complejidad.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 26
Eres team lead modernizando un codebase antiguo. Usan Copilot para generar código más rápido, pero
quieres explicar problemas por antigüedad de sugerencias. ¿Qué afirmación es correcta?
A. Copilot usa un modelo actualizado continuamente con las últimas versiones.
B. Copilot excluye automáticamente librerías antiguas o funciones deprecated.
C. Copilot solo sugiere código de commits de los últimos 12 meses.
D. Las sugerencias se basan en código público que puede tener varios años y ya no ser relevante.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 27
Tu empresa mediana usa Copilot Business y quieres que todo el equipo cumpla políticas
organizacionales. ¿Cuál es la mejor forma de establecer y aplicar gestión de políticas?
A. Permitir que cada desarrollador configure Copilot individualmente.
B. Gestionar políticas desde settings locales del IDE.
C. Deshabilitar Copilot en repos privados.
D. Aplicar políticas mediante GitHub Enterprise settings, gestionando permisos y uso centralmente.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 28
Trabajas en una app financiera sensible con procesamiento de transacciones, validación de entrada y
APIs externas. Debes implementar un componente crítico de seguridad. ¿Qué limitación de Copilot
aplica?
A. Siempre genera código optimizado para entornos de alta seguridad.
B. Puede sugerir buenas prácticas, pero también producir código con vulnerabilidades ocultas que
requieren revisión manual.
C. Detecta y corrige automáticamente todos los problemas de seguridad.
D. No requiere pruebas ni validación porque asegura outputs sin errores.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque aplica una salvaguarda explícita para limitar el contexto que Copilot puede usar. La exclusión de contenido debe configurarse en los controles admitidos por la organización; revisar el resultado, proteger los secretos y aplicar las obligaciones de privacidad siguen siendo responsabilidad del equipo.

Fuente oficial: [GitHub Docs: exclusión de contenido](https://docs.github.com/en/copilot/concepts/content-exclusion)

Pregunta 29
Un desarrollador trabaja en industria regulada y usa Copilot. ¿Qué práctica asegura que datos privados
o sensibles del codebase sean excluidos de sugerencias?
A. Configurar .gitignore para excluir archivos sensibles.
B. Revisar manualmente todas las sugerencias.
C. Deshabilitar Copilot en toda la organización.
D. Activar context exclusions para impedir que use ciertos archivos, rutas o tipos de datos.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 30
Usas Copilot en un proyecto con PII y quieres proteger información sensible. ¿Qué debes hacer para
excluirla del procesamiento durante generación de código?
A. Confiar en que Copilot detecta y excluye automáticamente datos sensibles.
B. Ofuscar datos sensibles dentro del código.
C. Usar comentarios inline indicando que no debe procesar datos sensibles.
D. Deshabilitar Copilot para archivos que contienen información sensible.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque aplica una salvaguarda explícita para limitar el contexto que Copilot puede usar. La exclusión de contenido debe configurarse en los controles admitidos por la organización; revisar el resultado, proteger los secretos y aplicar las obligaciones de privacidad siguen siendo responsabilidad del equipo.

Fuente oficial: [GitHub Docs: exclusión de contenido](https://docs.github.com/en/copilot/concepts/content-exclusion)

Pregunta 31
Usas Copilot para escribir un script Python que parsea XML grandes y extrae datos según input del
usuario. Necesitas minimizar memoria, pero Copilot carga el archivo completo. ¿Qué ajuste de prompt
ayuda más?
A. “Write a Python function that parses large XML files and extracts data based on user input.”
B. “Generate Python code to parse an XML file and extract specific data efficiently.”
C. “Generate Python code that parses XML files and uses minimal memory while extracting data.”
D. “Write a Python function that reads a large XML file and extracts data without loading the entire file
into memory. Use an iterative approach.”

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 32
Un equipo de seguridad de una financiera evalúa Copilot Business para auditoría y regulación. Quieren
visibilidad de uso en la organización. ¿Cómo ayudan los audit logs?
A. Registran cuándo usuarios habilitan o deshabilitan Copilot en repositorios, dando visibilidad de uso y
cumplimiento.
B. Permiten personalizar datos de entrenamiento por repositorio.
C. Analizan código generado para vulnerabilidades antes del commit.
D. Rastrean todos los snippets generados por Copilot.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 33
Tienes una app Node.js con parseInput(data) y processData(parsedData) . Quieres que
Copilot genere integration tests para verificar que ambas funciones trabajen juntas. ¿Cómo proceder?
A. Generar pruebas que llamen parseInput y luego processData en secuencia para validar el flujo
completo.
B. Generar mocks y stubs para aislar ambas funciones.
C. Generar solo validación de input para parseInput .
D. Generar unit tests separados para cada función.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque usa Copilot como apoyo para proponer pruebas y casos límite, no como sustituto de la validación. Las pruebas generadas deben revisarse, ejecutarse y ampliarse para cubrir comportamiento esperado, entradas inválidas, errores y requisitos de seguridad o rendimiento.

Fuente oficial: [GitHub Docs: escribir pruebas con GitHub Copilot](https://docs.github.com/en/copilot/tutorials/write-tests)

Pregunta 34
¿Qué feature es exclusiva de GitHub Copilot Business y Enterprise y no está disponible en Copilot
Individual?
A. Integración con pull requests.
B. Soporte para proyectos open-source.
C. Sugerencias inline de código.
D. Integración Single Sign-On, SSO.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque aplica una salvaguarda explícita para limitar el contexto que Copilot puede usar. La exclusión de contenido debe configurarse en los controles admitidos por la organización; revisar el resultado, proteger los secretos y aplicar las obligaciones de privacidad siguen siendo responsabilidad del equipo.

Fuente oficial: [GitHub Docs: exclusión de contenido](https://docs.github.com/en/copilot/concepts/content-exclusion)

Pregunta 35
Tu organización restringe Copilot a equipos aprobados, pero sospechas que usuarios no autorizados lo
habilitan. ¿Qué acción puedes rastrear en audit logs?
A. Cuando un usuario hace commit de código generado por Copilot.
B. Cuando un usuario recibe una sugerencia de Copilot.
C. Cuando un usuario copia y pega código generado por Copilot.
D. Cuando un administrador asigna o revoca una licencia Copilot Business.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: auditoría de GitHub Copilot](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/review-audit-logs)

Pregunta 36
Construyes un web scraper Python con BeautifulSoup para extraer títulos y fechas de artículos desde
una URL, devolviendo una lista de diccionarios. ¿Qué prompt maximiza precisión?
A. “Generate Python code that scrapes article titles and dates from a URL using BeautifulSoup and
returns them in a list of dictionaries.”
B. “Write a Python script to scrape a website using BeautifulSoup.”
C. “Write Python code to use BeautifulSoup for scraping.”
D. “Write code to extract information from a website using Python.”

Respuesta correcta: A

Explicación
La opción A es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 37
Tu equipo evalúa Copilot para un proyecto enterprise que requiere integración con VS Code,
completions multilínea y detección de vulnerabilidades de seguridad. ¿Qué plan recomendarías?
A. GitHub Copilot Basic.
B. GitHub Copilot Business Plan.
C. GitHub Copilot Individual Plan.
D. GitHub Copilot Free Plan.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 38
Tu equipo usa Copilot Enterprise en code reviews de una app con datos sensibles. Quieren identificar
vulnerabilidades en PRs. ¿Cuál es el mejor enfoque?
A. Confiar en fixes de seguridad generados por Copilot sin validación.
B. Usar sugerencias de Copilot para detectar patrones inseguros y combinarlas con GitHub Advanced
Security como CodeQL y Dependabot.
C. Depender de Copilot para detectar y arreglar todas las vulnerabilidades.
D. Ignorar sugerencias de seguridad porque Copilot solo sirve para completions.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 39
Tu empresa adoptó Copilot y quieres presentar funciones clave de Copilot Chat. ¿Cuál es una
característica clave?
A. Colaboración en tiempo real con otros desarrolladores.
B. Generar test cases detallados para todo el proyecto automáticamente.
C. Explicar paso a paso snippets sugeridos.
D. Refactorizar codebases enteros automáticamente.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 40
Tu equipo hace code reviews frecuentes y el proceso se volvió cuello de botella. Quieres usar Copilot
para mejorar productividad. ¿Cuál uso es más efectivo?
A. Usarlo solo para identificar issues de estilo como espacios o nombres.
B. Usarlo para proponer mejoras de código o algoritmos más eficientes durante reviews, que los
revisores evalúan.
C. Confiar en que detecte y arregle bugs automáticamente sin oversight.
D. Aceptar automáticamente todos los cambios sugeridos.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 41
Desarrollas Java con Copilot para código repetitivo como getters y setters, pero a veces no respeta el
estilo del proyecto. ¿Cómo determina Copilot el contexto?
A. Analiza todo el proyecto en todos los archivos.
B. Usa solo la línea actual del cursor.
C. Usa solo la función o clase actual y excluye todo lo demás.
D. Analiza código y comentarios cercanos en el archivo actual para generar sugerencias según patrones
visibles.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 42
Recibes una sugerencia relevante de Copilot y quieres entender cómo se postprocesa mediante el proxy
antes de mostrarse. ¿Qué explica mejor el proceso?
A. El proxy registra y anonimiza la entrada, la envía al modelo y ayuda a excluir información sensible de
sugerencias finales.
B. El proxy ejecuta static analysis para vulnerabilidades antes de mostrar sugerencias.
C. El proxy elimina referencias a librerías externas o APIs para evitar problemas legales.
D. El proxy ejecuta el código en un entorno virtual para asegurar ausencia de errores runtime.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 43
Tu organización compró licencias Copilot Business y debe asignarlas programáticamente con REST API.
¿Qué endpoint debería usarse para asignar un seat?
A. PATCH /orgs/{org}/copilot/license
B. PUT /orgs/{org}/memberships/{username}/copilot
C. POST /users/{username}/copilot/access
D. POST /orgs/{org}/copilot/seats

Respuesta correcta: D

Explicación
La opción D es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 44
Exploras Copilot Chat para obtener sugerencias y resolver problemas mediante chat interactivo. ¿Cuál
describe correctamente el flujo de datos?
A. Envía queries y contexto relevante temporalmente a servidores GitHub, pero datos de repos privados
no se almacenan ni usan para entrenamiento.
B. Procesa todas las interacciones localmente.
C. Envía snippets y queries para almacenarlos y entrenar modelos futuros.
D. Usa solo datos públicos e ignora contexto local de repos privados.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 45
Un usuario con Copilot Individual quiere integrarlo en un proyecto de equipo. ¿Cuál afirmación sobre
limitaciones y funciones es correcta?
A. Solo soporta IDEs alojados en GitHub como Codespaces.
B. Proporciona integración con IDEs locales, pero es para uso individual y requiere licencia por usuario.
C. Ofrece acceso ilimitado para múltiples repos privados de organización.
D. Permite compartir una sola licencia entre varios desarrolladores.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 46
Trabajas en un proyecto complejo con muchos bugs y requisitos poco claros. Usas Copilot Chat para
entender y arreglar issues. ¿Qué beneficio tiene Copilot Chat en GitHub.com frente a usarlo solo en un
IDE?
A. Da documentación inline en tiempo real mientras escribes.
B. Permite preguntas en lenguaje natural sobre pull requests, issues y tareas del proyecto.
C. Se integra automáticamente con cualquier issue tracker externo.
D. Tiene debugging avanzado directamente en el navegador.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 47
En un proyecto open-source global, notas que Copilot sugiere código con sesgos, por ejemplo roles de
género en comentarios o variables. ¿Qué acción aborda mejor el riesgo?
A. Apagar Copilot completamente para proyectos open-source.
B. Editar manualmente sugerencias sesgadas, sin más acciones.
C. Revisar profundamente sugerencias por sesgo, incorporar solo código neutral y sensibilizar al
equipo.
D. Reportar el issue a GitHub y seguir usando el código sin cambios.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 48
Tu empresa usa Copilot Enterprise y quiere que los resúmenes de PR generados sigan estándares
internos de documentación. ¿Qué puede hacer un administrador?
A. Deshabilitar resúmenes quitando write access a Copilot.
B. Activar “Strict Summary Mode”.
C. Modificar settings directos de summary generation en Enterprise Cloud admin panel.
D. Configurar políticas o templates de PR para guiar el formato y usar Copilot alineado a esas reglas.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 49
Trabajas en un proyecto confidencial con PII y consideras usar Copilot. ¿Qué acción protege mejor la
información sensible?
A. Eliminar Copilot del repositorio por completo.
B. Activar configuraciones de privacidad para excluir archivos con contenido sensible de modelos o
contexto aplicable.
C. Entrenar Copilot con tu repositorio privado.
D. Usar comentarios inline para avisar a Copilot que ignore información sensible.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque aplica una salvaguarda explícita para limitar el contexto que Copilot puede usar. La exclusión de contenido debe configurarse en los controles admitidos por la organización; revisar el resultado, proteger los secretos y aplicar las obligaciones de privacidad siguen siendo responsabilidad del equipo.

Fuente oficial: [GitHub Docs: exclusión de contenido](https://docs.github.com/en/copilot/concepts/content-exclusion)

Pregunta 50
Como security officer, debes evaluar cómo Copilot maneja snippets en el IDE para no exponer ni retener
código propietario. ¿Cuál explicación es mejor?
A. Procesa snippets localmente, sin enviar a servidores externos.
B. Transmite snippets pequeños del IDE a servidores para procesamiento en tiempo real, sin
almacenarlos ni retenerlos tras devolver la sugerencia.
C. Cifra y almacena permanentemente snippets para mejorar el modelo.
D. Agrega toda telemetría y la usa para reentrenar modelos con cada actualización.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 51
Usas Copilot Chat para debugging y tu manager pide explicar flujo entre tu máquina, Copilot y
servidores OpenAI, y si la información se almacena. ¿Cuál lo describe mejor?
A. Las interacciones se almacenan permanentemente en GitHub, pero no se comparten con OpenAI.
B. Copilot Chat envía entradas a la API Codex/OpenAI para procesamiento y no se almacenan
permanentemente por GitHub u OpenAI.
C. Todo se procesa localmente.
D. Se envía a GitHub, luego a OpenAI, y parte del chat se almacena para futuras sesiones.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Docs: alojamiento de modelos](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)

Pregunta 52
Copilot incluye safeguards para evitar vulnerabilidades. ¿Qué afirmación sobre checks y warnings es
correcta?
A. Puede identificar y advertir riesgos potenciales, pero no impide que el usuario acepte sugerencias
inseguras.
B. Los warnings están activados por defecto y no se pueden deshabilitar.
C. Se integra directamente con GHAS y Dependabot para alertas en tiempo real dentro de sugerencias.
D. Bloquea automáticamente toda sugerencia vulnerable antes de mostrarla.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 53
Entrenas un modelo tipo Copilot para generar consultas SQL eficientes de datos de clientes
considerando índices y performance. ¿Qué método de entrenamiento es más apropiado?
A. Transfer learning desde un modelo conversacional general.
B. Reinforcement learning con queries aleatorias y recompensas.
C. Unsupervised learning para encontrar patrones sin feedback.
D. Supervised learning con dataset de consultas SQL correctas y modelos de datos correspondientes.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Docs: alojamiento de modelos](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)

Pregunta 54
Presentas Copilot a juniors y uno pregunta si siempre da la mejor solución. ¿Qué limitación clave
explicarías?
A. Siempre documenta y sigue los últimos estándares.
B. Refactoriza automáticamente respetando estilo y arquitectura.
C. Siempre da la solución más eficiente por aprender de repos open-source.
D. Sus sugerencias pueden ser desactualizadas o subóptimas porque no entiende siempre últimas
prácticas ni contexto específico.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 55
Un equipo Copilot Business configura Knowledge Base para onboarding. ¿Qué conocimiento mejora
más consistencia de prácticas y patrones comunes?
A. Timelines de proyectos y calendarios de releases.
B. Buenas prácticas de estándares de código, guías de comentarios y protocolos de manejo de errores.
C. Notas específicas de responsabilidades y roles del equipo.
D. Snippets aislados de imports e inicialización.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 56
Estás en un equipo de cinco personas que necesita Copilot para completions. El lead se preocupa por
costo, cumplimiento de políticas y riesgo de código de terceros. ¿Qué plan conviene?
A. GitHub Copilot Individual.
B. GitHub Copilot Free Plan.
C. GitHub Enterprise Plan.
D. GitHub Copilot Business.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 57
Tienes una función Python add(a, b) y quieres generar boilerplate de unit tests completos. ¿Cuál es
la mejor estrategia?
A. Pedir múltiples test cases, incluyendo edge cases como add(0, 0) y números negativos.
B. Pedir solo casos positivos y escribir edge cases después.
C. Pedir tests de rendimiento para verificar velocidad.
D. Generar un único test para add(2, 3) .

Respuesta correcta: A

Explicación
La opción A es la adecuada porque usa Copilot como apoyo para proponer pruebas y casos límite, no como sustituto de la validación. Las pruebas generadas deben revisarse, ejecutarse y ampliarse para cubrir comportamiento esperado, entradas inválidas, errores y requisitos de seguridad o rendimiento.

Fuente oficial: [GitHub Docs: escribir pruebas con GitHub Copilot](https://docs.github.com/en/copilot/tutorials/write-tests)

Pregunta 58
CodeTrust Financial adoptó Copilot Enterprise y quiere mejorar code review con pull request
summaries. ¿Qué feature beneficia más?
A. Sugerir reviewers automáticamente según historial y expertise.
B. Resumir cambios del pull request, destacando actualizaciones importantes en formato fácil de leer.
C. Chat en tiempo real con revisores para aprobar rápido.
D. Explicaciones detalladas y personalizables por cada archivo.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 59
Trabajas en Python y necesitas filtrar órdenes de clientes por estado. El prompt “write a function to filter
orders” no sirve. ¿Qué técnica de prompt crafting ayuda?
A. Dejar detalles fuera y elegir entre múltiples sugerencias.
B. Incluir formato de entrada, criterio de filtrado y salida esperada.
C. Confiar en que Copilot detecte todo desde el proyecto.
D. Mantener el prompt corto y vago.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque aporta contexto, restricciones o ejemplos verificables al modelo. Microsoft Learn y GitHub Docs recomiendan dividir tareas complejas, evitar ambigüedad, incluir requisitos concretos e iterar sobre el resultado; un prompt breve y genérico deja demasiadas decisiones sin especificar.

Fuente oficial: [GitHub Docs: ingeniería de prompts](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Pregunta 60
Exploras Copilot Chat para generar, depurar y optimizar código. ¿Qué describe una función primaria?
A. Ejecutar scripts directamente dentro del chat.
B. Hacer commit y push automáticamente.
C. Explicar y generar snippets inline, permitiendo interacción en tiempo real mientras programas.
D. Solo dar autocompletado tradicional sin consultas interactivas.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque refleja que Copilot Chat proporciona asistencia contextual mediante lenguaje natural. Sus respuestas pueden ser inexactas o incompletas; el desarrollador debe revisar, probar y confirmar cualquier cambio antes de incorporarlo.

Fuente oficial: [GitHub Docs: uso responsable de Copilot Chat](https://docs.github.com/en/copilot/responsible-use/chat)

Pregunta 61
Como DevOps en servicios financieros con Copilot Business, debes monitorear uso y cambios de
configuración por regulaciones. ¿Cómo ayuda Copilot Business?
A. Con dashboard de monitoreo en tiempo real de sugerencias.
B. Con audit logs organizacionales que documentan cambios de configuración y uso de Copilot.
C. Con reportes manuales de todas las sugerencias de un sprint.
D. Con logs detallados por usuario de cada sugerencia aceptada.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)

Pregunta 62
Una empresa quiere implementar Copilot y le preocupa la privacidad. ¿Qué SKU ofrece funciones
diseñadas para privacidad enterprise?
A. GitHub Copilot Plus.
B. GitHub Copilot Business.
C. GitHub Copilot Free.
D. GitHub Copilot Individual.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 63
Tu equipo evalúa capacidades de Copilot en distintos lenguajes. ¿Qué afirmación es correcta?
A. Solo tiene buen soporte para Python y JavaScript.
B. Soporta múltiples lenguajes, pero funciona mejor en lenguajes con fuerte presencia open-source.
C. Funciona igual de bien en todos los lenguajes.
D. Puede generar código correcto en cualquier lenguaje aunque nunca haya aparecido en repos
públicos.

Respuesta correcta: B

Explicación
La opción B es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 64
Eres desarrollador Python y automatizas entrada de datos en Excel con openpyxl . Quieres una
función que agregue una fila a un archivo existente. ¿Qué prompt generará mejores sugerencias?
A. “Add data to an Excel sheet.”
B. “Write a function that adds data to a file.”
C. “How to use openpyxl in Python?”
D. “Use openpyxl to write a row of data into the Excel file named 'data.xlsx', in the 'Sheet1' sheet,
starting from the first empty row.”

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 65
Un equipo considera Copilot para código de producción, conociendo limitaciones de asistentes basados
en LLM. ¿Cuál es la descripción más precisa de una limitación?
A. Puede alucinar patrones incorrectos o inseguros, por lo que los desarrolladores deben verificar
sugerencias.
B. Garantiza corrección y seguridad.
C. Entiende todo el codebase y mantiene contexto global.
D. Genera código solo desde repositorios propietarios de GitHub.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque coincide con el objetivo descrito y con el uso de Copilot como asistente de desarrollo. La salida generada es una propuesta probabilística: debe revisarse con el contexto real del proyecto, ejecutarse en pruebas y validarse contra los requisitos antes de producción.

Fuente oficial: [Microsoft Learn: guía de estudio GH-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

Pregunta 66
Tu equipo usa Copilot con cumplimiento GDPR. Un desarrollador recibió sugerencias con nombres
internos parecidos a clientes. ¿Cómo prevenir sugerencias similares manteniendo privacidad?
A. Configurar Copilot para sugerir solo desde repos públicos.
B. Contactar a soporte para eliminar sugerencias del modelo.
C. Desconectar Copilot y dejar de usarlo.
D. Revisar y modificar archivos del proyecto para excluir o eliminar contexto sensible de las sugerencias.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 67
Copilot ofrece completions usando modelos entrenados con código público. ¿Qué ocurre cuando un
desarrollador escribe un snippet y Copilot sugiere una completion?
A. Consulta una knowledge base central de completions aceptadas previamente.
B. Sube todo el repositorio privado a GitHub.
C. Recupera snippets desde una caché open-source sin usar modelos ML.
D. Envía el contexto local del archivo, incluyendo código y comentarios cercanos, a la API del modelo
para inferencia.

Respuesta correcta: D

Explicación
La opción D es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 68
Has usado Copilot Chat en una app JavaScript para login, API calls y manejo de errores. Ahora quieres
código para registrar respuestas exitosas de API en base de datos. ¿Cómo usará Copilot el historial del
chat?
A. Usará el historial para entender contexto y generar código alineado con funciones existentes, como
la misma estructura de API y manejo de errores.
B. Ignorará el historial y responderá solo al prompt actual.
C. Consultará el historial, pero no influirá en el código.
D. Combinará todo el código anterior en un único script.

Respuesta correcta: A

Explicación
La opción A es la adecuada porque describe el flujo o tratamiento de datos de Copilot sin asumir que el sistema procesa localmente todo el proyecto. La documentación oficial distingue entre el contexto enviado para inferencia, las políticas de retención y el uso de datos según el plan y la configuración; por eso la afirmación debe interpretarse junto con la política vigente del servicio.

Fuente oficial: [GitHub Trust Center: seguridad, privacidad y cumplimiento](https://github.com/trust-center)

Pregunta 69
Tienes una función Node.js calculateTotal(numbers) y Copilot generó un test Jest solo para
[1,2,3,4] . ¿Qué dos acciones mejorarían la validación y buenas prácticas? Selecciona dos.
A. Confiar en pruebas manuales para otros edge cases.
B. Agregar un test con array vacío.
C. Agregar un test con números negativos y ceros.
D. Confiar en el test generado como suficiente.

Respuesta correcta: B, C

Explicación
La opción B, C es la adecuada porque usa Copilot como apoyo para proponer pruebas y casos límite, no como sustituto de la validación. Las pruebas generadas deben revisarse, ejecutarse y ampliarse para cubrir comportamiento esperado, entradas inválidas, errores y requisitos de seguridad o rendimiento.

Fuente oficial: [GitHub Docs: escribir pruebas con GitHub Copilot](https://docs.github.com/en/copilot/tutorials/write-tests)

Pregunta 70
Una organización quiere restringir el uso de Copilot a repositorios específicos por compliance. ¿Qué
paso es más efectivo con Copilot Enterprise?
A. Implementar RBAC específico de Copilot en GitHub Enterprise Server.
B. Usar controles de acceso por repositorio desde GitHub Settings.
C. Configurar la política de Copilot a nivel organización, seleccionando solo repositorios donde debe
estar habilitado.
D. Restringir acceso según ubicación geográfica de colaboradores.

Respuesta correcta: C

Explicación
La opción C es la adecuada porque corresponde a una capacidad administrativa, de gobernanza o de plan documentada oficialmente. Estas funciones dependen del plan y del ámbito de administración —organización o empresa—, por lo que deben comprobarse en la configuración y documentación vigentes antes de aplicarlas.

Fuente oficial: [GitHub Docs: planes de GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)
