import { useState, useEffect } from "react";
import { useContextProvider } from "../Components/Provider";


function Login() {
  const {API, axios, token, setToken, setUser} = useContextProvider()
  
    const [userName, setUserName] = useState("")
    const [passValue, setPassValue] = useState("")


    //function for adding user
   async function signIn(e) {
    e.preventDefault()
    const tokenValue = await axios.post(`${API}/login`, {
            userName: userName,
            password: passValue
        })
        .then(({data}) => {
          setUser(data)
          setToken(data.token)
          window.localStorage.setItem('token', data.token)
        })
        .catch(err => console.log(err))
    }


  return (
    <div className="login">
        <h2>Login</h2>
    <form onSubmit={(event) => signIn(event)}>
      <label>
        <p>Username</p>
        <input 
        type="text"
        value = {userName}
        onChange ={(event) => setUserName(event.target.value)} />
      </label>
      <label>
        <p>Password</p>
        <input 
        type="password"
        value = {passValue}
        onChange ={(event) => setPassValue(event.target.value)} />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  );
}

export default Login;
