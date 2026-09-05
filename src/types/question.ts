/**
 * Tipos compartidos que describen la forma de una pregunta del balotario
 * (dataset generado en src/data/questions.json) y de sus partes.
 */

export interface QuestionOption {
	id: string;
	text: string;
}

export interface QuestionSource {
	title: string;
	url: string;
}

export interface QuestionCategory {
	id: string;
	name: string;
}

export interface Question {
	id: string;
	balotario: string;
	number: number;
	question: string;
	options: QuestionOption[];
	correctAnswer: string;
	explanation: string;
	source: QuestionSource;
	category: QuestionCategory;
}

export interface CategorySummary {
	name: string;
	correct: number;
	total: number;
}

export interface AttemptPayload {
	balotario: string;
	totalQuestions: number;
	correctAnswers: number;
	incorrectAnswers: number;
	scorePercent: number;
	categorySummary: CategorySummary[];
}

export interface Attempt {
	id: number;
	created_at: string;
	balotario: string;
	total_questions: number;
	correct_answers: number;
	incorrect_answers: number;
	score_percent: number;
	category_summary: string;
}
