function renderArticles(articles) {
	var string = "";

	articles.forEach(function(article) {
		string += '<div class="article"><div class="title"><a href="article.php?';
		string += article.id + '">' + article.title + '</a></div><div class="author">';
		string += 'by ' + getStaffLink(article.author) + '</div><div class="content">';
		string += getNWords(article.content,30) + '</div></div>';
	});

	$("#articleBox").html(string);
}

$(document).ready(function() {
	var query = getQuery();
	$("#headerQuery").text(query);
	var results = getArticle.byQuery(query);
	renderArticles(results);
});
