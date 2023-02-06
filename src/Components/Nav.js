import { Link } from "react-router-dom";
import { useContextProvider } from "./Provider";
import "./Nav.css"

function Nav() {
    const {navbar, setNavBar} = useContextProvider()


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
            </nav>
            }
        </div>
    );
}

export default Nav;