import { Article, ArticleCategory, CategorySlug } from '../types';
import { article1 } from './article1';
import { article2 } from './article2';
import { article3 } from './article3';
import { article4 } from './article4';
import { article5 } from './article5';

export const allArticles: Article[] = [
  article1,
  article2,
  article3,
  article4,
  article5
];

export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find(a => a.slug === slug);
}

export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return allArticles.filter(a => a.category === category);
}

export function getArticlesByCategorySlug(categorySlug: CategorySlug): Article[] {
  return allArticles.filter(a => a.categorySlug === categorySlug);
}

export function getRelatedArticles(currentSlug: string): Article[] {
  const current = getArticleBySlug(currentSlug);
  if (!current) return allArticles.slice(0, 3);
  
  // Prefer articles listed in relatedSlugs
  if (current.relatedSlugs && current.relatedSlugs.length > 0) {
    const related = current.relatedSlugs
      .map(slug => getArticleBySlug(slug))
      .filter((a): a is Article => Boolean(a));
    if (related.length > 0) return related;
  }
  
  // Fallback: other articles
  return allArticles.filter(a => a.slug !== currentSlug).slice(0, 3);
}
