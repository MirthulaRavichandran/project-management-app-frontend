import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import AdminRegistration from './AdminRegistration';
import Admindashboard from './Admindashboard';


const App = () => {
  return (
    <Router>
      
      <Routes>

        <Route path='' element={<AdminRegistration/>}/>
        <Route path="/Login" element={<Login />} />
        <Route path="/Admindashboard" element={<Admindashboard />} />
        
        </Routes>
        
    </Router>
  );
};
export default App;



