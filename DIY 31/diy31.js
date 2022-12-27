var arr = [1,6,2,9];
var num = 6;

function checkNumber(arr,num) {
  
  for(i = 0; i <= arr.length; i++){
    if(num == arr[i]){
      return true;
    }
  }
}
console.log(checkNumber(arr,num));
alert(num);