import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2, Award, Landmark } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { TypewriterText } from '../ui/TypewriterText';
import { siteConfig } from '@/data/siteConfig';

export interface HeroProps {
  onBookAppointment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookAppointment }) => {
  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex items-center pt-32 pb-16 md:pt-42 md:pb-24 overflow-hidden">
      {/* Background Subtle Atmosphere */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Restrained ambient glow */}
      <motion.div
        animate={{
          opacity: [0.12, 0.2, 0.12],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-gold-500/10 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          opacity: [0.08, 0.16, 0.08],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-10 right-0 w-[480px] h-[480px] rounded-full bg-navy-700/30 blur-[140px] pointer-events-none"
      />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions (7 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* 1. Eyebrow */}
            <motion.div variants={itemVariants} className="mb-5">
              <Badge variant="gold" size="md" icon={<Landmark className="w-3.5 h-3.5" />}>
                {siteConfig.tagline}
              </Badge>
            </motion.div>

            {/* 2. Heading with Typewriter & Backspace Animation */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-[4.2rem] font-bold text-heading-theme tracking-tight leading-[1.12]"
            >
              Trusted Tax &amp;
              <span className="block mt-1 gold-gradient-text min-h-[1.2em]">
                <TypewriterText
                  phrases={[
                    'GST Legal Solutions.',
                    'Income Tax Advisory.',
                    'Notice & Audit Defense.',
                    'Appellate Representation.',
                  ]}
                  typingSpeed={80}
                  deletingSpeed={45}
                  pauseDuration={2400}
                />
              </span>
            </motion.h1>

            {/* 3. Supporting Text */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg md:text-xl text-body-theme leading-relaxed max-w-2xl font-normal"
            >
              Expert legal assistance for tax compliance, GST registration, return filing,
              tax notices, appeals, and financial advisory for individuals and businesses.
            </motion.p>

            {/* Credential micro-points */}
            <motion.div
              variants={itemVariants}
              className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-body-theme font-medium"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                <span>25+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                <span>High Court &amp; Tribunal Practice</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                <span>Varanasi Chamber</span>
              </div>
            </motion.div>

            {/* 4. CTA Buttons & Direct Call Action */}
            <motion.div
              variants={itemVariants}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={onBookAppointment}
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Get Free Consultation
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="#services"
                className="w-full sm:w-auto"
              >
                Explore Services
              </Button>
            </motion.div>

            {/* Direct Call Action Bar */}
            <motion.div
              variants={itemVariants}
              className="mt-6 pt-5 border-t border-theme flex items-center gap-3 w-full max-w-lg"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-theme shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm">
                <span className="text-muted-theme block font-normal">Direct Advocate Line:</span>
                <a
                  href={`tel:${siteConfig.contacts.primaryPhone.replace(/\s+/g, '')}`}
                  className="font-semibold text-heading-theme hover:text-gold-theme tracking-wide transition-colors"
                >
                  {siteConfig.contacts.primaryPhone}
                </a>
                <span className="text-muted-theme mx-2">•</span>
                <span className="text-muted-theme">0542-2210780</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Trust Panel / Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-5 relative"
          >
            {/* The Visual Trust Card */}
            <div className="card-theme relative rounded-2xl p-7 sm:p-9 overflow-hidden">
              {/* Subtle gold watermark frame */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-bl-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold-500/5 rounded-tr-full pointer-events-none" />

              {/* Advocate Chamber Seal Header */}
              <div className="flex items-center justify-between pb-6 border-b border-theme">
                <div className="flex items-center gap-3.5">
                  <div className="card-inner-theme w-12 h-12 rounded-xl flex items-center justify-center text-gold-theme font-serif font-bold text-xl shadow-inner">
                    <Award className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h2 className="font-serif text-lg font-bold text-heading-theme leading-tight">
                      Sri Krishna Lal Ji
                    </h2>
                    <p className="text-xs uppercase tracking-widest text-gold-theme font-medium">
                      Advocate • High Court &amp; Tax Bar
                    </p>
                  </div>
                </div>

                <div className="hidden sm:block">
                  <Badge variant="outline" size="sm">
                    Varanasi, UP
                  </Badge>
                </div>
              </div>

              {/* Trust Statistics Stack / Grid */}
              <div className="mt-7 space-y-4">
                {/* 1. 25+ Years */}
                <div className="card-inner-theme p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-theme">
                      25+
                    </span>
                    <p className="text-xs uppercase tracking-wider text-heading-theme font-semibold mt-0.5">
                      Years of Practice
                    </p>
                  </div>
                  <ShieldCheck className="w-7 h-7 text-gold-400/50" />
                </div>

                {/* 2. 5,000+ Returns */}
                <div className="card-inner-theme p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-heading-theme">
                      5,000+
                    </span>
                    <p className="text-xs uppercase tracking-wider text-heading-theme font-semibold mt-0.5">
                      Tax Returns Filed
                    </p>
                  </div>
                  <span className="text-xs text-gold-theme font-semibold px-2 py-1 rounded bg-gold-500/10 border border-gold-500/20">
                    Defect-Free
                  </span>
                </div>

                {/* 3. 95% Success Rate */}
                <div className="card-inner-theme p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-theme">
                      95%
                    </span>
                    <p className="text-xs uppercase tracking-wider text-heading-theme font-semibold mt-0.5">
                      Success Rate
                    </p>
                  </div>
                  <span className="text-xs text-muted-theme">Notice &amp; Audit Defense</span>
                </div>
              </div>

              {/* Consultation availability indicator */}
              <div className="mt-6 pt-5 border-t border-theme flex items-center justify-between text-xs text-muted-theme">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                  <span className="text-emerald-500 dark:text-emerald-400 font-medium">Chamber Consultations Active</span>
                </span>
                <span className="font-medium text-muted-theme">Chet Ganj &amp; Teliyabag</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
