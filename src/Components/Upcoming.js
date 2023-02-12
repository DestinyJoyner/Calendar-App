import { useEffect, useState } from "react";
import { useContextProvider } from "./Provider";
import { HiOutlineClipboardList } from "react-icons/hi"
import { upcomingEvents } from "../Functions/helperFunctions";
import "./Upcoming.css"

function Upcoming({userSchedule}) {
    const {API, axios, todaysDate, date, user} = useContextProvider()
    const[happeningToday, setHappeningToday] = useState([])
    // const upcoming = userSchedule[0] ? upcomingEvents(date, userSchedule) : []



    useEffect(() => {
        axios.get(`${API}/calendar/${date}/schedule?userId=${user.userId}`)
        .then(({data}) => setHappeningToday(data))
        .catch(err=> console.log(err))

    }, [])

    return (
        <aside className="upcoming">
            <section className="happening-today">
                <h5>Today's Events</h5>
                {
                    happeningToday[0] ?
                    happeningToday.map(({title, id}) => <li key ={id}><HiOutlineClipboardList color={"aqua"} size={"15px"} />{"  "}{title}</li>) :
                    <li>No scheduled events for today</li>
                }
                <br/>
                <h5>Upcoming Events</h5>
                {
                    
                }

            </section>
        </aside>
    );
}

export default Upcoming;