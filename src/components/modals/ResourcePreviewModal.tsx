"use client";
import React from 'react';
import { ResourceItem } from '../../types';
import { X, Download, FileText, Check, Printer } from 'lucide-react';

interface ResourcePreviewModalProps {
  isOpen: boolean;
  resource: ResourceItem | null;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ResourcePreviewModal: React.FC<ResourcePreviewModalProps> = ({
  isOpen,
  resource,
  onClose,
  onShowToast,
}) => {
  if (!isOpen || !resource) return null;

  const handleDownload = () => {
    onShowToast(`Downloading official PDF document: ${resource.title}`);
  };

  const handlePrint = () => {
    onShowToast(`Preparing document preview for printing: ${resource.title}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#c3c6d0]/30 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#0e3566] text-white p-6 md:p-8 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#c2f366]">
              <span className="material-symbols-outlined text-2xl">{resource.icon}</span>
            </div>
            <div>
              <span className="text-[#c2f366] text-[10px] font-bold uppercase tracking-widest block">
                Official Document Registry
              </span>
              <h3 className="font-headline text-xl font-bold">
                {resource.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-6 overflow-y-auto flex-1">
          <div className="bg-[#f6f3f2] p-4 rounded-2xl border border-[#c3c6d0]/30 flex justify-between items-center text-xs">
            <div>
              <span className="text-[#747780] block">File Format & Size:</span>
              <strong className="text-[#0e3566] font-mono">{resource.size}</strong>
            </div>
            <div>
              <span className="text-[#747780] block">Last Official Revision:</span>
              <strong className="text-[#0e3566]">{resource.updated}</strong>
            </div>
            <div>
              <span className="text-[#747780] block">Access Status:</span>
              <span className="text-green-700 font-bold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Public Download
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold text-base text-[#0e3566] mb-2">Overview</h4>
            <p className="font-body text-sm text-[#43474f] leading-relaxed">
              {resource.description}
            </p>
          </div>

          {/* Simulated PDF Viewer Shell */}
          <div className="border border-[#c3c6d0]/40 rounded-2xl p-6 bg-[#fcf9f8] text-center space-y-4">
            <FileText className="w-16 h-16 text-[#0e3566] mx-auto opacity-70" />
            <div>
              <h5 className="font-bold text-sm text-[#0e3566]">{resource.title}</h5>
              <p className="text-xs text-[#747780] mt-1">
                Superior School of Excellence Academic Trust • Verifiable Official Copy
              </p>
            </div>
            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={handleDownload}
                className="bg-[#0e3566] text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-[#2b4c7e] transition-colors flex items-center gap-2 cursor-pointer shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
              <button
                onClick={handlePrint}
                className="border border-[#c3c6d0] text-[#43474f] px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-white transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print Copy</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
