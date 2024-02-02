import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MovieContext } from "./MovieContextProvider";

function Confirmation() {
    const context = useContext(MovieContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (context.formSubmit.length === 0) {
            navigate('/');
        }
    }, []);


    return (
        <div className="confirm">
            <h2>Thank you <span className="confirm--text--bold"> {context.formSubmit[0]?.firstname} {context.formSubmit[0]?.lastname}!</span> for reaching out to us, we received your message. We take every inquiry very seriously. Our team would be reaching back to you via email within 5 business days.</h2>
            <span className="confirm--text">Click</span>
            <span className="confirm--text"> <Link className="confirm--text" to="/">
                here 
            </Link> to go back to the Home page.</span>
        </div>
    )
}
export default Confirmation