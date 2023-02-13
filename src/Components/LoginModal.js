import ClickButton from "../ReusableComponents/ClickButton";
import "./LoginModal.css"

function LoginModal({errorMessage, setUserName, setPassValue, setLoginModal}) {

    function closeModal() {
        setUserName("")
        setPassValue("")
        setLoginModal(false)
    }

    return (
        <div className="overlay">
        <div className="loginModal">
        <h3>Trouble Logging In Registering:</h3>
        <p>{errorMessage}</p>
        <img src="https://media3.giphy.com/media/EIbNk3GZnHYOa9Zfz5/giphy.gif" alt="stop" />
        <span>
           <ClickButton
           icon={"Try Again"}
           onClick={closeModal}
           value={"Close"} />  
        </span> 
        </div>
    </div>
    );
}

export default LoginModal;