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
		if (admin.login(pass) === "good") {
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
			if (admin.newStaff(name,position) === "good") {
				bootAlert(true,"Staff registration succesful.","Welcome, "+name+".");
				$("#newStaffName").val("");
				$("#newStaffPosition").val("");
			}
			else bootAlert(false,"Uh oh.","Something unexpected happened.");
		} else bootAlert(false,"Blank fields.","Please check all fields are filled in.");
	});

	$("#editStaffBtn").click(function() {
		var name = $("#editStaffName").val();
		var position = $("#editStaffPosition").val();

		if (name !== "" && position !== "") {
			if (admin.editStaff(name,position) === "good") {
				bootAlert(true,"Staff position change succesful.","Congrats, "+name+".");
				$("#editStaffName").val("");
				$("#editStaffPosition").val("");
			} else bootAlert(false,"Uh oh.","Something unexpected happened.");
		} else bootAlert(false,"Blank fields.","Please check all fields are filled in.");
	});

	$("#newArticleBtn").click(function() {
		var title = $("#newArticleTitle").val();
		var writer = $("#newArticleWriter").val();
		var section = $("#newArticleSection").val();
		var imageid = $("#newArticleImageID").val();
		var imagecredit = $("#newArticleImageCredit").val();
		var file = $("#newArticleUpload")[0].files[0];


		if (title !== "" && writer !== "" && section !== "" && file != null) {
			var upload = admin.uploadArticle(title,writer,section,imageid,imagecredit,file);
			if (upload !== "good") {
				bootAlert(false, "Upload error.", upload);
			} else {
				bootAlert(false, "Upload succesful.", "New article added.")
				$("#newArticleUpload").filestyle('clear');
				$("#newArticleTitle").val("");
				$("#newArticleWriter").val("");
				$("#newArticleImageID").val("");
				$("#newArticleImageCredit").val("");
				$("#newArticleSection").val("");
			}
		} else bootAlert(false, "Incomplete fields.", "Please check all required fields.");
	});

	$("#deleteArticleBtn").click(function() {
		var id = $("#deleteArticleID").val();
		if (id !== "") {
			var status = admin.deleteArticle(id);
			if (status === "good") {
				bootAlert(true,"Article deleted.","Byebye Article "+id+"...");
				$("#deleteArticleID").val("");
			} else bootAlert(false, "Uh oh.", status);
		} else bootAlert(false, "Incomplete fields.", "Please check all required fields.");
	});

	$("#sectionBtn").click(function() {
		var option = $('input[name=sectionRadio]:checked', '#sectionRadio').val();
		var section = $("#sectionName").val();

		if (section === "" || option == null) {
			bootAlert(false,"Incomplete fields.", "Please check all required fields.");
			return;
		}

		if (option === "add") {
			var response = admin.addSection(section);
			if (response === "good") {
				bootAlert(true, "Addition succesful.", "Section \""+section+"\" added.");
			} else bootAlert(false, "Addition failed.", response);
		} else {
			var response = admin.deleteSection(section);
			if (response === "good") {
				bootAlert(true, "Deletion succesful.", "Section \""+section+"\" deleted.");
			} else bootAlert(false, "Deletion failed.", response);
		}
	});

	$("#imageUploadBtn").click(function() {
		var files = $("#imageUpload")[0].files;

		if (files.length < 1) {
			bootAlert(false,"No files selected.", "Please select an image for upload.");
			return;
		}

		var response = admin.uploadImages(files);
		if (response.substring(0, 5) === "good: ") {
			$("#newArticleUpload").filestyle('clear');
			bootAlert(true, "Upload succesful.", "ID" + (files.length==1?" is ":"s are ") + response.substring(5, response.length));
		} else bootAlert(false, "Upload failed.", response);
	});

	$("#issueUploadBtn").click(function() {
		var files = $("issueUpload")[0].files;

		if (files.length < 1) {
			bootAlert(false,"No files selected.", "Please select an image for upload.");
			return;
		}

		var response = admin.uploadIssues(files);
		if (response === "good") {
			bootAlert(true, "Upload" + (files.length==1?"":"s") + " succesful.", "");
		} else bootAlert(false, "Upload failed.", response);
	});


});
