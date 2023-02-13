import { Link } from "react-router-dom";
import { convertDateStamp, compareDate } from "../Functions/helperFunctions";
import { HiBellAlert } from "react-icons/hi2"

function IndexMap({obj, todaysDate}) {
    const {day_start, title, important, id} = obj
    const pastDate = obj.day_start ? compareDate(todaysDate.cal_date, day_start) : false

    return ( day_start &&
        <>
        <span>{ convertDateStamp(day_start)}</span>
        <Link 
        to={`/index/${id}`}>
            <span
            style={pastDate ? {textDecoration:"line-through", textDecorationColor: "black"} : {}}>{title}</span>
        </Link>
        <span>{important ? <HiBellAlert size={"20px"}/> : "" } </span>
        </>
    );
}

export default IndexMap;