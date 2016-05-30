function compareWithSharedKeys(obj1, obj2) {
  for(name in obj1) {
    if(obj2.hasOwnProperty(name) && name != "_id" && obj1[name] !== obj2[name]) {
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
  assert.ok(compareWithSharedKeys(getStaff.byID(staff._id), staff));
});

QUnit.test("Section", function( assert ) {
  var section = {
    title: "Sports"
  }

  admin.login(adminConfig.password)

  //console.log(admin.addSection(section))
  assert.ok(admin.addSection(section) === 'good');

  var returnedSection = getSection.byTitle(section.title);
  assert.ok(compareWithSharedKeys(section, returnedSection));
  assert.ok(admin.deleteSection(returnedSection._id.$oid) === 'good');
});
