// Consider a staircase of size n = 4 :
//
//    #
//   ##
//  ###
// ####
//
// Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.
//
// Write a program that prints a staircase of n size .

function staircase(n) {
  var step = 0
  , space = n
  , stairs = "";

  while (step < n) {
    if (step === n - 1) {
      step++;
      stairs = stairs.concat("#".repeat(step));
    }
    else {
      step++;
      space--;
      stairs = stairs.concat(" ".repeat(space)).concat("#".repeat(step)).concat("\n");
    }
  }
  return stairs;
}

console.log(staircase(6));
