import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './mycomponents/pages/SignUp.js';
import './App.css';
import { Link } from 'react-router-dom';
import Navbar from './mycomponents/Navbar.js';
import DoctorRegister from './mycomponents/pages/DoctorRegister.js';
//import Login from './pages/Login';
//import Signup from './pages/Signup';
//import Dashboard from './pages/Dashboard';
import LoginRegister from './mycomponents/pages/LoginRegister.js';
import FindDoctors from './mycomponents/pages/FindDoctors';
function App() {
  return (
           

    <Router>
      <Navbar />
<hr style={{ margin: 0, borderTop: '1px solid #666' }} />
          <Routes>
       
        <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<LoginRegister />} />
       <Route path="/doctor-register" element={<DoctorRegister />} />
       <Route path="/find-doctors" element={<FindDoctors />} />
      </Routes>

    </Router>
  );
}

export default App;
