/*
 * FILE: components/sections/WorkflowSection.js
 * PURPOSE:
 * Conceptual workflow pipeline section explaining the document-to-posting process in ai flow.
 *
 * RESPONSIBILITIES:
 * - Render workflow section header (eyebrow, title, description)
 * - Render numbered process steps in structured responsive layout
 * - Support optional CTA button
 * - Safely omit section if no workflow steps are provided
 *
 * DEPENDENCIES:
 * - @/content/siteContent
 * - @/components/ui/Button
 *
 * NOTES:
 * - Client-agnostic component visualizing 'Document → Extract → Verify → Draft → Review → Post → Operational Impact → Reporting'.
 */

import { content } from "@/content/siteContent";
import { Button } from "@/components/ui/Button";

export function WorkflowSection({ cta = false }) {
  const workflow = content.workflow;
  if (!workflow || !workflow.steps || workflow.steps.length === 0) {
    return null;
  }

  return (
    <section className="section workflow-section">
      <div className="container">
        <div className="section-top">
          <div>
            {workflow.eyebrow && <p className="eyebrow">{workflow.eyebrow}</p>}
            {workflow.title && <h2>{workflow.title}</h2>}
            {workflow.description && <p className="workflow-lead">{workflow.description}</p>}
          </div>
          {cta && workflow.ctaHref && (
            <Button href={workflow.ctaHref} variant="text">
              {workflow.ctaText || "Learn more"} <span aria-hidden="true">↗</span>
            </Button>
          )}
        </div>
        <div className="workflow-grid">
          {workflow.steps.map((step, index) => (
            <div className="workflow-card" key={step.title || index}>
              <span className="workflow-step-badge">
                {step.number || String(index + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
