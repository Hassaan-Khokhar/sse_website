"use client";
import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md bg-[#0e3566] text-white px-5 py-4 rounded-2xl shadow-2xl border border-[#c2f366]/40 flex items-center justify-between gap-4 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-center gap-3">
        <CheckCircle2 className="w-5 h-5 text-[#c2f366] shrink-0" />
        <p className="text-xs md:text-sm font-medium leading-tight text-white">
          {message}
        </p>
      </div>
      <button
        onClick={onClose}
        className="text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors shrink-0"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
