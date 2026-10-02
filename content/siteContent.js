/*
 * FILE: content/siteContent.js
 * PURPOSE:
 * Central repository for all client-facing website copy and presentation content for ai flow.
 *
 * RESPONSIBILITIES:
 * - Store page copy (eyebrows, titles, descriptions)
 * - Store hero CTAs, 11 verified ERP capability listings, conceptual cement workflow, and platform pillars
 * - Store factual about copy, contact banner copy, and footer copy
 * - Provide 100% factual client copy for 'ai flow' without fabrication or unverified claims
 *
 * DEPENDENCIES:
 * - None
 *
 * NOTES:
 * - Brand name: 'ai flow' (strictly lowercase in all customer-facing copy).
 * - Verified capabilities mapped directly from the ai flow ERP system architecture.
 * - Conceptual 8-step business flow is strictly distinguished from currently verified software modules.
 */

export const content = {
  home: {
    eyebrow: "CEMENT DEALER ERP",
    title: "The ERP built for your cement business.",
    description: "Manage company billing, transit stock, lifting, physical stock, sales, customer balances, and accounting from one connected system.",
    heroImage: "/images/erp/dashboard.png",
    heroNote: null,
    heroCtas: [
      { label: "Book a Demo", href: "/contact", variant: "primary" },
      { label: "Explore Platform", href: "/products", variant: "secondary" },
    ],
  },
  realitySection: {
    eyebrow: "Built for Cement Reality",
    title: "Designed for the real operational challenges of cement distribution.",
    description: "Generic accounting tools treat cement like simple packaged retail items. ai flow is engineered around the actual commodity workflows of cement dealers.",
    image: "/images/business/railway-rake-unloading.png",
    challenges: [
      {
        number: "01",
        title: "Transit vs Godown Stock",
        description: "Separates billed cement en route from verified physical stock in the godown, preventing false inventory assumptions.",
      },
      {
        number: "02",
        title: "Lifting & Challan Processing",
        description: "Ingests and matches dispatch challans directly to manufacturer purchase invoices to track lifted versus pending quantities.",
      },
      {
        number: "03",
        title: "Connected Sales & Ledgers",
        description: "Links sales vouchers directly to customer ledger balances and payment receipts, posting to double-entry ledgers with source document evidence.",
      },
    ],
  },
  workflow: {
    eyebrow: "Cement Business Flow",
    title: "One connected workflow for your complete cement business.",
    description: "How a cement dealership operates in reality — from credit limit and company billing to godown stock, sales, and collection.",
    image: "/images/business/godown-loading.png",
    ruleTitle: "Company Billing is NOT Physical Stock.",
    ruleDescription: "When a cement company issues an invoice, it creates Transit Stock. Material only enters Physical Stock when lifting occurs and goods are received in the godown. ai flow keeps transit and physical inventory as separate operational states, with their quantities tracked through the corresponding workflows.",
    ctaHref: "/services",
    ctaText: "Explore verified modules",
    note: "The 8-step flow illustrates the real-world operational workflow around which ai flow is built.",
    steps: [
      {
        number: "01",
        title: "Credit Limit",
        description: "Establish company credit boundaries and customer trade terms for structured operations.",
      },
      {
        number: "02",
        title: "Company Billing",
        description: "Record purchase invoices received from cement manufacturers with itemized rates and taxes.",
      },
      {
        number: "03",
        title: "Transit Stock",
        description: "Track billed quantities on the road or awaiting plant dispatch before reaching the godown.",
      },
      {
        number: "04",
        title: "Lifting",
        description: "Process factory dispatch challans and truck dispatches to verify lifted quantities.",
      },
      {
        number: "05",
        title: "Physical Stock",
        description: "Maintain verified physical bag inventory in your godown upon unloading.",
      },
      {
        number: "06",
        title: "Sales",
        description: "Generate customer sales invoices with vehicle details, quantities, and agreed prices.",
      },
      {
        number: "07",
        title: "Collection",
        description: "Record customer payment receipts and maintain updated customer ledger balances.",
      },
      {
        number: "08",
        title: "Company Payment",
        description: "Manage company account settlements and reconcile purchase ledgers with document evidence.",
      },
    ],
  },
  erpShowcase: {
    eyebrow: "Real ERP Showcase",
    title: "Inside the ai flow Platform",
    description: "Real operational screens from the running ai flow ERP for cement dealers.",
    modules: [
      {
        id: "dashboard",
        title: "Executive Dashboard",
        description: "Dashboard KPIs, sales overview, stock position, and verified operational summaries.",
        requirement: "Dashboard screen showing sales metrics, stock positions, and operational status.",
         image: "/images/erp/dashboard.png",
      },
      {
        id: "billing",
        title: "Company Billing Ingestion",
        description: "Purchase invoice document upload, extracted data review, and draft voucher creation.",
        requirement: "Purchase invoice entry interface with extracted data fields and draft voucher.",
        image: "/images/erp/purchase-invoice-import.png",
      },
      {
        id: "transit",
        title: "Transit Stock Register",
        description: "Listing of company purchase invoices, transit quantities, and pending lifting status.",
        requirement: "Transit stock register showing company invoices, transit quantities, and lifting balances.",
        image: "/images/erp/transit-stock-register.png",
      },
      {
        id: "stock",
        title: "Physical Stock Register",
        description: "Godown inventory register tracking physical stock balances.",
        requirement: "Physical stock register tracking available bag counts and warehouse quantities.",
        image: null,
      },
      {
        id: "lifting",
        title: "Lifting Management",
        description: "Lifting voucher and dispatch challan matching against purchase vouchers.",
        requirement: "Lifting management screen matching dispatch challans to purchase orders.",
        image: "/images/erp/lifting-challan-upload.png",
      },
      {
        id: "ledgers",
        title: "Double-Entry Ledgers",
        description: "Transaction history and ledger accounts with linked source-document evidence.",
        requirement: "Ledger transaction view showing double-entry postings with document evidence links.",
        image: null,
      },
    ],
  },
  servicesPage: {
    eyebrow: "System Capabilities",
    title: "ERP Modules Built for Cement Dealers & Distributors",
    description: "Explore the verified operational modules that power the ai flow platform.",
  },
  servicesSection: {
    eyebrow: "Core Capabilities",
    title: "Verified Cement Business Capabilities",
    ctaText: "View all capabilities",
  },
  services: [
    {
      number: "01",
      title: "Company Billing Ingestion",
      description: "Record and process manufacturer purchase invoices via document upload, header verification, and draft vouchers.",
    },
    {
      number: "02",
      title: "Transit Stock Tracking",
      description: "Dual-register tracking that maintains distinct records of billed material en route or pending lifting.",
    },
    {
      number: "03",
      title: "Lifting Challan Processing",
      description: "Ingest and match dispatch challans to purchase vouchers to record lifted quantities.",
    },
    {
      number: "04",
      title: "Godown Physical Stock Management",
      description: "Maintain physical inventory balances verified upon godown receipt.",
    },
    {
      number: "05",
      title: "Sales & Customer Invoicing",
      description: "Create sales vouchers, track customer dispatches, and record customer receivables.",
    },
    {
      number: "06",
      title: "Collection & Receipt Recording",
      description: "Record customer payment receipts and update customer ledger balances.",
    },
    {
      number: "07",
      title: "Double-Entry Financial Accounting",
      description: "Verified transactions are posted through structured double-entry accounting rules, with transaction history and available source-document evidence.",
    },
    {
      number: "08",
      title: "OCR-Assisted Document Ingestion",
      description: "Intelligent text capture from source invoices and lifting challans to accelerate data entry.",
    },
    {
      number: "09",
      title: "Operator Verification Gates",
      description: "Structured human confirmation checkpoints to validate extracted document values before posting.",
    },
    {
      number: "10",
      title: "Entity & Product Master Matching",
      description: "Resolve buyer GSTIN, supplier masters, and product catalog items against master records.",
    },
    {
      number: "11",
      title: "Financial-Year-Aware Controls & Reporting",
      description: "Financial-year posting controls, historical financial-year viewing, and operational dashboard summaries.",
    },
  ],
  evidenceSection: {
    eyebrow: "Evidence-Driven Processing",
    title: "From Business Document to Verified Transaction",
    description: "ai flow connects source business documents, OCR-assisted extraction, operator verification, and structured transaction processing to maintain verified business records.",
    steps: [
      {
        number: "01",
        title: "Document Ingestion",
        description: "Upload purchase bills, lifting challans, and source business documents into the platform.",
      },
      {
        number: "02",
        title: "OCR-Assisted Extraction",
        description: "Extract invoice numbers, dates, line items, taxes, and supplier details directly from source files.",
      },
      {
        number: "03",
        title: "Operator Verification",
        description: "Operators review extracted values and confirm entity matching before any transaction is drafted.",
      },
      {
        number: "04",
        title: "Verified Posting",
        description: "Confirmed vouchers pass validation gates and post to stock registers and double-entry ledgers with document links.",
      },
    ],
  },
  platformPage: {
    eyebrow: "Platform Architecture",
    title: "Engineered for Data Integrity, Verification, and Control",
    description: "How ai flow pairs OCR document processing and operator verification with structured double-entry accounting.",
    systemsEyebrow: "AI FLOW Ecosystem",
    systemsTitle: "Dedicated Solutions for Enterprise & Retail Commerce",
    systemsDescription: "Two specialized systems built to manage operations from cement manufacturer billing to customer retail orders.",
    systems: [
      {
        id: "erp",
        badge: "ENTERPRISE SYSTEM",
        title: "AI FLOW ERP",
        tagline: "Accounting • GST • Inventory • Business Management",
        description: "Specialized ERP built around actual cement dealer workflows — managing company billing, transit stock, lifting challans, physical godown inventory, sales, customer balances, and audit-grade double-entry accounting.",
        ctaLabel: "Open ERP",
        urlKey: "erpUrl",
      },
      {
        id: "shopping",
        badge: "RETAIL COMMERCE",
        title: "AI FLOW Shopping",
        tagline: "Grocery Shopping • Customer Orders • Merchant Store Management",
        description: "Full-stack digital commerce application enabling customer grocery orders, merchant store catalog management, and localized retail transaction processing.",
        ctaLabel: "Open Shopping",
        urlKey: "shoppingUrl",
      },
    ],
    pillarsEyebrow: "Architectural Pillars",
    pillarsTitle: "Core Architectural Principles",
    pillarsDescription: "How ai flow delivers data integrity and operational control for cement businesses.",
    pillars: [
      {
        title: "Structured Business Data",
        description: "Every business transaction is structured into verified records, master associations, and company-isolated data partitions.",
      },
      {
        title: "Document-Based Ingestion",
        description: "OCR-assisted document processing captures invoice and challan data directly from original business papers.",
      },
      {
        title: "Controlled Verification Gates",
        description: "Operator confirmation checkpoints ensure entity identities, GSTIN numbers, and item prices match before drafting.",
      },
      {
        title: "Double-Entry Ledger Posting",
        description: "Transactions follow structured double-entry rules, posting directly to appropriate ledger accounts with document evidence.",
      },
      {
        title: "Transit & Physical Stock Control",
        description: "Clear operational separation between goods in transit and verified physical inventory prevents stock confusion.",
      },
      {
        title: "Financial Year Isolation",
        description: "Financial-year posting controls protect closed periods while allowing historical viewing.",
      },
      {
        title: "Document Evidence Linking",
        description: "Transaction entries link back to original document evidence and timestamped operator actions.",
      },
      {
        title: "Multi-Tenant Isolation",
        description: "Company-level data isolation and role-based access control across business entities.",
      },
    ],
  },
  productsPage: {
    eyebrow: "Platform Architecture",
    title: "ai flow ERP Platform Architecture",
    description: "An accounting-first enterprise platform engineered for structured business data, evidence-driven processing, and verified transaction workflows.",
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
  about: {
    eyebrow: "About ai flow",
    title: "Software Built for the Reality of Cement Distribution",
    description: "Why we built an accounting-first ERP around actual commodity business workflows.",
    image: null,
    badge: null,
    paragraphs: [
      "ai flow is developed around a clear architectural principle: business management software for cement distributors must reflect the physical realities of the trade.",
      "In a cement dealership, company billing does not mean physical stock has arrived, lifting challans represent actual movements from the plant, and customer receivables must be tracked accurately alongside double-entry ledgers.",
      "Rather than relying on unverified data entry or superficial automation, ai flow integrates document-based extraction, operator verification gates, and structured accounting rules to give business owners reliable operational numbers.",
    ],
  },
  contactBanner: {
  eyebrow: "BOOK A DEMO",
  title: "See ai flow in action.",
  description:
    "Schedule a live demonstration of the ai flow Cement Dealer ERP and see how it handles billing, transit stock, lifting, physical stock, sales and customer balances.",
  ctaText: "Book a Demo / Send Enquiry",
},
  mapSection: {
    eyebrow: null,
    title: null,
    iframeTitle: null,
    ctaText: null,
  },
  contactPage: {
  eyebrow: "BOOK A DEMO",
  title: "See ai flow in action.",
  description:
    "Schedule a live demonstration of the ai flow Cement Dealer ERP and see how it handles billing, transit stock, lifting, physical stock, sales and customer balances.",
    details: {
      eyebrow: "Direct Inquiries",
      title: "Contact Information",
    },
  },
  footer: {
    tagline: "An ERP designed around the real workflow of a cement business — managing company billing, transit stock, lifting, physical stock, sales, and accounting.",
    exploreLabel: "Explore",
    contactLabel: "Contact",
    whatsappText: "WhatsApp Inquiry",
  },
};

