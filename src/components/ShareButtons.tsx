import React, { useState } from 'react';
import { Share2, Check, Copy, Bookmark } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url: string;
  mediaUrl?: string;
  description?: string;
  isSticky?: boolean;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({
  title,
  url,
  mediaUrl,
  description,
  isSticky = false
}) => {
  const [copied, setCopied] = useState(false);

  const fullUrl = typeof window !== 'undefined' ? (url.startsWith('http') ? url : `${window.location.origin}${url}`) : url;
  const pinterestMedia = mediaUrl?.startsWith('http') ? mediaUrl : (typeof window !== 'undefined' ? `${window.location.origin}${mediaUrl}` : mediaUrl);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(fullUrl)}&media=${encodeURIComponent(pinterestMedia || '')}&description=${encodeURIComponent(description || title)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`;

  if (isSticky) {
    return (
      <div className="flex flex-col items-center gap-3 py-4 bg-white/90 backdrop-blur-sm border border-[#6F8065]/15 rounded-2xl shadow-sm p-2">
        <span className="text-[10px] font-semibold tracking-wider uppercase text-[#666666]">Save</span>
        
        {/* Pinterest */}
        <a
          href={pinterestUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Save to Pinterest"
          className="w-10 h-10 rounded-full bg-[#E60023] text-white flex items-center justify-center hover:opacity-90 hover:scale-105 transition-all shadow-sm"
          aria-label="Save to Pinterest"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.365-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
          </svg>
        </a>

        {/* Copy Link */}
        <button
          onClick={handleCopy}
          title="Copy Link"
          className="w-10 h-10 rounded-full bg-[#F3F7F1] text-[#173A2B] hover:bg-[#6F8065]/20 flex items-center justify-center transition-all"
          aria-label="Copy Link"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-2.5 my-6 p-3.5 bg-[#F3F7F1] rounded-xl border border-[#6F8065]/15">
      <span className="text-xs font-semibold text-[#173A2B] flex items-center gap-1.5 mr-1">
        <Share2 className="w-4 h-4 text-[#6F8065]" />
        Share & Save:
      </span>

      {/* Pinterest Share Button */}
      <a
        href={pinterestUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E60023] text-white text-xs font-medium hover:opacity-95 hover:shadow transition-all"
      >
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.365-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
        </svg>
        <span>Pin to Pinterest</span>
      </a>

      {/* Copy Link Button */}
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#171717] border border-[#6F8065]/20 text-xs font-medium hover:bg-[#F3F7F1] transition-all"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-emerald-700 font-semibold">Link Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5 text-[#666666]" />
            <span>Copy Link</span>
          </>
        )}
      </button>

      {/* Facebook */}
      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#171717] border border-[#6F8065]/20 text-xs font-medium hover:bg-[#F3F7F1] transition-all"
      >
        <span>Facebook</span>
      </a>

      {/* X / Twitter */}
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#171717] border border-[#6F8065]/20 text-xs font-medium hover:bg-[#F3F7F1] transition-all"
      >
        <span>X / Twitter</span>
      </a>
    </div>
  );
};
