import React from "react";
import logo from "../images/Fill 213.png";

function Nav() {
    return (
        <nav className="nav">
            <img src={logo} alt="" className="logo" />
            <span className="nav-header">My Travel Journal</span>
        </nav>
    );
}

export default Nav;