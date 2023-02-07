
import "./HomePage.css"

function HomePage() {
const days = ["Sun","Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
let gridColStart ;

// function returns array of obj [{dayofWeek: "", date: ""}] -> for month and year passed as args.
function daysInMonth (month, year) { 
    // Use 1 for January, 2 for February, etc.
    // return new Date(year, month, 0).getDate();
    
    const dateArr =[]
    for (let index = 1; index <= new Date(year, month, 0).getDate();index++){
        dateArr.push(index)
    }
    // get weekday NAME from date 
    // getDay() -> 0 = Sun, 1 = Mon,....
    const daysObjArr = dateArr.map((num, i) => {
        if(i === 0){
            gridColStart = new Date(year, month, num).getDay() + 1
        }
        const obj = {}
        obj.dayOfWeek = days[new Date(year, month, num).getDay()]
        obj.date = num
        return obj
    })
    return daysObjArr
  }



  const calendarArr = daysInMonth(2, 2023)
console.log(calendarArr, gridColStart)

    return (
        <div className="home">
           <h1>Home</h1>
           <div className ="calendar">
            {/* set first index value with style for grid column start -> all others will follow */}
                {
                    days.map((el, i) => <span 
                    key ={i} 
                    className={el}
                    >{el}</span>)
                }
                {
                    
                    calendarArr.map((day,i) => <div
                    style ={ i=== 0 ? { gridColumnStart : gridColStart}: {} } >{day.date}</div>)

                }
           </div>
           
        </div>
    );
}

export default HomePage;