from fastapi import APIRouter

router = APIRouter()

@router.post("/suggest-reply")
def suggest_reply():
    return {"suggestions": ["Thanks!", "Sounds good!"]}
