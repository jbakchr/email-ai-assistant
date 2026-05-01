from pydantic import BaseModel
from typing import List

class SuggestReplyRequest(BaseModel):
    message: str

class SuggestReplyResponse(BaseModel):
    suggestions: List[str]