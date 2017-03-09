function renderArchives(archives) {
	var $archiveBox = $("#archiveBox");
	$archiveBox.empty();
	archives.forEach(function(archive){
		var rendered = $('<div class="panel panel-default"><div class="panel-body"><a href="archives/'+archive.fileName+'.pdf">'+archive.name+'</a></div></div>');
		$archiveBox.append(rendered);
	});
}

$(document).ready(function() {
	getArchives(renderArchives);
});

function getArchives(callback) {
    callback([
		{fileName:"114-19", name:"Volume 114, Issue 19"},
		{fileName:"114-18", name:"Volume 114, Issue 18"},
		{fileName:"114-16", name:"Volume 114, Issue 16"},
		{fileName:"114-15", name:"Volume 114, Issue 15"},
		{fileName:"114-14", name:"Volume 114, Issue 14"},
		{fileName:"114-13", name:"Volume 114, Issue 13"},
		{fileName:"114-10", name:"Volume 114, Issue 10"},
		{fileName:"114-9", name:"Volume 114, Issue 9"},
		{fileName:"114-8", name:"Volume 114, Issue 8"},
		{fileName:"114-7", name:"Volume 114, Issue 7"},
		{fileName:"114-6", name:"Volume 114, Issue 6"},
		{fileName:"114-5", name:"Volume 114, Issue 5"},
		{fileName:"114-4", name:"Volume 114, Issue 4"},
		{fileName:"114-3", name:"Volume 114, Issue 3"},
		{fileName:"114-1", name:"Volume 114, Issue 1"},

	]);
}
