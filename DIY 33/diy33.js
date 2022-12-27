let arr = [1,6,2,9];
let num = 6;

const funct = (arr, num) => {
  
  for(i = 0; i < 4; i++){
    if(num == arr[i]){
      return true;
    }
  }
}
console.log(funct(arr,num));
alert(num);