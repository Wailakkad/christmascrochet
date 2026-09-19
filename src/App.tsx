import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { BlogIndexPage } from './pages/BlogIndexPage';
import { CategoryPage } from './pages/CategoryPage';
import { ArticlePage } from './pages/ArticlePage';
import { AboutPage } from './pages/AboutPage';
import { AdBanner } from './components/AdBanner';

// Scroll to top helper on route navigation unless an anchor hash is present
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const yOffset = -90;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-[#171717] font-sans antialiased selection:bg-[#6F8065]/20 selection:text-[#173A2B]">
        <Header />
        <main className="flex-1">
          <AdBanner />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogIndexPage />} />
            
            {/* Category Pages */}
            <Route path="/blog/christmas-crochet-projects" element={<CategoryPage />} />
            <Route path="/blog/christmas-crochet-blanket" element={<CategoryPage />} />
            <Route path="/blog/category/:categorySlug" element={<CategoryPage />} />

            {/* Individual Article Roundup Pages */}
            <Route path="/blog/:slug" element={<ArticlePage />} />

            {/* About Page */}
            <Route path="/about" element={<AboutPage />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
