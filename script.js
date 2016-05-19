$(document).ready(function() {
	$("head").append("<meta name=\"theme-color\" content=\"#E8EAF6\">"); // Chrome colour
	$("#header-replace").load("../header.html");
	$("#footer-replace").load("../footer.html");
	var mathjax = document.createElement("script");
	mathjax.src = "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML";
	mathjax.type = "text/javascript";
	$("head").append(mathjax);
});
