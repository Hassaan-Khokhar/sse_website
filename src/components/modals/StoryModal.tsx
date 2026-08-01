import React from 'react';
import { WELCOME_IMG, DIRECTOR_IMG } from '../../data/schoolData';
import { X, Award, Shield, CheckCircle } from 'lucide-react';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApply: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose, onOpenApply }) => {
  if (!isOpen) return null;

  const milestones = [
    { year: '1999', title: 'Foundation & Vision', desc: 'Established by Adv. Saif Ur Rehman Babar with 120 founding students and a commitment to academic rigor and moral values.' },
    { year: '2008', title: 'STEM & Robotics Lab Launch', desc: 'Introduced specialized research laboratories, computer science suites, and inter-school robotics competitions.' },
    { year: '2016', title: 'National Educational Accreditation', desc: 'Received official national education status for secondary and higher secondary levels.' },
    { year: '2024', title: '5,000+ Alumni & Excellence Status', desc: 'Celebrating over two decades of educational leadership with alumni attending top tier universities nationwide.' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#c3c6d0]/30 relative flex flex-col">
        {/* Header */}
        <div className="bg-[#0e3566] text-white p-6 md:p-8 rounded-t-3xl flex justify-between items-center sticky top-0 z-20">
          <div>
            <span className="text-[#c2f366] text-xs font-bold uppercase tracking-widest block mb-1">
              Institutional Legacy
            </span>
            <h3 className="font-headline text-2xl md:text-3xl font-bold">
              Our Journey & Mission
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-10 space-y-8">
          {/* Top Banner */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-[#f6f3f2] p-6 rounded-2xl border border-[#c3c6d0]/20">
            <div className="md:col-span-4 aspect-square rounded-xl overflow-hidden shadow-md">
              <img src={DIRECTOR_IMG} alt="Founder" className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-8">
              <span className="text-xs font-bold text-[#496800] uppercase tracking-wider block mb-1">From the Founder's Desk</span>
              <h4 className="font-headline text-xl font-bold text-[#0e3566] mb-2">Adv. Saif Ur Rehman Babar</h4>
              <p className="text-xs text-[#43474f] leading-relaxed italic">
                "We did not build Superior School to merely grant diplomas; we built it to cultivate critical thinkers who will leave a lasting footprint on humanity."
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h4 className="font-headline text-xl font-bold text-[#0e3566] mb-4">Core Philosophy</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-xl border border-[#c3c6d0]/30">
                <Shield className="w-6 h-6 text-[#0e3566] mb-2" />
                <h5 className="font-bold text-sm text-[#0e3566] mb-1">Moral Integrity</h5>
                <p className="text-xs text-[#43474f]">Instilling ethical judgment, honesty, and civic responsibility.</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-[#c3c6d0]/30">
                <Award className="w-6 h-6 text-[#496800] mb-2" />
                <h5 className="font-bold text-sm text-[#0e3566] mb-1">Academic Rigor</h5>
                <p className="text-xs text-[#43474f]">Challenging students to achieve distinction across competitive exams.</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-[#c3c6d0]/30">
                <CheckCircle className="w-6 h-6 text-[#0e3566] mb-2" />
                <h5 className="font-bold text-sm text-[#0e3566] mb-1">Civic Responsibility</h5>
                <p className="text-xs text-[#43474f]">Fostering cross-cultural awareness and leadership skills.</p>
              </div>
            </div>
          </div>

          {/* Milestone Timeline */}
          <div>
            <h4 className="font-headline text-xl font-bold text-[#0e3566] mb-6">Historical Milestones</h4>
            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-[#0e3566]/20">
              {milestones.map((ms, i) => (
                <div key={i} className="relative pl-10">
                  <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-[#0e3566] text-[#c2f366] font-bold text-xs flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-[#c2f366] text-[#131f00] px-2 py-0.5 rounded text-xs font-bold font-mono">
                      {ms.year}
                    </span>
                    <h5 className="font-bold text-base text-[#0e3566]">{ms.title}</h5>
                  </div>
                  <p className="text-xs md:text-sm text-[#43474f] leading-relaxed">
                    {ms.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Bar */}
          <div className="bg-[#0e3566] text-white p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h5 className="font-bold text-base text-[#c2f366]">Become Part of Our Legacy</h5>
              <p className="text-xs text-white/80">Admissions for session 2024-25 are currently open.</p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenApply();
              }}
              className="bg-[#c2f366] text-[#131f00] px-6 py-2.5 rounded-xl font-bold text-xs uppercase hover:bg-[#65A30D] hover:text-white transition-colors shrink-0"
            >
              Apply Online
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
