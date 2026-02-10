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

  // const onSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (status === 'loading') return;

  //   if (!/.+@.+\..+/.test(email)) {
  //     setStatus('error');
  //     setMessage('Please enter a valid email.');
  //     return;
  //   }
  //   if (!endpoint) {
  //     setStatus('error');
  //     setMessage('Temporarily unavailable. Please try again soon.');
  //     return;
  //   }

  //   try {
  //     setStatus('loading');
  //     setMessage('');
      
  //     // Try with CORS first to get response
  //     // Google Apps Script web apps should handle CORS if deployed correctly
  //     const formData = new URLSearchParams();
  //     formData.append('email', email);
      
  //     const res = await fetch(endpoint, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //       body: formData.toString(),
  //     });

  //     // Try to read the response
  //     let responseData;
  //     try {
  //       const text = await res.text();
  //       responseData = text ? JSON.parse(text) : {};
  //     } catch (parseError) {
  //       // If we can't parse, check status
  //       if (res.ok) {
  //         responseData = { ok: true };
  //       } else {
  //         throw new Error(`HTTP ${res.status}`);
  //       }
  //     }

  //     // Check for errors in response
  //     if (responseData.ok === false) {
  //       throw new Error(responseData.error || responseData.message || 'Submission failed');
  //     }

  //     // Success!
  //     setStatus('success');
  //     setMessage("You're on the list! 🎉");
  //     setEmail('');
  //   } catch (err: any) {
  //     console.error('Waitlist submission error:', err);
  //     setStatus('error');
  //     setMessage(err.message || 'Something went wrong. Please try again.');
  //   }
  // };


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
  
      const formData = new URLSearchParams();
      formData.append('email', email);
  
      // IMPORTANT: no custom headers → keeps it a “simple” POST (no CORS preflight)
      const res = await fetch(endpoint, {
        method: 'POST',
        body: formData, // let the browser set Content-Type
      });
  
      // Apps Script often replies text/plain. Read as text, then try JSON.
      const text = await res.text();
      let data: any = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        // If parsing fails but HTTP is OK and body empty, treat as success
        if (res.ok && !text) data = { ok: true };
      }
  
      if (!res.ok || data?.ok === false) {
        const reason = data?.error || data?.message || `HTTP ${res.status}`;
        throw new Error(reason);
      }
  
      setStatus('success');
      setMessage("You're on the list! 🎉");
      setEmail('');
    } catch (err: any) {
      console.error('Waitlist submission error:', err);
      setStatus('error');
      setMessage(err?.message || 'Something went wrong. Please try again.');
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
        <p className="text-black text-lg font-sans">
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
              status === 'error' ? 'text-red-600' : 'text-gray-600'
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
      <p className="text-gray-600 text-sm font-sans italic text-center">
        — one authentic connection at a time
      </p>
    </form>
  );
}