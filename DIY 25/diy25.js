  let n1 = prompt("Print n1");
  let n2 = prompt("Print n2");
  let n3 = prompt("Print n3");

function maxBetween3Numbers(n1,n2,n3) {
  
    if (n1 > n2 && n1 > n3) {
    return n1;
  } else if (n2 > n1 && n2 > n3) {
    return n2;
  } else if (n3 > n1 && n3 > n2) {
    return n3;
  } else {
    return "n1,n2,n3";
  } 
}

for( i = 0; i < 1; i++){

  document.write(maxBetween3Numbers(n1,n2,n3));
}
console.log(maxBetween3Numbers(n1,n2,n3));