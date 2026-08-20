/*
 * FILE: content/siteContent.js
 * PURPOSE:
 * Central repository for all client-facing website copy and presentation content.
 *
 * RESPONSIBILITIES:
 * - Store page copy (eyebrows, titles, descriptions)
 * - Store editorial paragraphs for About page
 * - Store service items, products, gallery metadata, and testimonials
 *
 * DEPENDENCIES:
 * - None
 *
 * NOTES:
 * - Client-specific copy must be configured here, not inside components or page routes.
 */

export const content = {
  home: {
    eyebrow: "Thoughtful interiors since 1998",
    title: "Make room for the way you live.",
    description: "Beautiful, practical furnishings chosen with care for Indian homes, hospitality spaces, and the everyday rituals in between.",
    heroImage: "/images/hero-room.svg",
    productPreview: {
      eyebrow: "The collection",
      title: "Pieces with a little staying power.",
      ctaText: "See all products",
    },
  },
  about: {
    eyebrow: "Our story",
    title: "A family eye for beautiful, lasting spaces.",
    description: "Sharma Home Furnishings began with one small showroom and a simple belief: the things around you should feel as good as they look.",
    image: "/images/about-room.svg",
    paragraphs: [
      "For more than 25 years, our family has helped Jaipur households bring warmth, texture, and personality into their homes. We source from skilled makers and listen closely to how each room needs to work.",
      "From a single pair of curtains to a complete room refresh, our team brings practical advice, honest pricing, and a patient eye for detail.",
    ],
  },
  servicesPage: {
    eyebrow: "Our services",
    title: "The details matter. We’re here for all of them.",
    description: "A considered approach to curtains, upholstery, styling, and the small decisions that make a room work.",
  },
  services: [
    { number: "01", title: "Made-to-measure curtains", description: "From first swatch to final fall, we measure, stitch, and install window treatments made for your room." },
    { number: "02", title: "Home styling consultation", description: "A practical, personal session to bring together colour, fabric, furniture, and the details that make a space yours." },
    { number: "03", title: "Upholstery & restoration", description: "Give a much-loved chair, sofa, or headboard a fresh life with careful repairs and beautiful new fabric." },
  ],
  productsPage: {
    eyebrow: "The collection",
    title: "Materials with a life of their own.",
    description: "Explore a starting point for your space. Every piece can be discussed, adapted, and made right for you.",
  },
  products: [
    { name: "Monsoon Linen", category: "Curtains", description: "Airy flax linen with a soft, sun-washed finish.", price: "From ₹2,400", image: "/images/product-linen.svg" },
    { name: "Jodhpur Weave", category: "Cushions", description: "Handwoven cotton texture in earthy, restful tones.", price: "From ₹650", image: "/images/product-cushion.svg" },
    { name: "The Aravali", category: "Rugs", description: "A durable wool blend that grounds a room beautifully.", price: "From ₹8,900", image: "/images/product-rug.svg" },
    { name: "Neemwood Chair", category: "Furniture", description: "Solid wood, gently curved, and made for long conversations.", price: "From ₹12,500", image: "/images/product-chair.svg" },
  ],
  galleryPage: {
    eyebrow: "A little inspiration",
    title: "Rooms that feel like someone lives there.",
    description: "A glimpse at the warm, useful, personal spaces we love helping create.",
  },
  gallery: [
    { title: "A quiet reading corner", category: "Living room", image: "/images/gallery-01.svg" },
    { title: "Colour with a soft edge", category: "Bedroom", image: "/images/gallery-02.svg" },
    { title: "The everyday dining room", category: "Dining", image: "/images/gallery-03.svg" },
    { title: "Texture, layered slowly", category: "Living room", image: "/images/gallery-04.svg" },
    { title: "A welcoming entrance", category: "Styling", image: "/images/gallery-05.svg" },
    { title: "Sunlight and linen", category: "Bedroom", image: "/images/gallery-06.svg" },
  ],
  testimonials: [
    { quote: "They understood our home before suggesting a single thing. The curtains changed the whole feeling of the room.", name: "Meera Kapoor", detail: "C-Scheme, Jaipur" },
    { quote: "The upholstery work was meticulous, and the advice was refreshingly honest. Our old sofa feels like ours again.", name: "Rohan & Kavya Mehta", detail: "Vaishali Nagar, Jaipur" },
    { quote: "A lovely experience from measuring to installation. Thoughtful people and genuinely beautiful materials.", name: "Dr. Nandini Rao", detail: "Malviya Nagar, Jaipur" },
  ],
  contactPage: {
    eyebrow: "Start a conversation",
    title: "Let’s talk about your space.",
    description: "Visit the studio, call us, or send a WhatsApp message. We’re happy to start with a very rough idea.",
    details: {
      eyebrow: "Studio details",
      title: "Good things take a little looking.",
    },
  },
};
