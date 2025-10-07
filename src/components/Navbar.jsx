import { useState } from "react"
import { NavLink } from "react-router"

export default function Navbar(props) {
    const navToggleButtom = () => {
        const toggleButtom = document.querySelector("#navlinks-toggle");
        toggleButtom.classList.toggle("active-navToggle");
    }
    return (
        <>
            <div className="navbar-box container flex">
                <div className="company-logo">
                    <img src={props.logo} alt="website logo" />
                </div>
                <div className="navlinks" id="navlinks-toggle">
                    <nav className="flex">
                        <NavLink to="/product">Product</NavLink>
                        <NavLink to="/customers">Customers</NavLink>
                        <NavLink to="/pricing">Pricing</NavLink>
                        <NavLink to="/resources">Resources</NavLink>
                        <NavLink className="secondary-btn" to="/sign in">Sign in</NavLink>
                        <NavLink className="primary-btn" to="/sign up">Sign up</NavLink>
                    </nav>
                </div>
                <div className="nav-toggle" onClick={navToggleButtom}>
                    <a href="#"><i className="fa-solid fa-bars"></i></a>
                </div>
            </div>
        </>
    )
}