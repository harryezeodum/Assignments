import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BillTrackerForms from "./components/BillTrackerForms";
import Confirmation from "./components/Confirmation";
import BillTrackerList from "./components/BillTrackerList";
import BillTrackerListDetail from "./components/BillTrackerListDetail";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<BillTrackerForms />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/allbilltrackers" element={<BillTrackerList />} />
        <Route path="/allbilltrackers/:billTrackerId" element={<BillTrackerListDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  )
}

export default App
