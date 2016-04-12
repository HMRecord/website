function getStaffLink(staff) {
	var staffString = '';
	if (staff.constructor === Array) {
		staff.forEach(function(iStaff){
			staffString += getStaffLink(iStaff) + ", ";
		});
		staffString = staffString.substring(0, staffString.length-2);
	} else staffString = '<a href="staff.php?' + staff.id + '">'
					   + staff.name.toUpperCase() + '</a>';

	return staffString;
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
