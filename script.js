$(document).ready((function() {
	$("head").append("<meta name=\"theme-color\" content=\"#3f51b5\">"); // Chrome colour
	$("#header-replace").load("../header.html");
	$("#footer-replace").load("../footer.html");
	
	//Bootstrap core CSS
	$("head").append("<link href=\"../bootstrap/css/bootstrap.css\" rel=\"stylesheet\">");
	//MDB core CSS
	$("head").append("<link href=\"../mdb/css/mdb.css\" rel=\"stylesheet\">");
	//Bootstrap core JavaScript
	$("body").append("<script src=\"../bootstrap/js/bootstrap.js\"></script>");
	//MDB core JavaScript
	$("body").append("<script src=\"../mdb/js/mdb.js\"></script>");
}));

