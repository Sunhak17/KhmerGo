import React from "react";
import "../styles/components/TourCard.css";

export default function TourCard({ tour }) {
  return (
    <div className="tour-card">
      <div className="tour-image">
        {tour.image ? (
          <img src={tour.image} alt={tour.title} />
        ) : (
          tour.icon
        )}
      </div>
      <div className="tour-badge">${tour.price}</div>
      <h3>{tour.title}</h3>
      <p className="tour-duration">📅 {tour.days}</p>
      <button className="tour-btn">View Details</button>
    </div>
  );
}
