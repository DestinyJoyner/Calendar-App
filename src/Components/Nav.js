import { Link } from "react-router-dom";
import { useContextProvider } from "./Provider";
import "./Nav.css"

function Nav() {
    const {navbar, setNavBar, darkMode, setDarkMode} = useContextProvider()
console.log(darkMode)


    return (
        <div className="nav">
            <button onClick={() => setNavBar(!navbar)}>
                <hr />
                <hr />
                <hr />
            </button> 
            {
                navbar && 
            <nav>
                <span>
                    <Link to ="/">HOME </Link>
                    <hr className="white-line" />
                </span>
                <span>
                    <Link to ="/about">ABOUT</Link>
                    <hr className="white-line" />
                </span>
                <span>
                    <Link to ="/">HOME </Link>
                    
                </span> 
             {/* darkmode switch */}
             <label 
             htmlFor="switch"
             className="switch">Toggle
                <input 
                type="checkbox" 
                id="switch"
                value={darkMode}
                onChange={() => setDarkMode(!darkMode)} 
                />
                <span className="slider round"></span>
             </label>
            </nav>
            }
        </div>
    );
}

export default Nav;