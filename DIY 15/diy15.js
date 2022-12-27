function countEven() {

  let a = [];
  
  for (let i = 0; i < 4; i++) {
    
    a.push(prompt());
    
    if (a[i] % 2 == 0) {
    document.write("Even Numbers: " + a[i] + "</br>" );
  } 
  
  } 
}
