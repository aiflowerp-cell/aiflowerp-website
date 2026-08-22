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
 * - Render optional header call-to-action button from configuration
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
import { useState } from "react";
import { business, navigation } from "@/config/business";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          {business.logo && <img src={business.logo} alt="" width="42" height="42" style={{ objectFit: "contain" }} />}
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
          {business.headerCta?.label && (
            <Button href={business.headerCta.href || "/contact"}>
              {business.headerCta.label}
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
