# Email AI Assistant

A simple AI-powered Chrome Extension that generates suggested replies to emails in Gmail using a FastAPI backend and an Ollama model.

## 🚀 Current Status

This project is in an early MVP stage.

Current functionality:

- ✅ Read email content from Gmail (via Chrome Extension)
- ✅ Send email text to backend
- ✅ Generate reply using Ollama
- ✅ Display AI-generated reply (currently via alert)

No UI polish or advanced features yet — focus is on a simple working pipeline.

---

## 🧱 Architecture

```

Chrome Extension (content script)
↓
FastAPI Backend
↓
Ollama Model

```

---

## 🖥️ Backend

### Tech stack

- FastAPI
- Ollama
- Python

### Endpoint

```

POST /generate-reply

```

#### Request

```json
{
  "email_text": "..."
}
```

#### Response

```json
{
  "reply": "..."
}
```

### Prompt (Danish)

The backend uses a Danish prompt:

> "Skriv et klart, høfligt og naturligt svar på følgende email. Svar skal være på dansk."

---

## 🌐 Chrome Extension

### Features

- Injects a button into Gmail
- Extracts visible email content
- Sends email text to backend
- Displays AI reply (via `alert()`)

### Notes

- Gmail DOM extraction is currently basic (`.a3s` selector)
- Button is injected globally (not yet integrated into Gmail UI)

---

## ⚙️ Running the project

### 1. Start backend

```bash
cd backend
uvicorn main:app --reload --port 8003
```

Backend runs on:

    http://localhost:8003

---

### 2. Load Chrome Extension

1.  Go to: chrome://extensions/
2.  Enable **Developer Mode**
3.  Click **"Load unpacked"**
4.  Select the `chrome-extension/` folder

---

## ✅ Known Limitations

- Basic email extraction (may fail in some Gmail layouts)
- No UI (reply shown via alert)
- No error handling in frontend
- No streaming from Ollama
- No tone control / personalization

---

## 🧭 Next Steps (ideas)

- Insert reply directly into Gmail compose box
- Improve UI (inline panel instead of alert)
- Clean email text (remove signatures, threads)
- Improve prompt (tone, context awareness)
- Add summary + task extraction
- Add follow-up suggestions

---

## 🎯 Goal of the project

To explore building small, practical AI-powered tools that integrate directly into everyday workflows (like Gmail), with minimal complexity and fast feedback loops.

---

## 📌 Notes

- Emails and replies are expected to be in Danish
- Prompt and model behavior are tuned accordingly
- Project prioritizes simplicity over completeness

## License

MIT
