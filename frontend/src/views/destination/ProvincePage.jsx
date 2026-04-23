import React, { useLayoutEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import PlaceCards from "./PlaceCards";
import { getProvinceById, provinceData } from "../../data/destinationData";
import "../../styles/pages/destination/ProvincePage.css";

export default function ProvincePage() {
  const { provinceId } = useParams();
  const province = getProvinceById(provinceId) ?? provinceData[0];

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [provinceId]);

  return (
    <div className="app-wrapper">
      <Navbar />
      <section className="destinations-page destinations-page--dark">
        <div className="container destinations-shell">
          <div className="province-page-back">
            <Link to="/destinations">Back to provinces</Link>
          </div>

          <section className="province-places-section">
            <div className="province-places-header">
              <div>
                <p className="province-detail-kicker">Places to visit</p>
                <h2>{province.name}</h2>
                <p>{province.description}</p>
              </div>
              <div className="province-detail-meta">
                <span>{province.type}</span>
                <span>{province.places.length} places</span>
              </div>
            </div>

            <PlaceCards province={province} />
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
}