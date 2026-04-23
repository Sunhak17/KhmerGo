import React from "react";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "../../styles/pages/destination/ProvinceGrid.css";

export default function ProvinceGrid({ provinces, activeProvinceId, onSelectProvince }) {
  return (
    <div className="province-grid">
      {provinces.map((province) => {
        const isActive = province.id === activeProvinceId;

        return (
          <Link
            key={province.id}
            className={`province-tile${isActive ? " is-active" : ""}`}
            to={`/destinations/${province.id}`}
            aria-label={`Open ${province.name}`}
          >
            <img src={province.image} alt={province.name} className="province-tile-image" />
            <div className="province-tile-overlay" />
            <div className="province-tile-content">
              <span className="province-tile-type">Province</span>
              <h3>{province.name}</h3>
            </div>
            <span className="province-tile-arrow" aria-hidden="true">
              <FaArrowUpRightFromSquare />
            </span>
          </Link>
        );
      })}
    </div>
  );
}