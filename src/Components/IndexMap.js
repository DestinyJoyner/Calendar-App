import { Link } from "react-router-dom";
import { useContextProvider } from "./Provider";
import { convertDateStamp, compareDate } from "../Functions/helperFunctions";
import { HiBellAlert } from "react-icons/hi2"
import { IoIosRemoveCircle } from "react-icons/io"

function IndexMap({obj, todaysDate, userSchedule, setUserSchedule}) {
    const { API, axios } = useContextProvider()
    const {day_start, title, important, id, user_id} = obj
    const pastDate = day_start && todaysDate.cal_date ? compareDate(todaysDate.cal_date, day_start) : false

    function handleDelete(idValue) {
        axios.delete(`${API}/schedule/${idValue}?userId=${user_id}`)
        .then(({data}) => {
        const newArr = userSchedule.filter(({ id }) => data.id  !== id)
        setUserSchedule(newArr)
        })
        .catch(err => console.log(err))
    }

    return ( day_start &&
        <>
        <span>{ convertDateStamp(day_start)}</span>
        <Link 
        to={`/index/${id}`}>
            <span
            style={pastDate ? {textDecoration:"line-through", textDecorationColor: "black"} : {}}>{title}</span>
        </Link>
        <span>{important ? <HiBellAlert size={"20px"}/> : "" } </span>
        <button onClick={() => handleDelete(id) }><IoIosRemoveCircle size={"20px"} /></button>
        </>
    );
}

export default IndexMap;