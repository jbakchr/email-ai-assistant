from fastapi import FastAPI
from models import EmailRequest, EmailResponse
from ollama_client import generate_reply

app = FastAPI()

@app.post("/generate-reply", response_model=EmailResponse)
def generate_email_reply(request: EmailRequest):
    reply = generate_reply(request.email_text)
    return EmailResponse(reply=reply)