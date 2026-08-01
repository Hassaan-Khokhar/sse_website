"use client";
import React from 'react';
import { BENTO_GALLERY } from '../data/schoolData';
import { GalleryItem } from '../types';
import { Maximize2, Image as ImageIcon } from 'lucide-react';

interface CampusLifeGalleryProps {
  onOpenLightbox: (item?: GalleryItem) => void;
}

export const CampusLifeGallery: React.FC<CampusLifeGalleryProps> = ({ onOpenLightbox }) => {
  return (
    <section id="campus-life" className="py-12 md:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-[#496800] font-semibold text-xs md:text-sm tracking-widest uppercase mb-3 block">
              Glimpse of Excellence
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-[#0e3566]">
              Discover Campus Life
            </h2>
          </div>
          <button
            onClick={() => onOpenLightbox()}
            className="border-b-2 border-[#0e3566] pb-1 text-[#0e3566] font-bold text-sm md:text-base hover:text-[#496800] hover:border-[#496800] transition-all flex items-center gap-2 cursor-pointer group"
          >
            <span>View Full Gallery</span>
            <ImageIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[600px] md:min-h-[500px]">
          {BENTO_GALLERY.slice(0, 5).map((item) => {
            const isLarge = item.colSpan === 'md:col-span-2' || item.rowSpan === 'md:row-span-2';
            
            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className={`${item.colSpan || ''} ${item.rowSpan || ''} rounded-2xl overflow-hidden relative group cursor-pointer bento-hover bg-[#eae7e7] ${isLarge ? 'min-h-[300px]' : 'min-h-[220px]'}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end ${isLarge ? 'p-6 md:p-8' : 'p-5 md:p-6'}`}>
                  <span className={`${isLarge ? 'bg-[#c2f366] text-[#131f00] px-3 py-1 rounded-full w-max mb-2' : 'text-[#c2f366] mb-1'} text-[10px] font-bold uppercase tracking-widest`}>
                    {item.category}
                  </span>
                  <h3 className={`text-white font-bold font-headline ${isLarge ? 'text-xl md:text-2xl mb-1' : 'text-lg mb-1'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-white/80 text-xs ${isLarge ? 'md:text-sm line-clamp-2' : 'line-clamp-2'}`}>
                    {item.description}
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
