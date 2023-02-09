import { useContextProvider } from "./Provider";
import Login from "../Login/Login";
import "./IndexPage.css"

function IndexPage(props) {
    const {userAccess, userSchedule, setUserSchedule} = useContextProvider()

    if(!userAccess){
        return <Login />
      }
    return (
        <div>
           Index 
        </div>
    );
}

export default IndexPage;