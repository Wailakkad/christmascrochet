import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CategoryInfo } from '../types';

interface CategoryCardProps {
  category: CategoryInfo;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link
      to={`/blog/${category.slug}`}
      className="group block relative rounded-3xl overflow-hidden bg-[#F3F7F1] border border-[#6F8065]/20 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="relative aspect-[16/10] md:aspect-[4/3] overflow-hidden bg-stone-100">
        <img
          src={category.image}
          alt={category.imageAlt}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#173A2B] backdrop-blur-sm shadow-xs border border-[#6F8065]/20">
            <Sparkles className="w-3 h-3 text-[#B83A3A]" />
            {category.badge}
          </span>
        </div>

        <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 text-white">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2 text-white group-hover:text-[#F3F7F1] transition-colors drop-shadow-xs">
                {category.name}
              </h3>
              <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-md line-clamp-2 drop-shadow-xs font-normal">
                {category.description}
              </p>
            </div>

            <div className="shrink-0 w-11 h-11 rounded-full bg-white/90 text-[#173A2B] flex items-center justify-center group-hover:bg-[#B83A3A] group-hover:text-white transition-all transform group-hover:translate-x-1 shadow-md">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
