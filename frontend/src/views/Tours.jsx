import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import TourCard from "../components/TourCard";
import angkorWat from "../assets/images/slider/1.jpg";
import phnom from "../assets/images/slider/2.jpg";
import beach from "../assets/images/slider/3.jpg";
import "../styles/pages/Tours.css";

export default function Tours() {
  const allTours = [
    {
      id: 1,
      title: "Sihanoukville Beach Paradise",
      price: "240",
      image: beach,
      days: "5 days",
      type: "beach",
    },
    {
      id: 2,
      title: "Angkor Wat Heritage Tour",
      price: "300",
      image: angkorWat,
      days: "4 days",
      type: "cultural",
    },
    {
      id: 3,
      title: "Phnom Penh City Explorer",
      price: "150",
      image: phnom,
      days: "2 days",
      type: "city",
    },
    {
      id: 4,
      title: "Mondulkiri Jungle Adventure",
      price: "280",
      image: angkorWat,
      days: "3 days",
      type: "adventure",
    },
    {
      id: 5,
      title: "Mekong Delta Discovery",
      price: "200",
      image: beach,
      days: "2 days",
      type: "nature",
    },
    {
      id: 6,
      title: "Kampong Phluk Floating Village",
      price: "180",
      image: phnom,
      days: "1 day",
      type: "cultural",
    },
    {
      id: 7,
      title: "Tonle Sap Lake Adventure",
      price: "220",
      image: beach,
      days: "3 days",
      type: "nature",
    },
    {
      id: 8,
      title: "Mountain Trek Experience",
      price: "350",
      image: angkorWat,
      days: "4 days",
      type: "adventure",
    },
  ];

  return (
    <div className="app-wrapper">
      <Navbar />
      <section className="tours-page">
        <div className="container">
          <h2 className="page-title">
            All Service
          </h2>
          <div className="tours-grid">
            {allTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
