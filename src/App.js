import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';

import './App.css';
import LandingPage from './Website/LandingPage/Landingpage.js';
// Import your components


function App() {
  return (
    <Router>
       <div className="App">
       
     
        <Routes>
          <Route path="/" element={<LandingPage />} />
         
          {/* Define more routes and corresponding components here */}
        </Routes>
        </div>
      
    
    </Router>
  );
}

export default App;
