import os
import main
import unittest
import tempfile
import json
from pymongo import MongoClient

INVALID_ARTICLE = {"title": "B", "content": "afds", "sectionID": "23", "authorIDs": ["69"], "date": "Blah"}

STAFF = {"name": "Michael Truell", "position": "CTO"}
SECTION = {"title": "Sports"}


def getValidArticle(db):
    db.staff.insert_one(STAFF)
    db.section.insert_one(SECTION)

    sectionID = db.section.find(SECTION)['_id']
    staffID = db.staff.find(STAFF)['_id']
    return db.article.insert_one({"title": "Article Title", "content": "Article content goes here.", "date": "May 28, 2016", "sectionID": sectionID, "authorIDs": [staffID]})



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
        pass


if __name__ == '__main__':
    unittest.main()
