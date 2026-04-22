import React from "react";
import "../styles/layout/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2026 KhmerGo. All rights reserved.</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#tours">Tours</a>
          <a href="#inspire">Inspire</a>
        </div>
      </div>
    </footer>
  );
}