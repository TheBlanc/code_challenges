// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
//
// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.


function timeConv(s) {
  var time = s.split(":")
  , timeChar = time[2][2].toUpperCase();

  if (time[0] == "12" && timeChar == "A") {
    time[0] = "00";
    time[2] = time[2].slice(0, 2);
    return time.join(":");

  } else if (time[0] == "12" && timeChar == "P" ) {
    time[2] = time[2].slice(0, 2);
    return time.join(":");

  } else if (timeChar == "A") {
    time[2] = time[2].slice(0, 2);
    return time.join(":");

  } else {
    time[2] = time[2].slice(0, 2);
    time[0] = time[0] * 1 + 12;
    return time.join(":");

  }
}

console.log(timeConv("07:05:45PM"));
