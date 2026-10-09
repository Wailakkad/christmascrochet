import React, { useEffect, useState } from 'react';
import { Mail, Download, Loader2, CheckCircle2, AlertCircle, Gift } from 'lucide-react';
import {
  APPS_SCRIPT_URL,
  FREE_GUIDE_PDF_URL,
  FREE_GUIDE_PDF_FILENAME,
  isAppsScriptConfigured,
} from '../config';

type Status = 'idle' | 'sending' | 'success' | 'error';

const STORAGE_KEY = 'freeGuideUnlocked';

interface EmailGateFormProps {
  /** Shows the compact trust row under the button (great for the hero). */
  showTrustRow?: boolean;
  /** Extra classes for the outer wrapper. */
  className?: string;
}

export const EmailGateForm: React.FC<EmailGateFormProps> = ({
  showTrustRow = true,
  className = '',
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === '1') {
        setStatus('success');
      }
    } catch {
      // sessionStorage unavailable — ignore
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;

    const cleanEmail = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(cleanEmail)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('sending');
    setMessage('');

    if (!isAppsScriptConfigured()) {
      // Endpoint not wired yet — still let the visitor grab the guide.
      setStatus('success');
      setMessage('');
      return;
    }

    const body = new URLSearchParams();
    body.append('email', cleanEmail);
    body.append('source', '/free-guide');
    body.append('referrer', document.referrer || '');
    body.append('campaign', 'free-guide-landing');

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: body.toString(),
      });

      // Apps Script responses are opaque (CORS), so we confirm after the
      // request is dispatched. A short delay keeps the UI feeling intentional.
      await new Promise((resolve) => setTimeout(resolve, 700));

      try {
        sessionStorage.setItem(STORAGE_KEY, '1');
      } catch {
        // ignore
      }
      setStatus('success');
    } catch {
      setStatus('error');
      setMessage('We could not save your email. Please check your connection and try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className={className}>
        <div className="rounded-3xl border-2 border-dashed border-[#6F8065]/45 bg-white p-5 sm:p-6 shadow-[0_10px_30px_-18px_rgba(23,58,43,0.45)]">
          <div className="flex items-start gap-3 mb-4">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F3F7F1] text-[#173A2B]">
              <CheckCircle2 className="h-5 w-5" />
            </span>
            <div>
              <p className="font-serif text-lg font-bold text-[#173A2B] leading-snug">
                You&apos;re in! Your free guide is ready.
              </p>
              <p className="text-sm text-[#666666] mt-0.5">
                We also sent a copy to your inbox so you never lose it.
              </p>
            </div>
          </div>

          <a
            href={FREE_GUIDE_PDF_URL}
            download={FREE_GUIDE_PDF_FILENAME}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#B83A3A] px-6 py-4 text-sm font-bold text-white shadow-[0_12px_28px_-12px_rgba(184,58,58,0.85)] transition-all hover:bg-[#9F2C2C] hover:shadow-[0_16px_32px_-12px_rgba(184,58,58,0.9)]"
          >
            <Download className="h-4.5 w-4.5 transition-transform group-hover:translate-y-0.5" />
            <span>Download the Free PDF Guide</span>
          </a>

          <p className="mt-3 text-center text-xs text-[#666666]">
            15 MB &middot; Instant access &middot; No payment details, ever
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className} noValidate>
      <div className="rounded-3xl border-2 border-dashed border-[#6F8065]/45 bg-white p-5 sm:p-6 shadow-[0_10px_30px_-18px_rgba(23,58,43,0.45)]">
        <div className="mb-3.5 flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B83A3A]/10 text-[#B83A3A]">
            <Gift className="h-4 w-4" />
          </span>
          <p className="font-serif text-base font-bold text-[#173A2B]">
            Get the free PDF sent to you
          </p>
        </div>

        <label
          htmlFor="free-guide-email"
          className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#666666]"
        >
          Your best email
        </label>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6F8065]" />
            <input
              id="free-guide-email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') setStatus('idle');
              }}
              className="w-full rounded-2xl border border-[#6F8065]/30 bg-[#FDFCF9] py-3.5 pl-11 pr-4 text-sm text-[#171717] placeholder:text-[#9A9A9A] outline-none transition-all focus:border-[#6F8065] focus:ring-4 focus:ring-[#6F8065]/15"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#B83A3A] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_28px_-14px_rgba(184,58,58,0.9)] transition-all hover:bg-[#9F2C2C] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === 'sending' ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Saving&hellip;</span>
              </>
            ) : (
              <>
                <span>Send My Free Guide</span>
                <Download className="h-4 w-4" />
              </>
            )}
          </button>
        </div>

        {status === 'error' && message && (
          <p className="mt-2.5 flex items-center gap-1.5 text-xs font-medium text-[#B83A3A]">
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            {message}
          </p>
        )}

        {showTrustRow && (
          <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#666666]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#6F8065]" />
              Instant download
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#6F8065]" />
              100% free, no card
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#6F8065]" />
              Unsubscribe anytime
            </span>
          </div>
        )}
      </div>
    </form>
  );
};
