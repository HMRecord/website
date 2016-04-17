from functools import wraps
from flask import Blueprint, jsonify, request, abort, request, Response, make_response
from flask.ext.httpauth import HTTPBasicAuth
from bson.json_util import loads, dumps
import database as db

adminAPI = Blueprint('adminAPI', __name__)

auth = HTTPBasicAuth()


def checkAuth(username, password):
    return username == 'admin' and password == 'd'


def authenticate():
    return Response('Unauthorized access', 401, {'WWW-Authenticate': 'Basic realm="Login Required"'})

def requiresAuth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        auth = request.authorization
        if not auth or not checkAuth(auth.username, auth.password):
            return authenticate()
        return f(*args, **kwargs)
    return decorated


@adminAPI.errorhandler(400)
def bad_request(error):
    return make_response('Bad request', 400)


@adminAPI.errorhandler(404)
def not_found(error):
    return make_response('Not found', 404)


@adminAPI.route('/api/admin/article', methods=['POST'])
@requiresAuth
def createArticle():
    if not request.json or not db.createArticle(loads(dumps(request.json))):
        abort(400)
    return "good"


@adminAPI.route('/api/admin/article/<articleID>', methods=['DELETE'])
@requiresAuth
def updateArticle(articleID):
    db.deleteArticle(articleID)
    return "good"


@adminAPI.route('/api/admin/staff', methods=['POST'])
@requiresAuth
def createStaff():
    print("first")
    print(request.json)
    if not request.json or not db.createStaff(request.json):
        abort(400)
    return "good"


@adminAPI.route('/api/admin/staff', methods=['PUT'])
@requiresAuth
def updateStaff():
    if not request.json or not db.updateStaff(request.json):
        abort(400)
    return "good"


@adminAPI.route('/api/admin/section', methods=['POST'])
@requiresAuth
def createSection():
    if not request.json or not db.createSection(request.json):
        abort(400)
    return "good"


@adminAPI.route('/api/admin/section/<sectionID>', methods=['DELETE'])
@requiresAuth
def updateSection(sectionID):
    db.deleteSection(sectionID)
    return "good"


@adminAPI.route('/api/admin/file', methods=['POST'])
@requiresAuth
def file():
    filename = db.saveFile(request.files['file'])
    if filename is not None:
        return filename
    return "bad"
