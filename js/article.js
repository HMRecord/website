function renderArticle(article) {
	document.title = "HM Record: " + article.title;

	$("#title").text(article.title);
	$("#author").html('<h4 id="author">by <a href="author.php?"'
					+ article.author.id + '">' + article.author.name
					+ '</a>');
	$("#date").text(article.date);

	var paragraphs = article.content.split("\n");
	var contentString = "";

	paragraphs.forEach(function(paragraph) {
		contentString += "<p>" + paragraph + "</p>";
	});

	$("#content").html(contentString);
}

$(document).ready(function() {
	var id = decodeURIComponent(window.location.href.split('?')[1]);
	renderArticle(getArticle.byID(id));
});
