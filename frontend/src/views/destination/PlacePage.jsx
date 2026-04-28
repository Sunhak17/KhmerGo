import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { fetchJson, resolveAssetUrl } from "../../services/api";
import "../../styles/pages/destination/PlacePage.css";

export default function PlacePage() {
  const { provinceId, placeSlug } = useParams();
  const [province, setProvince] = useState(null);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    let isMounted = true;

    async function loadPlaceData() {
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

    loadPlaceData();

    return () => {
      isMounted = false;
    };
  }, [provinceId]);

  const place = useMemo(() => {
    if (!places.length) {
      return null;
    }

    return places.find((item) => item.slug === String(placeSlug)) ?? places[0];
  }, [places, placeSlug]);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [provinceId, placeSlug]);

  function getMapSrc(value) {
    if (!value) return null;
    const match = value.match(/src=["']([^"']+)["']/);
    return match ? match[1] : value.trim();
  }

  return (
    <div className="app-wrapper">
      <Navbar />
      <section className="destinations-page destinations-page--dark place-page-view">
        <div className="container destinations-shell">
          <div className="province-page-back">
            <Link to={`/destinations/${provinceId}`}>Back to {province?.name || "province"}</Link>
          </div>

          <section className="province-detail-panel">
            <div className="province-detail-header">
              <div>
                <p className="province-detail-kicker">Place detail</p>
                <h2>{place?.name || "Loading place..."}</h2>
                <p>{province?.name || ""}</p>
              </div>

              <div className="province-detail-meta">
                <span>{place?.tag || "Place"}</span>
                <span>Best for {place?.bestFor || "travel"}</span>
              </div>
            </div>

            <article className="place-detail-card">
              <img
                src={resolveAssetUrl(place?.imageUrl || place?.image_url || place?.image)}
                alt={place?.name || "Place image"}
                className="place-detail-image"
              />
              <div className="place-detail-body">
                <div className="place-detail-topline">
                  <span>{province?.type || "Province"}</span>
                  <small>{places.length} places in this province</small>
                </div>
                <h3>{place?.name || ""}</h3>
                <p>{place?.detail || ""}</p>

                {place?.websiteUrl && (
                  <a
                    href={place.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="place-detail-link"
                  >
                    Visit official site
                  </a>
                )}
              </div>
            </article>

            {place?.mapEmbed && (
              <div className="place-detail-map">
                <h3>Location</h3>
                <iframe
                  src={getMapSrc(place.mapEmbed)}
                  width="100%"
                  height="380"
                  style={{ border: 0, borderRadius: "12px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${place.name}`}
                />
              </div>
            )}
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
}