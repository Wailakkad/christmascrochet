import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Sparkles } from 'lucide-react';
import { SearchModal } from './SearchModal';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
    { label: 'Free Patterns', path: '/free-patterns' },
    { label: 'Christmas Crochet Projects', path: '/blog/christmas-crochet-projects' },
    { label: 'Christmas Crochet Blankets', path: '/blog/christmas-crochet-blanket' },
    { label: 'About', path: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#6F8065]/15 py-3'
            : 'bg-white border-b border-[#6F8065]/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group transition-transform"
            >
              <div className="w-8 h-8 rounded-full bg-[#6F8065]/15 flex items-center justify-center text-[#173A2B] group-hover:bg-[#B83A3A] group-hover:text-white transition-colors">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl md:text-22px font-bold text-[#173A2B] leading-none tracking-tight">
                  Christmas Crochet Patterns Free
                </span>
                <span className="text-[10px] tracking-wider uppercase text-[#6F8065] font-semibold mt-0.5">
                  Holiday Inspiration & Free Guides
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors ${
                    isActive(link.path)
                      ? 'text-[#B83A3A] bg-[#F3F7F1]'
                      : 'text-[#171717] hover:text-[#173A2B] hover:bg-[#F3F7F1]/60'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Header Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-xl text-[#666666] hover:text-[#173A2B] hover:bg-[#F3F7F1] transition-colors flex items-center gap-1.5 text-xs font-medium"
                aria-label="Search crochet patterns"
                title="Search patterns & projects"
              >
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline text-[#666666]">Search</span>
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-[#171717] hover:bg-[#F3F7F1] transition-colors"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#6F8065]/15 px-4 pt-3 pb-6 animate-fadeIn">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive(link.path)
                      ? 'text-[#B83A3A] bg-[#F3F7F1]'
                      : 'text-[#171717] hover:bg-[#F3F7F1]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-3 border-t border-[#6F8065]/10 mt-2">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsSearchOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#F3F7F1] text-[#173A2B] text-xs font-semibold"
                >
                  <Search className="w-4 h-4" />
                  <span>Search All 90+ Holiday Projects</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
