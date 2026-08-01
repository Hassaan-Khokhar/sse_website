import React, { useState } from 'react';
import { EventItem } from '../../types';
import { X, Calendar, MapPin, Clock, CheckCircle2 } from 'lucide-react';

interface EventRegisterModalProps {
  isOpen: boolean;
  event: EventItem | null;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const EventRegisterModal: React.FC<EventRegisterModalProps> = ({
  isOpen,
  event,
  onClose,
  onShowToast,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState('1 Guest');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !event) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      onShowToast('Please provide your name and email address.');
      return;
    }
    setSubmitted(true);
    onShowToast(`Pass issued for ${event.title}! Sent to ${email}`);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#c3c6d0]/30 flex flex-col">
        {/* Header */}
        <div className="bg-[#0e3566] text-white p-6 flex justify-between items-center">
          <div>
            <span className="text-[#c2f366] text-[10px] font-bold uppercase tracking-widest block mb-1">
              {event.tag}
            </span>
            <h3 className="font-headline text-xl font-bold">
              {event.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="bg-[#f6f3f2] p-4 rounded-xl space-y-2 text-xs text-[#43474f]">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#0e3566]" />
                <span>Date: <strong>{event.day} {event.month} 2024</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0e3566]" />
                <span>Time: <strong>{event.time}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#496800]" />
                <span>Venue: <strong>{event.location}</strong></span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#43474f] mb-1">Visitor Full Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sarah Ahmed"
                className="w-full px-4 py-2.5 rounded-xl border border-[#c3c6d0] text-sm focus:ring-2 focus:ring-[#0e3566] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#43474f] mb-1">Email for Event Pass *</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="sarah@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-[#c3c6d0] text-sm focus:ring-2 focus:ring-[#0e3566] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#43474f] mb-1">Number of Visitors</label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#c3c6d0] text-sm focus:ring-2 focus:ring-[#0e3566] outline-none"
              >
                <option value="1 Visitor">1 Visitor (Self)</option>
                <option value="2 Visitors">2 Visitors (With Parent / Student)</option>
                <option value="3+ Family Pass">3+ Visitors (Family Pass)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#65A30D] text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#496800] transition-colors shadow-md"
            >
              Get Visitor Access Pass
            </button>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="font-headline text-xl font-bold text-[#0e3566]">
              Visitor Pass Confirmed!
            </h4>
            <p className="text-xs text-[#43474f]">
              Access pass for <strong>{name}</strong> ({guests}) has been registered for <strong>{event.title}</strong>. A digital QR pass has been sent to <strong>{email}</strong>.
            </p>
            <button
              onClick={handleReset}
              className="bg-[#0e3566] text-white px-6 py-2.5 rounded-xl font-bold text-xs"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
