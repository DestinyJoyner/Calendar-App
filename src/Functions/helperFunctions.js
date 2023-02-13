import { Link } from "react-router-dom";
import monday from "../assets/Monday-slouch.png"
import tues from "../assets/Tuesday.png"
import wed from "../assets/Humpday-Camel.png"
import thurs from "../assets/Thursday.png"
import fri from "../assets/Friday-Jason.png"
import sunday from "../assets/Sunday.png"
import saturday from "../assets/Saturday.png"

const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]

// DATE FUNCTIONS
let gridColStart;
function daysInMonth(month, year, monthName) {
    // Use 1 for January, 2 for February, etc.
    const dateArr = [];
    for (let index = 1; index <= new Date(year, month, 0).getDate(); index++) {
      dateArr.push(index);
    }
    // get weekday NAME from date
    // getDay() -> 0 = Sun, 1 = Mon,....
    const daysObjArr = dateArr.map((num, i) => {
      if (i === 0) {
        gridColStart = new Date(`${monthName} ${num}, ${year}`).getDay() + 1
      }
      const obj = {};
      obj.dayOfWeek = daysOfWeek[new Date(year, month, num).getDay()];
      obj.date = num;
      return obj;
    });
    return daysObjArr;
  }

  // function to slice/convert datestamp into ->mm-dd-yy
  function convertDateStamp(string){
    let date = string.slice(2, 10).split("-");
    date.push(date[0]);
    date.shift();
    return date.join("/");
  }

   // function for grouping events by date 
   function upcomingDates (arr) {
    const dateArr = []
    arr.forEach(({day_start}) => {
      const date = day_start.slice(0,10)
     if(!dateArr.includes(day_start)){
      dateArr.push(day_start)
     }
    })
    return dateArr
}

function handleTextChange(e, stateVar, setFunction) {
  const value = e.target.value
  const id = e.target.id
  setFunction({...stateVar, [id]:value})
}

function handleCheckbox(e, var1, setFunction1, var2, setFunction2){
  const id = e.target.id
  setFunction1(!var1)
  setFunction2({...var2, [id]: !var1 })
}

// function select day icon
function dayIconPicker(string) {
  const day = string.trim()
  if(day === "Monday") return monday
  if(day === "Tuesday") return tues
  if(day === "Wednesday") return wed
  if(day === "Thursday") return thurs
  if(day === "Friday") return fri
  if(day === "Saturday") return saturday
  if(day === "Sunday") return sunday
}
  


  export  {
    daysInMonth,
    gridColStart,
    convertDateStamp,
    upcomingDates,
    handleTextChange,
    handleCheckbox,
    dayIconPicker,
  }