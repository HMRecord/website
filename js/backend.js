var getArticle = {
	byID: function(id) {
		var article = {
			id:555,
			title:"The Spirit of Triumph",
			author: getAuthor.byID(69),
			date:"May 7, 2018",
			content:"Hello World."
		};

		return article;
	},
	byQuery: function(query) {
		return [this.byID(69),this.byID(69)];
	},
	byAuthor: function(authorID) {
		return [this.byID(69),this.byID(69)];
	}
}

var getAuthor = {
	byID: function(id) {
		var author = {
			id:69,
			name:"Donald Trump",
			position:"Editor in Chief"
		};

		return author;
	}
}
