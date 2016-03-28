// document.getElementById will return NULL if the page is not loaded
// so you need a listener to wait on DOMContentLoaded Event AND ONLY AFTER THAT to add that innerHTML
document.addEventListener("DOMContentLoaded", function(event) { 
  document.getElementById("nav01").innerHTML =
	"<ul>" +
	"<li><a class=\"tab\" href=\"index.html\">Home</a></li>" +
	"<li><a class=\"tab\" href=\"about.html\">About</a></li>" +
	"<li><a class=\"tab\" href=\"contact.html\">Contact</a></li>" +
	"</ul>";
});
