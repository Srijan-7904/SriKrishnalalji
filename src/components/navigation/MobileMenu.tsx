import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageSquare, MapPin, Clock } from 'lucide-react';
import { NavLink } from './NavLink';
import { Button } from '../ui/Button';
import { siteConfig } from '@/data/siteConfig';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onBookAppointment: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeSection,
  onBookAppointment,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-navy-950/80 backdrop-blur-md xl:hidden"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="card-theme fixed inset-y-0 right-0 z-50 w-full max-w-xs border-l border-theme shadow-2xl flex flex-col justify-between p-6 xl:hidden overflow-y-auto"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-theme">
                <div>
                  <h3 className="font-serif text-lg font-bold text-heading-theme tracking-wide">
                    {siteConfig.name}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-gold-theme font-medium">
                    {siteConfig.title}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="p-2 rounded-lg text-muted-theme hover:text-heading-theme hover:bg-gold-500/10 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col space-y-1">
                {siteConfig.navItems.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    mobile
                    isActive={activeSection === item.href.replace('#', '')}
                    onClick={onClose}
                  />
                ))}
              </nav>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => {
                    onClose();
                    onBookAppointment();
                  }}
                >
                  Book Appointment
                </Button>

                <a
                  href={`tel:${siteConfig.contacts.primaryPhone.replace(/\s+/g, '')}`}
                  className="card-inner-theme flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg text-heading-theme hover:text-gold-theme hover:border-gold-500/40 text-sm font-medium transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>Call {siteConfig.contacts.primaryPhone}</span>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.contacts.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-emerald-950/20 dark:bg-emerald-950/40 hover:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40 text-sm font-medium transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Legal Chamber</span>
                </a>
              </div>
            </div>

            {/* Chamber Location & Hours */}
            <div className="mt-8 pt-5 border-t border-theme text-xs text-muted-theme space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-heading-theme">{siteConfig.offices[0].title}</p>
                  <p>{siteConfig.offices[0].addressLines.join(', ')}</p>
                  <p>{siteConfig.offices[0].city}, UP - {siteConfig.offices[0].pincode}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Mon-Fri: {siteConfig.workingHours.weekdays}</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
