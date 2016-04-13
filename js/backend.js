function imageHTML(id,credit,desc) {
	var staff = getStaff.byName(credit);
	return "<div class='img'><img src='img/"+id+".jpg'><div class='row caption'><div class='col-xs-8 desc'>"+(desc != null ? desc : "")+"</div><div class='col-xs-4 credit'>Image Credit: <a href='staff.php?"+staff.id+"'>"+staff.name.toUpperCase()+"</a></div></div></div>";
}

function articleHTML(article) {
	var newLined = article.replace(/(?:\r\n|\r|\n)/g, '<br />');
	var $dom = $("<div>"+newLined+"</div>");

	console.log($dom.children("pic"))


	$dom.children("pic").each(function() {
    	$(this).replaceWith(imageHTML(
			$(this).attr("id"),
			$(this).attr("credit"),
			$(this).attr("desc")
		));
	});

	return $dom.html();
}

var getArticle = {
	bySection: function(section) {
		return [article1, article2, article3];
	},
	byID: function(id) {
		var article = article2;
		article2.content = articleHTML(article2.content);
		return article2;
	},
	byQuery: function(query) {
		return [this.byID(69),this.byID(69)];
	},
	byStaff: function(staffID) {
		return [this.byID(69),this.byID(69)];
	}
};

var getStaff = {
	byID: function(id) {
		var staff = {
			id:69,
			name:"Donald Trump",
			position:"Editor in Chief"
		}; return staff;
	},
	byName: function(id) {
		return this.byID(69);
	}
};

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
};

var article2 = {
	id:555,
	title:"Sarah Palin Announces Bid for Vice Presidency",
	author: getStaff.byID(69),
	date:"May 12, 2018",
	content:"Lorem ipsum dolor sit amet, has cu justo quaerendum delicatissimi, ad nec illum tamquam. \n<pic id='1234' credit='Donald Trump' desc='The notorious truellmeister in its natural habitat.' />\nEt consul eligendi qui, ius ut quis doming percipit, vel et meis praesent. His graecis blandit eu, nam te sententiae temporibus, sea nullam tritani indoctum ea.\n<pic id='1234' credit='Donald Trump' desc='A cat in its natural habitat.' />\n Ne labore scripta vel, cu cum recteque reprimique delicatissimi. Mel inani integre intellegebat ne, eam quod democritum ei, an summo torquatos vix. Vix te eruditi feugait adipiscing, dictas inciderint no quo.",
	img:{url:"http://media.salon.com/2010/02/palin_at_tpn_inc-1280x960.jpg",staff: getStaff.byID(96)}
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
