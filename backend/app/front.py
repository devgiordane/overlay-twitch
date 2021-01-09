from .twt import save_stream_info
from flask import render_template, redirect, request, Blueprint, current_app
bp_front = Blueprint("front", __name__)


@bp_front.route('/')
def index():
    return "Ola"


@bp_front.route('/streaminfo', methods=['POST'])
def streaminfo():
    return save_stream_info(request.get_json())
