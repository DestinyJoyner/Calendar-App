import { Link } from "react-router-dom";
import { useContextProvider } from "./Provider";
import Login from "../Login/Login";
import Calendar from "../ReusableComponents/Calendar";
import Footer from "./Footer";
import "./HomePage.css";

function HomePage() {
  const { userAccess } = useContextProvider()

  return (
    <div className="home">

      <article className="home-title">
        <h2>
          <span>Destiny's </span>
          <span>Calendar App</span>
        </h2>
        {
          !userAccess ?
          <Login 
          height = {"70%"}
          width = {"80%"} /> :
          <Link to = "/index">
          <button className="home-button"
          >View My Schedule</button>
          </Link>
        } 
      </article>

      <Calendar />
      <Footer />

    </div>
  );
}

export default HomePage;
