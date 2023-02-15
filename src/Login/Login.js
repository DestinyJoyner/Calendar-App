import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContextProvider } from "../Components/Provider";
import UserForm from "../ReusableComponents/UserForm";
import LoginModal from "../Components/LoginModal";
import HelpModal from "../Components/HelpModal";
import { MdLiveHelp } from "react-icons/md"
import "./Login.css"

function Login({width, height}) {
  const { API, axios, setUserAccess, setUser } = useContextProvider();
  const [userName, setUserName] = useState("");
  const [passValue, setPassValue] = useState("");
  // declare state for which submit button was pressed
  const [button, setButton] = useState("");
  // declare state for Login Modal
  const [loginModal, setLoginModal] = useState(false)
  // state for error message from catch
  const [errorMessage, setErrorMessage] = useState("")
  // state for help modal 
  const [help, setHelp] = useState(false)
  const navigate = useNavigate();

  function successLogin(value) {
    setUserAccess(true);
          setUser({
            userName : value.userName,
            userId: value.userId
          })
          window.localStorage.setItem("token", value.jwt)
          window.localStorage.setItem('user', JSON.stringify({
            userName : value.userName,
            userId: value.userId
          }))
  }

  //function for adding/ registering user
  async function signIn(e) {
    e.preventDefault();
    if (button === "login") {
      const tokenValue = await axios.post(`${API}/login`, {
          userName: userName,
          password: passValue,
        })
        .then(({ data }) => data
        )
        .catch((err) => {
          if(!err.response.data){
            navigate("/*")
          }
          else {
            setErrorMessage(err.response.data)
            setLoginModal(true)
          }
        });

        // after await tokenValue variable
        if(tokenValue){
         successLogin(tokenValue)
        }  
    }
    if (button === "register") {
      const tokenValue = await axios.post(`${API}/register`, {
          userName: userName,
          password: passValue,
        })
        .then(({ data }) => data)
        .catch((err) => {
          if(!err.response.data){
            navigate("/*")
          }
          else {
            setErrorMessage(err.response.data)
            setLoginModal(true)
          }
        })

        if(tokenValue){
          successLogin(tokenValue)
         }
    }
  }

  return (
    <div className="login"
    style={{height:height, width:width}}>

      <UserForm
        stateVar1={userName}
        stateVar2={passValue}
        setFunction1={setUserName}
        setFunction2={setPassValue}
        submitFunction={signIn}
        setButton={setButton}
      />

      <button 
      className="help-button"
      onClick={() => setHelp(true)}>
        <MdLiveHelp color={"aqua"} size={"25px"} />
      </button>

      {
        help && <HelpModal setFunction={setHelp} />
      }

      {
        loginModal && 
        <LoginModal
        errorMessage={errorMessage}
        setUserName = {setUserName}
        setPassValue={setPassValue}
        setLoginModal={setLoginModal} />
      }
    </div>
  );
}

export default Login;
