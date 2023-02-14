import { useContextProvider } from "./Provider";
import AccessModal from "./AccessModal";
import Form from "../ReusableComponents/Form";
import "./NewForm.css"

function NewForm() {
    const { userAccess } = useContextProvider()
    
    if(!userAccess){
        return <AccessModal />
    }

    return (
        <div className="new">
            <h2>Add Event to Schedule</h2>
            <Form formPage={true} /> 
        </div>
    );
}

export default NewForm;