from fastapi import APIRouter

from .models.schemas import SuggestReplyResponse, SuggestReplyRequest

router = APIRouter()

@router.post("/suggest-reply", response_model=SuggestReplyResponse)
def suggest_reply(message: SuggestReplyRequest):
    return SuggestReplyResponse(suggestions=["Thanks!", "Sounds good!"])
