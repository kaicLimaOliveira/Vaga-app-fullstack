from flask import Blueprint, request
from controllers.PublishersController import Publishers


pages = Blueprint('', __name__, url_prefix='/')

@pages.route('Home', methods=['GET'])
def index():
    return Publishers().index(request)

@pages.route('Cadastro', methods=['POST'])
def register_vacancy():
    return Publishers().new_vacancy(request)