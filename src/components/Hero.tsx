import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { siteImages } from '../assets/images';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 md:pt-12 md:pb-20 bg-gradient-to-b from-[#F3F7F1]/70 via-white to-white border-b border-[#6F8065]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#6F8065]/15 text-[#173A2B] border border-[#6F8065]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#B83A3A]" />
                Free Holiday Crochet Inspiration
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl text-[#171717] font-semibold tracking-tight leading-[1.18] mb-5">
              Christmas Crochet Patterns & Cozy Holiday Projects
            </h1>

            <p className="text-[#666666] text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 font-normal">
              Discover free Christmas crochet ideas, festive projects, cozy blankets, ornaments, gifts, and easy crochet patterns for the holiday season.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <Link
                to="/blog/christmas-crochet-projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#B83A3A] text-white text-sm font-semibold hover:bg-[#9F2C2C] shadow-sm hover:shadow-md transition-all group"
              >
                <span>Explore Christmas Crochet Ideas</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/blog/christmas-crochet-blanket"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#173A2B] border border-[#6F8065]/30 text-sm font-semibold hover:bg-[#F3F7F1] hover:border-[#173A2B] transition-all"
              >
                <BookOpen className="w-4 h-4 text-[#6F8065]" />
                <span>Browse Crochet Blankets</span>
              </Link>
            </div>

            {/* Micro Highlights */}
            <div className="mt-8 pt-6 border-t border-[#6F8065]/15 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#666666]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6F8065]" />
                <span>Beginner-Friendly Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B83A3A]" />
                <span>Pinterest-Ready Ideas</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#173A2B]" />
                <span>100% Free Inspiration</span>
              </div>
            </div>
          </div>

          {/* Generated Hero Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#6F8065]/25 group">
              <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#F3F7F1]">
                <img
                  src={siteImages.heroHome}
                  alt="Cozy editorial Christmas crochet scene with holiday blankets, yarn skeins, and wooden hook"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Editorial Caption Tag */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#6F8065]/20 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#173A2B] block">
                      Handmade Holiday Cheer
                    </span>
                    <span className="text-[11px] text-[#666666]">
                      Curated Christmas projects, blankets & ornament roundups
                    </span>
                  </div>
                  <Link
                    to="/blog"
                    className="text-xs font-bold text-[#B83A3A] hover:underline whitespace-nowrap ml-2"
                  >
                    View All &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
