import { useState, useEffect } from "react";
import { useContextProvider } from "../Components/Provider";
import { daysInMonth, gridColStart
 } from "../Functions/helperFunctions";
import "./Calendar.css"

function Calendar({date, height, width}) {
    const { API, axios, daysOfWeek, todaysDate } = useContextProvider()
    const [getDate, setGetDate] = useState({})
    const thisDate = !date ? todaysDate : getDate
    const { cal_day, cal_day_name, cal_month, cal_month_name, cal_year } = thisDate
    
    const calendarArr = daysInMonth(cal_month, cal_year);

    useEffect(() => {
      if(date) {
        axios.get(`${API}/calendar/${date}`)
        .then(({data}) => setGetDate(data))
        .catch(err=> console.log(err))
      }
    },[])

    return (
        <div 
        className="calendar"
        style={{maxHeight:height, maxWidth: width }}>

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
                key={i}
                className="calendar-cell" 
                style={{ gridColumnStart: gridColStart }}>
                    <span>{el.date}</span>
                </div>
            }
            else if(el.date === +cal_day){
               return <div 
               key={i}
               className="calendar-cell today">
                  <span>{el.date}</span>
                </div>
            }
            else {
                return <div 
                key={i}
                className="calendar-cell">
                        <span>{el.date}</span>
                        </div>
            }
        })}
      </div>
    );
}

export default Calendar;