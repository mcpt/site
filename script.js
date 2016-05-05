$(function() {
	$("head").append("<link rel=\"icon\" type=\"image/png\" href=\"../icon.png\">"); // Icon
	$("head").append("<meta name=\"theme-color\" content=\"#3f51b5\">"); // Chrome colour
	$("#header-replace").load("../header.html");
	$("#footer-replace").load("../footer.html");
	
	//Bootstrap core CSS
	$("head").append("<link href=\"../bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\">");
	//MDB core CSS
	$("head").append("<link href=\"../mdb/css/mdb.min.css\" rel=\"stylesheet\">");
	//Bootstrap core JavaScript
	$("head").append("<script src=\"../bootstrap/js/bootstrap.min.js\"></script>");
	//MDB core JavaScript
	$("head").append("<script src=\"../mdb/js/mdb.min.js\"></script>");
});

