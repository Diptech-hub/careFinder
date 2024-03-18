// import { useState } from "react";
// import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import LoginPage from "./components/loginn";
import SignupPage from "./components/singUp";
import HospitalList from "./components/addHospital";
import FirestoreDataPage from "./components/adminHospitalList"
import SearchBar from "./components/userHospitalList"
import MarkdownEditor from "./utils/markdown2"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/addHospital" element={<HospitalList />} />
        <Route path="/data/:id" element={<FirestoreDataPage />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/review" element={<MarkdownEditor />} />
      </Routes>
    </div>
  );
}

export default App;

