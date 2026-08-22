/*
 * FILE: config/clientAssets.js
 * PURPOSE:
 * Central authoritative manifest for approved client-provided media assets.
 *
 * RESPONSIBILITIES:
 * - Register approved client logo path
 * - Register approved client business, product, service, and gallery media
 * - Separate client media assets from Master Template demo placeholders
 *
 * DEPENDENCIES:
 * - None
 *
 * NOTES:
 * - Approved client logo registered for 'ai flow'.
 * - Safe empty arrays for unsupplied photo categories.
 */

export const clientAssets = {
  logo: "/images/client/logo/LogoColorNoText-Transparent-Background.png",
  businessPhotos: [],
  productPhotos: [],
  servicePhotos: [],
  galleryPhotos: [],
};
