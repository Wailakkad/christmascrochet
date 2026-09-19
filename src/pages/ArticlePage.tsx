import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticleBySlug, getRelatedArticles } from '../data/articles';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { TableOfContents } from '../components/TableOfContents';
import { ProjectCard } from '../components/ProjectCard';
import { ShareButtons } from '../components/ShareButtons';
import { BlogCard } from '../components/BlogCard';
import { Newsletter } from '../components/Newsletter';
import { Clock, Calendar, ArrowRight, Sparkles, Pin } from 'lucide-react';

export const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || '');

  useEffect(() => {
    if (article) {
      document.title = `${article.metaTitle} | Christmas Crochet Patterns Free`;
    }
    window.scrollTo(0, 0);
  }, [article, slug]);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="font-serif text-3xl font-bold text-[#171717] mb-4">
          Article Not Found
        </h1>
        <p className="text-[#666666] mb-8">
          We couldn't locate this holiday crochet article. It may have been relocated or renamed.
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#173A2B] text-white text-xs font-semibold"
        >
          <span>Browse All Articles</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  const relatedArticles = getRelatedArticles(article.slug);

  // Schema.org Article structured data
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.metaDescription,
    image: [article.heroImage],
    datePublished: '2025-10-15T08:00:00+00:00',
    dateModified: '2026-09-18T10:00:00+00:00',
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.role
    },
    publisher: {
      '@type': 'Organization',
      name: 'Christmas Crochet Patterns Free',
      logo: {
        '@type': 'ImageObject',
        url: 'https://christmascrochetpatternsfree.com/icon.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://christmascrochetpatternsfree.com/blog/${article.slug}`
    }
  };

  const pinterestHeroUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
    typeof window !== 'undefined' ? window.location.href : ''
  )}&media=${encodeURIComponent(article.heroImage)}&description=${encodeURIComponent(
    `${article.title} - ${article.excerpt}`
  )}`;

  return (
    <div className="bg-white">
      {/* Article Schema JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Blog', path: '/blog' },
            { label: article.category, path: `/blog/${article.categorySlug}` },
            { label: article.title }
          ]}
        />

        {/* Category Pill */}
        <div className="mb-3">
          <Link
            to={`/blog/${article.categorySlug}`}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F3F7F1] text-[#173A2B] border border-[#6F8065]/20 hover:bg-[#6F8065]/20 transition-colors"
          >
            <Sparkles className="w-3 h-3 text-[#B83A3A]" />
            <span>{article.category}</span>
          </Link>
        </div>

        {/* Article Title */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-bold text-[#171717] tracking-tight leading-[1.2] mb-6">
          {article.title}
        </h1>

        {/* Author Bar & Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-[#6F8065]/15 mb-8">
          <div className="flex items-center gap-3">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-11 h-11 rounded-full object-cover border border-[#6F8065]/30"
            />
            <div>
              <span className="text-sm font-semibold text-[#171717] block">
                {article.author.name}
              </span>
              <span className="text-xs text-[#666666]">
                {article.author.role}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-[#666666]">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#6F8065]" />
              {article.publishedDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#6F8065]" />
              {article.readingTime}
            </span>
          </div>
        </div>

        {/* Hero Image Container */}
        <div className="relative rounded-3xl overflow-hidden mb-8 shadow-sm border border-[#6F8065]/20 group">
          <div className="aspect-[16/10] bg-[#F3F7F1] overflow-hidden">
            <img
              src={article.heroImage}
              alt={article.heroImageAlt}
              loading="eager"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-101 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Hero Pin Button */}
          <div className="absolute top-4 right-4 z-10">
            <a
              href={pinterestHeroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#E60023] text-white text-xs font-semibold shadow-md hover:bg-[#CC001F] transition-colors"
            >
              <Pin className="w-3.5 h-3.5" />
              <span>Pin Full Guide</span>
            </a>
          </div>
        </div>

        {/* Share Buttons Strip */}
        <ShareButtons
          title={article.title}
          url={typeof window !== 'undefined' ? window.location.pathname : `/blog/${article.slug}`}
          mediaUrl={article.heroImage}
          description={article.excerpt}
        />

        {/* Intro Paragraphs */}
        <div className="my-8 space-y-5 text-base md:text-lg text-[#171717] leading-relaxed font-normal">
          {article.introParagraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Special Educational / Advice Section */}
        {article.specialSection && (
          <section className="my-12 p-6 sm:p-8 rounded-3xl bg-[#F3F7F1] border border-[#6F8065]/25">
            <div className="max-w-2xl mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B83A3A] block mb-1">
                Designer Spotlight
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#173A2B] tracking-tight mb-2">
                {article.specialSection.title}
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-[#666666] mb-3">
                {article.specialSection.subtitle}
              </p>
              <p className="text-sm text-[#171717] leading-relaxed">
                {article.specialSection.intro}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {article.specialSection.points.map((point, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-[#6F8065]/15 shadow-2xs"
                >
                  <h3 className="font-serif text-base font-semibold text-[#173A2B] mb-1.5">
                    {point.heading}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Table of Contents */}
        <TableOfContents sections={article.tableOfContents} />

        {/* Projects Stream */}
        <div className="my-12">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#6F8065]/15">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#171717]">
              The Complete Project Collection
            </h2>
            <span className="text-xs font-semibold text-[#B83A3A]">
              {article.projects.length} Inspiring Makes
            </span>
          </div>

          <div className="space-y-4">
            {article.projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                articleTitle={article.title}
              />
            ))}
          </div>
        </div>

        {/* Share & Save at bottom of article */}
        <div className="my-12 p-6 rounded-2xl bg-[#F3F7F1] text-center border border-[#6F8065]/20">
          <h3 className="font-serif text-xl font-bold text-[#173A2B] mb-2">
            Enjoyed this Christmas Crochet Guide?
          </h3>
          <p className="text-xs sm:text-sm text-[#666666] max-w-md mx-auto mb-4">
            Save this post to your holiday crochet Pinterest board so you have instant access to all {article.projects.length} patterns when you pick up your hook!
          </p>
          <div className="flex justify-center">
            <ShareButtons
              title={article.title}
              url={typeof window !== 'undefined' ? window.location.pathname : `/blog/${article.slug}`}
              mediaUrl={article.heroImage}
              description={article.excerpt}
            />
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="my-16 pt-12 border-t border-[#6F8065]/20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6F8065] block mb-1">
                  Keep Crocheting
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#171717]">
                  Related Holiday Roundups
                </h2>
              </div>
              <Link
                to="/blog"
                className="text-xs font-bold uppercase tracking-wider text-[#173A2B] hover:text-[#B83A3A] transition-colors"
              >
                View All &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <BlogCard key={rel.id} article={rel} />
              ))}
            </div>
          </section>
        )}

        {/* Newsletter */}
        <Newsletter />
      </div>
    </div>
  );
};
