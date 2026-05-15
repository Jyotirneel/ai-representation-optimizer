"use client"

import { useState } from "react"
import { analyzeStore } from "@/services/api"

export default function HomePage() {

  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)

  const handleAnalyze = async () => {

    if (!url.startsWith("http")) {
      alert("Please enter a valid URL")
      return
    }

    try {

      setLoading(true)

      const result = await analyzeStore(url)

      localStorage.setItem(
        "analysis",
        JSON.stringify(result)
      )

      window.location.href = "/dashboard"

    } catch (error) {

      console.error(error)

      alert("Analysis failed")

    } finally {

      setLoading(false)
    }
  }

  return (

    <main
      className="
        min-h-screen
        flex
        flex-col
        justify-center
        items-center
        p-8
        bg-gradient-to-br
        from-gray-100
        to-gray-300
      "
    >

      <div
        className="
          bg-white/70
          backdrop-blur-md
          shadow-xl
          rounded-3xl
          p-12
          w-full
          max-w-3xl
          flex
          flex-col
          items-center
        "
      >

        <h1 className="text-6xl font-black mb-4 text-center">
          AI Representation Optimizer
        </h1>

        <p className="text-gray-600 mb-10 text-center text-lg">
          Understand how AI shopping agents perceive your Shopify store.
        </p>

        <input
          type="text"
          placeholder="https://yourstore.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="
            border
            border-gray-300
            p-4
            rounded-xl
            w-full
            text-lg
            focus:outline-none
            focus:ring-2
            focus:ring-black
          "
        />

        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="
            bg-black
            text-white
            px-8
            py-4
            rounded-xl
            mt-6
            flex
            items-center
            gap-2
            text-lg
            hover:scale-105
            transition
            disabled:opacity-70
          "
        >

          {loading && (
            <div
              className="
                w-5
                h-5
                border-2
                border-white
                border-t-transparent
                rounded-full
                animate-spin
              "
            ></div>
          )}

          {loading ? "Analyzing..." : "Analyze Store"}

        </button>

      </div>

    </main>
  )
}