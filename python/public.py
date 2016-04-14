from flask import Flask, request, redirect, url_for
from flask.ext.cors import CORS
from werkzeug import secure_filename
from bson.json_util import dumps
from bson.objectid import ObjectId
from pymongo import MongoClient
import os

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = "../storage"
CORS(app)

client = MongoClient()
db = client.record


def getSections(query):
    sections = [a for a in db.section.find(query)]
    return sections


def getStaffs(query):
    staffs = [a for a in db.staff.find(query)]
    return staffs


def getArticles(query):
    articles = [a for a in db.article.find(query)]
    for article in articles:
        article['authors'] = []
        for authorID in article['authorIDs']:
            try:
                article['authors'].append(getStaffs({"_id": authorID})[0])
            except:
                pass
        try:
            article['section'] = getSections({"_id": article['sectionID']})[0]
        except:
            pass
    return articles


@app.route('/api/article', methods=['GET', 'POST'])
def article():
    if request.method == 'GET':
        if request.args.get('articleID') is not None:
            return dumps(getArticles({"_id": ObjectId(request.args.get('articleID'))}))
        if request.args.get('sectionID') is not None:
            return dumps(getArticles({"sectionID": ObjectId(request.args.get('sectionID'))}))
        if request.args.get('authorID') is not None:
            return dumps(getArticles({"authorIDs": {"$elemMatch": {"$in": [ObjectId(request.args.get('authorID'))]}}}))
        return dumps(getArticles({}))
    else:
        params = request.get_json()
        if all(a in params for a in ['title', 'content', 'sectionID', 'authorIDs', 'date']):
            db.article.insert_one(params)
            return "good"
    return "bad"


@app.route('/api/staff', methods=['GET', 'POST'])
def staff():
    if request.method == 'GET':
        try:
            if request.args.get('staffID') is not None:
                return dumps(getStaffs({"_id": ObjectId(request.args.get('staffID'))}))
        except:
            pass
        return dumps(getStaffs({}))
    else:
        params = request.get_json()
        if all(a in params for a in ['name', 'position']):
            db.staff.insert_one(params)
            return "good"
    return "bad"


@app.route('/api/section', methods=['GET', 'POST'])
def section():
    if request.method == 'GET':
        try:
            if request.args.get('sectionID') is not None:
                return dumps(getSections({"_id": ObjectId(request.args.get('sectionID'))}))
        except:
            pass
        return dumps(getSections({}))
    else:
        params = request.get_json()
        if 'title' in params:
            db.section.insert_one(params)
            return "good"
    return "bad"


@app.route('/api/files', methods=['POST'])
def file():
    def allowed_file(filename):
        return '.' in filename and \
           filename.rsplit('.', 1)[1] == 'jpg'

    if request.method == 'POST':
        file = request.files['file']
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            return redirect(url_for('uploaded_file',
                                    filename=filename))
        else:
            return "bad"
    return "bad"

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
