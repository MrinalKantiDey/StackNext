import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getProjectSlug } from '@/lib/utils';
import siteConfig from '@/config/site.config';
import { services } from '@/config/services.config';
import { tools } from '@/config/tools.config';

export interface SearchItem {
  title: string;
  description: string;
  url: string;
  type: 'Page' | 'Project' | 'Post';
}

export const GET: APIRoute = async () => {
  const [posts, projects] = await Promise.all([
    getCollection('blog', ({ data }) => data.locale === 'en' && data.draft !== true),
    getCollection('projects', ({ data }) => data.draft !== true),
  ]);

  const pages: SearchItem[] = [
    { title: 'Home', description: siteConfig.description, url: '/', type: 'Page' },
    { title: 'About', description: 'Learn more about the team behind the studio.', url: '/about', type: 'Page' },
    { title: 'Services', description: 'Web design, development, e-commerce, performance, support, and consulting.', url: '/services', type: 'Page' },
    { title: 'Free Tools', description: `${tools.length} free web design, development, SEO, and marketing tools.`, url: '/tools', type: 'Page' },
    { title: 'Projects', description: 'Selected work — websites, tools, and open-source projects.', url: '/projects', type: 'Page' },
    { title: 'Blog', description: 'Articles, guides, and updates from the team.', url: '/blog', type: 'Page' },
    { title: 'Components', description: 'Browse every UI component live.', url: '/components', type: 'Page' },
    { title: 'Contact', description: 'Get in touch to start a project.', url: '/contact', type: 'Page' },
    { title: 'Privacy Policy', description: 'How we collect, use, and protect your personal data.', url: '/privacy', type: 'Page' },
    { title: 'Terms & Conditions', description: 'The terms that govern use of our website and services.', url: '/terms', type: 'Page' },
    { title: 'Cookie Policy', description: "How we use cookies and how to control them.", url: '/cookies', type: 'Page' },
  ];

  const serviceItems: SearchItem[] = services.map((service) => ({
    title: service.navLabel,
    description: service.shortDescription,
    url: `/services/${service.slug}`,
    type: 'Page',
  }));

  const toolItems: SearchItem[] = tools.map((tool) => ({
    title: tool.navLabel,
    description: tool.shortDescription,
    url: `/tools/${tool.slug}`,
    type: 'Page',
  }));

  const projectItems: SearchItem[] = projects.map((project) => ({
    title: project.data.title,
    description: project.data.description,
    url: `/projects/${getProjectSlug(project)}`,
    type: 'Project',
  }));

  const postItems: SearchItem[] = posts.map((post) => ({
    title: post.data.title,
    description: post.data.description,
    url: `/blog/${post.id.replace(/^en\//, '')}`,
    type: 'Post',
  }));

  const items: SearchItem[] = [...pages, ...serviceItems, ...toolItems, ...projectItems, ...postItems];

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json' },
  });
};
