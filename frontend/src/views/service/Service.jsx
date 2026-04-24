import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { serviceByProvince, slugify } from "../../data/serviceData";
import "../../styles/pages/service/Service.css";

export default function Service() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <section className="service-page">
        <div className="container service-shell">
          <header className="service-header">
            <p className="service-kicker">Service stays by province</p>
            <h1>Hotels & Homestays In Each Province</h1>
            <p>
              This page shows only accommodation services. Every province includes hotel and homestay cards, each card
              with its own detail similar to the place cards.
            </p>
          </header>

          <div className="service-province-list">
            {serviceByProvince.map((section) => (
              <section key={section.id} className="service-province-card">
                <div className="service-province-head">
                  <div>
                    <h2>{section.province}</h2>
                    <p>{section.intro}</p>
                  </div>
                  <span>{section.stays.length} stays</span>
                </div>

                <div className="service-stay-grid">
                  {section.stays.map((stay) => (
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
                          <Link
                            className="service-stay-link"
                            to={`/tours/${section.id}/${slugify(stay.name)}`}
                          >
                            View Detail
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
