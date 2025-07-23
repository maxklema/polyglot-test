from flask import Flask, jsonify, render_template
from flask_cors import CORS
import os

app = Flask(__name__, static_folder="../frontend/dist/assets", template_folder="../frontend/dist")
CORS(app)  # Enable CORS for development

@app.route("/api/message")
def get_message():
    return jsonify({"message": "Hello from Flask!!! Is this thing on?"})

@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_frontend(path):
    if os.environ.get("FLASK_ENV") == "development":
        return "Frontend is running separately on Vite dev server."
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)

