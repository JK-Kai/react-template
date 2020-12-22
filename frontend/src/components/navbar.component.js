import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Cook</Link>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to="/" className="nav-link" >Home <span class="sr-only" >(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/recipes" className="nav-link" >Recipes</Link>
                    </li>
                </ul>

                <form className="form-inline mr-auto">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <ul class="navbar-nav ">
                    <li class="nav-item active">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/register" class="nav-link">Regist</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}