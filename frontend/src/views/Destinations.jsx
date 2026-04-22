import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import DestinationList from "../components/DestinationList";
import angkorWat from "../assets/images/slider/1.jpg";
import phnom from "../assets/images/slider/2.jpg";
import beach from "../assets/images/slider/3.jpg";
import "../styles/pages/Destinations.css";

export default function Destinations() {
  const allDestinations = [
    { id: 1, name: "Sihanoukville, Cambodia", description: "Coastal paradise and island hopping", image: beach },
    { id: 2, name: "Siem Reap, Cambodia", description: "Gateway to Angkor heritage temples", image: angkorWat },
    { id: 3, name: "Phnom Penh, Cambodia", description: "Capital city culture and food streets", image: phnom },
    { id: 4, name: "Battambang, Cambodia", description: "Riverside life and local arts", image: beach },
    { id: 5, name: "Kampot, Cambodia", description: "Pepper farms and mountain views", image: angkorWat },
    { id: 6, name: "Mondulkiri, Cambodia", description: "Waterfalls and eco adventures", image: phnom },
    { id: 7, name: "Kep, Cambodia", description: "Quiet beaches and fresh crab", image: beach },
    { id: 8, name: "Kratie, Cambodia", description: "Mekong sunsets and dolphin spotting", image: phnom },
  ];

  return (
    <div className="app-wrapper">
      <Navbar />
      <section id="destinations" className="destinations-page">
        <div className="container">
          <h2 className="page-title">
            All Destinations
          </h2>
          <DestinationList destinations={allDestinations} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
