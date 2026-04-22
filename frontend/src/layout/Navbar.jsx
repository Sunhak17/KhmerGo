import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../styles/layout/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar navbar--overlay">
      <div className="nav-container nav-container--wide">
        <Link className="logo" to="/" aria-label="KhmerGo home">
          <img src={logo} alt="KhmerGo" />
        </Link>
        <nav className="nav-links nav-links--compact" aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "is-current" : "")}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "is-current" : "")}>About</NavLink>
          <NavLink to="/destinations" className={({ isActive }) => (isActive ? "is-current" : "")}>Destinations</NavLink>
          <NavLink to="/tours" className={({ isActive }) => (isActive ? "is-current" : "")}>Service</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "is-current" : "")}>Contact</NavLink>
        </nav>
        <div className="nav-actions">
          <Link className="nav-login" to="/about">Log in</Link>
          <Link className="nav-cta" to="/tours">Sign in</Link>
        </div>
      </div>
    </header>
  );
}