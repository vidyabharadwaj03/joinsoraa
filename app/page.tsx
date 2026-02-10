'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
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

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-[#5a2525]">
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
          <div className="hidden md:flex items-center gap-8 font-sans text-sm">
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
            <button
              onClick={() => scrollToSection('waitlist')}
              className="bg-black text-white px-6 py-2 rounded-full font-sans text-sm hover:bg-gray-900 transition-colors"
            >
              Join Waitlist
            </button>
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
          <div className="md:hidden border-t border-[#5a2525] bg-black/95 backdrop-blur-md">
            <div className="px-6 py-4 flex flex-col gap-4 font-sans text-sm">
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
              <button
                onClick={() => scrollToSection('waitlist')}
                className="bg-black text-white px-6 py-2 rounded-full font-sans text-sm hover:bg-gray-900 transition-colors text-left w-fit"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-white mb-6 font-bold"
            >
              Gen Z Is the Future of Your Brand. Don't Get Left Behind.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 font-sans leading-relaxed max-w-4xl"
            >
              SORAA automatically matches your business with micro-creators and manages the entire collaboration using AI. No outreach. No guesswork. No huge budgets. Just results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('waitlist')}
                className="bg-black text-white px-8 py-4 rounded-full font-sans text-lg font-semibold hover:bg-gray-900 transition-colors"
              >
                Get Early Access
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('how-it-works')}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-sans text-lg font-semibold hover:bg-white hover:text-black transition-colors"
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
          <div className="text-2xl font-display tracking-wider uppercase animate-marquee flex-shrink-0">
            {'MICROINFLUENCERS × SMALL BRANDS • '.repeat(10)}
            {'MICROINFLUENCERS × SMALL BRANDS • '.repeat(10)}
          </div>
        </div>
      </section>

      {/* WHAT IS SORAA Section */}
      <section id="what-is-soraa" className="relative py-32 px-6 bg-gradient-to-b from-[#2a1414] to-[#1a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4 font-sans">
              WHAT IS SORAA
            </p>
            <p className="text-lg md:text-xl text-gray-300 font-sans leading-relaxed max-w-3xl mx-auto">
              SORAA is the platform connecting local brands with micro-creators who actually influence their communities. We use AI to match the right creators to the right businesses, turning authentic content into real local growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* For Creators Card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-[#4a1f1f] to-[#3a1515] rounded-3xl p-10 border border-[#5a2525] hover:border-[#7a3535] transition-all cursor-pointer relative overflow-hidden group shadow-lg hover:shadow-red-900/20"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-pink-500"></div>
              
              {/* Icon in gradient circle */}
              <div className="mb-6 flex items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              <h3 className="font-display text-3xl text-white mb-4 tracking-tight font-bold uppercase">
                FOR CREATORS
              </h3>
              <p className="text-gray-300 font-sans text-lg leading-relaxed mb-6">
                Turn your authentic content into consistent income. SORAA connects you with local brands that align with your values and audience. Set your rates, define your niche, and let AI handle the matching. No more cold pitches or negotiating—just create and get paid.
              </p>
              <a 
                href="#waitlist"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('waitlist');
                }}
                className="inline-flex items-center text-red-400 hover:text-red-300 font-sans text-sm font-medium group-hover:translate-x-1 transition-transform"
              >
                Learn more →
              </a>
            </motion.div>

            {/* For Brands Card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-[#4a1f1f] to-[#3a1515] rounded-3xl p-10 border border-[#5a2525] hover:border-[#7a3535] transition-all cursor-pointer relative overflow-hidden group shadow-lg hover:shadow-red-900/20"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
              
              {/* Icon in gradient circle */}
              <div className="mb-6 flex items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              <h3 className="font-display text-3xl text-white mb-4 tracking-tight font-bold uppercase">
                FOR BRANDS
              </h3>
              <p className="text-gray-300 font-sans text-lg leading-relaxed mb-6">
                Reach Gen Z where they actually pay attention. SORAA finds micro-creators in your area who have real influence with your target audience. AI-powered matching ensures authentic partnerships that drive local growth—without the agency markup or guesswork.
              </p>
              <a 
                href="#waitlist"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('waitlist');
                }}
                className="inline-flex items-center text-orange-400 hover:text-orange-300 font-sans text-sm font-medium group-hover:translate-x-1 transition-transform"
              >
                Learn more →
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Turn Content into Contracts Section */}
      <section className="relative py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl text-black mb-12 tracking-tight lowercase"
          >
            turn content into contracts.
          </motion.h2>
          <div className="space-y-6">
            {[
              { icon: '✨', text: 'Auto-matching with perfect-fit brands' },
              { icon: '💰', text: 'Transparent rates, no middleman' },
              { icon: '⚡', text: 'One-click briefs, instant approvals' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-4 text-xl text-gray-800 font-sans"
              >
                <span className="text-3xl">{item.icon}</span>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Turn Fans into Champions Section */}
      <section className="relative py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl text-black mb-12 tracking-tight lowercase"
          >
            turn fans into champions.
          </motion.h2>
          <div className="space-y-6">
            {[
              { icon: '🎯', text: 'Niche targeting, verified performance' },
              { icon: '🤝', text: 'Direct creator relationships' },
              { icon: '💎', text: 'No agency tax, transparent pricing' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-4 text-xl text-gray-800 font-sans"
              >
                <span className="text-3xl">{item.icon}</span>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="relative py-32 px-6 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl text-black mb-20 text-center tracking-tight lowercase"
          >
            how it works
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: '1', title: 'Connect profiles', desc: 'Link your socials, set your rates, define your niche.' },
              { step: '2', title: 'Match + brief', desc: 'AI finds perfect matches. Get briefs tailored to you.' },
              { step: '3', title: 'Launch + pay', desc: 'Create, publish, get paid. All automated.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center font-display text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="font-display text-2xl text-black mb-4 tracking-tight font-bold">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-sans text-lg">
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
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-sm uppercase tracking-widest font-bold mb-6 font-sans">
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
            <p className="font-display text-2xl font-bold tracking-tight">
              — COMING SOON
            </p>
          </div>
        </motion.div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="relative py-32 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl text-black mb-8 tracking-tight lowercase">
              join the waitlist
            </h2>
            <WaitlistForm />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl text-gray-300 font-sans mb-6 font-light">
            — one authentic connection at a time
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 font-sans text-sm text-gray-400 mb-4">
            <a href="https://joinsoraa.com" className="hover:text-white transition-colors">
              joinsoraa.com
            </a>
            <span className="hidden md:inline">•</span>
            <a href="mailto:joinsoraa@gmail.com" className="hover:text-white transition-colors">
              joinsoraa@gmail.com
            </a>
          </div>
          <p className="text-sm text-gray-400 font-sans">
            Copyright © 2025 SORAA
          </p>
        </div>
      </footer>
    </main>
  );
}
