import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { CategoryCard } from '../components/CategoryCard';
import { BlogCard } from '../components/BlogCard';
import { Newsletter } from '../components/Newsletter';
import { categories } from '../data/categories';
import { allArticles } from '../data/articles';
import { ArrowRight, Sparkles, Heart, Gift, BookOpen } from 'lucide-react';
import { AdBanner } from '../components/AdBanner';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Christmas Crochet Patterns Free – Free Holiday Projects & Cozy Blanket Patterns';
    window.scrollTo(0, 0);
  }, []);

  const featuredArticle = allArticles[0]; // 30+ Christmas Crochet Projects
  const recentArticles = allArticles.slice(1);

  return (
    <div>
      {/* Visual Editorial Hero */}
      <Hero />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Category Showcase Section */}
        <section className="mb-16 md:mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B83A3A] mb-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Explore by Theme</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3.5xl font-bold text-[#171717] tracking-tight">
                Curated Holiday Collections
              </h2>
            </div>
            <p className="text-sm text-[#666666] max-w-md">
              From festive ornaments to cozy heirloom afghans, discover the perfect handmade holiday make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        {/* Featured Editorial Roundup */}
        <section className="mb-16 md:mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6F8065] block mb-1">
                Editor's Spotlight
              </span>
              <h2 className="font-serif text-2xl md:text-3.5xl font-bold text-[#171717] tracking-tight">
                Holiday Pattern Roundups
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#173A2B] hover:text-[#B83A3A] transition-colors"
            >
              <span>View All ({allArticles.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Featured Large Card */}
          <div className="mb-8">
            <BlogCard article={featuredArticle} featured={true} />
          </div>

          {/* Grid of Remaining Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {recentArticles.map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        {/* Ad: Home mid-page */}
        <div className="my-12">
          <AdBanner />
        </div>

        {/* Why Handmade Christmas Matters - Editorial Craft Manifesto */}
        <section className="my-16 p-8 md:p-12 rounded-3xl bg-[#F3F7F1]/80 border border-[#6F8065]/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B83A3A] block mb-2">
                The Beauty of Slow Holidays
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#173A2B] mb-4 leading-snug">
                Why Handmade Christmas Crochet Creates Lifelong Memories
              </h3>
              <p className="text-sm md:text-base text-[#171717]/85 leading-relaxed mb-4">
                In a world of mass-produced plastic ornaments and fast fashion gifts, a single crocheted snowflake or a heavyweight holiday blanket carries irreplaceable warmth.
              </p>
              <p className="text-sm md:text-base text-[#666666] leading-relaxed">
                Every stitch holds time, thoughtfulness, and quiet holiday peace. When your loved ones unpack your handmade ornaments year after year, they aren’t just decorating a tree—they are unwrapping family heritage.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-white border border-[#6F8065]/15 text-center">
                <Gift className="w-6 h-6 text-[#B83A3A] mx-auto mb-2" />
                <span className="font-serif text-xl font-bold text-[#173A2B] block">90+</span>
                <span className="text-xs text-[#666666]">Free Project Ideas</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#6F8065]/15 text-center">
                <BookOpen className="w-6 h-6 text-[#6F8065] mx-auto mb-2" />
                <span className="font-serif text-xl font-bold text-[#173A2B] block">100%</span>
                <span className="text-xs text-[#666666]">Free Inspiration</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#6F8065]/15 text-center">
                <Sparkles className="w-6 h-6 text-[#6F8065] mx-auto mb-2" />
                <span className="font-serif text-xl font-bold text-[#173A2B] block">Beginner</span>
                <span className="text-xs text-[#666666]">Step-by-Step Tips</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#6F8065]/15 text-center">
                <Heart className="w-6 h-6 text-[#B83A3A] mx-auto mb-2" />
                <span className="font-serif text-xl font-bold text-[#173A2B] block">Heirloom</span>
                <span className="text-xs text-[#666666]">Quality Designs</span>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Callout */}
        <Newsletter />
      </div>
    </div>
  );
};
