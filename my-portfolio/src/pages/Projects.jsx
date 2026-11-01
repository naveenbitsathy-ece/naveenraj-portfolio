import React, { useState } from "react";
import "./Projects.css";
import { projects } from "../data/projects";
import ProjectDetails from "./ProjectDetails";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projects-page-wrapper">
      <div className="projects-page-header">
        <span className="page-meta-code">// HARDWARE_DESIGNS_REGISTRY</span>
        <h1 className="page-title">All Engineering Projects</h1>
        <p className="page-subtitle">
          Complete register of synthesizable Verilog RTL, FPGA prototypes, and RISC-V hardware acceleration systems.
        </p>
      </div>

      <div className="projects-catalog-grid">
        {projects.map((project, idx) => (
          <div key={project.id} className="catalog-card">
            <div className="catalog-top">
              <span className="catalog-index">0{idx + 1}</span>
              <span className={`catalog-status ${project.statusType}`}>
                {project.status}
              </span>
            </div>

            <span className="catalog-category">{project.category}</span>
            <h2 className="catalog-title">{project.title}</h2>
            <p className="catalog-summary">{project.summary}</p>

            <div className="catalog-techs">
              {project.technologies.slice(0, 4).map((t, i) => (
                <span key={i} className="catalog-tech-tag">{t}</span>
              ))}
              {project.technologies.length > 4 && (
                <span className="catalog-tech-tag">+{project.technologies.length - 4}</span>
              )}
            </div>

            <div className="catalog-footer">
              <button
                className="btn-open-spec"
                onClick={() => setSelectedProject(project)}
              >
                Inspect Specs →
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={setSelectedProject}
        />
      )}
    </div>
  );
}

export default Projects;

