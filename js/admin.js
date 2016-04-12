var password = "";

function bootAlert(good, header, contents) {
	var string = '<div class="alert alert-' + (good?'success':'danger') + ' alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>' + header + '</strong> ' + contents + '</div>';
	$("#alertBox").html(string);
}

$(document).ready(function() {
	$('#passField').keypress(function(e) {
		if (e.which == 13) {
			$('#passBtn').click();
			return false;
		}
	});

	$("#passBtn").click(function() {
		var pass = $("#passField").val();
		if (admin.verifyPass(pass) === "good") {
			$("#adminBox").css("display","block");
			$("#loginBox").css("display","none");
			bootAlert(true,"Login succesful.","Admin access enabled.");
			password = pass;
		} else bootAlert(false, "Incorrect password.","Please try again.");
	});

	$("#newStaffBtn").click(function() {
		var name = $("#newStaffName").val();
		var position = $("#newStaffPosition").val();

		if (name !== "" && position !== "") {
			if (admin.newStaff(name,position,password) === "good") bootAlert(true,"Staff registration succesful.","Welcome, "+name+".");
			else bootAlert(false,"Uh oh.","Something unexpected happened.");
		} else bootAlert(false,"Blank fields.","Please check all fields are filled in.");
	})
});
