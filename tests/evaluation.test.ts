import { describe, expect, it } from 'bun:test';
import {
	evaluateAnswer,
	isQuestionCompleted,
	parseCorrectAnswers,
	recordQuestionAnswer,
	buildIncorrectRationale,
	buildReviewBreakdown,
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

	describe('3. Generación de Motivos para Respuestas Incorrectas (Fuentes Oficiales Microsoft & GitHub Copilot)', () => {
		it('debe generar motivo fundamentado en privacidad cuando la opción afirma almacenamiento permanente', () => {
			const option = {
				id: 'A',
				text: 'GitHub Copilot almacena permanentemente todo el código del usuario y los datos del proyecto.',
			};
			const item = {
				question: '¿Cómo procesa Copilot los datos?',
				correctAnswer: 'B',
				category: { id: 'privacy', name: 'Privacidad, exclusiones y salvaguardas' },
				source: { title: 'GitHub Trust Center', url: 'https://github.com/trust-center' },
			};
			const rationale = buildIncorrectRationale(option, item);
			expect(rationale).toContain('no se almacenan permanentemente');
			expect(rationale).toContain('Microsoft Trust Center');
		});

		it('debe generar motivo fundamentado en prompts cuando la opción sugiere prompts genéricos o breves', () => {
			const option = {
				id: 'C',
				text: 'Usar un prompt breve y genérico sin contexto para que el modelo decida libremente.',
			};
			const item = {
				question: '¿Cuál es la mejor práctica de prompt?',
				correctAnswer: 'A',
				category: { id: 'prompting', name: 'Ingeniería de prompts y contexto' },
				source: { title: 'Microsoft Learn: guía de estudio GH-300', url: 'https://learn.microsoft.com' },
			};
			const rationale = buildIncorrectRationale(option, item);
			expect(rationale).toContain('Microsoft Learn para GH-300');
			expect(rationale).toContain('prompts ambiguos o sin restricciones');
		});

		it('debe generar motivo de IA Responsable cuando la opción sugiere no validar el código generado', () => {
			const option = {
				id: 'D',
				text: 'Asumir que el código generado es siempre seguro sin revisar ni validar con pruebas.',
			};
			const item = {
				question: '¿Cuál es la responsabilidad del desarrollador?',
				correctAnswer: 'B',
				category: { id: 'responsible', name: 'Uso responsable de GitHub Copilot' },
				source: { title: 'GitHub Docs: uso responsable', url: 'https://docs.github.com' },
			};
			const rationale = buildIncorrectRationale(option, item);
			expect(rationale).toContain('IA Responsable de Microsoft');
			expect(rationale).toContain('validar, probar y auditar');
		});

		it('debe generar motivo fundamentado en planes y gobernanza cuando la opción menciona un plan inadecuado', () => {
			const option = {
				id: 'A',
				text: 'Copilot Individual para toda la empresa con auditoría centralizada.',
			};
			const item = {
				question: '¿Qué plan empresarial se requiere?',
				correctAnswer: 'B',
				category: { id: 'features', name: 'Funciones de GitHub Copilot' },
				source: { title: 'GitHub Docs: planes de GitHub Copilot', url: 'https://docs.github.com' },
			};
			const rationale = buildIncorrectRationale(option, item);
			expect(rationale).toContain('planes de GitHub Copilot');
		});

		it('debe generar motivo de arquitectura cloud cuando la opción afirma procesamiento puramente local sin transmitir datos', () => {
			const option = {
				id: 'D',
				text: 'La solicitud se procesa localmente en el IDE mediante un proxy sin transmitir datos a servidores externos.',
			};
			const item = {
				question: '¿Cuál es el flujo de datos de Copilot?',
				correctAnswer: 'C',
				category: { id: 'architecture', name: 'Datos y arquitectura de GitHub Copilot' },
				source: { title: 'GitHub Docs: arquitectura', url: 'https://docs.github.com' },
			};
			const rationale = buildIncorrectRationale(option, item);
			expect(rationale).toContain('proxy seguro en la nube');
			expect(rationale).toContain('no se ejecuta de forma puramente local');
		});

		it('debe generar motivo de aislamiento cuando la opción afirma que se comparte código con otros usuarios', () => {
			const option = {
				id: 'C',
				text: 'GitHub Copilot almacena todo el código del usuario y puede compartirlo con otros usuarios.',
			};
			const item = {
				question: '¿Se comparte el código sensible?',
				correctAnswer: 'B',
				category: { id: 'privacy', name: 'Privacidad, exclusiones y salvaguardas' },
				source: { title: 'GitHub Trust Center', url: 'https://github.com/trust-center' },
			};
			const rationale = buildIncorrectRationale(option, item);
			expect(rationale).toContain('aislamiento estricto del código del cliente');
			expect(rationale).toContain('nunca se comparte con terceros');
		});
	});

	describe('4. Desglose Estructurado de Diagnóstico en Pantalla (buildReviewBreakdown)', () => {
		const sampleQuestion = {
			id: 'balotario-1-1',
			question: '¿Cómo procesa Copilot los datos?',
			options: [
				{ id: 'A', text: 'GitHub Copilot almacena permanentemente todo el código del usuario.' },
				{ id: 'B', text: 'GitHub Copilot procesa temporalmente las entradas sin almacenar el código.' },
				{ id: 'C', text: 'GitHub Copilot comparte el código con otros usuarios.' },
				{ id: 'D', text: 'Procesamiento local sin transmitir datos a servidores externos.' },
			],
			correctAnswer: 'B',
			explanation: 'La opción B describe el flujo efímero de datos según la política oficial.',
			category: { id: 'privacy', name: 'Privacidad, exclusiones y salvaguardas' },
			source: { title: 'GitHub Docs: alojamiento de modelos', url: 'https://docs.github.com' },
		};

		it('debe generar un desglose estructurado completo cuando el usuario falla una pregunta individual', () => {
			const breakdown = buildReviewBreakdown(['A'], sampleQuestion);

			expect(breakdown.isCorrect).toBe(false);
			expect(breakdown.correctAnswers).toEqual(['B']);
			expect(breakdown.incorrectSelected.length).toBe(1);
			expect(breakdown.incorrectSelected[0].id).toBe('A');
			expect(breakdown.incorrectSelected[0].text).toContain('almacena permanentemente');
			expect(breakdown.incorrectSelected[0].rationale).toContain('Microsoft Trust Center');
			expect(breakdown.missingCorrect.length).toBe(1);
			expect(breakdown.missingCorrect[0].id).toBe('B');
		});

		it('debe generar un desglose estructurado cuando el usuario falla una pregunta de doble opción con un distractor', () => {
			const multiQuestion = {
				id: 'balotario-1-17',
				question: '¿Qué dos configuraciones optimizan el uso de Copilot?',
				options: [
					{ id: 'A', text: 'Desactivar el firewall local.' },
					{ id: 'B', text: 'Usar prompts breves sin contexto.' },
					{ id: 'C', text: 'Mantener pestañas relevantes abiertas en el editor.' },
					{ id: 'D', text: 'Definir restricciones claras e iterar.' },
				],
				correctAnswer: 'C y D',
				explanation: 'C y D aportan contexto vecino y especificidad según Microsoft Learn.',
				category: { id: 'prompting', name: 'Ingeniería de prompts y contexto' },
				source: { title: 'Microsoft Learn: guía de estudio GH-300', url: 'https://learn.microsoft.com' },
			};

			// Usuario seleccionó C (correcta) y B (distractor)
			const breakdown = buildReviewBreakdown(['C', 'B'], multiQuestion);

			expect(breakdown.isCorrect).toBe(false);
			expect(breakdown.correctAnswers).toEqual(['C', 'D']);
			expect(breakdown.incorrectSelected.length).toBe(1);
			expect(breakdown.incorrectSelected[0].id).toBe('B');
			expect(breakdown.incorrectSelected[0].rationale).toContain('Microsoft Learn para GH-300');
			expect(breakdown.missingCorrect.length).toBe(1);
			expect(breakdown.missingCorrect[0].id).toBe('D');
		});

		it('debe generar desglose con faltantes cuando el usuario responde de forma incompleta (selección parcial)', () => {
			const multiQuestion = {
				id: 'balotario-1-17',
				question: 'Selecciona las dos opciones correctas',
				options: [
					{ id: 'A', text: 'Opción A' },
					{ id: 'B', text: 'Opción B' },
				],
				correctAnswer: 'A y B',
				explanation: 'Ambas son necesarias.',
			};

			const breakdown = buildReviewBreakdown(['A'], multiQuestion);

			expect(breakdown.isCorrect).toBe(false);
			expect(breakdown.incorrectSelected.length).toBe(0);
			expect(breakdown.missingCorrect.length).toBe(1);
			expect(breakdown.missingCorrect[0].id).toBe('B');
		});

		it('debe generar desglose limpio sin advertencias de error cuando la respuesta es 100% correcta', () => {
			const breakdown = buildReviewBreakdown(['B'], sampleQuestion);

			expect(breakdown.isCorrect).toBe(true);
			expect(breakdown.incorrectSelected.length).toBe(0);
			expect(breakdown.missingCorrect.length).toBe(0);
			expect(breakdown.explanation).toBe(sampleQuestion.explanation);
		});
	});
});
