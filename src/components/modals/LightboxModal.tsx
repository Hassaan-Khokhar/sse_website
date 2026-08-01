import React, { useState, useEffect, useCallback } from 'react';
import { BENTO_GALLERY } from '../../data/schoolData';
import { GalleryItem } from '../../types';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  initialItem?: GalleryItem;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  initialItem,
  onClose,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen && initialItem) {
      setActiveCategory('All');
      const foundIdx = BENTO_GALLERY.findIndex(item => item.id === initialItem.id);
      setCurrentIndex(foundIdx >= 0 ? foundIdx : 0);
    }
  }, [isOpen, initialItem]);

  // Lock scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const categories = ['All', 'Academics', 'Sports', 'Arts', 'Campus'];

  const filteredItems = activeCategory === 'All'
    ? BENTO_GALLERY
    : BENTO_GALLERY.filter(item => item.category === activeCategory);

  const currentItem = filteredItems[currentIndex] || BENTO_GALLERY[0];

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % filteredItems.length);
  }, [filteredItems.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
  }, [filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, handleNext, handlePrev, onClose]);

  // Swipe detection
  const minSwipeDistance = 50;
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) handleNext();
      else handlePrev();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex flex-col" style={{ backgroundColor: '#0d1117' }}>
      
      {/* ── Header ── */}
      <div className="shrink-0 flex items-center justify-between px-4 md:px-10 pt-4 pb-3 md:pt-5 md:pb-4">
        {/* Logo / Title */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#c2f366]/15 flex items-center justify-center">
            <ZoomIn className="w-4 h-4 md:w-5 md:h-5 text-[#c2f366]" />
          </div>
          <div>
            <h3 className="text-white font-headline font-bold text-sm md:text-lg leading-tight">Campus Gallery</h3>
            <p className="text-white/40 text-[10px] md:text-xs">{filteredItems.length} photos</p>
          </div>
        </div>

        {/* Desktop: Category Pills (centered in header on desktop) */}
        <div className="hidden md:flex items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentIndex(0);
              }}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap border ${
                activeCategory === cat
                  ? 'bg-[#c2f366] text-[#0e3566] border-[#c2f366] shadow-[0_0_12px_rgba(194,243,102,0.25)]'
                  : 'bg-transparent text-white/60 border-white/15 hover:border-white/30 hover:text-white/90'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Close + Counter */}
        <div className="flex items-center gap-4">
          <span className="hidden md:block text-white/40 text-sm font-mono">
            {String(currentIndex + 1).padStart(2, '0')} / {String(filteredItems.length).padStart(2, '0')}
          </span>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 text-white/80 flex items-center justify-center hover:bg-white/20 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* ── Mobile Category Pills (only on mobile) ── */}
      <div className="shrink-0 px-4 pb-3 md:hidden">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentIndex(0);
              }}
              className={`px-4 py-1.5 rounded-full text-[11px] font-semibold transition-all cursor-pointer whitespace-nowrap border ${
                activeCategory === cat
                  ? 'bg-[#c2f366] text-[#0e3566] border-[#c2f366] shadow-[0_0_12px_rgba(194,243,102,0.25)]'
                  : 'bg-transparent text-white/60 border-white/15 hover:border-white/30 hover:text-white/90'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Image Viewer (fills remaining space) ── */}
      <div
        className="flex-1 min-h-0 relative flex items-center justify-center px-3 md:px-24 lg:px-32 py-2 md:py-4"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Image Container */}
        <div className="relative w-full h-full max-w-6xl mx-auto flex items-center justify-center">
          {/* Desktop: Subtle frame */}
          <div className="relative w-full h-full flex items-center justify-center md:rounded-2xl md:overflow-hidden md:border md:border-white/[0.08] md:bg-white/[0.02]">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="max-h-full max-w-full object-contain rounded-lg md:rounded-none select-none"
              draggable={false}
            />

            {/* Desktop: Caption overlay at bottom of image */}
            <div className="hidden md:flex absolute bottom-0 left-0 right-0 items-end justify-between px-8 py-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <div className="min-w-0">
                <span className="text-[#c2f366] text-xs font-bold uppercase tracking-widest mb-1.5 block">
                  {currentItem.category}
                </span>
                <h4 className="font-headline font-bold text-2xl text-white leading-snug mb-1">
                  {currentItem.title}
                </h4>
                <p className="text-white/60 text-sm max-w-xl line-clamp-2 leading-relaxed">
                  {currentItem.description}
                </p>
              </div>
              {/* Desktop: Dots inside image overlay */}
              <div className="flex items-center gap-1.5 shrink-0 ml-8">
                {filteredItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentIndex
                        ? 'w-6 h-2 bg-[#c2f366]'
                        : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Nav Arrows (inside image area, larger, with hover glow) */}
          {filteredItems.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="hidden md:flex absolute left-6 lg:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/40 backdrop-blur-md text-white items-center justify-center hover:bg-[#c2f366] hover:text-[#0e3566] hover:shadow-[0_0_20px_rgba(194,243,102,0.3)] transition-all cursor-pointer"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                onClick={handleNext}
                className="hidden md:flex absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/40 backdrop-blur-md text-white items-center justify-center hover:bg-[#c2f366] hover:text-[#0e3566] hover:shadow-[0_0_20px_rgba(194,243,102,0.3)] transition-all cursor-pointer"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* ── Mobile Bottom Info Bar (hidden on desktop) ── */}
      <div className="shrink-0 px-4 pt-4 pb-5 md:hidden">
        <div className="max-w-5xl mx-auto">
          {/* Progress Dots + Counter */}
          <div className="flex items-center justify-between mb-3">
            {/* Dot Indicators */}
            <div className="flex items-center gap-1.5">
              {filteredItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? 'w-6 h-2 bg-[#c2f366]'
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            <span className="text-white/40 text-xs font-mono">
              {String(currentIndex + 1).padStart(2, '0')} / {String(filteredItems.length).padStart(2, '0')}
            </span>
          </div>

          {/* Caption */}
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <span className="text-[#c2f366] text-[10px] font-bold uppercase tracking-widest mb-1 block">
                {currentItem.category}
              </span>
              <h4 className="font-headline font-bold text-lg text-white leading-snug">
                {currentItem.title}
              </h4>
              <p className="text-white/50 text-xs mt-1 line-clamp-2 leading-relaxed">
                {currentItem.description}
              </p>
            </div>

            {/* Mobile Nav Arrows */}
            {filteredItems.length > 1 && (
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center active:bg-[#c2f366] active:text-[#0e3566] transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center active:bg-[#c2f366] active:text-[#0e3566] transition-all cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
