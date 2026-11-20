/*
 * FILE: components/sections/WhoWeServeSection.js
 * PURPOSE:
 * Section 5: Who We Serve — Dealers, Distributors, Merchants and Customers.
 *
 * RESPONSIBILITIES:
 * - Render 4 audience segmentation cards
 * - Clearly map each target group to its corresponding product (ai flow ERP, Kinny Cart)
 * - Display tailored operational capabilities and key benefits
 *
 * DEPENDENCIES:
 * - @/content/siteContent
 */

import Link from "next/link";
import { content } from "@/content/siteContent";
import { BrandText } from "@/components/ui/BrandText";

export function WhoWeServeSection() {
  const { whoWeServe } = content;
  if (!whoWeServe || !whoWeServe.segments) return null;

  return (
    <section className="section who-we-serve-section">
      <div className="container">
        <div className="section-heading align-center">
          {whoWeServe.eyebrow && <p className="eyebrow">{whoWeServe.eyebrow}</p>}
          <h2>{whoWeServe.title}</h2>
          {whoWeServe.description && (
            <p className="section-lead">{whoWeServe.description}</p>
          )}
        </div>

        <div className="who-we-serve-grid">
          {whoWeServe.segments.map((seg, idx) => (
            <div key={seg.number || idx} className="audience-card">
              <div className="audience-card-header">
                <span className="audience-tag">{seg.tag}</span>
                <span className="audience-num">{seg.number}</span>
              </div>

              <h3 className="audience-title">{seg.title}</h3>
              <p className="audience-desc">
                <BrandText text={seg.description} />
              </p>

              <div className="audience-points">
                {seg.points.map((pt, pIdx) => (
                  <div key={pIdx} className="audience-point-row">
                    <span className="audience-point-dot" aria-hidden="true">▸</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="audience-card-footer">
                <span className="audience-system-label">Platform:</span>
                {seg.external ? (
                  <a
                    href={seg.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`audience-system-link ${seg.system.toLowerCase().includes("kinny") ? "is-kinny-cart" : "is-aiflow"}`}
                  >
                    <BrandText text={seg.system} /> ↗
                  </a>
                ) : (
                  <Link href={seg.href} className="audience-system-link is-aiflow">
                    <BrandText text={seg.system} /> →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
