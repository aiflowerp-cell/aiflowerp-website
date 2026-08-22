/*
 * FILE: components/sections/EvidenceSection.js
 * PURPOSE:
 * Evidence-driven transaction processing section explaining the document-to-ledger workflow.
 *
 * RESPONSIBILITIES:
 * - Render section heading (eyebrow, title, lead description)
 * - Render 4-step evidence pipeline (Document Ingestion → OCR Extraction → Operator Verification → Verified Posting)
 *
 * DEPENDENCIES:
 * - @/content/siteContent
 *
 * NOTES:
 * - Explains HOW transactions are processed reliably using verified ERP capabilities.
 */

import { content } from "@/content/siteContent";

export function EvidenceSection() {
  const evidence = content.evidenceSection;
  if (!evidence || !evidence.steps || evidence.steps.length === 0) {
    return null;
  }

  return (
    <section className="evidence-section section">
      <div className="container">
        <div className="section-top">
          <div>
            {evidence.eyebrow && <p className="eyebrow">{evidence.eyebrow}</p>}
            {evidence.title && <h2>{evidence.title}</h2>}
            {evidence.description && <p className="section-lead">{evidence.description}</p>}
          </div>
        </div>
        <div className="evidence-grid">
          {evidence.steps.map((step, index) => (
            <div className="evidence-card" key={step.title || index}>
              <span className="evidence-step-badge">{step.number || String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
