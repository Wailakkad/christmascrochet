import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="my-16 md:my-20 rounded-3xl bg-gradient-to-br from-[#173A2B] to-[#1F4C39] text-white p-8 md:p-12 relative overflow-hidden shadow-lg border border-[#6F8065]/30">
      {/* Subtle decorative background glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#6F8065]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#B83A3A]/20 blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-[#F3F7F1] border border-white/20 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#B83A3A]" />
          <span>Cozy Seasonal Mail</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-tight">
          Never Miss a Free Christmas Crochet Pattern
        </h2>

        <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8">
          Join our holiday community of makers! Receive weekly curated Christmas crochet ideas, cozy winter blanket patterns, and beginner project tips straight to your inbox.
        </p>

        {submitted ? (
          <div className="p-4 rounded-xl bg-white/15 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span className="font-medium text-sm">
              Welcome to our cozy crochet circle! Check your inbox for festive inspiration.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="w-4 h-4 text-white/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/25 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-[#B83A3A] text-white text-sm font-semibold hover:bg-[#9F2C2C] shadow-md transition-all whitespace-nowrap"
            >
              Get Free Patterns
            </button>
          </form>
        )}

        <p className="text-white/60 text-xs mt-4">
          Zero spam. Unsubscribe anytime with one click.
        </p>
      </div>
    </section>
  );
};
