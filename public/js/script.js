$(document).ready(function() {
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
});