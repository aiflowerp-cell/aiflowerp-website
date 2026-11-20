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
    eyebrow: "ONE PLATFORM · TWO POWERFUL SYSTEMS",
    title: "Complete Business & Commerce Solutions",
    description: "Run your business, manage operations and connect with customers through intelligent digital solutions.",
    hindiText: "व्यापार संचालन से लेकर डिजिटल खरीदारी तक — दो विशेष समाधान, एक टेक्नोलॉजी ब्रांड।",
    heroImage: "/images/erp/dashboard.png",
    heroErpImage: "/images/erp/dashboard.png",
    heroShoppingImage: "/images/shopping/storefront-live.png",
    heroNote: null,
    heroCtas: [
      { label: "Explore Our Products", href: "#products", variant: "primary" },
      { label: "Book a Demo", href: "/contact", variant: "secondary" },
    ],
  },
  twoProducts: {
    eyebrow: "OUR TWO PRODUCTS",
    title: "Two Distinct Solutions. One Technology Foundation.",
    description: "Specialized platforms purpose-built for enterprise operational management and consumer digital commerce.",
    erp: {
      category: "BUSINESS MANAGEMENT SYSTEM",
      name: "ai flow ERP",
      heading: "Manage Your Entire Business",
      description: "A comprehensive ERP solution designed for cement dealers, distributors and businesses to manage their complete operations from one connected platform.",
      highlights: [
        "Company Billing & Accounting",
        "Purchase & Sales Management",
        "Transit Stock & Lifting Management",
        "Physical Stock & Inventory Control",
        "OCR-Based Invoice Processing",
      ],
      ctaText: "Open ai flow ERP ↗",
      destination: "https://erp.aiflowerp.in/",
      image: "/images/erp/dashboard.png",
      secondaryImage: "/images/erp/transit-stock-register.png",
      systemTag: "Heavy Distribution & Enterprise ERP",
    },
    shopping: {
      category: "DIGITAL COMMERCE PLATFORM",
      name: "Kinny Cart",
      heading: "Take Your Store Online",
      description: "A digital shopping ecosystem connecting local merchants and customers through online storefronts, product catalogues and convenient shopping experiences.",
      highlights: [
        "Digital Merchant Storefronts",
        "Global Product Catalogue",
        "Local Grocery & Retail Shopping",
        "Merchant Onboarding & Order Management",
        "Local Store Discovery & Offers",
      ],
      ctaText: "Open Kinny Cart ↗",
      destination: "https://shop.aiflowerp.in/",
      image: "/images/shopping/storefront-live.png",
      secondaryImage: "/images/shopping/storefront-dark.png",
      systemTag: "Local Commerce & Online Storefronts",
    },
  },
  whyAiFlow: {
    eyebrow: "Why ai flow",
    title: "Key Technology Advantages",
    description: "Modern architecture engineered for data accuracy, automated document workflows, and verifiable operational integrity.",
    items: [
      {
        number: "01",
        title: "Intelligent Business Management",
        description: "Unified operational workflows connecting purchasing, sales, ledger posting, and digital commerce into one coordinated platform.",
      },
      {
        number: "02",
        title: "Accurate Inventory & Accounting",
        description: "Strict operational separation between transit logistics and physical godown stock, paired with audit-grade double-entry accounting.",
      },
      {
        number: "03",
        title: "Automated Document Processing",
        description: "OCR-assisted invoice and challan capture with operator verification checkpoints ensures verified data entry without manual friction.",
      },
      {
        number: "04",
        title: "Secure & Scalable Cloud Technology",
        description: "Enterprise-grade tenant data isolation, role-based access controls, and high-availability cloud architecture engineered for reliable daily operations.",
      },
    ],
  },
  whoWeServe: {
    eyebrow: "WHO WE SERVE",
    title: "Dedicated Solutions Across the Supply Chain",
    description: "Tailored systems engineered for dealers, distributors, local merchants, and consumers.",
    segments: [
      {
        number: "01",
        tag: "COMMODITY DISTRIBUTION",
        title: "Dealers & Distributors",
        description: "Cement dealers, building material distributors, and wholesale traders managing railway rakes, heavy transit logistics, and credit terms.",
        system: "ai flow ERP",
        href: "https://erp.aiflowerp.in/",
        external: true,
        points: [
          "Transit stock vs physical bag count separation",
          "Automated lifting challan matching against POs",
          "Double-entry ledger balances & customer collection",
        ],
      },
      {
        number: "02",
        tag: "LOCAL COMMERCE",
        title: "Merchants & Retailers",
        description: "Neighborhood grocery, kirana, and retail merchants seeking to establish a digital presence, accept orders, and grow local market share.",
        system: "Kinny Cart",
        href: "https://shop.aiflowerp.in/",
        external: true,
        points: [
          "Turnkey digital storefront launched in minutes",
          "Access to global product catalog with pre-mapped barcodes",
          "Instant order alerts, promotions, and customer management",
        ],
      },
      {
        number: "03",
        tag: "DIGITAL CONSUMERS",
        title: "Everyday Customers & Families",
        description: "Shoppers who want the convenience of ordering groceries, household goods, and daily essentials from their trusted neighborhood stores.",
        system: "Kinny Cart",
        href: "https://shop.aiflowerp.in/",
        external: true,
        points: [
          "Local store discovery with transparent pricing",
          "Flexible cart management with easy item discovery",
          "Reliable doorstep delivery and trusted merchant fulfillment",
        ],
      },
      {
        number: "04",
        tag: "GROWING ENTERPRISES",
        title: "Multi-Entity Businesses",
        description: "Commercial groups operating multiple distribution godowns, retail branches, or diverse businesses requiring consolidated financial controls.",
        system: "ai flow ERP",
        href: "https://erp.aiflowerp.in/",
        external: true,
        points: [
          "Unified executive dashboards across multiple entities",
          "Centralized customer and supplier outstanding balances",
          "Role-based operator security and complete audit trails",
        ],
      },
    ],
  },
  platformPreview: {
    eyebrow: "PLATFORM PREVIEWS",
    title: "Authentic Software in Action",
    description: "Explore verified screens from the running ai flow ERP and Kinny Cart production applications.",
    systems: [
      {
        id: "erp",
        name: "ai flow ERP",
        badge: "Business Management System",
        url: "https://erp.aiflowerp.in/",
        ctaLabel: "Open ai flow ERP ↗",
        screens: [
          {
            title: "Executive Dashboard",
            summary: "Real-time RAJ STEEL KPIs, 462.500 MT Transit Stock snapshot, multi-metric sales trends, and operational status.",
            image: "/images/erp/dashboard.png",
          },
          {
            title: "Purchase Register",
            summary: "Live purchase voucher register with invoice numbers, supplier ledger sync, and automated billing ingestion.",
            image: "/images/erp/purchase-invoice-import.png",
          },
          {
            title: "Transit Stock Register",
            summary: "Real-time register distinguishing manufacturer billed stock (874.50 MT) vs lifted quantities (net 462.500 MT in transit).",
            image: "/images/erp/transit-stock-register.png",
          },
          {
            title: "Lifting Register",
            summary: "Dispatch challan reconciliation gate with truck details, weighbridge verification, and purchase order tracking.",
            image: "/images/erp/lifting-challan-upload.png",
          },
        ],
      },
      {
        id: "kinny-cart",
        name: "Kinny Cart",
        badge: "Digital Commerce Platform",
        url: "https://shop.aiflowerp.in/",
        ctaLabel: "Open Kinny Cart ↗",
        screens: [
          {
            title: "Live Storefront",
            summary: "Verified mobile storefront connecting customers with neighborhood merchant JP Kirana & General Store.",
            image: "/images/shopping/storefront-live.png",
          },
          {
            title: "Storefront (Dark Mode)",
            summary: "Dedicated night storefront interface with OLED dark palette, category navigation, and high-contrast labels.",
            image: "/images/shopping/storefront-dark.png",
          },
          {
            title: "Product Catalogue",
            summary: "Two-column FMCG catalogue grid featuring authentic packaging (Shan Masala, Fortune Oil, Dhara, Amul) and red ADD buttons.",
            image: "/images/shopping/product-catalogue-live.png",
          },
          {
            title: "Shopping Experience",
            summary: "Coordinated 4-screen customer journey: Storefront Discovery → FMCG Catalogue → Smart Cart Stepper → One-Click Checkout.",
            image: "/images/shopping/shopping-experience.png",
          },
        ],
      },
    ],
  },
  corporateAbout: {
    eyebrow: "About ai flow",
    title: "Engineering Intelligent Systems for Modern Trade",
    description: "ai flow is the technology parent company behind two specialized, modern business platforms.",
    paragraphs: [
      "ai flow was founded with a singular conviction: business software must reflect the actual, physical operational realities of commerce, not impose generic templates on diverse industries.",
      "Today, ai flow powers two independent live production systems: ai flow ERP, an accounting-first business management platform purpose-built for cement dealers and bulk distributors; and Kinny Cart, an end-to-end digital commerce ecosystem connecting local merchants and neighborhood shoppers.",
      "Whether managing hundreds of metric tonnes of transit stock across railway rakes and godowns, or organizing thousands of FMCG catalog SKUs for quick local ordering on Kinny Cart, our systems deliver verifiable data integrity, operator-focused verification gates, and robust cloud performance.",
      "We build technology that enables businesses to operate with absolute clarity, maintain compliance, and unlock scalable digital growth.",
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
    title: "Engineered for Data Integrity, Verification, and Scale",
    description: "The enterprise technology architecture powering both ai flow ERP and Kinny Cart across business operations and digital commerce.",
    systemsEyebrow: "ai flow Ecosystem",
    systemsTitle: "Two Specialized Systems. One Shared Technology Foundation.",
    systemsDescription: "Dedicated platforms engineered to support trade from bulk commodity distribution to neighborhood consumer checkout.",
    systems: [
      {
        id: "erp",
        badge: "ENTERPRISE SYSTEM",
        title: "ai flow ERP",
        tagline: "Accounting • GST • Dual-State Inventory • Operations",
        description: "Specialized ERP engineered for heavy trade, distributors, and dealers — managing company billing, transit stock, lifting challans, physical godown inventory, customer balances, and audit-grade double-entry accounting.",
        ctaLabel: "Open ai flow ERP ↗",
        urlKey: "erpUrl",
      },
      {
        id: "kinny-cart",
        badge: "COMMERCE PLATFORM",
        title: "Kinny Cart",
        tagline: "Digital Commerce Platform • Local Storefronts & Orders",
        description: "End-to-end digital commerce platform connecting neighborhood merchants and customers with online storefronts, pre-mapped catalogues, instant ordering, and local delivery.",
        ctaLabel: "Open Kinny Cart ↗",
        urlKey: "shoppingUrl",
      },
    ],
    pillarsEyebrow: "Architectural Capabilities",
    pillarsTitle: "Core Architectural Capabilities",
    pillarsDescription: "How the ai flow platform delivers structured data, operational verification, and robust performance.",
    pillars: [
      {
        title: "Multi-Tenant Architecture",
        description: "Company-level and merchant-level data isolation with role-based access control, ensuring secure multi-entity operations across business divisions.",
        category: "Shared Platform",
      },
      {
        title: "Accounting and Data Integrity",
        description: "Audit-grade double-entry ledger posting rules linked directly to verified source documents, with financial-year controls protecting closed reporting periods.",
        category: "ai flow ERP",
      },
      {
        title: "OCR and Document Processing",
        description: "Intelligent document ingestion for purchase invoices and dispatch challans with human-in-the-loop operator verification gates before ledger drafting.",
        category: "ai flow ERP",
      },
      {
        title: "Product Catalogue Infrastructure",
        description: "Standardized global master catalogue with pre-mapped GTIN barcodes, category taxonomies, and instant item discovery for digital storefronts.",
        category: "Kinny Cart",
      },
      {
        title: "Inventory and Stock Management",
        description: "Dual-register separation between transit stock en route and verified physical godown bags for ERP, alongside real-time store inventory positions for retail.",
        category: "Shared Platform",
      },
      {
        title: "Merchant and Customer Experience",
        description: "Turnkey digital storefront onboarding for neighborhood retailers paired with fast, intuitive mobile shopping, localized carts, and store pickup options.",
        category: "Kinny Cart",
      },
      {
        title: "Security and Access Control",
        description: "Granular operator permission boundaries, authenticated session management, and immutable audit logs across administrative and merchant touchpoints.",
        category: "Shared Platform",
      },
      {
        title: "Cloud and Application Infrastructure",
        description: "High-availability cloud runtime with edge CDN routing, sub-second API execution, and responsive interfaces optimized for both desktop terminals and mobile devices.",
        category: "Shared Platform",
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
    title: "Engineering Intelligent Systems for Modern Trade & Commerce",
    description: "The corporate technology brand behind two specialized platforms powering enterprise operations and digital retail commerce.",
    image: null,
    badge: null,
    paragraphs: [
      "ai flow was founded with a singular conviction: modern business software must reflect the actual, physical operational realities of commerce, not impose generic templates on diverse industries.",
      "Today, ai flow powers two independent, live production systems: ai flow ERP, an accounting-first business management platform engineered for enterprise operations and commodity distribution; and Kinny Cart, an end-to-end digital commerce ecosystem connecting local merchants and neighborhood shoppers.",
      "Enterprise management and consumer commerce have fundamentally distinct operational rhythms. Rather than forcing diverse workflows into an unwieldy monolith, ai flow provides two dedicated platforms sharing a common foundation of data integrity, structured verification gates, and reliable cloud performance.",
      "ai flow ERP serves complex business operations—originating from the rigorous demands of cement distribution and heavy trade. It manages railway rake dispatches, tracks transit stock separately from physical godown inventory, automates invoice ingestion via OCR with operator verification, and maintains audit-grade double-entry accounting.",
      "Kinny Cart empowers local digital commerce by giving neighborhood grocery, retail, and kirana merchants turnkey online storefronts, pre-mapped product catalogues, and seamless order management—enabling local businesses to compete and grow in the modern digital economy.",
      "Our technology vision is to build software that bridges physical trade realities and digital convenience. By combining structured business data, operator verification checkpoints, and scalable cloud infrastructure, ai flow enables businesses to operate with absolute clarity, maintain compliance, and unlock sustainable growth.",
    ],
  },
  contactBanner: {
    eyebrow: "BOOK A DEMO & GET STARTED",
    title: "Experience the Power of ai flow",
    description:
      "Schedule a live walkthrough of ai flow ERP for your enterprise, or learn how to take your store online with Kinny Cart.",
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
    title: "Experience ai flow in Action",
    description:
      "Schedule a demonstration of ai flow ERP for enterprise operations or explore Kinny Cart for digital retail commerce.",
    details: {
      eyebrow: "Direct Inquiries",
      title: "Contact Information",
    },
  },
  footer: {
    tagline:
      "Complete Business & Commerce Solutions — Two independent platforms powering enterprise operations and digital commerce.",
    exploreLabel: "Explore",
    systemsLabel: "Our Products",
    contactLabel: "Contact",
    whatsappText: "WhatsApp Inquiry",
  },
};

