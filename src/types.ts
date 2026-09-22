export type ArticleCategory = 'Christmas Crochet Projects' | 'Christmas Crochet Blanket' | 'Halloween Crochet Projects' | 'Halloween Crochet Decor';

export type CategorySlug = 'christmas-crochet-projects' | 'christmas-crochet-blanket' | 'halloween-crochet-projects' | 'halloween-crochet-decor';

export type ProjectDifficulty = 'Beginner' | 'Beginner-Easy' | 'Easy' | 'Easy-Intermediate' | 'Intermediate';

export interface ProjectItem {
  id: string;
  number: number;
  title: string;
  image: string;
  imageAlt: string;
  difficulty: ProjectDifficulty;
  estimatedTime: string;
  bestFor: string;
  style?: string;
  colorPalette?: string[];
  intro: string;
  whyYouLoveIt: string;
  whatToLookFor: string;
  yarnRecommendation?: string;
  resourceNote?: string;
}

export interface TableOfContentSection {
  id: string;
  title: string;
  itemCount?: number;
}

export interface SpecialEditorialSection {
  title: string;
  subtitle?: string;
  intro: string;
  points: {
    heading: string;
    description: string;
  }[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: ArticleCategory;
  categorySlug: CategorySlug;
  heroImage: string;
  heroImageAlt: string;
  excerpt: string;
  readingTime: string;
  publishedDate: string;
  updatedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  introParagraphs: string[];
  specialSection?: SpecialEditorialSection;
  tableOfContents: TableOfContentSection[];
  projects: ProjectItem[];
  relatedSlugs: string[];
}

export interface CategoryInfo {
  id: string;
  name: ArticleCategory;
  slug: CategorySlug;
  description: string;
  image: string;
  imageAlt: string;
  articleCount: number;
  badge: string;
}
