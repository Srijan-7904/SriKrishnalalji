import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from './Badge';

export interface ServiceCardProps {
  title: string;
  category?: string;
  description: string;
  features?: string[];
  icon: React.ReactNode;
  href?: string;
  badge?: string;
  highlight?: boolean;
  className?: string;
  onInquire?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  category,
  description,
  features,
  icon,
  badge,
  highlight = false,
  className,
  onInquire,
}) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={cn(
        'card-theme group relative flex flex-col justify-between p-6 sm:p-8 rounded-xl transition-all duration-300',
        highlight && 'border-gold-500/50 shadow-[0_8px_30px_rgba(197,168,128,0.12)]',
        className
      )}
    >
      <div>
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="card-inner-theme flex items-center justify-center w-12 h-12 rounded-lg text-gold-400 group-hover:text-gold-theme transition-colors shadow-sm">
            {icon}
          </div>

          <div className="flex items-center gap-2">
            {badge && (
              <Badge variant="gold" size="sm">
                {badge}
              </Badge>
            )}
            <div className="text-muted-theme group-hover:text-gold-theme group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </div>

        {category && (
          <span className="text-xs uppercase tracking-widest text-gold-theme font-medium block mb-1.5">
            {category}
          </span>
        )}

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-heading-theme group-hover:text-gold-theme transition-colors">
          {title}
        </h3>

        <p className="mt-3 text-sm text-body-theme leading-relaxed font-normal">
          {description}
        </p>

        {features && features.length > 0 && (
          <ul className="mt-6 space-y-2 border-t border-theme pt-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-xs sm:text-sm text-body-theme">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mr-2.5 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>

      {onInquire && (
        <button
          onClick={onInquire}
          className="mt-6 pt-4 text-xs font-semibold uppercase tracking-wider text-gold-theme hover:text-gold-theme text-left border-t border-theme flex items-center justify-between group/btn cursor-pointer"
        >
          <span>Consult on this Matter</span>
          <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
        </button>
      )}
    </motion.div>
  );
};
