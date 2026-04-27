import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./styles/base/App.css";
import Home from "./views/Home";
import Destinations from "./views/destination/Destinations";
import ProvincePage from "./views/destination/ProvincePage";
import PlacePage from "./views/destination/PlacePage";
import Service from "./views/service/Service";
import ServiceProvince from "./views/service/ServiceProvince";
import ServiceDetail from "./views/service/ServiceDetail";
import About from "./views/About";
import Contact from "./views/Contact";
import LoginPage from "./views/auth/LoginPage";
import SignupPage from "./views/auth/SignupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/destinations/:provinceId" element={<ProvincePage />} />
      <Route path="/destinations/:provinceId/:placeSlug" element={<PlacePage />} />
      <Route path="/tours" element={<Service />} />
      <Route path="/tours/:provinceId" element={<ServiceProvince />} />
      <Route path="/tours/:provinceId/:staySlug" element={<ServiceDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
