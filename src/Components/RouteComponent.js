import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home";
import Index from "../Pages/Index";
import Show from "../Pages/Show";
import Edit from "../Pages/Edit"
import New from "../Pages/New"
import About from "../Pages/About"

import Dashboard from "../Login/Dashboard";
import Preferences from "../Login/Preferences";

function RouteComponent() {
    return (
        <Routes>
            <Route path = "/">
                <Route index element = {<Home />} />
                <Route path = "about" element = {<About />} />
                <Route path = "index" element = {<Index />} />

                <Route path= "preferences" element = {<Preferences />} />
                <Route path = "dashboard" element = {<Dashboard />} />
            </Route>
        </Routes>
    );
}

export default RouteComponent;