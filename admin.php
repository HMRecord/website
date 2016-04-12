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
		<link href="css/index.css" rel="stylesheet">
		<link href="css/navbar.css" rel="stylesheet">
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
			<div id="adminBox">
				<div class="row">
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
											<button type="submit" class="btn btn-block btn-default">Add</button>
										</div>
									</div>
								</div>
					  		</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="panel panel-default">
							<div class="panel-heading">
								<h3 class="panel-title">Upload Articles</h3>
					  		</div>
					  		<div class="panel-body">
					    		Panel content
					  		</div>
						</div>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">Upload New Issue</h3>
					</div>
					<div class="panel-body">
						Panel content
					</div>
				</div>
			</div>
		</div>

		<script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

		<script src="js/general.js"></script>
		<script src="js/backend.js"></script>
		<script src="js/admin.js"></script>
	</body>
</html>
