from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

from app.routers.analyze import router

load_dotenv()

app = FastAPI(
    title="AI Representation Optimizer",
    version="1.0.0"
)

origins = [
    os.getenv("ALLOWED_ORIGINS", "http://localhost:3000")
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

@app.get("/")
async def root():
    return {"message": "Backend running"}