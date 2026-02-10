'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function CreatorsPage() {
  const [creatorName, setCreatorName] = useState('');
  const [creatorEmail, setCreatorEmail] = useState('');
  const [creatorPlatforms, setCreatorPlatforms] = useState('');
  const [creatorNiche, setCreatorNiche] = useState('');
  const [creatorMessage, setCreatorMessage] = useState('');
  const [creatorSubmitted, setCreatorSubmitted] = useState(false);
  const [creatorSubmitting, setCreatorSubmitting] = useState(false);
  const [creatorError, setCreatorError] = useState<string | null>(null);

  const handleCreatorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!creatorName || !creatorEmail || !creatorPlatforms || !creatorNiche) return;

    try {
      setCreatorSubmitting(true);
      setCreatorError(null);

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'creator',
          name: creatorName,
          email: creatorEmail,
          platforms: creatorPlatforms,
          niche: creatorNiche,
          message: creatorMessage,
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

        setCreatorError(detailedMessage);
        return;
      }

      setCreatorSubmitted(true);
      setCreatorName('');
      setCreatorEmail('');
      setCreatorPlatforms('');
      setCreatorNiche('');
      setCreatorMessage('');
    } catch (err) {
      if (!creatorError) {
        setCreatorError('Unable to submit right now. Please try again.');
      }
    } finally {
      setCreatorSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden font-sans bg-gradient-to-b from-[#1a0a0a] to-[#2a1414]">
      <Navigation />

      {/* Hero Section - full screen, impactful */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 md:pt-32 bg-gradient-to-b from-[#1a0a0a] to-[#2a1414] overflow-hidden">
        {/* Background decorative blurs */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Small label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-8"
          >
            <div className="border-2 border-pink-500/50 rounded-full px-6 py-3 backdrop-blur-sm">
              <span className="text-pink-400 text-sm font-bold tracking-widest uppercase">
                For Creators
              </span>
            </div>
          </motion.div>

          {/* Massive headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none"
          >
            <span className="block bg-gradient-to-r from-pink-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Create.
            </span>
            <span className="block text-white">
              Collaborate.
            </span>
            <span className="block bg-gradient-to-r from-red-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Get Paid.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Soraa helps creators turn their influence into real opportunities. Work with brands you actually love, on your terms.
          </motion.p>

          {/* Founded by creators line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-2xl md:text-3xl font-semibold text-white mb-16 max-w-3xl mx-auto"
          >
            Founded by creators, for creators.
          </motion.p>

          {/* Icon grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-16"
          >
            {[
              { icon: '🎯', label: 'Perfect Matches' },
              { icon: '💰', label: 'Fair Pay' },
              { icon: '⚡', label: 'Zero Hassle' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + i * 0.1, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="group cursor-pointer"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-3xl flex items-center justify-center border border-pink-500/30 group-hover:border-pink-500/60 transition-all group-hover:shadow-2xl group-hover:shadow-pink-500/50">
                  <span className="text-5xl">{item.icon}</span>
                </div>
                <p className="text-white font-semibold text-lg">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Hero CTA intentionally kept text-only, form lives in bottom section */}

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-500"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-6 bg-[#1a0a0a]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#3a1515] to-[#4a1f1f] p-12 rounded-3xl border border-white/10 text-center"
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              We know how hard it can be to get a foot in the door, so we built a smarter, more equitable way to connect creators and brands, designed to benefit both sides.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Creators Love SORAA */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#1a0a0a] to-[#2a1414]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-white mb-16 text-center flex flex-col items-center gap-4"
          >
            <span>Why Creators Love</span>
            <Image
              src="/NewSoraaLogo.png"
              alt="SORAA logo"
              width={260}
              height={80}
              className="h-14 md:h-16 w-auto object-contain"
            />
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: '🎯',
                title: 'Brand Deals That Fit You',
                desc: 'Get matched with brands that align with your content and audience.',
              },
              {
                icon: '✨',
                title: 'Creative Freedom',
                desc: 'Create content in your own voice, no forced scripts.',
              },
              {
                icon: '💰',
                title: 'Get Paid Fairly & On Time',
                desc: 'Transparent pricing and smooth payments.',
              },
              {
                icon: '📈',
                title: 'Grow Your Personal Brand',
                desc: 'Build long-term relationships, not one-off posts.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (index + 1) }}
                className="bg-gradient-to-br from-[#3a1515] to-[#4a1f1f] p-8 rounded-3xl border border-pink-500/20 hover:border-pink-500/40 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl group-hover:scale-110 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Monetize Your Influence */}
      <section className="py-24 px-6 bg-[#1a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Everything you need to <span className="text-pink-400">Monetize</span> your influence
            </h2>
            <p className="text-xl text-gray-300">
              You create the influence. We handle the connections.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Discover paid brand collaborations',
              'Negotiate campaigns directly',
              'Showcase your content and analytics',
              'Build credibility with verified partnerships',
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex-shrink-0" />
                <span className="text-lg text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator contact form (mailto) */}
      <section id="waitlist" className="py-24 px-6 bg-gradient-to-b from-[#1a0a0a] to-[#2a1414]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to turn your influence into income?
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Share a few details so we can learn a bit about you and your work.
            </p>
            <form onSubmit={handleCreatorSubmit} className="space-y-4 text-left bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  required
                  value={creatorName}
                  onChange={(e) => setCreatorName(e.target.value)}
                  placeholder="Name"
                  className="w-full bg-transparent border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-all"
                />
                <input
                  type="email"
                  required
                  value={creatorEmail}
                  onChange={(e) => setCreatorEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full bg-transparent border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-all"
                />
              </div>
              <input
                required
                value={creatorPlatforms}
                onChange={(e) => setCreatorPlatforms(e.target.value)}
                placeholder="Your Platforms (Instagram, TikTok, etc.)"
                className="w-full bg-transparent border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-all"
              />
              <input
                required
                value={creatorNiche}
                onChange={(e) => setCreatorNiche(e.target.value)}
                placeholder="Your Niche (Fashion, Tech, Lifestyle, etc.)"
                className="w-full bg-transparent border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-all"
              />
              <textarea
                value={creatorMessage}
                onChange={(e) => setCreatorMessage(e.target.value)}
                placeholder="Tell us about yourself (optional)"
                className="w-full min-h-[120px] bg-transparent border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-all"
              />
              <button
                type="submit"
                disabled={creatorSubmitting}
                className="mt-2 inline-flex items-center justify-center bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:hover:scale-100 text-white px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all shadow-xl shadow-red-600/50"
              >
                {creatorSubmitting ? 'Submitting...' : 'Join The Waitlist'}
              </button>
              {creatorSubmitted && !creatorError && (
                <p className="mt-2 text-sm text-gray-400">
                  Submitted. We will follow up soon.
                </p>
              )}
              {creatorError && (
                <p className="mt-2 text-sm text-red-400">
                  {creatorError}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

