from flask import Flask
from .front import bp_front
from flask_cors import CORS


def create_app():
    app = Flask(__name__)
    app.register_blueprint(bp_front)
    CORS(app)
    return app
