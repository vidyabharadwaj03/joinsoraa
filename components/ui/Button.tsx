'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'px-8 py-4 rounded-2xl font-display text-lg uppercase tracking-[0.06em] transition-colors',
        variant === 'primary' &&
          'bg-brand-red text-brand-bone hover:bg-brand-rose',
        variant === 'ghost' &&
          'border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-brand-bone',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
