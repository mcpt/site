$(document).ready(function() {
	$("head").append("<meta name=\"theme-color\" content=\"#f48fb1\">"); // Chrome colour
	$("#header-replace").load("/header.html");
	$("#footer-replace").load("/footer.html");
	$("head").append("<script src=\"https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML\"></script>");
});
