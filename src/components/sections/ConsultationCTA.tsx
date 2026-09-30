import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Calendar, ShieldCheck } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { siteConfig } from '@/data/siteConfig';

export interface ConsultationCTAProps {
  onBookAppointment: () => void;
}

export const ConsultationCTA: React.FC<ConsultationCTAProps> = ({ onBookAppointment }) => {
  return (
    <section className="relative py-20 md:py-28 bg-transparent border-t border-theme overflow-hidden">
      {/* Background Subtle Geometric Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

      <Container size="lg" className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-theme text-xs uppercase tracking-widest font-semibold mb-6"
        >
          <ShieldCheck className="w-4 h-4 text-gold-400" />
          <span>CONFIDENTIAL &amp; AUTHORITATIVE COUNSEL</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-heading-theme tracking-tight leading-[1.16] max-w-4xl mx-auto"
        >
          Have a Tax or GST Matter
          <span className="block mt-2 gold-gradient-text">
            That Needs Expert Attention?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-body-theme max-w-2xl mx-auto font-normal"
        >
          Get professional guidance from Sri Krishna Lal Ji. Protect your business, resolve notices,
          and ensure ironclad compliance.
        </motion.p>

        {/* 3 Prominent CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={onBookAppointment}
            icon={<Calendar className="w-5 h-5" />}
            className="w-full sm:w-auto"
          >
            Book a Consultation
          </Button>

          <Button
            variant="secondary"
            size="lg"
            href={`tel:${siteConfig.contacts.primaryPhone.replace(/\s+/g, '')}`}
            icon={<Phone className="w-4 h-4 text-gold-400" />}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Call Now
          </Button>

          <a
            href={`https://wa.me/${siteConfig.contacts.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Advocate%20Sri%20Krishna%20Lal%20Ji,%20I%20would%20like%20to%20consult%20regarding%20a%20tax%20matter.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40 font-semibold text-base transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </motion.div>
      </Container>
    </section>
  );
};
