from pydantic import BaseModel
from typing import List

class AnalyzeRequest(BaseModel):
    url: str

class Recommendation(BaseModel):
    priority: str
    category: str
    issue: str
    impact: str
    fix: str
    effort: str

class AnalyzeResponse(BaseModel):
    url: str
    overall_score: int
    ai_perception_summary: str
    recommendations: List[Recommendation]
    missing_information: List[str]
    trust_issues: List[str]