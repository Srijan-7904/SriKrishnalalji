import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface IconButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  ariaLabel: string;
  children: React.ReactNode;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      variant = 'secondary',
      size = 'md',
      href,
      ariaLabel,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

    const variantStyles = {
      primary:
        'bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-sm border border-gold-300/50',
      secondary:
        'card-inner-theme text-heading-theme hover:text-gold-theme hover:border-gold-500/30',
      outline:
        'bg-transparent hover:bg-gold-500/10 text-heading-theme border border-theme hover:border-gold-500/40',
      ghost:
        'bg-transparent hover:bg-gold-500/10 text-body-theme hover:text-heading-theme',
    };

    const sizeStyles = {
      sm: 'w-8 h-8 p-1.5 text-xs',
      md: 'w-10 h-10 p-2 text-sm',
      lg: 'w-12 h-12 p-2.5 text-base',
    };

    if (href) {
      return (
        <motion.a
          href={href}
          aria-label={ariaLabel}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        aria-label={ariaLabel}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

IconButton.displayName = 'IconButton';
