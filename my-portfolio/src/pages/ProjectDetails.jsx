import React, { useEffect } from "react";
import "./ProjectDetails.css";
import { projects } from "../data/projects";

function ProjectDetails({ project, onClose, onSelectProject }) {
  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const relatedProjects = projects.filter((p) => p.id !== project.id);

  return (
    <div className="project-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="project-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* MODAL TOP BAR */}
        <div className="project-modal-topbar">
          <div className="modal-meta-tag">
            <span className="modal-tag-bracket">[</span>
            <span className="modal-tag-code">SPEC_ID: {project.id.toUpperCase()}</span>
            <span className="modal-tag-bracket">]</span>
            <span className={`modal-status-badge ${project.statusType}`}>
              {project.status}
            </span>
          </div>

          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close Project Details"
          >
            <span>ESC</span>
            <span className="close-x">✕</span>
          </button>
        </div>

        {/* MODAL HEADER */}
        <div className="project-modal-header">
          <span className="modal-category">{project.category} · {project.timeline}</span>
          <h1 className="modal-title">{project.title}</h1>

          {project.award && (
            <div className="modal-award-banner">
              <span className="trophy-icon">★</span>
              <span>{project.award}</span>
            </div>
          )}

          {project.teamMembers && (
            <div className="modal-team-info">
              <span className="team-label">Team Members:</span>
              <span className="team-names">{project.teamMembers.join(" · ")}</span>
            </div>
          )}

          <div className="modal-tech-tags">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="tech-chip">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* WORKFLOW PIPELINE IF PRESENT */}
        {project.workflow && (
          <div className="modal-workflow-panel">
            <span className="workflow-title">// HARDWARE EXECUTION WORKFLOW</span>
            <div className="workflow-flow-grid">
              {project.workflow.map((item, idx) => (
                <div key={idx} className="workflow-flow-step">
                  <div className="step-number-tag">{item.step}</div>
                  <strong className="step-name">{item.label}</strong>
                  <p className="step-desc">{item.desc}</p>
                  {idx < project.workflow.length - 1 && (
                    <span className="flow-arrow-indicator">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DETAILED CONTENT SECTIONS (1-8) */}
        <div className="modal-body-sections">
          {/* 1. Overview */}
          <section className="modal-section-block">
            <h2 className="block-title">01. Project Overview</h2>
            <p className="block-text">{project.overview}</p>
          </section>

          {/* 2. Problem Statement */}
          <section className="modal-section-block">
            <h2 className="block-title">02. Problem Statement</h2>
            <p className="block-text">{project.problemStatement}</p>
          </section>

          {/* 3. Proposed Solution */}
          <section className="modal-section-block">
            <h2 className="block-title">03. Proposed Solution</h2>
            <p className="block-text">{project.proposedSolution}</p>
          </section>

          {/* 4. System Architecture */}
          <section className="modal-section-block">
            <h2 className="block-title">04. System Architecture</h2>
            <div className="architecture-box">
              <pre className="arch-text-content">{project.systemArchitecture}</pre>
            </div>
          </section>

          {/* 5. Hardware & Software Tools */}
          <section className="modal-section-block">
            <h2 className="block-title">05. Hardware & Software Tools</h2>
            <div className="tools-spec-table">
              {project.hardwareSoftwareTools.map((tool, idx) => (
                <div key={idx} className="spec-table-row">
                  <span className="tool-category-name">{tool.name}</span>
                  <span className="tool-category-detail">{tool.detail}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Implementation Methodology */}
          <section className="modal-section-block">
            <h2 className="block-title">06. Implementation Methodology</h2>
            <div className="methodology-box">
              <pre className="method-text-content">{project.implementationMethodology}</pre>
            </div>
          </section>

          {/* 7. My Contribution */}
          <section className="modal-section-block">
            <h2 className="block-title">07. Engineering Contribution</h2>
            <p className="block-text highlight-box">{project.myContribution}</p>
          </section>

          {/* 8. Results & Observations */}
          <section className="modal-section-block">
            <h2 className="block-title">08. Results and Observations</h2>
            <p className="block-text">{project.resultsObservations}</p>
          </section>

          {/* 9. GitHub Repository */}
          <section className="modal-section-block repo-section">
            <h2 className="block-title">09. Repository & Source Code</h2>
            <div className="repo-action-box">
              <div className="repo-info">
                <span className="repo-label">SOURCE REPOSITORY (PLACEHOLDER)</span>
                <span className="repo-url">{project.githubUrl}</span>
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-repo-link"
              >
                <span>View on GitHub</span>
                <span className="arrow">↗</span>
              </a>
            </div>
          </section>

          {/* 10. Related Projects */}
          <section className="modal-section-block related-section">
            <h2 className="block-title">10. Related Hardware Projects</h2>
            <div className="related-projects-grid">
              {relatedProjects.slice(0, 3).map((rel) => (
                <div
                  key={rel.id}
                  className="related-project-card"
                  onClick={() => onSelectProject(rel)}
                >
                  <span className="related-category">{rel.category}</span>
                  <h3 className="related-title">{rel.shortTitle}</h3>
                  <span className="related-action">Open Specification →</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* MODAL FOOTER */}
      <div className="project-modal-footer">


  <button
    className="btn-modal-close-bottom"
    onClick={onClose}
  >
    Back to All Projects
  </button>

</div>
      </div>
    </div>
  );
}

export default ProjectDetails;

