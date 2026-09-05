/**
 * Lógica cliente del quiz GH-300: renderizado de preguntas, manejo de estado
 * de la sesión y persistencia de intentos. Reutiliza las funciones puras de
 * src/utils/evaluation.ts para evitar duplicar reglas de negocio en el DOM.
 */
import {
	computeBackButtonState,
	computeHistoryToggleState,
	computeQuizActions,
	evaluateAnswer,
	isQuestionReadOnly,
	recordQuestionAnswer,
	buildReviewBreakdown,
	type QuizActionState,
	type ReviewBreakdown,
} from "../utils/evaluation";
import type { Attempt, AttemptPayload, CategorySummary, Question } from "../types/question";

interface QuizState {
	questions: Question[];
	current: number;
	selected: string[];
	reviewed: boolean;
	answers: Array<{ correct: boolean; category: string } | undefined>;
	selections: string[][];
}

function $<T extends HTMLElement = HTMLElement>(id: string): T {
	const element = document.getElementById(id);
	if (!element) {
		throw new Error(`No se encontró el elemento con id "${id}"`);
	}
	return element as T;
}

function createInitialState(): QuizState {
	return {
		questions: [],
		current: 0,
		selected: [],
		reviewed: false,
		answers: [],
		selections: [],
	};
}

export function initQuiz(allQuestions: Question[]): void {
	const state = createInitialState();

	const setupPanel = $("setup-panel");
	const quizPanel = $("quiz-panel");
	const resultsPanel = $("results-panel");
	const historyPanel = $("history-panel");
	const reviewBox = $("review-box");
	const abandonDialog = $<HTMLDialogElement>("abandon-dialog");

	async function loadHistory(): Promise<void> {
		const response = await fetch("/api/attempts");
		const attempts: Attempt[] = await response.json();
		$("history-list").innerHTML = attempts.length
			? `<div class="history-table-wrap"><table class="history-table"><thead><tr><th>Fecha</th><th>Balotario</th><th>Resultado</th><th>Preguntas</th><th>Acertadas</th><th>Incorrectas</th></tr></thead><tbody>${attempts
					.map((attempt) => {
						const date = new Date(attempt.created_at).toLocaleString("es-ES", {
							dateStyle: "medium",
							timeStyle: "short",
						});
						return `<tr><td data-label="Fecha">${date}</td><td data-label="Balotario">${attempt.balotario}</td><td data-label="Resultado" class="history-score">${attempt.score_percent}%</td><td data-label="Preguntas">${attempt.total_questions}</td><td data-label="Acertadas" class="correct">${attempt.correct_answers}</td><td data-label="Incorrectas" class="incorrect">${attempt.incorrect_answers}</td></tr>`;
					})
					.join("")}</tbody></table></div>`
			: '<p class="empty-history">Todavía no has completado ningún examen.</p>';
	}

	function toggleHistory(): void {
		const willBeHidden = !historyPanel.classList.contains("hidden");
		historyPanel.classList.toggle("hidden", willBeHidden);
		const toggleState = computeHistoryToggleState(!willBeHidden);
		const historyArrow = $("history-arrow");
		historyArrow.textContent = toggleState.arrow;
		$("history-button").setAttribute("aria-expanded", String(toggleState.ariaExpanded));
		if (toggleState.isOpen) {
			loadHistory().catch(() => {
				$("history-list").innerHTML =
					'<p class="empty-history">No se pudo cargar el historial.</p>';
			});
		}
	}

	function shuffle<T>(items: T[]): T[] {
		return [...items].sort(() => Math.random() - 0.5);
	}

	function startQuiz(): void {
		if (!historyPanel.classList.contains("hidden")) {
			historyPanel.classList.add("hidden");
			$("history-arrow").textContent = "↓";
			$("history-button").setAttribute("aria-expanded", "false");
		}
		const selectedBalotario = $<HTMLSelectElement>("balotario-select").value;
		const requestedLimit = Number($<HTMLInputElement>("question-limit").value);
		const pool =
			selectedBalotario === "all"
				? allQuestions
				: allQuestions.filter((item) => item.balotario === selectedBalotario);
		const limit = Math.min(Math.max(requestedLimit || 30, 1), pool.length);

		state.questions = shuffle(pool).slice(0, limit);
		state.current = 0;
		state.selected = [];
		state.reviewed = false;
		state.answers = [];
		state.selections = [];

		setupPanel.classList.add("hidden");
		resultsPanel.classList.add("hidden");
		quizPanel.classList.remove("hidden");
		renderQuestion();
	}

	function updateBackButton(): void {
		const backButtonState = computeBackButtonState(
			state.current,
			state.selected.length,
			state.reviewed,
		);
		const backButton = $<HTMLButtonElement>("back-button");
		backButton.disabled = backButtonState.disabled;
		backButton.innerHTML = `<span class="button-icon-left">←</span> ${backButtonState.label}`;
	}

	function renderOptions(item: Question, readOnly: boolean): void {
		$("options").innerHTML = item.options
			.map((option) => {
				const isSelected = state.selected.includes(option.id);
				return `<label class="option${isSelected ? " selected" : ""}" data-option="${option.id}"><input type="checkbox" value="${option.id}" aria-label="Seleccionar opción ${option.id}"${isSelected ? " checked" : ""}${readOnly ? " disabled" : ""} /><span class="option-key">${option.id})</span><span class="option-text">${option.text}</span></label>`;
			})
			.join("");
		if (!readOnly) {
			document.querySelectorAll<HTMLInputElement>(".option input").forEach((checkbox) => {
				checkbox.addEventListener("change", () => selectOption(checkbox.value, checkbox.checked));
			});
		}
	}

	function renderQuestion(): void {
		const item = state.questions[state.current];
		state.selected = state.selections[state.current] || [];
		const readOnly = isQuestionReadOnly(state.answers, state.current);

		$("progress-label").textContent = `Pregunta ${state.current + 1} de ${state.questions.length}`;
		$("progress-bar").style.width = `${((state.current + 1) / state.questions.length) * 100}%`;
		$("category-label").textContent = item.category.name;
		$("balotario-label").textContent = item.balotario;
		$("question-number").textContent = String(item.number).padStart(2, "0");
		$("question-text").textContent = item.question;

		state.reviewed = readOnly;
		renderOptions(item, readOnly);

		const actions = computeQuizActions(state.reviewed, state.selected.length);
		if (readOnly) {
			renderReviewBreakdown(buildReviewBreakdown(state.selected, item));
		} else {
			reviewBox.className = "review-box hidden";
		}
		applyQuizActions(actions);
		updateBackButton();
	}

	function applyQuizActions(actions: QuizActionState): void {
		const reviewButton = $<HTMLButtonElement>("review-button");
		const continueButton = $<HTMLButtonElement>("continue-button");
		reviewButton.classList.toggle("hidden", !actions.reviewVisible);
		reviewButton.disabled = actions.reviewDisabled;
		continueButton.classList.toggle("hidden", !actions.continueVisible);
		continueButton.disabled = actions.continueDisabled;
	}

	function selectOption(option: string, checked: boolean): void {
		if (state.reviewed) return;
		state.selected = checked
			? Array.from(new Set([...state.selected, option]))
			: state.selected.filter((selected) => selected !== option);
		state.selections[state.current] = state.selected;
		document
			.querySelector(`.option[data-option="${option}"]`)
			?.classList.toggle("selected", checked);
		$<HTMLButtonElement>("review-button").disabled = state.selected.length === 0;
		updateBackButton();
	}

	function renderReviewBreakdown(breakdown: ReviewBreakdown): void {
		document.querySelectorAll<HTMLLabelElement>(".option").forEach((option) => {
			const optionId = option.dataset.option ?? "";
			const isCorrect = breakdown.correctAnswers.includes(optionId);
			const isWrongSelection = breakdown.incorrectSelected.some((opt) => opt.id === optionId);
			option.classList.toggle("correct", isCorrect);
			option.classList.toggle("incorrect", isWrongSelection);
			const input = option.querySelector("input");
			if (input) input.disabled = true;
		});

		if (breakdown.isCorrect) {
			reviewBox.className = "review-box review-correct";
			reviewBox.innerHTML = `
				<div class="review-status-correct"><strong>✓ Respuesta correcta</strong></div>
				<p>${breakdown.explanation}</p>
				<a href="${breakdown.source?.url}" target="_blank" rel="noreferrer">Consultar fuente oficial: ${breakdown.source?.title} ↗</a>
			`;
			return;
		}

		let html = `
			<div class="review-status-incorrect"><strong>✕ Respuesta incorrecta</strong></div>
		`;

		if (breakdown.incorrectSelected.length > 0) {
			html += `
				<div class="incorrect-reasons">
					<span class="section-tag">¿Por qué no es correcta tu elección? (Fuentes oficiales Microsoft / GitHub Docs):</span>
					${breakdown.incorrectSelected
						.map(
							(opt) => `
						<div class="incorrect-card">
							<div class="incorrect-card-title">Opción seleccionada ${opt.id}: "${opt.text}"</div>
							<div class="incorrect-card-reason">${opt.rationale}</div>
						</div>
					`,
						)
						.join("")}
				</div>
			`;
		}

		if (breakdown.missingCorrect.length > 0) {
			html += `
				<div class="missing-warning">
					<strong>Faltó seleccionar:</strong> ${breakdown.missingCorrect.map((m) => `Opción ${m.id} ("${m.text}")`).join(", ")}
				</div>
			`;
		}

		html += `
			<div class="correct-resolution">
				<span class="section-tag text-[#3fb950]">Fundamentación oficial (Respuesta correcta: ${breakdown.correctAnswers.join(", ")}):</span>
				<p>${breakdown.explanation}</p>
				<a href="${breakdown.source?.url}" target="_blank" rel="noreferrer">Consultar fuente oficial: ${breakdown.source?.title} ↗</a>
			</div>
		`;

		reviewBox.className = "review-box review-incorrect";
		reviewBox.innerHTML = html;
	}

	function reviewAnswer(): void {
		if (state.selected.length === 0 || state.reviewed) return;
		const item = state.questions[state.current];
		state.reviewed = true;

		const breakdown = buildReviewBreakdown(state.selected, item);
		renderReviewBreakdown(breakdown);

		const evaluation = evaluateAnswer(state.selected, item.correctAnswer);
		state.answers = recordQuestionAnswer(state.answers, state.current, evaluation, item.category.id);

		applyQuizActions(computeQuizActions(state.reviewed, state.selected.length));
		updateBackButton();
	}

	function scrollToQuestionTop(): void {
		try {
			quizPanel.scrollIntoView({ behavior: "smooth", block: "start" });
		} catch {
			window.scrollTo({ top: quizPanel.offsetTop - 16, behavior: "smooth" });
		}
	}

	function continueQuiz(): void {
		if (!state.reviewed) return;
		if (state.current < state.questions.length - 1) {
			state.current += 1;
			renderQuestion();
			scrollToQuestionTop();
		} else {
			showResults();
		}
	}

	function exitQuiz(): void {
		state.questions = [];
		state.current = 0;
		state.selected = [];
		state.reviewed = false;
		state.answers = [];
		state.selections = [];
		quizPanel.classList.add("hidden");
		resultsPanel.classList.add("hidden");
		setupPanel.classList.remove("hidden");
	}

	function goBack(): void {
		if (state.selected.length > 0 || state.reviewed) return;
		if (state.current === 0) {
			exitQuiz();
			return;
		}
		state.current -= 1;
		renderQuestion();
		scrollToQuestionTop();
	}

	async function saveAttempt(correct: number, total: number, categories: string[]): Promise<void> {
		const categorySummary: CategorySummary[] = categories.map((id) => {
			const categoryQuestions = state.questions.filter((item) => item.category.id === id);
			const categoryCorrect = categoryQuestions.filter(
				(item) => state.answers[state.questions.indexOf(item)]?.correct,
			).length;
			return {
				name: categoryQuestions[0].category.name,
				correct: categoryCorrect,
				total: categoryQuestions.length,
			};
		});
		const balotarioSelect = $<HTMLSelectElement>("balotario-select");
		const payload: AttemptPayload = {
			balotario: balotarioSelect.value === "all" ? "Todos los balotarios" : balotarioSelect.value,
			totalQuestions: total,
			correctAnswers: correct,
			incorrectAnswers: total - correct,
			scorePercent: Math.round((correct / total) * 100),
			categorySummary,
		};
		await fetch("/api/attempts", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
		});
	}

	function showResults(): void {
		const correct = state.answers.filter((answer) => answer?.correct).length;
		const total = state.questions.length;
		const categories = [...new Set(state.questions.map((item) => item.category.id))];

		$("score-percent").textContent = `${Math.round((correct / total) * 100)}%`;
		$("score-summary").textContent = `${correct} de ${total} respuestas acertadas`;
		$("correct-count").textContent = String(correct);
		$("incorrect-count").textContent = String(total - correct);
		$("category-results-list").innerHTML = categories
			.map((id) => {
				const categoryQuestions = state.questions.filter((item) => item.category.id === id);
				const categoryCorrect = categoryQuestions.filter(
					(item) => state.answers[state.questions.indexOf(item)]?.correct,
				).length;
				const category = categoryQuestions[0].category;
				const percent = Math.round((categoryCorrect / categoryQuestions.length) * 100);
				return `<div class="category-result"><div><strong>${category.name}</strong><span>${categoryCorrect}/${categoryQuestions.length} acertadas</span></div><div class="category-track"><span style="width:${(categoryCorrect / categoryQuestions.length) * 100}%"></span></div><b>${percent}%</b></div>`;
			})
			.join("");

		saveAttempt(correct, total, categories).catch(() => {});
		quizPanel.classList.add("hidden");
		resultsPanel.classList.remove("hidden");
	}

	function restart(): void {
		resultsPanel.classList.add("hidden");
		setupPanel.classList.remove("hidden");
	}

	$("history-button").addEventListener("click", toggleHistory);
	$("history-refresh").addEventListener("click", () => loadHistory());
	$("start-button").addEventListener("click", startQuiz);
	$("back-button").addEventListener("click", goBack);
	$("abandon-button").addEventListener("click", () => abandonDialog.showModal());
	$("modal-cancel-btn").addEventListener("click", () => abandonDialog.close());
	$("modal-confirm-btn").addEventListener("click", () => {
		abandonDialog.close();
		exitQuiz();
	});
	abandonDialog.addEventListener("click", (event) => {
		const rect = abandonDialog.getBoundingClientRect();
		const isInDialog =
			rect.top <= event.clientY &&
			event.clientY <= rect.top + rect.height &&
			rect.left <= event.clientX &&
			event.clientX <= rect.left + rect.width;
		if (!isInDialog) abandonDialog.close();
	});
	$("review-button").addEventListener("click", reviewAnswer);
	$("continue-button").addEventListener("click", continueQuiz);
	$("restart-button").addEventListener("click", restart);
}
