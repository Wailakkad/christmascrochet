import React, { useEffect } from 'react';
import { ArrowRight, BookOpen, Download } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import christmasCover from '../assets/images/crochet_santa_amigurumi_1789759728181.jpg';
import { article6 } from '../data/article6';

interface FreePattern {
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  actionLabel: string;
  external?: boolean;
}

const freePatterns: FreePattern[] = [
  {
    category: 'Christmas',
    title: 'Festive Friends Ebook - Free Toy Crochet Patterns for Christmas by Paintbox Yarns',
    description: 'Download this free festive ebook for cheerful toy crochet patterns, thoughtful Christmas gifts, and memorable holiday makes.',
    image: christmasCover,
    imageAlt: 'Handmade crochet Santa amigurumi with a festive Christmas toy theme',
    href: 'https://drive.google.com/file/d/10TulAcLiZ0iAFb-8a2QvcFy0k3ZfAO3M/view?usp=sharing',
    actionLabel: 'Download Free Guide',
    external: true
  },
  {
    category: 'Halloween',
    title: 'Halloween Crochet Patterns & Ideas',
    description: 'Explore spooky amigurumi, pumpkin decor, ghost plushies, witch hats, and beginner-friendly projects for a handmade Halloween season.',
    image: article6.heroImage,
    imageAlt: article6.heroImageAlt,
    href: '/blog/halloween-crochet-projects',
    actionLabel: 'View Halloween Patterns'
  }
];

export const FreePatternsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Free Crochet Patterns – Christmas & Halloween Guides';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Breadcrumbs items={[{ label: 'Free Patterns' }]} />

      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#6F8065]/15 text-[#173A2B] mb-3">
          <BookOpen className="w-3.5 h-3.5 text-[#B83A3A]" />
          <span>Free Pattern Library</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] tracking-tight mb-4">
          Free Crochet Patterns
        </h1>
        <p className="text-[#666666] text-base sm:text-lg leading-relaxed">
          Discover free seasonal crochet guides, downloadable patterns, and handmade project ideas for Christmas and Halloween.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {freePatterns.map((pattern) => (
          <article
            key={pattern.category}
            className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white border border-[#6F8065]/20 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#F3F7F1]">
              <img
                src={pattern.image}
                alt={pattern.imageAlt}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/95 text-[#173A2B] backdrop-blur-sm border border-[#6F8065]/20">
                {pattern.category}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <h2 className="font-serif text-2xl font-bold text-[#171717] leading-tight mb-3">
                {pattern.title}
              </h2>
              <p className="text-[#666666] text-sm leading-relaxed mb-6">
                {pattern.description}
              </p>
              <a
                href={pattern.href}
                target={pattern.external ? '_blank' : undefined}
                rel={pattern.external ? 'noopener noreferrer' : undefined}
                className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#173A2B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B83A3A] transition-colors"
              >
                {pattern.external ? <Download className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                <span>{pattern.actionLabel}</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
