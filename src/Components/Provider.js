import { useContext, createContext, useState } from "react";
import Nav from "./Nav";

export const ContextData = createContext()
export function useContextProvider() {
    return useContext(ContextData)
}


function Provider({children}) {
    const [darkmode, setDarkMode] = useState(false)
    const [navbar, setNavBar] = useState(false)


    return (
    <div className= {darkmode ? "dark" : "App"}>
       <ContextData.Provider value = {{
        darkmode,
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