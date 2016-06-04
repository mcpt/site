$(document).ready(function() {
  // Theme Colour
	$("head").append("<meta name=\"theme-color\" content=\"#f48fb1\">"); // Chrome colour
  // Add header
	$("#header-replace").load("/header.html");
  // Add footer
	$("#footer-replace").load("/footer.html");
  // Latex
	$("head").append("<script src=\"https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_CHTML\"></script>");
});
