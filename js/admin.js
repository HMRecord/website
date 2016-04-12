var password = "";

function passResponse(ok) {
	var string = '<div class="alert alert-' + (ok?'success':'danger') + ' alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>' + (ok?'Login succesful.</strong>  Administrator access enabled.':'Incorrect password.</strong>  Please try again.')+'</div>';
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
			passResponse(true);
			password = pass;
		} else passResponse(false);
	});
});
