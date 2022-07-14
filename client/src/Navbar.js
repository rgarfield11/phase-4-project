import React, { useState } from "react";
import { NavLink } from "react-router-dom";


function NavBar({ user, setUser }) {
    const [ active, setActive ] = useState("");

    function handleClick(e) {
        setActive(e.target.value)
        if (e.target.value === "logout") {
            handleLogoutClick()
        }
    }

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
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
                <NavLink exact className="button" to="/">
                    <button onClick={handleClick} className={active === "logout" ? "active" : ""} value="logout">{user ? "Logout" : "Login"}</button>
                </NavLink>
            </nav>
        </header>
    )
}

export default NavBar;