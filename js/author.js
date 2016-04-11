function renderArticles(articles) {
	var string = "";

	articles.forEach(function(article) {
		string += '<div class="article"><div class="title"><a href="article.php?'
				+ encodeURIComponent(article.id) + '">' + article.title
				+ '</a></div><div class="content">' + article.content + '</div></div>';
	});

	$("#articleBox").html(string);
}


function renderAuthor(author) {
	document.title = "HM Record: " + author.name;

	$("#name").text(author.name);
	$("#position").text(author.position);

	renderArticles(getArticle.byAuthor(author.id));
}

$(document).ready(function() {
	var id = decodeURIComponent(window.location.href.split('?')[1]);
	renderAuthor(getAuthor.byID(id));
});
