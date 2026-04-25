import React from "react";
import angkorWat from "../assets/images/slider/1.jpg";
import kampot from "../assets/images/popular_tour/kampot.jpg";
import wat_phnom from "../assets/images/popular_tour/wat_phnom.jpg";
import slide4 from "../assets/images/slider/4.jpg";
import bou_sra from "../assets/images/popular_tour/bou_sra.jpg";
import "../styles/components/PopularTours.css";

export default function PopularTours() {
  const tours = [
    {
      id: 1,
      title: "Sea Horse",
      image: kampot,
      description: "Kampot",
    },
    {
      id: 2,
      title: "Angkor Wat",
      image: angkorWat,
      description: "Siem Reap",
    },
    {
      id: 3,
      title: "Wat Phnom",
      image: wat_phnom,
      description: "Phnom Penh",
    },
    {
      id: 4,
      title: "Koh Rong",
      image: slide4,
      description: "Sihanoukville",
    },
    {
      id: 5,
      title: "Bou Sra",
      image: bou_sra,
      description: "Mondulkiri",
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
