from flask import Blueprint, request
from controllers.PublishersController import Publishers


pages = Blueprint('', __name__, url_prefix='/')

@pages.route('home', methods=['GET'])
def index():
    return Publishers().index(request)

@pages.route('new_vacancy', methods=['POST'])
def register_vacancy():
    return Publishers().new_vacancy(request)