//Create Quote box elements
var app = document.getElementById("quote-section");

var p = document.createElement("p");

p.setAttribute("class", "quote-style");
app.appendChild(p);
var buttonQuote = document.getElementById("quote-btn");

//Request variable
var request = new XMLHttpRequest();

request.open(
  "GET",
  "https://api.icndb.com/jokes/random?exclude=[explicit]"
);

request.withCredentials = true;


request.onload = function() {
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    console.log(quoteText);
  } else {
    console.log("Error");
  }
};

request.send();