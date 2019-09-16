var arr = [1, 2, 3, 4, 5];

function minMaxSum(arr) {
    arrSum = function(arr){
    return arr.reduce(function(a,b){
      return a + b
    }, 0);
  }
  var maxNum = Math.max(...arr)
  , minNum = Math.min(...arr)
  , maxSum = arrSum(arr) - minNum
  , minSum = arrSum(arr) - maxNum;

  console.log(minSum, maxSum);
}

minMaxSum(arr);
