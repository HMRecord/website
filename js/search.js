function renderArticles(articles) {
	var string = "";

	articles.forEach(function(article) {
		string += '<div class="article"><div class="title"><a href="article/';
				+ encodeURIComponent(article.title) + '">' + article.title;
				+ '</a></div><div class="author">By <a href="author/';
				+ encodeURIComponent(article.author) + '">' + article.author;
				+ '</a></div><div class="content">' + article.content + '</div></div>';
	});

	$("#articleBox").html(string);
}

$(document).ready(function() {
	var query = decodeURIComponent(window.location.href.split('?')[1]);
	$("#headerQuery").text(query);
	var results = fetchArticlesFromQuery(query);
	renderArticles(results);
});
