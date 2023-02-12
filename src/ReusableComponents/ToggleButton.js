import { useState } from "react";
import { GrTableAdd } from "react-icons/gr"
import { MdEditCalendar } from "react-icons/md"
import { BiAddToQueue } from "react-icons/bi"
import "./ToggleButton.css"


function ToggleButton({stateVar, setFunction, edit}) {
    
    return (
        <div className="hover-text">
        <button 
        className="toggle-button"
        onClick={() => setFunction(!stateVar)}>
            {!edit ? <GrTableAdd size={"38px"} /> : <MdEditCalendar color={"white"} size= {"60px"} /> }
        </button>
        <span>{edit ? "Edit Event" : "Add New Event" }</span>
        </div>
    );
}

export default ToggleButton;