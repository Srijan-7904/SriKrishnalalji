import React, { useState } from 'react';
import { Phone, Menu, Sun, Moon } from 'lucide-react';
import { Button } from '../ui/Button';
import { NavLink } from '../navigation/NavLink';
import { MobileMenu } from '../navigation/MobileMenu';
import { siteConfig } from '@/data/siteConfig';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';

export interface NavbarProps {
  onBookAppointment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookAppointment }) => {
  const { theme, toggleTheme } = useTheme();
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const sectionIds = ['about', 'practice', 'services', 'notices', 'compliance', 'pricing', 'faq', 'contact'];
  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out',
          isScrolled
            ? 'navbar-scrolled py-3 sm:py-3.5 shadow-lg'
            : 'bg-transparent py-4 sm:py-5 lg:py-6 border-b border-transparent'
        )}
      >
        <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-5 lg:px-6 xl:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-4 lg:gap-5">
            {/* Left: Brand Identity */}
            <a
              href="#"
              className="group flex items-center gap-2.5 sm:gap-3.5 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-xl min-w-0"
            >
              {/* Advocate Profile Portrait Seal */}
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-xl overflow-hidden border-2 border-gold-500/50 group-hover:border-gold-400 shadow-[0_0_15px_rgba(197,168,128,0.22)] group-hover:shadow-[0_0_22px_rgba(197,168,128,0.4)] transition-all shrink-0 bg-navy-950">
                <img
                  src="/profile.png"
                  alt={siteConfig.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-serif text-base sm:text-lg lg:text-xl xl:text-2xl font-bold tracking-tight text-heading-theme group-hover:text-gold-theme transition-colors leading-tight whitespace-nowrap">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] sm:text-[11px] lg:text-xs uppercase tracking-[0.16em] sm:tracking-[0.22em] text-gold-theme font-semibold mt-0.5 whitespace-nowrap">
                  {siteConfig.title} • {siteConfig.city}
                </span>
              </div>
            </a>

            {/* Center: Spacious Floating Navigation Pill */}
            <nav className="hidden xl:flex items-center space-x-0.5 2xl:space-x-1 card-inner-theme backdrop-blur-xl px-2.5 2xl:px-3.5 py-1.5 2xl:py-2 rounded-full border border-theme shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_6px_30px_rgba(0,0,0,0.4)] shrink-0">
              {siteConfig.navItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  isActive={activeSection === item.href.replace('#', '')}
                />
              ))}
            </nav>

            {/* Right: Actions for XL & Wide Desktops */}
            <div className="hidden xl:flex items-center gap-2.5 2xl:gap-3.5 shrink-0">
              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className="card-inner-theme w-9 h-9 2xl:w-10 2xl:h-10 rounded-full flex items-center justify-center text-heading-theme hover:text-gold-theme hover:border-gold-500/50 transition-all cursor-pointer shadow-sm shrink-0"
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-gold-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-800" />
                )}
              </button>

              {/* Direct Call Button */}
              <a
                href={`tel:${siteConfig.contacts.primaryPhone.replace(/\s+/g, '')}`}
                className="card-inner-theme flex items-center gap-2 px-3.5 2xl:px-4 py-2 2xl:py-2.5 rounded-full text-xs 2xl:text-sm font-semibold text-heading-theme hover:text-gold-theme hover:border-gold-500/50 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 shrink-0"
                aria-label={`Call ${siteConfig.contacts.primaryPhone}`}
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span className="hidden 2xl:inline font-bold">{siteConfig.contacts.primaryPhone}</span>
                <span className="2xl:hidden font-bold">Call</span>
              </a>

              {/* Book Appointment CTA */}
              <Button
                variant="primary"
                size="md"
                onClick={onBookAppointment}
                className="text-xs 2xl:text-sm font-bold tracking-wide rounded-full px-4 2xl:px-5 py-2 2xl:py-2.5 shadow-[0_3px_15px_rgba(197,168,128,0.3)] hover:shadow-[0_5px_22px_rgba(197,168,128,0.45)] transition-all shrink-0 whitespace-nowrap"
              >
                Book Consultation
              </Button>
            </div>

            {/* Mobile / Tablet / Zoom Hamburger & Fast Actions (< xl) */}
            <div className="flex items-center gap-2 sm:gap-2.5 xl:hidden shrink-0">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="card-inner-theme w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-heading-theme cursor-pointer shrink-0"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-gold-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-800" />
                )}
              </button>

              <Button
                variant="primary"
                size="sm"
                onClick={onBookAppointment}
                className="text-xs px-3 sm:px-4 py-2 rounded-full font-bold whitespace-nowrap shrink-0"
              >
                <span className="hidden sm:inline">Book Consultation</span>
                <span className="sm:hidden">Book</span>
              </Button>

              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                className="card-inner-theme p-2 sm:p-2.5 rounded-xl text-heading-theme focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 cursor-pointer shrink-0"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile / Compact Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
        onBookAppointment={onBookAppointment}
      />
    </>
  );
};
