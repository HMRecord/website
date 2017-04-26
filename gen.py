import xml.etree.ElementTree
import bs4
import os
import os.path
import urllib.parse
import shutil 
import re

def fileToInt(filename):
    return int(re.search(r'\d+', filename).group()) 

DATA_PATH = "data"
ARTICLE_PATH = "articles"
ARTICLE_TEMPLATE = os.path.join("templates", "article.php")
dataFiles = [f for f in os.listdir(DATA_PATH) if os.path.isfile(os.path.join(DATA_PATH, f))]
topIssue = max([fileToInt(a) for a in dataFiles])
for f in dataFiles:
    issueNum = fileToInt(f)
    
    rootData = xml.etree.ElementTree.parse('data/16.xml').getroot()
    for articleData in rootData.findall('article'):
        soup = bs4.BeautifulSoup(open(ARTICLE_TEMPLATE, "r").read(), "lxml") 
        soup.find(id="title").string = articleData.find("title").text
        soup.find(id="author").string = articleData.find("author").text
        soup.find(id="content").string = articleData.find("body").text

        newFile =  os.path.join(ARTICLE_PATH, urllib.parse.quote_plus(articleData.find("title").text.strip())+".html")
        open(newFile, "w").write(str(soup))
