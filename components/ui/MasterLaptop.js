/*
 * FILE: components/ui/MasterLaptop.js
 * PURPOSE:
 * Reusable Master Platinum Silver Laptop hardware mockup component.
 *
 * ARCHITECTURE:
 * - Single Source of Truth Hardware Base:
 *   /images/erp/master-platinum-silver-laptop.png (1376 x 768)
 * - Precision Physical Screen Display Area (relative to 1376x768 base):
 *   left: 26.0174% (358px / 1376px)
 *   top: 10.2865% (79px / 768px)
 *   width: 48.1105% (662px / 1376px)
 *   height: 53.1250% (408px / 768px)
 * - Screen Overlay: Accepts 662x408 screen overlay or auto-maps composite paths.
 * - Tab switching only switches the inner screen image while the laptop hardware remains 100% stable, fixed and identical.
 */

import Image from "next/image";

export function MasterLaptop({
  screenSrc,
  alt = "ai flow ERP Application Screen inside Master Platinum Silver Laptop",
  priority = false,
  className = "",
}) {
  // Support either direct overlay (/images/erp/screens/screen-*.png) or composite path (/images/erp/laptop-*.png)
  const resolvedOverlay = screenSrc && screenSrc.startsWith("/images/erp/laptop-")
    ? screenSrc.replace("/images/erp/laptop-", "/images/erp/screens/screen-")
    : screenSrc;

  return (
    <div className={`master-laptop-mockup ${className}`}>
      {/* 1. Master Hardware Chassis: Loaded once as the immutable base */}
      <div className="master-laptop-chassis">
        <Image
          src="/images/erp/master-platinum-silver-laptop.png"
          alt="ai flow ERP Master Platinum Silver Laptop Hardware"
          width={1376}
          height={768}
          priority={priority}
          className="master-laptop-chassis-img"
        />
      </div>

      {/* 2. Precision Inner Screen Display Overlay */}
      {resolvedOverlay && (
        <div className="master-laptop-screen-frame">
          <Image
            key={resolvedOverlay}
            src={resolvedOverlay}
            alt={alt}
            width={662}
            height={408}
            priority={priority}
            className="master-laptop-screen-img"
          />
        </div>
      )}
    </div>
  );
}
