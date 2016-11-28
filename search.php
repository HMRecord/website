<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="">
		<meta name="author" content="">
		<link rel="shortcut icon" href="img/favicon.ico" />
		<title>HM Record Search</title>

		<link href='https://fonts.googleapis.com/css?family=Crimson+Text:400,700,400italic,700italic|Lato:400,300,700,400italic,300italic' rel='stylesheet' type='text/css'>
		<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
		<link href="css/general.css" rel="stylesheet">
		<link href="css/search.css" rel="stylesheet">
	</head>
	<body>
		<?php include 'include/navbar.php'; ?>

		<div class="container">
			<h2>Record Search Results for &#8220;<span id="headerQuery"></span>&#8221;:</h2>

			<hr />

			<div id="articleBox"></div>
		</div>

		<script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
		<script src="bootstrap/js/bootstrap.min.js"></script>

		<script src="js/general.js"></script>
		<script src="js/backend.js"></script>
		<script src="js/search.js"></script>
	</body>
</html>
