import React, { Component } from "react";
import "../../helpers/navbar.css";
import NavbarDropDown from "./NavbarDropDown";
import NavbarSearch from "./NavbarSearch";

export default class Navbar extends Component {
  render() {
    return (

        <div className="navbar">
          <nav className="nav clearfix">
            <h1 className="nav-brand">Gif Website</h1>
            <ul className="nav-items">
              <li className="nav-item">Trending</li>
              <NavbarDropDown />
              <li className="nav-item">Random</li>
              <li className="nav-item">Github</li>
            </ul>
            <NavbarSearch />
          </nav>
        </div>

    );
  }
}
