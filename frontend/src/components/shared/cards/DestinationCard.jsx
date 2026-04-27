import React from "react";
import "../../../styles/components/DestinationCard.css";

export default function DestinationCard({ destination }) {
  return (
    <div className="destination-card">
      <div className="destination-image">
        {destination.image ? (
          <img src={destination.image} alt={destination.name} />
        ) : (
          destination.icon
        )}
      </div>
      <div className="destination-info">
        <h3>{destination.name}</h3>
        <p>{destination.days}</p>
      </div>
    </div>
  );
}
