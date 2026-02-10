'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import WaitlistForm from '@/components/WaitlistForm';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden font-sans">
      {/* Fixed Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-[#1a0a0ae6] border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Scroll to top"
          >
            <Image
              src="/NewSoraaLogo.png"
              alt="SORAA"
              width={150}
              height={60}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </button>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm text-white">
            <a 
              href="#what-is-soraa" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('what-is-soraa');
              }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              For Creators
            </a>
            <a 
              href="#what-is-soraa" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('what-is-soraa');
              }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              For Brands
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('waitlist')}
              className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-red-600/50"
            >
              Join Waitlist
            </motion.button>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-[#1a0a0aff] backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4 text-sm text-white">
              <a 
                href="#what-is-soraa" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('what-is-soraa');
                }}
                className="text-gray-300 hover:text-white transition-colors"
              >
                For Creators
              </a>
              <a 
                href="#what-is-soraa" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('what-is-soraa');
                }}
                className="text-gray-300 hover:text-white transition-colors"
              >
                For Brands
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('waitlist')}
                className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-red-600/50 text-left w-fit"
              >
                Join Waitlist
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-32 px-6 bg-gradient-to-b from-[#1a0a0a] to-[#2a1414]">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-5xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-6xl md:text-7xl leading-tight tracking-tight text-white mb-6 font-bold"
            >
              Gen Z Is The Future Of Your Brand. Don't Get Left Behind.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl"
            >
              SORAA automatically matches your business with micro-creators and manages the entire collaboration using AI. No outreach. No guesswork. No huge budgets. Just results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('waitlist')}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-red-600/50"
              >
                Get Early Access
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('how-it-works')}
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200"
              >
                See How It Works
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ticker/Marquee Section */}
      <section className="relative bg-black text-white py-4 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <div className="text-lg tracking-wider uppercase animate-marquee flex-shrink-0">
            {'MICROINFLUENCERS × SMALL BRANDS • '.repeat(10)}
            {'MICROINFLUENCERS × SMALL BRANDS • '.repeat(10)}
          </div>
        </div>
      </section>

      {/* WHAT IS SORAA Section */}
      <section id="what-is-soraa" className="relative py-32 px-6 bg-gradient-to-b from-[#1a0a0a] to-[#2a1414]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-20"
          >
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
              WHAT IS SORAA
            </p>
            <h2 className="text-5xl md:text-6xl text-white font-bold mb-6">
              What Is SORAA
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl">
              SORAA is the platform connecting local brands with micro-creators who actually influence their communities. We use AI to match the right creators to the right businesses, turning authentic content into real local growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* For Creators Card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-[#3a1515] to-[#4a1f1f] p-12 rounded-3xl border border-[#5a2525] hover:border-[#7a3535] transition-all hover:shadow-2xl hover:shadow-red-900/30 cursor-pointer"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 to-pink-600 rounded-t-3xl"></div>
              
              {/* Main Icon */}
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-red-500/50 mb-8"
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </motion.div>

              {/* Heading */}
              <h3 className="text-3xl font-bold mb-8 text-white uppercase tracking-tight">
                For Creators
              </h3>

              {/* Bullet Points */}
              <ul className="space-y-4">
                {[
                  { icon: '✨', text: 'Auto-matching with perfect-fit brands' },
                  { icon: '💰', text: 'Set your rates, define your niche' },
                  { icon: '⚡', text: 'No cold pitches or negotiations' },
                  { icon: '💸', text: 'Get paid directly by businesses' },
                  { icon: '🎯', text: 'Create authentic content you love' },
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-4 text-lg text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
                  >
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* For Brands Card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-[#3a1515] to-[#4a1f1f] p-12 rounded-3xl border border-[#5a2525] hover:border-[#7a3535] transition-all hover:shadow-2xl hover:shadow-red-900/30 cursor-pointer"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-t-3xl"></div>
              
              {/* Main Icon */}
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-orange-500/50 mb-8"
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </motion.div>

              {/* Heading */}
              <h3 className="text-3xl font-bold mb-8 text-white uppercase tracking-tight">
                For Brands
              </h3>

              {/* Bullet Points */}
              <ul className="space-y-4">
                {[
                  { icon: '🎯', text: 'Reach Gen Z where they pay attention' },
                  { icon: '🤝', text: 'AI-powered creator matching' },
                  { icon: '📊', text: 'Verified performance tracking' },
                  { icon: '💎', text: 'No agency markup or guesswork' },
                  { icon: '🚀', text: 'Drive real local growth' },
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-4 text-lg text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
                  >
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="relative py-32 px-6 bg-gradient-to-b from-[#1a0a0a] to-[#2a1414]"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-5xl md:text-6xl text-white mb-20 font-bold"
          >
            How It Works
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: '1', title: 'Connect Profiles', desc: 'Link your socials, set your rates, define your niche.' },
              { step: '2', title: 'Match + Brief', desc: 'AI finds perfect matches. Get briefs tailored to you.' },
              { step: '3', title: 'Launch + Pay', desc: 'Create, publish, get paid. All automated.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
                className="text-center"
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-700 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-red-600/50"
                >
                  {item.step}
                </motion.div>
                <h3 className="text-2xl text-white mb-4 tracking-tight font-bold">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Breaking News Banner */}
      <section className="relative py-32 px-6 bg-black text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-sm uppercase tracking-widest font-bold mb-6">
            BREAKING NEWS:
          </p>
          <div className="flex flex-col items-center gap-6">
            <Image
              src="/NewSoraaLogo.png"
              alt="SORAA"
              width={200}
              height={80}
              className="h-20 w-auto object-contain brightness-0 invert"
            />
            <p className="text-2xl font-bold tracking-tight">
              COMING SOON
            </p>
          </div>
        </motion.div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="relative py-32 px-6 bg-gradient-to-b from-[#1a0a0a] to-[#2a1414]">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl text-white mb-8 font-bold">
              Join The Waitlist
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur">
              <WaitlistForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl text-gray-300 mb-6 font-light">
            one authentic connection at a time
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-400 mb-4">
            <a href="https://joinsoraa.com" className="hover:text-gray-300 transition-colors">
              joinsoraa.com
            </a>
            <span className="hidden md:inline">•</span>
            <a href="mailto:joinsoraa@gmail.com" className="hover:text-gray-300 transition-colors">
              joinsoraa@gmail.com
            </a>
          </div>
          <p className="text-sm text-gray-500">
            Copyright © 2025 SORAA
          </p>
        </div>
      </footer>
    </main>
  );
}
