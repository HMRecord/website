from flask import Flask, request
from flask.ext.cors import CORS
from pymongo import MongoClient
from bson.json_util import dumps

app = Flask(__name__)
CORS(app)

client = MongoClient()
db = client.record


@app.route('/api/article', methods=['GET'])
def article():
    if request.args.get('sectionID') is not None:
        return dumps([a for a in db.article.find({"sectionID": request.args.get('sectionID')})])
    if request.args.get('articleID') is not None:
        return dumps([a for a in db.article.find({"sectionID": request.args.get('sectionID')})])
    if request.args.get('staffID') is not None:
        return dumps([a for a in db.article.find({"sectionID": request.args.get('sectionID')})])

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
