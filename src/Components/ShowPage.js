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
import "./ShowPage.css"

function ShowPage() {
    const { API, axios, user, userAccess, setDeleteModal, setDeleteModalId} = useContextProvider()
    const { id } = useParams()
    const navigate = useNavigate()
    const [thisEvent, setThisEvent] = useState({})
    const [hidden, setHidden] = useState(true)
    const { day_start, title, description, important, user_id, cal_month, cal_day, cal_year, cal_day_name, cal_month_name } = thisEvent

   const dayIcon = user_id ? dayIconPicker(cal_day_name) : ""

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
    },[id])

    return ( 
        <div className="show center">
            <h1>{cal_day_name} {cal_month_name} {cal_day} {cal_year}</h1>
            
            <div className="show-details" >
                {
                    user_id ? 
                    <img src={dayIcon} alt={cal_day_name} className="day-icon" /> : <CiImageOff size={"100px"} color={"aqua"} />
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
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <span>{important ? <HiBellAlert size={"50px"} color={"aqua"}/> : <BsBellSlash size={"50px"} color={"aqua"} />} </span>
                </section>

                

            </div>

        </div>
    );
}

export default ShowPage;