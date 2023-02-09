import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";

export const ContextData = createContext()
export function useContextProvider() {
    return useContext(ContextData)
}

// declare default header value to be included in all axios calls (token from localStorage(temporary use))
const token = window.localStorage.getItem('token')
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
const userStored = JSON.parse(window.localStorage.getItem('user'))

function Provider({children}) {
    const API = process.env.REACT_APP_API_URL

     const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
     const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
     const date = new Date()

    const [darkMode, setDarkMode] = useState(false)
    const [navbar, setNavBar] = useState(false)
    // declare state to hold obj with values of today's date
    const [todaysDate, setTodaysDate] = useState({})
    // state to hold user info
    const [user, setUser] = useState(userStored ? userStored : {})
    // state to hold user access if successful login
    const [userAccess, setUserAccess] = useState(token? true : false)
    const [userSchedule, setUserSchedule] = useState()

    // useEffect to check current session of user still active i.e token = true
    useEffect(() => {
        if(token){
            axios.get(`${API}/schedule`, {userId: user.userId,
            userName: user.userName
            })
            .then(({data}) => setUserSchedule(data))
            .catch(err => console.log(err))
        }
        // axios call to get info for today's date
        axios.get(`${API}/calendar/${date.toISOString().split('T')[0]}`)
        .then(({data}) => setTodaysDate(data))
        .catch(err => console.log(err))
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
        userSchedule,
        setUserSchedule,
        user, 
        setUser,
        userAccess, 
        setUserAccess,

       }}>
        <Nav />

        {children}
       </ContextData.Provider>
    </div>
    );
}

export default Provider;