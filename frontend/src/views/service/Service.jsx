import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { fetchJson, resolveAssetUrl } from "../../services/api";
import "../../styles/pages/service/Service.css";

const PREVIEW_STAY_COUNT = 2;

export default function Service() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    let isMounted = true;

    async function loadServices() {
      try {
        const data = await fetchJson("/service/provinces");
        if (isMounted) {
          setSections(data);
        }
      } catch (error) {
        if (isMounted) {
          console.error(error);
        }
      }
    }

    loadServices();

    return () => {
      isMounted = false;
    };
  }, []);

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
            {sections.map((section) => (
              <section key={section.id} className="service-province-card">
                <div className="service-province-head">
                  <div>
                    <h2>{section.province}</h2>
                    <p>{section.intro}</p>
                  </div>
                  <span>{section.stays.length} stays</span>
                </div>

                <div className="service-stay-grid">
                  {section.stays.slice(0, PREVIEW_STAY_COUNT).map((stay) => (
                    <article key={stay.id} className="service-stay-card">
                      <img src={resolveAssetUrl(stay.imageUrl || stay.image_url || stay.image)} alt={stay.name} />
                      <div className="service-stay-body">
                        <div className="service-stay-topline">
                          <span>{stay.type}</span>
                          <small>{stay.bestFor}</small>
                        </div>
                        <h3>{stay.name}</h3>
                        <p>{stay.detail}</p>
                        <div className="service-stay-meta">
                          <strong>{stay.range}</strong>
                          <Link className="service-stay-link" to={`/tours/${section.id}/${stay.slug}`}>
                            View Detail
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="service-province-actions">
                  <Link className="service-view-more-link" to={`/tours/${section.id}`}>
                    View more hotels in {section.province}
                  </Link>
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
