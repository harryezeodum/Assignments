import React, { useState, useContext } from "react";
import { UserContext } from "./UserContextProvider";

function AdminSignUp() {
    const userContext = useContext(UserContext);
    const [adminSignupForm, setAdminSignupForm] = useState({
        username: "",
        password: "",
        isAdmin: true
    });
    console.log(adminSignupForm);

    function adminSignupOnChangeForm(event) {
        const { name, type, checked, value } = event.target;
        setAdminSignupForm((prev) => {
            return {
                ...prev, [name]: type === "checkbox" ? checked : value
            }
        });
    }

    function adminSignup(event) {
        event.preventDefault();
        userContext.adminSignup(adminSignupForm);
    }

    return (
        <div>
            <form className="signup" onSubmit={adminSignup}>
                {userContext.errMsg && <p className="error">{userContext.errMsg}</p>}
                <label className="form-title">UserName:</label> <br />
                <input
                    className="form-input"
                    placeholder="Enter Username"
                    name="username"
                    onChange={adminSignupOnChangeForm}
                    value={adminSignupForm.username}
                    required
                /> <br />

                <label className="form-title">Password:</label> <br />
                <input
                    type="password"
                    className="form-input"
                    placeholder="Enter Password"
                    name="password"
                    onChange={adminSignupOnChangeForm}
                    value={adminSignupForm.password}
                    required
                /> <br />

                <label className="form-title">IsAdmin:</label> <br />
                <input
                    type="checkbox"
                    className="form-input"
                    name="isAdmin"
                    onChange={adminSignupOnChangeForm}
                    checked={adminSignupForm.isAdmin}
                    required
                /> <br />

                <button className="form-input">Create Admin Account</button>
            </form>

        </div>
    )
}
export default AdminSignUp