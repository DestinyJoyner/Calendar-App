import { useEffect, useState } from "react";
import { useContextProvider } from "./Provider";
import IndexMap from "./IndexMap";
import Upcoming from "./Upcoming";
import Form from "../ReusableComponents/Form";
import "./IndexPage.css"


function IndexPage() {
    const { API, axios, userAccess, user, todaysDate} = useContextProvider()
    const { cal_day, cal_day_name, cal_month, cal_month_name, cal_year } = todaysDate
    const [userSchedule, setUserSchedule] = useState()


    useEffect(() => {
        axios.get(`${API}/schedule?userId=${user.userId}`,)
        .then(({data}) => setUserSchedule(data))
        .catch(err => console.log(err))
    },[user.userId])

    return (
        <div className="index center">
            <h4>{cal_day_name}<p> {cal_month_name} {cal_day}, {cal_year}</p></h4>
            <h2>{user.userName}'s Calendar</h2>

            <div className="index-list-container">
            <div className="index-list">
            <h3>Date</h3>
            <h3>Event</h3>
            <h3>Important</h3>
            {userSchedule &&
                userSchedule.map(obj => 
                    <IndexMap key ={obj.id} obj={obj} />
                )
            }
           </div>
           </div>
           <Form 
           stateVar={userSchedule}
           setFunction={setUserSchedule}
           />



           <Upcoming
           userSchedule={userSchedule} />
           <aside className="urgent">Urgent</aside>
        </div>
    );
}

export default IndexPage;