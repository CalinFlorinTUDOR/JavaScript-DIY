const arr = [1,6,2,9];

const maxNumber = (arr) => {
  var maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
      var elements = arr[i];
      if (elements > maxNum) {
          maxNum = elements;
      }
  }
  return maxNum;
}
console.log(maxNumber(arr));
alert(maxNumber(arr));