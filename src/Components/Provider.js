import { useContext, createContext, useState } from "react";
import Nav from "./Nav";

export const ContextData = createContext()
export function useContextProvider() {
    return useContext(ContextData)
}


function Provider({children}) {
    const [darkMode, setDarkMode] = useState(false)
    const [navbar, setNavBar] = useState(false)


    return (
    <div className= {darkMode ? "dark" : "App"}>
       <ContextData.Provider value = {{
        darkMode,
        setDarkMode,
        navbar,
        setNavBar,
       }}>
        <Nav />

        {children}
       </ContextData.Provider>
    </div>
    );
}

export default Provider;