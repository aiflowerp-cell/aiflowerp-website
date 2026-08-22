/*
 * FILE: components/sections/WorkflowSection.js
 * PURPOSE:
 * Conceptual cement business workflow section illustrating the 8-step real-world operational model.
 *
 * RESPONSIBILITIES:
 * - Render section header (eyebrow, title, description)
 * - Render prominent 'Company Billing is NOT Physical Stock' callout box
 * - Render 8-step real-world cement process cards
 * - Render clarifying footer note distinguishing conceptual flow from software modules
 *
 * DEPENDENCIES:
 * - @/content/siteContent
 * - @/components/ui/Button
 *
 * NOTES:
 * - Visualizes Credit Limit → Company Billing → Transit Stock → Lifting → Physical Stock → Sales → Collection → Company Payment.
 */

import { content } from "@/content/siteContent";
import { Button } from "@/components/ui/Button";

export function WorkflowSection({ cta = false }) {
  const workflow = content.workflow;
  if (!workflow || !workflow.steps || workflow.steps.length === 0) {
    return null;
  }

  return (
    <section className="workflow-section section">
      <div className="container">
        <div className="section-top">
          <div>
            {workflow.eyebrow && <p className="eyebrow">{workflow.eyebrow}</p>}
            {workflow.title && <h2>{workflow.title}</h2>}
            {workflow.description && <p className="workflow-lead">{workflow.description}</p>}
          </div>
          {cta && workflow.ctaHref && (
            <Button href={workflow.ctaHref} variant="text">
              {workflow.ctaText || "View verified modules"} <span aria-hidden="true">↗</span>
            </Button>
          )}
        </div>

        {workflow.ruleTitle && (
          <div className="workflow-rule-callout">
            <div className="workflow-rule-title">
              <span aria-hidden="true">ℹ️</span> {workflow.ruleTitle}
            </div>
            <p className="workflow-rule-description">{workflow.ruleDescription}</p>
          </div>
        )}

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

        {workflow.note && (
          <p className="workflow-note">{workflow.note}</p>
        )}
      </div>
    </section>
  );
}

