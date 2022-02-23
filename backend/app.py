from flask import Flask
from routers import PublishedRouters

app = Flask(__name__)
app.register_blueprint(PublishedRouters.pages)

if __name__ == '__main__':
    app.run(host='localhost', port=8081, debug=True)