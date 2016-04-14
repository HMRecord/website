<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="">
		<meta name="author" content="">
		<link rel="shortcut icon" href="img/favicon.ico" />
		<title>HM Record: Admin Portal</title>

		<link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic|Lato:400,300,700,400italic,300italic' rel='stylesheet' type='text/css'>
		<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
		<link href="css/general.css" rel="stylesheet">
		<link href="css/admin.css" rel="stylesheet">
	</head>
	<body>
		<?php include 'include/navbar.php'; ?>

		<div class="container">
			<div id="alertBox"></div>
			<div class="input-group" id="loginBox">
				<input type="password" class="form-control" placeholder="password" id="passField">
				<span class="input-group-btn">
					<button class="btn btn-default" type="button" id="passBtn">Login</button>
				</span>
			</div>
			<div id="adminBox" class="row">
				<div class="col-md-6">
					<div class="panel panel-default">
						<div class="panel-heading">
							<h3 class="panel-title">Add Staff Member</h3>
				  		</div>
				  		<div class="panel-body">
							<div class="formBox">
								<div class="form-group">
								    <label for="newStaffName" class="col-sm-2 control-label">Name</label>
								    <div class="col-sm-10">
										<input type="text" class="form-control" id="newStaffName" placeholder="John Doe">
								    </div>
								</div>
								<div class="form-group">
									<label for="newStaffPosition" class="col-sm-2 control-label">Position</label>
									<div class="col-sm-10">
										<input type="text" class="form-control" id="newStaffPosition" placeholder="Writer">
									</div>
								</div>
								<div class="form-group">
									<div class="col-sm-offset-2 col-sm-10">
										<button type="submit" id="newStaffBtn" class="btn btn-block btn-default">Submit</button>
									</div>
								</div>
							</div>
				  		</div>
					</div>
					<div class="panel panel-default">
						<div class="panel-heading">
							<h3 class="panel-title">Edit Staff Member</h3>
				  		</div>
				  		<div class="panel-body">
							<div class="formBox">
								<div class="form-group">
								    <label for="newStaffName" class="col-sm-2 control-label">Name</label>
								    <div class="col-sm-10">
										<input type="text" class="form-control" id="editStaffName" placeholder="John Doe">
								    </div>
								</div>
								<div class="form-group">
									<label for="newStaffPosition" class="col-sm-2 control-label">New Position</label>
									<div class="col-sm-10">
										<input type="text" class="form-control" id="editStaffPosition" placeholder="Editor in Chief">
									</div>
								</div>
								<div class="form-group">
									<div class="col-sm-offset-2 col-sm-10">
										<button type="submit" id="editStaffBtn" class="btn btn-block btn-default">Submit</button>
									</div>
								</div>
							</div>
				  		</div>
					</div>
					<div class="panel panel-default">
						<div class="panel-heading">
							<h3 class="panel-title">Delete Article</h3>
						</div>
						<div class="panel-body">
							<div class="formBox">
								<div class="form-group">
								    <label for="deleteArticleID" class="col-sm-2 control-label">Article ID</label>
								    <div class="col-sm-10">
										<input type="text" class="form-control" id="deleteArticleID" placeholder="1234">
								    </div>
								</div>
								<div class="form-group">
									<div class="col-sm-offset-2 col-sm-10">
										<button type="submit" id="deleteArticleBtn" class="btn btn-block btn-default">Submit</button>
									</div>
								</div>
							</div>
				  		</div>
					</div>
					<div class="panel panel-default">
						<div class="panel-heading">
							<h3 class="panel-title">Manage Sections</h3>
						</div>
						<div class="panel-body">
							<div class="formBox">
								<div class="form-group">
								    <label for="sectionName" class="col-sm-2 control-label">Section</label>
								    <div class="col-sm-10">
										<input type="text" class="form-control" id="sectionName" placeholder="Opinions">
								    </div>
								</div>
								<div class="form-group">
									<label for="sectionRadio" class="col-sm-2 control-label">+/-</label>
									<form class="col-sm-10" id="sectionRadio">
										<label class="radio-inline"><input type="radio" name="sectionRadio" value="add">Add</label>
										<label class="radio-inline"><input type="radio" name="sectionRadio" value="delete">Delete</label>
									</form>
								</div>
								<div class="form-group">
									<div class="col-sm-offset-2 col-sm-10">
										<button type="submit" id="sectionBtn" class="btn btn-block btn-default">Submit</button>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
				<div class="col-md-6">
					<div class="panel panel-default">
						<div class="panel-heading">
							<h3 class="panel-title">Upload Article</h3>
				  		</div>
				  		<div class="panel-body">
							<div class="formBox">
								<div class="form-group">
								    <label for="newStaffName" class="col-sm-2 control-label">Title</label>
								    <div class="col-sm-10">
										<input type="text" class="form-control" id="newArticleTitle" placeholder="Students Develop Novel Robot Control System, Win ISEF">
								    </div>
								</div>
								<div class="form-group">
									<label for="newArticleWriter" class="col-sm-2 control-label">Writer(s)</label>
									<div class="col-sm-10">
										<input type="text" class="form-control" id="newArticleWriter" placeholder="John Kasich, Paul Ryan">
									</div>
								</div>
								<div class="form-group">
									<label for="newArticleSection" class="col-sm-2 control-label">Section</label>
									<div class="col-sm-10">
										<input type="text" class="form-control" id="newArticleSection" placeholder="Opinions">
									</div>
								</div>
								<div class="form-group">
									<label for="newArticleImageID" class="col-sm-2 control-label">Header Image</label>
									<div class="col-sm-10">
										<input type="text" class="form-control" id="newArticleImageID" placeholder="optional">
									</div>
								</div>
								<div class="form-group">
									<label for="newArticleImageCredit" class="col-sm-2 control-label">Image Credit</label>
									<div class="col-sm-10">
										<input type="text" class="form-control" id="newArticleImageCredit" placeholder="Bernie Sanders">
									</div>
								</div>
								<div class="form-group">
									<label for="newArticleUpload" class="col-sm-2 control-label">Article Upload</label>
									<div class="col-sm-10">
										<input id="newArticleUpload" type="file" class="form-control filestyle" data-icon="false">
									</div>
								</div>
								<div class="form-group">
									<div class="col-sm-offset-2 col-sm-10">
										<button type="submit" id="newArticleBtn" class="btn btn-block btn-default">Submit</button>
									</div>
								</div>
							</div>
				  		</div>
					</div>
					<div class="panel panel-default">
						<div class="panel-heading">
							<h3 class="panel-title">Upload Image</h3>
						</div>
						<div class="panel-body">
							<div class="formBox">
								<div class="form-group">
									<label for="imageUpload" class="col-sm-2 control-label">Image(s)</label>
									<div class="col-sm-10">
										<input id="imageUpload" type="file" multiple class="form-control filestyle" data-icon="false">
									</div>
								</div>
								<div class="form-group">
									<div class="col-sm-offset-2 col-sm-10">
										<button type="submit" id="imageUploadBtn" class="btn btn-block btn-default">Submit</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="panel panel-default">
						<div class="panel-heading">
							<h3 class="panel-title">Upload Issue</h3>
						</div>
						<div class="panel-body">
							<div class="formBox">
								<div class="form-group">
									<label for="issueUpload" class="col-sm-2 control-label">Issue(s)</label>
									<div class="col-sm-10">
										<input id="issueUpload" type="file" multiple class="form-control filestyle" data-icon="false">
									</div>
								</div>
								<div class="form-group">
									<div class="col-sm-offset-2 col-sm-10">
										<button type="submit" id="issueUploadBtn" class="btn btn-block btn-default">Submit</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
		<script src="js/bootstrap-filestyle.min.js"></script>

		<script src="js/general.js"></script>
		<script src="js/backend.js"></script>
		<script src="js/admin.js"></script>
	</body>
</html>
