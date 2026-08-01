import React from 'react';
import { X, MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

interface GenericInfoModalProps {
  isOpen: boolean;
  modalType: string | null;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const GenericInfoModal: React.FC<GenericInfoModalProps> = ({
  isOpen,
  modalType,
  onClose,
  onShowToast,
}) => {
  if (!isOpen || !modalType) return null;

  const getContent = () => {
    switch (modalType) {
      case 'main-campus':
        return {
          title: 'Main Campus (Gulberg Heights)',
          tag: 'Primary & Secondary Facility',
          icon: MapPin,
          body: (
            <div className="space-y-4 text-xs md:text-sm text-[#43474f]">
              <p>
                Our 12-acre main campus houses the Central Academic Block, STEM Innovation Labs, Digital Commons Library, Olympic Athletic Arena, and Executive Offices.
              </p>
              <div className="bg-[#f6f3f2] p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-[#0e3566]">
                  <MapPin className="w-4 h-4 text-[#496800]" />
                  <span>Address: 45 Main Boulevard, Gulberg III, Lahore, Pakistan</span>
                </div>
                <div className="flex items-center gap-2 text-[#0e3566]">
                  <Phone className="w-4 h-4 text-[#496800]" />
                  <span>Phone: +92 (42) 3578-9000 / +92 (42) 3578-9001</span>
                </div>
                <div className="flex items-center gap-2 text-[#0e3566]">
                  <Clock className="w-4 h-4 text-[#0e3566]" />
                  <span>Hours: Monday – Saturday, 7:30 AM – 4:00 PM</span>
                </div>
              </div>
            </div>
          )
        };
      case 'north-wing':
        return {
          title: 'North Wing Campus (Model Town)',
          tag: 'Primary Years & Early Childhood Center',
          icon: MapPin,
          body: (
            <div className="space-y-4 text-xs md:text-sm text-[#43474f]">
              <p>
                Dedicated exclusively to early childhood education and primary inquiry learning, featuring child-friendly robotics labs, shaded gardens, and sports courts.
              </p>
              <div className="bg-[#f6f3f2] p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-[#0e3566]">
                  <MapPin className="w-4 h-4 text-[#496800]" />
                  <span>Address: Block C, Model Town, Lahore</span>
                </div>
                <div className="flex items-center gap-2 text-[#0e3566]">
                  <Phone className="w-4 h-4 text-[#496800]" />
                  <span>Phone: +92 (42) 3584-1122</span>
                </div>
              </div>
            </div>
          )
        };
      case 'outreach':
        return {
          title: 'National Admissions & Outreach Desk',
          tag: 'Cambridge & Overseas Counseling',
          icon: Mail,
          body: (
            <div className="space-y-4 text-xs md:text-sm text-[#43474f]">
              <p>
                Coordinates study abroad initiatives, university placements in the US/UK/Canada/Australia, and summer research exchange programs.
              </p>
              <div className="bg-[#f6f3f2] p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-[#0e3566]">
                  <Mail className="w-4 h-4 text-[#496800]" />
                  <span>Email: outreach.admissions@superior.edu.pk</span>
                </div>
              </div>
            </div>
          )
        };
      case 'privacy':
        return {
          title: 'Privacy Policy & Student Data Protection',
          tag: 'Official Charter',
          icon: ShieldCheck,
          body: (
            <div className="space-y-3 text-xs md:text-sm text-[#43474f]">
              <p>
                Superior Educational Trust complies with national data privacy standards. All student application records, academic transcripts, and personal information are encrypted and accessible strictly to authorized admissions staff.
              </p>
              <p>We do not share student credentials with third-party advertisers.</p>
            </div>
          )
        };
      case 'terms':
        return {
          title: 'Terms of Service & Code of Conduct',
          tag: 'Student Governance',
          icon: ShieldCheck,
          body: (
            <div className="space-y-3 text-xs md:text-sm text-[#43474f]">
              <p>
                Enrollment at Superior School of Excellence requires adherence to our Student Honor Code, Attendance Rules (minimum 85%), and Code of Integrity.
              </p>
            </div>
          )
        };
      default:
        return {
          title: 'Contact Admissions & Support Desk',
          tag: 'Help & Inquiries',
          icon: Phone,
          body: (
            <div className="space-y-4 text-xs md:text-sm text-[#43474f]">
              <p>Have questions regarding admissions, scholarships, or bus routes? Our desk is ready to assist you.</p>
              <div className="bg-[#f6f3f2] p-4 rounded-xl space-y-2">
                <p><strong>Hotline:</strong> +92 42 111 777 888</p>
                <p><strong>Email:</strong> info@superiorschool.edu.pk</p>
              </div>
            </div>
          )
        };
    }
  };

  const content = getContent();
  const IconComp = content.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#c3c6d0]/30 flex flex-col">
        <div className="bg-[#0e3566] text-white p-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <IconComp className="w-6 h-6 text-[#c2f366]" />
            <div>
              <span className="text-[#c2f366] text-[10px] font-bold uppercase tracking-widest block">
                {content.tag}
              </span>
              <h3 className="font-headline text-lg font-bold">
                {content.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {content.body}

          <div className="mt-6 pt-4 border-t border-[#f6f3f2] flex justify-end">
            <button
              onClick={onClose}
              className="bg-[#0e3566] text-white px-6 py-2.5 rounded-xl font-bold text-xs"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
