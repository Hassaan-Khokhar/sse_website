import React, { useState, useEffect, useRef } from 'react';
import { SearchResult } from '../../types';
import { PROGRAMS_LIST, EVENTS_LIST, RESOURCES_LIST } from '../../data/schoolData';
import { X, Search, ArrowRight, BookOpen, Calendar, FileText, Sparkles } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenApply: () => void;
  onOpenVirtualTour: () => void;
  onOpenProgramExplorer: () => void;
  onOpenStory: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenApply,
  onOpenVirtualTour,
  onOpenProgramExplorer,
  onOpenStory,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Build searchable index
  const index: SearchResult[] = [
    {
      id: 'apply-now',
      title: 'Online Admissions Application 2024-25',
      category: 'Admission Portal',
      snippet: 'Submit online form for Grade 1-12, O/A Levels, and IB Diploma.',
      action: () => { onClose(); onOpenApply(); }
    },
    {
      id: 'virtual-tour',
      title: 'Interactive 360° Campus Tour',
      category: 'Campus Facilities',
      snippet: 'Explore STEM lab, indoor sports arena, amphitheater & digital library.',
      action: () => { onClose(); onOpenVirtualTour(); }
    },
    {
      id: 'story',
      title: 'Superior School Legacy & Founder Message',
      category: 'About Us',
      snippet: 'History since 1999, philosophy by Adv. Saif Ur Rehman Babar.',
      action: () => { onClose(); onOpenStory(); }
    },
    {
      id: 'academics-sec',
      title: 'Academic Programs & Core Pillars',
      category: 'Academics',
      snippet: 'Holistic curriculum, Cambridge A-Levels, Expert Faculty.',
      action: () => { onClose(); onNavigate('academics'); }
    },
    ...PROGRAMS_LIST.map(p => ({
      id: `prog-${p.id}`,
      title: p.title,
      category: `Program (${p.category})`,
      snippet: p.description,
      action: () => { onClose(); onOpenProgramExplorer(); }
    })),
    ...EVENTS_LIST.map(e => ({
      id: `event-${e.id}`,
      title: e.title,
      category: 'Upcoming Event',
      snippet: `${e.day} ${e.month} • ${e.location} - ${e.description}`,
      action: () => { onClose(); onNavigate('admissions'); }
    })),
    ...RESOURCES_LIST.map(r => ({
      id: `res-${r.id}`,
      title: r.title,
      category: 'Download Resource',
      snippet: r.description,
      action: () => { onClose(); onNavigate('admissions'); }
    }))
  ];

  const results = query.trim() === ''
    ? index.slice(0, 5)
    : index.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.snippet.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#c3c6d0]/40 flex flex-col max-h-[80vh]">
        {/* Search Header Bar */}
        <div className="p-4 md:p-6 border-b border-[#c3c6d0]/30 flex items-center gap-3 bg-[#fcf9f8]">
          <Search className="w-5 h-5 text-[#0e3566] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search programs, admissions, events, prospectus..."
            className="w-full bg-transparent text-base font-medium text-[#0e3566] placeholder:text-[#747780] outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-[#747780] hover:text-[#0e3566]">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="bg-[#f6f3f2] hover:bg-[#eae7e7] text-[#43474f] text-xs font-bold px-3 py-1.5 rounded-lg shrink-0"
          >
            Esc
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-2 flex-1">
          <div className="px-2 pb-2 text-[10px] uppercase font-bold text-[#747780] tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#496800]" />
            {query.trim() === '' ? 'Suggested Direct Links' : `Search Results (${results.length})`}
          </div>

          {results.length === 0 ? (
            <div className="text-center py-12 text-[#747780] text-sm">
              No results matching "{query}". Try searching for <strong>A-Levels</strong>, <strong>Calendar</strong>, or <strong>Sports</strong>.
            </div>
          ) : (
            results.map((res) => (
              <div
                key={res.id}
                onClick={res.action}
                className="p-4 rounded-2xl bg-white hover:bg-[#f6f3f2] border border-[#c3c6d0]/20 transition-all cursor-pointer flex items-center justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0e3566] bg-[#d6e3ff] px-2 py-0.5 rounded">
                      {res.category}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-[#0e3566] group-hover:text-[#496800] transition-colors">
                    {res.title}
                  </h4>
                  <p className="text-xs text-[#747780] line-clamp-1 mt-0.5">
                    {res.snippet}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#747780] group-hover:text-[#0e3566] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
              </div>
            ))
          )}
        </div>

        {/* Footer Hotkey Helper */}
        <div className="bg-[#f6f3f2] p-3 px-6 text-[11px] text-[#747780] flex justify-between items-center border-t border-[#c3c6d0]/30">
          <span>Tip: Click any result to navigate directly</span>
          <span className="font-mono text-[10px]">Superior Directory Search</span>
        </div>
      </div>
    </div>
  );
};
