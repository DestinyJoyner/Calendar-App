import { Link } from "react-router-dom";
import { convertDateStamp } from "../Functions/helperFunctions";
import { HiBellAlert } from "react-icons/hi2"

function IndexMap({obj}) {
    const {day_start, title, important, id} = obj
    
    return (
        <>
        <span>{convertDateStamp(day_start)}</span>
        <Link to={`/index/${id}`}><span>{title}</span></Link>
        <span>{important ? <HiBellAlert size={"20px"}/> : "" } </span>
        </>
    );
}

export default IndexMap;