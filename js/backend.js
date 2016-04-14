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
	byStaff: function(authorID) {
		this.ajaxCall({authorID: authorID}, callback);
	}
};

var getStaff = {
	ajaxCall: function(params) {
		return $.ajax({
			url: STAFF_URL,
			data: params
		}).responseJSON;
	},
	byID: function(id) {
		return this.ajaxCall({staffID: id});
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

var article2 = {
	id:555,
	title:"Sarah Palin Announces Bid for Vice Presidency",
	author: getStaff.byID(69),
	date:"May 12, 2018",
	content:"Lorem ipsum dolor sit amet, has cu justo quaerendum delicatissimi, ad nec illum tamquam. \n<pic id='1234' credit='Donald Trump' desc='The notorious truellmeister in its natural habitat.' />\nEt consul eligendi qui, ius ut quis doming percipit, vel et meis praesent. His graecis blandit eu, nam te sententiae temporibus, sea nullam tritani indoctum ea.\n<pic id='1234' credit='Donald Trump' desc='A cat in its natural habitat.' />\n Ne labore scripta vel, cu cum recteque reprimique delicatissimi. Mel inani integre intellegebat ne, eam quod democritum ei, an summo torquatos vix. Vix te eruditi feugait adipiscing, dictas inciderint no quo.",
	img:{
		url:"http://media.salon.com/2010/02/palin_at_tpn_inc-1280x960.jpg",
		staff: getStaff.byID(96),
		caption: "The rogue candidate screaming about \"lost countries\""
	}
};

var article1 = {
	id:555,
	title:"Jesus Returns, Wins World Cup",
	author: getStaff.byID(69),
	date:"May 7, 2018",
	content:"Lorem ipsum dolor sit amet, has cu justo quaerendum delicatissimi, ad nec illum tamquam. Et consul eligendi qui, ius ut quis doming percipit, vel et meis praesent. His graecis blandit eu, nam te sententiae temporibus, sea nullam tritani indoctum ea.  Ne labore scripta vel, cu cum recteque reprimique delicatissimi. Mel inani integre intellegebat ne, eam quod democritum ei, an summo torquatos vix. Vix te eruditi feugait adipiscing, dictas inciderint no quo."
};

var article3 = {
	id:555,
	title:"Horace Mann School Wins a Football Game",
	author: getStaff.byID(69),
	date:"May 7, 2018",
	content:"Lorem ipsum dolor sit amet, has cu justo quaerendum delicatissimi, ad nec illum tamquam. Et consul eligendi qui, ius ut quis doming percipit, vel et meis praesent. His graecis blandit eu, nam te sententiae temporibus, sea nullam tritani indoctum ea. Ne labore scripta vel, cu cum recteque reprimique delicatissimi. Mel inani integre intellegebat ne, eam quod democritum ei, an summo torquatos vix. Vix te eruditi feugait adipiscing, dictas inciderint no quo."
};
