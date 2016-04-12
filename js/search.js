function renderArticles(articles) {
	var string = "";

	articles.forEach(function(article) {
		string += '<div class="article"><div class="title"><a href="article.php?'
				+ article.id + '">' + article.title + '</a></div><div class="author">'
				+ 'by ' + getStaffLink(article.author) + '</div><div class="content">' + article.content + '</div></div>';
	});

	$("#articleBox").html(string);
}

$(document).ready(function() {
	var query = getQuery();
	$("#headerQuery").text(query);
	var results = getArticle.byQuery(query);
	renderArticles(results);
});
