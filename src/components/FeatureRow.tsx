import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

interface FeatureRowProps {
  image: string;
  imageAlt: string;
  badge: string;
  title: React.ReactNode;
  description: React.ReactNode;
  /** Optional checklist rendered under the description. */
  points?: string[];
  /** Optional footer content (buttons, form, links...). */
  children?: React.ReactNode;
  /** true = image on the RIGHT, text on the LEFT. */
  imageRight?: boolean;
  /** Soft tinted background band behind the whole row. */
  tone?: 'plain' | 'cream' | 'mint';
  /** Render the image at its natural size instead of a fixed 4/3 crop. */
  naturalSize?: boolean;
}

const toneClasses: Record<string, string> = {
  plain: 'bg-white',
  cream: 'bg-[#FDFBF6]',
  mint: 'bg-[#F3F7F1]/70',
};

export const FeatureRow: React.FC<FeatureRowProps> = ({
  image,
  imageAlt,
  badge,
  title,
  description,
  points,
  children,
  imageRight = false,
  tone = 'plain',
  naturalSize = false,
}) => {
  return (
    <section className={`${toneClasses[tone]} px-4 sm:px-6 lg:px-8 py-14 md:py-20`}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`relative ${imageRight ? 'lg:order-2' : 'lg:order-1'}`}
        >
          {/* Soft offset "cozy" backdrop */}
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2.25rem] border-2 border-dashed border-[#6F8065]/35 bg-[#F3F7F1]"
          />
          <div className="relative overflow-hidden rounded-[2.25rem] border border-[#6F8065]/25 bg-white shadow-[0_24px_60px_-32px_rgba(23,58,43,0.55)]">
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              referrerPolicy="no-referrer"
              className={
                naturalSize
                  ? 'block h-auto w-full'
                  : 'aspect-[4/3] w-full object-cover'
              }
            />
            {/* cute floating sticker */}
            <span className="absolute bottom-4 left-4 rounded-full border border-[#6F8065]/25 bg-white/95 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#173A2B] shadow-md backdrop-blur-sm">
              {badge}
            </span>
          </div>
        </motion.div>

        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className={`${imageRight ? 'lg:order-1' : 'lg:order-2'}`}
        >
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#B83A3A]/20 bg-[#B83A3A]/8 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#B83A3A]">
            {badge}
          </span>

          <h2 className="font-serif text-[1.75rem] leading-[1.2] font-bold tracking-tight text-[#171717] sm:text-4xl">
            {title}
          </h2>

          <div className="mt-4 space-y-3.5 text-[15px] leading-relaxed text-[#5A5A5A] sm:text-base">
            {description}
          </div>

          {points && points.length > 0 && (
            <ul className="mt-6 grid gap-2.5">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-[#171717]/85">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6F8065]/15 text-[#173A2B]">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}

          {children && <div className="mt-7">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
};
