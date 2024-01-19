import React, { useContext } from "react";
import { FormContext} from "./FormContextProvider";
import FormList from "./FormList";
import axios from "axios";


function Form() {
    const context = useContext(FormContext);

    function deleteForm(id) {
        const updatedForm = context.formSubmits.filter(del => del._id !== id);
        axios.delete(`https://api.vschool.io/harry/thing/${id}`)
            .then(response => context.setFormSubmit(updatedForm))
            .catch(err => console.log(err));
        
    }

    const listOfUglyThings = context.formSubmits.map((form, index) => {
        return [
            <li key={index}>
                <FormList
                    title={form.title}
                    description={ form.description}
                    url={form.imgUrl}
                    index={index}
                    id={form._id}
                    deleteForm={() => deleteForm(form._id)}
                />
            </li>
        ]
    })

    return (
        <div className="div">
            <form className="form">
                <input className="form-title" placeholder="Title" name="title" onChange={context.formChanges} value={context.title} required />
                <input className="form-description" placeholder="Description" name="description" onChange={context.formChanges} value={context.description} required />
                <input className="form-url" placeholder="URL" name="imgUrl" onChange={context.formChanges} value={context.url} required />
                <button className="form-button" onClick={context.formSubmit}>Submit</button> <hr/>
            </form>
            <div>
            <u><h2 className="list-title">List of ugly Things</h2></u>
                <ol>
                    {listOfUglyThings}
                </ol>
            </div>
        </div>
    )
}
export default Form