import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { ExternalLink, Pin, Clock, Sparkles, CheckCircle2, AlertCircle, Bookmark } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  articleTitle: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, articleTitle }) => {
  const [isSaved, setIsSaved] = useState(false);

  const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
    typeof window !== 'undefined' ? window.location.href : ''
  )}&media=${encodeURIComponent(
    project.image.startsWith('http') ? project.image : (typeof window !== 'undefined' ? `${window.location.origin}${project.image}` : project.image)
  )}&description=${encodeURIComponent(
    `${project.title} - ${project.intro} (from ${articleTitle})`
  )}`;

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Beginner':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'Easy':
        return 'bg-[#F3F7F1] text-[#173A2B] border-[#6F8065]/30';
      case 'Easy-Intermediate':
        return 'bg-amber-50 text-amber-900 border-amber-200';
      case 'Intermediate':
        return 'bg-rose-50 text-[#B83A3A] border-rose-200';
      default:
        return 'bg-stone-50 text-stone-800 border-stone-200';
    }
  };

  return (
    <article
      id={project.id}
      className="scroll-mt-24 mb-14 bg-white border border-[#6F8065]/15 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Project Image Container */}
      <div className="relative aspect-[4/3] md:aspect-[16/10] bg-[#F3F7F1] overflow-hidden group flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-8 w-full h-full bg-gradient-to-b from-[#F3F7F1] to-[#E8EEE5] border-b border-[#6F8065]/15">
            <div className="w-14 h-14 rounded-full bg-white/85 border border-[#6F8065]/20 flex items-center justify-center mb-3 shadow-xs">
              <Sparkles className="w-6 h-6 text-[#6F8065]" />
            </div>
            <p className="font-serif font-semibold text-lg text-[#173A2B] mb-1">
              {project.title}
            </p>
            <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-white/90 text-[#666666] border border-[#6F8065]/20">
              Image coming soon
            </span>
          </div>
        )}

        {/* Floating Number Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm text-[#173A2B] font-serif font-bold text-base shadow-sm border border-[#6F8065]/20">
            #{project.number}
          </span>
        </div>

        {/* Floating Pinterest Save Button */}
        {project.image && (
          <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
            <a
              href={pinterestUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Save to Pinterest"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E60023] text-white text-xs font-semibold shadow-md hover:bg-[#CC001F] transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.365-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
              <span>Pin</span>
            </a>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 md:p-8">
        {/* Header and badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${getDifficultyColor(project.difficulty)}`}>
            {project.difficulty}
          </span>
          <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full font-medium bg-[#F3F7F1] text-[#666666] border border-[#6F8065]/20">
            <Clock className="w-3 h-3 text-[#6F8065]" />
            {project.estimatedTime}
          </span>
          {project.style && (
            <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-stone-100 text-[#666666]">
              {project.style}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl md:text-3xl text-[#171717] font-semibold mb-3 leading-snug">
          {project.title}
        </h3>

        {/* Introduction */}
        <p className="text-[#171717] text-base leading-relaxed mb-6 font-normal">
          {project.intro}
        </p>

        {/* Two-Column Info Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-[#F3F7F1]/80 border border-[#6F8065]/15">
            <div className="flex items-center gap-2 mb-1.5 text-[#173A2B] font-semibold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#B83A3A]" />
              <span>Why You'll Love It</span>
            </div>
            <p className="text-sm text-[#171717] leading-relaxed">
              {project.whyYouLoveIt}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#6F8065]/20">
            <div className="flex items-center gap-2 mb-1.5 text-[#173A2B] font-semibold text-xs uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-[#6F8065]" />
              <span>What to Look For</span>
            </div>
            <p className="text-sm text-[#666666] leading-relaxed">
              {project.whatToLookFor}
            </p>
          </div>
        </div>

        {/* Best For & Yarn recommendation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#666666] pb-5 border-b border-[#6F8065]/15 mb-5">
          <div>
            <span className="font-semibold text-[#173A2B]">Best for:</span> {project.bestFor}
          </div>
          {project.yarnRecommendation && (
            <div>
              <span className="font-semibold text-[#173A2B]">Yarn note:</span> {project.yarnRecommendation}
            </div>
          )}
        </div>

        {/* Color Palette swatches if available */}
        {project.colorPalette && project.colorPalette.length > 0 && (
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs font-semibold text-[#173A2B]">Color Notes:</span>
            <div className="flex flex-wrap gap-1.5">
              {project.colorPalette.map((color, idx) => (
                <span key={idx} className="text-[11px] px-2 py-0.5 rounded-full bg-[#F3F7F1] text-[#173A2B] border border-[#6F8065]/20">
                  {color}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Pattern / Project Resource CTA Section */}
        <div className="p-4 rounded-xl bg-stone-50 border border-dashed border-[#6F8065]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B83A3A] block mb-0.5">
              Pattern / Project Resource
            </span>
            <p className="text-xs text-[#666666]">
              {project.resourceNote || 'Curated project roundup inspiration. Bookmark or save this project to your holiday crochet board.'}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium border transition-all ${
                isSaved
                  ? 'bg-[#173A2B] text-white border-[#173A2B]'
                  : 'bg-white text-[#171717] border-[#6F8065]/30 hover:border-[#173A2B]'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current text-white' : ''}`} />
              <span>{isSaved ? 'Saved to List' : 'Save Project'}</span>
            </button>

            <a
              href={pinterestUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium bg-[#B83A3A] text-white hover:bg-[#9F2C2C] transition-colors"
            >
              <Pin className="w-3.5 h-3.5" />
              <span>Pin Idea</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
