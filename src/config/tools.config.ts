/**
 * Free Tools Configuration
 *
 * Single source of truth for every free tool the studio offers.
 * Drives: /tools (hub), the header mega menu, and the footer "Tools" column.
 */

export type ToolCategory = 'Design & CSS' | 'Content & Text' | 'SEO & Marketing' | 'Dev Utilities';

export interface ToolItem {
  slug: string;
  navIcon: string;
  navLabel: string;
  shortDescription: string;
  category: ToolCategory;
  metaDescription: string;
}

export const tools: ToolItem[] = [
  // Design & CSS
  {
    slug: 'color-contrast-checker',
    navIcon: 'contrast',
    navLabel: 'Color Contrast Checker',
    shortDescription: 'Check WCAG AA/AAA contrast ratios between two colours.',
    category: 'Design & CSS',
    metaDescription: 'Free WCAG contrast checker — enter a foreground and background colour and get the exact contrast ratio and AA/AAA pass/fail result.',
  },
  {
    slug: 'color-converter',
    navIcon: 'palette',
    navLabel: 'Color Converter',
    shortDescription: 'Convert instantly between Hex, RGB, and OKLCH.',
    category: 'Design & CSS',
    metaDescription: 'Free colour converter — switch between Hex, RGB, and OKLCH colour formats instantly, with a live swatch preview.',
  },
  {
    slug: 'gradient-generator',
    navIcon: 'blend',
    navLabel: 'CSS Gradient Generator',
    shortDescription: 'Build linear gradients visually and copy the CSS.',
    category: 'Design & CSS',
    metaDescription: 'Free CSS gradient generator — pick colours and angle, preview live, and copy the linear-gradient() CSS.',
  },
  {
    slug: 'box-shadow-generator',
    navIcon: 'square-stack',
    navLabel: 'Box Shadow Generator',
    shortDescription: 'Tune offset, blur, spread, and colour — copy the CSS.',
    category: 'Design & CSS',
    metaDescription: 'Free CSS box-shadow generator — adjust offset, blur, spread, and colour with a live preview, then copy the box-shadow CSS.',
  },
  {
    slug: 'border-radius-generator',
    navIcon: 'squircle',
    navLabel: 'Border Radius Generator',
    shortDescription: 'Design custom corner shapes and copy the CSS.',
    category: 'Design & CSS',
    metaDescription: 'Free CSS border-radius generator — adjust each corner independently with a live preview, then copy the border-radius CSS.',
  },

  // Content & Text
  {
    slug: 'lorem-ipsum-generator',
    navIcon: 'file-text',
    navLabel: 'Lorem Ipsum Generator',
    shortDescription: 'Generate placeholder paragraphs, sentences, or words.',
    category: 'Content & Text',
    metaDescription: 'Free Lorem Ipsum generator — generate placeholder text by paragraphs, sentences, or words for mockups and layouts.',
  },
  {
    slug: 'word-character-counter',
    navIcon: 'text-cursor-input',
    navLabel: 'Word & Character Counter',
    shortDescription: 'Live word, character, and reading-time count.',
    category: 'Content & Text',
    metaDescription: 'Free word and character counter — live counts of words, characters, sentences, and estimated reading time as you type.',
  },
  {
    slug: 'text-case-converter',
    navIcon: 'case-sensitive',
    navLabel: 'Text Case Converter',
    shortDescription: 'UPPER, lower, Title, camelCase, snake_case & more.',
    category: 'Content & Text',
    metaDescription: 'Free text case converter — switch text between UPPERCASE, lowercase, Title Case, camelCase, snake_case, and kebab-case.',
  },
  {
    slug: 'slug-generator',
    navIcon: 'link',
    navLabel: 'Slug Generator',
    shortDescription: 'Turn any text into a clean, URL-safe slug.',
    category: 'Content & Text',
    metaDescription: 'Free URL slug generator — convert any text into a clean, lowercase, hyphenated slug for URLs.',
  },
  {
    slug: 'base64-encoder',
    navIcon: 'binary',
    navLabel: 'Base64 Encode / Decode',
    shortDescription: 'Encode or decode text to and from Base64.',
    category: 'Content & Text',
    metaDescription: 'Free Base64 encoder and decoder — convert text to Base64 or decode a Base64 string back to plain text, instantly in the browser.',
  },

  // SEO & Marketing
  {
    slug: 'meta-tag-preview',
    navIcon: 'app-window',
    navLabel: 'Meta Tag & OG Preview',
    shortDescription: 'Preview and generate title, description & OG tags.',
    category: 'SEO & Marketing',
    metaDescription: 'Free meta tag and Open Graph preview generator — write your title and description, preview the Google and social-share result, and copy the tags.',
  },
  {
    slug: 'robots-txt-generator',
    navIcon: 'bot',
    navLabel: 'robots.txt Generator',
    shortDescription: 'Build a valid robots.txt in a few clicks.',
    category: 'SEO & Marketing',
    metaDescription: 'Free robots.txt generator — allow or disallow crawlers, add a sitemap URL, and copy a ready-to-use robots.txt file.',
  },
  {
    slug: 'utm-link-builder',
    navIcon: 'link-2',
    navLabel: 'UTM Campaign Link Builder',
    shortDescription: 'Build trackable campaign URLs with UTM params.',
    category: 'SEO & Marketing',
    metaDescription: 'Free UTM campaign link builder — add source, medium, campaign, and other UTM parameters to any URL for accurate analytics tracking.',
  },
  {
    slug: 'core-web-vitals-checklist',
    navIcon: 'clipboard-check',
    navLabel: 'Core Web Vitals Checklist',
    shortDescription: 'A practical, trackable pre-launch performance checklist.',
    category: 'SEO & Marketing',
    metaDescription: 'Free Core Web Vitals and performance checklist — a practical, trackable list of checks to run before launching a site.',
  },
  {
    slug: 'favicon-generator',
    navIcon: 'shapes',
    navLabel: 'Favicon / Logo Mark Generator',
    shortDescription: 'Generate a simple letter-mark favicon SVG.',
    category: 'SEO & Marketing',
    metaDescription: 'Free favicon and logo letter-mark generator — pick a letter, colour, and shape, preview live, and download an SVG favicon.',
  },

  // Dev Utilities
  {
    slug: 'json-formatter',
    navIcon: 'braces',
    navLabel: 'JSON Formatter & Validator',
    shortDescription: 'Format, validate, and minify JSON instantly.',
    category: 'Dev Utilities',
    metaDescription: 'Free JSON formatter and validator — beautify, validate, and minify JSON instantly in the browser, with clear error messages.',
  },
  {
    slug: 'password-generator',
    navIcon: 'key-round',
    navLabel: 'Password Generator',
    shortDescription: 'Generate strong, random passwords instantly.',
    category: 'Dev Utilities',
    metaDescription: 'Free password generator — create strong, random passwords with adjustable length and character sets, generated entirely in your browser.',
  },
  {
    slug: 'random-id-generator',
    navIcon: 'fingerprint',
    navLabel: 'Random ID Generator',
    shortDescription: 'Generate UUIDs or custom random IDs.',
    category: 'Dev Utilities',
    metaDescription: 'Free random ID generator — generate UUID v4 identifiers or custom-length random IDs, instantly in the browser.',
  },
  {
    slug: 'aspect-ratio-calculator',
    navIcon: 'ratio',
    navLabel: 'Aspect Ratio Calculator',
    shortDescription: 'Calculate matching dimensions for any ratio.',
    category: 'Dev Utilities',
    metaDescription: 'Free aspect ratio calculator — enter a width or height and a target ratio to instantly calculate the matching dimension.',
  },
  {
    slug: 'css-unit-converter',
    navIcon: 'ruler',
    navLabel: 'CSS Unit Converter',
    shortDescription: 'Convert between px, rem, em, and percent.',
    category: 'Dev Utilities',
    metaDescription: 'Free CSS unit converter — convert between px, rem, em, and percent based on a configurable base font size.',
  },
];

export function getToolBySlug(slug: string): ToolItem | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function getToolCategories(): ToolCategory[] {
  return ['Design & CSS', 'Content & Text', 'SEO & Marketing', 'Dev Utilities'];
}

export function getToolsByCategory(category: ToolCategory): ToolItem[] {
  return tools.filter((tool) => tool.category === category);
}
