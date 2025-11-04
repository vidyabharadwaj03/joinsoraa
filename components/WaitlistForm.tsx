'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Input from './ui/Input';
import Button from './ui/Button';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email');
      setStatus('error');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      setStatus('error');
      return;
    }

    setStatus('loading');

    // TODO: Replace with actual endpoint
    try {
      console.log('Email submitted:', email);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // For now, just log - replace with actual API call
      // await fetch('/api/waitlist', { method: 'POST', body: JSON.stringify({ email }) });
      
      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setError('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <p className="text-brand-bone text-lg font-sans">
          ✨ You&apos;re on the list!
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'error') setStatus('idle');
          }}
          required
        />
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-red text-sm font-sans"
          >
            {error}
          </motion.p>
        )}
      </div>
      <Button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Joining...' : 'Get Early Access'}
      </Button>
      <p className="text-brand-haze text-sm font-sans italic text-center">
        — one authentic connection at a time
      </p>
    </form>
  );
}
