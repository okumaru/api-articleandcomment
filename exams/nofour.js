/**
 * Direction
 * Get name of the day of 4 days ago from today
 *
 * Expected result:
 * 1. if date now = monday
 * 2. then result = thursday
 */
function result() {
  // write your code here
  var date = new Date();
  date.setDate(date.getDate() - 4);
  var day = date.getDay();

  switch (day) {
    case 0:
      day = "Minggu";
      break;
    case 1:
      day = "Senin";
      break;
    case 2:
      day = "Selasa";
      break;
    case 3:
      day = "Rabu";
      break;
    case 4:
      day = "Kamis";
      break;
    case 5:
      day = "Jum'at";
      break;
    case 6:
      day = "Sabtu";
      break;
  }

  return day;
}

console.log(result());
