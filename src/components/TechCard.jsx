import React from "react";
import "./TechCard.css";

export default function TechCard({ name, category, image, icon }) {
  const imgSrc = image || icon;

  return (
    <div className="tech-item">
      <div className="tech-icon-wrapper">
        <img
          src={imgSrc}
          alt={`${name} logo`}
          className="tech-icon-img"
          loading="lazy"
          width="56"
          height="56"
        />
      </div>
      <span className="tech-name">{name}</span>
      <span className="tech-category">{category}</span>
    </div>
  );
}
