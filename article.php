<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="">
		<meta name="author" content="">
		<link rel="shortcut icon" href="img/favicon.ico" />
		<title>HM Record: Article Title</title>

		<link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic|Lato:400,300,700,400italic,300italic' rel='stylesheet' type='text/css'>
		<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
		<link href="css/index.css" rel="stylesheet">
		<link href="css/navbar.css" rel="stylesheet">
		<link href="css/article.css" rel="stylesheet">
	</head>
	<body>
		<?php include 'include/navbar.php'; ?>

		<div class="container article" id="articleContainer">
			<div id="img"></div>
			<div id="caption"></div>

			<h2 id="title"></h2>
			<h4 id="author"></h4>
			<h4 id="date"></h4>

			<hr />

			<div id="content"></div>
		</div>

		<script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

		<script src="js/general.js"></script>
		<script src="js/backend.js"></script>
		<script src="js/article.js"></script>
	</body>
</html>
