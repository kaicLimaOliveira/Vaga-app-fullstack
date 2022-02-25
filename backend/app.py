from flask import Flask
from routers import PublishedRouters
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.register_blueprint(PublishedRouters.pages)

if __name__ == '__main__':
    app.run(host='localhost', port=4040, debug=True)