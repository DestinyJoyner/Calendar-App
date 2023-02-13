import ClickButton from "../ReusableComponents/ClickButton";
import "./LoginModal.css"

function LoginModal({errorMessage, setUserName, setPassValue, setLoginModal}) {
    const errorMsg = typeof errorMessage !== "string" ? `${errorMessage.errors[0].msg} : ${errorMessage.errors[0].param}` : errorMessage
    function closeModal() {
        setUserName("")
        setPassValue("")
        setLoginModal(false)
    }

    return (
        <div className="overlay">
        <div className="loginModal">
        <h3>Trouble Logging In Registering:</h3>
        <p>{errorMsg}</p>
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