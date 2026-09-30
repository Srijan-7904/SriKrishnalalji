import React from 'react';
import { motion } from 'framer-motion';
import {
  FileSpreadsheet,
  ReceiptText,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { corePracticeAreas } from '@/data/siteConfig';

export interface CoreExpertiseProps {
  onSelectPractice?: (practiceTitle: string) => void;
}

export const CoreExpertise: React.FC<CoreExpertiseProps> = ({ onSelectPractice }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-7 h-7 text-gold-400" />;
      case 'ReceiptText':
        return <ReceiptText className="w-7 h-7 text-gold-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-7 h-7 text-gold-400" />;
      default:
        return <FileSpreadsheet className="w-7 h-7 text-gold-400" />;
    }
  };

  return (
    <section id="practice" className="relative py-20 md:py-32 bg-transparent border-t border-theme">
      <Container size="xl">
        <SectionHeading
          eyebrow="CORE PRACTICE DOMAINS"
          title="Key Practice Areas"
          subtitle="Comprehensive legal and compliance solutions tailored for individuals, MSMEs, and large corporations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {corePracticeAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] as const }}
              whileHover={{ y: -6 }}
              className="card-theme group relative flex flex-col justify-between p-8 rounded-2xl shadow-xl transition-all duration-300"
            >
              {/* Top ambient hairline */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent group-hover:via-gold-400/60 transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="card-inner-theme flex items-center justify-center w-14 h-14 rounded-xl group-hover:scale-105 transition-all shadow-md">
                    {getIcon(area.iconName)}
                  </div>
                  <span className="font-serif text-2xl font-bold text-muted-theme group-hover:text-gold-theme transition-colors">
                    {area.number}
                  </span>
                </div>

                <span className="text-xs uppercase tracking-widest text-gold-theme font-semibold block mb-2">
                  {area.category}
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-heading-theme group-hover:text-gold-theme transition-colors">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm text-body-theme leading-relaxed font-normal">
                  {area.description}
                </p>

                <div className="mt-8 pt-6 border-t border-theme">
                  <span className="text-xs uppercase tracking-wider text-muted-theme font-semibold block mb-3">
                    Statutory Services:
                  </span>
                  <ul className="space-y-2.5">
                    {area.services.map((service, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2.5 text-sm text-body-theme">
                        <CheckCircle2 className="w-4 h-4 text-gold-400/80 shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-theme flex items-center justify-between text-sm font-semibold text-gold-theme transition-colors">
                <button
                  type="button"
                  onClick={() => onSelectPractice && onSelectPractice(area.title)}
                  className="flex items-center gap-2 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded"
                >
                  <span>Request Legal Assistance</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
