function getStaffLink(staff) {
	return '<a href="staff.php?' + staff.id + '">'
		 + staff.name.toUpperCase() + '</a>';
}
