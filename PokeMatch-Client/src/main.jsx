//?Imports - react, style, reactstrap, app to launch
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './app/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* app to launch and render */}
    <App />
  </React.StrictMode>,
)
