from flask import Flask
from flask.ext.cors import CORS

from public import publicAPI
from admin import adminAPI
import database

app = Flask(__name__)

app.register_blueprint(publicAPI)
app.register_blueprint(adminAPI)

CORS(app)


def initDB(db):
    database.updateDB(db)

if __name__ == "__main__":
    app.run(host='0.0.0.0', threaded=True, debug=True)
