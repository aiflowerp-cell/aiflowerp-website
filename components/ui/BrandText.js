/*
 * FILE: components/ui/BrandText.js
 * PURPOSE:
 * Centralized rendering primitive for the ai flow brand name.
 *
 * RESPONSIBILITIES:
 * - Render the exact lowercase brand name "ai flow" in brand blue
 * - Preserve all surrounding text in its normal inherited color
 * - Provide one reusable brand-text treatment across the website
 *
 * DEPENDENCIES:
 * - None
 *
 * NOTES:
 * - The official brand spelling remains exactly "ai flow".
 * - Only the visible brand-name occurrence is styled.
 */

export function BrandText({ text }) {
  if (typeof text !== "string") return text;

  const parts = text.split(/(ai flow)/g);

  return parts.map((part, index) =>
    part === "ai flow" ? (
      <span key={index} className="brand-blue">
        ai flow
      </span>
    ) : (
      part
    )
  );
}