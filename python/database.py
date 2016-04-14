from pymongo import MongoClient
from bson.objectid import ObjectId

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


def createStaff(newStaff):
    if all(a in newStaff for a in ['name', 'position']) is False:
        return False
    else:
        db.staff.insert_one(newStaff)
        return True


def updateStaff(newStaff):
    if all(a in newStaff for a in ['_id', 'name', 'position']) is False:
        return False
    else:
        db.staff.update({'_id': ObjectId(newStaff._id)}, newStaff)
        return True
