import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Common/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Common/Footer";

function App() {
  return (
    <div className="bg-level1">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
