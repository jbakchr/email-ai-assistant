# Email AI Assistant

A Chrome Extension + FastAPI backend that generates **context-aware email replies inside Gmail** using an Ollama-based LLM.

---

## 🚀 Current Status

This project has moved beyond a simple MVP and now focuses on **useful, context-aware replies** rather than just generic AI output.

### ✅ Implemented functionality

- ✅ Inject "AI Reply" button directly into Gmail UI
- ✅ Extract visible email content from Gmail
- ✅ Send email text to FastAPI backend
- ✅ Generate reply using Ollama (cloud model)
- ✅ Display AI-generated reply (currently via alert)
- ✅ Context-aware prompting (default + optional context)
- ✅ Anti-hallucination rules in prompt

---

## 🎯 Core Idea

Generic AI replies are **not useful**.

This project focuses on:

> Generating **correct and context-aware email replies**, not just “nice-sounding” ones.

---

## 🧠 Key Feature: Context-Aware Replies

The backend uses **structured prompting with context injection**.

### Prompt structure

```

SYSTEM:

- Rules for behavior (anti-hallucination)
- Tone and style instructions

CONTEXT:

- Default context (always applied)
- Optional extra context (dynamic)

EMAIL:

- Raw email text from Gmail

→ OUTPUT: Suggested reply

```

---

## 🧩 Default Context

The system includes a **baseline context** describing the user:

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

### ✅ Purpose

- Prevent hallucinations
- Ensure factual correctness
- Provide consistent tone

---

## 🧱 Architecture

    Chrome Extension (content.js)
            ↓
    FastAPI Backend
            ↓
    Ollama Model (gpt-oss:120b-cloud)

---

## 🖥️ Backend

### Tech stack

- FastAPI
- Python
- Ollama (local API for cloud model)

---

### Endpoint

#### `POST /generate-reply`

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

### Prompt Design

The backend enforces strict rules:

- Only use information from:
  - the email
  - the provided context
- Never invent services or facts
- If unsure → explicitly say so
- Prefer clear and direct answers (especially for yes/no questions)

---

### Example Behavior

#### ✅ Correct behavior

Email:

> "Afholder I sommerlejr?"

Reply:

> "Nej, vi afholder desværre ikke sommerlejr."

#### ❌ Prevented behavior

- Inventing services
- Suggesting activities that do not exist
- Overly creative or speculative replies

---

## 🌐 Chrome Extension

### Features

- Injects **"✨ AI Reply"** button into Gmail UI
- Styled to feel like a **native Gmail action**
- Extracts email text via DOM (`.a3s`)
- Sends request to backend
- Displays response (current: `alert()`)

---

### UI Notes

- Button blends with Gmail layout but stands out via:
  - light blue background
  - subtle hover effect
- Designed as a **natural extension of Gmail**, not a separate tool

---

## ⚙️ Running the Project

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

## ✅ Known Limitations

- Reply is shown via `alert()` (not yet inserted into Gmail editor)
- Email extraction is basic (`.a3s`) and may break on complex threads
- No structured parsing (signatures, quoted text, etc.)
- Context is currently **static (hardcoded DEFAULT_CONTEXT)**
- No user-configurable preferences yet

---

## 🧭 Next Steps (Planned)

### 🔥 High priority

- Insert reply directly into Gmail compose box
- Replace `alert()` with inline UI panel

---

### 🧠 Intelligence improvements

- Dynamic context (from frontend → backend)
- Basic topic detection (e.g. "sommercamp", "kursus")
- User-configurable context/preferences

---

### 🔍 Future direction

- RAG (retrieve knowledge from docs/website)
- Email summarization
- Task extraction ("remember to reply", etc.)
- Follow-up suggestions

---

## 🎯 Project Goal

To build a **small, practical AI assistant** that:

- integrates directly into real workflows (Gmail)
- provides **correct, context-aware suggestions**
- avoids unnecessary complexity
- improves everyday productivity

---

## 💡 Design Principles

- Minimal > complex
- Correctness > creativity
- Context > generic AI
- Iterative development

---

## 📌 Notes

- Replies are primarily in Danish
- System is tuned for realistic personal usage
- This is an exploration of **practical AI tooling**, not a generic chatbot

---

## License

MIT
