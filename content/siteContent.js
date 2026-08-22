/*
 * FILE: content/siteContent.js
 * PURPOSE:
 * Central repository for all client-facing website copy and presentation content for ai flow.
 *
 * RESPONSIBILITIES:
 * - Store page copy (eyebrows, titles, descriptions)
 * - Store hero CTAs, 11 verified ERP capability listings, conceptual workflow pipeline, and platform pillars
 * - Store factual about copy, contact banner copy, and footer copy
 * - Provide 100% factual client copy for 'ai flow' without fabrication or demo placeholders
 *
 * DEPENDENCIES:
 * - None
 *
 * NOTES:
 * - Brand name: 'ai flow' (strictly lowercase in all customer-facing copy).
 * - Verified capabilities mapped directly from the ai flow ERP system architecture.
 * - Demo SVG placeholders, fake testimonials, and unstated capabilities are strictly excluded.
 */

export const content = {
  home: {
    eyebrow: "Accounting-First ERP Platform",
    title: "Accounting-first ERP for structured, evidence-driven business workflows.",
    description: "ai flow connects business documents, verification, transactions, inventory, accounting workflows, and reporting in a structured system.",
    heroImage: null,
    heroNote: null,
    heroCtas: [
      { label: "Open ERP", href: "https://erp.aiflowerp.in", variant: "primary" },
      { label: "Explore Capabilities", href: "/services", variant: "light" },
      { label: "Platform Overview", href: "/products", variant: "light" },
    ],
  },
  about: {
    eyebrow: "Product Philosophy",
    title: "Built for structured business data, verification, and auditability.",
    description: "ai flow is an accounting-first ERP platform designed to support business management, accounting workflows, document-based data entry, verification, inventory and operational workflows.",
    image: null,
    badge: null,
    paragraphs: [
      "ai flow is developed around a clear architectural philosophy: business management systems must be accounting-first, evidence-driven, and verifiable at every step.",
      "Rather than relying on unverified data entry or superficial automation, ai flow integrates document-based extraction, operator verification gates, and double-entry accounting rules to ensure operational clarity and financial integrity.",
      "From multi-tenant company separation to real-time transit stock tracking and financial-year posting controls, the platform is engineered to give business owners and accountants absolute confidence in their operational numbers.",
    ],
  },
  workflow: {
    eyebrow: "How ai flow Works",
    title: "From business documents to verified transactions.",
    description: "OCR assists extraction, while verification gates and double-entry rules ensure that only valid, approved data enters your accounting ledger.",
    ctaHref: "/products",
    ctaText: "Explore platform architecture",
    steps: [
      {
        number: "01",
        title: "Document Ingestion",
        description: "Purchase invoices, lifting challans, and source business documents are ingested into the platform via document upload.",
      },
      {
        number: "02",
        title: "OCR-Assisted Extraction",
        description: "Intelligent extraction routines read document text, identifying invoice numbers, dates, line items, taxes, and totals.",
      },
      {
        number: "03",
        title: "Entity & Item Matching",
        description: "Automated routines validate buyer GSTIN, match supplier records against masters, and resolve product catalog items.",
      },
      {
        number: "04",
        title: "Draft Creation",
        description: "A structured draft voucher is generated with itemized quantities, rates, tax calculations, and freight breakdown.",
      },
      {
        number: "05",
        title: "Operator Verification",
        description: "Designated operators review extracted values, resolve any matching discrepancies, and verify document evidence.",
      },
      {
        number: "06",
        title: "Controlled Posting",
        description: "Verified vouchers pass rigorous validation gates and post directly into the double-entry accounting ledger.",
      },
      {
        number: "07",
        title: "Operational Impact",
        description: "Transit stock registers, physical inventory balances, sales records, and collection balances update in real time.",
      },
      {
        number: "08",
        title: "Dashboard & Reporting",
        description: "Financial-year-aware ledgers, trial balances, and operational visibility dashboards reflect the verified entry.",
      },
    ],
  },
  servicesPage: {
    eyebrow: "System Capabilities",
    title: "Verified ERP Modules & Workflows",
    description: "Explore the 11 major verified capability areas of the ai flow accounting-first ERP platform.",
  },
  servicesSection: {
    eyebrow: "Core Capabilities",
    title: "Verified System Capabilities",
    ctaText: "View all capabilities",
  },
  services: [
    {
      number: "01",
      title: "Accounting-First ERP Architecture",
      description: "Structured business data management where every transaction impacts double-entry ledgers with complete auditability, evidence tracking, and strict financial consistency.",
    },
    {
      number: "02",
      title: "Multi-Tenant Business Management",
      description: "Complete company-level data isolation, role-based access control (RBAC), and secure token-based user invitations across multiple business entities.",
    },
    {
      number: "03",
      title: "OCR-Assisted Document Workflows",
      description: "Document ingestion powered by OCR assistance to capture invoice metadata, supplier headers, line items, and tax totals directly from source files.",
    },
    {
      number: "04",
      title: "Buyer Verification & Entity Validation",
      description: "Multi-point verification validating buyer GSTIN, company trade identity, and structural compliance before any transaction draft is created.",
    },
    {
      number: "05",
      title: "Supplier & Product Matching",
      description: "Intelligent matching algorithms that resolve OCR text to verified supplier masters and product catalogs with operator confirmation gates.",
    },
    {
      number: "06",
      title: "Purchase Draft & Posting Workflows",
      description: "Structured draft voucher creation, multi-point posting validation, ledger debit/credit assignment, and immutable transaction history.",
    },
    {
      number: "07",
      title: "Lifting Challan OCR & Lifting Workflows",
      description: "Specialized lifting voucher extraction for cement and commodities, reconciling dispatch challans against purchase contracts and vehicle logs.",
    },
    {
      number: "08",
      title: "Transit & Physical Stock Management",
      description: "Dual-register inventory control that tracks transit stock distinctly from warehouse physical stock balances to eliminate inventory discrepancies.",
    },
    {
      number: "09",
      title: "Sales & Collection Workflows",
      description: "Comprehensive sales invoice management, dispatch tracking, customer receivable registers, and integrated payment collection workflows.",
    },
    {
      number: "10",
      title: "Financial-Year-Aware Reporting",
      description: "Strict financial year boundary controls with active posting year locks, historical viewing modes, and year-specific ledger reconciliation.",
    },
    {
      number: "11",
      title: "Dashboard & Operational Visibility",
      description: "Real-time management dashboards providing immediate visibility into daily transaction volumes, pending verification queues, and ledger summaries.",
    },
  ],
  platformPage: {
    eyebrow: "Software Platform",
    title: "ai flow ERP Platform Architecture",
    description: "An accounting-first enterprise platform engineered for structured business data, evidence-driven processing, and verified transaction workflows.",
    pillarsEyebrow: "Platform Architecture",
    pillarsTitle: "Core Architectural Pillars",
    pillarsDescription: "How ai flow delivers auditability, data integrity, and operational control at scale.",
    pillars: [
      {
        title: "Structured Business Data",
        description: "Every business event is structured into verified records, master associations, and company-isolated data partitions.",
      },
      {
        title: "Document-Based Ingestion",
        description: "OCR-assisted document processing extracts invoice, challan, and voucher data directly from original business papers.",
      },
      {
        title: "Controlled Verification Gates",
        description: "Strict multi-stage validation ensures entity identities, GSTIN numbers, and item line prices match before drafting.",
      },
      {
        title: "Double-Entry Ledger Posting",
        description: "Transactions adhere to rigorous double-entry bookkeeping rules, ensuring balance sheet accuracy and complete ledger integrity.",
      },
      {
        title: "Transit & Physical Stock Control",
        description: "Clear architectural separation between goods in transit and verified physical inventory prevents leakage and shrinkage.",
      },
      {
        title: "Financial Year Isolation",
        description: "Financial year locks protect closed periods while allowing historical audit review without risk of unauthorized changes.",
      },
      {
        title: "Auditability & Traceability",
        description: "Every ledger entry links back to original document evidence, verification history, and timestamped operator actions.",
      },
      {
        title: "Operational Visibility",
        description: "Real-time dashboards provide business owners with clear oversight across purchases, sales, collections, and pending tasks.",
      },
    ],
  },
  productsPage: {
    eyebrow: "Software Platform",
    title: "ai flow ERP Platform",
    description: "ai flow — an accounting-first ERP software platform.",
  },
  products: [],
  galleryPage: {
    eyebrow: null,
    title: null,
    description: null,
  },
  gallery: [],
  testimonialsSection: {
    eyebrow: null,
    title: null,
  },
  testimonials: [],
  contactBanner: {
    eyebrow: "Connect With Us",
    title: "Connect with the ai flow team",
    description: "Reach out to discuss ai flow ERP workflows, architecture, and platform capabilities.",
    ctaText: "Inquire on WhatsApp",
  },
  mapSection: {
    eyebrow: null,
    title: null,
    iframeTitle: null,
    ctaText: null,
  },
  contactPage: {
    eyebrow: "Contact Us",
    title: "Get in touch with ai flow",
    description: "Have questions about ai flow ERP capabilities or want to connect? Reach out via WhatsApp or email.",
    details: {
      eyebrow: "Direct Inquiries",
      title: "Contact Information",
    },
  },
  footer: {
    tagline: "An accounting-first ERP platform engineered for structured business management, evidence-driven processing, and verified transaction workflows.",
    exploreLabel: "Explore",
    contactLabel: "Contact",
    whatsappText: "Chat on WhatsApp",
  },
};
