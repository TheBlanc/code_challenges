// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

var matrix1 = [ 4,
               [16, 24, 5, -3],
               [12, 32, -20, 5],
               [7, 8, 40, -3],
               [21, 32, -15, 13]
              ]

var matrix2 = [ 3,
                [11, 2, 4],
                [4, 5, 6],
                [10, 8, -12],
              ]

function diagonalDifference(arr){
  var leftDiagSum = 0;
  var rightDiagSum = 0;
  var x = 0;
  var y = arr[1].length - 1;

  for (var i = 1; i < arr.length; i++) {
    leftDiagSum += arr[i][x];
    rightDiagSum += arr[i][y];
    x++;
    y--;
  }
  var diagDiff = Math.abs(leftDiagSum - rightDiagSum);
  return diagDiff;
}
console.log(diagonalDifference(matrix2));
