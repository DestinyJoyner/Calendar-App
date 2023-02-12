import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContextProvider } from "../Components/Provider";
import UserForm from "../ReusableComponents/UserForm";
import "./Login.css"

// testing tokens and headers 


function Login({width, height}) {
  const { API, axios, setUserAccess, setUser } = useContextProvider();

  const [userName, setUserName] = useState("");
  const [passValue, setPassValue] = useState("");
  // declare state for which submit button was pressed
  const [button, setButton] = useState("");
  const navigate = useNavigate();

  //function for adding/ registering user
  async function signIn(e) {
    e.preventDefault();
    if (button === "login") {
      const tokenValue = await axios.post(`${API}/login`, {
          userName: userName,
          password: passValue,
        })
        .then(({ data }) => {
          setUserAccess(true);
          setUser({
            userName : data.userName,
            userId: data.userId
          })
          window.localStorage.setItem("token", data.jwt)
          window.localStorage.setItem('user', JSON.stringify({
            userName : data.userName,
            userId: data.userId
          }))
          navigate("/index");
        })
        .catch((err) => {
          console.log(err)
          // alert(err.response.data)
          setUserName("")
          setPassValue("")
        });
    }
    if (button === "register") {
      const tokenValue = await axios.post(`${API}/register`, {
          userName: userName,
          password: passValue,
        })
        .then(({ data }) => {
          setUserAccess(true);
          setUser({
            userName : data.userName,
            userId: data.userId
          })
          window.localStorage.setItem("token", data.jwt)
          window.localStorage.setItem('user', JSON.stringify({
            userName : data.userName,
            userId: data.userId
          }))
          navigate("/index")
        })
        .catch((err) => {
          console.log(err.response.data)
          // alert(err.response.data)
          setUserName("")
          setPassValue("")
        })
    }
  }

  return (
    <div className="login"
    style={{height:height, width:width}}>
      {/* <h2>Login</h2> */}

      <UserForm
        stateVar1={userName}
        stateVar2={passValue}
        setFunction1={setUserName}
        setFunction2={setPassValue}
        submitFunction={signIn}
        setButton={setButton}
      />
    </div>
  );
}

export default Login;
