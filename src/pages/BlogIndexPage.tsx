import React, { useState, useEffect } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BlogCard } from '../components/BlogCard';
import { Newsletter } from '../components/Newsletter';
import { allArticles } from '../data/articles';
import { ArticleCategory } from '../types';
import { BookOpen, Sparkles } from 'lucide-react';
import { AdBanner } from '../components/AdBanner';

export const BlogIndexPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    document.title = 'Christmas Crochet Patterns & Articles – Free Holiday Guides';
    window.scrollTo(0, 0);
  }, []);

  const filteredArticles = selectedCategory === 'all'
    ? allArticles
    : allArticles.filter(a => a.categorySlug === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Breadcrumbs items={[{ label: 'Blog' }]} />

      {/* Page Header */}
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#6F8065]/15 text-[#173A2B] mb-3">
          <BookOpen className="w-3.5 h-3.5 text-[#B83A3A]" />
          <span>Editorial Pattern Roundups</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] tracking-tight mb-4">
          All Christmas Crochet Pattern Roundups
        </h1>
        <p className="text-[#666666] text-base sm:text-lg leading-relaxed font-normal">
          Explore our complete library of free Christmas crochet pattern collections, curated holiday project ideas, and cozy winter blanket tutorials.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#6F8065]/15">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            selectedCategory === 'all'
              ? 'bg-[#173A2B] text-white shadow-xs'
              : 'bg-[#F3F7F1] text-[#171717] hover:bg-[#6F8065]/20'
          }`}
        >
          All Roundups ({allArticles.length})
        </button>

        <button
          onClick={() => setSelectedCategory('christmas-crochet-projects')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            selectedCategory === 'christmas-crochet-projects'
              ? 'bg-[#173A2B] text-white shadow-xs'
              : 'bg-[#F3F7F1] text-[#171717] hover:bg-[#6F8065]/20'
          }`}
        >
          Christmas Crochet Projects (2)
        </button>

        <button
          onClick={() => setSelectedCategory('christmas-crochet-blanket')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            selectedCategory === 'christmas-crochet-blanket'
              ? 'bg-[#173A2B] text-white shadow-xs'
              : 'bg-[#F3F7F1] text-[#171717] hover:bg-[#6F8065]/20'
          }`}
        >
          Christmas Crochet Blankets (2)
        </button>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredArticles.map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>

      {/* Newsletter */}
      <Newsletter />

      {/* Ad: Bottom of blog page */}
      <div className="mt-10">
        <AdBanner />
      </div>
    </div>
  );
};
