import React, { useEffect, useState } from "react";
import slide1 from "../assets/images/slider/1.jpg";
import slide2 from "../assets/images/slider/2.jpg";
import slide3 from "../assets/images/slider/3.jpg";
import slide4 from "../assets/images/slider/4.jpg";
import slide5 from "../assets/images/slider/5.jpg";
import "../styles/layout/Hero.css";

export default function Hero() {
  const slides = [slide1, slide2, slide3, slide4, slide5];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="hero">
      <div className="hero-slides" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            key={slide}
            className={`hero-slide ${index === activeSlide ? "is-active" : ""}`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
      </div>

      <div className="hero-inner container">
        <div className="hero-topline">
          <span className="hero-topline__line" />
          <span className="hero-topline__text">Cambodia travel experiences</span>
        </div>

        <div className="hero-copy">
          <p className="hero-kicker">Start your journey</p>
          <h1>VISIT CAMBODIA</h1>
          <p className="hero-description">
            Discover temples, coastlines, city life, and river adventures with a travel experience built around Cambodia.
          </p>
          <a className="hero-link" href="#tours">MORE DETAILS</a>
        </div>

        <aside className="hero-steps" aria-label="Featured highlights">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === activeSlide ? "is-active" : ""}
              onClick={() => setActiveSlide(index)}
              aria-label={`Show slide ${index + 1}`}
            >
              {String(index + 1).padStart(2, "0")}
            </button>
          ))}
        </aside>

        <div className="hero-panels">
          <article>
            <span className="hero-icon">History</span>
            <p>Temples, heritage, and a rich cultural story in every trip.</p>
            <a href="#tours">MORE DETAILS </a>
          </article>
          <article>
            <span className="hero-icon">Destination</span>
            <p>Flexible itineraries with local guidance and smooth planning.</p>
            <a href="#tours">MORE DETAILS </a>
          </article>
          <article>
            <span className="hero-icon">Sea</span>
            <p>From sea breeze escapes to city breaks, explore Cambodia your way.</p>
            <a href="#inspire">MORE DETAILS </a>
          </article>
        </div>

        <div className="hero-footerline" />
      </div>
    </section>
  );
}