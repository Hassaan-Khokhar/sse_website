"use client";
import React from 'react';
import { Instagram, Facebook, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { SCHOOL_LOGO } from '../data/schoolData';

interface FooterProps {
  onShowToast: (msg: string) => void;
  onOpenModal: (type: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onShowToast, onOpenModal }) => {
  return (
    <footer className="relative bg-[#0a2040] text-white overflow-hidden border-t-4 border-[#c2f366]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c2f366] opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1a4b8c] opacity-[0.1] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 pt-16 pb-8 md:pt-20 md:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <svg width="0" height="0" className="absolute">
                  <filter id="footer-logo-filter" colorInterpolationFilters="sRGB">
                    <feColorMatrix type="matrix" values="1 0 0 0 0   0 1 0 0 0   0 0 1 0 0   -1 -1 -1 3 0" />
                  </filter>
                </svg>
                <img
                  src={SCHOOL_LOGO}
                  alt="SSE Logo"
                  className="h-16 object-contain drop-shadow-xl"
                  style={{ filter: 'url(#footer-logo-filter)' }}
                />
              </div>
              <div>
                <h3 className="font-headline text-2xl font-bold text-[#c2f366] tracking-tight">
                  Superior School
                </h3>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/70 font-bold mt-1">
                  of Excellence
                </p>
              </div>
            </div>
            
            <p className="font-body text-sm text-white/70 leading-relaxed mb-8 max-w-sm">
              Leading the way in holistic education and academic excellence. Nurturing the next generation of future visionaries with state-of-the-art facilities and a values-driven approach.
            </p>

            <div className="flex gap-4">
              <button onClick={() => onShowToast('Opening Instagram')} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#c2f366] hover:text-[#0e3566] transition-all hover:-translate-y-1 group">
                <Instagram className="w-4 h-4 text-white/80 group-hover:text-[#0e3566]" />
              </button>
              <button onClick={() => onShowToast('Opening Facebook')} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#c2f366] hover:text-[#0e3566] transition-all hover:-translate-y-1 group">
                <Facebook className="w-4 h-4 text-white/80 group-hover:text-[#0e3566]" />
              </button>
              <button onClick={() => onShowToast('Opening LinkedIn')} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#c2f366] hover:text-[#0e3566] transition-all hover:-translate-y-1 group">
                <Linkedin className="w-4 h-4 text-white/80 group-hover:text-[#0e3566]" />
              </button>
            </div>
          </div>

          {/* Quick Links & Contact (Cols 5-7) */}
          <div className="lg:col-span-3 flex flex-col gap-8 md:gap-12">
            <div>
              <h4 className="text-white font-bold font-headline mb-5 tracking-wide text-lg">Our Campuses</h4>
              <div className="flex flex-col gap-4">
                {['sse-boys', 'sse-girls', 'sse-preschools'].map((modalId, idx) => (
                  <button
                    key={modalId}
                    onClick={() => onOpenModal(modalId)}
                    className="text-left text-sm text-white/60 hover:text-[#c2f366] transition-colors flex items-center gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#c2f366] transition-colors shrink-0" />
                    {idx === 0 ? 'SSE Boys Campus - Kot Momin' : idx === 1 ? 'SSE Girls Campus - Kot Momin' : 'SSE Pre School - Kot Momin'}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold font-headline mb-5 tracking-wide text-lg">Contact Us</h4>
              <div className="flex flex-col gap-4 text-sm text-white/60">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#c2f366] shrink-0 mt-0.5" />
                  <span>Main Campus, Kot Momin, District Sargodha, Punjab, Pakistan</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#c2f366] shrink-0" />
                  <span>+92 300 1234567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#c2f366] shrink-0" />
                  <span>info@superiorschool.edu.pk</span>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Location (Cols 8-12) */}
          <div className="lg:col-span-5 h-[350px] lg:h-auto min-h-[300px] flex flex-col">
            <div className="flex justify-between items-end mb-4">
              <h4 className="text-white font-bold font-headline tracking-wide text-lg">Find Us Here</h4>
              <button 
                onClick={() => onOpenModal('contact')}
                className="text-[#c2f366] text-xs font-bold hover:underline transition-all hover:text-white"
              >
                Get Directions
              </button>
            </div>
            <div className="w-full flex-1 rounded-2xl overflow-hidden border-2 border-white/5 relative group shadow-2xl transition-all hover:border-[#c2f366]/30">
              {/* Map Overlay Glow */}
              <div className="absolute inset-0 bg-[#0a2040]/30 mix-blend-overlay pointer-events-none transition-opacity group-hover:opacity-0 z-10" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.068280846403!2d73.01668767426463!3d32.17543341448899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39219300171030d1%3A0xf8fb30040a98a694!2sSuperior%20School%20of%20Excellence!5e0!3m2!1sen!2s!4v1785616416671!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 z-0 grayscale-[30%] contrast-125"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p className="text-white/40 text-center md:text-left">
            © {new Date().getFullYear()} Superior School of Excellence. All Rights Reserved.
          </p>
          
          <div className="flex gap-6 text-white/40">
            <button onClick={() => onOpenModal('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => onOpenModal('terms')} className="hover:text-white transition-colors">Terms of Service</button>
          </div>

          <p className="text-white/30 text-center md:text-right flex items-center gap-1.5">
            Powered by
            <a href="https://softagelabs.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#c2f366] transition-colors flex items-center gap-1">
              Softage Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
