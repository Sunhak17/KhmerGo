import React from "react";
import Navbar from "../layout/Navbar";
import Hero from "../layout/Hero";
import PopularTours from "../components/home/PopularTours";
import WhyUs from "../components/home/WhyUs";
import Footer from "../layout/Footer";
import "../styles/pages/Home.css";

export default function Home() {
  return (
    <div className="app-wrapper home-page">
      <Navbar />
      <Hero />
      <PopularTours />
      <WhyUs />
      <Footer />
    </div>
  );
}
