//Create Quote box elements
var app = document.getElementById("quote-section");

var p = document.createElement("p");

p.setAttribute("class", "quote-style");
app.appendChild(p);
var buttonQuote = document.getElementById("quote-btn");

//Request variable
var request = new XMLHttpRequest();

//Set the API endpoint
request.open(
  "GET",
  "https://random-quote-generator.herokuapp.com/api/quotes/random"
);

request.onload = function() {
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    console.log("Hey!!!");
  } else {
    console.log("Error");
  }
};

request.send();
