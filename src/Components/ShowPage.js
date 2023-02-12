import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useContextProvider } from "./Provider";
import { dayIconPicker } from "../Functions/helperFunctions";
import { HiBellAlert } from "react-icons/hi2"
import { BsBellSlash } from "react-icons/bs"
import { CiImageOff } from "react-icons/ci"
import ToggleButton from "../ReusableComponents/ToggleButton";
import "./ShowPage.css"

function ShowPage() {
    const { API, axios, user, userAccess,  } = useContextProvider()
    const { id } = useParams()
    const [thisEvent, setThisEvent] = useState({})
    const [hidden, setHidden] = useState(true)
    const { day_start, title, description, important, user_id, cal_month, cal_day, cal_year, cal_day_name, cal_month_name } = thisEvent

   const dayIcon = user_id ? dayIconPicker(cal_day_name) : ""
    

    useEffect(() => {
        axios.get(`${API}/schedule/${id}?userId=${user_id}`)
        .then(({data}) => setThisEvent(data))
        .catch(err => console.log(err))
    },[id])

    return ( 
        <div className="show center">
            <h1>{cal_day_name} {cal_month_name} {cal_day} {cal_year}</h1>
            
            <div className="show-details" >
            <section className="show-buttons">
                    {
                    user_id ? 
                    <img src={dayIcon} alt={cal_day_name} className="day-icon" /> : <CiImageOff size={"100px"} color={"aqua"} />
                    }
                    <Link to ="/index">Back</Link>
                    <ToggleButton
                    stateVar={hidden}
                    setFunction={setHidden}
                    edit={true} />
                </section>
             
                <section className="show-info">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <span>{important ? <HiBellAlert size={"50px"} color={"aqua"}/> : <BsBellSlash size={"50px"} color={"aqua"} />} </span>
                </section>

                

            </div>

        </div>
    );
}

export default ShowPage;