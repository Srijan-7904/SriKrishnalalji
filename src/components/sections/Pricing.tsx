import React from 'react';
import { motion } from 'framer-motion';
import { Check, Info, ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { pricingItems } from '@/data/siteConfig';

export interface PricingProps {
  onSelectService: (serviceName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectService }) => {
  return (
    <section id="pricing" className="relative py-20 md:py-32 bg-transparent border-t border-theme">
      <Container size="xl">
        <SectionHeading
          eyebrow="TRANSPARENT FEES"
          title="Professional Pricing Plans"
          subtitle="Clear and competitive pricing for quality legal and tax compliance services."
        />

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pricingItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
              whileHover={{ y: -4 }}
              className={`card-theme relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl transition-all duration-300 ${
                item.featured
                  ? 'border-2 border-gold-500/80 shadow-[0_10px_35px_-8px_rgba(197,168,128,0.22)]'
                  : ''
              }`}
            >
              {item.featured && (
                <div className="absolute -top-3 left-6">
                  <Badge variant="gold" size="sm">
                    Recommended First Step
                  </Badge>
                </div>
              )}

              <div>
                <h3 className="font-serif text-xl font-bold text-heading-theme mt-1">
                  {item.service}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-body-theme leading-relaxed font-normal min-h-[40px]">
                  {item.description}
                </p>

                <div className="mt-6 pt-5 border-t border-theme">
                  <span className="text-xs uppercase tracking-wider text-muted-theme block font-medium">
                    Starting at
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-theme">
                      {item.startingPrice}
                    </span>
                    {item.unit && (
                      <span className="text-xs text-muted-theme font-medium">
                        {item.unit}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-5 space-y-2 text-xs text-body-theme">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span>Direct Advocate Attention</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span>Statutory Compliance Check</span>
                  </div>
                </div>
              </div>

              <div className="mt-7 pt-5 border-t border-theme">
                <Button
                  variant={item.featured ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => onSelectService(item.service)}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="w-full text-xs tracking-wider uppercase font-semibold"
                >
                  Inquire Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Notice / Legal Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card-inner-theme mt-12 p-4 sm:p-5 rounded-xl max-w-3xl mx-auto flex items-start gap-3.5 text-xs text-body-theme leading-relaxed"
        >
          <Info className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-heading-theme font-medium">* Note:</strong> Fees may vary based on the complexity of the case, volume of documentation, and stage of proceedings. The above figures represent baseline professional fees and do not constitute a fixed statutory guarantee.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};
