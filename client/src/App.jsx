import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginPage from "./login";
import RegistrationPage from "./registration"; 
import FillFormPage from "./fillForm.jsx"; 


const App = () => {
  return(
    <Router>
      <Routes>
        <Route path = "/" element = {<LoginPage/>}/>
        <Route path = "/login" element = {<LoginPage/>}/>
        <Route path = "/register" element = {<RegistrationPage/>}/>
        <Route path = "/form" element = {<FillFormPage/>}/>
        
      </Routes>
    </Router>
  )
};

export default App;
