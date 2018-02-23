//Create Quote box elements
var app = document.getElementById("quote-section");

var p = document.createElement("p");

p.setAttribute("class", "quote-style");
app.appendChild(p);
var buttonQuote = document.getElementById("quote-btn");

//Get new quotes
function getQuote() {
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
      p.textContent = '"' + data.quote + '"' + " - " + data.author;
    } else {
      p.textContent = "Flowey it's the responsable :[";
    }
  };

  request.send();
}

//To get the initial quote
getQuote();
//Events lisnteners
buttonQuote.addEventListener("click", getQuote);
