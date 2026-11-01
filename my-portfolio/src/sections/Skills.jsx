import React, { useState } from "react";
import "./Skills.css";
import SectionHeading from "../components/SectionHeading";
import { skillCategories } from "../data/skills";

function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeTab);

  return (
    <section id="expertise" className="skills-section">
      <div className="skills-container">
        <SectionHeading
          tag="02 // TECHNICAL EXPERTISE"
          title="Hardware Engineering"
          highlight="Stack"
          description="A comprehensive toolkit across hardware description languages, industry EDA suites, system programming, and target silicon development boards."
        />

        {/* CATEGORY FILTER PILLS */}
        <div className="skills-filter-bar">
          <button
            className={`filter-pill ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            ALL DOMAINS ({skillCategories.length})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-pill ${activeTab === cat.id ? "active" : ""}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* GRID OF SKILL CATEGORIES (Inspired by Acme's 6-card feature grid) */}
        <div className="skills-cards-grid">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="skill-category-card">
              <div className="category-card-top">
                <span className="category-code">// {cat.code}</span>
                <span className="category-count">{cat.skills.length} ITEMS</span>
              </div>

              <h3 className="category-title">{cat.category}</h3>
              <p className="category-desc">{cat.description}</p>

              <div className="category-skills-list">
                {cat.skills.map((item, idx) => (
                  <div key={idx} className="skill-row-item">
                    <div className="skill-row-header">
                      <span className="skill-row-name">{item.name}</span>
                      <span className="skill-row-tag">{item.tag}</span>
                    </div>
                    {item.description && (
                      <span className="skill-row-desc">{item.description}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="category-card-bottom-line" />
            </div>
          ))}
        </div>

        {/* SYNTHESIS & TIMING NOTE */}
        <div className="skills-footer-notice">
          <div className="notice-icon">⚙</div>
          <div className="notice-text">
            <strong>RTL Methodology Focus:</strong> Designs are authored with physical
            clock constraints, single-cycle or multi-cycle datapath timing closure,
            and balanced resource allocation (LUTs, BRAM, DSP48 slices).
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

