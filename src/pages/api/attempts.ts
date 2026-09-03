import type { APIRoute } from 'astro';
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
const databasePath = join(process.cwd(), 'data', 'quiz-history.sqlite');

interface DatabaseClient {
	exec(sql: string): void;
	prepare(sql: string): {
		all(...params: unknown[]): unknown[];
		run(...params: unknown[]): unknown;
	};
}

let database: DatabaseClient | undefined;

async function getDatabase(): Promise<DatabaseClient> {
	if (!database) {
		mkdirSync(dirname(databasePath), { recursive: true });
		if (typeof process !== 'undefined' && process.versions?.bun) {
			const mod = ['bun', 'sqlite'].join(':');
			const { Database } = await import(mod);
			database = new Database(databasePath) as unknown as DatabaseClient;
		} else {
			const mod = ['node', 'sqlite'].join(':');
			const { DatabaseSync } = await import(mod);
			database = new DatabaseSync(databasePath) as unknown as DatabaseClient;
		}
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

export const GET: APIRoute = async () => {
	const db = await getDatabase();
	const rows = db.prepare('SELECT * FROM attempts ORDER BY created_at DESC').all();
	return new Response(JSON.stringify(rows), { headers: { 'Content-Type': 'application/json' } });
};

export const POST: APIRoute = async ({ request }) => {
	try {
		const attempt = await request.json();
		const required = ['balotario', 'totalQuestions', 'correctAnswers', 'incorrectAnswers', 'scorePercent', 'categorySummary'];
		if (required.some((field) => attempt[field] === undefined)) {
			return new Response(JSON.stringify({ error: 'Datos incompletos' }), { status: 400 });
		}
		const db = await getDatabase();
		db.prepare(`INSERT INTO attempts
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
