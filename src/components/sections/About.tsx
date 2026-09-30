import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Scale,
  ShieldCheck,
  Clock,
  UserCheck,
  FileCheck,
  CheckCircle,
  MapPin,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { expertiseItems, siteConfig } from '@/data/siteConfig';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-5 h-5 text-gold-400" />;
      case 'Scale':
        return <Scale className="w-5 h-5 text-gold-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-gold-400" />;
      case 'ClockCheck':
        return <Clock className="w-5 h-5 text-gold-400" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-gold-400" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-gold-400" />;
      default:
        return <CheckCircle className="w-5 h-5 text-gold-400" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="about" className="relative py-20 md:py-32 bg-transparent border-t border-theme">
      <Container size="xl">
        <SectionHeading
          eyebrow="ABOUT THE ADVOCATE"
          title="Expertise You Can Trust in Tax & Legal Matters."
          subtitle="Providing uncompromising legal rigor, statutory defense, and strategic financial advisory across Eastern Uttar Pradesh."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left: Visual Identity & Juridical Plaque (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-5"
          >
            <div className="card-theme relative p-8 sm:p-10 rounded-2xl overflow-hidden">
              {/* Gold hairline ornament corner */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold-400/40" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-gold-400/40" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-gold-400/40" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold-400/40" />

              <div className="flex flex-col items-center text-center">
                {/* Emblem Seal */}
                <div className="card-inner-theme w-20 h-20 rounded-full flex items-center justify-center text-gold-theme shadow-[0_0_20px_rgba(197,168,128,0.2)] mb-6">
                  <Scale className="w-10 h-10 text-gold-400" />
                </div>

                <span className="text-xs uppercase tracking-[0.25em] text-gold-theme font-semibold">
                  Advocate Chamber
                </span>
                
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-heading-theme mt-1">
                  {siteConfig.name}
                </h3>
                
                <p className="text-sm font-medium text-muted-theme mt-1">
                  Tax Advocate &amp; Appellate Counsel
                </p>

                <div className="w-16 h-px bg-gold-500/30 my-5" />

                <div className="space-y-3 text-xs sm:text-sm text-body-theme w-full text-left">
                  <div className="card-inner-theme flex items-center gap-3 p-3 rounded-lg">
                    <Award className="w-4 h-4 text-gold-400 shrink-0" />
                    <span><strong>25+ Years</strong> of Continuous Legal Standing</span>
                  </div>

                  <div className="card-inner-theme flex items-center gap-3 p-3 rounded-lg">
                    <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>Chambers at <strong>Chet Ganj &amp; Teliyabag</strong>, Varanasi</span>
                  </div>

                  <div className="card-inner-theme flex items-center gap-3 p-3 rounded-lg">
                    <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>Statutory Practice: <strong>Income Tax &amp; GST Acts</strong></span>
                  </div>
                </div>

                <div className="mt-7 pt-5 border-t border-theme w-full text-center">
                  <span className="text-[11px] uppercase tracking-widest text-muted-theme font-medium">
                    Jurisdiction: Uttar Pradesh Tax Bar &amp; Appellate Authorities
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: About Copy & 6 Expertise Cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="max-w-none space-y-4"
            >
              <p className="text-base sm:text-lg text-body-theme leading-relaxed font-normal">
                <strong className="text-gold-theme font-semibold">Sri Krishna Lal Ji</strong> is a practicing
                Tax Advocate in Varanasi with expertise in Income Tax and Goods &amp; Services Tax (GST).
              </p>
              <p className="text-base sm:text-lg text-body-theme leading-relaxed font-normal">
                He provides professional legal assistance for tax compliance, GST registration, return
                filing, tax notices, appeals, and financial advisory services for individuals, businesses,
                and organizations.
              </p>
            </motion.div>

            {/* 6 Expertise Highlights */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {expertiseItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                  className="card-theme flex items-start gap-3.5 p-4 rounded-xl"
                >
                  <div className="card-inner-theme flex items-center justify-center w-10 h-10 rounded-lg shrink-0">
                    {getIcon(item.iconName)}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-heading-theme font-serif tracking-wide">
                      {item.title}
                    </h4>
                    {item.subtitle && (
                      <span className="text-xs text-gold-theme font-medium block mt-0.5">
                        {item.subtitle}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
