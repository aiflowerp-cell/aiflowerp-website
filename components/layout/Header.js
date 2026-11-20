/*
 * FILE: components/layout/Header.js
 * PURPOSE:
 * Main reusable website header and navigation component.
 *
 * RESPONSIBILITIES:
 * - Render site branding (logo image, business short name, and optional tagline)
 * - Apply brandNameTextColor if specified
 * - Render primary navigation links dynamically from configuration
 * - Handle mobile drawer navigation state (open/close)
 * - Render header call-to-action button and secondary Open ERP link
 *
 * DEPENDENCIES:
 * - next/link
 * - react (useState)
 * - @/config/business
 * - @/components/ui/Button
 *
 * NOTES:
 * - Completely client-agnostic; consumes branding and CTA from config/business.js.
 */

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { business, navigation } from "@/config/business";
import { Button } from "@/components/ui/Button";
import { BrandText } from "@/components/ui/BrandText";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          {business.logo && (
            <Image
              src={business.logo}
              alt="ai flow logo"
              width={38}
              height={38}
              style={{ objectFit: "contain" }}
              priority
            />
          )}
          <span>
            <strong style={business.brandNameTextColor ? { color: business.brandNameTextColor } : {}}>
              {business.shortName || business.name}
            </strong>
            {business.tagline && <small>{business.tagline}</small>}
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          {(business.erpUrl || business.appUrl) && (
            <a
              href={business.erpUrl || business.appUrl}
              className="header-erp-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              Open <BrandText text="ai flow ERP" /> ↗
            </a>
          )}
          {business.shoppingUrl && (
            <a
              href={business.shoppingUrl}
              className="header-erp-link header-kinny-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              Open <BrandText text="Kinny Cart" /> ↗
            </a>
          )}
          {business.headerCta?.label && (
            <Button href={business.headerCta.href || "/contact"} onClick={() => setOpen(false)}>
              {business.headerCta.label}
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}

