import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Newsletter } from '../components/Newsletter';
import { siteImages } from '../assets/images';
import { Heart, Sparkles, Gift, BookOpen, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us – Christmas Crochet Patterns Free';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Breadcrumbs items={[{ label: 'About' }]} />

      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#6F8065]/15 text-[#173A2B] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#B83A3A]" />
          <span>Our Story & Craft Mission</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] tracking-tight mb-4">
          Celebrating the Magic of a Handmade Christmas
        </h1>
        <p className="text-[#666666] text-base sm:text-lg leading-relaxed">
          We believe the holiday season is made richer, slower, and sweeter through the rhythm of crochet stitches made with love.
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-sm border border-[#6F8065]/20 bg-[#F3F7F1]">
        <img
          src={siteImages.heroHome}
          alt="Warm Christmas crochet holiday workshop with yarn and handmade decor"
          loading="eager"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Story Sections */}
      <div className="space-y-8 text-base md:text-lg text-[#171717] leading-relaxed font-normal">
        <section>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#173A2B] mb-3">
            Why We Started Christmas Crochet Patterns Free
          </h2>
          <p className="text-[#666666] mb-4">
            In our fast-paced modern world, the winter holidays have increasingly turned toward rush, commercialism, and synthetic disposable novelties. But when you pick up a wooden crochet hook, pull cozy wool through your fingers, and stitch an ornament or blanket round by round, time slows down.
          </p>
          <p className="text-[#666666]">
            We founded <strong>Christmas Crochet Patterns Free</strong> to be an inspiring, peaceful winter sanctuary for crafters of all skill tiers. Our mission is to curate the internet's most comprehensive, aesthetically sophisticated collections of free holiday crochet ideas—without paywalls, hidden fees, or gatekeeping.
          </p>
        </section>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          <div className="p-6 rounded-2xl bg-[#F3F7F1] border border-[#6F8065]/15">
            <Heart className="w-6 h-6 text-[#B83A3A] mb-3" />
            <h3 className="font-serif text-lg font-bold text-[#173A2B] mb-2">
              Accessible to All
            </h3>
            <p className="text-xs text-[#666666] leading-relaxed">
              Every curated roundup, stitch guide, and project recommendation is 100% free and open for every maker.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F3F7F1] border border-[#6F8065]/15">
            <Gift className="w-6 h-6 text-[#6F8065] mb-3" />
            <h3 className="font-serif text-lg font-bold text-[#173A2B] mb-2">
              Heirloom Mindset
            </h3>
            <p className="text-xs text-[#666666] leading-relaxed">
              We champion timeless textures, elevated palettes, and durable fibers made to be passed down through generations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F3F7F1] border border-[#6F8065]/15">
            <BookOpen className="w-6 h-6 text-[#173A2B] mb-3" />
            <h3 className="font-serif text-lg font-bold text-[#173A2B] mb-2">
              Community Respect
            </h3>
            <p className="text-xs text-[#666666] leading-relaxed">
              We celebrate original designers, traditional folk craft techniques, and independent pattern innovators worldwide.
            </p>
          </div>
        </div>

        <section className="pt-4 border-t border-[#6F8065]/15">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#173A2B] mb-3">
            Join Our Cozy Holiday Making Community
          </h2>
          <p className="text-[#666666] mb-6">
            Whether you have only an hour to whip up a festive peppermint coaster or 40 hours to pour into an intricate Nordic afghan, we are delighted to walk alongside you in your holiday making journey.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/blog/christmas-crochet-projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#173A2B] text-white text-xs font-semibold hover:bg-[#122E22] transition-colors"
            >
              <span>Explore Christmas Crochet Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/blog/christmas-crochet-blanket"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#173A2B] border border-[#6F8065]/30 text-xs font-semibold hover:bg-[#F3F7F1] transition-colors"
            >
              <span>Browse Cozy Blankets</span>
            </Link>
          </div>
        </section>
      </div>

      <div className="mt-16">
        <Newsletter />
      </div>
    </div>
  );
};
