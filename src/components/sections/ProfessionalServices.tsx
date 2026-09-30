import React from 'react';
import { motion } from 'framer-motion';
import {
  Store,
  CalendarCheck,
  FileCheck2,
  AlertCircle,
  ShieldAlert,
  Scale,
  Briefcase,
  Compass,
  LineChart,
  Factory,
  CreditCard,
  FolderCheck,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { professionalServices } from '@/data/siteConfig';

export interface ProfessionalServicesProps {
  onBookAppointment: (prefilledService?: string) => void;
}

export const ProfessionalServices: React.FC<ProfessionalServicesProps> = ({
  onBookAppointment,
}) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Store':
        return <Store className="w-5 h-5 text-gold-400" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-5 h-5 text-gold-400" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-5 h-5 text-gold-400" />;
      case 'AlertCircle':
        return <AlertCircle className="w-5 h-5 text-gold-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-gold-400" />;
      case 'Scale':
        return <Scale className="w-5 h-5 text-gold-400" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-gold-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-gold-400" />;
      case 'LineChart':
        return <LineChart className="w-5 h-5 text-gold-400" />;
      case 'Factory':
        return <Factory className="w-5 h-5 text-gold-400" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5 text-gold-400" />;
      case 'FolderCheck':
        return <FolderCheck className="w-5 h-5 text-gold-400" />;
      default:
        return <HelpCircle className="w-5 h-5 text-gold-400" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
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
    <section id="services" className="relative py-20 md:py-32 bg-transparent border-t border-theme">
      <Container size="xl">
        <SectionHeading
          eyebrow="EXTENSIVE STATUTORY SCOPE"
          title="Professional Legal Services"
          subtitle="End-to-end support for taxation, representation, and advisory services."
        />

        {/* 12 Services Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {professionalServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              onClick={() => onBookAppointment(service.title)}
              className="card-theme group cursor-pointer p-6 rounded-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="card-inner-theme flex items-center justify-center w-11 h-11 rounded-lg transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs text-muted-theme group-hover:text-gold-theme transition-colors">
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-heading-theme group-hover:text-gold-theme transition-colors leading-snug">
                  {service.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-body-theme leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-theme flex items-center text-xs font-semibold text-gold-theme transition-colors">
                <span>Inquire for this Service</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Consultation Banner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-theme mt-14 p-8 sm:p-10 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-heading-theme">
              Need help with your tax matter?
            </h3>
            <p className="text-sm sm:text-base text-body-theme mt-1">
              Schedule a consultation with Sri Krishna Lal Ji to evaluate your legal options.
            </p>
          </div>

          <Button
            variant="primary"
            size="lg"
            onClick={() => onBookAppointment()}
            className="shrink-0 w-full sm:w-auto"
          >
            Book a Consultation
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};
