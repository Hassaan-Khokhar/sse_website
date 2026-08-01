"use client";
import React from 'react';
import { BookOpen, Users, Building2, Monitor, ArrowUpRight } from 'lucide-react';

interface CorePillarsProps {
  onSelectPillar: (pillarTitle: string) => void;
}

export const CorePillars: React.FC<CorePillarsProps> = ({ onSelectPillar }) => {
  const pillars = [
    {
      id: 'curriculum',
      icon: BookOpen,
      materialIcon: 'auto_stories',
      title: 'Holistic Curriculum',
      description: 'Merging national standards with values-based education to develop well-rounded personalities.',
      details: ['Cambridge iGCSE & A-Levels', 'IB Primary Years Framework', 'Integrated Ethics & Values']
    },
    {
      id: 'faculty',
      icon: Users,
      materialIcon: 'groups',
      title: 'Expert Faculty',
      description: 'Guided by industry veterans and distinguished academics committed to student success.',
      details: ['1:10 Teacher-to-Student Ratio', '85%+ Master’s & PhD Educators', 'Continuous Pedagogical Training']
    },
    {
      id: 'campus',
      icon: Building2,
      materialIcon: 'domain',
      title: 'State-of-the-Art Campus',
      description: 'World-class labs, digital libraries, and smart classrooms designed for 21st-century learning.',
      details: ['Robotics & Microprocessor Labs', 'Olympic-standard Aquatics Arena', 'Digital Interactive Classrooms']
    },
    {
      id: 'software',
      icon: Monitor,
      materialIcon: 'computer',
      title: 'Software-Based Learning',
      description: 'Immersive digital platforms and interactive tools customized for engaging student experiences.',
      details: ['AI Learning Assistants', 'Cloud-Based Assignments', 'Virtual Labs']
    }
  ];

  return (
    <section id="academics" className="py-12 md:py-24 bg-[#f6f3f2]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-[#0e3566] mb-4">
            Our Core Pillars
          </h2>
          <div className="h-1 w-20 bg-[#496800] mx-auto rounded-full" />
        </div>

        {/* 4 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={pillar.id}
                onClick={() => onSelectPillar(pillar.title)}
                className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-[#c3c6d0]/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer flex flex-col h-full"
              >
                {/* Icon Frame */}
                <div className="w-14 h-14 bg-[#496800]/10 rounded-xl flex items-center justify-center mb-6 text-[#496800] group-hover:bg-[#0e3566] group-hover:text-[#c2f366] transition-colors duration-300 shrink-0">
                  <span className="material-symbols-outlined text-2xl">
                    {pillar.materialIcon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-headline text-lg xl:text-xl font-bold text-[#0e3566] mb-3 group-hover:text-[#496800] transition-colors">
                  {pillar.title}
                </h3>

                {/* Body */}
                <p className="font-body text-sm xl:text-base text-[#43474f] leading-relaxed flex-grow">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
