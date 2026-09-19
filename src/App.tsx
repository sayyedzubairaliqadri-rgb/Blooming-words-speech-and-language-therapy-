import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickAudience } from './components/QuickAudience';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ConditionsSection } from './components/ConditionsSection';
import { OurApproach } from './components/OurApproach';
import { TherapistSection } from './components/TherapistSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { TherapyModesSection } from './components/TherapyModesSection';
import { AppointmentBooking } from './components/AppointmentBooking';
import { ScreeningQuickCheck } from './components/ScreeningQuickCheck';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { EditProfileModal } from './components/EditProfileModal';
import { initialClinicInfo } from './data/clinicData';
import { ClinicVerifiedInfo } from './types';

export default function App() {
  const [clinicInfo, setClinicInfo] = useState<ClinicVerifiedInfo>(() => {
    try {
      const saved = localStorage.getItem('blooming_words_clinic_info');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return initialClinicInfo;
  });

  const [audienceFilter, setAudienceFilter] = useState<'all' | 'children' | 'teens' | 'adults'>('all');
  const [bookingService, setBookingService] = useState<string>('Speech & Language Delay');
  const [bookingMode, setBookingMode] = useState<'in-person' | 'online'>('in-person');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Persist clinic info modifications in local storage
  const handleUpdateClinicInfo = (updated: ClinicVerifiedInfo) => {
    setClinicInfo(updated);
    try {
      localStorage.setItem('blooming_words_clinic_info', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.querySelector(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookClick = () => {
    scrollToSection('#book-appointment');
  };

  const handleContactClick = () => {
    scrollToSection('#contact');
  };

  const handleAudienceSelect = (audience: 'children' | 'teens' | 'adults') => {
    setAudienceFilter(audience);
    scrollToSection('#services');
  };

  const handleBookForService = (serviceName: string) => {
    setBookingService(serviceName);
    scrollToSection('#book-appointment');
  };

  const handleConditionSelect = (serviceId: string) => {
    scrollToSection('#services');
  };

  const handleSelectMode = (mode: 'in-person' | 'online') => {
    setBookingMode(mode);
    scrollToSection('#book-appointment');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#232B27] flex flex-col selection:bg-[#E3EFE9] selection:text-[#254F40]">
      
      {/* Top Banner Notice for Clinic Verification Transparency */}
      <aside aria-label="Announcement" className="bg-[#305345] text-[#E7EFEA] py-2 px-4 text-center text-[11px] sm:text-xs font-medium border-b border-[#244237]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9DE5C3]" />
          <span>Blooming Words Speech & Language Therapy • Practice of Ashna Jahan • Consultations by Appointment</span>
        </div>
      </aside>

      {/* Sticky Responsive Navbar */}
      <Navbar onBookClick={handleBookClick} onContactClick={handleContactClick} />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <Hero
          onBookClick={handleBookClick}
          onExploreServices={() => scrollToSection('#services')}
        />

        {/* 2. Quick Audience Selection (Children, Teens, Adults) */}
        <QuickAudience onSelectAudience={handleAudienceSelect} />

        {/* 3. About Blooming Words Section */}
        <AboutSection />

        {/* 4. Comprehensive Services Section (10 Services) */}
        <ServicesSection
          onBookForService={handleBookForService}
          audienceFilter={audienceFilter}
          onFilterChange={setAudienceFilter}
        />

        {/* 5. Conditions / Concerns We Support (12 concerns) */}
        <ConditionsSection
          onTalkToUs={handleContactClick}
          onSelectCondition={handleConditionSelect}
        />

        {/* 6. Our Approach (5-Step Timeline) */}
        <OurApproach onBookClick={handleBookClick} />

        {/* 7. Therapist Section (Ashna Jahan, Speech & Language Therapist) */}
        <TherapistSection
          info={clinicInfo}
          onUpdateInfo={handleUpdateClinicInfo}
          onBookClick={handleBookClick}
        />

        {/* 8. Why Choose Blooming Words (6 features) */}
        <WhyChooseSection />

        {/* 9. Online / In-Person Flexible Therapy Options */}
        <TherapyModesSection onSelectMode={handleSelectMode} />

        {/* 10. Free Initial Screening / Quick Check */}
        <ScreeningQuickCheck onProceedToBooking={handleBookForService} />

        {/* 11. Appointment Booking Section */}
        <AppointmentBooking
          initialService={bookingService}
          initialMode={bookingMode}
        />

        {/* 12. Verified Testimonials (Placeholders) */}
        <TestimonialsSection />

        {/* 13. FAQ Accordion Section (11 Questions) */}
        <FaqSection onContactClick={handleContactClick} />

        {/* 14. Contact Section with Placeholders & Direct Buttons */}
        <ContactSection
          info={clinicInfo}
          onEditClick={() => setIsEditModalOpen(true)}
        />

      </main>

      {/* Footer */}
      <Footer info={clinicInfo} onNavigate={scrollToSection} />

      {/* Mobile Fixed Action Bar (Call, WhatsApp, Book) */}
      <MobileActionBar info={clinicInfo} onBookClick={handleBookClick} />

      {/* Edit Verified Clinic Info Modal */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        info={clinicInfo}
        onSave={handleUpdateClinicInfo}
      />

    </div>
  );
}
