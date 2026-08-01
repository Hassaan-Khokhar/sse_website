"use client";
import React from 'react';
import { DIRECTOR_IMG } from '../data/schoolData';
import { Quote } from 'lucide-react';

export const DirectorsMessage: React.FC = () => {
  return (
    <section className="py-12 md:py-32 bg-[#fcf9f8]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="bg-[#2b4c7e] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Director Photo Frame */}
            <div className="relative min-h-[420px] lg:min-h-[520px]">
              <img
                src={DIRECTOR_IMG}
                alt="Syed Aoon Raza Sherazi - Director & Founder"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e3566]/80 via-transparent to-transparent lg:hidden" />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 lg:right-auto bg-white/15 backdrop-blur-lg p-6 rounded-2xl border border-white/20 text-white shadow-xl">
                <h4 className="font-bold text-lg md:text-xl mb-0.5 tracking-tight font-headline">
                  Syed Aoon Raza Sherazi
                </h4>
                <p className="text-white/80 text-xs md:text-sm font-medium tracking-wide">
                  Chairman SSE
                </p>
              </div>
            </div>

            {/* Quote & Philosophy */}
            <div className="p-8 md:p-14 lg:p-20 flex flex-col justify-center bg-[#0e3566] text-white">
              <span className="material-symbols-outlined text-5xl md:text-6xl text-[#c2f366] opacity-70 mb-6">
                format_quote
              </span>
              
              <blockquote className="font-headline text-xl md:text-2xl lg:text-3xl italic mb-8 leading-relaxed text-white font-normal">
                "Education is not just about imparting knowledge; it is about inspiring a lifelong love for learning and cultivating the values that make a true exceptional citizen."
              </blockquote>

              <div className="h-[2px] w-16 bg-[#c2f366] mb-8 rounded-full" />

              <p className="font-body text-base md:text-lg text-white/85 leading-relaxed font-light">
                At SSE, we believe in the transformative power of education. Our mission is to provide an environment where intellectual curiosity is celebrated and moral character is forged.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
