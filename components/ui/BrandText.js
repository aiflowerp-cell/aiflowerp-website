/*
 * FILE: components/ui/BrandText.js
 * PURPOSE:
 * Centralized rendering primitive for official brand wordmarks:
 * - 'ai flow' (strictly lowercase, bold, #2563EB blue)
 * - 'Kinny Cart' (strictly title case, bold, #059669 commerce green)
 *
 * RESPONSIBILITIES:
 * - Render 'ai flow' consistently in lowercase with blue brand wordmark styling
 * - Render 'Kinny Cart' consistently in title case with green commerce wordmark styling
 * - Guarantee zero customer-facing display of 'AI FLOW', 'Ai Flow', 'aiflow', or 'KinniyaCart'
 * - Maintain identical font weight and visual balance between both coordinated brand identities
 *
 * DEPENDENCIES:
 * - None
 */

export function BrandText({ text }) {
  if (typeof text !== "string") return text;

  // Pattern matches all casings and variations of ai flow and Kinny Cart / KinniyaCart
  const parts = text.split(
    /(ai\s*flow|AI\s*FLOW|Ai\s*Flow|aiflow|Kinny\s*Cart|KinniyaCart|KINNIYACART|Kinniya\s*Cart)/gi
  );

  return parts.map((part, index) => {
    if (!part) return null;
    const clean = part.toLowerCase().replace(/\s+/g, " ").trim();

    if (clean === "ai flow" || clean === "aiflow") {
      return (
        <span key={index} className="wordmark-aiflow">
          ai flow
        </span>
      );
    }

    if (
      clean === "kinny cart" ||
      clean === "kinniyacart" ||
      clean === "kinniya cart"
    ) {
      return (
        <span key={index} className="wordmark-kinny">
          Kinny Cart
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

export function KinnyCartWordmark({ suffix = "" }) {
  return (
    <span className="wordmark-kinny">
      Kinny Cart{suffix ? ` ${suffix}` : ""}
    </span>
  );
}
