import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Badge } from './Badge';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={cn('flex flex-col mb-12 md:mb-16', alignmentClasses[align], className)}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-3.5"
        >
          <Badge variant="gold" size="sm">
            {eyebrow}
          </Badge>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] as const }}
        className={cn(
          'font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.18] text-heading-theme'
        )}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] as const }}
          className={cn(
            'mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-normal text-muted-theme'
          )}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.22 }}
        className={cn(
          'h-0.5 w-16 bg-gradient-to-r from-gold-400 to-transparent mt-5 origin-left',
          align === 'center' && 'origin-center'
        )}
      />
    </div>
  );
};
