import React from 'react';
import { cn } from '@/lib/utils';

export interface NavLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  mobile?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  isActive = false,
  onClick,
  className,
  mobile = false,
}) => {
  if (mobile) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={cn(
          'flex items-center justify-between py-3 px-4 rounded-lg text-base font-medium transition-colors',
          isActive
            ? 'bg-gold-500/10 text-gold-theme border-l-2 border-gold-400'
            : 'text-body-theme hover:text-heading-theme hover:bg-gold-500/10',
          className
        )}
      >
        <span>{label}</span>
        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />}
      </a>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'relative whitespace-nowrap px-2.5 2xl:px-3.5 py-1.5 2xl:py-2 text-[12px] 2xl:text-[13.5px] font-medium tracking-wide rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400',
        isActive
          ? 'bg-gold-500/20 text-gold-theme font-semibold shadow-sm'
          : 'text-body-theme hover:text-heading-theme hover:bg-gold-500/10',
        className
      )}
    >
      <span>{label}</span>
    </a>
  );
};
