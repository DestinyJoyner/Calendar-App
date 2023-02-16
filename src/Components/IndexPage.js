import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContextProvider } from "./Provider";
import IndexMap from "./IndexMap";
import Upcoming from "./Upcoming";
import Form from "../ReusableComponents/Form";
import ToggleButton from "../ReusableComponents/ToggleButton";
import AccessModal from "./AccessModal";
import AnimatedBackground from "../ReusableComponents/AnimatedBackground";
import "./IndexPage.css"

function IndexPage() {
    const { API, axios, userAccess, user, todaysDate, setToken} = useContextProvider()
    const { cal_day, cal_day_name, cal_month, cal_month_name, cal_year } = todaysDate
    const [userSchedule, setUserSchedule] = useState([])
    const [hidden, setHidden] = useState(true)
    const navigate = useNavigate()
    
    // test token
    const tokenValue = window.localStorage.getItem('token')
    
    function alertSort() {
        const copyArr = [...userSchedule]
        const alerts = userSchedule.filter(({important}) => important)
        setUserSchedule(alerts)
    }

    function showAll() {
        axios.get(`${API}/schedule?userId=${user.userId}`,)
        .then(({data}) =>{
            if(!data){
                setUserSchedule(false)
            }
            else{
                setUserSchedule(data)
            }   
        } 
        )
        .catch(err => console.log(err))
    }

    useEffect(() => {
        const tokenValue = window.localStorage.getItem('token')
        setToken(tokenValue)
        showAll()
        // axios.get(`${API}/schedule?userId=${user.userId}`,)
        // .then(({data}) =>{
        //     if(!data){
        //         setUserSchedule(false)
        //     }
        //     else{
        //         setUserSchedule(data)
        //     }   
        // } 
        // )
        // .catch(err => console.log(err))
    },[user.userId,  tokenValue])

    if(!userAccess){
        return <AccessModal />
    }

    return (
        <div className="index center">
            <h4>{cal_day_name}<p> {cal_month_name} {cal_day}, {cal_year}</p></h4>
            <h2>{user.userName}'s Calendar</h2>

            <div className="index-list-container">
            <div className="index-list">
            <h3>Date</h3>
            <h3><button onClick={() => showAll()}>Event</button></h3>
            {/* make button on click show alert events */}
            <h3><button onClick={() => alertSort()}>Alert</button></h3>
            <h3>{""}</h3>
            {userSchedule ?
                userSchedule.map(obj => 
                    <IndexMap 
                    key ={obj.id} 
                    obj={obj} 
                    todaysDate={todaysDate}
                    userSchedule={userSchedule}
                    setUserSchedule={setUserSchedule} />
                ) :
                <h4 className="no-schedule"> Add an Event Below</h4>
            }
        
           </div>
           </div>
           <ToggleButton
            stateVar={hidden}
            setFunction={setHidden} />
           {
            !hidden &&
            <Form 
           stateVar={userSchedule}
           setFunction={setUserSchedule}
           buttonToggle={setHidden}
           />
           }

           {
            userSchedule.length > 0 &&
            <Upcoming
            userSchedule={userSchedule} />
           }

           <AnimatedBackground />
          
        </div>
    );
}

export default IndexPage;