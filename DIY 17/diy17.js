function sumAverageAbove1000() {
  
  firstSalary = prompt("Enter first salary");
  secondSalary = prompt("Enter second salary");
  thirdSalary = prompt("Enter third salary");
  fourthSalary = prompt("Enter fourth salary");
  fifthSalary = prompt("Enter fifth salary");

  let sumSalaries = document.getElementById("sumSalaries");
  let biggestSalaries = document.getElementById("biggestSalaries");
  let average = document.getElementById("average");

  salaries = [1,1,1,1,2226];
  average = parseInt(firstSalary) + parseInt(secondSalary) + parseInt(thirdSalary) + parseInt(fourthSalary) + parseInt(fifthSalary) / salaries.length 
  biggestSalaries = [];
  sumSalaries = 0

  
  for (let i = 0; i < salaries.length; i++) {
    sumSalaries += salaries[i];
    let display = document.getElementById("sumSalaries");
    display.innerText = sumSalaries;
  

    if (salaries[i] > 1000) {
      biggestSalaries.push(salaries[i]);
      let display = document.getElementById("biggestSalaries");
      display.innerText = biggestSalaries;
    }
    else if (sumSalaries / salaries.length) {
      
      let display = document.getElementById("average");
      display.innerText = average;
    
    }
 }

}
