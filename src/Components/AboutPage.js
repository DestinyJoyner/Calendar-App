import { useNavigate } from "react-router-dom"
import { useContextProvider } from "./Provider"
import UseSound from "../ReusableComponents/UseSound"
import { BsGithub } from "react-icons/bs"
import{ AiOutlineLinkedin } from "react-icons/ai"
import { TfiEmail } from "react-icons/tfi"
import { BsYoutube } from "react-icons/bs"
import { MdFastfood } from "react-icons/md"
import { FaMoneyCheckAlt } from "react-icons/fa"
import { GiMusicalNotes } from "react-icons/gi"
import notepad from "../assets/notepad.png"
import "./AboutPage.css"

function AboutPage() {
    const { setBonus } = useContextProvider()
    const navigate = useNavigate()
    function unlockBonus(){
        setBonus(true)
        navigate("/bonus")
    }
    // The user authentication is coded in the backend (Express, and Postgres database) using JSON Web Tokens (JWT), Bcrypt and Express-Validator.

    return (
        <div className="about ">
            <section className="about-info">
                <h3>About This App</h3>
                <p>I built a React application that allows the user to create an account, login and have the option to add, update, view, and or delete an event to their unique calendar.</p>
                <h3>About the Developer</h3>
                <p>Born and raised in Harlem, USA, I've always had a flare for solving math and logic puzzles. <br/>
                 I enjoy pushing the limits of what an application can do. I enjoy testing out different functionalities and coding multiple features to provide users with a full (slightly) comical experience each time they visit one of my applications.</p>
                 <h3>Other Noteable Projects</h3>
                 <span className="project-links">
                 <a href ="https://dan-destiny-youtube.netlify.app/" target="blank" >
                    <BsYoutube
                    color={"#f40402"}
                    size={"40px"} />
                </a>
                <a href ="https://team3-snax.netlify.app/" target="blank" >
                    <MdFastfood
                    color={"#2283e6"}
                    size={"40px"} />
                </a>
                <a href ="https://destiny-budget-fullstack-app.netlify.app/" target="blank" >
                    <FaMoneyCheckAlt
                    color={"#5c8f3f"}
                    size={"40px"} />
                </a>
                <a href ="https://destiny-tuner-app.netlify.app/" target="blank" >
                    <GiMusicalNotes
                    color={"#FF10F0"}
                    size={"40px"} />
                </a>
                 </span>
            </section>
            <section className="about-links">
                <a href ="https://github.com/DestinyJoyner" target="blank" >
                    <BsGithub
                    color={"#F9FBFF"}
                    size={"40px"} />
                </a>
                <a href ="https://www.linkedin.com/in/destiny-joyner-934846243/" target="blank" >
                    <AiOutlineLinkedin
                    color={"#F9FBFF"}
                    size={"40px"} />
                </a>
                <a href ="mailto:destinyjoyner@pursuit.org" target="blank" >
                    <TfiEmail
                    color={"#F9FBFF"}
                    size={"40px"} />
                </a>
            </section>
            <UseSound />
            <button 
            className="unlock-bonus"
            onClick={() => unlockBonus()}>
                <img src={notepad} alt="notepad" />
            </button>
        </div>
    );
}

export default AboutPage;