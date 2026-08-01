"use client";
import React from 'react';
import { EVENTS_LIST, RESOURCES_LIST } from '../data/schoolData';
import { EventItem, ResourceItem } from '../types';
import { Calendar, FolderOpen, Download, ArrowRight } from 'lucide-react';

interface EventsAndResourcesProps {
  onRegisterEvent: (event: EventItem) => void;
  onOpenResource: (resource: ResourceItem) => void;
}

export const EventsAndResources: React.FC<EventsAndResourcesProps> = ({
  onRegisterEvent,
  onOpenResource,
}) => {
  const featuredEvent = EVENTS_LIST[0];

  return (
    <section id="admissions" className="py-12 md:py-24 bg-[#f6f3f2] border-t border-[#c3c6d0]/20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Upcoming Events Column */}
          <div>
            <h3 className="font-headline text-2xl md:text-3xl font-bold text-[#0e3566] mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-[#496800] text-3xl">event</span>
              <span>Upcoming Events</span>
            </h3>

            {/* Featured Event Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#c3c6d0]/30 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-6">
                <div className="shrink-0 text-center bg-[#0e3566] text-white p-4 rounded-xl min-w-[90px] shadow-md">
                  <span className="block text-3xl font-bold font-headline">{featuredEvent.day}</span>
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#c2f366]">
                    {featuredEvent.month}
                  </span>
                </div>

                <div>
                  <span className="text-[#496800] font-bold text-xs uppercase tracking-wider mb-1 block">
                    {featuredEvent.tag}
                  </span>
                  <h4 className="font-headline text-xl md:text-2xl font-bold text-[#0e3566] mb-1">
                    {featuredEvent.title}
                  </h4>
                  <p className="text-xs text-[#747780] font-medium">
                    {featuredEvent.time} • {featuredEvent.location}
                  </p>
                </div>
              </div>

              <p className="font-body text-sm md:text-base text-[#43474f] mb-6 leading-relaxed">
                {featuredEvent.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[#f6f3f2]">
                <button
                  onClick={() => onRegisterEvent(featuredEvent)}
                  className="text-[#0e3566] font-bold text-sm hover:text-[#496800] hover:underline flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Register to Visit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-[#747780] bg-[#f6f3f2] px-3 py-1 rounded-full font-medium">
                  Open Registration
                </span>
              </div>
            </div>

            {/* Sub Events */}
            <div className="mt-4 space-y-3">
              {EVENTS_LIST.slice(1).map((ev) => (
                <div
                  key={ev.id}
                  onClick={() => onRegisterEvent(ev)}
                  className="bg-white/80 p-4 rounded-xl border border-[#c3c6d0]/20 flex items-center justify-between hover:bg-white hover:shadow-sm cursor-pointer transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-[#f6f3f2] text-[#0e3566] font-bold px-3 py-1.5 rounded-lg text-xs">
                      {ev.day} {ev.month}
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-[#0e3566]">{ev.title}</h5>
                      <p className="text-xs text-[#747780]">{ev.category}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#496800] flex items-center gap-1">
                    RSVP <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Resources Column */}
          <div>
            <h3 className="font-headline text-2xl md:text-3xl font-bold text-[#0e3566] mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-[#496800] text-3xl">folder_open</span>
              <span>Quick Resources</span>
            </h3>

            <div className="space-y-4">
              {RESOURCES_LIST.map((resource) => (
                <div
                  key={resource.id}
                  onClick={() => onOpenResource(resource)}
                  className="flex items-center justify-between bg-white p-5 md:p-6 rounded-2xl border border-[#c3c6d0]/30 hover:border-[#496800] hover:shadow-md transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#d6e3ff] text-[#0e3566] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#0e3566] group-hover:text-[#c2f366] transition-colors">
                      <span className="material-symbols-outlined text-2xl">
                        {resource.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-[#0e3566] group-hover:text-[#496800] transition-colors">
                        {resource.title}
                      </h4>
                      <p className="text-xs text-[#747780] mt-0.5">
                        {resource.size} • {resource.updated}
                      </p>
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-[#f6f3f2] flex items-center justify-center text-[#0e3566] group-hover:bg-[#496800] group-hover:text-white transition-all shrink-0">
                    {resource.type === 'fee' ? (
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    ) : (
                      <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Support Helper Box */}
            <div className="mt-6 bg-[#0e3566] text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h5 className="font-bold text-sm text-[#c2f366]">Need Admission Counseling?</h5>
                <p className="text-xs text-white/80 mt-1">Our desk is available Mon - Sat, 8:00 AM - 4:00 PM</p>
              </div>
              <button
                onClick={() => onOpenResource(RESOURCES_LIST[1])}
                className="bg-white text-[#0e3566] hover:bg-[#c2f366] px-4 py-2 rounded-xl text-xs font-bold transition-colors shrink-0"
              >
                Inquire Fees & Aid
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
