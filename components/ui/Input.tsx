'use client';

import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'w-full px-6 py-4 rounded-2xl bg-brand-maroon/50 border-2 border-brand-maroon',
        'text-brand-bone placeholder-brand-haze focus:outline-none focus:border-brand-red',
        'focus:ring-2 focus:ring-brand-red/20 transition-all',
        'font-sans text-lg',
        className
      )}
      {...props}
    />
  );
}
