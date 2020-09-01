import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import Detail from "./components/Detail";

 function App(props) {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/detail/:id" exact component={Detail} />
      </Router>
    </div>
  );
}

export default App;