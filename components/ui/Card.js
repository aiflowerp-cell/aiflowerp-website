/*
 * FILE: components/ui/Card.js
 * PURPOSE:
 * Base card container UI primitive.
 *
 * RESPONSIBILITIES:
 * - Wrap card content inside semantic HTML article element
 * - Accept and append custom class names
 *
 * DEPENDENCIES:
 * - None
 *
 * NOTES:
 * - Atomic UI component used in product showcases and modular containers.
 */

export function Card({ children, className = "" }) {
  return <article className={`card ${className}`}>{children}</article>;
}
