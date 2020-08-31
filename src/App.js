import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";

 function App(props) {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;