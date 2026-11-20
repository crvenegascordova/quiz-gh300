import unittest
from pathlib import Path

import audit_sources


class GH300AuditTests(unittest.TestCase):
	def test_markdown_has_expected_question_count(self):
		markdown = audit_sources.QUESTIONS_FILE.read_text(encoding="utf-8")
		questions = audit_sources.split_questions(markdown)
		self.assertEqual(len(questions), 458)

	def test_answer_letters_are_validated(self):
		question = {
			"number": 999,
			"question": "Prueba",
			"options": {"A": "Primera", "B": "Segunda"},
			"answer": "A, B",
			"explanation": "Ambas opciones son correctas.",
			"source_title": "Prueba",
			"source_url": "https://docs.github.com/en/copilot",
		}
		cache = {
			"status": "ok",
			"text": "Copilot provides coding assistance.",
			"sha256": "test",
			"from_cache": False,
		}
		result = audit_sources.audit_question(question, cache)
		invalid = [finding["type"] for finding in result["findings"] if finding["type"] == "invalid_answer_option"]
		self.assertEqual(invalid, [])

	def test_code_visual_studio_is_an_allowed_official_domain(self):
		self.assertTrue(
			audit_sources.allowed_source(
				"https://code.visualstudio.com/docs/copilot/customization/custom-chat-modes"
			)
		)

	def test_source_url_is_normalized_without_fragment(self):
		url = "https://docs.github.com/en/copilot#start"
		self.assertEqual(
			audit_sources.normalize_url(url),
			"https://docs.github.com/en/copilot",
		)


if __name__ == "__main__":
	unittest.main()
