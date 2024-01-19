import React, { useState, useContext } from "react";
import { FormContext } from "./FormContextProvider";

function FormList(props) {
    const context = useContext(FormContext);
    const [editForms, setEditForm] = useState({
        title: props.title,
        description: props.description,
        imgUrl: props.url
    });
    const [isEdit, setIsEdit] = useState(false);

    function editForm() {
        setIsEdit(prev => !prev);
    }

    function cancelForm() {
        setIsEdit(prev => !prev);
    }

    function editFormChanges(event) {
        const { name, type, checked, value } = event.target;
        setEditForm(prev => {
            return {
                ...prev, [name]: type === "checkbox" ? checked : value
            }
        });
    }

    function updatedForm() {
        context.updateForm(props.id, editForms);
        setIsEdit(prev => !prev);
    }

    return (
        <div>
            {!isEdit && <div>
                <h3>Title: {props.title}</h3>
                <h3>Description: {props.description}</h3>
                <img src={props.url} className="img" /> <br />
                <button onClick={editForm}>{isEdit ? "Cancel" : "Edit"}</button> <button onClick={props.deleteForm}>Delete</button> <hr/>
            </div>}
            {isEdit && <div>
                <h3><input
                    name="title"
                    placeholder="Title"
                    value={editForms.title}
                    onChange={editFormChanges}
                /> </h3>
                <h3><input
                    name="description"
                    placeholder="Description"
                    value={editForms.description}
                    onChange={editFormChanges}
                /> </h3>
                <h3><input
                    name="imgUrl"
                    placeholder="URL"
                    value={editForms.imgUrl}
                    onChange={editFormChanges}
                /> </h3>
                <button onClick={updatedForm}>Update</button> <button onClick={cancelForm}>Cancel</button>
            </div>}
        </div>
    )
}
export default FormList