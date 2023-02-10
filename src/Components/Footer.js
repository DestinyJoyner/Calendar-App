import { VscGithub } from "react-icons/vsc"
import { GrLinkedin } from "react-icons/gr"
import { TfiEmail } from "react-icons/tfi"
import "./Footer.css"

function Footer(props) {
    return (
        <section className="squares">
        <div>
          <span className="square1">s1</span>
        </div>
        <div>
          <span className="square2">
            <span>Destiny Joyner</span>
          </span>
        </div>
        <div>
          <span className="square3">
            <span>
                <a href= "https://github.com/DestinyJoyner" target="blank">
                    <VscGithub color={"aqua"} size={"40px"}/>
                </a>
            </span>
            <span>
                <a href= "https://www.linkedin.com/in/destiny-joyner-934846243/" target="blank">
                    <GrLinkedin color={"aqua"} size={"40px"}/>
                </a>
                </span>
            <span>
                <a href= "mailto:destinyjoyner@pursuit.org" target="blank">
                    <TfiEmail color={"aqua"} size={"40px"}/>
                </a>
            </span>
          </span>
        </div>
      </section>
    );
}

export default Footer;