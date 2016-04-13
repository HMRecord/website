function getNWords(input, n) {
	var returnVal = input.split(/\s+/).slice(0,n).join(" ");
	if (returnVal.length < input.length) {
		while (!returnVal.charAt(returnVal.length-1).match(/[a-z]/i)) {
			returnVal = returnVal.substring(0,returnVal.length-1);
		} returnVal += "...";
	}
	return returnVal;
}

function getQuery() {
	return decodeURIComponent(window.location.href.split('?')[1]);
}

function getStaffLink(staff) {
	var staffString = '';
	if (staff.constructor === Array) {
		staff.forEach(function(iStaff){
			staffString += getStaffLink(iStaff) + ", ";
		});
		staffString = staffString.substring(0, staffString.length-2);
	} else {
		staffString = '<a href="staff.php?' + staff.id + '">' + staff.name.toUpperCase() + '</a>';
	}

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
