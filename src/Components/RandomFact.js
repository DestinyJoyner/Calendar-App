import { useEffect, useState } from "react";
import { useContextProvider } from "./Provider";
import { RiQuestionnaireFill } from "react-icons/ri"
import { FaLaughSquint } from "react-icons/fa"
import "./RandomFact.css"

function RandomFact() {
    const { axios, todaysDate } = useContextProvider()
    const {cal_date, cal_month, cal_day, cal_month_name} = todaysDate
    const [randomFact, setRandomFact] = useState({})
    
    /* 
        - need to omit default axios header for this call 
        - create a new instance of axios and remove the default header from it
        - api -> http://numbersapi.com/#42 <- not secure
        - random of the day https://uselessfacts.jsph.pl/
        - random joke https://official-joke-api.appspot.com/jokes/programming/random
    */
    useEffect(() => {
        const newAxios = axios.create()
        delete newAxios.defaults.headers.common['Authorization']
      
            newAxios.get("https://official-joke-api.appspot.com/jokes/programming/random")
            .then(({data})=> setRandomFact(data[0]))
            .catch(err => console.log(err))
    },[])

    return (
        <div className="random">
            {
                randomFact.id &&
                <p className="button-style">
                <span><FaLaughSquint color={"aqua"} size={"50px"} /></span>
                <span>"{randomFact.setup}"</span>
                <span>{randomFact.punchline}</span>
                </p>
            }
            
        </div>
    );
}

export default RandomFact;