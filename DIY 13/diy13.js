function clickMySum() {
  
  let firstNumber = prompt("Enter first number");
  let secondNumber = prompt("Enter second number");
  let sum = parseInt(firstNumber) + parseInt(secondNumber);

  if (sum > 100) {
    
    let display = document.getElementById("details");
    display.style.background = "blue";
    display.style.color = "white";
    display.innerText = sum;

  } else {
    
    let display = document.getElementById("details");
    display.style.background = "red";
    display.style.color = "black";
    display.innerText = sum;

  }

}

