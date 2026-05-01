from fastapi import FastAPI

from .api import router

app = FastAPI(title="email-ai-assistant backend", version="0.1.0", description="Backend for AI-generated email replies")

app.include_router(router)