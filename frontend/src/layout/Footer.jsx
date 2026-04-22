import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import "../styles/layout/Footer.css";

export default function Footer() {
  return (
    <footer className="footer footer--concept">
      <div className="container footer-grid">
        <div className="footer-brand-block">
          <Link className="footer-logo" to="/" aria-label="KhmerGo home">
            <img src={logo} alt="KhmerGo" />
          </Link>
          <div className="footer-social" aria-label="Social channels">
            <button type="button" aria-label="Facebook"><FaFacebookF /></button>
            <button type="button" aria-label="Instagram"><FaInstagram /></button>
            <button type="button" aria-label="Telegram"><FaTelegramPlane /></button>
            <button type="button" aria-label="YouTube"><FaYoutube /></button>
          </div>
        </div>

        <div className="footer-middle-block">
          <nav className="footer-links" aria-label="Footer navigation">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "is-current" : "")}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "is-current" : "")}>About</NavLink>
            <NavLink to="/destinations" className={({ isActive }) => (isActive ? "is-current" : "")}>Destinations</NavLink>
            <NavLink to="/tours" className={({ isActive }) => (isActive ? "is-current" : "")}>Tours</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "is-current" : "")}>Contact</NavLink>
          </nav>
          <p className="footer-copy">
            Crafted for adventure lovers. Discover Cambodia with curated routes and trusted local guides.
          </p>
        </div>

        <div className="footer-right-block">
          <p className="footer-subscribe-title">Subscribe to News</p>
          <form className="footer-subscribe" onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder="Email address" aria-label="Email address" />
            <button type="submit" aria-label="Subscribe">→</button>
          </form>
          <div className="footer-payments" aria-label="Payment methods">
            <span>PayPal</span>
            <span>Visa</span>
            <span>Mastercard</span>
            <span>ABA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}