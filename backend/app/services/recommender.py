def generate_recommendations(missing_info):

    recommendations = []

    mapping = {
        "FAQ": {
            "category": "Support",
            "fix": "Add FAQ section"
        },
        "Returns": {
            "category": "Policy",
            "fix": "Add return policy"
        },
        "Shipping": {
            "category": "Policy",
            "fix": "Add shipping policy"
        },
        "Reviews": {
            "category": "Trust",
            "fix": "Add customer reviews"
        },
        "Sizing Guide": {
            "category": "Product",
            "fix": "Add detailed sizing guide"
        }
    }

    for item in missing_info:

        recommendations.append({
            "priority": "high",
            "category": mapping[item]["category"],
            "issue": f"Missing {item}",
            "impact": f"AI systems cannot understand {item.lower()} properly",
            "fix": mapping[item]["fix"],
            "effort": "low"
        })

    return recommendations