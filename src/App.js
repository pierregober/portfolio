import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Background from "./components/Background";

import About from "./components/dropmenu/About";
import Contact from "./components/dropmenu/Contact";
import Skills from "./components/dropmenu/Skills";
import Work from "./components/dropmenu/Work";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="App">
          <Background />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/skills" component={Skills} />
          <Route path="/work" component={Work} />
          <Route path="/home" exact component={Home} />
          <Route path="/" exact component={Home} />
        </div>
      </Router>
    </>
  );
}

export default App;
