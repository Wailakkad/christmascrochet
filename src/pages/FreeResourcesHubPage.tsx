import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Inbox, Download, FileText, Sparkles, Clock } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Newsletter } from '../components/Newsletter';
import { AdBanner } from '../components/AdBanner';
import { freeResources, resourcePath } from '../data/freeResources';

const STEPS = [
  {
    icon: Mail,
    title: 'Pop in your email',
    text: 'One field, one click — that is how every PDF on this page stays free.',
  },
  {
    icon: Inbox,
    title: 'We save it instantly',
    text: 'Your address lands safely on our list so we can keep sending free patterns.',
  },
  {
    icon: Download,
    title: 'Download your PDF',
    text: 'The button unlocks straight away and a copy waits in your inbox too.',
  },
];

export const FreeResourcesHubPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Free Crochet PDF Downloads – Patterns, Blankets, Stockings & Hats';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Breadcrumbs items={[{ label: 'Free Downloads' }]} />

        {/* ---------------------------------------------------------------- */}
        {/* HERO                                                              */}
        {/* ---------------------------------------------------------------- */}
        <section className="relative mb-12 overflow-hidden rounded-[2rem] border border-[#6F8065]/20 bg-gradient-to-br from-[#FDFBF6] via-[#F3F7F1]/70 to-white px-6 py-10 sm:px-10 md:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#B83A3A]/8 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#6F8065]/12 blur-3xl"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#6F8065]/25 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#173A2B] shadow-xs">
              <Sparkles className="h-3 w-3 text-[#B83A3A]" />
              Free PDF library
            </span>

            <h1 className="font-serif text-3xl font-bold leading-[1.15] tracking-tight text-[#171717] sm:text-5xl">
              Free Crochet{' '}
              <span className="relative whitespace-nowrap text-[#B83A3A]">
                PDF Downloads
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

            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[#5A5A5A] sm:text-lg">
              Printable patterns for blankets, stockings, Santa hats and more — every one free
              forever. Pick a PDF, pop in your email, and it downloads instantly.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#666666]">
              <span className="flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5 text-[#6F8065]" />
                {freeResources.length} free PDFs
              </span>
              <span className="flex items-center gap-1.5">
                <Download className="h-3.5 w-3.5 text-[#6F8065]" />
                Instant download
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-[#6F8065]" />
                No waiting, no payment
              </span>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* HOW IT WORKS                                                      */}
        {/* ---------------------------------------------------------------- */}
        <section className="mb-12 grid gap-3.5 sm:grid-cols-3">
          {STEPS.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-[#6F8065]/20 bg-[#FDFBF6] p-5 shadow-[0_14px_34px_-26px_rgba(23,58,43,0.5)]"
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
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* CARD GRID                                                         */}
        {/* ---------------------------------------------------------------- */}
        <section className="mb-16">
          <div className="mb-8 flex items-end justify-between gap-3 pb-4 border-b border-[#6F8065]/15">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#171717] tracking-tight">
              Pick your next make
            </h2>
            <span className="text-xs text-[#666666] font-medium">
              {freeResources.length} free pattern PDFs
            </span>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {freeResources.map((resource, index) => (
              <motion.div
                key={resource.slug}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={resourcePath(resource)}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#6F8065]/20 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6F8065]/40 hover:shadow-[0_24px_50px_-30px_rgba(23,58,43,0.55)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F3F7F1]">
                    <img
                      src={resource.image}
                      alt={resource.imageAlt}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-[#6F8065]/20 bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#173A2B] shadow-sm backdrop-blur-sm">
                      {resource.badge}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-2.5 flex items-center gap-3 text-xs text-[#666666]">
                      <span className="inline-flex items-center gap-1.5">
                        <FileText className="h-3.5 w-3.5 text-[#6F8065]" />
                        PDF
                      </span>
                      <span className="text-[#666666]/40">&middot;</span>
                      <span>{resource.fileSize}</span>
                    </div>

                    <h3 className="mb-3 font-serif text-xl font-semibold leading-snug text-[#171717] transition-colors group-hover:text-[#173A2B]">
                      {resource.title}
                    </h3>

                    <p className="mb-5 text-sm leading-relaxed text-[#666666] line-clamp-3">
                      {resource.description}
                    </p>

                    <span className="mt-auto inline-flex items-center gap-1.5 border-t border-[#6F8065]/10 pt-4 text-xs font-bold uppercase tracking-wider text-[#B83A3A]">
                      <span>Get the free PDF</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Ad — bottom of hub */}
        <div className="mb-14 border-y border-[#6F8065]/15 bg-[#FDFBF6] py-2">
          <AdBanner />
        </div>

        {/* Newsletter */}
        <Newsletter />
      </div>
    </div>
  );
};
