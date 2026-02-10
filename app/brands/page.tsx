'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScheduleForm from '@/components/ScheduleForm';
import Image from 'next/image';

export default function BrandsPage() {
  const [brandName, setBrandName] = useState('');
  const [brandEmail, setBrandEmail] = useState('');
  const [brandCompany, setBrandCompany] = useState('');
  const [brandTimeWindow, setBrandTimeWindow] = useState('');
  const [brandMessage, setBrandMessage] = useState('');
  const [brandSubmitted, setBrandSubmitted] = useState(false);

  const handleBrandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName || !brandEmail || !brandCompany) return;

    const subject = encodeURIComponent('New Brand Inquiry');
    const bodyLines = [
      `Name: ${brandName}`,
      `Email: ${brandEmail}`,
      `Company/Brand: ${brandCompany}`,
      `Preferred time window: ${brandTimeWindow || '(not provided)'}`,
      '',
      'Message:',
      brandMessage || '(no additional message)',
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));

    window.location.href = `mailto:joinsoraa@gmail.com?subject=${subject}&body=${body}`;
    setBrandSubmitted(true);
  };
  return (
    <main className="relative min-h-screen overflow-x-hidden font-sans bg-gradient-to-b from-[#1a0a0a] to-[#2a1414]">
      <Navigation />

      {/* Hero Section - full screen, impactful */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 md:pt-32 bg-gradient-to-b from-[#1a0a0a] to-[#2a1414] overflow-hidden">
        {/* Background decorative blurs */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
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
            <div className="border-2 border-orange-500/50 rounded-full px-6 py-3 backdrop-blur-sm">
              <span className="text-orange-400 text-sm font-bold tracking-widest uppercase">
                For Brands
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
            <span className="block text-white">Turn Influence</span>
            <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
              Into Impact
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed"
          >
            Soraa connects your brand with creators who actually move culture and conversions. We make influencer marketing simple, authentic, and performance-driven.
          </motion.p>

          {/* Icon grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-16"
          >
            {[
              { icon: '🎯', label: 'Precise Targeting' },
              { icon: '📊', label: 'Clear Analytics' },
              { icon: '⚡', label: 'Fast Setup' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.1, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="group cursor-pointer"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl flex items-center justify-center border border-orange-500/30 group-hover:border-orange-500/60 transition-all group-hover:shadow-2xl group-hover:shadow-orange-500/50">
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
            transition={{ delay: 1.5 }}
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

      {/* Why Choose SORAA */}
      <section id="why-choose-soraa" className="py-24 px-6 bg-gradient-to-b from-[#1a0a0a] to-[#2a1414]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 flex flex-col items-center gap-4">
              <span>Why Choose</span>
              <Image
                src="/NewSoraaLogo.png"
                alt="SORAA logo"
                width={260}
                height={80}
                className="h-14 md:h-16 w-auto object-contain"
              />
            </h2>
            <p className="text-2xl text-white font-semibold mb-2">
              Built for brands who want results, not just reach
            </p>
            <p className="text-xl text-gray-400">
              We&apos;ve reimagined influencer marketing from the ground up.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Right Creators, Real Audiences',
                description: 'Get matched with creators whose audience, values, and style align with your brand.',
              },
              {
                icon: '✨',
                title: 'Authentic Content That Converts',
                description: 'User-generated content that feels native, not like ads.',
              },
              {
                icon: '⚡',
                title: 'Streamlined Campaigns',
                description: 'Discover creators, manage collaborations, track results, all in one place.',
              },
              {
                icon: '📊',
                title: 'Data-Driven Decisions',
                description: 'Access insights on reach, engagement, and performance to maximize ROI.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (index + 1) }}
                className="bg-gradient-to-br from-[#3a1515] to-[#4a1f1f] p-8 rounded-3xl border border-orange-500/20 hover:border-orange-500/40 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl group-hover:scale-110 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="text-orange-400 text-sm font-bold tracking-widest uppercase mb-4">
              Platform Features
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: 'serif' }}
            >
              Everything you need to scale influence
            </h2>
            <p className="text-xl text-gray-400">
              Built by marketers, for marketers.
            </p>
          </div>

          {/* Feature cards */}
          <div className="space-y-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="bg-gradient-to-r from-[#2a1414] to-[#1a0a0a] p-8 rounded-2xl border-l-4 border-orange-500 hover:border-red-500 transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                Launch campaigns in minutes
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Set your goals and target audience. Our platform instantly surfaces creators who match your criteria.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="bg-gradient-to-r from-[#2a1414] to-[#1a0a0a] p-8 rounded-2xl border-l-4 border-orange-500 hover:border-red-500 transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                Collaborate with micro and macro creators
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                From niche influencers to culture-shifting voices, find the perfect mix for your campaign objectives.
              </p>
            </motion.div>
          </div>

          {/* Bullet list */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              'Launch influencer campaigns in minutes',
              'Collaborate with micro and macro creators',
              'Get high-quality content for ads & socials',
              'Track campaign performance in real time',
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                className="flex items-center gap-4"
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                <span className="text-lg text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* Taglines */}
          <div className="text-center space-y-4">
            <p className="text-2xl font-bold text-white">
              Grow awareness. Build trust. Drive sales.
            </p>
            <p className="text-xl text-gray-400">
              Soraa helps brands scale influence without losing authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section with scheduling form */}
      <section id="brand-schedule" className="py-20 px-6 bg-gradient-to-b from-[#1a0a0a] to-[#2a1414]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to launch your first campaign?
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Share a few details and we will follow up from joinsoraa@gmail.com to help you get started.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur text-left">
              <ScheduleForm context="brands" />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

