import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import "../styles/pages/About.css";

export default function About() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <section className="about-page">
        <div className="container">
          <h1 className="page-title">
            About KhmerGo
          </h1>

          <div className="page-shell">
            <p>
              KhmerGo is Cambodia's leading travel platform, dedicated to providing unforgettable 
              experiences for travelers from around the world. Founded with a passion for showcasing 
              the beauty and culture of Cambodia, we specialize in crafting personalized itineraries 
              that connect you with the heart of Southeast Asia.
            </p>

            <h2>
              Our Mission
            </h2>
            <p>
              To make travel to Cambodia accessible, affordable, and authentic. We believe that 
              every journey should be transformative, and we work tirelessly to ensure that each 
              traveler experiences the warmth and wonder of Cambodia.
            </p>

            <h2>
              Why Choose Us?
            </h2>
            <ul>
              <li>Expert local guides with deep knowledge of Cambodia</li>
              <li>Competitive pricing and value for money</li>
              <li>Flexible booking and cancellation policies</li>
              <li>Customizable tours for all travel styles</li>
              <li>Commitment to sustainable and responsible tourism</li>
            </ul>

            <h2>
              Contact Us
            </h2>
            <p>
              📧 Email: info@khmergo.com<br/>
              📞 Phone: +855 (0) 123 456 789<br/>
              📍 Address: Phnom Penh, Cambodia
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
