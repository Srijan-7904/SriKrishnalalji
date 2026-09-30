import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  highlight?: boolean;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  description,
  highlight = false,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-20px' });

  useEffect(() => {
    if (!isInView || !numRef.current) return;

    // Parse numeric value and affix
    const numericMatch = value.match(/[\d,]+/);
    if (!numericMatch) {
      if (numRef.current) numRef.current.textContent = value;
      return;
    }

    const rawNumberStr = numericMatch[0].replace(/,/g, '');
    const targetNumber = parseInt(rawNumberStr, 10);
    const prefix = value.substring(0, numericMatch.index || 0);
    const suffix = value.substring((numericMatch.index || 0) + numericMatch[0].length);

    let startTime: number | null = null;
    const duration = 1600; // 1.6s balanced luxury tempo

    let animId: number;
    let lastRendered = -1;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Smooth quadratic ease-out: balanced momentum without violent initial rush or sudden drag
      const easeProgress = 1 - (1 - progress) * (1 - progress);
      let current = Math.round(easeProgress * targetNumber);

      // Smooth step quantization for large counts so the eye tracks numbers comfortably without blur
      if (progress < 0.9) {
        if (targetNumber >= 2000) {
          current = Math.floor(current / 25) * 25;
        } else if (targetNumber >= 500) {
          current = Math.floor(current / 10) * 10;
        }
      }

      if (current !== lastRendered && numRef.current) {
        lastRendered = current;
        numRef.current.textContent = `${prefix}${current.toLocaleString()}${suffix}`;
      }

      if (progress < 1) {
        animId = requestAnimationFrame(step);
      } else {
        if (numRef.current) numRef.current.textContent = value;
      }
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isInView, value]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      className={cn(
        'card-theme relative group p-6 sm:p-8 rounded-xl',
        highlight && 'shadow-[0_10px_30px_-10px_rgba(197,168,128,0.15)]',
        className
      )}
    >
      {/* Decorative top accent line */}
      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent group-hover:via-gold-400 transition-colors" />

      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span
            ref={numRef}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gold-theme tabular-nums"
          >
            0
          </span>
        </div>

        <p className="mt-2 text-sm sm:text-base font-semibold uppercase tracking-wider text-heading-theme">
          {label}
        </p>

        {description && (
          <p className="mt-2 text-xs sm:text-sm text-muted-theme leading-relaxed font-normal">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
};
