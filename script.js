$(document).ready(function() {
  // Theme Colour
  $("head").append("<meta name=\"theme-color\" content=\"#f48fb1\">"); // Chrome colour
  // Add header
  $("#header-replace").load("/header.html");
  // Add footer
  $("#footer-replace").load("/footer.html");
  // Latex
  $("head").append("<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css\">");
  // Mathjax
  $("head").append("<script src=\"https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_CHTML\"></script>");
  // Google Analytics
  $("head").append("<script src=\"/ga.js\"></script>");
  // Prism
  $("head").append("<script src=\"/prism/prism.js\"></script>");
  $("head").append("<link rel=\"stylesheet\" href=\"/prism/prism.css\">");
    
});

$(document).ready(function() {
  setTimeout(function() {
    var url = window.location.href;
    if(url.substr(0, 15) == "http://mcpt.ca/") {
      url = url.substr(15);
      if(url.substr(0, 5) == "learn") {
        $("ul.navbar-nav li:nth-child(1)").addClass("active");
      } else if(url.substr(0, 10) == "editorials") {
        $("ul.navbar-nav li:nth-child(2)").addClass("active");
      } else if(url.substr(0, 5) == "ranks") {
        $("ul.navbar-nav li:nth-child(3)").addClass("active");
      } else if(url.substr(0, 2) == "oj") {
        $("ul.navbar-nav li:nth-child(4)").addClass("active");
      } else if(url.substr(0, 8) == "calendar") {
        $("ul.navbar-nav li:nth-child(5)").addClass("active");
        $("div.dropdown-menu a:nth-child(1)").addClass("active");
      } else if(url.substr(0, 9) == "resources") {
        $("ul.navbar-nav li:nth-child(5)").addClass("active");
        $("div.dropdown-menu a:nth-child(2)").addClass("active");
      } else if(url.substr(0, 5) == "about") {
        $("ul.navbar-nav li:nth-child(5)").addClass("active");
        $("div.dropdown-menu a:nth-child(3)").addClass("active");
      }
    }
  }, 50);
});