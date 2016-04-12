function renderArticle(article) {
	document.title = "HM Record: " + article.title;

	$("#title").text(article.title);
	$("#author").html('<h4 id="author">by <a href="staff.php?"'
					+ article.author.id + '">' + article.author.name
					+ '</a>');
	$("#date").text(article.date);

	var paragraphs = article.content.split("\n");
	var contentString = "";

	paragraphs.forEach(function(paragraph) {
		contentString += "<p>" + paragraph + "</p>";
	});

	$("#content").html(contentString);

	if (article.hasOwnProperty('img')) {
		var $img = $("#img");
		$img.css("background-image","url('" + article.img + "')");
		$img.css("background-size","100%");
		$img.css("background-position","50% 20%");
		$img.css("background-repeat","no-repeat");
		$img.css("width","100%");
		$img.css("height","300px");
		$img.css("margin-bottom","4px");

		var staff = article.imgcite;
		$("#caption").html("Image Credit: <a href='staff.php?" + staff.id
						 + "'>" + staff.name.toUpperCase() + "</a>");
	}
}

$(document).ready(function() {
	var id = decodeURIComponent(window.location.href.split('?')[1]);
	renderArticle(getArticle.byID(id));
});
