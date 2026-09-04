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
		.split(/\s*(?:y|,)\s*/)
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
	answers: Array<{ correct: boolean; category: string }>,
	index: number,
	evaluation: QuestionEvaluation,
	categoryId: string,
): Array<{ correct: boolean; category: string }> {
	const updated = [...answers];
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
	answers: Array<{ correct: boolean; category: string }>,
	index: number,
): boolean {
	return Boolean(answers && answers[index] !== undefined);
}



/**
 * Genera el motivo pedagógico por el cual una opción seleccionada es incorrecta,
 * fundamentado exclusivamente en la documentación oficial de Microsoft Learn y GitHub Copilot.
 */
export function buildIncorrectRationale(
	selectedOption: { id: string; text: string },
	item: {
		question: string;
		correctAnswer: string;
		explanation?: string;
		category?: { id: string; name: string };
		source?: { title: string; url: string };
	},
): string {
	const text = (selectedOption.text || '').toLowerCase();
	const categoryId = item.category?.id || '';

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
		return `Según la documentación técnica oficial de GitHub Copilot (${item.source?.title || 'Microsoft Learn'}), esta opción describe un alcance, comando o herramienta que no corresponde a los requisitos formulados en la pregunta.`;
	}

	// 6. Fallback fundamentado
	return `De acuerdo con la documentación oficial de Microsoft Learn y GitHub Copilot (${item.source?.title || 'GitHub Docs'}), la opción ${selectedOption.id} no satisface los criterios técnicos válidos para este escenario.`;
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


