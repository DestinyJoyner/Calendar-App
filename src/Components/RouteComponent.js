import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home";
import Index from "../Pages/Index";
import Show from "../Pages/Show";
import Edit from "../Pages/Edit"
import New from "../Pages/New"
import About from "../Pages/About"


function RouteComponent() {
    return (
        <Routes>
            <Route path = "/">
                <Route index element = {<Home />} />
                <Route path = "about" element = {<About />} />
                <Route path = "index" element = {<Index />} />

            </Route>
        </Routes>
    );
}

export default RouteComponent;