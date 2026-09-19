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
  }
];

export const categories = categoriesData;

export function getCategoryBySlug(slug?: string): CategoryInfo | undefined {
  if (!slug) return undefined;
  return categoriesData.find(c => c.slug === slug);
}
