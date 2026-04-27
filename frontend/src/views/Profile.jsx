import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { clearAuthToken, fetchJson, getAuthToken } from "../services/api";
import "../styles/pages/Profile.css";

export default function Profile() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadProfile() {
      try {
        const data = await fetchJson("/auth/me", { auth: true });
        if (isMounted) {
          setUser(data.user || null);
          setError("");
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Failed to load profile.");
          setUser(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadProfile();

    return () => {
      isMounted = false;
    };
  }, []);

  if (!getAuthToken()) {
    return <Navigate to="/login" replace />;
  }

  function handleLogout() {
    clearAuthToken();
    navigate("/login", { replace: true });
  }

  return (
    <div className="app-wrapper">
      <Navbar />
      <section className="profile-page">
        <div className="container profile-shell">
          <header className="profile-header">
            <p className="profile-kicker">Account</p>
            <h1>My Profile</h1>
            <p>Manage your KhmerGo account and keep your details up to date.</p>
          </header>

          <article className="profile-card">
            {loading ? (
              <p>Loading profile...</p>
            ) : null}

            {!loading && error ? (
              <div className="profile-error">
                <p>{error}</p>
                <Link to="/login">Go to login</Link>
              </div>
            ) : null}

            {!loading && !error && user ? (
              <div className="profile-grid">
                <div className="profile-item">
                  <span>Full Name</span>
                  <strong>{user.fullName || "-"}</strong>
                </div>
                <div className="profile-item">
                  <span>Email</span>
                  <strong>{user.email || "-"}</strong>
                </div>
                <div className="profile-item">
                  <span>Phone</span>
                  <strong>{user.phone || "Not provided"}</strong>
                </div>
                <div className="profile-item">
                  <span>Role</span>
                  <strong>{user.role || "user"}</strong>
                </div>
                <div className="profile-actions">
                  <button type="button" className="profile-logout" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </div>
            ) : null}
          </article>
        </div>
      </section>
      <Footer />
    </div>
  );
}
