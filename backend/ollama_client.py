import requests

OLLAMA_URL = "http://127.0.0.1:11434/api/generate"

def generate_reply(email_text: str, context: str | None = None) -> str:

    DEFAULT_CONTEXT = """
    Du svarer som Jonas.

    Vigtige oplysninger:
    - Du er leder af Coding Pirates Hillerød.
    - Coding Pirates Hillerød tilbyder ikke sommercamps.
    - Coding Pirates Hillerød tilbyder ikke kurser i robotteknologi.

    Personlig kommunikation:
    - Du svarer venligt og naturligt.
    - Hvis det er en privat invitation, er du normalt positiv og imødekommende.
    """

    # Combine default + optional context
    if context:
        full_context = f"{DEFAULT_CONTEXT}\n\nEkstra kontekst:\n{context}"
    else:
        full_context = DEFAULT_CONTEXT

    context_block = f"""
    Kontekst:
    {full_context}
    """


    prompt = f"""
Du er en assistent, der hjælper med at skrive svar på emails.

VIGTIGE REGLER (skal altid følges):
- Du må KUN bruge information, der er direkte nævnt i emailen eller i konteksten.
- Hvis noget ikke er nævnt, må du IKKE antage det.
- Hvis emailen spørger om noget, som ikke er dækket:
  → svar at du ikke har den information.
- Du må ALDRIG foreslå aktiviteter, tilbud eller muligheder uden eksplicit belæg.
- Hvis konteksten direkte modsiger spørgsmålet → svar tydeligt ud fra konteksten.

Hvis emailen indeholder et spørgsmål, og svaret ikke fremgår tydeligt af konteksten:
→ svar tydeligt NEJ eller at det ikke tilbydes.
→ du må ikke forsøge at være kreativ eller foreslå alternativer.

{context_block}

Email:
{email_text}

Svar:
"""

    print(prompt)

    payload = {
        "model": "gpt-oss:120b-cloud",
        "prompt": prompt,
        "stream": False
    }

    response = requests.post(OLLAMA_URL, json=payload)
    response.raise_for_status()

    data = response.json()
    return data["response"].strip()