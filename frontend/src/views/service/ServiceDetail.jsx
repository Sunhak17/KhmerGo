import React, { useLayoutEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { getProvinceById, getServiceStay, serviceByProvince } from "../../data/serviceData";
import "../../styles/pages/service/ServiceDetail.css";

export default function ServiceDetail() {
  const { provinceId, staySlug } = useParams();
  const { section, stay } = getServiceStay(provinceId, staySlug);

  const safeSection = section ?? serviceByProvince[0];
  const safeStay = stay ?? safeSection.stays[0];
  const province = getProvinceById(safeSection.id);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [provinceId, staySlug]);

  return (
    <div className="app-wrapper">
      <Navbar />
      <section className="service-page">
        <div className="container service-shell">
          <div className="province-page-back">
            <Link to={`/tours`}>Back to services</Link>
          </div>

          <section className="province-detail-panel service-detail-panel">
            <div className="province-detail-header">
              <div>
                <p className="province-detail-kicker">Service Detail</p>
                <h2>{safeStay.name}</h2>
                <p>{safeSection.province}</p>
              </div>

              <div className="province-detail-meta">
                <span>{safeStay.type}</span>
                <span>{safeStay.bestFor}</span>
              </div>
            </div>

            <article className="place-detail-card">
              <img src={safeStay.image} alt={safeStay.name} className="place-detail-image" />
              <div className="place-detail-body">
                <div className="place-detail-topline">
                  <span>{province?.type ?? "Province"}</span>
                  <small>{safeStay.range}</small>
                </div>
                <h3>{safeStay.name}</h3>
                <p>{safeStay.detail}</p>
              </div>
            </article>
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
}