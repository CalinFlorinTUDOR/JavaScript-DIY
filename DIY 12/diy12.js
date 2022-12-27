function reset() {

  let details = document.getElementById("details");
  details.style.width = "10px";
  details.style.background = "yellow";
  let body = document.getElementById("body");
  body.style.background = "blue";

}

function enlarge() {
  
  let details = document.getElementById("details");
  let width = parseInt(details.style.width);
  details.style.width = ( width + 10 ) + "px";

  let body = document.getElementById("body");
  if (parseInt(details.style.width) >= 500) {
  body.style.background = "brown"
  
  }

}