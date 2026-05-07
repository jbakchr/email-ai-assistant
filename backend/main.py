from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from models import EmailRequest, EmailResponse
from ollama_client import generate_reply

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/generate-reply", response_model=EmailResponse)
def generate_email_reply(request: EmailRequest):
    
    reply = generate_reply(
        email_text=request.email_text,
        context=request.context
    )

    return EmailResponse(reply=reply)