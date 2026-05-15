"use client"

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer
} from "recharts"

export default function ScoreRadarChart() {

  const data = [
    { subject: "FAQ", score: 60 },
    { subject: "Trust", score: 70 },
    { subject: "SEO", score: 80 },
    { subject: "Metadata", score: 75 },
    { subject: "Readability", score: 85 },
  ]

  return (

    <div className="w-full h-[400px]">

      <ResponsiveContainer>

        <RadarChart data={data}>

          <PolarGrid />

          <PolarAngleAxis dataKey="subject" />

          <Radar
            dataKey="score"
            stroke="#000"
            fill="#000"
            fillOpacity={0.5}
          />

        </RadarChart>

      </ResponsiveContainer>

    </div>
  )
}