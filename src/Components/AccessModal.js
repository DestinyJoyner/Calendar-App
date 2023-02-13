import ClickButton from "../ReusableComponents/ClickButton";
import { useNavigate } from "react-router-dom";
import "./LoginModal.css"

function AccessModal() {
    const navigate = useNavigate()

    function closeModal() {
        navigate("/")
    }

    return (
        <div className='overlay'>
            <div className='loginModal'>
                <h3>Unauthorized</h3>
                <p>You must login/register for an account to view this page</p>
                <img src="https://media3.giphy.com/media/EIbNk3GZnHYOa9Zfz5/giphy.gif" alt="stop" />
                <span>
                    <ClickButton 
                    icon={"Go Home"}
                    value={"Close"}
                    onClick={closeModal}
                    />  
                </span> 
            </div>
        </div>
    );
}

export default AccessModal;