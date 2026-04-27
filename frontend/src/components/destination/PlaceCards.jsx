import React from "react";
import { Link } from "react-router-dom";
import { resolveAssetUrl, slugify } from "../../services/api";
import "../../styles/pages/destination/PlaceCards.css";

export default function PlaceCards({ province, onSelectPlace, activePlaceName }) {
  return (
    <div className="place-card-grid">
      {province.places.map((place) => {
        const isActive = place.name === activePlaceName;

        return (
          <Link
            key={place.name}
            className={`place-card-tile${isActive ? " is-active" : ""}`}
            to={`/destinations/${province.id}/${place.slug || slugify(place.name)}`}
            aria-label={`Open ${place.name}`}
          >
            <img src={resolveAssetUrl(place.imageUrl || place.image_url || place.image)} alt={place.name} className="place-card-image" />
            <div className="place-card-overlay" />
            <div className="place-card-text">
              <span>{place.tag}</span>
              <h3>{place.name}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
}