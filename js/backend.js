var getArticle = {
	bySection: function(section) {
		return [article1, article2, article3];
	},
	byID: function(id) {
		var article = {
			id:555,
			title:"The Spirit of Triumph",
			author: getStaff.byID(69),
			date:"May 7, 2018",
			content:"Hello World.",
			img:"http://static.euronews.com/articles/308145/1200x630_308145_donald-trump-says-he-s-running-for-u.jpg?1434476649",
			imgcite: getStaff.byID(96)
		}; return article;
	},
	byQuery: function(query) {
		return [this.byID(69),this.byID(69)];
	},
	byStaff: function(staffID) {
		return [this.byID(69),this.byID(69)];
	}
}

var getStaff = {
	byID: function(id) {
		var staff = {
			id:69,
			name:"Donald Trump",
			position:"Editor in Chief"
		}; return staff;
	}
}

var admin = {
	verifyPass: function(pass) {
		return "good";
	},
	newStaff: function(name,position,pass) {
		return "good";
	},
	editStaff: function(name,position,pass) {
		return "good";
	}
}

var article2 = {
	id:555,
	title:"Sarah Palin Announces Bid for Vice Presidency",
	author: getStaff.byID(69),
	date:"May 12, 2018",
	content:"Lorem ipsum dolor sit amet, has cu justo quaerendum delicatissimi, ad nec illum tamquam. Et consul eligendi qui, ius ut quis doming percipit, vel et meis praesent. His graecis blandit eu, nam te sententiae temporibus, sea nullam tritani indoctum ea. Ne labore scripta vel, cu cum recteque reprimique delicatissimi. Mel inani integre intellegebat ne, eam quod democritum ei, an summo torquatos vix. Vix te eruditi feugait adipiscing, dictas inciderint no quo.",
	img:"http://media.salon.com/2010/02/palin_at_tpn_inc-1280x960.jpg",
	imgcite: getStaff.byID(96)
};

var article1 = {
	id:555,
	title:"Jesus Returns, Wins World Cup",
	author: getStaff.byID(69),
	date:"May 7, 2018",
	content:"Lorem ipsum dolor sit amet, has cu justo quaerendum delicatissimi, ad nec illum tamquam. Et consul eligendi qui, ius ut quis doming percipit, vel et meis praesent. His graecis blandit eu, nam te sententiae temporibus, sea nullam tritani indoctum ea. Ne labore scripta vel, cu cum recteque reprimique delicatissimi. Mel inani integre intellegebat ne, eam quod democritum ei, an summo torquatos vix. Vix te eruditi feugait adipiscing, dictas inciderint no quo."
};

var article3 = {
	id:555,
	title:"Horace Mann School Wins a Football Game",
	author: getStaff.byID(69),
	date:"May 7, 2018",
	content:"Lorem ipsum dolor sit amet, has cu justo quaerendum delicatissimi, ad nec illum tamquam. Et consul eligendi qui, ius ut quis doming percipit, vel et meis praesent. His graecis blandit eu, nam te sententiae temporibus, sea nullam tritani indoctum ea. Ne labore scripta vel, cu cum recteque reprimique delicatissimi. Mel inani integre intellegebat ne, eam quod democritum ei, an summo torquatos vix. Vix te eruditi feugait adipiscing, dictas inciderint no quo."
};
