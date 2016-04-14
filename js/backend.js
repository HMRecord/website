var API_URL = "http://"+window.location.hostname+":5000/api/";
var ARTICLE_URL = API_URL+"article";
var SECTION_URL = API_URL+"section";
var STAFF_URL = API_URL+"staff";

var getArticle = {
	ajaxCall: function(params, callback) {
		$.ajax({
			url: ARTICLE_URL,
			data: params,
			success: function(result) {
        		callback($.parseJSON(result));
    		},
			error: function() {
				callback([]);
			}
		});
	},
	all: function(callback) {
		this.ajaxCall({}, callback)
	},
	bySection: function(sectionID, callback) {
		this.ajaxCall({sectionID: sectionID}, callback);
	},
	byID: function(articleID) {
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
	login: function(pass) {
		password = pass;
		return "good";
	},
	newStaff: function(name,position) {
		return "good";
	},
	editStaff: function(name,position) {
		return "good";
	},
	uploadArticle: function(title,writer,section,imageid,imagecredit,file) {
		return "good";
	},
	deleteArticle: function(articleID) {
		return "good";
	},
	deleteSection: function(section) {
		return "good";
	},
	addSection: function(section) {
		return "good";
	},
	uploadImages: function(images) {
		return "good";
	},
	uploadIssues: function(issues) {
		return "good";
	}
};
