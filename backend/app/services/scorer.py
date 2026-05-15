def calculate_score(missing_info):

    base_score = 100

    deductions = len(missing_info) * 10

    final_score = max(base_score - deductions, 20)

    return final_score