import { useNavigate } from "react-router-dom";
import { useContextProvider } from "./Provider";
import ClickButton from "../ReusableComponents/ClickButton";
import { BsFillCalendarCheckFill, BsFillXSquareFill } from "react-icons/bs"
import "./DeleteModal.css"

function DeleteModal() {
    const { API, axios, setDeleteModal, deleteModalId, user } = useContextProvider()
    const navigate = useNavigate()

    function closeModal() {
        setDeleteModal(false)
    }

    function handleDelete() {
        axios.delete(`${API}/schedule/${deleteModalId}?userId=${user.user_id}`)
        .then(({data}) => {
            setDeleteModal(false)
            navigate("/index")
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="overlay">
            <div className="deleteModal">
            <h3>Permanently Delete This Event?</h3>
            <span>
               <ClickButton
               icon={<BsFillCalendarCheckFill size={"70px"} color={"aqua"} />}
               onClick={handleDelete}
               value={"YES!"} />
                
                <ClickButton
                icon={<BsFillXSquareFill size={"70px"} color={"aqua"} />}
                onClick={closeModal} 
                value={"NO"}
                />
            </span> 
            </div>
        </div>
        
    );
}

export default DeleteModal;