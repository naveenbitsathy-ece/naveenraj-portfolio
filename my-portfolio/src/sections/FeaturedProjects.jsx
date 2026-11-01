import React, { useState } from "react";
import "./FeaturedProjects.css";
import SectionHeading from "../components/SectionHeading";
import ProjectDetails from "../pages/ProjectDetails";
import { projects } from "../data/projects";

function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="featured-projects-section">
      <div className="projects-container">
        <SectionHeading
          tag="03 // IMPLEMENTATIONS & DESIGNS"
          title="Featured"
          highlight="Projects"
          description="Synthesizable Verilog RTL, FPGA coprocessors, DSP pipelines, and RISC-V microprocessor system implementations."
        />

        <div className="projects-list-wrapper">
          {projects.map((project, index) => (
            <article key={project.id} className="project-feature-card">
              <div className="project-card-grid">
                {/* INDEX & STATUS */}
                <div className="project-index-col">
                  <span className="project-num">0{index + 1}</span>
                  <div className="project-status-wrapper">
                    <span className={`status-pill ${project.statusType}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* MAIN CONTENT */}
                <div className="project-info-col">
                  <div className="project-meta-line">
                    <span className="project-category-tag">{project.category}</span>
                    <span className="project-timeline-tag">{project.timeline}</span>
                  </div>

                  <h3 className="project-headline">{project.title}</h3>

                  {project.award && (
                    <div className="project-award-badge">
                      <span className="badge-star">★</span>
                      <span>{project.award}</span>
                      {project.teamMembers && (
                        <span className="badge-team">
                          (Team: {project.teamMembers.join(", ")})
                        </span>
                      )}
                    </div>
                  )}

                  <p className="project-summary-text">{project.summary}</p>

                  {/* HARDWARE WORKFLOW PIPELINE (Special for Project 1 & 2) */}
                  {project.workflow && (
                    <div className="hardware-workflow-strip">
                      <span className="workflow-strip-label">// HARDWARE PIPELINE:</span>
                      <div className="workflow-steps-row">
                        {project.workflow.map((w, wIdx) => (
                          <div key={wIdx} className="workflow-step-node">
                            <span className="step-tag">{w.step}</span>
                            <span className="step-title">{w.label}</span>
                            {wIdx < project.workflow.length - 1 && (
                              <span className="step-connector">→</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TECH STACK BADGES */}
                  <div className="project-technologies">
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="project-actions-row">
                    <button
                      className="btn-view-details"
                      onClick={() => openProjectDetails(project)}
                      aria-label={`View architecture and specifications for ${project.title}`}
                    >
                      <span>View Specifications</span>
                      <span className="action-arrow">→</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-github-repo"
                    >
                      <span>GitHub Repository</span>
                      <span className="arrow-external">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* DETAILED PROJECT MODAL OVERLAY */}
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={closeProjectDetails}
          onSelectProject={setSelectedProject}
        />
      )}
    </section>
  );
}

export default FeaturedProjects;

