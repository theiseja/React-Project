import React from 'react';
import { Link, Router } from 'react-router-dom'

const Navbar = () => {
    return(
        <Router>
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="brand-logo">Shopping</Link>
                <ul className="right-nav">
                    <li><Link to="/">Shop</Link></li>
                    <li><Link to="/cart">My cart</Link></li>
                    <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                </ul>
            </div>
        </nav>
        </Router>
    )
}

export default Navbar;