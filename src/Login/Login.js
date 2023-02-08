import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContextProvider } from "../Components/Provider";
import UserForm from "../ReusableComponents/UserForm";
import "./Login.css"

function Login() {
  const { API, axios, token, setToken, setUser } = useContextProvider();

  const [userName, setUserName] = useState("");
  const [passValue, setPassValue] = useState("");
  // declare state for which submit button was pressed
  const [button, setButton] = useState("");
  const navigate = useNavigate();

  //function for adding/ registering user
  async function signIn(e) {
    e.preventDefault();
    if (button === "login") {
      const tokenValue = await axios
        .post(`${API}/login`, {
          userName: userName,
          password: passValue,
        })
        .then(({ data }) => {
          setToken(data);
          window.localStorage.setItem("token", JSON.stringify({
            token: data.token,
            userId: data.id,
            userName: data.userName
          }));
          navigate("/index");
        })
        .catch((err) => {
          alert(err.response.data)
          setUserName("")
          setPassValue("")
        });
    }
    if (button === "register") {
      const tokenValue = await axios
        .post(`${API}/register`, {
          userName: userName,
          password: passValue,
        })
        .then(({ data }) => {
          console.log(data)
          setToken(data);
          window.localStorage.setItem("token", JSON.stringify({
            token: data.token,
            userId: data.id,
            userName: data.userName
          }));
          navigate("/index")
        })
        .catch((err) => {
          alert(err.response.data)
          setUserName("")
          setPassValue("")
        })
    }
  }

  return (
    <div className="login">
      <h2>Login</h2>

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
