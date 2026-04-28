import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { fetchJson, resolveAssetUrl } from "../../services/api";
import "../../styles/pages/service/ServiceDetail.css";

export default function ServiceDetail() {
  const { provinceId, staySlug } = useParams();
  const [province, setProvince] = useState(null);
  const [stay, setStay] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadStayDetail() {
      try {
        const [provinceData, stayData] = await Promise.all([
          fetchJson(`/provinces/${provinceId}`),
          fetchJson(`/stays/slug/${provinceId}/${staySlug}`),
        ]);

        if (isMounted) {
          setProvince(provinceData);
          setStay(stayData);
        }
      } catch (error) {
        if (isMounted) {
          console.error(error);
          setProvince(null);
          setStay(null);
        }
      }
    }

    loadStayDetail();

    return () => {
      isMounted = false;
    };
  }, [provinceId, staySlug]);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [provinceId, staySlug]);

  function getMapSrc(value) {
    if (!value) return null;
    const match = value.match(/src=["']([^"']+)["']/);
    return match ? match[1] : value.trim();
  }

  return (
    <div className="app-wrapper">
      <Navbar />
      <section className="service-page service-detail-view">
        <div className="container service-shell">
          <div className="province-page-back">
            <Link to={`/tours/${provinceId}`}>Back to {province?.name || "province"} hotels</Link>
          </div>

          <section className="province-detail-panel service-detail-panel">
            <div className="province-detail-header">
              <div>
                <p className="province-detail-kicker">Service Detail</p>
                <h2>{stay?.name || "Loading stay..."}</h2>
                <p>{province?.name || ""}</p>
              </div>

              <div className="province-detail-meta">
                <span>{stay?.type || "Stay"}</span>
                <span>{stay?.bestFor || "Travel"}</span>
              </div>
            </div>

            <article className="place-detail-card">
              <img
                src={resolveAssetUrl(stay?.imageUrl || stay?.image_url || stay?.image)}
                alt={stay?.name || "Stay image"}
                className="place-detail-image"
              />
              <div className="place-detail-body">
                <div className="place-detail-topline">
                  <span>{province?.type || "Province"}</span>
                  <small>{stay?.range || ""}</small>
                </div>
                <h3>{stay?.name || ""}</h3>
                <p>{stay?.detail || ""}</p>

                {stay?.websiteUrl && (
                  <a
                    href={stay.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="place-detail-link"
                  >
                    Visit official site
                  </a>
                )}
              </div>
            </article>

            {stay?.mapEmbed && (
              <div className="place-detail-map">
                <h3>Location</h3>
                <iframe
                  src={getMapSrc(stay.mapEmbed)}
                  width="100%"
                  height="380"
                  style={{ border: 0, borderRadius: "12px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${stay?.name}`}
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