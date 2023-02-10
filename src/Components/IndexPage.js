import { useEffect, useState } from "react";

import { useContextProvider } from "./Provider";

import "./IndexPage.css"

function IndexPage(props) {
    const { API, axios, userAccess, user} = useContextProvider()
    const [userSchedule, setUserSchedule] = useState()


    useEffect(() => {
        console.log(user)
        axios.get(`${API}/schedule?userId=${user.user_id}`,)
        .then(({data}) => setUserSchedule(data))
        .catch(err => console.log(err))
    },[user._userid])

    return (
        <div className="index">
           Index 
        </div>
    );
}

export default IndexPage;