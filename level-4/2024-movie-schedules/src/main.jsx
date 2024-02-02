import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { MovieContextProvider } from './components/MovieContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <MovieContextProvider>
        <App />
      </MovieContextProvider>
    </Router>
  </React.StrictMode>,
)
