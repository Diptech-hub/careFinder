// import { useState } from "react";
// import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home"
import LoginPage from "./components/loginn"
import SignupPage from "./components/singUp"

function App() {

  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path= "/Signup" element={<SignupPage />}/>
      </Routes>
    </div>
  );
}

export default App;
