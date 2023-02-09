const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]

// DATE FUNCTIONS
let gridColStart;
function daysInMonth(month, year) {
    // Use 1 for January, 2 for February, etc.
    const dateArr = [];
    for (let index = 1; index <= new Date(year, month, 0).getDate(); index++) {
      dateArr.push(index);
    }
    // get weekday NAME from date
    // getDay() -> 0 = Sun, 1 = Mon,....
    const daysObjArr = dateArr.map((num, i) => {
      if (i === 0) {
        gridColStart = new Date(year, month, num).getDay() + 1;
      }
      const obj = {};
      obj.dayOfWeek = daysOfWeek[new Date(year, month, num).getDay()];
      obj.date = num;
      return obj;
    });
    return daysObjArr;
  }


  export  {
    daysInMonth,
    gridColStart,
  }