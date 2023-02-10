import { convertDateStamp } from "../Functions/helperFunctions";
import { HiBellAlert } from "react-icons/hi2"

function IndexMap({obj}) {
    const {day_start, title, important} = obj
    
    return (
        <>
        <span>{convertDateStamp(day_start)}</span>
        <span>{title}</span>
        <span>{important ? <HiBellAlert size={"20px"}/> : "" } </span>
        </>
    );
}

export default IndexMap;