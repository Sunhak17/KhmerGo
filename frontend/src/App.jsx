import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./styles/base/App.css";
import Home from "./views/Home";
import Destinations from "./views/destination/Destinations";
import ProvincePage from "./views/destination/ProvincePage";
import PlacePage from "./views/destination/PlacePage";
import Tours from "./views/Tours";
import About from "./views/About";
import Contact from "./views/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/destinations/:provinceId" element={<ProvincePage />} />
      <Route path="/destinations/:provinceId/:placeSlug" element={<PlacePage />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
