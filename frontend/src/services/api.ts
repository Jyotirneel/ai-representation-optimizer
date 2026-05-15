import axios from "axios"

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
})

export const analyzeStore = async (url: string) => {

  try {

    console.log("Sending request...")

    const response = await API.post(
      "/analyze",
      { url }
    )

    console.log("Response:", response.data)

    return response.data

  } catch (error: any) {

    console.error("FULL ERROR:", error)

    console.error("ERROR RESPONSE:", error.response)

    throw error
  }
}