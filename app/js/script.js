var app=document.getElementById("quote-section"),p=document.createElement("p");p.setAttribute("class","quote-style"),app.appendChild(p);var sans=document.getElementById("sans-body"),gaster1=document.getElementById("gaster-1"),gaster2=document.getElementById("gaster-2"),buttonQuote=document.getElementById("quote-btn"),buttonTweet=document.getElementById("tweet-btn"),buttonFight=document.getElementById("fight-btn");function getQuote(){var t=new XMLHttpRequest;t.open("GET","http://quotes.stormconsultancy.co.uk/random.json"),t.onload=function(){var e=JSON.parse(this.response);t.status>=200&&t.status<400?p.textContent='"'+e.quote+'" - '+e.author:p.textContent="Flowey it's the responsable :["},t.send()}function tweetear(){window.open("https://twitter.com/intent/tweet?text="+p.textContent,"_blank")}function miss(){sans.classList.toggle("sans-move")}function shoot(){gaster1.classList.toggle("shoot-1"),gaster2.classList.toggle("shoot-2")}getQuote(),shoot(),buttonQuote.addEventListener("click",getQuote),buttonQuote.addEventListener("click",shoot),buttonTweet.addEventListener("click",tweetear),buttonFight.addEventListener("click",miss);