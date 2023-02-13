import { useEffect, useState } from "react";
import { useContextProvider } from "./Provider";
import { HiOutlineClipboardList } from "react-icons/hi"
import UpcomingDates from "./UpcomingDates";
import "./Upcoming.css"

function Upcoming({userSchedule}) {
    const {API, axios, todaysDate, date, user} = useContextProvider()
    const[happeningToday, setHappeningToday] = useState([])
   

    useEffect(() => {
        axios.get(`${API}/calendar/${date}/schedule?userId=${user.userId}`)
        .then(({data}) => {
            if(!data){
                setHappeningToday(false)
            }
            else(
                setHappeningToday(data)
            )
            })
        .catch(err=> console.log(err))

    }, [ userSchedule &&userSchedule.length])

    return (
        <aside className="upcoming">
            <section className="happening-today">
                <h5>Today's Events</h5>
                {
                    happeningToday ?
                    happeningToday.map(({title, id}) => <li key ={id}><HiOutlineClipboardList color={"aqua"} size={"15px"} />{"  "}{title}</li>) :
                    <li>No scheduled events for today</li>
                }
                <br/>
                <h5>Notable Dates</h5>
                    <UpcomingDates userSchedule={userSchedule} />

            </section>
        </aside>
    );
}

export default Upcoming;