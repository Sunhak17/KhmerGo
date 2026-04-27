import React, { useLayoutEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { getHotelStaysByProvince, serviceByProvince, slugify } from "../../data/serviceData";
import "../../styles/pages/service/ServiceProvince.css";

export default function ServiceProvince() {
  const { provinceId } = useParams();
  const { section, hotels } = getHotelStaysByProvince(provinceId);

  const safeSection = section ?? serviceByProvince[0];
  const safeHotels = hotels.length > 0 ? hotels : safeSection.stays.filter((stay) => stay.type === "Hotel");

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [provinceId]);

  return (
    <div className="app-wrapper">
      <Navbar />
      <section className="service-page service-province-view">
        <div className="container service-shell">
          <div className="province-page-back">
            <Link to="/tours">Back to services</Link>
          </div>

          <header className="service-header">
            <p className="service-kicker">Hotels by province</p>
            <h1>{safeSection.province} Hotels</h1>
            <p>
              Explore all available hotel options in {safeSection.province}. Choose one to view full details, pricing,
              and stay highlights.
            </p>
          </header>

          <div className="service-stay-grid service-stay-grid--full">
            {safeHotels.map((stay) => (
              <article key={stay.id} className="service-stay-card">
                <img src={stay.image} alt={stay.name} />
                <div className="service-stay-body">
                  <div className="service-stay-topline">
                    <span>{stay.type}</span>
                    <small>{stay.bestFor}</small>
                  </div>
                  <h3>{stay.name}</h3>
                  <p>{stay.detail}</p>
                  <div className="service-stay-meta">
                    <strong>{stay.range}</strong>
                    <Link className="service-stay-link" to={`/tours/${safeSection.id}/${slugify(stay.name)}`}>
                      View Detail
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
