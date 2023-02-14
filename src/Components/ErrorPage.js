import { useNavigate } from "react-router-dom";
import errorImage from "../assets/control-z.png"
import "./ErrorPage.css"

function ErrorPage() {
    const navigate = useNavigate()

    return (
        <div className="error center">
            <h1>Either Something Went Horribly Wrong....</h1>
            <h2>....Or You're Terribly Lost</h2>
            <img src={errorImage} alt="undo" />
            <button 
            className="error-button"
            onClick={() => navigate("/")}>Back To Home</button>
        </div>
    );
}

export default ErrorPage;