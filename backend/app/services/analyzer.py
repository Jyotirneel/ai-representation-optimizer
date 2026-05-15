import os
import json

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    api_key=os.getenv("GROQ_API_KEY"),
    base_url="https://api.groq.com/openai/v1"
)

def analyze_content(content: str):

    prompt = f"""
    Analyze this Shopify store.

    Return ONLY valid JSON.

    {{
      "summary": "...",
      "trust_issues": []
    }}

    Content:
    {content}
    """

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.3
    )

    text = response.choices[0].message.content

    print(text)

    text = text.replace("```json", "")
    text = text.replace("```", "")

    return json.loads(text)