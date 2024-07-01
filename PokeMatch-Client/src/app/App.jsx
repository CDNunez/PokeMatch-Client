//?Imports - react, router, app routes
import React from 'react';
import AppRoutes from './AppRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <Router>
        <AppRoutes />
    </Router>
  )
}

//?Exports app to main.jsx
export default App