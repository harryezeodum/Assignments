import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

function UserContextProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        billtracker: []
    };

    const [userState, setUserState] = useState(initState);
    const [errMsg, setErrMsg] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    function adminSignup(credentials) {
        axios.post("/api/auth/signup", credentials)
            .then(response => {
                console.log(response.data);
                navigate("/allbilltrackers");
                getAllBillTrackers();
            })
            .catch(err => setErrMsg(err.response.data.errMsg));
    }

    function signup(credentials) {
        axios.post("/api/auth/signup", credentials)
            .then(response => {
                const { user, token, isAdmin } = response.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                setUserState(prevUser => {
                    return {
                        ...prevUser, user, token
                    }
                })

                if (token && !isAdmin) {
                    navigate("/userbilltracker");
                    getUserBillTrackers();
                }

                setIsLoggedIn(true);
            })
            .catch(err => setErrMsg(err.response.data.errMsg));
    }

    function adminLogin(credentials) {
        axios.post("/api/auth/login", credentials)
            .then(response => {
                const { user, token, user: { isAdmin } } = response.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));

                setUserState(prevUser => {
                    return {
                        ...prevUser, user, token
                    }
                })
                if (token && isAdmin) {
                    navigate("/allbilltrackers");
                    getAllBillTrackers();
                }
                else {
                    setErrMsg("You are not an Admin, please login as a standard user");
                    return false;
                }

                setIsLoggedIn(true);
            })
            .catch(err => setErrMsg(err.response.data.errMsg));
    }

    function login(credential) {
        axios.post("/api/auth/login", credential)
            .then(response => {
                const { user, token, user: { isAdmin } } = response.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));

                setUserState(prevUser => {
                    return {
                        ...prevUser, user, token
                    }
                })
                if (token && isAdmin === false) {
                    navigate("/userbilltracker");
                    getUserBillTrackers();
                }
                else {
                    setErrMsg("Please login as Admin on home page");
                    return false;
                }

                setIsLoggedIn(true);
            })
            .catch(err => setErrMsg(err.response.data.errMsg));
    }

    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("billtracker");
        setUserState({
            user: {},
            token: "",
            billtracker: []
        });
        setIsLoggedIn(false);
    }

    function getUserBillTrackers() {
        userAxios.get("/api/billtracker/user")
            .then(response => {
                setUserState(prev => {
                    return {
                        ...prev, billtracker: response.data
                    }
                })
            })
            .catch(err => console.log(err.response.data.errMsg))

        setIsLoggedIn(true);
    }

    function getAllBillTrackers() {
        userAxios.get("/api/billtracker")
            .then(response => {
                setUserState(prev => {
                    return {
                        ...prev, billtracker: response.data
                    }
                })
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addBillTracker(billtracker) {
        userAxios.post("/api/billtracker", billtracker)
            .then(response => {
                setUserState(prev => {
                    return {
                        ...prev, billtracker: [...prev.billtracker, response.data]
                    }
                })
            })
            .catch(err => console.log(err.response.data.errMsg));

        navigate("/confirmation");
    }

    function editBillTrackerForm(id, update) {
        userAxios.put(`/api/billtracker/${id}`, update)
            .then(response => setUserState(response.data))
            .catch(err => console.log(err.response.data.errMsg));

        navigate(`/userbilltracker`);
    }

    function deleteBillTracker(id) {
        const deletedBillTracker = userState.billtracker.filter(billtracker => billtracker._id !== id)
        userAxios.delete(`/api/billtracker/${id}`)
            .then(response => setUserState(deletedBillTracker))
            .catch(err => console.log(err))

        navigate("/userbilltracker");
    }

    return (
        <UserContext.Provider value={{
            ...userState,
            signup,
            login,
            logout,
            addBillTracker,
            adminSignup,
            adminLogin,
            setErrMsg,
            getUserBillTrackers,
            editBillTrackerForm,
            deleteBillTracker,
            errMsg,
            isLoggedIn,
            userState
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContextProvider, UserContext }