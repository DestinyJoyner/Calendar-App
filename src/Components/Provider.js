import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";


export const ContextData = createContext()
export function useContextProvider() {
    return useContext(ContextData)
}

function Provider({children}) {
    const API = process.env.REACT_APP_API_URL

     const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
     const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
     const date = new Date()

    const [darkMode, setDarkMode] = useState(false)
    const [navbar, setNavBar] = useState(false)
    // declare state to hold obj with values of today's date
    const [todaysDate, setTodaysDate] = useState({
        day: date.getDate(),
        dow: daysOfWeek[date.getDay()],
        monthName: date.toLocaleString('default', {month: 'long'}),
        month: date.getMonth() + 1,
        year: date.getFullYear()
    })

    // state for user Login
    const [token, setToken] = useState({})
    // state to hold user access if successful login
    const [userSchedule, setUserSchedule] = useState()

    // useEffect to check current session of user still active i.e token = true
    useEffect(() => {
        const isToken = JSON.parse(window.localStorage.getItem('token'))
        
        if(JSON.parse(window.localStorage.getItem('token'))){
            setToken(isToken)
            axios.get(`${API}/schedule?userId=${isToken.id}&credentials=${isToken.token}`)
            .then(({data}) => setUserSchedule(data))
            .catch(err => console.log(err))
        }
    }, [])
   

    return (
    <div className= {darkMode ? "dark" : "App"}>
       <ContextData.Provider value = {{
        API,
        axios,
        darkMode,
        setDarkMode,
        navbar,
        setNavBar,
        daysOfWeek,
        monthArr,
        todaysDate, 
        setTodaysDate,
        token,
        setToken,
        userSchedule,
        setUserSchedule,

       }}>
        <Nav />

        {children}
       </ContextData.Provider>
    </div>
    );
}

export default Provider;