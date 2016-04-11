var getArticle = {
	byID: function(id) {
		var article = {
			id:555,
			title:"The Spirit of Triumph",
			author: {
				id:69,
				name:"Donald Trump"
			},
			date:"May 7, 2018",
			content:"Hello World."
		};

		return article;
	},
	byQuery: function(query) {
		return ["hello","world"];
	},
	byAuthor: function(authorID) {
		return ["hello","world"];
	}
}

var getAuthor = {
	byID: function(id) {
		var author = {
			id:69,
			name:"Donald Trump"
		};

		return author;
	}
}
