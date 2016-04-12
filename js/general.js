function getStaffLink(staff) {
	return '<a href="staff.php?' + staff.id + '">'
		 + staff.name.toUpperCase() + '</a>';
}

$(document).ready(function() {
	$('#searchField').keypress(function(e) {
		if (e.which == 13) {
			$('#searchBtn').click();
			return false;
		}
	});

	$("#searchBtn").click(function() {
		var query = $("#searchField").val();
		if (query !== "") {
			window.location.href = "search.php?" + encodeURIComponent(query);
		}
	});
});
