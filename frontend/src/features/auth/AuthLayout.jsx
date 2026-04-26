import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import heroImage from "../../assets/images/slider/3.jpg";
import "./AuthPages.css";

export default function AuthLayout({ mode }) {
  const isSignup = mode === "signup";

  return (
    <main className="auth-page">
      <section className="auth-shell">
        <aside className="auth-visual" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="auth-visual-overlay" />
          <header className="auth-topbar">
            <Link className="auth-logo" to="/" aria-label="KhmerGo home">
              <img src={logo} alt="KhmerGo" />
            </Link>
            <nav className="auth-nav" aria-label="Auth navigation">
              <NavLink to="/" end>Home</NavLink>
              <NavLink to="/login">Log In</NavLink>
              <NavLink to="/signup">Join</NavLink>
              <NavLink to="/about">About Us</NavLink>
            </nav>
          </header>

          <div className="auth-visual-copy">
            <span className="auth-kicker">JOIN FOR FREE</span>
            <h1>
              Unleash the traveler <em>inside YOU</em>, Enjoy your Dream Vacation
            </h1>
            <p>
              Get started with KhmerGo and discover secure, beautiful routes to plan your next adventure.
            </p>
            <div className="auth-hero-actions">
              <Link to="/destinations" className="auth-btn auth-btn-ghost">Explore More</Link>
              <Link to="/tours" className="auth-btn auth-btn-solid">Book Now</Link>
            </div>
          </div>
        </aside>

        <section className="auth-panel">
          <div className="auth-panel-inner">
            <h2>{isSignup ? "Create new account." : "Welcome back."}</h2>

            <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
              {isSignup ? (
                <>
                  <label>
                    Username
                    <input type="text" name="username" placeholder="showrovcreation" autoComplete="username" />
                  </label>
                  <div className="auth-split">
                    <label>
                      First Name
                      <input type="text" name="firstName" placeholder="Showrov" />
                    </label>
                    <label>
                      Last Name
                      <input type="text" name="lastName" placeholder="Creation" />
                    </label>
                  </div>
                </>
              ) : null}

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="showrovcreation@gmail.com"
                  autoComplete={isSignup ? "email" : "username"}
                />
              </label>

              <label>
                Password
                <input type="password" name="password" placeholder="............." autoComplete={isSignup ? "new-password" : "current-password"} />
              </label>

              <p className="auth-meta">
                {isSignup ? "Already a member? " : "Need an account? "}
                <Link to={isSignup ? "/login" : "/signup"}>{isSignup ? "Log In" : "Create one"}</Link>
              </p>

              <button type="submit" className="auth-submit">
                {isSignup ? "Create Account" : "Log In"}
              </button>
            </form>
          </div>
        </section>
      </section>
    </main>
  );
}
