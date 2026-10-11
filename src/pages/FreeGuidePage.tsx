import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Sparkles,
  Scissors,
  Timer,
  Printer,
  ArrowRight,
  Mail,
  Inbox,
  Download,
  Heart,
} from 'lucide-react';
import { FeatureRow } from '../components/FeatureRow';
import { EmailGateForm } from '../components/EmailGateForm';
import { AdBanner } from '../components/AdBanner';

const IMAGES = {
  hero: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791582609/Person_placing_crochet_ornament_2K_20261009204952.jpg',
  kit: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791582608/Crochet_kit_items_on_background_2K_20261009204948.jpg',
  hands: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791582608/Hands_crocheting_candy_cane_coil_2K_20261009204944.jpg',
  table: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791582608/Person_crocheting_at_holiday_table_2K_20261009204940.jpg',
};

const STEPS = [
  {
    icon: Mail,
    title: 'Pop in your email',
    text: 'One field, one click. That is how we keep the guide free for everyone.',
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

export const FreeGuidePage: React.FC = () => {
  useEffect(() => {
    const title = 'Free Crochet Christmas Tree Pattern – 1-Hour Tree + 3 Ornaments PDF';
    document.title = title;

    const description =
      'Grab the free PDF guide: crochet a Christmas tree and 3 matching ornaments in about one hour. Beginner-friendly, printable, instantly delivered to your inbox.';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://christmascrochetpatternsfree.com/free-guide');

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* ---------------------------------------------------------------- */}
      {/* HERO — image LEFT / content RIGHT                                 */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FDFBF6] via-[#F3F7F1]/60 to-white px-4 pb-14 pt-10 sm:px-6 md:pb-20 md:pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#B83A3A]/8 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#6F8065]/12 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
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
                src={IMAGES.hero}
                alt="Person placing a handmade crochet ornament on a Christmas tree"
                loading="eager"
                referrerPolicy="no-referrer"
                className="block h-auto w-full"
              />
              <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/70 bg-white/92 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#B83A3A] shadow-sm backdrop-blur-sm">
                <Sparkles className="h-3 w-3" />
                Free PDF Guide
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
              Handmade holiday gift
            </span>

            <h1 className="font-serif text-[2rem] font-bold leading-[1.15] tracking-tight text-[#171717] sm:text-5xl">
              Crochet a Christmas Tree &amp; 3 Ornaments in{' '}
              <span className="relative whitespace-nowrap text-[#B83A3A]">
                One Hour
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
              A cosy, beginner-friendly pattern bundle with a little tree plus three matching
              ornaments &mdash; written in plain English with row-by-row counts, photos and a
              printable checklist. Pop your email below and it&apos;s yours, instantly.
            </p>

            <EmailGateForm className="mt-7 max-w-xl" />

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#666666]">
              <span className="flex items-center gap-1.5">
                <Timer className="h-3.5 w-3.5 text-[#6F8065]" />
                Ready in ~1 hour
              </span>
              <span className="flex items-center gap-1.5">
                <Printer className="h-3.5 w-3.5 text-[#6F8065]" />
                Print-friendly PDF
              </span>
              <span className="flex items-center gap-1.5">
                <Scissors className="h-3.5 w-3.5 text-[#6F8065]" />
                Scrap-yarn friendly
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* SECTION 2 — content LEFT / image RIGHT                            */}
      {/* ---------------------------------------------------------------- */}
      <FeatureRow
        image={IMAGES.kit}
        imageAlt="Crochet kit laid out on a cosy background with yarn, hook and notions"
        badge="What's inside"
        imageRight
        tone="cream"
        naturalSize
        title={
          <>
            Everything you need, tucked into{' '}
            <span className="text-[#173A2B]">one tidy PDF</span>
          </>
        }
        description={
          <>
            <p>
              No scrolling through ads, no clicking out to five different sites. The guide opens
              with a materials list you can shop from your stash, then walks you through each
              piece with close-up photos and stitch counts.
            </p>
            <p>
              Print it, prop it next to your hook, and work through it with a cup of cocoa &mdash;
              the layout is made for that.
            </p>
          </>
        }
        points={[
          'Full materials list with yardage for worsted & DK yarn',
          'Row-by-row written instructions + stitch abbreviation key',
          'Photos for the tricky rounds (no guesswork)',
          'Printable checklist so you can track each ornament',
          'Left-handed friendly notes included',
        ]}
      />

      {/* Ad — mid page, placed on a natural section break */}
      <div className="border-y border-[#6F8065]/15 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <AdBanner />
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* SECTION 3 — image LEFT / content RIGHT                            */}
      {/* ---------------------------------------------------------------- */}
      <FeatureRow
        image={IMAGES.hands}
        imageAlt="Hands crocheting a candy cane coloured coil in festive red and white yarn"
        badge="Beginner friendly"
        imageRight={false}
        tone="plain"
        naturalSize
        title={
          <>
            Made for first-timers, finished{' '}
            <span className="text-[#B83A3A]">before the carolers arrive</span>
          </>
        }
        description={
          <>
            <p>
              You only need a handful of basics: chain, single crochet, half double crochet and a
              little magic ring. If you can make a coaster, you can make this tree.
            </p>
            <p>
              Each step is numbered and short, so you can pick it up between wrapping presents,
              school runs or a holiday episode.
            </p>
          </>
        }
        points={[
          'Works up with DK or worsted scrap yarn and a 4mm hook',
          'One sitting per piece &mdash; roughly 20 minutes each',
          'Includes a photo tutorial for the magic ring',
          'Gauge and finished sizes listed for every piece',
          'Troubleshooting page for the classic beginner wobbles',
        ]}
      />

      {/* ---------------------------------------------------------------- */}
      {/* SECTION 4 — content LEFT / image RIGHT                            */}
      {/* ---------------------------------------------------------------- */}
      <FeatureRow
        image={IMAGES.table}
        imageAlt="Person crocheting at a warmly lit holiday table with festive decorations"
        badge="How it works"
        imageRight
        tone="mint"
        naturalSize
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
                Ready to hook your own little tree?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#666666] sm:text-base">
                Pop your email in and the PDF unlocks on the next click. No payment, no waiting,
                no catches &mdash; just a cosy evening with your hook.
              </p>
            </div>

            <EmailGateForm className="mx-auto mt-7 max-w-lg" />
          </div>

          {/* Cross-links to keep people browsing */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/blog/30-christmas-crochet-projects-to-make-for-the-holidays"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#6F8065]/30 bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#173A2B] transition-colors hover:border-[#173A2B] hover:bg-[#F3F7F1] sm:w-auto"
            >
              Browse 30+ Christmas Projects
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
        </div>
      </section>
    </div>
  );
};
