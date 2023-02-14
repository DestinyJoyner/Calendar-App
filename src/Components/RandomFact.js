import { useEffect, useState } from "react";
import { useContextProvider } from "./Provider";
import { RiQuestionnaireFill } from "react-icons/ri"
import "./RandomFact.css"

function RandomFact() {
    const { axios, todaysDate } = useContextProvider()
    const {cal_date, cal_month, cal_day, cal_month_name} = todaysDate
    const [randomFact, setRandomFact] = useState("")
    
    /* 
        - need to omit default axios header for this call 
        - create a new instance of axios and remove the default header from it
        - api -> http://numbersapi.com/#42
    */
    useEffect(() => {
        const newAxios = axios.create()
        delete newAxios.defaults.headers.common['Authorization']
        if(cal_month && cal_day){
            newAxios.get(`http://numbersapi.com/${cal_month}/${cal_day}/date`)
            .then(({data})=> setRandomFact(data))
            .catch(err => console.log(err))
        }
        
    },[cal_day])

    return (
        <div className="random">
            
            <p>
                <span><RiQuestionnaireFill color={"aqua"} size={"50px"} /></span>
                <span>"{randomFact}"</span>
            </p>
        </div>
    );
}

export default RandomFact;