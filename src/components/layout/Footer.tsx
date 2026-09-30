import React from 'react';
import { Phone, MessageSquare, Mail, MapPin, Scale } from 'lucide-react';
import { Container } from '../ui/Container';
import { siteConfig } from '@/data/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950/70 backdrop-blur-[2px] border-t border-theme pt-16 pb-12 text-muted-theme text-sm">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-theme">
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-gold-500/40 shadow-sm shrink-0 bg-navy-950">
                <img
                  src="/profile.png"
                  alt={siteConfig.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-heading-theme block">
                  {siteConfig.name}
                </span>
                <span className="text-xs uppercase tracking-widest text-gold-theme font-medium">
                  {siteConfig.title}
                </span>
              </div>
            </div>

            <p className="text-body-theme text-sm leading-relaxed max-w-sm font-normal">
              Providing expert tax and GST legal solutions in Varanasi. Dedicated to protecting your
              financial interests with transparent and reliable advice.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`tel:${siteConfig.contacts.primaryPhone.replace(/\s+/g, '')}`}
                className="card-inner-theme w-9 h-9 rounded-lg flex items-center justify-center text-muted-theme hover:text-gold-theme hover:border-gold-500/40 transition-colors"
                aria-label="Call Advocate"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${siteConfig.contacts.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-950/20 dark:bg-emerald-950/40 border border-emerald-500/40 hover:border-emerald-500 flex items-center justify-center text-emerald-700 dark:text-emerald-300 transition-colors"
                aria-label="WhatsApp Legal Chamber"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${siteConfig.contacts.email}`}
                className="card-inner-theme w-9 h-9 rounded-lg flex items-center justify-center text-muted-theme hover:text-gold-theme hover:border-gold-500/40 transition-colors"
                aria-label="Email Advocate"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-heading-theme">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-body-theme hover:text-gold-theme transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-body-theme hover:text-gold-theme transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-body-theme hover:text-gold-theme transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-body-theme hover:text-gold-theme transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-body-theme hover:text-gold-theme transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Key Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-heading-theme">
              Key Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-body-theme hover:text-gold-theme transition-colors">
                  GST Registration &amp; Return
                </a>
              </li>
              <li>
                <a href="#services" className="text-body-theme hover:text-gold-theme transition-colors">
                  Income Tax Return (ITR)
                </a>
              </li>
              <li>
                <a href="#services" className="text-body-theme hover:text-gold-theme transition-colors">
                  Tax Notices &amp; Appeals
                </a>
              </li>
              <li>
                <a href="#services" className="text-body-theme hover:text-gold-theme transition-colors">
                  Business Tax Planning
                </a>
              </li>
            </ul>
          </div>

          {/* Chamber Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-heading-theme">
              Chamber Contacts
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-body-theme">
                  Nae Basti, Chet Ganj, Ishwar Gangi, Varanasi - 221001
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.contacts.primaryPhone.replace(/\s+/g, '')}`}
                  className="hover:text-gold-theme text-heading-theme font-medium"
                >
                  {siteConfig.contacts.primaryPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.contacts.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-600 text-heading-theme font-medium"
                >
                  {siteConfig.contacts.whatsapp} (WhatsApp)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contacts.email}`}
                  className="hover:text-gold-theme text-heading-theme truncate"
                >
                  {siteConfig.contacts.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-theme text-center sm:text-left">
          <p>© 2026 Sri Krishna Lal Ji - Tax Advocate. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <Scale className="w-3.5 h-3.5 text-gold-400" />
            <span>Designed for professional legal services in Varanasi, India.</span>
          </p>
        </div>
      </Container>
    </footer>
  );
};
