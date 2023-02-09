import { useState } from "react";
import { useContextProvider } from "./Provider";
import Login from "../Login/Login";
import { daysInMonth, gridColStart } from "../Functions/helperFunctions"
import "./HomePage.css";

function IndexPage() {
  const { daysOfWeek, monthArr, todaysDate } = useContextProvider()
  const { cal_day, cal_day_name, cal_month, cal_month_name, cal_year } = todaysDate
  const calendarArr = daysInMonth(cal_month, cal_year);


  return (
    <div className="home">

      <article className="home-title">
        <h2>Destiny's</h2>
        <h2>Calendar App</h2>
        <Login 
          height = {"70%"}
          width = {"80%"} />
      </article>

     

      <section className="squares">
        <div className="square 1">s1</div>
        <div className="square 2">s2</div>
        <div className="square 3">s3</div>

      </section>
        
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

    </div>
  );
}

export default IndexPage;
