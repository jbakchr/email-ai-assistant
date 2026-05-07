# Roadmap

This roadmap is intentionally simple and focused.
Only the **next meaningful steps** are listed.

---

## ✅ Now (current focus)

- Improve reply quality using structured prompts
- Validate AI replies on real emails
- Ensure no hallucinations (always prefer correctness over creativity)

---

## 🔜 Next (high impact, small steps)

- Insert AI reply directly into Gmail compose box
- Replace alert() with inline UI in Gmail
- Allow one-click "Insert reply" action

---

## 🧠 Soon (make it smarter)

- Add dynamic context (frontend → backend)
  - e.g. detect topics like "sommercamp", "kursus"
- Improve prompt based on real failures
- Keep replies short and useful by default

---

## 🔧 Later (quality improvements)

- Clean email input (remove signatures, quoted threads)
- Improve Gmail DOM handling (more robust selectors)
- Basic loading states (spinner / “Generating…”)

---

## 🚀 Possible future (only if needed)

- User-configurable preferences (tone, language)
- Store personal context outside code
- RAG (fetch info from docs/websites)

---

## ❌ Not doing (important)

- No complex UI yet
- No overengineering
- No trying to solve all email types at once

---

## 🎯 Guiding principle

Build small → test on real emails → improve

Correctness > cleverness