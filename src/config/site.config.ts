import { SITE_URL, GOOGLE_SITE_VERIFICATION, BING_SITE_VERIFICATION } from 'astro:env/server';

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
  email: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  socialLinks: string[];
  twitter?: {
    site: string;
    creator: string;
  };
  verification?: {
    google?: string;
    bing?: string;
  };
  /** Path to author photo (relative to site root, e.g. '/avatar.jpg'). Used in Person schema. */
  authorImage?: string;
  /**
   * Set to false if your blog post images already match your theme color
   * and you don't want the brand color overlay applied on top of them.
   */
  blogImageOverlay?: boolean;
  /**
   * Branding configuration
   * Logo files: Replace SVGs in src/assets/branding/
   * Favicon: Replace in public/favicon.svg
   */
  branding: {
    /** Logo alt text for accessibility */
    logo: {
      alt: string;
      /** Path to logo image for structured data (e.g. '/logo.png'). Add a PNG to public/ and set this. */
      imageUrl?: string;
      darkImageUrl?: string;
    };
    /** Favicon path (lives in public/) */
    favicon: {
      svg: string;
    };
    /** Theme colors for manifest and browser UI */
    colors: {
      /** Browser toolbar color (hex) */
      themeColor: string;
      /** PWA splash screen background (hex) */
      backgroundColor: string;
    };
  };
}


const siteConfig: SiteConfig = {
  name: 'Stacknxt Inc',
  description:
    'Astro Rocket — A production-ready Astro 6 starter with 12 beautiful themes, 57+ components, built-in i18n, dark mode and a fast, modern foundation to build anything on.',
  url: SITE_URL || 'https://astrorocket.dev',
  ogImage: '/og-default.svg',
  author: 'Rahul Woll',
  email: 'info@logicalidea.co',
  address: {
    street: '',
    city: 'Liessel',
    state: '',
    zip: '',
    country: 'The Nederlands'
  },
  socialLinks: [
    'https://github.com/',
    'https://x.com/',
    'https://www.linkedin.com/company/stacknxt',
    'https://bsky.app/',
  ],
  twitter: {
    site: 'https://x.com/',
    creator: '@RahulWoll',
  },
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
    bing: BING_SITE_VERIFICATION,
  },
  authorImage: '/avatar.svg',
  blogImageOverlay: true,
  branding: {
    logo: {
      alt: 'Stacknxt Inc',
      imageUrl: '/logo-black.svg',
      darkImageUrl: '/logo.svg',
    },
    favicon: {
      svg: '/favicon.svg',
    },
    colors: {
      themeColor: '#190655',
      backgroundColor: '#ffffff',
    },
  },
};

export default siteConfig;
