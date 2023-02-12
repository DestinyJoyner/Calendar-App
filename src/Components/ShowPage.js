import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useContextProvider } from "./Provider";
import { dayIconPicker } from "../Functions/helperFunctions";
import { HiBellAlert } from "react-icons/hi2"
import { BsBellSlash } from "react-icons/bs"
import { CiImageOff } from "react-icons/ci"
import { RiArrowGoBackLine } from "react-icons/ri"
import { IoIosRemoveCircle } from "react-icons/io"
import ClickButton from "../ReusableComponents/ClickButton";
import ToggleButton from "../ReusableComponents/ToggleButton";
import Calendar from "../ReusableComponents/Calendar";
import Form from "../ReusableComponents/Form";
import "./ShowPage.css"

function ShowPage() {
    const { API, axios, user, userAccess, setDeleteModal, setDeleteModalId} = useContextProvider()
    const { id } = useParams()
    const navigate = useNavigate()
    const [thisEvent, setThisEvent] = useState({})
    const [hidden, setHidden] = useState(true)
    const { day_start, title, description, important, user_id, cal_month, cal_day, cal_year, cal_day_name, cal_month_name } = thisEvent
   
   const dayIcon = cal_day_name ? dayIconPicker(cal_day_name) : ""

   function deletePrompt() {
    setDeleteModalId(id)
    setDeleteModal(true)
   }

   function goBack() {
    navigate("/index")
   }
    
    useEffect(() => {
        axios.get(`${API}/schedule/${id}?userId=${user_id}`)
        .then(({data}) => setThisEvent(data))
        .catch(err => console.log(err))
    },[id, thisEvent.day_start])

    return ( 
        <div className="show center">
            <h1>{cal_day_name} {cal_month_name} {cal_day} {cal_year}</h1>
            
            <div className="show-details" >
                {
                    cal_day_name ? 
                    <img src={dayIconPicker(cal_day_name)} alt={cal_day_name} className="day-icon" /> : <CiImageOff size={"100px"} color={"aqua"} />
                }
                { day_start && <Calendar 
                date={day_start.slice(0,10)}
                height={"80%"}
                width={"100%"}/>
}
            <section className="show-buttons">
                    <ClickButton
                    style={"go-back"}
                    icon={<RiArrowGoBackLine size={"60px"} color={"aqua"} />} 
                    onClick={goBack}
                    value={"Go Back"}/>
                   
                    <ToggleButton
                    stateVar={hidden}
                    setFunction={setHidden}
                    edit={true} />

                    <ClickButton 
                    style={"delete"}
                    icon={<IoIosRemoveCircle size={"60px"} color={"aqua"}/>}
                    onClick={deletePrompt}
                    value= {"Delete"}/>
                </section>
             
                <section className="show-info">
                    <h2>
                        <span>Event: </span>
                        {title}
                    </h2>
                    <p>
                        <span>Details: </span>
                        {description}
                    </p>
                    <span>
                        <span>Important?<br/></span>
                        {important ? <HiBellAlert size={"50px"} color={"aqua"}/> : <BsBellSlash size={"50px"} color={"aqua"} />}
                    </span>
                </section>

                {
                    !hidden &&
                    <Form 
                    stateVar={thisEvent}
                    setFunction={setThisEvent}
                    buttonToggle={setHidden}/>
                }

            </div>

        </div>
    );
}

export default ShowPage;