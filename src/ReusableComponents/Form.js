import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContextProvider } from "../Components/Provider";
import { handleTextChange, handleCheckbox } from "../Functions/helperFunctions";
import "./Form.css"

function Form({stateVar, setFunction}) {
    const { API, axios, user} = useContextProvider()
    const {id} = useParams()
    const [checked, setChecked] = useState(false)
    const [form, setForm] = useState({
        day_start: "",
        title: "",
        description: "",
        important: checked,
        user_id: user.userId
    })

    function handleSubmit(e) {
        e.preventDefault()
        if(id){
            axios.put(`${API}/schedule/${id}?userId=${user.userId}`, form)
            .then(({data}) => setFunction(data))
            .catch(err => console.log(err))
        }
        else{
            axios.post(`${API}/schedule?userId=${user.userId}`, form)
            .then(({data}) => setFunction([...stateVar, data]))
            .catch(err => console.log(err))
        }
    }

    useEffect(() => {
        if(id){
            axios.get(`${API}/schedule/${id}?userId=${user.userId}`)
            .then(({data}) => {
                if(data.important){
                    setChecked(true)
                }
                setForm(data)
            })
            .catch(err => console.log(err))
        }
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
                 />
            </label>

            <label htmlFor="title">Title: {" "}
                <input
                type="text"
                value={form["title"]}
                id="title"
                onChange={(event) => handleTextChange(event, form, setForm)}
                 />
            </label>

            <label htmlFor="description">Details: {" "}
                <textarea
                value={form["description"]}
                id="description"
                rows="3"
                cols="20"
                onChange={(event) => handleTextChange(event, form, setForm)}
                 />
            </label>
            {/* Checkbox */}
            <label htmlFor="important">Alert: {" "}
                <input
                type="checkbox"
                value={checked}
                id="important"
                onChange={(event) => handleCheckbox(event, setChecked, form, setForm)}
                 />
            </label>

            <input 
            type="submit"/>

        </form>
    );
}

export default Form;