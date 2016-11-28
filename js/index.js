var lastArticleID = null;
var section = "";

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
	string += article._id.$oid + "'>" + article.title;
	string += "</a></div><div class='author'>by ";
	string += getStaffLink(article.staffs);
	string += "</div><div class='content'>";
	string += getNWords(article.content,50) + "</div></div>";
	return string;
}

function populateArticles(articles,append) {
	var left = "", middle = "", right = "";

	for (var i=1; i<=articles.length; i++) {
		if (i%3 == 1) left += stringifyArticle(articles[i-1]);
		else if (i%3 == 2) middle += stringifyArticle(articles[i-1]);
		else right += stringifyArticle(articles[i-1]);
	}

	lastArticleID = articles[articles.length-1]['_id'];

	if (append) {
		$("#leftColumn").append(left);
		$("#middleColumn").append(middle);
		$("#rightColumn").append(right);
	} else {
		$("#leftColumn").html(left);
		$("#middleColumn").html(middle);
		$("#rightColumn").html(right);
	}
}

function refreshArticles(append) {
	if (section === null || ["opinions","news","sports"].indexOf(section) < 0) {
		console.log("Get all")
		getArticle.all(lastArticleID, articles,function(articles) {
			populateArticles(articles,append);
		});
	}
	else {
		console.log("get section")
		getArticle.bySection(lastArticleID, articles,function(articles) {
			populateArticles(articles,append);
		});
	}
	console.log("Done refreshing articles")
}

$(document).ready(function() {
	section = getQuery();
	console.log("WUT");
	console.log("SECTION: " + section);
	refreshArticles(false);

	/*$("#loadMoreBtn").click(function(e) {
		e.preventDefault();
		page += 1;
		refreshArticles(true);
	});*/

	//setDate();
});
