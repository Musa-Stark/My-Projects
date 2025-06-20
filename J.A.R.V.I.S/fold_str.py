import os

structure = {
    "jarvis": [
        "electron-app/main.js",
        "electron-app/preload.js",
        "electron-app/electron-config.js",
        "frontend/index.html",
        "frontend/tailwind.config.js",
        "frontend/styles/input.css",
        "frontend/styles/output.css",
        "frontend/scripts/main.js",
        "frontend/public/favicon.ico",
        "node-backend/index.js",
        "node-backend/api/ask.js",
        "node-backend/services/system_control.js",
        "node-backend/services/file_access.js",
        "node-backend/utils/helpers.js",
        "node-backend/config/constants.js",
        "node-backend/config/env.js",
        "python-backend/__init__.py",
        "python-backend/main.py",
        "python-backend/speech/recognizer.py",
        "python-backend/speech/tts.py",
        "python-backend/vision/face_detect.py",
        "python-backend/nlp/chatbot.py",
        "python-backend/nlp/gpt_interface.py",
        "python-backend/utils/text_cleaner.py",
        "bridge/python-bridge.js",
        "bridge/message-protocol.json",
        "config/env.json",
        "config/user-settings.json",
        "assets/audio/beep.wav",
        "assets/images/jarvis-logo.png",
        "assets/fonts/roboto.ttf",
        "data/logs/assistant.log",
        "data/db/jarvis.db",
        "tests/__init__.py",
        "tests/test_node_api.js",
        "tests/test_python_tasks.py",
        ".env",
        "README.md",
        "package.json",
        "requirements.txt",
    ]
}

for base, files in structure.items():
    for file in files:
        path = os.path.join(base, file)
        if file.endswith("/"):  # It's a folder
            os.makedirs(path, exist_ok=True)
        else:
            os.makedirs(os.path.dirname(path), exist_ok=True)
            with open(path, "w") as f:
                pass  # Create an empty file

print("Jarvis folder structure created successfully.")
