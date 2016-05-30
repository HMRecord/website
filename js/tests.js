function compareWithSharedKeys(obj1, obj2) {
  for(name in obj1) {
    if(obj2.hasOwnProperty(name) && name != "_id" && JSON.stringify(obj1[name]) !== JSON.stringify(obj2[name])) {
      console.log(name)
      console.log(obj1[name])
      console.log(obj2[name])
      return false;
    }
  }
  return true;
}

QUnit.test("Admin Login", function( assert ) {
	assert.ok(admin.login(adminConfig.password) === 'good');
  assert.ok(admin.login("ajdskfasdlj") !== 'good');
});

QUnit.test("Staff", function( assert ) {
  var staff = {
    name: "Michael",
    position: "Writer"
  }

  admin.login(adminConfig.password)

  assert.ok(admin.newStaff(staff) === 'good');

  var returnedStaff = getStaff.byName(staff.name);
  assert.ok(compareWithSharedKeys(returnedStaff, staff));

  staff = returnedStaff;
  staff.name = "John";
  assert.ok(admin.editStaff(staff) === 'good');
  assert.ok(compareWithSharedKeys(getStaff.byID(staff._id.$oid), staff));
});

QUnit.test("Section", function( assert ) {
  var section = {
    title: "Sports"
  }

  admin.login(adminConfig.password)

  assert.ok(admin.newSection(section) === 'good');

  var returnedSection = getSection.byTitle(section.title);
  assert.ok(compareWithSharedKeys(section, returnedSection));
  assert.ok(admin.deleteSection(returnedSection._id.$oid) === 'good');
});

QUnit.test("Article", function( assert ) {
  admin.login(adminConfig.password);

  var section = {title: "sports"};
  admin.newSection(section);
  section = getSection.byTitle(section.title);

  var staff = {name: "Michael Truell", position: "Contributing Writer"};
  admin.newStaff(staff);
  staff = getStaff.byName(staff.name);

  var article = {
    title: "Dummy article",
    staffIDs: [staff._id],
    sectionID: section._id,
    date: Date(),
    content: "Lorem Ipsum."
  }

  assert.ok(admin.newArticle(article) === 'good');

  getArticle.bySection(section._id.$oid, function(newArticles) {
    assert.ok(compareWithSharedKeys(newArticles[0], article));
    article = newArticles[0];


    getArticle.byID(article._id.$oid, function(newArticles) {
      assert.ok(compareWithSharedKeys(newArticles[0], article));

      getArticle.byStaff(staff._id.$oid, function(newArticles) {
        assert.ok(compareWithSharedKeys(newArticles[0], article));

        assert.ok(admin.deleteArticle(article._id.$oid) === 'good');
      });
    });
  });
});
