from pymongo import MongoClient
from bson.objectid import ObjectId
from werkzeug import secure_filename
import os

client = MongoClient()
db = client.record

UPLOAD_FOLDER = "../storage"

REQUIRED_ARTICLE_FIELDS = ['title', 'content', 'sectionID']
REQUIRED_STAFF_FIELDS = ['name', 'position']
REQUIRED_SECTION_FIELDS = ['title']


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


def createArticle(article):
    if all(a in article for a in REQUIRED_ARTICLE_FIELDS) is False:
        return False
    else:
        db.article.insert_one(article)
        return True


def updateArticle(article):
    if all(a in article for a in ['_id'] + REQUIRED_ARTICLE_FIELDS) is False:
        return False
    else:
        db.article.insert_one(article)
        return True


def deleteArticle(_id):
    db.article.remove({'_id': ObjectId(_id)})


def getStaffs(query):
    staffs = [a for a in db.staff.find(query)]
    return staffs


def createStaff(newStaff):
    if all(a in newStaff for a in REQUIRED_STAFF_FIELDS) is False:
        return False
    else:
        db.staff.insert_one(newStaff)
        return True


def updateStaff(newStaff):
    if all(a in newStaff for a in ['_id'] + REQUIRED_STAFF_FIELDS) is False:
        return False
    else:
        db.staff.update({'_id': ObjectId(newStaff._id)}, newStaff)
        return True


def getSections(query):
    sections = [a for a in db.section.find(query)]
    return sections


def createSection(section):
    if all(a in section for a in REQUIRED_SECTION_FIELDS) is False:
        return False
    else:
        db.section.insert_one(section)
        return True


def deleteSection(_id):
    db.section.remove({'_id': ObjectId(_id)})


def saveFile(file):
    def allowed_file(filename):
        return '.' in filename and \
           filename.rsplit('.', 1)[1] == 'jpg'

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(UPLOAD_FOLDER, filename))
        return filename
    else:
        return None
