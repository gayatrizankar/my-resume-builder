import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Login from './Pages/login';
import Signup from './Pages/Signup';  
import Home from './Pages/home';
import LoggedInPage from './Pages/loggedInPage';
import TemplatePage from './Pages/TemplatePages';
import ResumeForm from './Pages/ResumeForm'; // Import the ResumeForm component
import TemplateDisplay from './Pages/Templatedisplay';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/loggedInPage" element={<LoggedInPage />} />
        <Route path="/templatePage" element={<TemplatePage />} />
        <Route path="/resumeForm" element={<ResumeForm />} /> 
               <Route path="/templateDisplay" element={<TemplateDisplay />} />

      </Routes>

    
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
};

export default App;
