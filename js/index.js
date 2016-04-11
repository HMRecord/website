$(document).ready(function() {
	$("#searchBtn").click(function() {
		var query = $("#searchField").val();
		if (query !== "") {
			window.location.href = "search.php?" + encodeURIComponent(query);
		}
	});
});
