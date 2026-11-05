/**
 * Tipos compartidos que describen la forma de una pregunta del balotario
 * (datasets generados en src/data/certifications/<id>.json) y de sus partes.
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

export interface QuestionTranslation {
	question: string;
	options: QuestionOption[];
	explanation?: string;
}

export interface Question {
	id: string;
	certification?: string;
	balotario: string;
	number: number;
	question: string;
	options: QuestionOption[];
	correctAnswer: string;
	explanation: string;
	source: QuestionSource;
	category: QuestionCategory;
	translations?: {
		es?: QuestionTranslation;
	};
}

export interface CategorySummary {
	name: string;
	correct: number;
	total: number;
}

export interface FailedQuestionItem {
	id: string;
	certification?: string;
	balotario: string;
	number: number;
	question: string;
}

export interface AttemptPayload {
	certification?: string;
	balotario: string;
	totalQuestions: number;
	correctAnswers: number;
	incorrectAnswers: number;
	scorePercent: number;
	categorySummary: CategorySummary[];
	failedQuestions?: FailedQuestionItem[];
	questionIds?: string[];
}

export interface Attempt {
	id: number;
	created_at: string;
	certification?: string;
	balotario: string;
	total_questions: number;
	correct_answers: number;
	incorrect_answers: number;
	score_percent: number;
	category_summary: string;
	failed_questions?: string;
	question_ids?: string;
}
