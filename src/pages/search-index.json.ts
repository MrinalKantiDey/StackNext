import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getProjectSlug } from '@/lib/utils';
import siteConfig from '@/config/site.config';

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
    { title: 'Projects', description: 'Selected work — websites, tools, and open-source projects.', url: '/projects', type: 'Page' },
    { title: 'Blog', description: 'Articles, guides, and updates from the team.', url: '/blog', type: 'Page' },
    { title: 'Components', description: 'Browse every UI component live.', url: '/components', type: 'Page' },
    { title: 'Contact', description: 'Get in touch to start a project.', url: '/contact', type: 'Page' },
  ];

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

  const items: SearchItem[] = [...pages, ...projectItems, ...postItems];

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json' },
  });
};
