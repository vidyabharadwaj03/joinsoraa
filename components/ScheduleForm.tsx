'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Input from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

interface ScheduleFormProps {
  context: 'brands' | 'creators';
}

export default function ScheduleForm({ context }: ScheduleFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [timeWindow, setTimeWindow] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    try {
      setSubmitting(true);
      setError(null);

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: context === 'brands' ? 'brand' : 'creator',
          name,
          email,
          company: company || undefined,
          preferredTimeWindow: timeWindow || undefined,
          message,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) {
        const apiError = data?.error as string | undefined;
        const baseMessage = 'Unable to submit right now. Please try again.';
        const detailedMessage =
          process.env.NODE_ENV !== 'production' && apiError
            ? `${baseMessage} (${apiError})`
            : baseMessage;

        setError(detailedMessage);
        return;
      }

      setSubmitted(true);
      setName('');
      setEmail('');
      setCompany('');
      setTimeWindow('');
      setMessage('');
    } catch (err) {
      if (!error) {
        setError('Unable to submit right now. Please try again.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <p className="text-lg text-white">Submitted. We will follow up soon.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 text-left">
      <div className="grid md:grid-cols-2 gap-4">
        <Input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <Input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <Input
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder={context === 'brands' ? 'Company / Brand name' : 'Company / Brand (optional)'}
      />
      <Input
        value={timeWindow}
        onChange={(e) => setTimeWindow(e.target.value)}
        placeholder="Preferred time window (optional)"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Tell us a bit about what you need (optional)"
        className="w-full min-h-[120px] rounded-2xl border-2 border-gray-700 bg-transparent text-gray-200 placeholder-gray-500 px-4 py-3 text-base focus:outline-none focus:border-red-600 transition-all"
      />
      <div className="pt-2">
        <Button type="submit" variant="primary" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Send Email To Schedule'}
        </Button>
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}
    </form>
  );
}

