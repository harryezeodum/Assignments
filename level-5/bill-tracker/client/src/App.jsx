import React, {useContext} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import BillTrackerForms from "./components/BillTrackerForms";
import Confirmation from "./components/Confirmation";
import BillTrackerList from "./components/BillTrackerList";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import SignUp from "./components/signup";
import Login from "./components/Login";
import UserBillTracker from "./components/UserBillTracker";
import AdminSignUp from "./components/AdminSignup";
import AdminLogin from "./components/AdminLogin";
import UserBillTrackerListDetail from "./components/UserBillTrackerListDetail";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addbill" element={<BillTrackerForms />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/allbilltrackers" element={<BillTrackerList />} />
        <Route path="/userbilltracker/:billTrackerId" element={<UserBillTrackerListDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userbilltracker" element={<UserBillTracker />} />
        <Route path="/adminsignup" element={<AdminSignUp />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
      </Routes>
    </div>
  )
}

export default App
