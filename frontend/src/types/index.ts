export interface Recommendation {
  priority: string
  category: string
  issue: string
  impact: string
  fix: string
  effort: string
}

export interface AnalysisResult {
  url: string
  overall_score: number
  ai_perception_summary: string
  recommendations: Recommendation[]
  missing_information: string[]
  trust_issues: string[]
}