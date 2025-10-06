import { NavLink } from "react-router"
// import './index.css'

export default function Navbar(props) {
    return (
        <>
            <div className="navbar-box container flex">
                <div className="company-logo">
                    <img src={props.logo} alt="website logo" />
                </div>
                <div className="navlinks">
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
                    <a href="#"><i class="fa-solid fa-bars"></i></a>
                </div>
            </div>
        </>
    )
}