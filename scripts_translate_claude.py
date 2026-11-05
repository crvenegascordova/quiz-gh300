import json
import urllib.request
import urllib.parse
import time
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed

BASE_DIR = Path(__file__).parent
DATA_PATH = BASE_DIR / "src" / "data" / "certifications" / "claude-certified-developer.json"
CACHE_PATH = BASE_DIR / "content" / "certifications" / "claude-certified-developer" / "translations-es.json"

def translate_text(text, max_retries=3):
    if not text or not text.strip():
        return text
    clean_text = text.strip()
    url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=" + urllib.parse.quote(clean_text)
    
    for attempt in range(max_retries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"})
            with urllib.request.urlopen(req, timeout=12) as resp:
                data = json.loads(resp.read().decode("utf-8"))
                result = "".join(part[0] for part in data[0] if part and part[0])
                return result
        except Exception as e:
            if attempt == max_retries - 1:
                print(f"Error translating: {clean_text[:50]}... ({e})")
                return clean_text
            time.sleep(1.0 * (attempt + 1))

def process_item(item):
    item_id = item["id"]
    q_trans = translate_text(item["question"])
    
    opts_trans = []
    for opt in item["options"]:
        opt_text_trans = translate_text(opt["text"])
        opts_trans.append({"id": opt["id"], "text": opt_text_trans})
        
    exp_trans = translate_text(item.get("explanation", ""))
    
    return item_id, {
        "question": q_trans,
        "options": opts_trans,
        "explanation": exp_trans
    }

def main():
    if not DATA_PATH.exists():
        print(f"No se encontró {DATA_PATH}")
        return

    data = json.loads(DATA_PATH.read_text(encoding="utf-8"))
    translations = {}
    if CACHE_PATH.exists():
        try:
            translations = json.loads(CACHE_PATH.read_text(encoding="utf-8"))
            print(f"Cacheadas previamente: {len(translations)} traducciones")
        except Exception:
            translations = {}

    pending = [item for item in data if item["id"] not in translations]
    print(f"Total preguntas: {len(data)}, pendientes de traducir: {len(pending)}")

    if pending:
        start_t = time.time()
        completed = 0
        with ThreadPoolExecutor(max_workers=8) as executor:
            future_to_id = {executor.submit(process_item, item): item["id"] for item in pending}
            for future in as_completed(future_to_id):
                item_id, trans = future.result()
                translations[item_id] = trans
                completed += 1
                if completed % 25 == 0 or completed == len(pending):
                    print(f"Progreso: {completed}/{len(pending)} ({completed/len(pending)*100:.1f}%) en {time.time()-start_t:.1f}s")
                    # Guardar progreso incremental
                    CACHE_PATH.parent.mkdir(parents=True, exist_ok=True)
                    CACHE_PATH.write_text(json.dumps(translations, ensure_ascii=False, indent=2), encoding="utf-8")

        CACHE_PATH.write_text(json.dumps(translations, ensure_ascii=False, indent=2), encoding="utf-8")
        print(f"Traducciones completadas y guardadas en {CACHE_PATH} ({time.time()-start_t:.1f}s)")
    else:
        print("Todas las preguntas ya están traducidas.")

if __name__ == "__main__":
    main()
