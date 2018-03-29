//Create Quote box elements
var app = document.getElementById("quote-section");

var p = document.createElement("p");

p.setAttribute("class", "quote-style");
app.appendChild(p);

//Sans body
var sans = document.getElementById("sans-body");

//Blasters elements
var gaster1 = document.getElementById("gaster-1");
var gaster2 = document.getElementById("gaster-2");

//Selecting buttons
var buttonQuote = document.getElementById("quote-btn");
var buttonTweet = document.getElementById("tweet-btn");
var buttonFight = document.getElementById("fight-btn");

//Get new quotes
function getQuote() {
  //Request variable
  var request = new XMLHttpRequest();

  //Set the API endpoint
  request.open(
    "GET",
    "http://quotes.stormconsultancy.co.uk/random.json"
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

//Tweet the quote
function tweetear() {
  window.open(
    "https://twitter.com/intent/tweet?text=" + p.textContent,
    "_blank"
  );
}

//To get the initial quote
getQuote();
shoot();

//Animations events
function miss() {
  sans.classList.toggle("sans-move");
}

//Show gaster blasters

function shoot() {
  gaster1.classList.toggle("shoot-1");
  gaster2.classList.toggle("shoot-2");
}

//Events lisnteners
buttonQuote.addEventListener("click", getQuote);
buttonQuote.addEventListener("click", shoot);
buttonTweet.addEventListener("click", tweetear);
buttonFight.addEventListener("click", miss);
