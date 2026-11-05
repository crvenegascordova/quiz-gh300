/**
 * Lógica cliente del simulador de certificaciones técnicas: renderizado de preguntas,
 * manejo de estado de sesión, navegación entre certificaciones y persistencia de intentos.
 * Reutiliza las funciones puras de src/utils/evaluation.ts para no duplicar reglas de negocio.
 */
import {
	computeBackButtonState,
	computeHistoryToggleState,
	computeQuizActions,
	computeCoverageMetrics,
	extractFailedQuestions,
	extractAllHistoricalFailedQuestions,
	evaluateAnswer,
	isQuestionReadOnly,
	recordQuestionAnswer,
	buildReviewBreakdown,
	type QuizActionState,
	type ReviewBreakdown,
} from "../utils/evaluation";
import type { Attempt, AttemptPayload, CategorySummary, Question, FailedQuestionItem } from "../types/question";
import type { CertificationMeta } from "../types/certification";

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

export function initQuizPlatform(
	certifications: CertificationMeta[],
	questionsByCert: Record<string, Question[]>,
): void {
	let activeCert: CertificationMeta | null = null;
	let allQuestions: Question[] = [];

	const state = createInitialState();

	const certPanel = $("certification-panel");
	const setupPanel = $("setup-panel");
	const quizPanel = $("quiz-panel");
	const resultsPanel = $("results-panel");
	const historyPanel = $("history-panel");
	const reviewBox = $("review-box");

	const heroEyebrow = $("hero-eyebrow");
	const pageTitle = $("page-title");
	const heroDescription = $("hero-description");

	const changeCertBtn = $("change-cert-btn");
	const historyBtn = $("history-button");
	const studyGuideBtn = $("study-guide-btn");
	const translateBtn = $<HTMLButtonElement>("translate-button");

	let isTranslated = false;

	function updateTranslateButton(): void {
		if (isTranslated) {
			translateBtn.textContent = "Ver original (EN)";
			translateBtn.classList.add("active");
			translateBtn.title = "Volver al texto original en inglés";
		} else {
			translateBtn.textContent = "Traducir a español";
			translateBtn.classList.remove("active");
			translateBtn.title = "Traducir pregunta y opciones al español";
		}
	}

	function toggleTranslation(): void {
		isTranslated = !isTranslated;
		updateTranslateButton();
		renderQuestion();
	}

	const abandonDialog = $<HTMLDialogElement>("abandon-dialog");
	const studyGuideDialog = $<HTMLDialogElement>("study-guide-dialog");
	const claudeStudyGuideDialog = $<HTMLDialogElement>("claude-study-guide-dialog");

	async function loadHistory(): Promise<void> {
		const certParam = activeCert ? `?certification=${encodeURIComponent(activeCert.id)}` : "";
		const response = await fetch(`/api/attempts${certParam}`);
		const attempts: Attempt[] = await response.json();

		if (!attempts.length) {
			$("history-list").innerHTML = '<p class="empty-history">Todavía no has completado ningún examen en esta certificación.</p>';
		} else {
			$("history-list").innerHTML = `<div class="history-table-wrap"><table class="history-table"><thead><tr><th>Fecha</th><th>Test</th><th>Resultado</th><th>Preguntas</th><th>Acertadas</th><th>Incorrectas</th></tr></thead><tbody>${attempts
				.map((attempt) => {
					const date = new Date(attempt.created_at).toLocaleString("es-ES", {
						dateStyle: "medium",
						timeStyle: "short",
					});
					let failedItems: FailedQuestionItem[] = [];
					if (attempt.failed_questions) {
						try {
							failedItems = JSON.parse(attempt.failed_questions);
						} catch {
							/* ignore invalid json */
						}
					}
					const failedSummaryHtml =
						failedItems.length > 0
							? `
							<div class="history-failed-section">
								<details class="history-failed-details">
									<summary class="history-failed-summary">Ver ${failedItems.length} falladas ▾</summary>
									<div class="history-failed-content">
										<ol>
											${failedItems
												.map(
													(item) => `
												<li><strong>${(item.balotario || "").replace(/Balotario/i, "Test")} - Pregunta ${String(item.number).padStart(2, "0")}:</strong> ${item.question}</li>
											`,
												)
												.join("")}
										</ol>
										<div class="mt-2.5 pt-2 border-t border-[#f85149]/30">
											<p class="m-0 mb-1.5 font-semibold text-[#ffdcd7]">¿Deseas generar un nuevo cuestionario corto únicamente con las preguntas que fallaste para volver a practicarlas?</p>
											<button type="button" class="button button-warning button-retry-attempt-failed" data-attempt-id="${attempt.id}" style="padding: 6px 12px; font-size: 0.8rem;">
												Practicar preguntas falladas (${failedItems.length}) <span>→</span>
											</button>
										</div>
									</div>
								</details>
							</div>
						`
							: "";

					const testDisplay = (attempt.balotario || "").replace(/Balotario/i, "Test");
					return `<tr><td data-label="Fecha">${date}</td><td data-label="Test">${testDisplay}${failedSummaryHtml}</td><td data-label="Resultado" class="history-score">${attempt.score_percent}%</td><td data-label="Preguntas">${attempt.total_questions}</td><td data-label="Acertadas" class="correct">${attempt.correct_answers}</td><td data-label="Incorrectas" class="incorrect">${attempt.incorrect_answers}</td></tr>`;
				})
				.join("")}</tbody></table></div>`;

			document.querySelectorAll<HTMLButtonElement>(".button-retry-attempt-failed").forEach((btn) => {
				btn.addEventListener("click", () => {
					const attemptId = Number(btn.getAttribute("data-attempt-id"));
					const targetAttempt = attempts.find((a) => a.id === attemptId);
					if (!targetAttempt || !targetAttempt.failed_questions) return;
					try {
						const items: FailedQuestionItem[] = JSON.parse(targetAttempt.failed_questions);
						const failedIds = items.map((i) => i.id);
						const matchedQuestions = allQuestions.filter((q) => failedIds.includes(q.id));
						if (matchedQuestions.length > 0) {
							startCustomQuiz(shuffle(matchedQuestions));
						}
					} catch {
						/* ignore invalid json */
					}
				});
			});
		}

		// Actualizar control de inventario y métricas de cobertura en el historial
		const allAttemptQuestionIds = attempts.map((a) => {
			try {
				return a.question_ids ? JSON.parse(a.question_ids) : [];
			} catch {
				return [];
			}
		});
		const allQuestionIds = allQuestions.map((q) => q.id);
		const metrics = computeCoverageMetrics(allQuestionIds, allAttemptQuestionIds);

		$("history-coverage-total").textContent = String(metrics.totalAvailable);
		$("history-coverage-practiced").textContent = `${metrics.practicedCount} (${metrics.coveragePercent}% de cobertura)`;
		$("history-coverage-unseen").textContent = String(metrics.unseenCount);

		const historyUnseenPrompt = $("history-unseen-prompt");
		if (metrics.unseenCount > 0) {
			historyUnseenPrompt.classList.remove("hidden");
			$("history-unseen-count-btn").textContent = String(metrics.unseenCount);
			const inputEl = $<HTMLInputElement>("history-unseen-limit-input");
			inputEl.max = String(metrics.unseenCount);
			inputEl.value = String(Math.min(30, metrics.unseenCount));

			const startBtn = $("history-start-unseen-btn");
			startBtn.onclick = () => {
				const userLimit = Math.min(
					Math.max(Number(inputEl.value) || 1, 1),
					metrics.unseenCount,
				);
				const unseenList = allQuestions.filter((q) => metrics.unseenQuestionIds.includes(q.id));
				startCustomQuiz(shuffle(unseenList).slice(0, userLimit));
			};
		} else {
			historyUnseenPrompt.innerHTML = `
				<p class="text-sm font-bold text-[#3fb950] m-0">
					🎉 ¡Felicitaciones! Has completado el 100% de cobertura del inventario (las ${allQuestionIds.length} preguntas ya han salido en tus exámenes).
				</p>
			`;
		}

		// Actualizar banco global de preguntas falladas en todos los exámenes
		const allHistoricalFailed = extractAllHistoricalFailedQuestions(allQuestions, attempts);
		const historyAllFailedContainer = $("history-all-failed-container");
		if (allHistoricalFailed.length > 0) {
			historyAllFailedContainer.classList.remove("hidden");
			$("history-total-failed-count").textContent = String(allHistoricalFailed.length);
			$("history-all-failed-btn-count").textContent = String(allHistoricalFailed.length);

			const failedLimitInput = $<HTMLInputElement>("history-all-failed-limit-input");
			failedLimitInput.max = String(allHistoricalFailed.length);
			failedLimitInput.value = String(Math.min(allHistoricalFailed.length, 10));

			$("history-all-failed-list").innerHTML = allHistoricalFailed
				.map(
					(q) => `
				<div class="failed-question-item">
					<span class="failed-question-badge">${q.balotario.replace(/Balotario/i, "Test")} · Pregunta ${String(q.number).padStart(2, "0")}</span>
					<div><strong>${q.question}</strong></div>
				</div>
			`,
				)
				.join("");

			const startAllFailedBtn = $("history-start-all-failed-btn");
			startAllFailedBtn.onclick = () => {
				const userLimit = Math.min(
					Math.max(Number(failedLimitInput.value) || 1, 1),
					allHistoricalFailed.length,
				);
				startCustomQuiz(shuffle(allHistoricalFailed).slice(0, userLimit));
			};
		} else {
			historyAllFailedContainer.classList.add("hidden");
		}
	}

	function toggleHistory(): void {
		const willBeHidden = !historyPanel.classList.contains("hidden");
		historyPanel.classList.toggle("hidden", willBeHidden);
		const toggleState = computeHistoryToggleState(!willBeHidden);
		const historyArrow = $("history-arrow");
		historyArrow.textContent = toggleState.arrow;
		historyBtn.setAttribute("aria-expanded", String(toggleState.ariaExpanded));
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

	function startCustomQuiz(customQuestions: Question[]): void {
		if (customQuestions.length === 0) return;
		if (!historyPanel.classList.contains("hidden")) {
			historyPanel.classList.add("hidden");
			$("history-arrow").textContent = "↓";
			historyBtn.setAttribute("aria-expanded", "false");
		}
		state.questions = [...customQuestions];
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

	async function startQuiz(): Promise<void> {
		if (!historyPanel.classList.contains("hidden")) {
			historyPanel.classList.add("hidden");
			$("history-arrow").textContent = "↓";
			historyBtn.setAttribute("aria-expanded", "false");
		}
		const selectedBalotario = $<HTMLSelectElement>("balotario-select").value;
		const requestedLimit = Number($<HTMLInputElement>("question-limit").value);

		let pool: Question[];
		if (selectedBalotario === "all") {
			pool = allQuestions;
		} else if (selectedBalotario === "unseen") {
			try {
				const certParam = activeCert ? `?certification=${encodeURIComponent(activeCert.id)}` : "";
				const response = await fetch(`/api/attempts${certParam}`);
				const attempts: Attempt[] = await response.json();
				const questionIdLists = attempts.map((a) => {
					try {
						return a.question_ids ? JSON.parse(a.question_ids) : [];
					} catch {
						return [];
					}
				});
				const metrics = computeCoverageMetrics(
					allQuestions.map((q) => q.id),
					questionIdLists,
				);
				pool = allQuestions.filter((q) => metrics.unseenQuestionIds.includes(q.id));
				if (pool.length === 0) {
					alert("¡Ya has practicado todas las preguntas! Seleccionando del banco completo.");
					pool = allQuestions;
				}
			} catch {
				pool = allQuestions;
			}
		} else if (selectedBalotario === "failed") {
			try {
				const certParam = activeCert ? `?certification=${encodeURIComponent(activeCert.id)}` : "";
				const response = await fetch(`/api/attempts${certParam}`);
				const attempts: Attempt[] = await response.json();
				pool = extractAllHistoricalFailedQuestions(allQuestions, attempts);
				if (pool.length === 0) {
					alert("No tienes preguntas falladas registradas todavía en esta certificación. Seleccionando del banco completo.");
					pool = allQuestions;
				}
			} catch {
				pool = allQuestions;
			}
		} else {
			pool = allQuestions.filter((item) => item.balotario === selectedBalotario);
		}

		const limit = Math.min(Math.max(requestedLimit || 30, 1), pool.length);
		startCustomQuiz(shuffle(pool).slice(0, limit));
	}

	function renderQuestion(): void {
		const item = state.questions[state.current];
		const isReadOnly = isQuestionReadOnly(state.answers, state.current);

		$("progress-label").textContent = `Pregunta ${state.current + 1} de ${state.questions.length}`;
		$("progress-bar").style.width = `${((state.current + 1) / state.questions.length) * 100}%`;
		$("category-label").textContent = item.category.name;
		$("balotario-label").textContent = item.balotario.replace(/Balotario/i, "Test");
		$("question-number").textContent = String(item.number).padStart(2, "0");

		const hasTranslation = Boolean(item.translations?.es);
		const questionText = isTranslated && hasTranslation && item.translations?.es?.question
			? item.translations.es.question
			: item.question;
		$("question-text").textContent = questionText;

		const optionsContainer = $("options");
		optionsContainer.innerHTML = "";

		item.options.forEach((option) => {
			const label = document.createElement("label");
			label.className = "option";
			label.setAttribute("data-option-id", option.id);

			const isSelected = state.selected.includes(option.id);
			if (isSelected) {
				label.classList.add("selected");
			}

			const input = document.createElement("input");
			input.type = "checkbox";
			input.name = "quiz-option";
			input.value = option.id;
			input.checked = isSelected;
			input.disabled = state.reviewed || isReadOnly;

			input.addEventListener("change", () => {
				if (state.reviewed || isReadOnly) return;
				if (input.checked) {
					state.selected.push(option.id);
				} else {
					state.selected = state.selected.filter((id) => id !== option.id);
				}
				syncOptionsSelection();
				updateActions();
			});

			const badge = document.createElement("span");
			badge.className = "option-badge";
			badge.textContent = option.id;

			const text = document.createElement("span");
			text.className = "option-text";

			const transOpt = isTranslated && hasTranslation
				? item.translations?.es?.options?.find((o) => o.id === option.id)
				: null;
			text.textContent = transOpt ? transOpt.text : option.text;

			label.appendChild(input);
			label.appendChild(badge);
			label.appendChild(text);
			optionsContainer.appendChild(label);
		});

		reviewBox.classList.add("hidden");
		syncOptionsSelection();
		updateActions();

		if (isReadOnly) {
			const prevAnswer = state.answers[state.current];
			if (prevAnswer) {
				applyReviewFormatting(prevAnswer.correct);
			}
		} else if (state.reviewed) {
			const currentAnswer = state.answers[state.current];
			if (currentAnswer) {
				applyReviewFormatting(currentAnswer.correct);
			}
		}
	}

	function syncOptionsSelection(): void {
		const options = document.querySelectorAll<HTMLLabelElement>(".option");
		options.forEach((opt) => {
			const optId = opt.getAttribute("data-option-id");
			if (optId && state.selected.includes(optId)) {
				opt.classList.add("selected");
			} else {
				opt.classList.remove("selected");
			}
		});
	}

	function updateActions(): void {
		const isReadOnly = isQuestionReadOnly(state.answers, state.current);
		const isEffectiveReviewed = state.reviewed || isReadOnly;
		const actionState: QuizActionState = computeQuizActions(
			isEffectiveReviewed,
			state.selected.length,
		);

		const reviewBtn = $<HTMLButtonElement>("review-button");
		const continueBtn = $<HTMLButtonElement>("continue-button");

		reviewBtn.disabled = actionState.reviewDisabled;
		reviewBtn.classList.toggle("hidden", !actionState.reviewVisible);

		continueBtn.disabled = actionState.continueDisabled;
		continueBtn.classList.toggle("hidden", !actionState.continueVisible);

		const backState = computeBackButtonState(
			state.current,
			state.selected.length,
			isEffectiveReviewed,
		);

		const backBtn = $<HTMLButtonElement>("back-button");
		backBtn.disabled = backState.disabled;
		backBtn.textContent = backState.label;

		if (backState.disabled) {
			backBtn.classList.add("opacity-50", "cursor-not-allowed");
		} else {
			backBtn.classList.remove("opacity-50", "cursor-not-allowed");
		}
	}

	function applyReviewFormatting(isCorrect: boolean): void {
		const item = state.questions[state.current];
		const options = document.querySelectorAll<HTMLLabelElement>(".option");

		const breakdown: ReviewBreakdown = buildReviewBreakdown(
			state.selected,
			item,
		);

		options.forEach((opt) => {
			const optId = opt.getAttribute("data-option-id");
			if (!optId) return;

			if (breakdown.correctAnswers.includes(optId)) {
				opt.classList.add("correct-option", "correct");
			}
			if (breakdown.incorrectSelected.some((inc) => inc.id === optId)) {
				opt.classList.add("incorrect-option", "incorrect");
			}
		});

		let structuredHtml = "";

		if (!isCorrect && breakdown.incorrectSelected.length > 0) {
			structuredHtml += `
				<div class="feedback-level level-discard mb-3 p-3 rounded-lg border border-[#f85149]/40 bg-[#1c0f13] text-[#ffdcd7]">
					<h4 class="text-xs font-bold uppercase tracking-wider text-[#ff7b72] mb-1.5 flex items-center gap-1.5">
						<span>⚠️ Motivo del error (por qué tu selección no es válida)</span>
					</h4>
					<div class="space-y-1.5 text-xs leading-relaxed">
						${breakdown.incorrectSelected
							.map(
								(inc) => `
							<div>
								<strong>Opción ${inc.id}:</strong> ${inc.rationale}
							</div>
						`,
							)
							.join("")}
					</div>
				</div>
			`;
		}

		const explanationText =
			isTranslated && item.translations?.es?.explanation
				? item.translations.es.explanation
				: breakdown.explanation;

		structuredHtml += `
			<div class="feedback-level level-justification mb-3 p-3 rounded-lg border border-[#238636]/40 bg-[#0c1f17] text-[#aff5b4]">
				<h4 class="text-xs font-bold uppercase tracking-wider text-[#3fb950] mb-1.5 flex items-center gap-1.5">
					<span>💡 Fundamento de la respuesta correcta</span>
				</h4>
				<p class="text-xs m-0 leading-relaxed">${explanationText}</p>
			</div>
		`;

		if (breakdown.source) {
			structuredHtml += `
				<div class="feedback-level level-source p-2.5 rounded-lg border border-[#388bfd]/30 bg-[#0d1d3a] text-xs text-[#a5d6ff] flex items-center justify-between flex-wrap gap-2">
					<div class="flex items-center gap-1.5">
						<span>📖 <strong>Fuente oficial:</strong> ${breakdown.source.title}</span>
					</div>
					<a
						href="${breakdown.source.url}"
						target="_blank"
						rel="noreferrer"
						class="text-gh-blue font-bold hover:underline flex items-center gap-1 ml-auto"
					>
						Consultar documentación ↗
					</a>
				</div>
			`;
		}

		reviewBox.className = `review-box ${isCorrect ? "review-correct" : "review-incorrect"}`;
		reviewBox.innerHTML = `
			<div class="mb-3 font-bold text-sm ${isCorrect ? "text-[#3fb950]" : "text-[#f85149]"}">
				${isCorrect ? "✓ Respuesta correcta" : "✕ Respuesta incorrecta"}
			</div>
			${structuredHtml}
		`;
		reviewBox.classList.remove("hidden");
	}

	function reviewAnswer(): void {
		if (state.selected.length === 0 || state.reviewed) return;

		const item = state.questions[state.current];
		const evalResult = evaluateAnswer(state.selected, item.correctAnswer);
		state.reviewed = true;

		state.answers = recordQuestionAnswer(
			state.answers,
			state.current,
			evalResult,
			item.category.id,
		);

		state.selections[state.current] = [...state.selected];
		applyReviewFormatting(evalResult.isCorrect);
		updateActions();
	}

	function scrollToQuestionTop(): void {
		try {
			quizPanel.scrollIntoView({ behavior: "smooth", block: "start" });
		} catch {
			window.scrollTo({ top: quizPanel.offsetTop - 16, behavior: "smooth" });
		}
	}

	function continueQuiz(): void {
		if (state.current < state.questions.length - 1) {
			state.current += 1;
			state.selected = state.selections[state.current] ? [...state.selections[state.current]] : [];
			state.reviewed = state.answers[state.current] !== undefined;
			renderQuestion();
			scrollToQuestionTop();
		} else {
			showResults();
		}
	}

	function goBack(): void {
		const isFirst = state.current === 0;
		if (isFirst) {
			if (state.selected.length === 0 && !state.reviewed) {
				exitQuiz();
			}
			return;
		}

		if (state.current > 0 && !state.reviewed && state.selected.length === 0) {
			state.current -= 1;
			state.selected = state.selections[state.current] ? [...state.selections[state.current]] : [];
			state.reviewed = state.answers[state.current] !== undefined;
			renderQuestion();
			scrollToQuestionTop();
		}
	}

	function exitQuiz(): void {
		quizPanel.classList.add("hidden");
		setupPanel.classList.remove("hidden");
	}

	async function saveAttempt(correct: number, total: number, categoryIds: string[]): Promise<void> {
		const categorySummary: CategorySummary[] = categoryIds.map((id) => {
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

		const failedItems: FailedQuestionItem[] = extractFailedQuestions(state.questions, state.answers).map((q) => ({
			id: q.id,
			certification: activeCert?.id,
			balotario: q.balotario,
			number: q.number,
			question: q.question,
		}));
		const questionIds = state.questions.map((q) => q.id);

		const balotarioSelect = $<HTMLSelectElement>("balotario-select");
		const payload: AttemptPayload = {
			certification: activeCert?.id || "gh-300",
			balotario: balotarioSelect.value === "all" ? "Todos los tests" : (balotarioSelect.options[balotarioSelect.selectedIndex]?.text || balotarioSelect.value),
			totalQuestions: total,
			correctAnswers: correct,
			incorrectAnswers: total - correct,
			scorePercent: Math.round((correct / total) * 100),
			categorySummary,
			failedQuestions: failedItems,
			questionIds,
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

		// Sistema de registro y repaso de errores
		const failedQuestions = extractFailedQuestions(state.questions, state.answers);
		const failedContainer = $("failed-summary-container");
		if (failedQuestions.length > 0) {
			failedContainer.classList.remove("hidden");
			$("failed-count-btn").textContent = String(failedQuestions.length);
			$("failed-questions-list").innerHTML = failedQuestions
				.map(
					(q) => `
				<div class="failed-question-item">
					<span class="failed-question-badge">${q.balotario.replace(/Balotario/i, "Test")} · Pregunta ${String(q.number).padStart(2, "0")}</span>
					<div><strong>${q.question}</strong></div>
				</div>
			`,
				)
				.join("");

			const retryFailedBtn = $("retry-failed-btn");
			retryFailedBtn.onclick = () => {
				startCustomQuiz(shuffle(failedQuestions));
			};

			const retryAllHistoricalBtn = $("retry-all-historical-failed-btn");
			const certParam = activeCert ? `?certification=${encodeURIComponent(activeCert.id)}` : "";
			fetch(`/api/attempts${certParam}`)
				.then((res) => res.json())
				.then((attempts: Attempt[]) => {
					const allHist = extractAllHistoricalFailedQuestions(allQuestions, attempts);
					for (const q of failedQuestions) {
						if (!allHist.some((item) => item.id === q.id)) {
							allHist.push(q);
						}
					}
					if (allHist.length > 0) {
						retryAllHistoricalBtn.classList.remove("hidden");
						$("historical-failed-btn-count").textContent = String(allHist.length);
						retryAllHistoricalBtn.onclick = () => {
							startCustomQuiz(shuffle(allHist));
						};
					} else {
						retryAllHistoricalBtn.classList.add("hidden");
					}
				})
				.catch(() => {});
		} else {
			failedContainer.classList.add("hidden");
		}

		// Control de inventario y métricas de cobertura
		async function updateCoverage(): Promise<void> {
			let previousQuestionIdLists: string[][] = [];
			try {
				const certParam = activeCert ? `?certification=${encodeURIComponent(activeCert.id)}` : "";
				const res = await fetch(`/api/attempts${certParam}`);
				const attempts: Attempt[] = await res.json();
				previousQuestionIdLists = attempts.map((a) => {
					if (a.question_ids) {
						try {
							return JSON.parse(a.question_ids);
						} catch {
							return [];
						}
					}
					return [];
				});
			} catch {
				/* ignore fetch error */
			}

			const currentSessionIds = state.questions.map((q) => q.id);
			previousQuestionIdLists.push(currentSessionIds);

			const allQuestionIds = allQuestions.map((q) => q.id);
			const metrics = computeCoverageMetrics(allQuestionIds, previousQuestionIdLists);

			$("coverage-total").textContent = String(metrics.totalAvailable);
			$("coverage-practiced").textContent = `${metrics.practicedCount} (${metrics.coveragePercent}% de cobertura)`;
			$("coverage-unseen").textContent = String(metrics.unseenCount);

			const unseenPrompt = $("unseen-quiz-prompt");
			if (metrics.unseenCount > 0) {
				unseenPrompt.classList.remove("hidden");
				$("unseen-count-btn").textContent = String(metrics.unseenCount);
				const resultsInput = $<HTMLInputElement>("results-unseen-limit-input");
				resultsInput.max = String(metrics.unseenCount);
				resultsInput.value = String(Math.min(30, metrics.unseenCount));

				const startUnseenBtn = $("start-unseen-btn");
				startUnseenBtn.onclick = () => {
					const userLimit = Math.min(
						Math.max(Number(resultsInput.value) || 1, 1),
						metrics.unseenCount,
					);
					const unseenList = allQuestions.filter((q) => metrics.unseenQuestionIds.includes(q.id));
					startCustomQuiz(shuffle(unseenList).slice(0, userLimit));
				};
			} else {
				unseenPrompt.innerHTML = `
					<p class="text-sm font-bold text-[#3fb950] m-0">
						🎉 ¡Felicitaciones! Has completado el 100% de cobertura del inventario (las ${allQuestionIds.length} preguntas ya han salido en tus exámenes).
					</p>
				`;
			}
		}

		saveAttempt(correct, total, categories).catch(() => {});
		updateCoverage().catch(() => {});

		quizPanel.classList.add("hidden");
		resultsPanel.classList.remove("hidden");
	}

	function restart(): void {
		resultsPanel.classList.add("hidden");
		setupPanel.classList.remove("hidden");
	}

	async function updateSetupLimit(): Promise<void> {
		const selectedBalotario = $<HTMLSelectElement>("balotario-select").value;
		const limitInput = $<HTMLInputElement>("question-limit");
		const helpText = $("question-limit-help");

		if (selectedBalotario === "all") {
			limitInput.max = String(allQuestions.length);
			helpText.textContent = `Entre 1 y ${allQuestions.length} preguntas`;
		} else if (selectedBalotario === "unseen") {
			try {
				const certParam = activeCert ? `?certification=${encodeURIComponent(activeCert.id)}` : "";
				const res = await fetch(`/api/attempts${certParam}`);
				const attempts: Attempt[] = await res.json();
				const qIds = attempts.map((a) => {
					try {
						return a.question_ids ? JSON.parse(a.question_ids) : [];
					} catch {
						return [];
					}
				});
				const metrics = computeCoverageMetrics(
					allQuestions.map((q) => q.id),
					qIds,
				);
				const max = Math.max(metrics.unseenCount, 1);
				limitInput.max = String(max);
				if (Number(limitInput.value) > max) limitInput.value = String(max);
				helpText.textContent = `Entre 1 y ${metrics.unseenCount} preguntas aún no vistas`;
			} catch {
				limitInput.max = String(allQuestions.length);
				helpText.textContent = `Entre 1 y ${allQuestions.length} preguntas`;
			}
		} else if (selectedBalotario === "failed") {
			try {
				const certParam = activeCert ? `?certification=${encodeURIComponent(activeCert.id)}` : "";
				const res = await fetch(`/api/attempts${certParam}`);
				const attempts: Attempt[] = await res.json();
				const failedList = extractAllHistoricalFailedQuestions(allQuestions, attempts);
				const max = Math.max(failedList.length, 1);
				limitInput.max = String(max);
				if (Number(limitInput.value) > max) limitInput.value = String(max);
				helpText.textContent = `Entre 1 y ${failedList.length} preguntas falladas acumuladas`;
			} catch {
				limitInput.max = String(allQuestions.length);
			}
		} else {
			const pool = allQuestions.filter((q) => q.balotario === selectedBalotario);
			limitInput.max = String(pool.length);
			if (Number(limitInput.value) > pool.length) limitInput.value = String(pool.length);
			helpText.textContent = `Entre 1 y ${pool.length} preguntas`;
		}
	}

	function selectCertification(certId: string): void {
		const cert = certifications.find((c) => c.id === certId) || certifications[0];
		activeCert = cert;
		allQuestions = questionsByCert[cert.id] || [];

		// Actualizar Hero
		heroEyebrow.textContent = cert.badge;
		pageTitle.textContent = cert.title;
		heroDescription.textContent = cert.description;

		// Mostrar acciones
		changeCertBtn.classList.remove("hidden");
		historyBtn.classList.remove("hidden");
		studyGuideBtn.classList.remove("hidden");

		const fullGuideSpan = $("study-guide-btn-full");
		const shortGuideSpan = $("study-guide-btn-short");
		if (fullGuideSpan && shortGuideSpan) {
			fullGuideSpan.textContent = cert.studyGuideTitle;
			shortGuideSpan.textContent = cert.id === "claude-certified-developer" ? "Guía Claude" : "Guía GH-300";
		} else {
			studyGuideBtn.textContent = cert.studyGuideTitle;
		}

		if (cert.language === "en" || cert.id === "claude-certified-developer") {
			translateBtn.classList.remove("hidden");
		} else {
			translateBtn.classList.add("hidden");
		}
		isTranslated = false;
		updateTranslateButton();

		// Actualizar panel de configuración
		$("setup-question-count").textContent = `${allQuestions.length} preguntas disponibles`;

		const balotarios = [...new Set(allQuestions.map((q) => q.balotario))].sort();
		const balotarioSelect = $<HTMLSelectElement>("balotario-select");
		balotarioSelect.innerHTML = `
			<option value="all">Todos los tests</option>
			<option value="unseen">Solo preguntas aún no vistas</option>
			<option value="failed">Repasar preguntas falladas históricas</option>
			${balotarios.map((b) => `<option value="${b}">${b.replace(/Balotario/i, "Test")}</option>`).join("")}
		`;

		const limitInput = $<HTMLInputElement>("question-limit");
		limitInput.max = String(allQuestions.length);
		limitInput.value = String(Math.min(30, allQuestions.length));
		$("question-limit-help").textContent = `Entre 1 y ${allQuestions.length} preguntas`;

		// Ocultar selector y mostrar configuración
		certPanel.classList.add("hidden");
		setupPanel.classList.remove("hidden");
		quizPanel.classList.add("hidden");
		resultsPanel.classList.add("hidden");
		historyPanel.classList.add("hidden");

		loadHistory().catch(() => {});
		updateSetupLimit().catch(() => {});
	}

	function returnToCertSelection(): void {
		if (!quizPanel.classList.contains("hidden")) {
			const confirmLeave = confirm("¿Deseas salir del examen actual para cambiar de certificación?");
			if (!confirmLeave) return;
		}

		activeCert = null;
		allQuestions = [];

		heroEyebrow.textContent = "PLATAFORMA DE CERTIFICACIONES";
		pageTitle.textContent = "Simulador de Certificaciones Técnicas";
		heroDescription.textContent = "Evalúa tu nivel profesional mediante exámenes de práctica, retroalimentación y criterios de evaluación oficiales.";

		changeCertBtn.classList.add("hidden");
		historyBtn.classList.add("hidden");
		studyGuideBtn.classList.add("hidden");
		translateBtn.classList.add("hidden");
		isTranslated = false;
		updateTranslateButton();

		certPanel.classList.remove("hidden");
		setupPanel.classList.add("hidden");
		quizPanel.classList.add("hidden");
		resultsPanel.classList.add("hidden");
		historyPanel.classList.add("hidden");
	}

	// Registrar eventos de selección de certificación
	document.querySelectorAll<HTMLButtonElement>("[data-select-cert]").forEach((btn) => {
		btn.addEventListener("click", () => {
			const certId = btn.getAttribute("data-select-cert");
			if (certId) {
				selectCertification(certId);
			}
		});
	});

	changeCertBtn.addEventListener("click", returnToCertSelection);
	translateBtn.addEventListener("click", toggleTranslation);

	$<HTMLSelectElement>("balotario-select").addEventListener("change", updateSetupLimit);
	historyBtn.addEventListener("click", toggleHistory);
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

	studyGuideBtn.addEventListener("click", () => {
		if (activeCert?.id === "claude-certified-developer") {
			claudeStudyGuideDialog.showModal();
		} else {
			studyGuideDialog.showModal();
		}
	});

	$("study-guide-close-btn")?.addEventListener("click", () => studyGuideDialog.close());
	$("study-guide-dismiss-btn")?.addEventListener("click", () => studyGuideDialog.close());
	studyGuideDialog.addEventListener("click", (event) => {
		const rect = studyGuideDialog.getBoundingClientRect();
		const isInDialog =
			rect.top <= event.clientY &&
			event.clientY <= rect.top + rect.height &&
			rect.left <= event.clientX &&
			event.clientX <= rect.left + rect.width;
		if (!isInDialog) studyGuideDialog.close();
	});

	$("claude-study-guide-close-btn")?.addEventListener("click", () => claudeStudyGuideDialog.close());
	$("claude-study-guide-ok-btn")?.addEventListener("click", () => claudeStudyGuideDialog.close());
	claudeStudyGuideDialog.addEventListener("click", (event) => {
		const rect = claudeStudyGuideDialog.getBoundingClientRect();
		const isInDialog =
			rect.top <= event.clientY &&
			event.clientY <= rect.top + rect.height &&
			rect.left <= event.clientX &&
			event.clientX <= rect.left + rect.width;
		if (!isInDialog) claudeStudyGuideDialog.close();
	});
}

/**
 * Función heredada para compatibilidad directa
 */
export function initQuiz(allQuestions: Question[]): void {
	initQuizPlatform(
		[
			{
				id: "gh-300",
				code: "GH-300",
				title: "GitHub Copilot GH-300",
				subtitle: "Certificación oficial GitHub Copilot",
				description: "Mide tu dominio en GitHub Copilot",
				provider: "GitHub / Microsoft",
				badge: "CERTIFICACIÓN GH-300",
				accentColor: "#238636",
				badgeBg: "bg-[#238636]/15",
				badgeBorder: "border-[#238636]/40",
				badgeImageUrl: "https://learn.microsoft.com/en-us/media/learn/certification/badges/github-copilot.svg",
				studyGuideTitle: "Guía oficial de estudio GH-300",
				topics: [],
			},
		],
		{ "gh-300": allQuestions },
	);
}
