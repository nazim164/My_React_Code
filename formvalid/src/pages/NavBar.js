import React from 'react'
import { NavLink } from 'react-router-dom'
// import './App.css'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="nav-container">
                    <h1 className="nav-logo">
                        AxiomTech
                    </h1>

                    <ul className="nav-menu">
                        <li className="nav-item">
                            <NavLink exact to="/" activeClassName="active" className="nav-links">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/About" activeClassName="active" className="nav-links">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Contact" activeClassName="active" className="nav-links">
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/SignUp" activeClassName="active" className="nav-links">
                                Sign Up
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
