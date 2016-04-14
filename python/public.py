from flask import Flask, request, redirect, url_for
from flask.ext.cors import CORS
from werkzeug import secure_filename
from bson.json_util import dumps
from bson.objectid import ObjectId
import os
import database as db

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = "../storage"
CORS(app)


@app.route('/api/article', methods=['GET', 'POST'])
def article():
    if request.method == 'GET':
        if request.args.get('articleID') is not None:
            return dumps(db.getArticles({"_id": ObjectId(request.args.get('articleID'))}))
        if request.args.get('sectionID') is not None:
            return dumps(db.getArticles({"sectionID": ObjectId(request.args.get('sectionID'))}))
        if request.args.get('authorID') is not None:
            return dumps(db.getArticles({"authorIDs": {"$elemMatch": {"$in": [ObjectId(request.args.get('authorID'))]}}}))
        return dumps(db.getArticles({}))
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
                return dumps(db.getStaffs({"_id": ObjectId(request.args.get('staffID'))}))
        except:
            pass
        return dumps(db.getStaffs({}))
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
                return dumps(db.getSections({"_id": ObjectId(request.args.get('sectionID'))}))
        except:
            pass
        return dumps(db.getSections({}))
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
