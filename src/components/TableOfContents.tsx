import React, { useState } from 'react';
import { ListFilter, ChevronDown, ChevronUp, BookmarkCheck } from 'lucide-react';
import { TableOfContentSection } from '../types';

interface TableOfContentsProps {
  sections: TableOfContentSection[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // offset for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (!sections || sections.length === 0) return null;

  return (
    <div className="my-8 rounded-2xl bg-[#F3F7F1] border border-[#6F8065]/20 p-5 md:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ListFilter className="w-5 h-5 text-[#173A2B]" />
          <h2 className="text-base font-semibold text-[#173A2B] tracking-tight">
            Quick Navigation & Jump to Section
          </h2>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center gap-1 text-xs text-[#666666] font-medium p-1 hover:text-[#171717]"
          aria-expanded={isOpen}
        >
          <span>{isOpen ? 'Collapse' : 'Expand'}</span>
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 pt-4 border-t border-[#6F8065]/15">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {sections.map((section, idx) => (
              <li key={section.id}>
                <button
                  onClick={() => handleScroll(section.id)}
                  className="w-full text-left flex items-start gap-2.5 group py-1.5 px-2.5 rounded-lg hover:bg-white transition-all"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#6F8065]/20 text-[#173A2B] text-xs font-semibold flex items-center justify-center group-hover:bg-[#173A2B] group-hover:text-white transition-colors">
                    {idx + 1}
                  </span>
                  <div className="flex-1">
                    <span className="text-sm font-medium text-[#171717] group-hover:text-[#B83A3A] transition-colors line-clamp-1">
                      {section.title}
                    </span>
                    {section.itemCount && (
                      <span className="text-[11px] text-[#666666] block">
                        {section.itemCount} projects
                      </span>
                    )}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
