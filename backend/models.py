from typing import Optional

from pydantic import BaseModel


class EmailRequest(BaseModel):
    email_text: str
    context: Optional[str] = None


class EmailResponse(BaseModel):
    reply: str