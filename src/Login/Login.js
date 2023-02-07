import { useState, useEffect } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL

function Login({setToken}) {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")


    //function for adding user
   async function signIn(e) {
    e.preventDefault()
    const tokenValue = await axios.post(`${API}/login`, {
            user: userName,
            passwordVal: password
        })
        .then(({data}) => setToken(data))
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
        value = {password}
        onChange ={(event) => setPassword(event.target.value)} />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  );
}

export default Login;
