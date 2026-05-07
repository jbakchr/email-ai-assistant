# Email AI Assistant

A Chrome Extension + FastAPI backend that generates **context-aware email replies directly inside Gmail** using an Ollama-based LLM.

---

## 🚀 Current Status

This project is now at a stage where it is **actually usable in a real email workflow**.

You can:

- Open an email in Gmail
- Click **"✨ AI Reply"**
- Instantly get a suggested reply inserted into the compose box
- Edit if needed and send

---

## 🎯 What problem does this solve?

Most AI-generated email replies are:

- Too generic
- Factually incorrect
- Not tailored to your situation

This tool focuses on:

> ✅ Generating **correct, context-aware replies**  
> ✅ Reducing the effort of writing everyday emails  
> ✅ Acting as a **drafting assistant**, not an auto-sender

---

## 🧪 What it feels like to use

Typical usage looks like this:

1. Open an email in Gmail
2. Click **✨ AI Reply**
3. Gmail opens the reply editor automatically
4. A suggested reply is inserted
5. You tweak (if needed) and send

👉 In many cases, only minimal edits are needed.

---

## ✅ Implemented functionality

- ✅ Inject "✨ AI Reply" button into Gmail UI
- ✅ One-click → opens reply editor + inserts suggestion
- ✅ Extract email content directly from Gmail
- ✅ Send email to FastAPI backend
- ✅ Generate reply using Ollama (cloud model)
- ✅ Context-aware prompting (default + optional context)
- ✅ Anti-hallucination rules (prevents wrong answers)

---

## 🧠 Key Feature: Context-Aware Replies

The system uses **structured prompting with context** to avoid incorrect answers.

### Prompt structure

```

SYSTEM:

*   Rules (no hallucinations, correct answers only)

CONTEXT:

*   Default context (about you / your organization)
*   Optional extra context

EMAIL:

*   Raw email content

→ OUTPUT:
Suggested reply

```

---

## 🧩 Default Context (example)

```text
Du svarer som Jonas.

Vigtige oplysninger:
- Du er leder af Coding Pirates Hillerød.
- Coding Pirates Hillerød tilbyder ikke sommercamps.
- Coding Pirates Hillerød tilbyder ikke kurser i robotteknologi.

Personlig kommunikation:
- Du svarer venligt og naturligt.
- Hvis det er en privat invitation, er du normalt positiv og imødekommende.
```

### ✅ Why this matters

Without context:

- ❌ AI guesses → wrong answers

With context:

- ✅ AI respects real-world constraints

---

## 🧱 Architecture

    Chrome Extension (content.js)
            ↓
    FastAPI backend
            ↓
    Ollama (gpt-oss:120b-cloud)

---

## 🌐 Chrome Extension

### Features

- Injects a native-feeling **AI Reply button**
- Works directly inside Gmail UI
- Automatically finds the reply compose field
- Inserts reply into editor

### UI Behavior

- Button appears next to Gmail’s Reply/Forward actions
- Styled to feel native (but slightly highlighted)
- One-click workflow — no extra UI steps

---

## 🖥️ Backend

### Tech stack

- FastAPI
- Python
- Ollama

---

### Endpoint

#### POST `/generate-reply`

##### Request

```json
{
  "email_text": "...",
  "context": "... (optional)"
}
```

##### Response

```json
{
  "reply": "Generated reply"
}
```

---

## ⚙️ Running the project

### 1. Start backend

```bash
cd backend
uvicorn main:app --reload --port 8003
```

---

### 2. Load Chrome Extension

- Go to: `chrome://extensions/`
- Enable **Developer Mode**
- Click **Load unpacked**
- Select `chrome-extension/`

---

## ✅ What works well (current strengths)

- ✅ Replies are factually correct (no hallucinated services)

- ✅ Handles both formal and informal emails

- ✅ Works well for:
  - questions about services
  - invitations
  - short practical emails

- ✅ Feels integrated into Gmail workflow

---

## ⚠️ Known limitations

- Replies may still be:
  - too long
  - slightly too formal
  - needing minor edits

- Email parsing is basic (`.a3s`)

- No advanced handling of email threads or signatures

- Context is still static (hardcoded)

- No "regenerate" or "edit suggestion" UI yet

---

## 🧭 How the project improves over time

The system is designed to improve through real usage:

1.  Use it on real emails
2.  Collect feedback (FEEDBACK.md)
3.  Identify patterns
4.  Tune prompt

---

## 🧭 Next Steps

### 🔥 UX improvements

- Inline suggestion panel (instead of auto-insert)
- “Regenerate reply” button

---

### 🧠 Intelligence improvements

- Dynamic context (based on email topic)
- Shorter, more direct responses by default
- Better tone control

---

## 🎯 Project Goal

To build a **small, practical AI assistant** that:

- Works inside real workflows (Gmail)
- Produces **useful, correct replies**
- Requires **minimal setup and minimal thinking**
- Can be improved iteratively over time

---

## 💡 Design Principles

- Correctness > cleverness
- Minimal > complex
- Context > generic AI
- Build → test → improve

---

## 📌 Notes

- Designed primarily for Danish emails
- Built for personal, real-world usage
- Not intended as a "send automatically" system

---

## License

MIT
