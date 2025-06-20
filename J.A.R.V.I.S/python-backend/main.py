from flask import Flask, request, jsonify
from flask_cors import CORS
from random_tip.random_tip import random_tip

app = Flask(__name__)
CORS(app)


@app.get("/api/hi")
def get_hi():
    return jsonify({"message": "Get request recieved successfully!"})


@app.post("/api/hi")
def post_hi():
    data = request.json
    print(data)
    name = data.get("name")
    return jsonify({"message": f"Post request successfully recieved, {name}"})


@app.get("/api/random_tip")
def send_rand_tip():
    data = random_tip()
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)
