// Hacker Rank - 'Compare the Triplets'

var amy = [10, 22, 11];
var ben = [33, 22, 1];

function compareTriplets(a, b) {
  var result = [0, 0];

  for (var i = 0; i < a.length; i++) {
    if (a[i] < b[i]) {
      result[1]++;
    }  else if (a[i] > b[i]) {
      result[0]++;
    }
  }
  return result;
}

console.log(compareTriplets(amy, ben));
