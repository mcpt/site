$(function() {
	$("head").append("<link rel=\"icon\" type=\"image/png\" href=\"../icon.png\">"); // Icon
	$("head").append("<meta name=\"theme-color\" content=\"#268dbf\">"); // Chrome colour
	$("#header").load("../header.html");
	$("#footer").load("../footer.html");
	
	//Bootstrap core CSS
	$("head").append("<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css\" rel=\"stylesheet\">");
	//MDB core CSS
	$("head").append("<link href\"http://mdbootstrap.com/mdbcdn/mdb.min.css\" rel=\"stylesheet\">");   
	//Bootstrap core JavaScript
	$("head").append("<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js\"></script>");
	//MDB core JavaScript
	$("head").append("<script src=\"http://mdbootstrap.com/mdbcdn/mdb.min.js\"></script>");
});

