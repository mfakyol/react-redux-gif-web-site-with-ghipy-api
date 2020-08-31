import React, { Component } from 'react'
import '../../helpers/navbar-search.css'

export default class NavbarSearch extends Component {
    render() {
        return (
            <div className="search">
                <input type="text" name="" id="search-input"/>
                <button id="search-button">Search</button>
            </div>
        )
    }
}
