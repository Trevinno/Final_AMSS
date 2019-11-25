import React from "react";
import { NavLink } from "react-router-dom";
import "./css/homepage.scss"

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to="/homepage" className="navbar-brand">
        Artist.ly
      </NavLink>
      {/* Aqui estan los botones para acceder la otras rutas en la aplicacion */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          <NavLink to="/homepage" exact className="nav-item nav-link">
            Home
          </NavLink>

          <NavLink to="/feed" className="nav-item nav-link">
            Search
          </NavLink>

          <NavLink to="/gallery" className="nav-item nav-link">
          Museum
          </NavLink>
          <NavLink to="/portfolio" className="nav-item nav-link">
            Portfolio
          </NavLink>
          <NavLink to="/signup" className="nav-item nav-link navbar">
            SignUp
          </NavLink>
          <NavLink to="/signin" className="nav-item nav-link navbar">
            SignIn
          </NavLink>
          <NavLink to="/shopping" className="nav-item nav-link navbar" >
            Cart
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
