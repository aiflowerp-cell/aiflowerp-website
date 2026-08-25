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
 * - @/components/ui/BrandText
 *
 * NOTES:
 * - Explains HOW transactions are processed reliably using verified ERP capabilities.
 * - Uses the centralized BrandText renderer for visible "ai flow" brand mentions.
 */

import { BrandText } from "@/components/ui/BrandText";
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
            {evidence.eyebrow && (
              <p className="eyebrow">{evidence.eyebrow}</p>
            )}

            {evidence.title && (
              <h2>
                <BrandText text={evidence.title} />
              </h2>
            )}

            {evidence.description && (
              <p className="section-lead">
                <BrandText text={evidence.description} />
              </p>
            )}
          </div>
        </div>

        <div className="evidence-grid">
          {evidence.steps.map((step, index) => (
            <div
              className="evidence-card"
              key={step.title || index}
            >
              <span className="evidence-step-badge">
                {step.number || String(index + 1).padStart(2, "0")}
              </span>

              <h3>
                <BrandText text={step.title} />
              </h3>

              <p>
                <BrandText text={step.description} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}