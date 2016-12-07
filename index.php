<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="">
		<meta name="author" content="">
		<title>HM Record</title>

		<link href='https://fonts.googleapis.com/css?family=Crimson+Text:400,700,400italic,700italic|Lato:400,300,700,400italic,300italic' rel='stylesheet' type='text/css'>
		<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
		<link href="bootstrap/css/bootstrap-theme.min.css" rel="stylesheet">
		<link href="css/general.css" rel="stylesheet">
		<link href="css/index.css" rel="stylesheet">
	</head>
	<body>
		<?php include 'include/navbar.php'; ?>

		<div class="container header">
			<span id="headerDate"></span>
			<h1>The Horace Mann Record</h1>
			<hr />
			<h4>Horace Mann's Weekly Newspaper Since 1903.</h4>
		</div>

		<div class="container" id="articles">
			<hr id="headerBreaker" />
			<div class="row">
				<div class="col-sm-3" id="leftColumn"></div>
				<div class="col-sm-6" id="middleColumn"></div>
				<div class="col-sm-3" id="rightColumn"></div>
			</div>
			<div id="loadMore"><a href="#" id="loadMoreBtn">&#126; Load More &#126;</a></div>
		</div>

		<script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
		<script src="bootstrap/js/bootstrap.min.js"></script>

		<script src="js/general.js"></script>
		<script src="js/backend.js"></script>
		<script src="js/index.js"></script>
	</body>
</html>
