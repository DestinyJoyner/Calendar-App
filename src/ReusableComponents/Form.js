import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContextProvider } from "../Components/Provider";
import { handleTextChange, handleCheckbox } from "../Functions/helperFunctions";
import "./Form.css"

function Form({stateVar, setFunction, buttonToggle, formPage}) {
    const { API, axios, user} = useContextProvider()
    const {id} = useParams()
    const navigate = useNavigate()
    const [checked, setChecked] = useState(false)
    const [form, setForm] = useState({
        day_start: "",
        title: "",
        description: "",
        important: checked,
        user_id: user.userId
    })
    const [allEvents, setAllEvents] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        if(id){
            axios.put(`${API}/schedule/${id}?userId=${user.userId}`, form)
            .then(({data}) => {
                setFunction(data)
                buttonToggle(true)
            })
            .catch(err => navigate("/*"))
        }
        else{
            axios.post(`${API}/schedule?userId=${user.userId}`, form)
            .then(({data}) => {
                if(formPage){
                    navigate("/index")
                }
                else{
                    if(!stateVar){
                        setFunction([data])
                    }
                    else{
                        setFunction([...allEvents, data])
                    }
                    
                    setChecked(false)
                    buttonToggle(true)
                    setForm({
                        day_start: "",
                        title: "",
                        description: "",
                        important: "",
                        user_id: user.userId
                    })
                }
            })
            .catch(err => navigate("/*"))
        }
    }

    useEffect(() => {
        if(id){
            axios.get(`${API}/schedule/${id}?userId=${user.userId}`)
            .then(({data}) => {
                setChecked(data.important)
                data.day_start = data.day_start.split(`T`)[0]
                setForm(data)
            })
            .catch(err => console.log(err))
        }
        axios.get(`${API}/schedule?userId=${user.userId}`,)
        .then(({data}) =>{
            if(!data){
                setAllEvents([])
            }
            else{
                setAllEvents(data)
            }   
        } 
        )
        .catch(err => console.log(err))

    },[id])


    return (
        <form 
        className="form"
        onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor="day_start">Date: {" "}
                <input
                type="date"
                value={form["day_start"]}
                id="day_start"
                onChange={(event) => handleTextChange(event, form, setForm)}
                required
                 />
            </label>

            <label htmlFor="title">Title: {" "}
                <input
                type="text"
                value={form["title"]}
                id="title"
                onChange={(event) => handleTextChange(event, form, setForm)}
                required
                 />
            </label>

            <label htmlFor="description">Details: {" "}
                <textarea
                value={form["description"]}
                id="description"
                rows="3"
                cols="30"
                onChange={(event) => handleTextChange(event, form, setForm)}
                 />
            </label>
            {/* Checkbox */}
            <label htmlFor="important">Alert: {" "}
                <input
                type="checkbox"
                checked={checked}
                value={form["important"]}
                id="important"
                onChange={(event) => handleCheckbox(event, checked, setChecked, form, setForm)}
                 />
            </label>

            <input 
            className="button-style"
            type="submit"/>

        </form>
    );
}

export default Form;