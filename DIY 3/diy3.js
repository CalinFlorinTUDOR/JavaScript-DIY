function submit() {
  
  var num1=parseInt(document.getElementById("num1").value);
  var num2=parseInt(document.getElementById("num2").value);
  var num3=parseInt(document.getElementById("num3").value);
  var avg = (num1 + num2 + num3) / 3;
  alert(avg);
  a.innerHTML=avg;

}