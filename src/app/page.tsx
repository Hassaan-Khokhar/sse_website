"use client";

import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { ImpactStrip } from '../components/ImpactStrip';
import { WelcomeSection } from '../components/WelcomeSection';
import { CorePillars } from '../components/CorePillars';
import { DirectorsMessage } from '../components/DirectorsMessage';
import { CampusLifeGallery } from '../components/CampusLifeGallery';
import { EventsAndResources } from '../components/EventsAndResources';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

import { ApplicationModal } from '../components/modals/ApplicationModal';
import { StoryModal } from '../components/modals/StoryModal';
import { LightboxModal } from '../components/modals/LightboxModal';
import { ResourcePreviewModal } from '../components/modals/ResourcePreviewModal';
import { SearchModal } from '../components/modals/SearchModal';
import { EventRegisterModal } from '../components/modals/EventRegisterModal';
import { GenericInfoModal } from '../components/modals/GenericInfoModal';
import { UnderProductionModal } from '../components/modals/UnderProductionModal';
import { Toast } from '../components/Toast';

import { EventItem, ResourceItem, GalleryItem } from '../types';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Modal Visibility States
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | undefined>(undefined);
  const [isResourceModalOpen, setIsResourceModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isEventRegisterOpen, setIsEventRegisterOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [infoModalType, setInfoModalType] = useState<string | null>(null);
  const [isUnbuiltModalOpen, setIsUnbuiltModalOpen] = useState(false);

  // Global Keyboard listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(prev => (prev === msg ? null : prev));
    }, 4500);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1c1b1b] font-body selection:bg-[#c2f366] selection:text-[#131f00] flex flex-col">
      {/* Top Glass Navigation Bar */}
      <Navbar
        onOpenApply={() => setIsApplyOpen(true)}
        onNavigateSection={scrollToSection}
        activeSection={activeSection}
        onOpenUnbuiltModal={() => setIsUnbuiltModalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onExplorePrograms={() => setIsUnbuiltModalOpen(true)}
          onOpenVirtualTour={() => {
            setSelectedGalleryItem(undefined);
            setIsLightboxOpen(true);
          }}
          onScrollNext={() => scrollToSection('about-us')}
        />

        {/* Impact Statistics Strip */}
        <ImpactStrip />

        {/* Welcome & Asymmetric Legacy Section */}
        <WelcomeSection
          onOpenStory={() => setIsStoryOpen(true)}
        />

        {/* Core Pillars Grid Section */}
        <CorePillars
          onSelectPillar={() => {
            setIsUnbuiltModalOpen(true);
          }}
        />

        {/* Director's Message & Philosophy Quote */}
        <DirectorsMessage />

        {/* Bento Box Campus Life Gallery */}
        <CampusLifeGallery
          onOpenLightbox={(item) => {
            setSelectedGalleryItem(item);
            setIsLightboxOpen(true);
          }}
        />

        {/* Upcoming Events & Quick Resources */}
        <EventsAndResources
          onRegisterEvent={(event) => {
            setSelectedEvent(event);
            setIsEventRegisterOpen(true);
          }}
          onOpenResource={(resource) => {
            setSelectedResource(resource);
            setIsResourceModalOpen(true);
          }}
        />

        {/* Contact Us Section */}
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer
        onShowToast={showToast}
        onOpenModal={(type) => setInfoModalType(type)}
      />

      {/* Interactive Modals */}
      <ApplicationModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        onShowToast={showToast}
      />


      <StoryModal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
        onOpenApply={() => setIsApplyOpen(true)}
      />

      <LightboxModal
        isOpen={isLightboxOpen}
        initialItem={selectedGalleryItem}
        onClose={() => {
          setIsLightboxOpen(false);
          setSelectedGalleryItem(undefined);
        }}
      />

      <ResourcePreviewModal
        isOpen={isResourceModalOpen}
        resource={selectedResource}
        onClose={() => {
          setIsResourceModalOpen(false);
          setSelectedResource(null);
        }}
        onShowToast={showToast}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={scrollToSection}
        onOpenApply={() => setIsApplyOpen(true)}
        onOpenVirtualTour={() => {
          setSelectedGalleryItem(undefined);
          setIsLightboxOpen(true);
        }}
        onOpenProgramExplorer={() => setIsUnbuiltModalOpen(true)}
        onOpenStory={() => setIsStoryOpen(true)}
      />

      <EventRegisterModal
        isOpen={isEventRegisterOpen}
        event={selectedEvent}
        onClose={() => {
          setIsEventRegisterOpen(false);
          setSelectedEvent(null);
        }}
        onShowToast={showToast}
      />

      <GenericInfoModal
        isOpen={!!infoModalType}
        modalType={infoModalType}
        onClose={() => setInfoModalType(null)}
        onShowToast={showToast}
      />

      <UnderProductionModal
        isOpen={isUnbuiltModalOpen}
        onClose={() => setIsUnbuiltModalOpen(false)}
      />

      {/* Global Toast Alert */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}

export default App;
