import { useEffect, useState } from "react";

import { useContextProvider } from "./Provider";

import "./IndexPage.css"

function IndexPage(props) {
    const { API, axios, userAccess, user} = useContextProvider()
    const [userSchedule, setUserSchedule] = useState()


    useEffect(() => {
        axios.get(`${API}/schedule?userId=${user.userId}`,)
        .then(({data}) => setUserSchedule(data))
        .catch(err => console.log(err))
    },[user.userId])

    return (
        <div className="index">
           Index 
        </div>
    );
}

export default IndexPage;