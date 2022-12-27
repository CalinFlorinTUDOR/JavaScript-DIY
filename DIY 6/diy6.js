function selectBackColor() {
  
  var inputGetColor = document.getElementById("color").value;
  var background = document.getElementById("myDiv");
  background.style.background = inputGetColor;

}

function selectTextColor() {

  var inputGetColor = document.getElementById("color").value;
  var text = document.getElementById("myp");
  text.style.color = inputGetColor;

}