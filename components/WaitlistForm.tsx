'use client';

import { useState } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import Input from './ui/Input';
import Button from './ui/Button';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const endpoint = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    if (!/.+@.+\..+/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email.');
      return;
    }
    if (!endpoint) {
      setStatus('error');
      setMessage('Temporarily unavailable. Please try again soon.');
      return;
    }

    try {
      setStatus('loading');
      setMessage('');
      
      // Google Apps Script web apps require special handling for CORS
      // Using FormData or URL-encoded format works better than JSON
      const formData = new URLSearchParams();
      formData.append('email', email);
      
      const res = await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script web apps have CORS restrictions
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      // With no-cors mode, we can't read the response, so assume success
      // The script should handle the email submission
      setStatus('success');
      setMessage("You're on the list! 🎉");
      setEmail('');
    } catch (err) {
      console.error('Waitlist submission error:', err);
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    const divProps: HTMLMotionProps<'div'> = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      className: 'text-center',
    };
    return (
      <motion.div {...divProps}>
        <p className="text-brand-bone text-lg font-sans">
          ✨ {message || "You're on the list! 🎉"}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-4">
        <Input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'error') {
              setStatus('idle');
              setMessage('');
            }
          }}
          placeholder="Enter your email address"
          required
          aria-invalid={status === 'error' ? true : undefined}
        />
        {message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-sm font-sans ${
              status === 'error' ? 'text-brand-red' : 'text-brand-haze'
            }`}
            role="status"
            aria-live="polite"
          >
            {message}
          </motion.p>
        )}
      </div>
      <Button type="submit" disabled={status === 'loading'} aria-busy={status === 'loading'}>
        {status === 'loading' ? 'Submitting...' : 'Get Early Access'}
      </Button>
      <p className="text-brand-haze text-sm font-sans italic text-center">
        — one authentic connection at a time
      </p>
    </form>
  );
}