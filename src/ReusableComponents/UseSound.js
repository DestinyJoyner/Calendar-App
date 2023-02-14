import useSound from "use-sound";
import gelato from "../assets/Gelato-2sec.m4a"
import droppedCone from "../assets/dropped-cone.png"
import "./UseSound.css"

function UseSound() {
    const [playActive] = useSound(gelato, {volume:.25})

    return (
       <button
       className="use-sound"
       onClick={playActive}>
        <img src={droppedCone} alt="ice-cream"/>
       </button>
    );
}

export default UseSound;