function renderArticles(articles) {
	var string = "";

	articles.forEach(function(article) {
		string += '<div class="article"><div class="title"><a href="article.php?';
		string += encodeURIComponent(article.id) + '">' + article.title;
		string += '</a></div><div class="content">' + article.content + '</div></div>';
	});

	$("#articleBox").html(string);
}


function renderStaff(staff) {
	document.title = "HM Record: " + staff.name;

	$("#name").text(staff.name);
	$("#position").text(staff.position);

	getArticle.byStaff(staff.id, function(articles) {
		renderArticles(articles);
	});
}

$(document).ready(function() {
	renderStaff(getStaff.byID(getQuery()));
});
