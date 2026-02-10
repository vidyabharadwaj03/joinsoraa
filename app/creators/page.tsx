'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WaitlistForm from '@/components/WaitlistForm';
import ScheduleForm from '@/components/ScheduleForm';

export default function CreatorsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden font-sans bg-gradient-to-b from-[#1a0a0a] to-[#2a1414]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 md:pt-28 pb-16 px-6 bg-gradient-to-b from-[#1a0a0a] to-[#2a1414]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left column - Text */}
          <div className="space-y-6">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-block"
            >
              <div className="inline-block border-2 border-white/30 rounded-full px-6 py-2">
                <span className="text-white text-sm font-bold tracking-widest uppercase">
                  For Creators
                </span>
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="text-6xl md:text-7xl font-bold"
            >
              <span className="bg-gradient-to-r from-red-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Create. Collaborate. Get Paid.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              Soraa helps creators turn their influence into real opportunities. Work with brands you actually love on your terms.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="text-lg text-gray-400 leading-relaxed max-w-2xl"
            >
              Founded by creators, for creators, we know how hard it can be to get a foot in the door. So we built a smarter, more equitable way to connect creators and brands, designed to benefit both sides.
            </motion.p>
          </div>

          {/* Right column - Supporting card (no duplicate slogan) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative bg-gradient-to-br from-[#3a1515] to-[#4a1f1f] p-12 rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-t-3xl" />
            <div className="inline-block bg-white/10 rounded-full px-6 py-2 mb-6">
              <span className="text-white text-xs font-bold tracking-widest uppercase">
                Built For Creators
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Turn your influence into a real business
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Soraa gives you a single home for brand collaborations, rates, and relationships so you can spend more time creating.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              Keep control of your voice and your value while we handle the matching, briefs, and logistics in the background.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Creators Love SORAA */}
      <section className="py-20 px-6 bg-[#1a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
          >
            Why Creators Love SORAA
          </motion.h2>

          {/* Featured card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-gradient-to-br from-[#3a1515] to-[#4a1f1f] p-12 md:p-16 rounded-3xl border border-white/10 mb-12 text-center"
          >
            <div className="text-red-400 text-sm font-bold tracking-widest uppercase mb-6">
              Why Creators Love SORAA
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your creativity. Your rules. Your income.
            </h3>
            <p className="text-xl text-gray-300">
              We built Soraa to empower creators, not exploit them.
            </p>
          </motion.div>

          {/* Bullet points grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Brand Deals That Fit You',
                description: 'Get matched with brands that align with your content and audience.',
              },
              {
                icon: '✨',
                title: 'Creative Freedom',
                description: 'Create content in your own voice with no forced scripts.',
              },
              {
                icon: '💰',
                title: 'Get Paid Fairly & On Time',
                description: 'Transparent pricing and smooth payments.',
              },
              {
                icon: '📈',
                title: 'Grow Your Personal Brand',
                description: 'Build long-term relationships, not one-off posts.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1), ease: 'easeOut' }}
                className="space-y-4"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Monetize Your Influence - text focused */} 
      <section className="py-20 px-6 bg-gradient-to-b from-[#1a0a0a] to-[#2a1414]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Discover paid brand collaborations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Browse campaigns from brands actively seeking creators like you. Filter by niche, budget, and timeline.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Discover paid brand collaborations in your niche',
              'Negotiate campaigns directly with brands',
              'Showcase your best content and analytics',
              'Build credibility with verified partnerships',
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                className="flex items-center gap-4"
              >
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <span className="text-lg text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Waitlist (email scheduling) */}
      <section id="waitlist" className="py-20 px-6 bg-[#1a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to turn your influence into income?
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Share a few details and we will follow up from joinsoraa@gmail.com to help you get started.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur mb-6 text-left">
              <ScheduleForm context="creators" />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

