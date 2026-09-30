import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { StatCard } from '../ui/StatCard';
import { siteConfig } from '@/data/siteConfig';

export const TrustStats: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 bg-transparent border-y border-theme">
      <Container size="xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.25em] text-gold-theme font-semibold block mb-2"
          >
            VERIFIED TRACK RECORD
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-heading-theme tracking-tight"
          >
            A Quarter Century of Legal Excellence
          </motion.h2>
        </div>

        {/* 5 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {siteConfig.stats.map((stat) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              label={stat.label}
              description={stat.description}
              highlight={stat.highlight}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
