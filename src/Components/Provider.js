import { useContext, createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";
import UserInfo from "./UserInfo";
import DeleteModal from "./DeleteModal";
import RandomFact from "./RandomFact";

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
    const {pathname} = useLocation()

    const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
    const dateObj = new Date()
    const date = dateObj.toLocaleString("en-US", {timeZone: "America/New_York"}).split(',').join(``).replaceAll("/","-").split(` `)[0]
   
    const [darkMode, setDarkMode] = useState(false)
    const [navbar, setNavBar] = useState(false)
    // declare state to hold obj with values of today's date
    const [todaysDate, setTodaysDate] = useState({})
    // state to hold user info
    const [user, setUser] = useState(userStored ? userStored : {})
    // state to hold user access if successful login
    const [userAccess, setUserAccess] = useState(user.userId? true : false)
    // state to toggle delete modal prompt
    const [deleteModal, setDeleteModal] = useState(false)
    // state to store id value of event to be deleted
    const [deleteModalId, setDeleteModalId] = useState("")
   
    // useEffect to check current session of user still active i.e token = true
    useEffect(() => {
        // axios call to get info for today's date
        axios.get(`${API}/calendar/${date}`)
        .then(({data}) => setTodaysDate(data))
        .catch(err => console.log(err))
    }, [])
    
    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [pathname])
   
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
        date,
        user, 
        setUser,
        userAccess, 
        setUserAccess,
        deleteModal,
        setDeleteModal,
        deleteModalId,
        setDeleteModalId,

       }}>
        <Nav />
        <RandomFact />
        {userAccess && <UserInfo />}
        {deleteModal && <DeleteModal />}
        
        {children}
       </ContextData.Provider>
    </div>
    );
}

export default Provider;