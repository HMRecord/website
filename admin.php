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
		<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
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
										<button type="submit" id="deleteArticleBtn" class="btn btn-block btn-default">Submit</button> </div>
								</div>
							</div>
				  		</div>
					</div>
					<!--<div class="panel panel-default">
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
				</div>-->
            </div>
            <div class="col-md-6">
                                    <div class="panel panel-default">
                                            <div class="panel-heading">
                                                    <h3 class="panel-title">Upload Article</h3>
                                            </div>
                                            <div class="panel-body">
                                                    <div class="formBox form-horizontal">
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
                                                                            <select class="form-control" id="newArticleSection">
                                                                            <option value="News">News</option>
                                                                            <option value="5876f88977e0ad0674052a49">Editorials</option>

																			<option value="5876f88977e0ad0674052a4a">Op-Eds</option>
																			<option value="5876f88977e0ad0674052a4b">Letters to Editor</option>
                                                                            <option value="Features">Features</option>
                                                                            <option value="Arts & Entertainment">Arts &amp; Entertainment</option>
                                                                            <option value="Middle Division">Middle Division</option>
                                                                                    <option value="Lions' Den">Lions' Den</option>
                                                                        </select>
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
<form id="submitForm">
										<input id="imageUpload" type="file" multiple class="form-control filestyle" name="file" data-icon="false">
</form>
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
					<!--<div class="panel panel-default">
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
					</div>-->
					<div class="panel panel-default">
						<div class="panel-heading">
							<h3 class="panel-title"><button class="btn btn-primary btn-block" data-toggle="modal" data-target="#helpModal">Help</button></h3>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div id="helpModal" class="modal fade" role="dialog">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Record Admin Help</h4>
					</div>
					<div class="modal-body">
						<h3>Uploading Images</h3>
						<p>Images are managed through an ID system.  Whenever an image is uploaded to the website via the "Upload Image" panel, a respective ID is returned.  IDs can be used when uploading the header images for an article, or when adding inline images to articles.</p>

						<h3>Uploading Articles</h3>
						<p>When uploading an article, the mandatory fields are  title, writer(s), section, and article upload.  Multiple writers can be credited via comma seperation, ex "John Doe, Jess Dae."  A header image is optional, but can be added by putting the image ID under "Header Image" and citing the same way writers are cited.</p>

						<p>Articles are uploaded as plaintext .txt files.  Images can be included inline using the following syntax:</p>

						<pre>&lt;pic id='1234' credit='Bernie Sanders' desc='The notorious truellmeister in its natural habitat.' /&gt;</pre>

						<p>The field <code>id</code> is simply the ID given when the image was uploaded. Descriptions are optional, and staff in credit must be added to the system first via the "Add Staff Member" panel.</p>

						<!--<h3>Issue Uploading</h3>
						<p>Issues can be uploaded to the archive page via the "Upload Issue" panel.  Be sure to name archives nicely, as the raw filename will be displayed to visitors.</p>-->

						<h3>About This Website</h3>
						<p>This incarnation of the Record website was created by Joshua Gruenstein, Henry Wildermuth, and Michael Truell.  The technology stack is Apache, Python Flask, PHP, and Bootstrap on the front-end.  The code can be found on <a href="https://github.com/HMRecord/website">Github</a>.</p>
						<p>The website is hosted by <a href="https://www.digitalocean.com/">DigitalOcean</a>, using the email address hmrecordtech@gmail.com with the same password used to gain access to this page.  For domain name related concerns, you can contact Horace Mann IT.</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>

		<script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
		<script src="bootstrap/js/bootstrap.min.js"></script>
		<script src="bootstrap/js/bootstrap-filestyle.min.js"></script>

		<script src="js/general.js"></script>
		<script src="js/backend.js"></script>
		<script src="js/admin.js"></script>
	</body>
</html>
