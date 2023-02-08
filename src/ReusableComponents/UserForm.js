
function UserForm({stateVar1, stateVar2, setFunction1, setFunction2, submitFunction, setButton}) {


    return (
    <form onSubmit={(event) => submitFunction(event)}>
      <label>
        <p>Username:</p>
        <input 
        type="text"
        placeholder="maximum 15 characters..."
        value = {stateVar1}
        onChange ={(event) => setFunction1(event.target.value)}
        required />
      </label>
      <label>
        <p>Password:</p>
        <input 
        type="password"
        placeholder="minimum 5 characters...."
        value = {stateVar2}
        onChange ={(event) => setFunction2(event.target.value)} 
        required />
      </label>
      <div>
        <button 
        type="submit"
        onClick = {() => setButton("login")}>
            Login
        </button>

        <button 
        type="submit"
        onClick = {() => setButton("register")}>
            Register
        </button>
      </div>
    </form>
    );
}

export default UserForm;