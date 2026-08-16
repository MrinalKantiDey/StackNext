/**
 * Services Configuration
 *
 * Single source of truth for every service the studio offers.
 * Drives: /services (hub), /services/[slug] (inner landing pages),
 * the header mega menu, and the footer "Services" column.
 */

export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceHighlight {
  icon: string;
  stat: string;
  label: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  navIcon: string;
  navLabel: string;
  /** One-liner used in the mega menu and footer column */
  shortDescription: string;
  badgeIcon: string;
  badge: string;
  heading: string;
  /** Hero paragraph on the inner page */
  intro: string;
  /** Longer-form paragraph(s) for the overview section */
  body: string;
  metaDescription: string;
  features: ServiceFeature[];
  highlights: ServiceHighlight[];
  faqs: ServiceFaq[];
  ctaLabel: string;
  ctaHref: string;
}

export const services: ServiceItem[] = [
  {
    slug: 'web-design',
    navIcon: 'palette',
    navLabel: 'Web Design',
    shortDescription: 'Bespoke layouts, typography, and motion — built for your content, not a template.',
    badgeIcon: 'palette',
    badge: 'Web Design',
    heading: 'Design with intention',
    intro: "Great design starts with the people who'll use it. We design layouts shaped around your content and your audience, not around trends that age badly.",
    body: "Typography, spacing, and colour are chosen for clarity — not novelty. Every screen is considered: desktop, tablet, and the phone someone holds at the bus stop. We design in the browser as much as in Figma, so what you approve is close to what ships — fewer surprises, fewer redo cycles.",
    metaDescription: 'Bespoke web design — responsive layouts, typography systems, and considered motion, built around your content and audience, not a template.',
    features: [
      { icon: 'layout-grid', title: 'Bespoke layouts', description: "Built for your content, not a template — every section earns its place." },
      { icon: 'smartphone', title: 'Responsive across breakpoints', description: 'Phone, tablet, desktop, ultrawide. Layouts reflow with intent.' },
      { icon: 'type', title: 'Typography systems', description: 'A clear hierarchy from page title down to caption, tuned for reading.' },
      { icon: 'moon-star', title: 'Light & dark themes', description: 'One design, two moods. Both checked at every step, not retrofitted.' },
      { icon: 'sparkles', title: 'Considered motion', description: 'Interactions that guide, never distract. Reduced-motion is respected.' },
      { icon: 'eye', title: 'Accessibility baked in', description: 'Contrast, focus, and semantic structure verified before launch.' },
    ],
    highlights: [
      { icon: 'layers', stat: '100%', label: 'Custom layouts, no page-builder templates' },
      { icon: 'moon-star', stat: '2', label: 'Themes shipped with every project — light & dark' },
      { icon: 'eye', stat: 'WCAG', label: 'Accessibility checked before handover' },
    ],
    faqs: [
      { question: 'Do you design in Figma or straight in code?', answer: "Both — we sketch the system in Figma first, then move to the browser early so what you review is close to production, not a static mockup that has to be reinterpreted." },
      { question: 'Can you work from our existing brand guidelines?', answer: "Yes. Send whatever you have — logo files, colour palette, type specimens — and we'll build the site system on top of it. No guidelines yet, we can help establish the basics as part of the project." },
      { question: 'How many rounds of revisions are included?', answer: 'Every proposal states this up front in plain language — typically two structured revision rounds per phase, with ad-hoc small tweaks handled along the way.' },
    ],
    ctaLabel: 'Discuss a design project',
    ctaHref: '/contact',
  },
  {
    slug: 'ui-ux-design',
    navIcon: 'pen-tool',
    navLabel: 'UI/UX Design',
    shortDescription: 'Research, wireframes, and prototypes that get validated before a line of code is written.',
    badgeIcon: 'pen-tool',
    badge: 'UI/UX Design',
    heading: 'Designed around how people actually use it',
    intro: "Good UX isn't a coat of paint — it's the product of understanding what someone is trying to do, and removing everything in their way.",
    body: "We start with the flows that matter most — sign-up, checkout, the core task your product exists to do — and map them before any visual design happens. Wireframes and clickable prototypes get tested with real users where it counts, so decisions are validated before they're expensive to change. Visual design comes after the structure holds up.",
    metaDescription: 'UI/UX design — user research, wireframing, prototyping, and usability testing, validated before a line of production code is written.',
    features: [
      { icon: 'search', title: 'User research', description: 'Interviews, surveys, and analytics review to understand real behaviour, not assumptions.' },
      { icon: 'git-branch', title: 'Information architecture', description: 'Content and navigation structured around how people actually look for things.' },
      { icon: 'pen-tool', title: 'Wireframing', description: 'Low-fidelity flows that settle structure and logic before visual design begins.' },
      { icon: 'mouse-pointer-click', title: 'Interactive prototypes', description: 'Clickable Figma prototypes you and real users can test before build.' },
      { icon: 'flask-conical', title: 'Usability testing', description: 'Structured sessions that surface friction points while they\'re still cheap to fix.' },
      { icon: 'layers-3', title: 'Design systems', description: 'Reusable components and patterns that keep the product consistent as it grows.' },
    ],
    highlights: [
      { icon: 'flask-conical', stat: 'Tested', label: 'Key flows validated with real users before build' },
      { icon: 'mouse-pointer-click', stat: 'Clickable', label: 'Prototypes you can click through, not just look at' },
      { icon: 'layers-3', stat: 'Reusable', label: 'A design system your team can extend after handover' },
    ],
    faqs: [
      { question: 'Do you do user research, or just wireframes?', answer: "Both — the depth depends on scope. Even a lightweight round of user interviews or a quick usability test on a prototype tends to catch problems that are far cheaper to fix before development starts." },
      { question: 'What do we get at the end of a UX engagement?', answer: 'Annotated wireframes or a clickable prototype, a summary of research findings, and — where scoped — a documented design system ready to hand to development.' },
      { question: 'Can this run alongside a build, not before it?', answer: "It can, though we'd flag the risk: designing and building at the same time means some work may need redoing once testing surfaces an issue. Running UX slightly ahead of development is the safer default." },
    ],
    ctaLabel: 'Discuss a UX project',
    ctaHref: '/contact',
  },
  {
    slug: 'web-development',
    navIcon: 'code',
    navLabel: 'Web Development',
    shortDescription: 'Astro-first builds — typed content, clean architecture, fast by default.',
    badgeIcon: 'code',
    badge: 'Web Development',
    heading: 'Code that earns its place',
    intro: "We build with Astro because it ships what's needed and nothing else. The result is sites that score well in audits, feel fast in the hand, and don't grow brittle over time.",
    body: "Architecture matters as much as output — typed content, predictable component boundaries, and a build a future developer can pick up without a guided tour. Whether it's a marketing site, a content-heavy platform, or something that needs custom interactivity, we choose the smallest tool that does the job well.",
    metaDescription: 'Web development with Astro and Tailwind — typed content collections, clean architecture, and sites that stay fast as they grow.',
    features: [
      { icon: 'zap', title: 'Astro + Tailwind', description: 'Minimal JavaScript, clean HTML — the browser renders almost instantly.' },
      { icon: 'database', title: 'Typed content collections', description: 'Schema validation runs at build time, so broken content never ships.' },
      { icon: 'mail', title: 'Forms & integrations', description: 'Protected, GDPR-aware, hooked into your inbox or CRM.' },
      { icon: 'server', title: 'Hosting & deploy', description: 'Netlify, Vercel, Cloudflare, or your own infra — preview on every branch.' },
      { icon: 'git-branch', title: 'Version control & CI', description: 'Git-based workflow with checks that gate every pull request.' },
      { icon: 'file-text', title: 'Handover documentation', description: 'Code, keys, and a README a future developer can actually read.' },
    ],
    highlights: [
      { icon: 'zap', stat: '<1s', label: 'Typical time-to-interactive on a 4G connection' },
      { icon: 'database', stat: '100%', label: 'Content validated at build time, not runtime' },
      { icon: 'git-branch', stat: 'Every PR', label: 'Preview deploy + CI checks before merge' },
    ],
    faqs: [
      { question: 'Why Astro instead of Next.js or WordPress?', answer: "Astro ships zero JavaScript by default and only hydrates what actually needs interactivity. For content-driven sites that means faster pages and a smaller attack surface — we'll recommend something else if your project genuinely needs a heavier framework." },
      { question: 'Can you work inside our existing codebase?', answer: "Yes — plenty of engagements are feature work or refactors on a codebase we didn't start. We'll audit the architecture first so estimates reflect reality, not assumptions." },
      { question: 'Do you handle hosting and deployment?', answer: 'We set up CI/CD, preview deploys, and production hosting on Netlify, Vercel, Cloudflare, or your own infrastructure, and hand over every credential at the end — nothing stays locked to us.' },
    ],
    ctaLabel: 'See recent projects',
    ctaHref: '/projects',
  },
  {
    slug: 'ecommerce',
    navIcon: 'shopping-cart',
    navLabel: 'E-commerce',
    shortDescription: 'Shopify and custom storefronts built to convert, not just to look good.',
    badgeIcon: 'shopping-cart',
    badge: 'E-commerce',
    heading: 'Storefronts built to sell',
    intro: 'A store is judged on checkout speed, not just visuals. We build storefronts — Shopify or fully custom — where every screen is designed around getting someone from browse to buy.',
    body: "For most catalogues, Shopify gives you a mature checkout, payments, and inventory system without reinventing it — we focus our effort on the storefront experience, theme performance, and the integrations your operations actually need. For unusual catalogues or margins that justify it, we build fully custom commerce on the same Astro-first stack we use everywhere else.",
    metaDescription: 'E-commerce development — Shopify storefronts and custom commerce builds designed around conversion, speed, and clean checkout flows.',
    features: [
      { icon: 'shopping-cart', title: 'Shopify storefronts', description: 'Custom themes on Shopify — fast, on-brand, and easy for your team to manage.' },
      { icon: 'credit-card', title: 'Checkout & payments', description: 'Streamlined checkout flows, tuned to reduce drop-off at every step.' },
      { icon: 'package', title: 'Catalogue & inventory', description: 'Product data structured for search, filtering, and easy bulk updates.' },
      { icon: 'plug', title: 'Integrations', description: 'Email, reviews, loyalty, ERP, and fulfilment tools wired in cleanly.' },
      { icon: 'bar-chart-3', title: 'Conversion tracking', description: 'Analytics and event tracking set up so you can see what actually sells.' },
      { icon: 'shield-check', title: 'Secure by default', description: 'PCI-compliant payments and best-practice data handling throughout.' },
    ],
    highlights: [
      { icon: 'gauge', stat: 'Faster', label: 'Storefronts tuned to cut load time and cart abandonment' },
      { icon: 'plug', stat: 'Any stack', label: 'Shopify, headless, or fully custom commerce' },
      { icon: 'bar-chart-3', stat: 'Tracked', label: 'Conversion events wired in from day one' },
    ],
    faqs: [
      { question: 'Shopify or a fully custom build — how do we decide?', answer: "Shopify covers most catalogues well and gets you to launch faster. We'd only recommend fully custom commerce if your product model, pricing logic, or margins genuinely don't fit Shopify's constraints — we'll tell you plainly which side of that line you're on." },
      { question: 'Can you migrate our existing store?', answer: 'Yes — product data, customer accounts, and order history can be migrated with a planned cutover window to avoid downtime during the switch.' },
      { question: 'Do you handle ongoing catalogue updates after launch?', answer: "We hand over a CMS your team can run day-to-day, and we're available for ongoing support if you'd rather we handle updates directly — see our Maintenance & Support service." },
    ],
    ctaLabel: 'Start an e-commerce project',
    ctaHref: '/contact',
  },
  {
    slug: 'performance-seo',
    navIcon: 'gauge',
    navLabel: 'Performance & SEO',
    shortDescription: 'Core Web Vitals, technical SEO, and accessibility — measured, not guessed.',
    badgeIcon: 'gauge',
    badge: 'Performance & SEO',
    heading: 'Fast pages, found pages',
    intro: "Speed and search visibility aren't features to add at the end — they're constraints to honour from the first commit. We work to measurable targets, not vibes.",
    body: "Core Web Vitals, technical SEO, and accessibility are tracked, tuned, and verified before launch — and the dashboards stay yours after handover. If you already have a site, we can run a focused audit and fix the specific things holding your rankings and load times back.",
    metaDescription: 'Performance and technical SEO — Core Web Vitals, image pipelines, structured data, and accessibility, tracked and verified before launch.',
    features: [
      { icon: 'gauge', title: 'Core Web Vitals', description: "LCP, INP, and CLS held to Google's thresholds on real devices." },
      { icon: 'image', title: 'Image pipeline', description: 'Modern formats, responsive sizes, and art-directed hero images.' },
      { icon: 'search', title: 'Technical SEO', description: 'Metadata, sitemaps, structured data, and OG images — all validated.' },
      { icon: 'eye', title: 'Accessibility', description: 'WCAG-aware markup, tested with a screen reader and keyboard alone.' },
      { icon: 'award', title: 'Lighthouse audits', description: "Measurable scores, repeatable in CI so they don't quietly drift." },
      { icon: 'shield-check', title: 'Privacy-friendly analytics', description: 'Useful data, no cookie banner. Never sold on.' },
    ],
    highlights: [
      { icon: 'award', stat: '90+', label: 'Target Lighthouse score across performance & SEO' },
      { icon: 'search', stat: 'Validated', label: 'Structured data checked against Google’s tools' },
      { icon: 'gauge', stat: 'In CI', label: 'Performance budgets enforced on every deploy' },
    ],
    faqs: [
      { question: 'Can you audit our existing site without a full rebuild?', answer: "Yes — a technical SEO and performance audit is a standalone engagement. We hand back a prioritised list of fixes, and can implement them ourselves or work alongside your existing team." },
      { question: 'Do you guarantee search rankings?', answer: "No one honestly can — rankings depend on factors outside any developer's control. What we do guarantee is that the technical foundation (crawlability, structured data, speed, mobile usability) stops being the thing holding you back." },
      { question: 'What analytics do you set up?', answer: 'Privacy-friendly, cookieless-by-default analytics that don’t require a consent banner for basic pageview data, with the option to layer on full Google Analytics or GTM if you need it — gated behind consent.' },
    ],
    ctaLabel: 'Start a project',
    ctaHref: '/contact',
  },
  {
    slug: 'maintenance-support',
    navIcon: 'wrench',
    navLabel: 'Maintenance & Support',
    shortDescription: 'Updates, monitoring, and a fast response when something needs fixing.',
    badgeIcon: 'wrench',
    badge: 'Maintenance & Support',
    heading: 'Support that stays proactive',
    intro: "A launched site still needs attention — dependency updates, content changes, the occasional bug. We keep it running smoothly so you're not the one chasing it.",
    body: "Support plans range from a monthly retainer covering updates and small changes, to on-call support for teams that need a fast response when something breaks. Every plan includes uptime and error monitoring, so issues get caught before your customers notice them.",
    metaDescription: 'Website maintenance and support — dependency updates, monitoring, and fast response times, so your site keeps running without your attention.',
    features: [
      { icon: 'refresh-cw', title: 'Dependency updates', description: 'Framework, plugin, and security patches applied on a regular cadence.' },
      { icon: 'activity', title: 'Uptime & error monitoring', description: 'Alerts fire the moment something breaks — often before you notice.' },
      { icon: 'pencil', title: 'Content & small changes', description: 'Copy edits, new pages, and minor tweaks handled without a new proposal.' },
      { icon: 'life-buoy', title: 'Priority response', description: 'A defined response window when something urgent comes up.' },
      { icon: 'database-backup', title: 'Backups', description: 'Regular, tested backups so recovery is a non-event.' },
      { icon: 'line-chart', title: 'Monthly reporting', description: 'A short summary of what changed, what was fixed, and what to watch.' },
    ],
    highlights: [
      { icon: 'activity', stat: '24/7', label: 'Automated uptime & error monitoring' },
      { icon: 'life-buoy', stat: 'Defined', label: 'Response window agreed upfront, in writing' },
      { icon: 'database-backup', stat: 'Tested', label: 'Backups verified restorable, not just taken' },
    ],
    faqs: [
      { question: 'What if we built the site with someone else?', answer: 'That’s fine — we start with a short technical review to understand the codebase before taking on support, so we’re not guessing when something needs fixing.' },
      { question: 'Is there a minimum contract length?', answer: 'Plans run month-to-month with no long lock-in. We’d rather earn the renewal every month than hold you to a contract.' },
      { question: 'What counts as an emergency?', answer: 'Anything that takes the site down, breaks checkout, or exposes data — those get the priority response window. Everything else is handled in the normal update cycle.' },
    ],
    ctaLabel: 'Talk about a support plan',
    ctaHref: '/contact',
  },
  {
    slug: 'consulting',
    navIcon: 'compass',
    navLabel: 'Consulting & Strategy',
    shortDescription: 'Technical audits, roadmaps, and a second opinion before you build.',
    badgeIcon: 'compass',
    badge: 'Consulting & Strategy',
    heading: 'A second opinion, before you commit',
    intro: "Not every engagement starts with a build. Sometimes what's needed is an outside, technical read on a decision — before the budget is spent.",
    body: 'We run technical audits on existing platforms, help teams choose a stack with eyes open about the trade-offs, and turn a vague brief into a scoped roadmap a developer can actually estimate against. No obligation to build with us afterward — the advice stands on its own.',
    metaDescription: 'Technical consulting and strategy — platform audits, stack decisions, and scoped roadmaps, from an outside team with no build obligation attached.',
    features: [
      { icon: 'search-check', title: 'Technical audits', description: 'An honest read on an existing codebase, platform, or vendor choice.' },
      { icon: 'route', title: 'Roadmapping', description: 'Turning a vague brief into scoped phases a team can estimate against.' },
      { icon: 'layers-3', title: 'Stack selection', description: 'Framework, CMS, and hosting decisions weighed against your constraints.' },
      { icon: 'users', title: 'Team augmentation', description: 'Embedded alongside your in-house team for a defined stretch of work.' },
      { icon: 'shield-check', title: 'Risk & compliance review', description: 'Data handling, accessibility, and privacy posture checked early.' },
      { icon: 'presentation', title: 'Stakeholder-ready reporting', description: 'Findings written for decision-makers, not just other developers.' },
    ],
    highlights: [
      { icon: 'search-check', stat: 'No lock-in', label: 'Advice stands whether or not you build with us' },
      { icon: 'route', stat: 'Scoped', label: 'Roadmaps a developer can actually estimate against' },
      { icon: 'users', stat: 'Embedded', label: 'Can sit alongside your existing team, not just advise from outside' },
    ],
    faqs: [
      { question: 'Do we have to build with you afterward?', answer: 'No — the audit or roadmap is a standalone deliverable. Plenty of clients take it to their own team or another agency to implement.' },
      { question: 'How long does a typical audit take?', answer: 'A focused technical audit usually runs one to two weeks depending on the size of the codebase or platform; roadmapping engagements vary with scope.' },
      { question: 'Can you join our existing team temporarily?', answer: 'Yes — team augmentation engagements are scoped for a defined period, working inside your existing tools and process rather than as a separate workstream.' },
    ],
    ctaLabel: 'Book a discovery call',
    ctaHref: '/contact',
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slug: string, count = 2): ServiceItem[] {
  const others = services.filter((service) => service.slug !== slug);
  return others.slice(0, count);
}

export const processSteps = [
  { icon: 'message-circle', title: 'Discovery', description: 'A conversation about your goals, your audience, and what success looks like. No obligation.' },
  { icon: 'file-text', title: 'Proposal', description: 'A clear scope, timeline, and cost. One page, plain language, fixed price.' },
  { icon: 'layout-grid', title: 'Design & Build', description: 'Short cycles with regular check-ins. You see the site evolve as it’s built.' },
  { icon: 'rocket', title: 'Launch & Support', description: 'Deploy, hand over, stay available. Iteration after launch is straightforward.' },
];
