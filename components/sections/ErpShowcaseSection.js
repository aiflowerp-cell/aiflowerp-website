/*
 * FILE: components/sections/ErpShowcaseSection.js
 * PURPOSE:
 * Real ERP showcase section rendering browser-framed screenshot slots for verified modules.
 *
 * RESPONSIBILITIES:
 * - Render interactive tab switcher for 6 verified ERP screens
 * - Render browser frame with screenshot or clearly labeled placeholder requirement
 * - Enforce strict rule: Only display information visibly present on live ERP screens
 *
 * DEPENDENCIES:
 * - react (useState)
 * - @/content/siteContent
 *
 * NOTES:
 * - Answers Question 4: What does the actual ERP look like?
 */

"use client";

import { useState } from "react";
import Image from "next/image";
import { content } from "@/content/siteContent";

export function ErpShowcaseSection() {
  const showcase = content.erpShowcase;
  const modules = showcase?.modules || [];
  const [activeTab, setActiveTab] = useState(0);

  if (!showcase || modules.length === 0) {
    return null;
  }

  const activeModule = modules[activeTab] || modules[0];

  return (
    <section className="erp-showcase-section section">
      <div className="container">
        <div className="section-top">
          <div>
            {showcase.eyebrow && <p className="eyebrow">{showcase.eyebrow}</p>}
            {showcase.title && <h2>{showcase.title}</h2>}
            {showcase.description && <p className="section-lead">{showcase.description}</p>}
          </div>
        </div>

        <div className="erp-showcase-tabs" role="tablist" aria-label="ERP Module Screens">
          {modules.map((mod, index) => (
            <button
              key={mod.id || index}
              type="button"
              role="tab"
              aria-selected={activeTab === index}
              className={`erp-tab-btn ${activeTab === index ? "is-active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {mod.title}
            </button>
          ))}
        </div>

        <div className="erp-preview-frame">
          <div className="erp-frame-header">
            <div className="erp-dots">
              <span className="erp-dot" />
              <span className="erp-dot" />
              <span className="erp-dot" />
            </div>
            <span className="erp-frame-title">ai flow ERP — {activeModule.title}</span>
            <span style={{ width: "36px" }} />
          </div>
          <div className="erp-frame-body">
            {activeModule.image ? (
              <Image
                src={activeModule.image}
                alt={`ai flow ERP - ${activeModule.title}`}
                width={800}
                height={500}
                style={{ width: "100%", height: "auto", borderRadius: "6px" }}
              />
            ) : (

              <div className="erp-placeholder-box">
                <span className="erp-placeholder-tag">Real ERP Screenshot Slot</span>
                <h3 className="erp-placeholder-title">{activeModule.title}</h3>
                <p className="erp-placeholder-desc">{activeModule.description}</p>
                {activeModule.requirement && (
                  <code className="erp-placeholder-req">
                    Requirement: {activeModule.requirement}
                  </code>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
