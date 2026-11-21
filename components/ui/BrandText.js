/*
 * FILE: components/ui/BrandText.js
 * PURPOSE:
 * Centralized rendering primitive for official brand wordmarks:
 * - 'ai flow' (strictly lowercase, bold, #2563EB enterprise blue)
 * - 'KinnyCart' (PascalCase without space, bold, #DC2626 retail red theme)
 *
 * RESPONSIBILITIES:
 * - Render 'ai flow' consistently in lowercase with blue brand wordmark styling
 * - Render 'KinnyCart' consistently in PascalCase without space and red commerce wordmark styling
 * - Maintain identical font weight and visual balance between both coordinated brand identities
 *
 * DEPENDENCIES:
 * - None
 */

export function BrandText({ text }) {
  if (typeof text !== "string") return text;

  // Pattern matches all casings and variations of ai flow and KinnyCart / Kinny Cart
  const parts = text.split(
    /(ai\s*flow|AI\s*FLOW|Ai\s*Flow|aiflow|Kinny\s*Cart|KINNY\s*CART|kinny\s*cart|KinnyCart|KINNYCART|kinnycart|KinniyaCart|KINNIYACART|Kinniya\s*Cart|KinniyCart)/gi
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
      compact === "kinnycart" ||
      compact === "kinniyacart" ||
      compact === "kinniycart"
    ) {
      return (
        <span key={index} className="wordmark-kinny">
          KinnyCart
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
      KinnyCart{suffix ? ` ${suffix}` : ""}
    </span>
  );
}
