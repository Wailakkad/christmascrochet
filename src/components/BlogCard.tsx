import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Calendar } from 'lucide-react';
import { Article } from '../types';

interface BlogCardProps {
  article: Article;
  featured?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({ article, featured = false }) => {
  if (featured) {
    return (
      <article className="group relative bg-white border border-[#6F8065]/20 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Image */}
          <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#F3F7F1]">
            <img
              src={article.heroImage}
              alt={article.heroImageAlt}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
            />
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/95 text-[#173A2B] backdrop-blur-sm shadow-sm border border-[#6F8065]/20">
                Featured Roundup
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Link
                  to={`/blog/${article.categorySlug}`}
                  className="text-xs font-semibold uppercase tracking-wider text-[#B83A3A] hover:underline"
                >
                  {article.category}
                </Link>
                <span className="text-[#666666]/50">•</span>
                <span className="inline-flex items-center gap-1 text-xs text-[#666666]">
                  <Clock className="w-3.5 h-3.5 text-[#6F8065]" />
                  {article.readingTime}
                </span>
              </div>

              <h2 className="font-serif text-2xl lg:text-3xl text-[#171717] font-semibold mb-4 leading-snug group-hover:text-[#173A2B] transition-colors">
                <Link to={`/blog/${article.slug}`}>
                  {article.title}
                </Link>
              </h2>

              <p className="text-[#666666] text-sm md:text-base leading-relaxed mb-6 font-normal line-clamp-4">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-6 border-t border-[#6F8065]/15 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-[#666666]">
                <Calendar className="w-3.5 h-3.5 text-[#6F8065]" />
                <span>{article.publishedDate}</span>
              </div>

              <Link
                to={`/blog/${article.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#173A2B] group-hover:text-[#B83A3A] group-hover:translate-x-0.5 transition-all"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-white border border-[#6F8065]/15 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      {/* Thumbnail */}
      <Link to={`/blog/${article.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-[#F3F7F1]">
        <img
          src={article.heroImage}
          alt={article.heroImageAlt}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
        />
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/95 text-[#173A2B] backdrop-blur-sm shadow-xs border border-[#6F8065]/20">
            {article.category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-3 text-xs text-[#666666] mb-2.5">
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#6F8065]" />
              {article.readingTime}
            </span>
            <span className="text-[#666666]/40">•</span>
            <span>{article.projects.length} Projects</span>
          </div>

          <h3 className="font-serif text-xl text-[#171717] font-semibold mb-3 leading-snug group-hover:text-[#173A2B] transition-colors line-clamp-2">
            <Link to={`/blog/${article.slug}`}>
              {article.title}
            </Link>
          </h3>

          <p className="text-[#666666] text-sm leading-relaxed mb-5 line-clamp-3">
            {article.excerpt}
          </p>
        </div>

        <div className="pt-4 border-t border-[#6F8065]/10 flex items-center justify-between mt-auto">
          <span className="text-xs text-[#666666]">
            {article.publishedDate}
          </span>

          <Link
            to={`/blog/${article.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#173A2B] group-hover:text-[#B83A3A] transition-colors"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
};
