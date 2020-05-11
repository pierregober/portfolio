import React from "react";

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
