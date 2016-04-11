var getArticle = {
	byID: function(id) {
		var article = {id:555,
					   title:"The Spirit of Triumph",
				       author:{id:69,name:"Donald Trump"},
				   	   date:"May 7, 2018",
				   	   content:"Hello World."};

		return article;
	},
	byQuery: function(query) {
		return ["hello","world"];
	},
	byAuthor: function(author) {
		return ["hello","world"];
	}
}
