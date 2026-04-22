import React from "react";
import "../styles/components/DestinationList.css";

export default function DestinationList({ destinations }) {
  return (
    <div className="destination-list-grid">
      {destinations.map((destination) => (
        <article key={destination.id} className="destination-list-card">
          <img src={destination.image} alt={destination.name} className="destination-list-image" />
          <div className="destination-list-meta">
            <div>
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
            </div>
            <span className="destination-list-arrow" aria-hidden="true">→</span>
          </div>
        </article>
      ))}
    </div>
  );
}