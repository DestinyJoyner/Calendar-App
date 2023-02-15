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
        - api -> http://numbersapi.com/#42 <- not secure
        - random of the day https://uselessfacts.jsph.pl/
    */
    useEffect(() => {
        const newAxios = axios.create()
        delete newAxios.defaults.headers.common['Authorization']
      
            newAxios.get("https://uselessfacts.jsph.pl/today.json?language=en")
            .then(({data})=> setRandomFact(data.text))
            .catch(err => console.log(err))

    },[cal_date])

    return (
        <div className="random">
            
            <p className="button-style">
                <span><RiQuestionnaireFill color={"aqua"} size={"50px"} /></span>
                <span>"{randomFact}"</span>
            </p>
        </div>
    );
}

export default RandomFact;