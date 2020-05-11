import React from "react";

import logo from "./logo.svg";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Background from "./components/Background";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Background />
        <Home />
      </div>
    </>
  );
}

export default App;
