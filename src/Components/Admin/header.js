import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    // console.log("Header File");
    const isAuthenticated = false;

    return (
        <div>
            <div className="container-fluid">
                <nav className="navbar navbar-expand navbar-light  bg-light">
                    <NavLink className="navbar-brand" to="/">Admin</NavLink>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-item nav-link " to="/profile">Profile</NavLink>


                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;