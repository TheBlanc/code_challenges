// HackerRank 'Grading Students'

function gradingStudents(grades) {
  var newGrades = [];
  for (var i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      newGrades[i] = grades[i];

    } else {
      // convert integer grade to string then isolate second number and return it to an integer
      var roundNum = grades[i].toString()[1]*1;

      for (var j = 1; j < 3; j++) {
        if (roundNum + j == 5 || roundNum + j == 10 ) {
          newGrades[i] = grades[i] + j;
          break;
        } else {
          newGrades[i] = grades[i];
        }
      }
    }
  }
  return newGrades;
}

var grades = [ 73, 67, 38, 33 ];

console.log(gradingStudents(grades));

// Much better solution with use of '%'
// if (grades[i] >= 38 && grades[i] % 5 >2) {
//
//       grades[i] = grades[i] + (5 - (grades[i] % 5));
//   }
