from fastapi import APIRouter, HTTPException

from app.models.schemas import AnalyzeRequest
from app.services.scraper import scrape_store
from app.services.detector import detect_missing_info
from app.services.scorer import calculate_score
from app.services.recommender import generate_recommendations
from app.services.analyzer import analyze_content

router = APIRouter()

@router.post("/analyze")
async def analyze(request: AnalyzeRequest):

    try:

        scraped = scrape_store(request.url)

        missing_info = detect_missing_info(
            scraped["content"]
        )

        score = calculate_score(missing_info)

        recommendations = generate_recommendations(
            missing_info
        )

        ai_analysis = analyze_content(
            scraped["content"]
        )

        return {
            "url": request.url,
            "overall_score": score,
            "ai_perception_summary": ai_analysis["summary"],
            "recommendations": recommendations,
            "missing_information": missing_info,
            "trust_issues": ai_analysis["trust_issues"]
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )