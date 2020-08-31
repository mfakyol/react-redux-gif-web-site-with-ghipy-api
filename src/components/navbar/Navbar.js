import React, { Component } from "react";
import "../../helpers/navbar.css";
import NavbarDropDown from "./NavbarDropDown";
import NavbarSearch from "./NavbarSearch";
import { connect } from "react-redux";
import {getCategories} from '../../redux/actions/categories-action'

class Navbar extends Component {
  componentDidMount() {
    this.props.onGetCategories()
  }

  render() {
    return (

        <div className="navbar">
          <nav className="nav clearfix">
            <h1 className="nav-brand">Gif Website</h1>
            <ul className="nav-items">
              <li className="nav-item">Trending</li>
              <NavbarDropDown data= {this.props.categories}/>
              <li className="nav-item">Random</li>
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