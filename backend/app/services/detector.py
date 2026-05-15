def detect_missing_info(content: str):

    missing = []

    keywords = {
        "FAQ": ["faq"],
        "Returns": ["return policy"],
        "Shipping": ["shipping"],
        "Reviews": ["reviews"],
        "Sizing Guide": ["size guide"]
    }

    lower = content.lower()

    for label, terms in keywords.items():

        found = any(term in lower for term in terms)

        if not found:
            missing.append(label)

    return missing