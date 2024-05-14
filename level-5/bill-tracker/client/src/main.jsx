import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BillTrackerContextProvider } from './components/BillTrackerContextProvider.jsx';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <BillTrackerContextProvider>
        <App />
      </BillTrackerContextProvider>
    </Router>
  </React.StrictMode>,
)
