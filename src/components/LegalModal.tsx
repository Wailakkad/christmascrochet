import React from 'react';
import { X, Shield, FileText, Mail, Send, CheckCircle2 } from 'lucide-react';

export type LegalModalType = 'privacy' | 'disclaimer' | 'contact' | null;

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const [sent, setSent] = React.useState(false);
  const [contactName, setContactName] = React.useState('');
  const [contactEmail, setContactEmail] = React.useState('');
  const [contactMessage, setContactMessage] = React.useState('');

  if (!type) return null;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-[#6F8065]/20 overflow-hidden max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-[#6F8065]/15 flex items-center justify-between bg-[#F3F7F1]/50">
          <div className="flex items-center gap-2 text-[#173A2B]">
            {type === 'privacy' && <Shield className="w-5 h-5 text-[#6F8065]" />}
            {type === 'disclaimer' && <FileText className="w-5 h-5 text-[#6F8065]" />}
            {type === 'contact' && <Mail className="w-5 h-5 text-[#6F8065]" />}
            <h3 className="font-serif text-lg font-bold">
              {type === 'privacy' && 'Privacy Policy'}
              {type === 'disclaimer' && 'Affiliate & Pattern Disclaimer'}
              {type === 'contact' && 'Contact Us'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#666666] hover:bg-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-[#171717] leading-relaxed">
          {type === 'privacy' && (
            <>
              <p>
                <strong>Christmas Crochet Patterns Free</strong> respects your privacy. We are committed to maintaining the confidentiality of any information you share with us.
              </p>
              <h4 className="font-semibold text-[#173A2B] pt-2">1. Information Collection</h4>
              <p>
                We do not require account creation or personal identification to browse our free crochet project directories, blanket guides, or articles. When subscribing to our optional holiday email newsletter, your email address is used solely for delivering crochet updates.
              </p>
              <h4 className="font-semibold text-[#173A2B] pt-2">2. Cookies & Analytics</h4>
              <p>
                We may utilize standard web analytics cookies to measure anonymous site traffic, understand popular holiday search queries, and optimize page load speeds.
              </p>
              <h4 className="font-semibold text-[#173A2B] pt-2">3. Third-Party Links & Pinterest</h4>
              <p>
                Our site includes links to Pinterest and external fiber arts platforms. We encourage reviewing the respective privacy practices of any third-party websites you visit.
              </p>
            </>
          )}

          {type === 'disclaimer' && (
            <>
              <p>
                <strong>Editorial Roundup Notice:</strong> Christmas Crochet Patterns Free provides curated inspiration, roundups, and project guidance for fiber arts enthusiasts.
              </p>
              <h4 className="font-semibold text-[#173A2B] pt-2">1. Pattern Rights & Original Creators</h4>
              <p>
                The project showcases featured in our roundups highlight traditional techniques, community project ideas, and festive inspiration. Where external designers or pattern resources are referenced, intellectual property remains with the respective designers. We do not claim ownership of third-party pattern rights.
              </p>
              <h4 className="font-semibold text-[#173A2B] pt-2">2. Safety and Skill Guidance</h4>
              <p>
                Crochet projects intended for infants or pets should be constructed with appropriate safety measures (avoiding loose choking cords, ensuring secure joins). Crafters should use their own skill assessment when selecting yarns and hooks.
              </p>
              <h4 className="font-semibold text-[#173A2B] pt-2">3. Affiliate Transparency</h4>
              <p>
                Certain resource suggestions may occasionally contain affiliate tracking links. These provide small commissions to sustain this free educational site at zero extra cost to you.
              </p>
            </>
          )}

          {type === 'contact' && (
            <>
              {sent ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-serif text-lg font-bold text-[#173A2B]">Message Received!</h4>
                  <p className="text-[#666666] text-sm">
                    Thank you for reaching out to Christmas Crochet Patterns Free. We love hearing from fellow crafters and will respond shortly.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-4 px-5 py-2 rounded-xl bg-[#173A2B] text-white text-xs font-semibold"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <p className="text-[#666666] text-xs">
                    Have a question about a holiday pattern, suggest a roundup topic, or share your finished holiday make? Send us a note below:
                  </p>
                  <div>
                    <label className="block text-xs font-semibold text-[#173A2B] mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Clara"
                      className="w-full px-3.5 py-2 rounded-xl border border-[#6F8065]/25 text-sm focus:outline-none focus:ring-2 focus:ring-[#173A2B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#173A2B] mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2 rounded-xl border border-[#6F8065]/25 text-sm focus:outline-none focus:ring-2 focus:ring-[#173A2B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#173A2B] mb-1">Message</label>
                    <textarea
                      required
                      rows={3}
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Share your feedback, question, or holiday project suggestion..."
                      className="w-full px-3.5 py-2 rounded-xl border border-[#6F8065]/25 text-sm focus:outline-none focus:ring-2 focus:ring-[#173A2B]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-[#B83A3A] text-white font-semibold text-xs hover:bg-[#9F2C2C] flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#6F8065]/15 bg-[#F3F7F1]/30 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#173A2B] hover:underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
