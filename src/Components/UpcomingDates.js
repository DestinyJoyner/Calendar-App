import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClickButton from "../ReusableComponents/ClickButton";
import { upcomingDates, convertDateStamp } from "../Functions/helperFunctions";
import "./UpcomingDates.css"

function UpcomingDates({userSchedule}) {
    const [scheduledDates, setScheduledDates] = useState(upcomingDates(userSchedule))
    const [thisDateEvent, setThisDateEvent] = useState([])
    const [hidden, setHidden] = useState(true)
   
    function eventsOnThisDate(e) {
        setHidden(false)
        const thisDate = e.target.innerText
        const eventsOnDate = userSchedule.filter(({day_start}) => 
            convertDateStamp(day_start) === thisDate     
        )
        setThisDateEvent(eventsOnDate)
    }

    useEffect(() => {
        setScheduledDates(upcomingDates(userSchedule))
    }, [userSchedule.length])

    return (
        <div className="userDates">
            {
                scheduledDates &&
                scheduledDates.map((el,i) =>
                 <ClickButton
                 icon={convertDateStamp(el)}
                 onClick={eventsOnThisDate}
                 key={i}
                 style={"date-button-unclicked"} />)
            }
            <section className="dateEvents button-style">
                { !hidden &&
                    thisDateEvent.map(({title, id}) => 
                    <li key= {id}>
                        <Link to={`/index/${id}`}>{title}</Link>
                    </li>)
                }
            </section>
        </div>
    );
}

export default UpcomingDates;