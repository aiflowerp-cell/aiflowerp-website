/*
 * FILE: components/ui/Button.js
 * PURPOSE:
 * Core multi-variant button and link UI primitive.
 *
 * RESPONSIBILITIES:
 * - Render Next.js Link when href is provided, otherwise render HTML button
 * - Support button variants (primary, light, text)
 * - Support external absolute URLs and standard anchor props
 *
 * DEPENDENCIES:
 * - next/link
 *
 * NOTES:
 * - Atomic UI component used across headers, heroes, sections, and footers.
 */

import Link from "next/link";

export function Button({ href, children, variant = "primary", ...props }) {
  const className = `button button-${variant}`;
  return href ? (
    <Link className={className} href={href} {...props}>
      {children}
    </Link>
  ) : (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
