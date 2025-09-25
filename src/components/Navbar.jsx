import { NavLink } from "react-router"

export function Navbar() {
    return (
        <>
            <div className="navbar-box container">
                <div className="company-logo">
                    <p>CompanyLogo</p>
                </div>
                <div className="navlinks">
                    <nav>
                        <NavLink to="/products">Products</NavLink>
                        <NavLink to="/customers">Customers</NavLink>
                        <NavLink to="/pricing">Pricing</NavLink>
                        <NavLink to="/resources">Resources</NavLink>
                        <NavLink to="/sign in">Sign in</NavLink>
                        <NavLink to="/sign up">Sign up</NavLink>
                    </nav>
                </div>
            </div>
        </>
    )
}