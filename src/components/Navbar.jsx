import { useState } from "react"
import { NavLink } from "react-router"

export default function Navbar(props) {
    const [showMenu, setShowMenu] = useState(false);

    const handleToggleButtom = () => {
        setShowMenu(!showMenu);
    }
    return (
        <>
            <div className="navbar-box container flex">
                <div className="company-logo">
                    <img src={props.logo} alt="website logo" />
                </div>
                <div className="navlinks" id={showMenu ? "menu-mobile" : "menu-web"}>
                    <nav className="flex">
                        <NavLink className="active-link" to="/product">Product</NavLink>
                        <NavLink className="active-link" to="/customers">Customers</NavLink>
                        <NavLink className="active-link" to="/pricing">Pricing</NavLink>
                        <NavLink className="active-link" to="/resources">Resources</NavLink>
                        <NavLink className="active-link secondary-btn" to="/sign in">Sign in</NavLink>
                        <NavLink className="active-link primary-btn" to="/sign up">Sign up</NavLink>
                    </nav>
                </div>
                <div className="nav-toggle">
                    <a href="#"><i className="fa-solid fa-bars"></i></a>
                </div>
            </div>
        </>
    )
}