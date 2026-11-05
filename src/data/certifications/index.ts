import type { CertificationMeta } from "../../types/certification";
import type { Question } from "../../types/question";
import gh300Questions from "./gh-300.json";
import claudeQuestions from "./claude-certified-developer.json";

export const CERTIFICATIONS: CertificationMeta[] = [
	{
		id: "gh-300",
		code: "GH-300",
		title: "GitHub Copilot GH-300",
		subtitle: "Certificación oficial GitHub Copilot",
		description: "Simulador oficial de práctica para GitHub Copilot GH-300.",
		badgeImageUrl:
			"https://learn.microsoft.com/en-us/media/learn/certification/badges/github-copilot.svg",
		provider: "GitHub / Microsoft",
		badge: "CERTIFICACIÓN GH-300",
		accentColor: "#238636",
		badgeBg: "bg-[#238636]/15",
		badgeBorder: "border-[#238636]/40",
		studyGuideTitle: "Guía oficial de estudio GH-300",
		studyGuideModalId: "study-guide-dialog",
		language: "es",
		topics: [
			"Uso responsable de IA",
			"Funciones de Copilot & CLI",
			"Datos y arquitectura",
			"Ingeniería de prompts",
			"Productividad del desarrollador",
			"Privacidad y exclusiones",
		],
	},
	{
		id: "claude-certified-developer",
		code: "CLAUDE-DEV",
		title: "Claude Certified Developer",
		subtitle: "Certificación oficial Anthropic Claude",
		description: "Simulador oficial de práctica para Claude Certified Developer.",
		badgeImageUrl:
			"https://cc.sj-cdn.net/instructor/4hdejjwplbrm-anthropic/path/qwbt2iw0cyma/promo-image.1782949912.svg",
		provider: "Anthropic",
		badge: "CERTIFICACIÓN ANTHROPIC",
		accentColor: "#d97706",
		badgeBg: "bg-[#d97706]/15",
		badgeBorder: "border-[#d97706]/40",
		studyGuideTitle: "Guía de estudio Claude Developer",
		studyGuideModalId: "claude-study-guide-dialog",
		language: "en",
		topics: [
			"MSO Foundations",
			"Production-Grade Prompting, Agents & Tool Use",
			"Claude Code, MCP & Integration",
			"Production Engineering, Evals & Security",
			"Accelerators & IP Contribution",
		],
	},
];

export const CERTIFICATION_DATA: Record<string, Question[]> = {
	"gh-300": gh300Questions as Question[],
	"claude-certified-developer": claudeQuestions as Question[],
};
