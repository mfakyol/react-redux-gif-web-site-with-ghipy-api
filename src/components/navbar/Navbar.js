import React, { Component } from "react";
import "../../helpers/navbar.css";
import NavbarDropDown from "./NavbarDropDown";
import NavbarSearch from "./NavbarSearch";
import { connect } from "react-redux";
import {getCategories} from '../../redux/actions/categories-action'
import { Link } from "react-router-dom";

class Navbar extends Component {
  componentDidMount() {
    this.props.onGetCategories()
  }

  render() {
    return (
        <div className="navbar clearfix">
          <nav className="nav">
            <Link to="/" className="nav-brand">Gif Website</Link>
            <ul className="nav-items">
              <Link to="/" className="nav-item">Trending</Link>
              <NavbarDropDown data= {this.props.categories}/>
              <Link to="/random" className="nav-item">Random</Link>
              <li className="nav-item">Github</li>
            </ul>
            <NavbarSearch />
          </nav>
        </div>

    );
  }
}

const mapStateToProps = state => {
  return {categories: state.categories}
}

const mapDispatchToProps = {
  onGetCategories: getCategories
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);