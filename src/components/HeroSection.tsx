"use client";
import React from 'react';
import { HERO_BG } from '../data/schoolData';
import { ArrowDown, GraduationCap, PlayCircle, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onExplorePrograms: () => void;
  onOpenVirtualTour: () => void;
  onScrollNext: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplorePrograms,
  onOpenVirtualTour,
  onScrollNext,
}) => {
  return (
    <section id="hero" className="relative md:min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[#0a192f] pt-40 pb-28 md:pt-32 md:pb-24">
      {/* Dynamic Background Image with Modern Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-pan"
          style={{ backgroundImage: `url('${HERO_BG}')` }}
        />
        {/* Modern dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C3B5E]/95 via-[#1C3B5E]/90 to-[#1C3B5E]/80 md:to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/50 md:via-transparent to-[#1C3B5E]/30" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex-grow flex items-center">
        <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
          
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left text-white mt-8 md:mt-0">
            
            {/* Empty space maintaining previous badge height to prevent layout shift */}
            <div className="h-10 mb-6 md:mb-8"></div>

            {/* Headline */}
            <h1 className="font-headline text-[2.5rem] leading-[1.1] md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 md:mb-12 drop-shadow-2xl animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              Inspiring Excellence,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70 relative inline-block">
                Building Leaders
                <svg className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-2 md:h-3 text-[#9cd349]/80" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q 50 20 100 10" fill="transparent" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-body text-base md:text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed mb-10 font-light border-l-0 lg:border-l-4 border-[#9cd349] pl-0 lg:pl-6 px-4 lg:px-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              Experience a transformative education dedicated to nurturing the next generation of visionaries.
            </p>

            {/* Modern CTA Group */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: '450ms' }}>
              <button
                onClick={onExplorePrograms}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#9cd349] hover:bg-white text-[#1a365d] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(156,211,73,0.3)] group cursor-pointer"
              >
                <span>Explore Programs</span>
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#1a365d]/10 flex items-center justify-center group-hover:bg-[#1a365d] transition-colors">
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:text-white" />
                </div>
              </button>

              <button
                onClick={onOpenVirtualTour}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 backdrop-blur-sm cursor-pointer group"
              >
                <PlayCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#9cd349] group-hover:scale-110 transition-transform" />
                <span>Virtual Tour</span>
              </button>
            </div>
            
          </div>
        </div>
      </div>



    </section>
  );
};
