import React from 'react';
import { WELCOME_IMG } from '../data/schoolData';
import { CheckCircle2, ArrowRight, Award, Globe } from 'lucide-react';

interface WelcomeSectionProps {
  onOpenStory: () => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onOpenStory }) => {
  return (
    <section id="about-us" className="py-12 md:py-32 max-w-[1280px] mx-auto px-4 md:px-16 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Asymmetric Image Frame */}
        <div className="lg:col-span-7 relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10 group bg-[#eae7e7]">
            <img
              src={WELCOME_IMG}
              alt="Diverse students collaborating in library"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            {/* Overlay Chip */}
            <div className="absolute bottom-3 left-3 md:bottom-6 md:left-6 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-lg border border-white/40 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0e3566] text-[#c2f366] flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[#747780] uppercase tracking-wider font-medium">Accreditation</p>
                <p className="text-sm font-bold text-[#0e3566]">Board of Secondary Education Sargodha</p>
              </div>
            </div>
          </div>

          {/* Decorative Blur Orbs */}
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#496800]/15 rounded-full -z-0 blur-3xl" />
          <div className="absolute -top-8 -left-8 w-48 h-48 bg-[#0e3566]/10 rounded-full -z-0 blur-2xl" />
        </div>

        {/* Right Side: Copy & Advantages */}
        <div className="lg:col-span-5">
          <span className="text-[#496800] font-semibold text-xs md:text-sm tracking-widest uppercase mb-4 block">
            The Superior Advantage
          </span>

          <h2 className="font-headline text-3xl md:text-4xl lg:text-[40px] font-bold text-[#0e3566] mb-6 leading-tight">
            A Legacy of Academic and Personal Growth
          </h2>

          <p className="font-body text-base md:text-lg text-[#43474f] mb-8 leading-relaxed">
            Founded on the principles of integrity and excellence, we offer an environment where every student is encouraged to explore their unique potential.
          </p>

          <ul className="space-y-4 mb-10">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#496800] shrink-0 mt-0.5" />
              <span className="text-sm md:text-base text-[#1c1b1b] font-medium">
                Personalized mentorship programs for every student.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#496800] shrink-0 mt-0.5" />
              <span className="text-sm md:text-base text-[#1c1b1b] font-medium">
                Community engagement opportunities with partner institutions.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-[#0e3566] shrink-0 mt-0.5" />
              <span className="text-sm md:text-base text-[#1c1b1b] font-medium">
                State-of-the-art STEM laboratories and AI learning commons.
              </span>
            </li>
          </ul>

          <button
            onClick={onOpenStory}
            className="inline-flex items-center gap-2 text-[#0e3566] font-bold text-base hover:text-[#496800] transition-colors group cursor-pointer"
          >
            <span>Read Our Story</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
