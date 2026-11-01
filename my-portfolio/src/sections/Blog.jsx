import React, { useState } from "react";
import "./Blog.css";
import SectionHeading from "../components/SectionHeading";
import { initialArticles } from "../data/articles";

function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">
        <SectionHeading
          tag="06 // KNOWLEDGE & RESEARCH"
          title="Technical"
          highlight="Blog"
          description="Insights, technical notes, and exploration logs covering DSP filter pipelines, Verilog RTL practices, and RISC-V architectures."
        />

        <div className="articles-grid-layout">
          {initialArticles.map((article) => (
            <article key={article.id} className="article-entry-card">
              <div className="article-top-row">
                <span className="article-category-label">
                  // {article.category}
                </span>
                <span className="article-read-time">{article.readTime}</span>
              </div>

              <h3 className="article-entry-title">{article.title}</h3>
              <p className="article-entry-summary">{article.summary}</p>

              <div className="article-card-footer">
                <span className="article-date-tag">
                  {article.datePlaceholder}
                </span>
                <button
                  className="btn-read-article"
                  onClick={() => setSelectedArticle(article)}
                >
                  <span>Preview Brief</span>
                  <span className="read-arrow">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* MODAL ARTICLE PREVIEW */}
        {selectedArticle && (
          <div
            className="article-modal-backdrop"
            onClick={() => setSelectedArticle(null)}
          >
            <div
              className="article-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="article-modal-top">
                <span className="modal-category-badge">
                  // {selectedArticle.category}
                </span>
                <button
                  className="article-modal-close"
                  onClick={() => setSelectedArticle(null)}
                >
                  ✕
                </button>
              </div>

              <h2 className="article-modal-title">{selectedArticle.title}</h2>
              <div className="article-modal-meta">
                <span>{selectedArticle.datePlaceholder}</span>
                <span>·</span>
                <span>{selectedArticle.readTime}</span>
                <span>·</span>
                <span>Author: Naveenraj</span>
              </div>

              <div className="article-modal-body">
                <p className="article-modal-summary">{selectedArticle.summary}</p>
                <div className="article-full-text-box">
                  <h4 className="box-heading">// TECHNICAL BRIEF</h4>
                  <p>{selectedArticle.fullNote}</p>
                </div>
                <div className="article-modal-notice">
                  <span>Note:</span> Full comprehensive technical manuscript and Verilog testbench code will be published soon.
                </div>
              </div>

              <div className="article-modal-footer">
                <button
                  className="btn-close-article-modal"
                  onClick={() => setSelectedArticle(null)}
                >
                  Close Brief
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Blog;

