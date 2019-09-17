// solution using two loops

function birthdayCakeCandles(ar) {
  var maxNum = Math.max(...ar)
  , candles = 0;

  for (var i = 0; i < ar.length; i++) {
    if (ar[i] === maxNum) candles++;
  }

  return candles;

}


// solution using one loop

function birthday(ar) {
  var maxNum = 1
  , candlesBlown = 0;

  for (var i = 0; i < ar.length; i++) {

    if (ar[i] === maxNum) {
      candlesBlown++;

    } else if (ar[i] > maxNum) {
      maxNum = ar[i];
      candlesBlown = 1;

    } else {
      continue;
    }

  }

  return candlesBlown;
}

ar = [3, 2, 1, 3];

console.log(birthdayCakeCandles(ar));
console.log(birthday(ar));
