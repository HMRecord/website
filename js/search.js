function renderArticles(articles) {
	var string = "";

	articles.forEach(function(article) {
		string += '<div class="article"><div class="title"><a href="article.php?'
				+ article.id + '">' + article.title + '</a></div><div class="author">'
				+ 'By ' + getStaffLink(article.author) + '</div><div class="content">' + article.content + '</div></div>';
	});

	$("#articleBox").html(string);
}

$(document).ready(function() {
	var query = decodeURIComponent(window.location.href.split('?')[1]);
	$("#headerQuery").text(query);
	var results = getArticle.byQuery(query);
	renderArticles(results);
});
