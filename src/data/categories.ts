import { CategoryInfo, CategorySlug } from '../types';
import { siteImages } from '../assets/images';

export const categoriesData: CategoryInfo[] = [
  {
    id: 'cat-projects',
    name: 'Christmas Crochet Projects',
    slug: 'christmas-crochet-projects',
    description: 'Explore quick ornaments, festive table decor, amigurumi holiday characters, stockings, and wearable handmade Christmas gifts.',
    image: siteImages.catProjects,
    imageAlt: 'Handmade Christmas crochet ornaments and holiday decor arranged in an editorial flatlay',
    articleCount: 2,
    badge: 'Ornaments & Gifts'
  },
  {
    id: 'cat-blankets',
    name: 'Christmas Crochet Blanket',
    slug: 'christmas-crochet-blanket',
    description: 'Cozy holiday throws, timeless granny squares, mosaic festive afghans, and beginner-friendly winter crochet blankets.',
    image: siteImages.catBlankets,
    imageAlt: 'Chunky handmade Christmas crochet blanket folded cozily on a festive holiday armchair',
    articleCount: 2,
    badge: 'Cozy Throws & Afghans'
  },
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
