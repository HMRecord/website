from flask import Flask, jsonify, request, abort, make_response
from flask.ext.cors import CORS
from flask.ext.httpauth import HTTPBasicAuth
import database as db

app = Flask(__name__, static_url_path="")
app.config['UPLOAD_FOLDER'] = "../storage"
CORS(app)

auth = HTTPBasicAuth()


@auth.get_password
def get_password(username):
    if username == 'admin':
        return 'sdfkasldfj'
    return None


@auth.error_handler
def unauthorized():
    return make_response(jsonify({'error': 'Unauthorized access'}), 403)


@app.errorhandler(400)
def bad_request(error):
    return make_response(jsonify({'error': 'Bad request'}), 400)


@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)


@app.route('/api/admin/article', methods=['POST'])
@auth.login_required
def createArticle():
    if not request.json or not db.createArticle(request.json):
        abort(400)
    return "good"


@app.route('/api/admin/article/<articleID>', methods=['DELETE'])
@auth.login_required
def updateArticle(articleID):
    db.deleteArticle(articleID)
    return "good"


@app.route('/api/admin/staff', methods=['POST'])
@auth.login_required
def createStaff():
    if not request.json or not db.createStaff(request.json):
        abort(400)
    return "good"


@app.route('/api/admin/staff', methods=['PUT'])
@auth.login_required
def updateStaff():
    if not request.json or not db.updateStaff(request.json):
        abort(400)
    return "good"


@app.route('/api/admin/section', methods=['POST'])
@auth.login_required
def createSection():
    if not request.json or not db.createSection(request.json):
        abort(400)
    return "good"


@app.route('/api/admin/section/<sectionID>', methods=['DELETE'])
@auth.login_required
def updateSection(sectionID):
    db.deleteSection(sectionID)
    return "good"


@app.route('/api/admin/files', methods=['POST'])
@auth.login_required
def file():
    filename = db.saveFile(request.files['file'])
    if filename is not None:
        return filename
    return "bad"


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
