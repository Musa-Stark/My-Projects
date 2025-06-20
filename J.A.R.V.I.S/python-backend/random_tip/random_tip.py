import random
import math
from pathlib import Path
import json


def random_tip():
    tip_idx = math.floor(random.random() * 50)
    tip_cate_idx = math.floor(random.random() * 7)
    tip_cate_arr = [
        "HTML",
        "CSS",
        "Tailwind",
        "JavaScript",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "MySQL",
    ]
    tip_cate = tip_cate_arr[tip_cate_idx]
    json_path = (
        Path(__file__).parent.parent.parent
        / "frontend"
        / "public"
        / "scripts"
        / "json"
        / "dev_tips.json"
    )
    with open(json_path, "r", encoding="utf-8") as file:
        data = json.load(file)
        index = data[tip_cate][tip_idx]
        return {"category": tip_cate, "tip": index}
