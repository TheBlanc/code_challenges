// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// Solution for if matrix is given as a string seperated by spaces and line breaks
var matrix1 = "3 11 2 4 4 5 6 10 8 -12"

function diagonalDifferenceString(arr) {
  var matrix = arr.trim().split(/\s+/)
  , n = 1 * matrix.shift()
  , leftDiagSum = 0
  , rightDiagSum = 0;

  for (var i = 0; i < matrix.length; i += (n+1)) {
    leftDiagSum += (1 * matrix[i]);
  }
  for (var i = (n-1); i < matrix.length - (n-1); i += (n-1)) {
    rightDiagSum += (1 * matrix[i]);
  }
  return Math.abs(leftDiagSum - rightDiagSum);

}
console.log(diagonalDifference(matrix2));


// solution if matrix is given as a 2D array
var matrix2 = [
               [16, 24, 5, -3],
               [12, 32, -20, 5],
               [7, 8, 40, -3],
               [21, 32, -15, 13]
              ]


function diagonalDifferenceMatrix(arr) {
  var leftDiagSum = 0;
  var rightDiagSum = 0;

  var x = 0;
  var y = arr.length - 1;

  for (var i = 0; i < arr.length; i++) {
    leftDiagSum += arr[i][x];
    rightDiagSum += arr[i][y];
    x++;
    y--;
  }
  return Math.abs(leftDiagSum - rightDiagSum);
}
console.log(diagonalDifference(matrix2));
