import React, {useContext} from "react";
import { useNavigate } from "react-router";
import { MovieContext } from "./MovieContextProvider";

function Contact() {
    const navigate = useNavigate();
    const context = useContext(MovieContext);
    
    function backButton() {
        navigate(-1);
    }

    return (
        <>
            <button className="backButton" onClick={backButton}>Back</button>
            <h1 className="contact--title">Contact Us</h1>
            <div className="contact">
                Please if you have any question or concerns for missing movies, please fill out the form below to send us a message and we would respond in a timely manner. Thank you
            </div>
            <form className="form">
                <input name="firstname" value={context.form.firstname} onChange={context.formChanges} required className="firstname" placeholder="First Name" />
                <input name="lastname" value={context.form.lastname} onChange={context.formChanges} required className="lastname" placeholder="Last Name" />
                <input name="email" value={context.form.email} onChange={context.formChanges} required className="email" placeholder="Email" />
                <input name="phone" value={context.form.phone} onChange={context.formChanges} required className="phone" placeholder="Phone Number" />
                <textarea name="comments" value={context.form.comments} onChange={context.formChanges} className="text" placeholder="Please provide additional comments"/>
                <button onClick={context.formSubmits} className="form--button">Submit</button>
            </form>
            
        </>
    )
}
export default Contact