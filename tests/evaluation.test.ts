import { describe, expect, it } from 'bun:test';
import {
	evaluateAnswer,
	isQuestionCompleted,
	parseCorrectAnswers,
	recordQuestionAnswer,
} from '../src/utils/evaluation';

describe('Flujo de Evaluación y Corrección de Respuestas (SDD Quiz GH-300)', () => {
	describe('1. Verificación de Finalización de Pregunta', () => {
		it('debe marcar como NO completada si el usuario seleccionó opciones pero no ha revisado (reviewed=false)', () => {
			const state = {
				selected: ['A'],
				reviewed: false,
			};
			expect(isQuestionCompleted(state)).toBe(false);
		});

		it('debe marcar como NO completada si reviewed=true pero la selección está vacía', () => {
			const state = {
				selected: [],
				reviewed: true,
			};
			expect(isQuestionCompleted(state)).toBe(false);
		});

		it('debe corroborar y registrar que la pregunta está completada exitosamente cuando reviewed=true y selected tiene opciones', () => {
			const state = {
				selected: ['A', 'B'],
				reviewed: true,
			};
			expect(isQuestionCompleted(state)).toBe(true);
		});

		it('debe registrar el resultado evaluado en el arreglo de respuestas sin mutar el historial previo', () => {
			const initialAnswers: Array<{ correct: boolean; category: string }> = [
				{ correct: true, category: 'cat-1' },
			];
			const evaluation = evaluateAnswer(['A', 'B'], 'A y B');
			const updated = recordQuestionAnswer(initialAnswers, 1, evaluation, 'cat-2');

			expect(initialAnswers.length).toBe(1);
			expect(updated.length).toBe(2);
			expect(updated[1]).toEqual({
				correct: true,
				category: 'cat-2',
			});
		});
	});

	describe('2. Corrección del Bug en Preguntas de Doble y Múltiple Opción', () => {
		describe('2.1 Parser de Respuestas Correctas (parseCorrectAnswers)', () => {
			it('debe parsear respuestas individuales', () => {
				expect(parseCorrectAnswers('A')).toEqual(['A']);
				expect(parseCorrectAnswers('B')).toEqual(['B']);
			});

			it('debe parsear doble opción con conector "y" ("A y B", "C y D")', () => {
				expect(parseCorrectAnswers('A y B')).toEqual(['A', 'B']);
				expect(parseCorrectAnswers('C y D')).toEqual(['C', 'D']);
			});

			it('debe parsear doble opción con separador de coma ("A, D", "B, C")', () => {
				expect(parseCorrectAnswers('A, D')).toEqual(['A', 'D']);
				expect(parseCorrectAnswers('B, C')).toEqual(['B', 'C']);
			});

			it('debe parsear preguntas de triple opción ("A, B y C", "A, B, D")', () => {
				expect(parseCorrectAnswers('A, B y C')).toEqual(['A', 'B', 'C']);
				expect(parseCorrectAnswers('A, B, D')).toEqual(['A', 'B', 'D']);
			});

			it('debe manejar entradas vacías o no válidas de forma segura', () => {
				expect(parseCorrectAnswers('')).toEqual([]);
				// @ts-expect-error test invalid inputs
				expect(parseCorrectAnswers(null)).toEqual([]);
			});
		});

		describe('2.2 Evaluación de Doble Opción (Bug: marcar erróneamente como incorrecto)', () => {
			it('[ESCENARIO CRÍTICO BUG] debe marcar como CORRECTO cuando el usuario selecciona las dos opciones correctas para "A y B"', () => {
				const result = evaluateAnswer(['A', 'B'], 'A y B');
				expect(result.isCorrect).toBe(true);
				expect(result.expected).toEqual(['A', 'B']);
			});

			it('debe marcar como CORRECTO incluso si el usuario selecciona en orden invertido ["B", "A"]', () => {
				const result = evaluateAnswer(['B', 'A'], 'A y B');
				expect(result.isCorrect).toBe(true);
			});

			it('debe marcar como CORRECTO para formato con comas "A, D" cuando el usuario selecciona ["A", "D"]', () => {
				const result = evaluateAnswer(['A', 'D'], 'A, D');
				expect(result.isCorrect).toBe(true);
			});

			it('debe marcar como INCORRECTO en caso de selección parcial (solo una de las dos)', () => {
				const resultOnlyA = evaluateAnswer(['A'], 'A y B');
				expect(resultOnlyA.isCorrect).toBe(false);

				const resultOnlyB = evaluateAnswer(['B'], 'A y B');
				expect(resultOnlyB.isCorrect).toBe(false);
			});

			it('debe marcar como INCORRECTO si el usuario selecciona una opción correcta y un distractor', () => {
				const result = evaluateAnswer(['A', 'C'], 'A y B');
				expect(result.isCorrect).toBe(false);
			});

			it('debe marcar como INCORRECTO si el usuario selecciona más opciones de las esperadas (sobreselección)', () => {
				const result = evaluateAnswer(['A', 'B', 'C'], 'A y B');
				expect(result.isCorrect).toBe(false);
			});

			it('debe evaluar correctamente opciones triples ("A, B y C")', () => {
				const correctResult = evaluateAnswer(['A', 'B', 'C'], 'A, B y C');
				expect(correctResult.isCorrect).toBe(true);

				const scrambled = evaluateAnswer(['C', 'A', 'B'], 'A, B y C');
				expect(scrambled.isCorrect).toBe(true);

				const incomplete = evaluateAnswer(['A', 'B'], 'A, B y C');
				expect(incomplete.isCorrect).toBe(false);
			});
		});
	});
});
