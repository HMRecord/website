import os
import main
import unittest
import tempfile
from bson.json_util import loads, dumps
from pymongo import MongoClient

INVALID_ARTICLE = {"title": "B", "content": "afds", "sectionID": "23", "authorIDs": ["69"], "date": "Blah"}

STAFF = {"name": "Michael Truell", "position": "CTO"}
SECTION = {"title": "Sports"}


def getValidArticle(db):
    staffs = [a for a in db.staff.find(STAFF)]
    sections = [a for a in db.section.find(SECTION)]

    if len(staffs) == 0:
        db.staff.insert_one(STAFF)
        staffs = [a for a in db.staff.find(STAFF)]
    if len(sections) == 0:
        db.section.insert_one(SECTION)
        sections = [a for a in db.section.find(SECTION)]

    sectionID = sections[0]['_id']
    staffID = staffs[0]['_id']
    return {"title": "Article Title", "content": "Article content goes here.", "date": "May 28, 2016", "sectionID": sectionID, "authorIDs": [staffID]}


class PublicAPITester(unittest.TestCase):

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

    def testEmptyDB(self):
        endpoints = ['article', 'staff', 'section']
        for endpoint in endpoints:
            assert '[]' in str(self.app.get('/api/'+endpoint).data)

    def testInvalidArticle(self):
        '''
        Test that if we insert an article with invalid section and authorIDs,
        our article endpoint does not return that article
        '''

        self.db.article.insert_one(INVALID_ARTICLE)
        assert '[]' == self.app.get('/api/article').data.decode("utf-8")

    def testValidArticle(self):
        validArticle = getValidArticle(self.db)
        self.db.article.insert_one(validArticle)

        returnedString = self.app.get('/api/article').data.decode("utf-8")
        print("Returned string: " + returnedString)
        print("Original article: " + dumps(validArticle))
        returnedArticle = loads(returnedString)[0]

        for field in list(returnedArticle.keys())+list(validArticle.keys()):
            print("field: " + str(field))
            if field not in ['_id', 'section', 'authors']:
                assert validArticle[field] == returnedArticle[field]

    def testStaff(self):
        self.db.staff.insert_one(STAFF)
        returnedStaff = loads(self.app.get('/api/staff').data.decode("utf-8"))[0]
        for field in list(returnedStaff.keys())+list(STAFF.keys()):
            print("field: " + str(field))
            if field is not '_id':
                assert STAFF[field] == returnedStaff[field]

    def testSection(self):
        self.db.section.insert_one(SECTION)
        returnedSection = loads(self.app.get('/api/section').data.decode("utf-8"))[0]
        for field in list(returnedSection.keys())+list(SECTION.keys()):
            print("field: " + str(field))
            if field is not '_id':
                assert SECTION[field] == returnedSection[field]


if __name__ == '__main__':
    unittest.main()
