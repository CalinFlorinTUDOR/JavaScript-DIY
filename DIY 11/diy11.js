function pickYourNumber() {

  let fullname = prompt("Enter your fullname");
  let number = prompt("Enter a Number");

  let result = document.getElementById("details");

    if (number == 777) {

    result.style.color = "blue";
    result.style.background = "yellow";
    result.style.border = "1px solid green";
    result.innerText = "$1,000,000"

  } else {
    
    result.style.color = "yellow";
    result.style.background = "black";
    result.style.border = "5px solid red";
    result.innerText = fullname

  }

}
