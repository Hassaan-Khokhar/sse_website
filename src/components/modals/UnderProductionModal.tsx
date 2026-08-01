import React from 'react';
import { X, Wrench } from 'lucide-react';
import { SCHOOL_LOGO } from '../../data/schoolData';

interface UnderProductionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UnderProductionModal: React.FC<UnderProductionModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0e3566]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col relative animate-in slide-in-from-bottom-4 duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#f6f3f2] text-[#43474f] hover:bg-[#eae7e7] hover:text-[#0e3566] transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-8 text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-6 mb-6">
            <img src="/SoftageLabs_Logo.png" alt="Softage Labs Logo" className="h-16 object-contain" />
            <div className="h-12 w-px bg-gray-200" />
            <img src={SCHOOL_LOGO} alt="SSE Logo" className="h-16 object-contain" style={{ filter: 'url(#remove-white)' }} />
          </div>

          <div className="w-16 h-16 rounded-full bg-[#f6f3f2] flex items-center justify-center mb-4 text-[#0e3566]">
            <Wrench className="w-8 h-8 text-[#496800]" />
          </div>
          
          <h3 className="font-headline text-2xl font-bold text-[#0e3566] mb-3">
            Site Under Production
          </h3>
          <p className="font-body text-sm text-[#43474f] leading-relaxed">
            This is a demo website designed and developed by <strong className="text-[#0e3566]">Softage Labs</strong> for Superior School of Excellence (SSE). This section is currently under development.
          </p>
          
          <button
            onClick={onClose}
            className="mt-8 bg-[#0e3566] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-[#1a4b8c] transition-colors w-full"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};
