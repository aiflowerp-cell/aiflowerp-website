/*
 * FILE: components/sections/WorkflowSection.js
 * PURPOSE:
 * Conceptual cement business workflow section illustrating the 8-step real-world operational model.
 *
 * RESPONSIBILITIES:
 * - Render section header (eyebrow, title, description)
 * - Render image and 'Company Billing is NOT Physical Stock' callout side-by-side
 * - Render real cement godown/loading visual
 * - Render 8-step real-world cement process cards
 * - Render clarifying footer note distinguishing conceptual flow from software modules
 *
 * DEPENDENCIES:
 * - next/image
 * - @/content/siteContent
 * - @/components/ui/Button
 * - @/components/ui/BrandText
 *
 * NOTES:
 * - Visualizes Credit Limit → Company Billing → Transit Stock → Lifting → Physical Stock → Sales → Collection → Company Payment.
 * - Uses the centralized BrandText renderer for visible "ai flow" brand mentions.
 */

import Image from "next/image";
import { content } from "@/content/siteContent";
import { Button } from "@/components/ui/Button";
import { BrandText } from "@/components/ui/BrandText";

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
            {workflow.eyebrow && (
              <p className="eyebrow">{workflow.eyebrow}</p>
            )}

            {workflow.title && (
              <h2>
                <BrandText text={workflow.title} />
              </h2>
            )}

            {workflow.description && (
              <p className="workflow-lead">
                <BrandText text={workflow.description} />
              </p>
            )}
          </div>

          {cta && workflow.ctaHref && (
            <Button href={workflow.ctaHref} variant="text">
              {workflow.ctaText || "View verified modules"}{" "}
              <span aria-hidden="true">↗</span>
            </Button>
          )}
        </div>

        <div className="workflow-feature">
          {workflow.image && (
            <div className="workflow-image">
              <Image
                src={workflow.image}
                alt="Cement bags and truck loading at a cement godown"
                width={616}
                height={247}
                sizes="(max-width: 768px) 100vw, 58vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "12px",
                }}
              />
            </div>
          )}

          {workflow.ruleTitle && (
            <div className="workflow-rule-callout">
              <div className="workflow-rule-title">
                <span aria-hidden="true">ℹ️</span>{" "}
                {workflow.ruleTitle}
              </div>

              <p className="workflow-rule-description">
                <BrandText text={workflow.ruleDescription} />
              </p>
            </div>
          )}
        </div>

        <div className="workflow-grid">
          {workflow.steps.map((step, index) => (
            <div
              className="workflow-card"
              key={step.title || index}
            >
              <span className="workflow-step-badge">
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

        {workflow.note && (
          <p className="workflow-note">
            <BrandText text={workflow.note} />
          </p>
        )}
      </div>
    </section>
  );
}