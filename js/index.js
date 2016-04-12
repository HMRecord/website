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

$(document).ready(function() {
	setDate();
});
