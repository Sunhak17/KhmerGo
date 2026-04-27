import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { fetchJson, getAuthToken } from "../services/api";
import "../styles/layout/Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadCurrentUser() {
      const token = getAuthToken();
      if (!token) {
        if (isMounted) {
          setUser(null);
        }
        return;
      }

      try {
        const data = await fetchJson("/auth/me", { auth: true });
        if (isMounted) {
          setUser(data.user || null);
        }
      } catch (_error) {
        if (isMounted) {
          setUser(null);
        }
      }
    }

    loadCurrentUser();

    return () => {
      isMounted = false;
    };
  }, [location.pathname]);

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
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "is-current" : "")}>Contact</NavLink>
        </nav>
        <div className="nav-actions">
          {user ? (
            <>
              {user.role === 'admin' && (
                <a className="nav-admin" href="http://localhost:5174" target="_blank" rel="noopener noreferrer">Admin</a>
              )}
              <Link className="nav-cta" to="/profile">Profile</Link>
            </>
          ) : (
            <>
              <Link className="nav-login" to="/login">Log in</Link>
              <Link className="nav-cta" to="/signup">Sign up</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}