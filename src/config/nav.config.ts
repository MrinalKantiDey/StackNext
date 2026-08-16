/**
 * Navigation Configuration
 *
 * Defines which pages appear in the site navigation and their display order.
 * Astro handles routing via the filesystem — this only controls nav menus.
 */
import { services } from './services.config';
import { tools } from './tools.config';

export interface NavItem {
  label: string;
  href: string;
  order: number;
}

export const navItems: NavItem[] = [
  { label: 'Who We Are', href: '/about', order: 1 },
  { label: 'Services', href: '/services', order: 2 },
  { label: 'Free Tools', href: '/tools', order: 3 },
  { label: 'Work', href: '/projects', order: 4 },
  { label: 'Insights', href: '/blog', order: 5 },
  { label: 'Get in Touch', href: '/contact', order: 6 },
];

/**
 * Get navigation items sorted by order
 */
export function getNavItems(): NavItem[] {
  return [...navItems].sort((a, b) => a.order - b.order);
}

export interface LegalLinkItem {
  label: string;
  href: string;
}

/** Legal links shown in the footer bottom bar */
export const legalLinks: LegalLinkItem[] = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
];

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

/** Link groups for the footer "columns" layout — Company, Services, Tools, and Legal */
export function getFooterLinkGroups(): FooterLinkGroup[] {
  return [
    {
      title: 'Company',
      links: getNavItems()
        .filter((item) => item.href !== '/tools')
        .map((item) => ({ label: item.label, href: item.href })),
    },
    {
      title: 'Services',
      links: services.map((service) => ({ label: service.navLabel, href: `/services/${service.slug}` })),
    },
    {
      title: 'Free Tools',
      links: [
        ...tools.slice(0, 7).map((tool) => ({ label: tool.navLabel, href: `/tools/${tool.slug}` })),
        { label: `View all ${tools.length} tools →`, href: '/tools' },
      ],
    },
    {
      title: 'Legal',
      links: legalLinks,
    },
  ];
}

export interface FooterSocialLink {
  platform: string;
  href: string;
  label?: string;
}

/** Social links shown bottom-right of the footer, next to the copyright line. Placeholder hrefs — swap in real profile URLs when available. */
export const footerSocialLinks: FooterSocialLink[] = [
  { platform: 'instagram', href: '#', label: 'Instagram' },
  { platform: 'facebook', href: '#', label: 'Facebook' },
  { platform: 'youtube', href: '#', label: 'YouTube' },
  { platform: 'twitter', href: '#', label: 'Twitter' },
  { platform: 'linkedin', href: '#', label: 'LinkedIn' },
];
