"use client"

import { useEffect, useState } from "react"

import ScoreRadarChart from "@/components/charts/ScoreRadarChart"

export default function DashboardPage() {

  const [data, setData] = useState<any>(null)

  useEffect(() => {

    const stored = localStorage.getItem("analysis")

    if (stored) {
      setData(JSON.parse(stored))
    }

  }, [])

  if (!data) {

    return (
      <div className="p-10 text-2xl">
        No analysis found.
      </div>
    )
  }

  return (

    <main
      className="
        min-h-screen
        p-8
        bg-gradient-to-br
        from-gray-100
        to-gray-300
      "
    >

      <div className="max-w-6xl mx-auto">

        <div className="mb-10">

          <h1 className="text-5xl font-black mb-2">
            Dashboard
          </h1>

          <p className="text-gray-600">
            AI analysis for:
          </p>

          <p className="font-semibold text-lg">
            {data.url}
          </p>

          <button
            onClick={() => {
              localStorage.removeItem("analysis")
              window.location.href = "/"
            }}
            className="
              mt-5
              bg-black
              text-white
              px-5
              py-3
              rounded-xl
              hover:scale-105
              transition
            "
          >
            Run New Analysis
          </button>

        </div>

        {/* SCORE */}

        <div
          className="
            bg-white/70
            backdrop-blur-md
            shadow-xl
            rounded-3xl
            p-8
            mb-8
          "
        >

          <h2 className="text-xl font-semibold mb-4">
            Overall AI Readiness Score
          </h2>

          <h1
            className={`
              text-7xl
              font-black
              ${
                data.overall_score >= 80
                  ? "text-green-600"
                  : data.overall_score >= 50
                  ? "text-yellow-500"
                  : "text-red-600"
              }
            `}
          >
            {data.overall_score}/100
          </h1>

        </div>

        {/* RADAR CHART */}

        <div
          className="
            bg-white/70
            backdrop-blur-md
            shadow-xl
            rounded-3xl
            p-8
            mb-8
          "
        >

          <h2 className="text-2xl font-bold mb-6">
            AI Readiness Breakdown
          </h2>

          <ScoreRadarChart />

        </div>

        {/* SUMMARY */}

        <div
          className="
            bg-white/70
            backdrop-blur-md
            shadow-xl
            rounded-3xl
            p-8
            mb-8
          "
        >

          <h2 className="text-2xl font-bold mb-4">
            AI Summary
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            {data.ai_perception_summary}
          </p>

        </div>

        {/* MISSING INFO */}

        <div
          className="
            bg-white/70
            backdrop-blur-md
            shadow-xl
            rounded-3xl
            p-8
            mb-8
          "
        >

          <h2 className="text-2xl font-bold mb-4">
            Missing Information
          </h2>

          <ul className="space-y-3">

            {data.missing_information.map(
              (item: string, index: number) => (

                <li
                  key={index}
                  className="
                    bg-red-100
                    text-red-700
                    px-4
                    py-2
                    rounded-xl
                    font-medium
                  "
                >
                  {item}
                </li>
              )
            )}

          </ul>

        </div>

        {/* TRUST ISSUES */}

        <div
          className="
            bg-white/70
            backdrop-blur-md
            shadow-xl
            rounded-3xl
            p-8
            mb-8
          "
        >

          <h2 className="text-2xl font-bold mb-4">
            Trust Issues
          </h2>

          <ul className="space-y-3">

            {data.trust_issues.map(
              (issue: string, index: number) => (

                <li
                  key={index}
                  className="
                    bg-yellow-100
                    text-yellow-700
                    px-4
                    py-2
                    rounded-xl
                    font-medium
                  "
                >
                  {issue}
                </li>
              )
            )}

          </ul>

        </div>

        {/* RECOMMENDATIONS */}

        <div
          className="
            bg-white/70
            backdrop-blur-md
            shadow-xl
            rounded-3xl
            p-8
          "
        >

          <h2 className="text-2xl font-bold mb-6">
            Recommendations
          </h2>

          <div className="space-y-6">

            {data.recommendations.map(
              (rec: any, index: number) => (

                <div
                  key={index}
                  className="
                    border
                    border-gray-200
                    rounded-2xl
                    p-6
                    bg-white
                  "
                >

                  <div className="flex items-center gap-3 mb-3">

                    <span
                      className="
                        bg-red-100
                        text-red-700
                        text-xs
                        px-3
                        py-1
                        rounded-full
                        font-bold
                      "
                    >
                      {rec.priority.toUpperCase()}
                    </span>

                    <h3 className="text-xl font-bold">
                      {rec.issue}
                    </h3>

                  </div>

                  <p className="text-gray-700 mb-3">
                    {rec.fix}
                  </p>

                  <p className="text-sm text-gray-500">
                    Impact: {rec.impact}
                  </p>

                </div>
              )
            )}

          </div>

        </div>

      </div>

    </main>
  )
}