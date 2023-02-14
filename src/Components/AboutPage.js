import { BsGithub } from "react-icons/bs"
import{ AiOutlineLinkedin } from "react-icons/ai"
import UseSound from "../ReusableComponents/UseSound"

import { TfiEmail } from "react-icons/tfi"
import "./AboutPage.css"

function AboutPage() {
    return (
        <div className="about">
            <section className="about-info">
                <h3>About This App</h3>
                <p>I built a React application that allows the user to create an account, login and have the option to add, update, view, and or delete an event to their unique calendar. The user authentication is coded in the backend (Express, and Postgres database) using JSON Web Tokens (JWT), and Bcrypt. </p>
                <h3>About the Developer</h3>
                <p>Born and raised in Harlem, USA, I've always had a flare for solving math and logic puzzles. <br/>
                 I enjoy pushing the limits of what an application can do. I enjoy testing out different functionalities and coding multiple features to provide users with a full (slightly) comical experience each time they visit one of my applications.</p>
            </section>
            <section className="about-links">
                <a href ="https://github.com/DestinyJoyner" >
                    <BsGithub
                    color={"#F9FBFF"}
                    size={"40px"} />
                </a>
                <a href ="https://www.linkedin.com/in/destiny-joyner-934846243/" >
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
        </div>
    );
}

export default AboutPage;