import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { TrustStats } from './components/sections/TrustStats';
import { CoreExpertise } from './components/sections/CoreExpertise';
import { ProfessionalServices } from './components/sections/ProfessionalServices';
import { TaxNoticeTriage } from './components/sections/TaxNoticeTriage';
import { ComplianceTimeline } from './components/sections/ComplianceTimeline';
import { Pricing } from './components/sections/Pricing';
import { Testimonials } from './components/sections/Testimonials';
import { FAQSection } from './components/sections/FAQSection';
import { ConsultationCTA } from './components/sections/ConsultationCTA';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { AppointmentModal } from './components/ui/AppointmentModal';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { FloatingActionsBar } from './components/ui/FloatingActionsBar';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleOpenAppointment = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setModalOpen(true);
  };

  const handleCloseAppointment = () => {
    setModalOpen(false);
  };

  const handleSelectServiceFromSection = (serviceName: string) => {
    setSelectedService(serviceName);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setModalOpen(true);
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen relative text-body-theme flex flex-col font-sans selection:bg-gold-500/20 selection:text-gold-200">
        {/* Top Hardware-Accelerated Golden Reading Scroll Progress */}
        <ScrollProgress />

        {/* Ambient Site-Wide Background Image Canvas (Smooth Crossfade: bg2.png for Night, bg.png for Day) */}
        <div className="site-bg-canvas site-bg-night" aria-hidden="true" />
        <div className="site-bg-canvas site-bg-day" aria-hidden="true" />
        <div className="site-bg-tint" aria-hidden="true" />

        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Sticky Top Navbar */}
          <Navbar onBookAppointment={() => handleOpenAppointment()} />

          <main className="flex-1">
            {/* Hero Section */}
            <Hero onBookAppointment={() => handleOpenAppointment()} />

            {/* About Advocate Section */}
            <About />

            {/* Credentials & Trust Numbers */}
            <TrustStats />

            {/* 3 Core Practice Domains */}
            <CoreExpertise onSelectPractice={handleSelectServiceFromSection} />

            {/* 12 Detailed Professional Legal Services */}
            <ProfessionalServices onBookAppointment={handleOpenAppointment} />

            {/* Interactive Notice Triage Assistant */}
            <TaxNoticeTriage onSelectMatter={handleSelectServiceFromSection} />

            {/* Statutory Compliance Calendar & Risk Radar */}
            <ComplianceTimeline onSelectEvent={handleSelectServiceFromSection} />

            {/* Transparent Fee Schedule */}
            <Pricing onSelectService={handleSelectServiceFromSection} />

            {/* Real Client Testimonials */}
            <Testimonials />

            {/* Frequently Asked Legal & Chamber Questions */}
            <FAQSection />

            {/* Full-width Consultation Callout */}
            <ConsultationCTA onBookAppointment={() => handleOpenAppointment()} />

            {/* Contact & Appointment Booking with EmailJS & Chamber Info */}
            <ContactSection prefilledService={selectedService} />
          </main>

          {/* Chamber Footer */}
          <Footer />

          {/* Floating Actions Dock (Direct Call, WhatsApp, Book Consultation) */}
          <FloatingActionsBar onBookAppointment={() => handleOpenAppointment()} />

          {/* Quick Booking Modal */}
          <AppointmentModal
            isOpen={modalOpen}
            onClose={handleCloseAppointment}
            initialService={selectedService}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
