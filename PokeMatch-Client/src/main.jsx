import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LogIn from './components/Auth/LogIn'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LogIn />
  </React.StrictMode>,
)
