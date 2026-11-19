/*
 * FILE: components/sections/WhyAiFlowSection.js
 * PURPOSE:
 * Section 4: Why ai flow — Key Technology Advantages.
 *
 * RESPONSIBILITIES:
 * - Render 6 core architectural advantages distinguishing ai flow systems
 * - Highlight evidence-driven processing, OCR document ingestion, dual-state inventory, and security
 * - Provide enterprise-grade visual grid with subtle elevation and typography
 *
 * DEPENDENCIES:
 * - @/content/siteContent
 */

import { content } from "@/content/siteContent";
import { BrandText } from "@/components/ui/BrandText";

export function WhyAiFlowSection() {
  const { whyAiFlow } = content;
  if (!whyAiFlow || !whyAiFlow.items) return null;

  return (
    <section className="section why-aiflow-section">
      <div className="container">
        <div className="section-heading align-center">
          {whyAiFlow.eyebrow && (
            <p className="eyebrow">
              <BrandText text={whyAiFlow.eyebrow} />
            </p>
          )}
          <h2><BrandText text={whyAiFlow.title} /></h2>
          {whyAiFlow.description && (
            <p className="section-lead">
              <BrandText text={whyAiFlow.description} />
            </p>
          )}
        </div>

        <div className="why-aiflow-grid">
          {whyAiFlow.items.map((item, index) => (
            <div key={item.number || index} className="advantage-card">
              <div className="advantage-card-top">
                <span className="advantage-number">{item.number}</span>
                <span className="advantage-accent-bar" aria-hidden="true" />
              </div>
              <h3 className="advantage-title">{item.title}</h3>
              <p className="advantage-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
