//Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

var nums = [ -4, 3, -9, 0, 4, 1 ];

function plusMinus(arr) {
  var plus = 0
  , minus = 0
  , zero = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      plus++;
    } else if (arr[i] < 0) {
      minus++;
    } else {
      zero++;
    }
  }
  console.log(plus/arr.length);
  console.log(minus/arr.length);
  console.log(zero/arr.length);
}

console.log(plusMinus(nums));
