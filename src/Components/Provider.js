import { useContext, createContext, useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import Login from "../Login/Login";

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
    const [token, setToken] = useState(false)
    // state to hold user access if successful login
    const [user, setUser] = useState({})
   

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
        user,
        setUser,

       }}>
        <Nav />

        {children}
       </ContextData.Provider>
    </div>
    );
}

export default Provider;