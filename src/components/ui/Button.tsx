import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold-outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      icon,
      iconPosition = 'right',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer';

    const variantStyles = {
      primary:
        'bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-navy-950 font-semibold shadow-[0_4px_16px_rgba(197,168,128,0.25)] hover:shadow-[0_6px_22px_rgba(197,168,128,0.38)] hover:brightness-105 active:brightness-95 border border-gold-300/40 rounded-lg',
      secondary:
        'card-theme text-heading-theme hover:text-gold-theme hover:border-gold-500/50 shadow-sm rounded-lg',
      'gold-outline':
        'bg-transparent hover:bg-gold-500/10 text-gold-theme border border-gold-500/50 hover:border-gold-400 shadow-sm rounded-lg',
      outline:
        'bg-transparent hover:bg-gold-500/10 text-heading-theme border border-theme hover:border-gold-500/40 rounded-lg',
      ghost:
        'bg-transparent hover:bg-gold-500/10 text-body-theme hover:text-heading-theme rounded-lg',
    };

    const sizeStyles = {
      sm: 'text-xs md:text-sm px-3.5 py-2 gap-1.5',
      md: 'text-sm md:text-base px-5 py-2.5 gap-2',
      lg: 'text-base md:text-lg px-7 py-3.5 gap-2.5 font-medium',
    };

    const content = (
      <>
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </>
    );

    if (href) {
      return (
        <motion.a
          href={href}
          whileHover={{ y: -1.5 }}
          whileTap={{ scale: 0.98 }}
          className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -1.5 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
