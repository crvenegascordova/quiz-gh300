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
