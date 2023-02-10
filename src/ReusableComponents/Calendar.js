import { useContextProvider } from "../Components/Provider";
import { daysInMonth, gridColStart
 } from "../Functions/helperFunctions";
import "./Calendar.css"

function Calendar(props) {
    const { daysOfWeek, monthArr, todaysDate } = useContextProvider()

    const { cal_day, cal_day_name, cal_month, cal_month_name, cal_year } = todaysDate
    
    const calendarArr = daysInMonth(cal_month, cal_year);

    return (
        <div className="calendar">
        <h1>{cal_month_name}{" "}{cal_year}</h1>
        {/* set first index value with style for grid column start -> all others will follow */}
        {daysOfWeek.map((el, i) => (
          <span key={i} className="calendar-week">
            {el}
          </span>
        ))}
        {calendarArr.map((el, i) => {
            if(i===0){
                return <div
                className="calendar-cell" 
                style={{ gridColumnStart: gridColStart }}>
                    <span>{el.date}</span>
                </div>
            }
            else if(el.date === +cal_day){
               return <div 
               className="calendar-cell today">
                  <span>{el.date}</span>
                </div>
            }
            else {
                return <div className="calendar-cell">
                        <span>{el.date}</span>
                        </div>
            }
        })}
      </div>
    );
}

export default Calendar;