import os
import main
import unittest
import tempfile
from bson.json_util import loads, dumps
from pymongo import MongoClient
import base64
import copy

INVALID_ARTICLE = {"title": "B", "content": "afds", "sectionID": "23", "authorIDs": ["69"], "date": "Blah"}

STAFF = {"name": "Michael Truell", "position": "CTO"}
SECTION = {"title": "Sports"}

CORRECT_USERNAME = "admin"
CORRECT_PASSWORD = "d"


def getValidArticle(db):
    staffs = [a for a in db.staff.find(STAFF)]
    sections = [a for a in db.section.find(SECTION)]

    if len(staffs) == 0:
        db.staff.insert_one(copy.deepcopy(STAFF))
        staffs = [a for a in db.staff.find(STAFF)]
    if len(sections) == 0:
        db.section.insert_one(copy.deepcopy(SECTION))
        sections = [a for a in db.section.find(SECTION)]

    sectionID = sections[0]['_id']
    staffID = staffs[0]['_id']
    return {"title": "Article Title", "content": "Article content goes here.", "date": "May 28, 2016", "sectionID": sectionID, "authorIDs": [staffID]}


def getAuthHeader(username, password):
    return {"Authorization": "Basic "+base64.b64encode((username+":"+password).encode("utf-8")).decode("utf-8")}


class APITester(unittest.TestCase):

    def setUp(self):
        client = MongoClient()
        client.drop_database("testRecord")
        self.db = client.testRecord
        main.initDB(self.db)

        self.db_fd, main.app.config['DATABASE'] = tempfile.mkstemp()
        main.app.config['TESTING'] = True
        self.app = main.app.test_client()

    def tearDown(self):
        os.close(self.db_fd)
        os.unlink(main.app.config['DATABASE'])

    def queryGET(self, endpointName, data={}):
        request = self.app.get(endpointName, data=data)
        return request.data.decode("utf-8")

    def queryPOST(self, endpointName, data={}):
        header = getAuthHeader(CORRECT_USERNAME, CORRECT_PASSWORD)
        contentType = 'application/json'
        request = self.app.post(endpointName, data=dumps(data), content_type=contentType, headers=header)
        return request.data.decode("utf-8")

    def testEmptyDB(self):
        endpoints = ['article', 'staff', 'section']
        for endpoint in endpoints:
            assert '[]' in str(self.app.get('/api/'+endpoint).data)

    def testGETInvalidArticle(self):
        self.db.article.insert_one(copy.deepcopy(INVALID_ARTICLE))
        assert '[]' == self.queryGET('/api/article')

    def testGETValidArticle(self):
        def isSameAricle(article1, article2):
            for field in list(article1.keys())+list(article2.keys()):
                if field not in ['_id', 'section', 'authors']:
                    if article1[field] != article2[field]:
                        return False
            return True

        validArticle = getValidArticle(self.db)
        self.db.article.insert_one(validArticle)

        returnedArticle = loads(self.queryGET('/api/article'))[0]
        assert isSameAricle(validArticle, returnedArticle)

        returnedArticle = loads(self.queryGET('/api/article', data={"sectionID": validArticle['sectionID']}))[0]
        assert isSameAricle(validArticle, returnedArticle)

        returnedArticle = loads(self.queryGET('/api/article', data={"title": validArticle['title']}))[0]
        assert isSameAricle(validArticle, returnedArticle)

    def testPOSTArticle(self):
        # Should fail with bad object ids
        try:
            self.queryPOST("/api/admin/article", data=INVALID_ARTICLE)
            assert False
        except:
            pass

        # Should store data and return good when given valid article
        assert self.queryPOST("/api/admin/article", data=getValidArticle(self.db)) == 'good'
        assert self.db.article.find_one(getValidArticle(self.db)) is not None

    def testGETStaff(self):
        def isSameStaff(staff1, staff2):
            for field in list(staff1.keys())+list(staff2.keys()):
                if field != '_id':
                    if staff1[field] != staff2[field]:
                        return False
            return True

        modifiableStaff = copy.deepcopy(STAFF)
        self.db.staff.insert_one(modifiableStaff)

        assert isSameStaff(STAFF, loads(self.queryGET('/api/staff'))[0])
        print("id")
        print(self.queryGET('/api/staff', data={"staffID": str(modifiableStaff['_id'])}))
        assert isSameStaff(STAFF, loads(self.queryGET('/api/staff', data={"staffID": str(modifiableStaff['_id'])}))[0])
        assert isSameStaff(STAFF, loads(self.queryGET('/api/staff', data={"name": STAFF['name']}))[0])

    def testPOSTStaff(self):
        assert self.queryPOST("/api/admin/staff", data=STAFF) == 'good'
        assert self.db.staff.find_one(STAFF) is not None

    def testGETSection(self):
        self.db.section.insert_one(copy.deepcopy(SECTION))
        returnedSection = loads(self.queryGET('/api/section'))[0]
        for field in list(returnedSection.keys())+list(SECTION.keys()):
            if field != '_id':
                assert SECTION[field] == returnedSection[field]

    def testPOSTSection(self):
        assert self.queryPOST("/api/admin/section", data=SECTION) == 'good'
        assert self.db.section.find_one(SECTION) is not None

    def testAdminAccess(self):
        def request(username, password):
            headers = getAuthHeader(username, password)
            return self.app.post("/api/admin/article", headers=headers).data.decode("utf-8")

        assert request(CORRECT_USERNAME, CORRECT_PASSWORD) == 'Bad request'
        assert request(CORRECT_USERNAME, "wrong") == 'Unauthorized access'
        assert request("wrong", CORRECT_PASSWORD) == 'Unauthorized access'

if __name__ == '__main__':
    unittest.main()
