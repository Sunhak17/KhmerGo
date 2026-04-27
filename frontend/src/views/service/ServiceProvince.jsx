import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { fetchJson, resolveAssetUrl } from "../../services/api";
import "../../styles/pages/service/ServiceProvince.css";

export default function ServiceProvince() {
  const { provinceId } = useParams();
  const [section, setSection] = useState(null);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    let isMounted = true;

    async function loadHotelsByProvince() {
      try {
        const [provinceData, hotelsData] = await Promise.all([
          fetchJson(`/provinces/${provinceId}`),
          fetchJson(`/provinces/${provinceId}/stays?type=Hotel`),
        ]);

        if (isMounted) {
          setSection({
            id: provinceData.id,
            province: provinceData.name,
          });
          setHotels(hotelsData);
        }
      } catch (error) {
        if (isMounted) {
          console.error(error);
          setSection(null);
          setHotels([]);
        }
      }
    }

    loadHotelsByProvince();

    return () => {
      isMounted = false;
    };
  }, [provinceId]);

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
            <h1>{section?.province || "Province"} Hotels</h1>
            <p>
              Explore all available hotel options in {section?.province || "this province"}. Choose one to view full details, pricing,
              and stay highlights.
            </p>
          </header>

          <div className="service-stay-grid service-stay-grid--full">
            {hotels.map((stay) => (
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
                    <Link className="service-stay-link" to={`/tours/${provinceId}/${stay.slug}`}>
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
