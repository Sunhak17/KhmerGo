import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./styles/base/App.css";
import Home from "./views/Home";
import Destinations from "./views/Destinations";
import Tours from "./views/Tours";
import About from "./views/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
