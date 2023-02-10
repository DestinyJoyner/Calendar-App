import { useNavigate } from "react-router-dom";
import { useContextProvider } from "./Provider";
import { FaUserCircle } from "react-icons/fa"
import "./UserInfo.css"

function UserInfo() {
    const  { user, setUserAccess } = useContextProvider() 
    const navigate = useNavigate()
    // function to 'logout'
    function logOut () {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('user')
        setUserAccess(false)
        navigate("/")
    }

    return (
        <div className="userInfo">
            <FaUserCircle color ={"aqua"} size={"65px"} />
            <span>{user.userName}</span>
            <button
            onClick={() => logOut()}>Logout</button>
        </div>
    );
}

export default UserInfo;