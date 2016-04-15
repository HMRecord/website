from flask import Flask, request
from flask.ext.cors import CORS
from bson.json_util import dumps
from bson.objectid import ObjectId
import database as db

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = "../storage"
CORS(app)


@app.route('/api/article', methods=['GET'])
def article():
    if request.args.get('articleID') is not None:
        return dumps(db.getArticles({"_id": ObjectId(request.args.get('articleID'))}))
    if request.args.get('sectionID') is not None:
        return dumps(db.getArticles({"sectionID": ObjectId(request.args.get('sectionID'))}))
    if request.args.get('authorID') is not None:
        return dumps(db.getArticles({"authorIDs": {"$elemMatch": {"$in": [ObjectId(request.args.get('authorID'))]}}}))
    return dumps(db.getArticles({}))


@app.route('/api/staff', methods=['GET'])
def staff():
    try:
        if request.args.get('staffID') is not None:
            return dumps(db.getStaffs({"_id": ObjectId(request.args.get('staffID'))}))
    except:
        pass
    return dumps(db.getStaffs({}))


@app.route('/api/section', methods=['GET'])
def section():
    try:
        if request.args.get('sectionID') is not None:
            return dumps(db.getSections({"_id": ObjectId(request.args.get('sectionID'))}))
    except:
        pass
    return dumps(db.getSections({}))

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
