import { useContext, createContext, useState } from "react";
import Nav from "./Nav";

export const ContextData = createContext()
export function useContextProvider() {
    return useContext(ContextData)
}

function Provider({children}) {
     // array for seven days of week
     const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
     const date = new Date()

    const [darkMode, setDarkMode] = useState(false)
    const [navbar, setNavBar] = useState(false)
    // declare state to hold obj with values of today's date
    const [todaysDate, setTodaysDate] = useState({
        day: date.getDate(),
        dow: daysOfWeek[date.getMonth() + 1],
        month: date.toLocaleString('default', {month: 'long'}),
        year: date.getFullYear()
    })
   

    return (
    <div className= {darkMode ? "dark" : "App"}>
       <ContextData.Provider value = {{
        darkMode,
        setDarkMode,
        navbar,
        setNavBar,
        daysOfWeek,
        todaysDate, 
        setTodaysDate,
       }}>
        <Nav />

        {children}
       </ContextData.Provider>
    </div>
    );
}

export default Provider;