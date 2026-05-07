import requests

OLLAMA_URL = "http://127.0.0.1:11434/api/generate"

def generate_reply(email_text: str) -> str:
    prompt = f"""
Du er en hjælpsom og professionel assistent.

Skriv et klart, høfligt og naturligt svar på følgende email.
Svar skal være på dansk og passe til tonen i emailen.

Email:
{email_text}

Svar:
"""

    payload = {
        "model": "gpt-oss:120b-cloud",
        "prompt": prompt,
        "stream": False
    }

    response = requests.post(OLLAMA_URL, json=payload)
    response.raise_for_status()

    data = response.json()
    return data["response"].strip()