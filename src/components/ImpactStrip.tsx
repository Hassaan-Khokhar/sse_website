"use client";
import React from 'react';

export const ImpactStrip: React.FC = () => {
  const stats = [
    { value: '25+', label: 'Years of Excellence', sub: 'Experience in Teaching' },
    { value: '5000+', label: 'Proud Alumni', sub: 'Across the Nation' },
    { value: '100%', label: 'Board Pass Rate', sub: 'Distinction Standard' },
    { value: '40+', label: 'Extracurriculars', sub: 'Clubs & Academies' },
  ];

  return (
    <section className="relative z-20 -mt-10 md:-mt-14 max-w-[1280px] mx-auto px-4 md:px-16">
      <div className="bg-[#0e3566] text-white py-8 md:py-10 px-6 md:px-12 rounded-2xl shadow-2xl border border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-8 md:divide-x divide-white/15">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center transition-transform hover:-translate-y-1 duration-300 md:px-6"
            >
              <div className="text-[#c2f366] text-3xl md:text-4xl font-extrabold tracking-tight mb-1 font-headline">
                {stat.value}
              </div>
              <p className="text-xs md:text-sm font-semibold text-white/90 uppercase tracking-wide">
                {stat.label}
              </p>
              <span className="text-[10px] text-white/60 hidden sm:block mt-0.5">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
