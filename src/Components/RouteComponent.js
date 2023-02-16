import { Routes, Route } from "react-router-dom"
import { useContextProvider } from "./Provider";
import Home from "../Pages/Home";
import Index from "../Pages/Index";
import Show from "../Pages/Show";
import New from "../Pages/New"
import About from "../Pages/About"
import Error from "../Pages/Error";
import Bonus from "../Bonus/Bonus";

function RouteComponent() {
    const { bonus } = useContextProvider()
    return (
        <Routes>
            <Route path = "/">
                <Route index element = {<Home />} />
                <Route path = "about" element = {<About />} />
                <Route path = "index"> 
                    <Route index element = {<Index />} />
                    <Route path = "new" element={<New />} />
                    <Route path = ":id" element = {<Show />} />
                </Route>
                {bonus ? <Route path ="bonus" element = {<Bonus />} /> : <></>}
            </Route>
            <Route path="*" element={<Error />} />
        </Routes>
    );
}

export default RouteComponent;