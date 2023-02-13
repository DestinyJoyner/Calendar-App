import { Link } from "react-router-dom";
import { useContextProvider } from "./Provider";
import "./Nav.css"

function Nav() {
    const {navbar, setNavBar, darkMode, setDarkMode} = useContextProvider()

    return (
        <div className="nav">
            <button onClick={() => setNavBar(!navbar)}>
                <hr className="nav-hr" />
                <hr className="nav-hr" />
                <hr className="nav-hr" />
            </button> 
            {
                navbar && 
            <nav>
                <Link to ="/">HOME </Link>
                <Link to ="/index">INDEX </Link>
                <Link to ="/index/new">ADD EVENT</Link>
                <Link to ="/about">ABOUT</Link>
             {/* darkmode switch */}
             <label 
             htmlFor="switch"
             className="switch">
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