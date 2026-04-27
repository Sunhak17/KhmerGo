import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import PlaceCards from "../../components/destination/PlaceCards";
import { fetchJson } from "../../services/api";
import "../../styles/pages/destination/ProvincePage.css";

export default function ProvincePage() {
  const { provinceId } = useParams();
  const [province, setProvince] = useState(null);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    let isMounted = true;

    async function loadProvince() {
      try {
        const [provinceData, placesData] = await Promise.all([
          fetchJson(`/provinces/${provinceId}`),
          fetchJson(`/provinces/${provinceId}/places`),
        ]);

        if (isMounted) {
          setProvince(provinceData);
          setPlaces(placesData);
        }
      } catch (error) {
        if (isMounted) {
          console.error(error);
          setProvince(null);
          setPlaces([]);
        }
      }
    }

    loadProvince();

    return () => {
      isMounted = false;
    };
  }, [provinceId]);

  const provinceWithPlaces = province ? { ...province, places } : null;

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [provinceId]);

  return (
    <div className="app-wrapper">
      <Navbar />
      <section className="destinations-page destinations-page--dark province-page-view">
        <div className="container destinations-shell">
          <div className="province-page-back">
            <Link to="/destinations">Back to provinces</Link>
          </div>

          <section className="province-places-section">
            <div className="province-places-header">
              <div>
                <p className="province-detail-kicker">Places to visit</p>
                <h2>{provinceWithPlaces?.name || "Province"}</h2>
                <p>{provinceWithPlaces?.description || "Loading province details..."}</p>
              </div>
              <div className="province-detail-meta">
                <span>{provinceWithPlaces?.type || "Province"}</span>
                <span>{places.length} places</span>
              </div>
            </div>

            {provinceWithPlaces ? <PlaceCards province={provinceWithPlaces} /> : null}
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
}