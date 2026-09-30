import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'gold' | 'outline' | 'navy' | 'muted';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'gold',
  size = 'md',
  icon,
  className,
  children,
  ...props
}) => {
  const variantStyles = {
    gold: 'bg-gold-500/10 text-gold-theme border border-gold-500/30 shadow-[0_0_15px_-4px_rgba(197,168,128,0.2)]',
    outline: 'border border-theme text-heading-theme card-inner-theme backdrop-blur-sm',
    navy: 'card-inner-theme text-heading-theme border border-theme',
    muted: 'card-inner-theme text-muted-theme border border-theme',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 tracking-wider',
    md: 'text-xs md:text-sm px-3.5 py-1 tracking-wider',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-medium uppercase transition-colors',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
