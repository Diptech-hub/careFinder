// import { useState } from "react";
// import "./styles/App.css";
import Header from './components/header'
import Footer from './components/footer'
import About from './components/about'
import Service from './components/service'
import LoginPage from './components/login'
import SignupPage from './components/singUp'
import LoginnPage from './components/loginn'

function App() {

  return (
    <>
      <Header />
      <About />
      <Service />
      <LoginPage />
      <LoginnPage />
      <SignupPage />
      <Footer />
    </>
  );
}

export default App;
