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

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setSubmitting(true);

    const isBrand = context === 'brands';
    const subject = encodeURIComponent(
      isBrand ? 'New Brand Inquiry' : 'New Creator Signup'
    );

    const lines: string[] = [];

    if (isBrand) {
      lines.push('Type: Brand');
      lines.push(`Name: ${name}`);
      lines.push(`Email: ${email}`);
      lines.push(`Company/Brand: ${company || '(not provided)'}`);
      lines.push(
        `Preferred time window: ${timeWindow || '(not provided)'}`
      );
    } else {
      lines.push('Type: Creator');
      lines.push(`Name: ${name}`);
      lines.push(`Email: ${email}`);
      lines.push(`Company / Brand: ${company || '(not provided)'}`);
      lines.push(
        `Preferred time window: ${timeWindow || '(not provided)'}`
      );
    }

    lines.push('');
    lines.push('Message:');
    lines.push(message || '(no additional message)');

    const body = encodeURIComponent(lines.join('\n'));
    window.location.href = `mailto:joinsoraa@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <p className="text-lg text-white">
          Your email draft is ready. Send it to schedule a time.
        </p>
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
    </form>
  );
}

