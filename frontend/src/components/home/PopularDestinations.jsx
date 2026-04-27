import React from "react";
import DestinationCard from "../shared/cards/DestinationCard";
import angkorWat from "../../assets/images/slider/1.jpg";
import phnom from "../../assets/images/slider/2.jpg";
import beach from "../../assets/images/slider/3.jpg";
import "../../styles/components/PopularDestinations.css";

export default function PopularDestinations() {
  const destinations = [
    { id: 1, name: "Sihanoukville", days: "5 days", image: beach },
    { id: 2, name: "Angkor Wat", days: "4 days", image: angkorWat },
    { id: 3, name: "Phnom Penh", days: "3 days", image: phnom },
    { id: 4, name: "Siem Reap", days: "3 days", image: angkorWat },
    { id: 5, name: "Battambang", days: "2 days", image: beach },
    { id: 6, name: "Mondulkiri", days: "3 days", image: phnom },
  ];

  return (
    <section id="destinations" className="popular-destinations">
      <div className="container">
        <h2>Popular Destinations</h2>
        <p>Explore the most visited places in Cambodia</p>
        
        <div className="destinations-grid">
          {destinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
        
        <button className="show-all-btn">Show All</button>
      </div>
    </section>
  );
}
