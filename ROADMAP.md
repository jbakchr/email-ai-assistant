# Roadmap

This roadmap is intentionally simple and focused.
Only the **next meaningful steps based on real usage** are listed.

---

## ✅ Now (current focus)

- Use the extension on real emails daily
- Collect examples in `FEEDBACK.md`
- Validate:
  - correctness of replies
  - tone and length
  - real usability (minimal edits before sending)

- Identify patterns (not single issues)

---

## 🔜 Next (high impact, small steps)

### ✨ UX improvements (based on real usage)

- Improve reply insertion behavior:
  - insert above quoted email consistently
  - avoid awkward formatting

- Replace auto-insert with:
  - preview + “Insert” button (optional)

- Improve perceived speed:
  - better "Genererer..." feedback
  - optional loading indicator

---

## 🧠 Soon (make replies better)

- Tune prompt based on collected feedback:
  - shorter replies
  - less formal tone
  - avoid repetition

- Add small but powerful rules:
  - default to concise answers
  - more natural phrasing (less “AI-like”)

- Improve handling of:
  - yes/no questions
  - invitations
  - unclear requests (ask follow-up instead of guessing)

---

## 🔧 Later (quality improvements)

- Clean email input:
  - remove signatures
  - remove quoted threads more reliably

- Make Gmail integration more robust:
  - better selector stability
  - handle multiple open replies

- Improve insertion logic:
  - don’t overwrite existing drafts unintentionally

---

## 🚀 Possible future (only if needed)

- Dynamic context:
  - detect topic (e.g. sommercamp, kursus)
  - send targeted context to backend

- User-configurable preferences:
  - tone (formal / informal)
  - reply length

- RAG (external knowledge):
  - fetch info from website or structured data

---

## ❌ Not doing (important constraints)

- No complex UI yet
- No overengineered context system
- No attempt to solve all email types at once
- No automation of sending emails

---

## 🎯 Guiding principle

Use → Observe → Improve (in batches)

Correctness > usability > polish