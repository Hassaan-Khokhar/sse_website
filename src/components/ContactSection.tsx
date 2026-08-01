import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

interface ContactSectionProps {
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    onShowToast('Your message has been sent successfully!');
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Call Us',
      value: '+92 XXX XXXXXXX',
      sub: 'Mon - Sat, 8am - 4pm',
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: 'info@sse.edu.pk',
      sub: 'We reply within 24 hours',
    },
    {
      icon: MapPin,
      label: 'Visit Us',
      value: 'Kot Momin, Sargodha',
      sub: 'Punjab, Pakistan',
    },
    {
      icon: Clock,
      label: 'Office Hours',
      value: '8:00 AM - 4:00 PM',
      sub: 'Monday to Saturday',
    },
  ];

  return (
    <section id="contact-us" className="py-12 md:py-24 bg-[#fcf9f8]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#496800] font-semibold text-xs md:text-sm tracking-widest uppercase mb-3 block">
            Get In Touch
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-[#0e3566] mb-4">
            Contact Us
          </h2>
          <p className="text-[#4a4a4a] text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Have questions about admissions, programs, or campus life? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Side: Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {contactInfo.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#e8e5e3] hover:border-[#c2f366]/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0e3566] text-[#c2f366] flex items-center justify-center shrink-0 group-hover:bg-[#c2f366] group-hover:text-[#0e3566] transition-colors duration-300">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[#0e3566] font-bold text-sm mb-0.5">{item.label}</p>
                  <p className="text-[#1c1b1b] font-semibold text-base">{item.value}</p>
                  <p className="text-[#6b6b6b] text-xs mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0e3566] rounded-3xl p-6 md:p-10 shadow-2xl border border-white/10 relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#c2f366] opacity-[0.04] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-[#c2f366]/20 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-[#c2f366]" />
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/60 text-sm max-w-sm">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2 block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#c2f366]/60 focus:bg-white/15 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2 block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#c2f366]/60 focus:bg-white/15 transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone & Subject Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2 block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92 3XX XXXXXXX"
                        className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#c2f366]/60 focus:bg-white/15 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2 block">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c2f366]/60 focus:bg-white/15 transition-all appearance-none cursor-pointer"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                      >
                        <option value="" className="bg-[#0e3566]">Select a subject</option>
                        <option value="admissions" className="bg-[#0e3566]">Admissions Inquiry</option>
                        <option value="academics" className="bg-[#0e3566]">Academic Programs</option>
                        <option value="fees" className="bg-[#0e3566]">Fee Structure</option>
                        <option value="careers" className="bg-[#0e3566]">Career Opportunities</option>
                        <option value="general" className="bg-[#0e3566]">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2 block">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us how we can help..."
                      className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#c2f366]/60 focus:bg-white/15 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#c2f366] hover:bg-white text-[#0e3566] px-8 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(194,243,102,0.2)] cursor-pointer group"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
