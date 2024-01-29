import React, { useState, useEffect } from "react";
import axios from "axios";

const FormContext = React.createContext();

function FormContextProvider(props) {
    const [form, setForm] = useState({
        title: "",
        description: "",
        imgUrl: ""
    });

    const [formSubmits, setFormSubmit] = useState([]);
   
    function formChanges(event) {
        const { name, type, checked, value } = event.target;
        setForm(prev => {
            return {
                ...prev, [name]: type === "checkbox" ? checked : value
            }
        });
    }

    function formSubmit(event) {
        event.preventDefault();

        axios.post("https://api.vschool.io/harry/thing", form)
            .then(response => setFormSubmit(prev => {
                return [
                    ...prev, response.data
                ]
            }))
            .catch(err => console.log(err))

        setForm({
            title: "",
            description: "",
            imgUrl: ""
        });
    }

    function updateForm(id, update) {
        axios.put(`https://api.vschool.io/harry/thing/${id}`, update)
            .then(response => setFormSubmit(prev => prev.map(updated => updated._id !== id ? updated : response.data)))
            .catch(err => console.log(err));
        
    }

    useEffect(() => {
        axios.get("https://api.vschool.io/harry/thing")
            .then(response => setFormSubmit(response.data))
            .catch(err => console.log(err));
    }, [])
    

    return (
        <>
            <FormContext.Provider value={{
                formChanges,
                formSubmit,
                updateForm,
                setFormSubmit,
                title: form.title,
                description: form.description,
                url: form.imgUrl,
                formSubmits
            }}>
                {props.children}
            </FormContext.Provider>
        </>
    )
}

export { FormContext, FormContextProvider }