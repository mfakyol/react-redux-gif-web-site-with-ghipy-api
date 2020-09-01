import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Random from "./components/Random";
import Category from "./components/Category";

 function App(props) {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Route isAuth={true} path="/" exact component={Home} />
        <Route path="/detail/:id" exact component={Detail} />
        <Route path="/random" exact component={Random} />
        <Route path="/category/:category" exact component={Category} />
      </Router>
    </div>
  );
}

export default App;