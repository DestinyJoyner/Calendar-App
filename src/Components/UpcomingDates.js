import { useState } from "react";
import { useContextProvider } from "./Provider";
import { Link } from "react-router-dom";
import ClickButton from "../ReusableComponents/ClickButton";
import { upcomingDates, convertDateStamp } from "../Functions/helperFunctions";

function UpcomingDates({userSchedule}) {
    const { API, axios, user} = useContextProvider()
    const [scheduledDates, setScheduledDates] = useState(upcomingDates(userSchedule))
    const [thisDateEvent, setThisDateEvent] = useState([])
    const [hidden, setHidden] = useState(true)
    // <Link to={`/index/${id}`}>{title}</Link>
   
    function eventsOnThisDate(e) {
        setHidden(false)
        const thisDate = e.target.innerText
        const eventsOnDate = userSchedule.filter(({day_start}) => 
            convertDateStamp(day_start) === thisDate     
        )
        setThisDateEvent(eventsOnDate)
    }

    return (
        <div className="userDates">
            {
                scheduledDates &&
                scheduledDates.map((el,i) =>
                 <ClickButton
                 icon={convertDateStamp(el)}
                 onClick={eventsOnThisDate}
                 key={i} />)
            }
            <section className="dateEvents">
                { !hidden &&
                    thisDateEvent.map(({title, id}) => <Link to={`/index/${id}`}>{title}</Link>)
                }
            </section>
        </div>
    );
}

export default UpcomingDates;