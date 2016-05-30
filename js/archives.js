function renderArchives(archives) {
	var $archiveBox = $("#archiveBox");
	$archiveBox.empty();
	archives.forEach(function(archive){
		var rendered = $('<div class="panel panel-default"><div class="panel-body"><a href="archives/'+archive+'.pdf">'+archive+'.pdf</a></div></div>');
		$archiveBox.append(rendered);
	});
}

$(document).ready(function() {
	getArchives(renderArchives);
});
