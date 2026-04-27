import React, { useLayoutEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { getPlaceBySlug, getProvinceById, provinceData } from "../../data/destinationData";
import "../../styles/pages/destination/PlacePage.css";

export default function PlacePage() {
  const { provinceId, placeSlug } = useParams();
  const province = getProvinceById(provinceId) ?? provinceData[0];
  const place = getPlaceBySlug(province, placeSlug) ?? province.places[0];

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [provinceId, placeSlug]);

  return (
    <div className="app-wrapper">
      <Navbar />
      <section className="destinations-page destinations-page--dark place-page-view">
        <div className="container destinations-shell">
          <div className="province-page-back">
            <Link to={`/destinations/${province.id}`}>Back to {province.name}</Link>
          </div>

          <section className="province-detail-panel">
            <div className="province-detail-header">
              <div>
                <p className="province-detail-kicker">Place detail</p>
                <h2>{place.name}</h2>
                <p>{province.name}</p>
              </div>

              <div className="province-detail-meta">
                <span>{place.tag}</span>
                <span>Best for {place.bestFor}</span>
              </div>
            </div>

            <article className="place-detail-card">
              <img src={place.image} alt={place.name} className="place-detail-image" />
              <div className="place-detail-body">
                <div className="place-detail-topline">
                  <span>{province.type}</span>
                  <small>{province.places.length} places in this province</small>
                </div>
                <h3>{place.name}</h3>
                <p>{place.detail}</p>
              </div>
            </article>
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
}