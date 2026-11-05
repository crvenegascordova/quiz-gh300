export interface CertificationMeta {
	id: string; // 'gh-300' | 'claude-certified-developer'
	code: string; // 'GH-300' | 'CLAUDE-DEV'
	title: string;
	subtitle: string;
	description: string;
	badgeImageUrl: string;
	provider: string; // 'GitHub / Microsoft' | 'Anthropic'
	badge: string;
	accentColor: string; // CSS color string or class
	badgeBg: string;
	badgeBorder: string;
	studyGuideTitle: string;
	studyGuideModalId?: string;
	language?: "es" | "en";
	topics: string[];
}
