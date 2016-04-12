var password = "";

function passResponse(good, header, contents) {
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
			passResponse(true,"Login succesful.","Admin access enabled.");
			password = pass;
		} else passResponse(false, "Incorrect password.","Please try again.");
	});
});
