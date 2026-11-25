/*
 * FILE: components/ui/BrandText.js
 * PURPOSE:
 * Centralized rendering primitive for official brand wordmarks:
 * - 'ai flow' (strictly lowercase, bold, #2563EB enterprise blue)
 * - 'KinniCart' (strictly KinniCart, bold, #DC2626 primary red)
 *
 * RESPONSIBILITIES:
 * - Render 'ai flow' consistently in lowercase with blue brand wordmark styling
 * - Render 'KinniCart' consistently with exact approved brand spelling in red wordmark styling
 * - Maintain identical font weight and visual balance between both coordinated brand identities
 *
 * DEPENDENCIES:
 * - None
 */

export function BrandText({ text }) {
  if (typeof text !== "string") return text;

  // Pattern matches all casings and variations of ai flow and KinniCart / KinnyCart / Kinny Cart
  const parts = text.split(
    /(ai\s*flow|AI\s*FLOW|Ai\s*Flow|aiflow|Kinni\s*Cart|KINNI\s*CART|kinni\s*cart|KinniCart|KINNICART|kinnicart|Kinny\s*Cart|KINNY\s*CART|kinny\s*cart|KinnyCart|KINNYCART|kinnycart|KinniyaCart|KINNIYACART|Kinniya\s*Cart|KinniyCart)/gi
  );

  return parts.map((part, index) => {
    if (!part) return null;
    const clean = part.toLowerCase().replace(/\s+/g, " ").trim();
    const compact = clean.replace(/\s+/g, "");

    if (clean === "ai flow" || clean === "aiflow") {
      return (
        <span key={index} className="wordmark-aiflow">
          ai flow
        </span>
      );
    }

    if (
      compact === "kinnicart" ||
      compact === "kinnycart" ||
      compact === "kinniyacart" ||
      compact === "kinniycart"
    ) {
      return (
        <span key={index} className="wordmark-kinny">
          KinniCart
        </span>
      );
    }

    return part;
  });
}

export function AiFlowWordmark({ suffix = "" }) {
  return (
    <span className="wordmark-aiflow">
      ai flow{suffix ? ` ${suffix}` : ""}
    </span>
  );
}

export function KinniCartWordmark({ suffix = "" }) {
  return (
    <span className="wordmark-kinny">
      KinniCart{suffix ? ` ${suffix}` : ""}
    </span>
  );
}

// Backward compatibility alias for any existing imports
export const KinnyCartWordmark = KinniCartWordmark;
