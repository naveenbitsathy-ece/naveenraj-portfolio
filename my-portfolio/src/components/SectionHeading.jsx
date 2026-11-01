import React from "react";
import "./SectionHeading.css";

function SectionHeading({
  tag,
  title,
  highlight,
  description,
  align = "left",
  className = ""
}) {
  return (
    <div className={`section-header-component ${align} ${className}`}>
      {tag && (
        <div className="section-header-tag">
          <span className="tag-bracket">[</span>
          <span className="tag-accent-marker">//</span>
          <span className="tag-text">{tag}</span>
          <span className="tag-bracket">]</span>
        </div>
      )}

      <div className="section-header-title-row">
        <h2 className="section-header-title">
          {title} {highlight && <span className="highlight-text">{highlight}</span>}
        </h2>
        <div className="section-header-rule">
          <span className="rule-line"></span>
          <span className="rule-dot"></span>
        </div>
      </div>

      {description && <p className="section-header-description">{description}</p>}
    </div>
  );
}

export default SectionHeading;

