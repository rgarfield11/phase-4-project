import React, { useState } from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
    const [ active, setActive ] = useState("");

    function handleClick(e) {
        setActive(e.target.value)
    }

    return (
        <header>
            <nav id="navBar">
                <NavLink exact className="button" to="/">
                    <button onClick={handleClick} className={active === "Home" ? "active" : ""} value="Home">Home</button>
                </NavLink>
                <NavLink exact className="button" to="/garage">
                    <button onClick={handleClick} className={active === "Garage" ? "active" : ""} value="Garage">Garage</button>
                </NavLink>
                <NavLink exact className="button" to="/bikeride/new">
                    <button onClick={handleClick} className={active === "Bikeride" ? "active" : ""} value="Bikeride">Get Rollin'</button>
                </NavLink>
            </nav>
        </header>
    )
}

export default NavBar;