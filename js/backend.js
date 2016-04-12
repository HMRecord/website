var getArticle = {
	byID: function(id) {
		var article = {
			id:555,
			title:"The Spirit of Triumph",
			author: getStaff.byID(69),
			date:"May 7, 2018",
			content:"Hello World.",
			img:"http://static.euronews.com/articles/308145/1200x630_308145_donald-trump-says-he-s-running-for-u.jpg?1434476649"
		};

		return article;
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
		};

		return staff;
	}
}
