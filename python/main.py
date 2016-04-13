from flask import Flask, request
from flask.ext.cors import CORS
from pymongo import MongoClient
from bson.json_util import dumps

app = Flask(__name__)
CORS(app)

client = MongoClient()
db = client.record


@app.route('/api/article', methods=['GET', 'POST'])
def article():
    if request.method == 'GET':
        if request.args.get('sectionID') is not None:
            return dumps([a for a in db.article.find({"_id": request.args.get('sectionID')})])
        if request.args.get('articleID') is not None:
            return dumps([a for a in db.article.find({"articleID": request.args.get('articleID')})])
        if request.args.get('staffID') is not None:
            return dumps([a for a in db.article.find({"sectionID": request.args.get('staffID')})])
    else:
        params = request.get_json()
        if all(a in params for a in ['title', 'content', 'sectionID', 'authorID', 'date']):
            db.team.insert_one(params)


@app.route('/api/staff', methods=['GET', 'POST'])
def staff():
    if request.method == 'GET':
        if request.args.get('staffID') is not None:
            return dumps([a for a in db.staff.find({"_id": request.args.get('staffID')})])
    else:
        params = request.get_json()
        if all(a in params for a in ['name', 'position']):
            db.team.insert_one(params)


@app.route('/api/section', methods=['GET'])
def section():
    if request.args.get('sectionID') is not None:
        return dumps([a for a in db.section.find({"_id": request.args.get('sectionID')})])

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
