import React, { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import ProvinceGrid from "../../components/destination/ProvinceGrid";
import { fetchJson } from "../../services/api";
import "../../styles/pages/destination/Destinations.css";

export default function Destinations() {
  const [provinces, setProvinces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadProvinces() {
      try {
        const data = await fetchJson("/provinces");
        if (isMounted) {
          setProvinces(data);
        }
      } catch (error) {
        if (isMounted) {
          console.error(error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadProvinces();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="app-wrapper">
      <Navbar />
      <section id="destinations" className="destinations-page destinations-page--dark">
        <div className="container destinations-shell">
          <header className="destinations-hero">
            <p className="destinations-kicker">{loading ? "Loading provinces..." : `${provinces.length} provinces and cities`}</p>
            <h1>Choose a province or city to open its own place page.</h1>
            <p>
              This page shows only the province list. Click any province tile to open a separate page with the places
              to visit and the place detail.
            </p>
          </header>

          <ProvinceGrid provinces={provinces} />
        </div>
      </section>
      <Footer />
    </div>
  );
}