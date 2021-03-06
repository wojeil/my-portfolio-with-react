import React from "react";
import "./nav.css"
import { Link } from "react-router-dom";


function Nav() {

    return (

        <nav className="navbar">
        <Link className="nav-link h1 name" to="/my-portfolio-with-react">
            <span id="nav">WO</span>
        </Link>
        {/* <!--Nav Items have been linked--> */}
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link" to="/my-portfolio-with-react/about"><span id="nav">About</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/my-portfolio-with-react/portfolio"> <span  id="nav" >Portfolio</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/my-portfolio-with-react/contact"><span  id="nav">Contact</span></Link>
            </li>

        </ul>
    </nav>



    )



}

export default Nav;