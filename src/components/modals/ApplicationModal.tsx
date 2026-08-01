"use client";
import React, { useState } from 'react';
import { ApplicationFormData } from '../../types';
import { X, CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, User, School, PhoneCall } from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  onShowToast
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [formData, setFormData] = useState<ApplicationFormData>({
    studentFirstName: '',
    studentLastName: '',
    dateOfBirth: '',
    gender: 'Male',
    gradeApplyingFor: 'Grade 9',
    previousSchool: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    city: 'Lahore',
    address: '',
    programChoice: 'Cambridge O/A Levels',
    notes: ''
  });
  const [appId, setAppId] = useState<string>('');

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `SSE-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setAppId(generatedId);
    setStep(4);
    onShowToast(`Application ${generatedId} submitted successfully!`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#c3c6d0]/30 relative flex flex-col">
        {/* Header */}
        <div className="bg-[#0e3566] text-white p-6 md:p-8 rounded-t-3xl flex justify-between items-center relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-[#c2f366] text-xs font-bold uppercase tracking-widest block mb-1">
              Online Admission Desk 2024-25
            </span>
            <h3 className="font-headline text-2xl font-bold">
              Student Application Portal
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        {step < 4 && (
          <div className="bg-[#f6f3f2] px-8 py-4 border-b border-[#c3c6d0]/20 flex justify-between items-center">
            <div className={`flex items-center gap-2 text-xs font-bold ${step >= 1 ? 'text-[#0e3566]' : 'text-[#747780]'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 1 ? 'bg-[#0e3566] text-white' : 'bg-gray-200'}`}>1</div>
              <span>Student</span>
            </div>
            <div className="h-[2px] flex-1 bg-gray-300 mx-3" />
            <div className={`flex items-center gap-2 text-xs font-bold ${step >= 2 ? 'text-[#0e3566]' : 'text-[#747780]'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? 'bg-[#0e3566] text-white' : 'bg-gray-200'}`}>2</div>
              <span>Guardian</span>
            </div>
            <div className="h-[2px] flex-1 bg-gray-300 mx-3" />
            <div className={`flex items-center gap-2 text-xs font-bold ${step >= 3 ? 'text-[#0e3566]' : 'text-[#747780]'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 3 ? 'bg-[#0e3566] text-white' : 'bg-gray-200'}`}>3</div>
              <span>Program</span>
            </div>
          </div>
        )}

        {/* Body Content */}
        <div className="p-6 md:p-8 flex-1">
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="font-headline text-lg font-bold text-[#0e3566] flex items-center gap-2">
                <User className="w-5 h-5 text-[#496800]" /> Student Details
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#43474f] mb-1">First Name *</label>
                  <input
                    type="text"
                    name="studentFirstName"
                    required
                    value={formData.studentFirstName}
                    onChange={handleChange}
                    placeholder="e.g. Ayan"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#c3c6d0] focus:ring-2 focus:ring-[#0e3566] text-sm outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#43474f] mb-1">Last Name *</label>
                  <input
                    type="text"
                    name="studentLastName"
                    required
                    value={formData.studentLastName}
                    onChange={handleChange}
                    placeholder="e.g. Khan"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#c3c6d0] focus:ring-2 focus:ring-[#0e3566] text-sm outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#43474f] mb-1">Date of Birth *</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#c3c6d0] focus:ring-2 focus:ring-[#0e3566] text-sm outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#43474f] mb-1">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#c3c6d0] focus:ring-2 focus:ring-[#0e3566] text-sm outline-none"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#43474f] mb-1">Applying For Grade *</label>
                  <select
                    name="gradeApplyingFor"
                    value={formData.gradeApplyingFor}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#c3c6d0] focus:ring-2 focus:ring-[#0e3566] text-sm outline-none"
                  >
                    <option value="Primary (Grade 1-5)">Primary (Grade 1-5)</option>
                    <option value="Middle (Grade 6-8)">Middle (Grade 6-8)</option>
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 10">Grade 10</option>
                    <option value="Cambridge O Level">Cambridge O Level</option>
                    <option value="Cambridge A Level">Cambridge A Level</option>
                    <option value="IB Diploma">IB Diploma Program</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#43474f] mb-1">Current / Previous School</label>
                <input
                  type="text"
                  name="previousSchool"
                  value={formData.previousSchool}
                  onChange={handleChange}
                  placeholder="e.g. St. Peter's Academy"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#c3c6d0] focus:ring-2 focus:ring-[#0e3566] text-sm outline-none"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    if (!formData.studentFirstName || !formData.studentLastName) {
                      onShowToast('Please fill in Student Name before proceeding.');
                      return;
                    }
                    setStep(2);
                  }}
                  className="bg-[#0e3566] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#2b4c7e] transition-colors flex items-center gap-2"
                >
                  <span>Next: Guardian Info</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h4 className="font-headline text-lg font-bold text-[#0e3566] flex items-center gap-2">
                <PhoneCall className="w-5 h-5 text-[#496800]" /> Parent / Guardian Information
              </h4>
              <div>
                <label className="block text-xs font-bold text-[#43474f] mb-1">Parent / Guardian Full Name *</label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="e.g. Dr. Tariq Mahmood"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#c3c6d0] focus:ring-2 focus:ring-[#0e3566] text-sm outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#43474f] mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="parentEmail"
                    value={formData.parentEmail}
                    onChange={handleChange}
                    placeholder="parent@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#c3c6d0] focus:ring-2 focus:ring-[#0e3566] text-sm outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#43474f] mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    name="parentPhone"
                    value={formData.parentPhone}
                    onChange={handleChange}
                    placeholder="+92 300 1234567"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#c3c6d0] focus:ring-2 focus:ring-[#0e3566] text-sm outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-1">
                  <label className="block text-xs font-bold text-[#43474f] mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#c3c6d0] focus:ring-2 focus:ring-[#0e3566] text-sm outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-[#43474f] mb-1">Residential Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Street, Sector, Block"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#c3c6d0] focus:ring-2 focus:ring-[#0e3566] text-sm outline-none"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="border border-[#c3c6d0] text-[#43474f] px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#f6f3f2] flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!formData.parentName || !formData.parentEmail) {
                      onShowToast('Please provide Parent Name and Email.');
                      return;
                    }
                    setStep(3);
                  }}
                  className="bg-[#0e3566] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#2b4c7e] flex items-center gap-2"
                >
                  <span>Next: Choice & Terms</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h4 className="font-headline text-lg font-bold text-[#0e3566] flex items-center gap-2">
                <School className="w-5 h-5 text-[#496800]" /> Program Track & Declaration
              </h4>

              <div>
                <label className="block text-xs font-bold text-[#43474f] mb-1">Preferred Academic Stream</label>
                <select
                  name="programChoice"
                  value={formData.programChoice}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#c3c6d0] focus:ring-2 focus:ring-[#0e3566] text-sm outline-none"
                >
                  <option value="Cambridge O/A Levels">Cambridge O/A Levels (Pre-Med / Pre-Engg)</option>
                  <option value="Higher Secondary Certificate">Higher Secondary Certificate (HSC)</option>
                  <option value="National Board Science Stream">National Board Science Stream</option>
                  <option value="Primary & Middle School Foundation">Primary & Middle School Foundation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#43474f] mb-1">Special Notes / Medical / Needs (Optional)</label>
                <textarea
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Mention any scholarships applying for, extracurricular achievements, or special accommodations needed..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#c3c6d0] focus:ring-2 focus:ring-[#0e3566] text-sm outline-none"
                />
              </div>

              <div className="bg-[#f6f3f2] p-4 rounded-xl text-xs text-[#43474f] flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#496800] shrink-0 mt-0.5" />
                <p>
                  By submitting this application, I confirm that all submitted details are accurate and comply with the Superior Educational Trust admission policy.
                </p>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="border border-[#c3c6d0] text-[#43474f] px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#f6f3f2] flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  type="submit"
                  className="bg-[#65A30D] text-white px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-[#496800] transition-colors shadow-lg flex items-center gap-2"
                >
                  <span>Submit Application</span>
                  <CheckCircle2 className="w-5 h-5" />
                </button>
              </div>
            </form>
          )}

          {step === 4 && (
            <div className="text-center py-6 space-y-6">
              <div className="w-20 h-20 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div>
                <span className="bg-[#c2f366] text-[#131f00] px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                  Application Received
                </span>
                <h4 className="font-headline text-2xl font-bold text-[#0e3566] mt-3">
                  Thank You, {formData.parentName || 'Parent'}!
                </h4>
                <p className="text-sm text-[#43474f] mt-2 max-w-md mx-auto">
                  Application for <strong className="text-[#0e3566]">{formData.studentFirstName} {formData.studentLastName}</strong> ({formData.gradeApplyingFor}) has been registered into the admissions system.
                </p>
              </div>

              <div className="bg-[#f6f3f2] p-6 rounded-2xl max-w-md mx-auto border border-[#c3c6d0]/40 text-left space-y-2 text-xs">
                <div className="flex justify-between border-b border-gray-300 pb-2">
                  <span className="text-[#747780]">Application Reference No:</span>
                  <strong className="text-[#0e3566] font-mono text-sm">{appId}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#747780]">Status:</span>
                  <span className="text-amber-700 font-bold">Pending Assessment & Test Interview</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#747780]">Confirmation Email:</span>
                  <span className="text-[#0e3566] font-medium">{formData.parentEmail || 'On Record'}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => {
                    onShowToast(`Downloaded Reference Slip for ${appId}`);
                  }}
                  className="bg-[#0e3566] text-white px-6 py-2.5 rounded-xl font-bold text-xs hover:bg-[#2b4c7e] transition-colors"
                >
                  Download Application PDF
                </button>
                <button
                  onClick={onClose}
                  className="border border-[#c3c6d0] text-[#43474f] px-6 py-2.5 rounded-xl font-bold text-xs hover:bg-[#f6f3f2]"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
