'use client';

import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'w-full px-6 py-4 rounded-full border-2 border-gray-300',
        'text-black placeholder-gray-400 focus:outline-none focus:border-black',
        'transition-all font-sans text-lg bg-white',
        className
      )}
      {...props}
    />
  );
}
