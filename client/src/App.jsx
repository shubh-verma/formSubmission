import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginPage from "./login";
import RegistrationPage from "./registration";  


const App = () => {
  return(
    <Router>
      <Routes>
        <Route path = "/" element = {<LoginPage/>}/>
        <Route path = "/login" element = {<LoginPage/>}/>
        <Route path = "/registration" element = {<RegistrationPage/>}/>
      </Routes>
    </Router>
  )
};

export default App;
