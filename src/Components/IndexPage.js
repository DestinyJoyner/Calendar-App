import { useContextProvider } from "./Provider";
import "./IndexPage.css";

function IndexPage() {
  const { daysOfWeek, todaysDate } = useContextProvider()
  const { day, dow, month, monthName, year } = todaysDate
  let gridColStart;
    console.log(day)
  // function returns array of obj [{dayofWeek: "", date: ""}] -> for month and year passed as args.
  function daysInMonth(month, year) {
    // Use 1 for January, 2 for February, etc.
    // return new Date(year, month, 0).getDate();

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

  const calendarArr = daysInMonth(month, year);

// alt month/year values for testing 
// const calendarArr = daysInMonth(6, 2023)


  return (
    <div className="index">
        
      <div className="calendar">
        <h1>{monthName}{" "}{year}</h1>
        {/* set first index value with style for grid column start -> all others will follow */}
        {daysOfWeek.map((el, i) => (
          <span key={i} className={el}>
            {el}
          </span>
        ))}
        {calendarArr.map((el, i) => {
            if(i===0){
                return <div
                className="calendar-cell" 
                style={{ gridColumnStart: gridColStart }}>
                {el.date}
              </div>
            }
            else if(el.date === +day){
               return <div 
               className="calendar-cell"
               style={{backgroundColor: "blue"}}>{el.date}</div>
            }
            else {
                return <div className="calendar-cell">{el.date}</div>
            }
    
        })}
      </div>
    </div>
  );
}

export default IndexPage;
