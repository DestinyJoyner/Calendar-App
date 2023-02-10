import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import UserInfo from "./UserInfo";

export const ContextData = createContext()
export function useContextProvider() {
    return useContext(ContextData)
}
const API = process.env.REACT_APP_API_URL
// declare default header value to be included in all axios calls (token from localStorage(temporary use))
const token = window.localStorage.getItem('token')
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
const userStored = JSON.parse(window.localStorage.getItem('user'))

function Provider({children}) {
    const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
    // const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const date = new Date()

    const [darkMode, setDarkMode] = useState(false)
    const [navbar, setNavBar] = useState(false)
    // declare state to hold obj with values of today's date
    const [todaysDate, setTodaysDate] = useState({})
    // state to hold user info
    const [user, setUser] = useState(userStored ? userStored : {})
    // state to hold user access if successful login
    const [userAccess, setUserAccess] = useState(user.user_id? true : false)
    

    // useEffect to check current session of user still active i.e token = true
    useEffect(() => {
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
        todaysDate, 
        setTodaysDate,
        user, 
        setUser,
        userAccess, 
        setUserAccess,

       }}>
        <Nav />
        {userAccess && <UserInfo />}

        {children}
       </ContextData.Provider>
    </div>
    );
}

export default Provider;