import { CategoryInfo } from '../types';

export const categoriesData: CategoryInfo[] = [
  {
    id: 'cat-halloween-projects',
    name: 'Halloween Crochet Projects',
    slug: 'halloween-crochet-projects',
    description: 'Spooky amigurumi, pumpkin decor, ghost plushies, witch hats, and easy beginner-friendly Halloween crochet patterns and ideas.',
    image: '/images/blog/halloween-1/crochet-ghost-plush-placeholder.svg',
    imageAlt: 'Collection of handmade Halloween crochet projects including ghosts, pumpkins, bats, and spooky decorations',
    articleCount: 1,
    badge: 'Spooky Patterns & Ideas'
  },
  {
    id: 'cat-halloween-decor',
    name: 'Halloween Crochet Decor',
    slug: 'halloween-crochet-decor',
    description: 'Halloween crochet decorations, cozy blankets, festive garlands, pumpkin ornaments, and handmade gifts for the spooky season.',
    image: '/images/blog/halloween-2/pumpkin-wreath-placeholder.svg',
    imageAlt: 'Handmade Halloween crochet decorations including pumpkin garlands, ghost ornaments, and spooky home decor',
    articleCount: 1,
    badge: 'Decor, Gifts & Home'
  }
];

export const categories = categoriesData;

export function getCategoryBySlug(slug?: string): CategoryInfo | undefined {
  if (!slug) return undefined;
  return categoriesData.find(c => c.slug === slug);
}
