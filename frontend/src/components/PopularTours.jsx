import React from "react";
import angkorWat from "../assets/images/slider/1.jpg";
import phnom from "../assets/images/slider/2.jpg";
import beach from "../assets/images/slider/3.jpg";
import slide4 from "../assets/images/slider/4.jpg";
import slide5 from "../assets/images/slider/5.jpg";
import "../styles/components/PopularTours.css";

export default function PopularTours() {
  const tours = [
    {
      id: 1,
      title: "Royal Palace",
      image: beach,
      description: "Phnom Penh",
    },
    {
      id: 2,
      title: "Angkor Wat",
      image: angkorWat,
      description: "Siem Reap",
    },
    {
      id: 3,
      title: "Phnom Kampong Trach",
      image: phnom,
      description: "Kampot",
    },
    {
      id: 4,
      title: "Koh Rong",
      image: slide4,
      description: "Sihanoukville",
    },
    {
      id: 5,
      title: "Angkor Thom",
      image: slide5,
      description: "Siem Reap",
    },
  ];

  return (
    <section id="tours" className="popular-tours">
      <div className="container popular-tours-shell">
        <h2>Popular Tours</h2>
        <p className="popular-tours-subtitle">Explore our most popular tours and destinations</p>
        
        <div className="popular-tours-grid">
          {tours.map((tour) => (
            <article key={tour.id} className="popular-tour-card">
              <img src={tour.image} alt={tour.title} className="popular-tour-image" />
              <div className="popular-tour-overlay" />
              <div className="popular-tour-content">
                <h3>{tour.title}</h3>
                <p>{tour.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
