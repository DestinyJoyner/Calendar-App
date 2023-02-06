import { BsGithub } from "react-icons/bs"
import{ AiOutlineLinkedin } from "react-icons/ai"
import { GoMail } from "react-icons"
import "./AboutPage.css"

function AboutPage(props) {
    return (
        <div className="about">
            <section className="about-info">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
               <span></span>
            </section>
        </div>
    );
}

export default AboutPage;