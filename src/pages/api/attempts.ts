import type { APIRoute } from 'astro';
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { DatabaseSync } from 'node:sqlite';

const databasePath = join(process.cwd(), 'data', 'quiz-history.sqlite');
let database: DatabaseSync | undefined;

function getDatabase() {
	if (!database) {
		mkdirSync(dirname(databasePath), { recursive: true });
		database = new DatabaseSync(databasePath);
		database.exec(`CREATE TABLE IF NOT EXISTS attempts (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			created_at TEXT NOT NULL,
			balotario TEXT NOT NULL,
			total_questions INTEGER NOT NULL,
			correct_answers INTEGER NOT NULL,
			incorrect_answers INTEGER NOT NULL,
			score_percent INTEGER NOT NULL,
			category_summary TEXT NOT NULL
		)`);
	}
	return database;
}

export const GET: APIRoute = () => {
	const rows = getDatabase().prepare('SELECT * FROM attempts ORDER BY created_at DESC').all();
	return new Response(JSON.stringify(rows), { headers: { 'Content-Type': 'application/json' } });
};

export const POST: APIRoute = async ({ request }) => {
	try {
		const attempt = await request.json();
		const required = ['balotario', 'totalQuestions', 'correctAnswers', 'incorrectAnswers', 'scorePercent', 'categorySummary'];
		if (required.some((field) => attempt[field] === undefined)) {
			return new Response(JSON.stringify({ error: 'Datos incompletos' }), { status: 400 });
		}
		getDatabase().prepare(`INSERT INTO attempts
			(created_at, balotario, total_questions, correct_answers, incorrect_answers, score_percent, category_summary)
			VALUES (?, ?, ?, ?, ?, ?, ?)`).run(
			new Date().toISOString(), attempt.balotario, Number(attempt.totalQuestions), Number(attempt.correctAnswers),
			Number(attempt.incorrectAnswers), Number(attempt.scorePercent), JSON.stringify(attempt.categorySummary),
		);
		return new Response(JSON.stringify({ saved: true }), { status: 201, headers: { 'Content-Type': 'application/json' } });
	} catch {
		return new Response(JSON.stringify({ error: 'No se pudo guardar el examen' }), { status: 500 });
	}
};
