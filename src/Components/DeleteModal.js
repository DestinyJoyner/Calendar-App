import "./DeleteModal.css"

function DeleteModal(props) {
    return (
        <div className="overlay">
            <div className="deleteModal">
            <h3>Are You Sure You Want To Permanently Delete This Log?</h3>
            {/* <span>
                <button onClick={() => deleteLog()}>
                    Delete Log
                </button>
                <button onClick={() => goBack()}>
                        Go Back
                </button>
            </span>  */}
        </div>
        </div>
        
    );
}

export default DeleteModal;