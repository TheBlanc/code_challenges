// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

var matrix = [ 4,
               16, 24, 5, -3,
               12, 32, -20, 5,
               7, 8, 40, -3,
               21, 32, -15, 13
               ]

function diagonalDifference(arr){
  var leftDiagSum = 0;
  var rightDiagSum = 0;
  var diagDiff = 0;

  for (var i = 1; i < arr.length; i+= (arr[0] + 1)) {
    leftDiagSum += arr[i];
  }
  for (var i = arr[0]; i < arr.length - (arr[0] - 1); i+= (arr[0] -1)) {
    rightDiagSum += arr[i];
  }

  diagDiff = Math.abs(leftDiagSum - rightDiagSum);
  return diagDiff;
}
console.log(diagonalDifference(matrix));
