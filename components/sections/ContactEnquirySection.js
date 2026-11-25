/*
 * FILE: components/sections/ContactEnquirySection.js
 * PURPOSE:
 * Interactive business enquiry channel selector for the Contact Page.
 *
 * RESPONSIBILITIES:
 * - Render 3 distinct business enquiry types:
 *   1. ai flow ERP Demo (Enterprise Operations)
 *   2. kinny cart Business Enquiry (Digital Commerce & Local Merchants)
 *   3. General Business Enquiry (Corporate Partnerships & Technology)
 * - Provide tailored mailto action with pre-populated subject lines
 * - Display verified business email and direct communication options
 * - Zero fabricated contact information
 *
 * DEPENDENCIES:
 * - react (useState)
 * - @/config/business
 * - @/components/ui/BrandText
 */

"use client";

import { useState } from "react";
import { business } from "@/config/business";
import { BrandText } from "@/components/ui/BrandText";
import { telUrl, whatsappUrl } from "@/lib/site";

export function ContactEnquirySection() {
  const [selectedType, setSelectedType] = useState("erp"); // 'erp' | 'kinny' | 'general'

  const enquiryTypes = [
    {
      id: "erp",
      label: "ai flow ERP Demo",
      tagline: "Enterprise Operations & Distribution",
      description:
        "Request a guided walkthrough of ai flow ERP for your commodity dealership, multi-godown distribution, or wholesale business.",
      subject: "ai flow ERP Demo Request",
      body: "Hello ai flow Team,%0D%0A%0D%0AI would like to schedule a demonstration of ai flow ERP for our business operations.%0D%0A%0D%0ABusiness Name:%0D%0AOperational Location:%0D%0APhone Number:%0D%0AEstimated Monthly Volume / Trade Type:%0D%0A%0D%0AThank you.",
      buttonLabel: "Schedule ai flow ERP Demo ↗",
      variant: "erp",
    },
    {
      id: "kinny",
      label: "kinny cart Business Enquiry",
      tagline: "Digital Commerce & Merchant Onboarding",
      description:
        "Learn how neighborhood grocery stores, supermarkets, and local merchants launch online storefronts with kinny cart.",
      subject: "kinny cart Merchant / Business Enquiry",
      body: "Hello kinny cart Team,%0D%0A%0D%0AI would like to learn more about launching an online store on kinny cart.%0D%0A%0D%0AStore / Merchant Name:%0D%0ACity / Market Area:%0D%0ACategory (Grocery / FMCG / Retail):%0D%0AContact Number:%0D%0A%0D%0AThank you.",
      buttonLabel: "Submit kinny cart Enquiry ↗",
      variant: "kinny",
    },
    {
      id: "general",
      label: "General Business Enquiry",
      tagline: "Corporate Partnerships & Platform",
      description:
        "For technology partnerships, platform integration, enterprise consultations, or general inquiries with the parent brand.",
      subject: "General Business Enquiry - ai flow",
      body: "Hello ai flow Team,%0D%0A%0D%0AI have a general business enquiry regarding the ai flow technology platform.%0D%0A%0D%0AOrganization:%0D%0AContact Person:%0D%0AMessage:%0D%0A%0D%0AThank you.",
      buttonLabel: "Send Corporate Enquiry ↗",
      variant: "general",
    },
  ];

  const current = enquiryTypes.find((t) => t.id === selectedType) || enquiryTypes[0];
  const emailHref = business.email
    ? `mailto:${business.email}?subject=${encodeURIComponent(current.subject)}&body=${current.body}`
    : "#";

  return (
    <section className="section contact-enquiry-section">
      <div className="container">
        <div className="section-heading align-center">
          <p className="eyebrow">Select Enquiry Type</p>
          <h2>How Can We Help Your Business?</h2>
          <p className="section-lead">
            Select the relevant solution below to connect with our enterprise or commerce specialists.
          </p>
        </div>

        {/* 3-Way Enquiry Selector Tabs */}
        <div className="enquiry-type-selector" role="tablist" aria-label="Business Enquiry Type">
          {enquiryTypes.map((type) => (
            <button
              key={type.id}
              type="button"
              role="tab"
              aria-selected={selectedType === type.id}
              className={`enquiry-type-btn ${selectedType === type.id ? `is-active is-${type.variant}` : ""}`}
              onClick={() => setSelectedType(type.id)}
            >
              <span className="enquiry-btn-dot" />
              <div className="enquiry-btn-text">
                <span className="enquiry-btn-label">
                  <BrandText text={type.label} />
                </span>
                <span className="enquiry-btn-tagline">{type.tagline}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Enquiry Card */}
        <div className={`enquiry-card is-${current.variant}`}>
          <div className="enquiry-card-body">
            <div className="enquiry-card-header">
              <span className={`enquiry-card-badge is-${current.variant}`}>
                {current.variant === "erp"
                  ? "Enterprise System"
                  : current.variant === "kinny"
                  ? "Digital Commerce"
                  : "Corporate Brand"}
              </span>
              <h3 className="enquiry-card-title">
                <BrandText text={current.label} />
              </h3>
              <p className="enquiry-card-desc">{current.description}</p>
            </div>

            <div className="enquiry-card-actions">
              <a
                href={emailHref}
                className={`button ${
                  current.variant === "kinny"
                    ? "button-kinny"
                    : current.variant === "erp"
                    ? "button-primary"
                    : "button-secondary"
                } enquiry-action-btn`}
              >
                <BrandText text={current.buttonLabel} />
              </a>

              {business.email && (
                <div className="enquiry-direct-email">
                  <span>Direct Email: </span>
                  <a href={emailHref} className="enquiry-email-link">
                    {business.email}
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="enquiry-card-footer-info">
            <div className="enquiry-info-item">
              <span className="enquiry-info-icon" aria-hidden="true">✓</span>
              <span>100% Authentic Product Demonstrations</span>
            </div>
            <div className="enquiry-info-item">
              <span className="enquiry-info-icon" aria-hidden="true">✓</span>
              <span>Direct Operational Consultation</span>
            </div>
            <div className="enquiry-info-item">
              <span className="enquiry-info-icon" aria-hidden="true">✓</span>
              <span>Independent Platform Deployment</span>
            </div>
          </div>
        </div>

        {/* Direct Channel Fallbacks */}
        {(business.phone || (!business.whatsappIsPlaceholder && business.whatsapp)) && (
          <div className="contact-direct-channels">
            <p className="contact-channels-label">Alternative Direct Channels:</p>
            <div className="button-row">
              {business.phone && (
                <a href={telUrl(business.phone)} className="button button-secondary">
                  Call {business.phone}
                </a>
              )}
              {!business.whatsappIsPlaceholder && business.whatsapp && (
                <a
                  href={whatsappUrl(business.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-text"
                >
                  WhatsApp Inquiries ↗
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
