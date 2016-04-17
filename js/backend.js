var API_URL = "http://localhost:5000/api/";
var ADMIN_URL = "http://localhost:5000/api/admin/";
var ARTICLE_URL = API_URL+"article";
var SECTION_URL = API_URL+"section";
var STAFF_URL = API_URL+"staff";

var getArticle = {
  ajaxCall: function(params, callback) {
    console.log(ARTICLE_URL)
    console.log(params)
    $.ajax({
      url: ARTICLE_URL,
      cache: false,
      data: {page: "1"},
      async: true,
      success: function(result) {
        callback($.parseJSON(result));
      },
      error: function(xhr, status, error) {
        console.log(xhr)
        console.log(status)
        console.log(error)
        callback([]);
      }
    }).done(function(){
      console.log("done")
    }).fail(function(){
      console.log("fail")
    }).always(function(){
      console.log("all")
    });
    console.log("Done with request")
  },
  all: function(page, callback) {
    this.ajaxCall({page: page}, callback)
  },
  bySection: function(page, sectionID, callback) {
    this.ajaxCall({page: page, sectionID: sectionID}, callback);
  },
  byID: function(articleID, callback) {
    this.ajaxCall({articleID: articleID}, function(articleArray) {
      if(articleArray.length == 0) callback(null);
      else callback(articleArray[0]);
    });
  },
  byQuery: function(query) {
    return [this.byID(69),this.byID(69)];
  },
  byStaff: function(authorID, callback) {
    this.ajaxCall({authorID: authorID}, callback);
  }
};

var getStaff = {
  ajaxCall: function(params) {
    return $.parseJSON($.ajax({
      url: STAFF_URL,
      data: params,
      async: false
    }).responseText);
  },
  byID: function(id) {
    return this.ajaxCall({staffID: id})[0];
  },
  byName: function(id) {
    return this.byID(69);
  }
};

var admin = {
  password: "",
  ajaxCall: function(endpoint, method, params) {
    return $.ajax({
      url: ADMIN_URL+endpoint,
      data: JSON.stringify(params),
      contentType: "application/json",
      headers: {
        "Authorization": "Basic " + btoa("admin:" + this.password)
      },
      method: method,
      async: false
    });
  },
  login: function(pass) {
    this.password = pass;
    return "good";
  },
  newStaff: function(name,position) {
    console.log("new staff")
    return this.ajaxCall("staff", 'POST', {name: name, position: position});
  },
  editStaff: function(name,position) {
    return this.ajaxCall("staff", 'PUT', {name: name, position: position});
  },
  uploadArticle: function(title,writer,section,imageid,imagecredit,file) {
    return this.ajaxCall("article", 'POST', {
      title: title,
      writer: writer,
      section: section,
      imageid: imageid,
      imagecredit: imagecredit,
      file: file
    });
  },
  deleteArticle: function(articleID) {
    return this.ajaxCall("article/"+articleID, 'DELETE', {});
  },
  deleteSection: function(section) {
    return this.ajaxCall("section/"+articleID, 'DELETE', {});
  },
  addSection: function(section) {
    return this.ajaxCall("article/"+articleID, 'POST', {title: section});
  },
  uploadImages: function(images) {
    return "good";
  },
  uploadIssues: function(issues) {
    return "good";
  }
};

function getArchives(callback) {
	callback(["Fall2015","Spring2016"]);
}
