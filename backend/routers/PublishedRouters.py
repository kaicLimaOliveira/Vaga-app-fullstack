from flask import Blueprint, request
from controllers.PublishersController import Publishers


pages = Blueprint('', __name__, url_prefix='/')

@pages.route('', methods=['GET'])
def index():
    return Publishers().index(request)

@pages.route('PublicarVaga', methods=['GET'])
def register_vacancy():
    return Publishers().new_vacancy(request)