import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BlogCard } from '../components/BlogCard';
import { Newsletter } from '../components/Newsletter';
import { getCategoryBySlug } from '../data/categories';
import { getArticlesByCategorySlug } from '../data/articles';
import { CategorySlug } from '../types';
import { Sparkles, HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const CategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = getCategoryBySlug(categorySlug as CategorySlug);
  const articles = getArticlesByCategorySlug(categorySlug as CategorySlug);

  useEffect(() => {
    if (category) {
      document.title = `${category.name} – Free Patterns & Holiday Guides`;
    }
    window.scrollTo(0, 0);
  }, [category]);

  if (!category) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="font-serif text-3xl font-bold text-[#171717] mb-4">
          Category Not Found
        </h1>
        <p className="text-[#666666] mb-6">
          The holiday category you are looking for does not exist.
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#173A2B] text-white text-xs font-semibold"
        >
          <span>Return to Blog</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: 'Blog', path: '/blog' },
          { label: category.name }
        ]}
      />

      {/* Category Banner */}
      <div className="relative rounded-3xl overflow-hidden mb-12 shadow-sm border border-[#6F8065]/20">
        <div className="relative aspect-[21/9] sm:aspect-[24/9] min-h-[220px] overflow-hidden bg-[#F3F7F1]">
          <img
            src={category.image}
            alt={category.imageAlt}
            loading="eager"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />

          <div className="absolute inset-0 p-6 sm:p-10 md:p-12 flex flex-col justify-end text-white max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm border border-white/30 text-white mb-3 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#B83A3A]" />
              {category.badge}
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 text-white">
              {category.name}
            </h1>

            <p className="text-white/85 text-sm sm:text-base leading-relaxed font-normal">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Articles in Category */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#6F8065]/15">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#171717] tracking-tight">
            Curated Roundups in {category.name}
          </h2>
          <span className="text-xs text-[#666666] font-medium">
            {articles.length} Comprehensive Guides
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      </div>

      {/* Category Specific Tips */}
      <div className="my-16 p-8 rounded-3xl bg-[#F3F7F1] border border-[#6F8065]/20">
        <div className="flex items-center gap-2 text-[#173A2B] font-bold text-lg mb-4">
          <HelpCircle className="w-5 h-5 text-[#B83A3A]" />
          <span>Helpful Tips for {category.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#171717]">
          <div className="p-4 rounded-xl bg-white border border-[#6F8065]/15">
            <h4 className="font-semibold text-[#173A2B] mb-1.5 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#6F8065]" />
              Batch Production
            </h4>
            <p className="text-xs text-[#666666] leading-relaxed">
              Work on individual components (granny squares or ornament rings) assembly-line style for maximum efficiency.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#6F8065]/15">
            <h4 className="font-semibold text-[#173A2B] mb-1.5 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#6F8065]" />
              Color Harmony
            </h4>
            <p className="text-xs text-[#666666] leading-relaxed">
              Limit your color palette to 3 or 4 harmonizing festive shades (like sage, ecru, and cranberry) for an elevated look.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#6F8065]/15">
            <h4 className="font-semibold text-[#173A2B] mb-1.5 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#6F8065]" />
              Steam Blocking
            </h4>
            <p className="text-xs text-[#666666] leading-relaxed">
              Pin and gently steam your finished makes to sharpen snowflake points and flatten afghan borders cleanly.
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};
