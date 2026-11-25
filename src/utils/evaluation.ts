/**
 * Utilidades puras de evaluación y validación de respuestas para Quiz GH-300.
 * Desacopladas del DOM para permitir pruebas unitarias exhaustivas.
 */

export interface QuestionEvaluation {
	isCorrect: boolean;
	expected: string[];
	selected: string[];
}

export interface QuestionState {
	selected: string[];
	reviewed: boolean;
	answers: Array<{ correct: boolean; category: string }>;
	current: number;
}

/**
 * Parsea la cadena de respuestas correctas en un arreglo normalizado de opciones.
 * Soporta separadores como 'y', comas ',' o combinaciones con espacios ("A y B", "A, D", "A, B y C").
 */
export function parseCorrectAnswers(correctAnswer: string): string[] {
	if (!correctAnswer || typeof correctAnswer !== 'string') return [];
	return correctAnswer
		.split(/\s*(?:y|and|,)\s*/i)
		.map((opt) => opt.trim())
		.filter(Boolean);
}

/**
 * Evalúa si las opciones seleccionadas por el usuario corresponden exactamente
 * a la combinación de respuestas correctas esperadas (independiente del orden).
 */
export function evaluateAnswer(selected: string[], correctAnswer: string): QuestionEvaluation {
	const expected = parseCorrectAnswers(correctAnswer);
	const normalizedSelected = Array.from(new Set((selected || []).map((s) => s.trim()))).filter(Boolean);

	const isCorrect =
		normalizedSelected.length === expected.length &&
		normalizedSelected.every((option) => expected.includes(option));

	return {
		isCorrect,
		expected,
		selected: normalizedSelected,
	};
}

/**
 * Verifica si una pregunta ha sido formalmente completada y revisada.
 */
export function isQuestionCompleted(state: Pick<QuestionState, 'selected' | 'reviewed'>): boolean {
	return state.reviewed === true && state.selected.length > 0;
}

/**
 * Registra el resultado de la pregunta evaluada en el estado del examen.
 */
export function recordQuestionAnswer(
	answers: Array<{ correct: boolean; category: string } | undefined>,
	index: number,
	evaluation: QuestionEvaluation,
	categoryId: string,
): Array<{ correct: boolean; category: string }> {
	const updated = [...answers] as Array<{ correct: boolean; category: string }>;
	updated[index] = {
		correct: evaluation.isCorrect,
		category: categoryId,
	};
	return updated;
}

export interface QuizActionState {
	reviewVisible: boolean;
	reviewDisabled: boolean;
	continueVisible: boolean;
	continueDisabled: boolean;
	exitVisible: boolean;
}

/**
 * Determina el estado de visibilidad y habilitación de los botones de acción del quiz.
 * Cuando la pregunta ya ha sido revisada, oculta 'Revisar respuesta' y destaca 'Continuar' y 'Salir y configurar'.
 */
export function computeQuizActions(reviewed: boolean, selectedCount: number): QuizActionState {
	if (reviewed) {
		return {
			reviewVisible: false,
			reviewDisabled: true,
			continueVisible: true,
			continueDisabled: false,
			exitVisible: true,
		};
	}
	return {
		reviewVisible: true,
		reviewDisabled: selectedCount === 0,
		continueVisible: false,
		continueDisabled: true,
		exitVisible: true,
	};
}

export interface BackButtonState {
	label: string;
	disabled: boolean;
	action: 'exit' | 'previous';
}

/**
 * Determina el estado del botón inferior (texto, estado disabled y acción a ejecutar).
 * - En la pregunta 0: 'Salir y configurar', habilitado solo si selectedCount === 0 y no está revisada.
 * - En preguntas > 0: 'Pregunta anterior', habilitado solo si selectedCount === 0 y no está revisada.
 * - Si hay opciones seleccionadas o la pregunta está en revisión: disabled = true.
 */
export function computeBackButtonState(
	current: number,
	selectedCount: number,
	reviewed: boolean,
): BackButtonState {
	const isFirst = current === 0;
	const disabled = selectedCount > 0 || reviewed;

	return {
		label: isFirst ? 'Salir y configurar' : 'Pregunta anterior',
		disabled,
		action: isFirst ? 'exit' : 'previous',
	};
}

/**
 * Determina si una pregunta debe renderizarse en modo solo lectura de revisión.
 * Ocurre cuando la pregunta ya tiene un resultado previo registrado en answers.
 */
export function isQuestionReadOnly(
	answers: Array<{ correct: boolean; category: string } | undefined>,
	index: number,
): boolean {
	return Boolean(answers && answers[index] !== undefined);
}

export interface HistoryToggleState {
	isOpen: boolean;
	arrow: '↑' | '↓';
	ariaExpanded: boolean;
}

/**
 * Calcula el estado visual y de accesibilidad del botón del historial de exámenes.
 * - Si el panel está abierto (isOpen === true): flecha hacia arriba ('↑') y ariaExpanded = true.
 * - Si el panel está cerrado (isOpen === false): flecha hacia abajo ('↓') y ariaExpanded = false.
 */
export function computeHistoryToggleState(isOpen: boolean): HistoryToggleState {
	return {
		isOpen,
		arrow: isOpen ? '↑' : '↓',
		ariaExpanded: isOpen,
	};
}



/**
 * Genera el motivo pedagógico por el cual una opción seleccionada es incorrecta,
 * fundamentado exclusivamente en la documentación oficial correspondiente a la certificación
 * activa (GitHub Copilot GH-300 o Anthropic Claude Certified Developer).
 */
export function buildIncorrectRationale(
	selectedOption: { id: string; text: string },
	item: {
		id?: string;
		certification?: string;
		question: string;
		correctAnswer: string;
		explanation?: string;
		category?: { id: string; name: string };
		source?: { title: string; url: string };
	},
): string {
	const text = (selectedOption.text || '').toLowerCase();
	const categoryId = item.category?.id || '';

	const isClaude =
		item.certification === 'claude-certified-developer' ||
		(item.id && item.id.startsWith('claude-certified-developer')) ||
		Boolean(
			item.source?.url &&
				(item.source.url.includes('anthropic') ||
					item.source.url.includes('claude') ||
					item.source.url.includes('modelcontextprotocol')),
		);

	// -------------------------------------------------------------
	// RAMA ANTHROPIC CLAUDE CERTIFIED DEVELOPER
	// -------------------------------------------------------------
	if (isClaude) {
		const sourceTitle = item.source?.title || 'Anthropic Docs';

		// 1. MSO Foundations
		if (categoryId === 'mso_foundations') {
			if (
				text.includes('claude 2') ||
				text.includes('claude-2') ||
				text.includes('completion api') ||
				text.includes('completions')
			) {
				return `Según la documentación oficial de Anthropic (${sourceTitle}), la familia Claude 3/3.5 y sus parámetros modernos de inferencia (Messages API) reemplazan a los modelos y endpoints heredados.`;
			}
			if (
				text.includes('tokens') ||
				text.includes('temperatura') ||
				text.includes('temperature') ||
				text.includes('top_p') ||
				text.includes('top_k')
			) {
				return `De acuerdo con las guías de inferencia de Anthropic (${sourceTitle}), esta configuración de parámetros o cálculo de tokens no cumple con las directrices oficiales para optimizar latencia, costo y coherencia del modelo.`;
			}
			return `De acuerdo con la documentación oficial de Anthropic (${sourceTitle}), esta opción contradice las especificaciones técnicas de la familia de modelos Claude 3/3.5 o los fundamentos de inferencia requeridos para Claude Certified Developer.`;
		}

		// 2. Production-Grade Prompting, Agents & Tool Use
		if (categoryId === 'prompting_agents_tool_use' || categoryId === 'prompting') {
			if (
				text.includes('xml') ||
				text.includes('system') ||
				text.includes('prefill') ||
				text.includes('caching')
			) {
				return `Las directrices de ingeniería de prompts de Anthropic (${sourceTitle}) establecen el uso de etiquetas XML bien estructuradas, prefill y Prompt Caching eficiente para garantizar consistencia y rendimiento.`;
			}
			if (text.includes('tool') || text.includes('herramienta') || text.includes('json')) {
				return `Según la documentación de Tool Use de Anthropic (${sourceTitle}), la definición de herramientas exige JSON Schema estricto y un manejo determinista de llamadas y respuestas del modelo.`;
			}
			return `Según las directrices de ingeniería de prompts y agentes de Anthropic (${sourceTitle}), esta opción no sigue las mejores prácticas recomendadas para el diseño estructurado de prompts ni patrones agenticos.`;
		}

		// 3. Claude Code & MCP Integration
		if (categoryId === 'claude_code_mcp_integration') {
			if (
				text.includes('transport') ||
				text.includes('mcp') ||
				text.includes('stdio') ||
				text.includes('sse')
			) {
				return `De acuerdo con la especificación abierta de Model Context Protocol (MCP) (${sourceTitle}), esta opción describe una configuración o transporte no conforme con los estándares oficiales de tools, resources o prompts.`;
			}
			if (
				text.includes('claude code') ||
				text.includes('claude.md') ||
				text.includes('hook') ||
				text.includes('sub-agent')
			) {
				return `Según la documentación técnica de Claude Code (${sourceTitle}), la configuración en CLAUDE.md, los hooks de ciclo de vida y los sub-agentes tienen directivas y alcances específicos que esta opción no respeta.`;
			}
			return `De acuerdo con la arquitectura de integración de Claude Code y MCP (${sourceTitle}), esta alternativa infringe los patrones oficiales de extensión y conectividad del modelo.`;
		}

		// 4. Production Engineering, Evals & Security
		if (categoryId === 'production_evals_security') {
			if (
				text.includes('429') ||
				text.includes('529') ||
				text.includes('rate limit') ||
				text.includes('overload') ||
				text.includes('retry') ||
				text.includes('reintent')
			) {
				return `En las guías de resiliencia en producción de Anthropic (${sourceTitle}), ante errores de tasa (429) o sobrecarga (529) se requiere implementar reintentos con backoff exponencial y jitter, no reintentos continuos inmediatos.`;
			}
			if (
				text.includes('jailbreak') ||
				text.includes('injection') ||
				text.includes('seguridad') ||
				text.includes('pii') ||
				text.includes('guardrail')
			) {
				return `De acuerdo con los estándares de seguridad de Anthropic (${sourceTitle}), se deben implementar defensas en profundidad, evaluación continua de riesgos y saneamiento estricto contra inyecciones de prompts.`;
			}
			return `Según las directrices de ingeniería de producción y seguridad de Anthropic (${sourceTitle}), esta opción no satisface los requisitos de resiliencia, evaluación continua (evals) o mitigación de riesgos.`;
		}

		// 5. Accelerators & IP Contribution
		if (categoryId === 'accelerators_ip_contribution') {
			return `De acuerdo con las mejores prácticas de aceleradores y SDLC de Anthropic (${sourceTitle}), esta alternativa no cumple con los criterios de desacoplamiento determinista vs. LLM, empaquetado reutilizable ni estrategias de despliegue seguro.`;
		}

		// Fallback para Claude Certified Developer
		return `De acuerdo con la documentación oficial de Anthropic (${sourceTitle}), la opción ${selectedOption.id} describe una configuración o suposición técnicamente errónea para este escenario, ya que infringe los requisitos técnicos y buenas prácticas definidas para la certificación Claude Certified Developer.`;
	}

	// -------------------------------------------------------------
	// RAMA GITHUB COPILOT GH-300
	// -------------------------------------------------------------
	// 1. Arquitectura y manejo de datos / privacidad
	if (categoryId === 'architecture' || categoryId === 'privacy') {
		if (text.includes('compartir') || text.includes('otros usuarios')) {
			return 'El Microsoft Trust Center y las directrices de privacidad garantizan el aislamiento estricto del código del cliente: el código propietario nunca se comparte con terceros ni con otros usuarios u organizaciones.';
		}
		if (text.includes('almacena permanentemente') || text.includes('almacena todo') || text.includes('reentrenar')) {
			return 'La documentación oficial de GitHub Copilot y el Microsoft Trust Center estipulan que las entradas de código no se almacenan permanentemente ni se utilizan para reentrenar modelos fundacionales en suscripciones de negocio o empresa.';
		}
		if (text.includes('localmente') || text.includes('sin transmitir') || text.includes('sin enviar')) {
			return 'Según la arquitectura oficial de GitHub Copilot, el procesamiento y la inferencia del modelo se realizan mediante un proxy seguro en la nube; no se ejecuta de forma puramente local en el IDE.';
		}
		return `De acuerdo con las directrices de privacidad y arquitectura de Microsoft Learn y GitHub Docs (${item.source?.title || 'GitHub Docs'}), esta opción describe un tratamiento de retención o flujo de datos no conforme con las salvaguardas oficiales.`;
	}

	// 2. Planes, gobernanza y administración
	if (text.includes('individual') || text.includes('business') || text.includes('enterprise')) {
		return `En la documentación de planes de GitHub Copilot (Microsoft Learn / GitHub Docs), la capacidad o requisito de gobernanza indicado en este escenario no coincide con las funciones del plan seleccionado.`;
	}

	// 3. Ingeniería de prompts y contexto
	if (categoryId === 'prompting') {
		if (text.includes('breve') || text.includes('genérico') || text.includes('sin detalles') || text.includes('sin contexto')) {
			return 'Las guías de estudio oficial de Microsoft Learn para GH-300 indican que los prompts ambiguos o sin restricciones degradan la calidad del código generado. Se debe aportar contexto, restricciones y ejemplos verificables.';
		}
		return `Según las directrices de ingeniería de prompts de GitHub Copilot y Microsoft Learn, esta opción no optimiza el contexto ni sigue los principios recomendados para guiar las sugerencias del modelo.`;
	}

	// 4. Uso responsable de IA y validación humana
	if (categoryId === 'responsible') {
		if (text.includes('asumir') || text.includes('siempre seguro') || text.includes('sin revisar') || text.includes('sin validar')) {
			return 'Los principios de IA Responsable de Microsoft determinan que el desarrollador permanece en control y debe validar, probar y auditar cada sugerencia antes de su puesta en producción.';
		}
		return `El estándar de Uso Responsable de Microsoft y GitHub Docs estipula que la IA no garantiza infalibilidad por sí sola y requiere supervisión activa del equipo de desarrollo.`;
	}

	// 5. Productividad y funciones
	if (categoryId === 'features' || categoryId === 'productivity') {
		return `Según la documentación técnica oficial de GitHub Copilot (${item.source?.title || 'Microsoft Learn'}), esta opción describe un comando, participante de chat o integración que no corresponde al objetivo técnico planteado en este problema.`;
	}

	// 6. Fallback fundamentado detallado para GH-300
	return `De acuerdo con la documentación oficial (${item.source?.title || 'GitHub Docs'}), la opción ${selectedOption.id} describe una configuración o suposición técnicamente errónea para este escenario, ya que infringe los requisitos de gobernanza, seguridad o precisión técnica definidos para la certificación GH-300.`;
}

export interface ReviewBreakdown {
	isCorrect: boolean;
	correctAnswers: string[];
	incorrectSelected: Array<{ id: string; text: string; rationale: string }>;
	missingCorrect: Array<{ id: string; text: string }>;
	explanation: string;
	source?: { title: string; url: string };
}

/**
 * Genera el desglose completo del diagnóstico de revisión cuando el usuario finaliza una pregunta.
 */
export function buildReviewBreakdown(
	selectedIds: string[],
	item: {
		id?: string;
		certification?: string;
		question: string;
		options: Array<{ id: string; text: string }>;
		correctAnswer: string;
		explanation: string;
		category?: { id: string; name: string };
		source?: { title: string; url: string };
	},
): ReviewBreakdown {
	const evaluation = evaluateAnswer(selectedIds, item.correctAnswer);
	const correctAnswers = evaluation.expected;

	const incorrectSelected = (selectedIds || [])
		.filter((id) => !correctAnswers.includes(id))
		.map((id) => {
			const opt = item.options?.find((o) => o.id === id) || { id, text: '' };
			return {
				id: opt.id,
				text: opt.text,
				rationale: buildIncorrectRationale(opt, item),
			};
		});

	const missingCorrect = correctAnswers
		.filter((id) => !(selectedIds || []).includes(id))
		.map((id) => item.options?.find((o) => o.id === id) || { id, text: '' });

	return {
		isCorrect: evaluation.isCorrect,
		correctAnswers,
		incorrectSelected,
		missingCorrect,
		explanation: item.explanation,
		source: item.source,
	};
}

export interface CoverageMetrics {
	totalAvailable: number;
	practicedCount: number;
	coveragePercent: number;
	unseenCount: number;
	unseenQuestionIds: string[];
}

/**
 * Calcula las métricas de inventario y cobertura acumulada a partir de la lista total de preguntas
 * y los IDs de preguntas presentadas en los intentos previos.
 */
export function computeCoverageMetrics(
	allQuestionIds: string[],
	attemptQuestionIdsList: string[][],
): CoverageMetrics {
	const validIds = new Set(allQuestionIds);
	const practicedSet = new Set<string>();

	for (const attemptIds of attemptQuestionIdsList) {
		if (Array.isArray(attemptIds)) {
			for (const id of attemptIds) {
				if (validIds.has(id)) {
					practicedSet.add(id);
				}
			}
		}
	}

	const totalAvailable = allQuestionIds.length;
	const practicedCount = practicedSet.size;
	const coveragePercent =
		totalAvailable > 0 ? Math.round((practicedCount / totalAvailable) * 100) : 0;
	const unseenQuestionIds = allQuestionIds.filter((id) => !practicedSet.has(id));
	const unseenCount = unseenQuestionIds.length;

	return {
		totalAvailable,
		practicedCount,
		coveragePercent,
		unseenCount,
		unseenQuestionIds,
	};
}

/**
 * Extrae las preguntas en las que el usuario cometió un error en una sesión de examen.
 */
export function extractFailedQuestions<
	T extends { id: string; balotario: string; number: number; question: string },
>(questions: T[], answers: Array<{ correct: boolean } | undefined>): T[] {
	return questions.filter((_, index) => answers[index] && answers[index]?.correct === false);
}

/**
 * Extrae y deduplica todas las preguntas que han sido falladas a lo largo de los intentos históricos.
 */
export function extractAllHistoricalFailedQuestions<T extends { id: string }>(
	allQuestions: T[],
	attempts: Array<{ failed_questions?: string }>,
): T[] {
	const failedIds = new Set<string>();
	for (const attempt of attempts) {
		if (attempt.failed_questions) {
			try {
				const list: Array<{ id: string }> = JSON.parse(attempt.failed_questions);
				if (Array.isArray(list)) {
					for (const item of list) {
						if (item && item.id) {
							failedIds.add(item.id);
						}
					}
				}
			} catch {
				/* ignore invalid JSON in attempts */
			}
		}
	}
	return allQuestions.filter((q) => failedIds.has(q.id));
}


