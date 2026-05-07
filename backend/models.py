from pydantic import BaseModel

class EmailRequest(BaseModel):
    email_text: str

class EmailResponse(BaseModel):
    reply: str