/**
 * Navigation Configuration
 *
 * Defines which pages appear in the site navigation and their display order.
 * Astro handles routing via the filesystem — this only controls nav menus.
 */

export interface NavItem {
  label: string;
  href: string;
  order: number;
}

export const navItems: NavItem[] = [
  { label: 'Who We Are', href: '/about', order: 1 },
  { label: 'Services', href: '/services', order: 2 },
  { label: 'Work', href: '/projects', order: 3 },
  { label: 'Insights', href: '/blog', order: 4 },
  { label: 'Get in Touch', href: '/contact', order: 5 },
];

/**
 * Get navigation items sorted by order
 */
export function getNavItems(): NavItem[] {
  return [...navItems].sort((a, b) => a.order - b.order);
}
