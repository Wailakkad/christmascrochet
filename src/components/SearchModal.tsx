import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import { allArticles } from '../data/articles';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const results = useMemo(() => {
    if (!query.trim()) {
      return { articles: [], projects: [] };
    }
    const q = query.toLowerCase();

    // Match articles
    const matchedArticles = allArticles.filter(
      a =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
    );

    // Match specific projects within articles
    const matchedProjects: {
      projectTitle: string;
      projectNumber: number;
      articleTitle: string;
      articleSlug: string;
      projectId: string;
      difficulty: string;
    }[] = [];

    allArticles.forEach(article => {
      article.projects.forEach(p => {
        if (
          p.title.toLowerCase().includes(q) ||
          p.intro.toLowerCase().includes(q) ||
          p.bestFor.toLowerCase().includes(q)
        ) {
          matchedProjects.push({
            projectTitle: p.title,
            projectNumber: p.number,
            articleTitle: article.title,
            articleSlug: article.slug,
            projectId: p.id,
            difficulty: p.difficulty
          });
        }
      });
    });

    return {
      articles: matchedArticles,
      projects: matchedProjects.slice(0, 8)
    };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#6F8065]/20 overflow-hidden">
        {/* Search input bar */}
        <div className="p-4 border-b border-[#6F8065]/15 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#6F8065]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Christmas crochet patterns, blankets, ornaments, scarves..."
            className="flex-1 text-base text-[#171717] placeholder-[#666666]/60 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#666666] hover:bg-[#F3F7F1] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 divide-y divide-[#6F8065]/10">
          {!query.trim() && (
            <div className="py-8 text-center text-[#666666]">
              <Sparkles className="w-8 h-8 text-[#6F8065] mx-auto mb-2 opacity-60" />
              <p className="text-sm font-medium text-[#171717]">
                Search 90+ free Christmas crochet projects & blanket guides
              </p>
              <p className="text-xs text-[#666666] mt-1">
                Try typing "blanket", "ornament", "snowflake", "gingerbread", or "easy"
              </p>
            </div>
          )}

          {query.trim() && results.articles.length === 0 && results.projects.length === 0 && (
            <div className="py-8 text-center text-[#666666]">
              <p className="text-sm">No crochet projects found matching "{query}"</p>
              <p className="text-xs text-[#666666] mt-1">Try another seasonal keyword</p>
            </div>
          )}

          {/* Articles */}
          {results.articles.length > 0 && (
            <div className="py-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6F8065] block mb-2">
                Articles & Roundups
              </span>
              <div className="space-y-1.5">
                {results.articles.map(article => (
                  <button
                    key={article.id}
                    onClick={() => {
                      navigate(`/blog/${article.slug}`);
                      onClose();
                    }}
                    className="w-full text-left p-3 rounded-xl hover:bg-[#F3F7F1] flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <BookOpen className="w-4 h-4 text-[#B83A3A] shrink-0" />
                      <div>
                        <span className="text-sm font-semibold text-[#171717] group-hover:text-[#173A2B] block">
                          {article.title}
                        </span>
                        <span className="text-xs text-[#666666]">
                          {article.category} • {article.readingTime}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#666666] group-hover:text-[#173A2B] group-hover:translate-x-0.5 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {results.projects.length > 0 && (
            <div className="py-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6F8065] block mb-2">
                Specific Holiday Projects
              </span>
              <div className="space-y-1.5">
                {results.projects.map((proj, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      navigate(`/blog/${proj.articleSlug}#${proj.projectId}`);
                      onClose();
                    }}
                    className="w-full text-left p-3 rounded-xl hover:bg-[#F3F7F1] flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#B83A3A]">#{proj.projectNumber}</span>
                        <span className="text-sm font-semibold text-[#171717] group-hover:text-[#173A2B]">
                          {proj.projectTitle}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-white text-[#666666] border border-[#6F8065]/20">
                          {proj.difficulty}
                        </span>
                      </div>
                      <span className="text-xs text-[#666666] block mt-0.5">
                        In: {proj.articleTitle}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#666666] group-hover:text-[#173A2B] group-hover:translate-x-0.5 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
