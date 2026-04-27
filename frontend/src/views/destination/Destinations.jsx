import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import ProvinceGrid from "../../components/destination/ProvinceGrid";
import { provinceData } from "../../data/destinationData";
import "../../styles/pages/destination/Destinations.css";

export default function Destinations() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <section id="destinations" className="destinations-page destinations-page--dark">
        <div className="container destinations-shell">
          <header className="destinations-hero">
            <p className="destinations-kicker">25 provinces and cities</p>
            <h1>Choose a province or city to open its own place page.</h1>
            <p>
              This page shows only the province list. Click any province tile to open a separate page with the places
              to visit and the place detail.
            </p>
          </header>

          <ProvinceGrid provinces={provinceData} />
        </div>
      </section>
      <Footer />
    </div>
  );
}