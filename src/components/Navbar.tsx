import React, { useState, useEffect } from 'react';
import { SCHOOL_LOGO } from '../data/schoolData';
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenApply: () => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenUnbuiltModal: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenApply,
  onNavigateSection,
  onOpenUnbuiltModal,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About Us', id: 'about-us' },
    { name: 'Academics', id: 'academics' },
    { name: 'Campus Life', id: 'campus-life' },
    { name: 'Careers', id: 'careers', isUnbuilt: true },
    { name: 'Contact Us', id: 'contact-us' },
  ];

  const handleLinkClick = (id: string, isUnbuilt?: boolean) => {
    if (isUnbuilt) {
      onOpenUnbuiltModal();
    } else {
      onNavigateSection(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-2 bg-[#1C3B5E]/95 backdrop-blur-xl shadow-lg shadow-[#1C3B5E]/10'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="flex items-center gap-2 sm:gap-3 text-left group cursor-pointer focus:outline-none shrink-0"
        >
          <div className="relative">
            <svg width="0" height="0" className="absolute">
              <filter id="remove-white" colorInterpolationFilters="sRGB">
                <feColorMatrix type="matrix" values="1 0 0 0 0   0 1 0 0 0   0 0 1 0 0   -1 -1 -1 3 0" />
              </filter>
            </svg>
            <img
              src={SCHOOL_LOGO}
              alt="Superior School Logo"
              className="relative h-10 w-10 md:h-14 md:w-14 lg:h-15 lg:w-15 object-contain transition-transform duration-300 group-hover:scale-105"
              style={{ filter: 'url(#remove-white)' }}
            />
          </div>
          <div className="flex flex-col text-white">
            <span className="font-headline text-[15px] sm:text-lg md:text-2xl font-bold leading-tight tracking-tight drop-shadow-md">
              Superior School of Excellence
            </span>
            <span className="text-[8px] sm:text-[9px] md:text-xs tracking-[0.2em] font-bold text-[#9cd349] uppercase drop-shadow-md block mt-0.5">
              CRADLE TO SUCCESS
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 bg-white/10 backdrop-blur-md px-8 py-3 rounded-full border border-white/20">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id, link.isUnbuilt)}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative group cursor-pointer ${
                  isActive
                    ? 'text-[#9cd349]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#9cd349] transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            );
          })}
        </nav>

        {/* Apply CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenApply}
            className="hidden md:flex items-center gap-2 bg-[#9cd349] text-[#1a365d] px-6 py-2.5 rounded-full text-sm font-bold tracking-wider hover:bg-white hover:text-[#1a365d] hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(156,211,73,0.3)] cursor-pointer group"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 z-[60] transition-transform duration-500 lg:hidden flex flex-col pt-8 px-6 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ backgroundColor: '#0a192f' }}
      >
        {/* Close Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2.5 bg-white/10 text-white border border-white/20 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`flex items-center justify-between text-left text-xl font-headline py-4 border-b border-white/10 transition-colors ${
                activeSection === link.id ? 'text-[#9cd349] font-bold' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
              <ChevronRight className={`w-5 h-5 ${activeSection === link.id ? 'text-[#9cd349]' : 'text-white/30'}`} />
            </button>
          ))}
          <div className="pt-8">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              className="w-full bg-[#9cd349] text-[#1a365d] py-4 rounded-xl font-bold text-base tracking-wider text-center flex items-center justify-center gap-2"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
