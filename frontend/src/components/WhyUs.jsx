import React from "react";
import angkorWat from "../assets/images/slider/1.jpg";
import phnom from "../assets/images/slider/2.jpg";
import beach from "../assets/images/slider/3.jpg";
import "../styles/components/WhyUs.css";

export default function WhyUs() {
  return (
    <section id="inspire" className="inspire-section" style={{ "--inspire-bg": `url(${beach})` }}>
      <div className="container inspire-layout">
        <div className="inspire-copy">
          <h2>TRAVEL AND INSPIRE YOUR LIFE</h2>
          <a className="inspire-play" href="#tours">
            <span className="play-ring">▶</span>
            <span>Watch a preview</span>
          </a>
          <p>
            Experience Cambodia through its coastline, temples, and city rhythm. We build trips that feel cinematic, balanced, and easy to follow.
          </p>
        </div>

        <div className="inspire-gallery">
          <article className="inspire-card inspire-card--wide" style={{ "--card-bg": `url(${phnom})` }}>
            <span>City story</span>
          </article>
          <article className="inspire-card" style={{ "--card-bg": `url(${angkorWat})` }}>
            <span>Temple light</span>
          </article>
        </div>
      </div>
    </section>
  );
}
