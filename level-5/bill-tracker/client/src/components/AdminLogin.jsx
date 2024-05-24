import React, { useContext, useState } from "react";
import { UserContext } from "./UserContextProvider"

function AdminLogin() {
    const userContext = useContext(UserContext);
    const [adminLoginForm, setAdminLoginForm] = useState({
        username: "",
        password: ""
    });

    function adminLoginOnChangeForm(event) {
        const { name, type, checked, value } = event.target;
        setAdminLoginForm((prev) => {
            return {
                ...prev, [name]: type === "checkbox" ? checked : value
            }
        });
    }

    function admin(event) {
        event.preventDefault();
        userContext.adminLogin(adminLoginForm);
    }

    return (
        <div>
            <h2 className="signup">Admin Login</h2>
            <form className="signup" onSubmit={admin}>
                {userContext.errMsg && <p className="error">{userContext.errMsg}</p>}
                <label className="form-title">UserName:</label> <br />
                <input
                    className="form-input"
                    placeholder="Enter Username"
                    name="username"
                    onChange={adminLoginOnChangeForm}
                    value={adminLoginForm.username}
                    required
                /> <br />

                <label className="form-title">Password:</label> <br />
                <input
                    type="password"
                    className="form-input"
                    placeholder="Enter Password"
                    name="password"
                    onChange={adminLoginOnChangeForm}
                    value={adminLoginForm.password}
                    required
                /> <br />

                <button className="form-input">Login</button>
            </form>

        </div>
    )
}
export default AdminLogin