// https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

var sockArray = [10,20,20,10,10,30,50,10,20];
var n = 9;

function sockMerchant(n, ar) {
  var matches = 0;

  for (var i = 0; i < ar.length; i++) {
    for (var x = (i + 1); x < ar.length; x++) {
      if (ar[i] == ar[x]) {
        matches++;
        ar.splice(x, 1);
        n++;
        break;
      }
    }
  }
  return matches;
}

console.log(sockMerchant(n, sockArray));
