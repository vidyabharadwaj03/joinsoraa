'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import WaitlistForm from '@/components/WaitlistForm';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden font-sans">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-20 px-6 bg-gradient-to-b from-[#1a0a0a] to-[#2a1414]">
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
              className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-4xl"
            >
              SORAA connects brands and micro-creators, and manages the collaboration end to end with AI. No outreach. No guesswork. Just results.
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

      {/* Enhanced Ticker/Marquee Section */}
      <section className="relative bg-gradient-to-r from-black via-[#190909] to-black py-6 md:py-8 overflow-hidden border-y border-red-800/40 -mt-4">
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==')] bg-repeat"></div>
        </div>
        
        {/* Animated marquee */}
        <div className="flex whitespace-nowrap animate-marquee-fast">
          {[...Array(6)].map((_, i) => (
            <span 
              key={i} 
              className="mx-10 text-xl md:text-3xl font-bold tracking-wider text-white"
              style={{ textShadow: '0 0 20px rgba(239, 68, 68, 0.5)' }}
            >
              MICROINFLUENCERS × SMALL BRANDS •
            </span>
          ))}
        </div>
      </section>

      {/* WHAT IS SORAA Section - Fixed duplicate heading */}
      <section id="what-is-soraa" className="relative py-16 px-6 bg-gradient-to-b from-[#1a0a0a] to-[#2a1414]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-5xl md:text-6xl font-bold text-white mb-8 text-center"
          >
            What Is SORAA
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-gray-300 text-center max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            The platform connecting local brands with micro-creators who actually influence their communities.{' '}
            <span className="text-white font-semibold">AI-powered matching</span> turns authentic content into real local growth.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* For Creators Card */}
            <motion.div
              onClick={() => (window.location.href = '/creators')}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
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
              onClick={() => (window.location.href = '/brands')}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
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

      {/* How It Works Section - Center-aligned */}
      <section
        id="how-it-works"
        className="relative py-16 px-6 bg-gradient-to-b from-[#1a0a0a] to-[#2a1414]"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-5xl md:text-6xl text-white mb-12 font-bold text-center"
          >
            How It Works
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Connect Profiles', desc: 'Link your socials, set your rates, define your niche.' },
              { step: '2', title: 'Match + Brief', desc: 'AI finds perfect matches. Get briefs tailored to you.' },
              { step: '3', title: 'Launch + Pay', desc: 'Create, publish, get paid. All automated.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="text-center group cursor-pointer"
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-2xl shadow-red-600/50 group-hover:shadow-red-600/80 transition-all"
                >
                  {item.step}
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
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

      {/* Breaking News Banner (simplified, logo-based) */}
      <section className="relative py-16 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-2 rounded-full bg-red-600 text-sm font-bold tracking-widest uppercase">
              Breaking News
            </span>
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="mb-4 flex justify-center"
          >
            <Image
              src="/NewSoraaLogo.png"
              alt="SORAA logo"
              width={220}
              height={80}
              className="h-16 md:h-20 w-auto object-contain"
            />
          </motion.div>

          {/* Coming Soon with subtle pulse */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <motion.p
              className="text-3xl md:text-4xl font-bold text-white tracking-wide"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              COMING SOON
            </motion.p>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            className="text-gray-400 text-lg mt-4 italic"
          >
            The future of creator-brand collaboration
          </motion.p>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="relative py-16 px-6 bg-gradient-to-b from-[#1a0a0a] to-[#2a1414]">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center mb-10"
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

      <Footer />
    </main>
  );
}
