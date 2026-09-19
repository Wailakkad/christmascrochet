import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart } from 'lucide-react';
import { LegalModal, LegalModalType } from './LegalModal';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<LegalModalType>(null);

  return (
    <>
      <footer className="bg-[#173A2B] text-white pt-16 pb-12 border-t border-[#6F8065]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-4">
              <Link to="/" className="inline-flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <Sparkles className="w-4 h-4 text-[#B83A3A]" />
                </div>
                <span className="font-serif text-xl font-bold text-white tracking-tight">
                  Christmas Crochet Patterns Free
                </span>
              </Link>

              <p className="text-white/75 text-sm leading-relaxed max-w-sm font-normal">
                Your dedicated holiday haven for free Christmas crochet patterns, festive project roundups, heirloom blanket inspiration, and beginner-friendly tutorials.
              </p>

              <div className="pt-2">
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#E60023] text-white text-xs font-semibold hover:bg-[#CC001F] transition-colors shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.365-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                  <span>Pin With Us on Pinterest</span>
                </a>
              </div>
            </div>

            {/* Explore Column */}
            <div>
              <h4 className="font-semibold text-xs uppercase tracking-wider text-[#8E9E84] mb-4">
                Explore
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/" className="text-white/80 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-white/80 hover:text-white transition-colors">
                    All Blog Posts
                  </Link>
                </li>
                <li>
                  <Link to="/blog/christmas-crochet-projects" className="text-white/80 hover:text-white transition-colors">
                    Christmas Crochet Projects
                  </Link>
                </li>
                <li>
                  <Link to="/blog/christmas-crochet-blanket" className="text-white/80 hover:text-white transition-colors">
                    Christmas Crochet Blankets
                  </Link>
                </li>
              </ul>
            </div>

            {/* About & Contact */}
            <div>
              <h4 className="font-semibold text-xs uppercase tracking-wider text-[#8E9E84] mb-4">
                About
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                    About the Brand
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setLegalModal('contact')}
                    className="text-white/80 hover:text-white transition-colors text-left"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>

              <h4 className="font-semibold text-xs uppercase tracking-wider text-[#8E9E84] mt-6 mb-4">
                Resources
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/blog/30-christmas-crochet-projects-to-make-for-the-holidays" className="text-white/80 hover:text-white transition-colors">
                    30+ Holiday Projects
                  </Link>
                </li>
                <li>
                  <Link to="/blog/20-christmas-crochet-blanket-patterns-for-a-cozy-holiday-home" className="text-white/80 hover:text-white transition-colors">
                    20+ Holiday Blankets
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="font-semibold text-xs uppercase tracking-wider text-[#8E9E84] mb-4">
                Legal & Transparency
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button
                    onClick={() => setLegalModal('privacy')}
                    className="text-white/80 hover:text-white transition-colors text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLegalModal('disclaimer')}
                    className="text-white/80 hover:text-white transition-colors text-left"
                  >
                    Pattern Disclaimer
                  </button>
                </li>
              </ul>

              <div className="mt-6 p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-white/70 leading-normal">
                Curated roundups honoring community designers. All project credits belong to original pattern creators.
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
            <p>
              &copy; {new Date().getFullYear()} Christmas Crochet Patterns Free. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Crafted with <Heart className="w-3.5 h-3.5 text-[#B83A3A] fill-current" /> for cozy holiday makers
            </p>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
    </>
  );
};
