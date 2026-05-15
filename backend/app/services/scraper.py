import requests
from bs4 import BeautifulSoup

HEADERS = {
    "User-Agent": "Mozilla/5.0"
}

def scrape_store(url: str):

    response = requests.get(
        url,
        headers=HEADERS,
        timeout=20
    )

    soup = BeautifulSoup(response.text, "lxml")

    title = soup.title.string if soup.title else ""

    meta_description = ""

    meta = soup.find("meta", attrs={"name": "description"})

    if meta:
        meta_description = meta.get("content", "")

    paragraphs = soup.find_all("p")

    text = " ".join([
        p.get_text(strip=True)
        for p in paragraphs
    ])

    return {
        "title": title,
        "meta_description": meta_description,
        "content": text[:8000]
    }