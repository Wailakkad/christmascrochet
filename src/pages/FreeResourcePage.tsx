import React, { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Sparkles,
  Timer,
  Printer,
  Scissors,
  Star,
  Gauge,
  Layers,
  ArrowRight,
  Mail,
  Inbox,
  Download,
  Heart,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FeatureRow } from '../components/FeatureRow';
import { EmailGateForm } from '../components/EmailGateForm';
import { AdBanner } from '../components/AdBanner';
import {
  freeResources,
  FreeResourceHeroMetaKey,
  getFreeResourceBySlug,
  resourcePath,
} from '../data/freeResources';

const HERO_META_ICONS: Record<FreeResourceHeroMetaKey, React.ComponentType<{ className?: string }>> = {
  timer: Timer,
  printer: Printer,
  scissors: Scissors,
  star: Star,
  gauge: Gauge,
  layers: Layers,
};

const STEPS = [
  {
    icon: Mail,
    title: 'Pop in your email',
    text: 'One field, one click. That is how we keep every pattern on this site free.',
  },
  {
    icon: Inbox,
    title: 'We save it instantly',
    text: 'Your address lands safely in our list so we can keep sending free patterns.',
  },
  {
    icon: Download,
    title: 'Download your PDF',
    text: 'The button unlocks straight away and a copy waits in your inbox too.',
  },
];

const SITE_URL = 'https://christmascrochetpatternsfree.com';

export const FreeResourcePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const resource = getFreeResourceBySlug(slug);

  useEffect(() => {
    if (!resource) return;

    document.title = resource.metaTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', resource.metaDescription);

    const path = resourcePath(resource);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `${SITE_URL}${path}`);
    else {
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', `${SITE_URL}${path}`);
      document.head.appendChild(link);
    }

    window.scrollTo(0, 0);
  }, [resource]);

  if (!resource) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-serif text-3xl font-bold text-[#171717] mb-4">
          Freebie Not Found
        </h1>
        <p className="text-[#666666] mb-8">
          That free PDF may have been moved or renamed. Browse the full library to find your next
          make.
        </p>
        <Link
          to="/free-resources"
          className="inline-flex items-center gap-2 rounded-xl bg-[#173A2B] px-6 py-3 text-xs font-semibold text-white"
        >
          <span>Browse all free PDFs</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  // This resource already has a canonical landing page — send visitors there.
  if (resource.legacyPath) {
    return <Navigate to={resource.legacyPath} replace />;
  }

  const gateProps = {
    pdfUrl: resource.pdfUrl,
    pdfFilename: resource.pdfFilename,
    fileSizeLabel: resource.fileSize,
    downloadLabel: 'Download the Free PDF',
    source: `/free-resources/${resource.slug}`,
    campaign: `free-resources-${resource.slug}`,
    storageKey: `pdfUnlocked:${resource.slug}`,
    heading: 'Get the free PDF sent to you',
  };

  const otherResources = freeResources.filter((r) => r.slug !== resource.slug).slice(0, 3);

  return (
    <div className="bg-white">
      {/* ---------------------------------------------------------------- */}
      {/* HERO — image LEFT / content RIGHT                                 */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FDFBF6] via-[#F3F7F1]/60 to-white px-4 pb-14 pt-8 sm:px-6 md:pb-20 md:pt-10 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#B83A3A]/8 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#6F8065]/12 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl">
          <Breadcrumbs
            items={[
              { label: 'Free Downloads', path: '/free-resources' },
              { label: resource.title },
            ]}
          />

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Image (left) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 -translate-x-3 translate-y-3 rounded-[2.25rem] border-2 border-dashed border-[#B83A3A]/30 bg-white/70"
              />
              <div className="relative overflow-hidden rounded-[2.25rem] border border-[#6F8065]/25 shadow-[0_28px_70px_-34px_rgba(23,58,43,0.6)]">
                <img
                  src={resource.image}
                  alt={resource.imageAlt}
                  loading="eager"
                  referrerPolicy="no-referrer"
                  className={
                    resource.naturalImages
                      ? 'block h-auto w-full'
                      : 'aspect-[4/3] w-full object-cover sm:aspect-[5/4]'
                  }
                />
                <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/70 bg-white/92 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#B83A3A] shadow-sm backdrop-blur-sm">
                  <Sparkles className="h-3 w-3" />
                  Free PDF Pattern
                </div>
              </div>
            </motion.div>

            {/* Content (right) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#6F8065]/25 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#173A2B] shadow-xs">
                <Heart className="h-3 w-3 text-[#B83A3A]" />
                {resource.heroEyebrow}
              </span>

              <h1 className="font-serif text-[2rem] font-bold leading-[1.15] tracking-tight text-[#171717] sm:text-5xl">
                {resource.heroTitleLead}{' '}
                <span className="relative whitespace-nowrap text-[#B83A3A]">
                  {resource.heroTitleAccent}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 200 12"
                    className="absolute -bottom-2 left-0 h-3 w-full text-[#6F8065]/50"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 8 C 30 2, 50 10, 78 6 S 130 2, 158 8 S 190 4, 198 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="7 7"
                    />
                  </svg>
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#5A5A5A] sm:text-lg">
                {resource.heroIntro}
              </p>

              <EmailGateForm className="mt-7 max-w-xl" {...gateProps} />

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#666666]">
                {resource.heroMeta.map((item) => {
                  const Icon = HERO_META_ICONS[item.icon];
                  return (
                    <span key={item.label} className="flex items-center gap-1.5">
                      <Icon className="h-3.5 w-3.5 text-[#6F8065]" />
                      {item.label}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* SECTION 2 — what's inside                                         */}
      {/* ---------------------------------------------------------------- */}
      <FeatureRow
        image={resource.inside.image}
        imageAlt={resource.inside.imageAlt}
        badge={resource.inside.badge}
        imageRight
        tone="cream"
        title={
          <>
            {resource.inside.titleLead}{' '}
            <span className="text-[#173A2B]">{resource.inside.titleAccent}</span>
          </>
        }
        description={
          <>
            {resource.inside.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </>
        }
        points={resource.inside.points}
        naturalSize={resource.naturalImages}
      />

      {/* Ad — mid page */}
      <div className="border-y border-[#6F8065]/15 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <AdBanner />
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* SECTION 3 — who it is for                                         */}
      {/* ---------------------------------------------------------------- */}
      <FeatureRow
        image={resource.maker.image}
        imageAlt={resource.maker.imageAlt}
        badge={resource.maker.badge}
        imageRight={false}
        tone="plain"
        title={
          <>
            {resource.maker.titleLead}{' '}
            <span className="text-[#B83A3A]">{resource.maker.titleAccent}</span>
          </>
        }
        description={
          <>
            {resource.maker.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </>
        }
        points={resource.maker.points}
        naturalSize={resource.naturalImages}
      />

      {/* ---------------------------------------------------------------- */}
      {/* SECTION 4 — how it works                                          */}
      {/* ---------------------------------------------------------------- */}
      <FeatureRow
        image={resource.howItWorksImage ?? resource.image}
        imageAlt={
          resource.howItWorksImage
            ? `How it works – ${resource.title}`
            : resource.imageAlt
        }
        badge="How it works"
        imageRight
        tone="mint"
        naturalSize={resource.naturalImages}
        title={
          <>
            Three tiny steps between you and{' '}
            <span className="text-[#173A2B]">your free pattern</span>
          </>
        }
        description={
          <p>
            We only ask for your email because that is how we keep every pattern on this site
            completely free. Save it, download it, and make something lovely.
          </p>
        }
      >
        <div className="grid gap-3.5 sm:grid-cols-3">
          {STEPS.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-[#6F8065]/20 bg-white p-4 shadow-[0_14px_34px_-24px_rgba(23,58,43,0.5)]"
            >
              <div className="mb-2.5 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#173A2B] text-white">
                  <step.icon className="h-4 w-4" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#6F8065]">
                  Step {index + 1}
                </span>
              </div>
              <p className="font-serif text-[15px] font-bold leading-snug text-[#171717]">
                {step.title}
              </p>
              <p className="mt-1 text-[13px] leading-relaxed text-[#666666]">{step.text}</p>
            </div>
          ))}
        </div>
      </FeatureRow>

      {/* Ad — before the final call to action */}
      <div className="border-y border-[#6F8065]/15 bg-[#FDFBF6]">
        <div className="mx-auto max-w-6xl px-4">
          <AdBanner />
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* FINAL CTA                                                         */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-[#FDFBF6] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="relative rounded-[2.5rem] border-2 border-dashed border-[#6F8065]/45 bg-gradient-to-br from-[#F3F7F1] to-white p-6 shadow-[0_28px_70px_-40px_rgba(23,58,43,0.6)] sm:p-10">
            <div className="text-center">
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#B83A3A]/20 bg-[#B83A3A]/8 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#B83A3A]">
                <Sparkles className="h-3 w-3" />
                Instant &amp; free forever
              </span>

              <h2 className="font-serif text-2xl font-bold leading-tight tracking-tight text-[#171717] sm:text-4xl">
                {resource.ctaTitle}
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#666666] sm:text-base">
                {resource.ctaText}
              </p>
            </div>

            <EmailGateForm className="mx-auto mt-7 max-w-lg" {...gateProps} />
          </div>

          {/* Cross-links to keep people browsing */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/free-resources"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#6F8065]/30 bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#173A2B] transition-colors hover:border-[#173A2B] hover:bg-[#F3F7F1] sm:w-auto"
            >
              All free PDF downloads
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/free-patterns"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#B83A3A] transition-colors hover:text-[#9F2C2C] sm:w-auto"
            >
              See all free pattern guides
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* More freebies */}
          {otherResources.length > 0 && (
            <div className="mt-12">
              <h3 className="mb-4 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-[#6F8065]">
                More free PDFs
              </h3>
              <div className="grid gap-3.5 sm:grid-cols-3">
                {otherResources.map((other) => (
                  <Link
                    key={other.slug}
                    to={resourcePath(other)}
                    className="group rounded-2xl border border-[#6F8065]/20 bg-white p-4 text-left transition-all hover:-translate-y-0.5 hover:border-[#6F8065]/40 hover:shadow-[0_16px_34px_-24px_rgba(23,58,43,0.55)]"
                  >
                    <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[#B83A3A]">
                      {other.badge} &middot; {other.fileSize}
                    </span>
                    <span className="block font-serif text-sm font-bold leading-snug text-[#171717] transition-colors group-hover:text-[#173A2B]">
                      {other.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
