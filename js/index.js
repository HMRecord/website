function setDate() {
	var monthNames = [
		"January", "February", "March",
		"April", "May", "June", "July",
		"August", "September", "October",
		"November", "December"
	];

	var date = new Date();
	var day = date.getDate();
	var monthIndex = date.getMonth();
	var year = date.getFullYear();

	$("#headerDate").text(monthNames[monthIndex] + " " + day + ", " + year);
}

function stringifyArticle(article) {
	var string = "<div class='article'>";
	if (article.hasOwnProperty('img')) {
		string += "<div class='image' style=\'background-image: url(\"" + article.img.url + "\");\'></div>";
	}

	string += "<div class='heading'><a href='article.php?";
	string += article.id + "'>" + article.title;
	string += "</a></div><div class='author'>by ";
	string += getStaffLink(article.author);
	string += "</div><div class='content'>";
	string += getNWords(article.content,50) + "</div></div>";
	return string;
}

function populateArticles(articles) {
	var left = "", middle = "", right = "";

	for (var i=1; i<=articles.length; i++) {
		if (i%3 == 1) left += stringifyArticle(articles[i-1]);
		else if (i%3 == 2) middle += stringifyArticle(articles[i-1]);
		else right += stringifyArticle(articles[i-1]);
	}

	$("#leftColumn").html(left);
	$("#middleColumn").html(middle);
	$("#rightColumn").html(right);
}

$(document).ready(function() {
	var section = getQuery();
	if (["opinions","news","sports"].indexOf(section) < 0) {
		getArticle.all(function(articles) {
			populateArticles(articles);
		});
	}
	else {
		getArticle.bySection(section, function(articles) {
			populateArticles(articles);
		});
	}

	setDate();
});
