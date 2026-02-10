'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WaitlistForm from '@/components/WaitlistForm';

export default function CreatorsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden font-sans bg-gradient-to-b from-[#1a0a0a] to-[#2a1414]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-32 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-5xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full border border-white/20 text-white text-sm uppercase tracking-wide">
                FOR CREATORS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-6xl md:text-7xl leading-tight tracking-tight mb-6 font-bold bg-gradient-to-r from-[#ef4444] via-[#ec4899] to-[#ef4444] bg-clip-text text-transparent"
            >
              Create. Collaborate. Get Paid.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed max-w-4xl"
            >
              Soraa helps creators turn their influence into real opportunities. Work with brands you actually love on your terms.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
              className="text-lg text-gray-400 mb-12 leading-relaxed max-w-3xl"
            >
              Founded by creators, for creators, we know how hard it can be to get a foot in the door. So we built a smarter, more equitable way to connect creators and brands, designed to benefit both sides.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const element = document.getElementById('waitlist');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-red-600/50"
              >
                Join The Waitlist
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Creators Love SORAA Section */}
      <section className="relative py-32 px-6 bg-[#1a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-gradient-to-br from-[#3a1515] to-[#4a1f1f] rounded-3xl p-12 border border-white/10"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-red-500 text-sm uppercase tracking-widest mb-4 font-semibold"
            >
              WHY CREATORS LOVE SORAA
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl text-white mb-4 font-bold"
            >
              Your creativity. Your rules. Your income.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-300 mb-12"
            >
              We built Soraa to empower creators, not exploit them
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: '🤝',
                  title: 'Brand Deals That Fit You',
                  description: 'Get matched with brands that align with your content and audience.',
                },
                {
                  icon: '🎨',
                  title: 'Creative Freedom',
                  description: 'Create content in your own voice — no forced scripts.',
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
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="text-4xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="text-2xl text-white mb-2 font-bold">
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Everything You Need to Monetize Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-[#1a0a0a] to-[#2a1414]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-gradient-to-br from-[#3a1515] to-[#4a1f1f] rounded-3xl p-12 border border-white/10 mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl text-white mb-4 font-bold"
            >
              Discover paid brand collaborations
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Browse campaigns from brands actively seeking creators like you. Filter by niche, budget, and timeline.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-5xl md:text-6xl text-white mb-4 font-bold">
              Everything you need to <span className="bg-gradient-to-r from-[#ef4444] to-[#ec4899] bg-clip-text text-transparent">Monetize</span> your influence
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              You create the influence. We handle the connections.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: '🔍',
                  title: 'Discover paid brand collaborations',
                  description: 'Browse campaigns from brands actively seeking creators like you.',
                },
                {
                  icon: '💬',
                  title: 'Negotiate campaigns directly',
                  description: 'Set your rates and terms without middlemen.',
                },
                {
                  icon: '📊',
                  title: 'Showcase your content & analytics',
                  description: 'Build your profile with your best work and real metrics.',
                },
                {
                  icon: '✅',
                  title: 'Build credibility with verified partnerships',
                  description: 'Earn badges and reviews that prove your value.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="text-4xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="text-2xl text-white mb-2 font-bold">
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
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

      <Footer />
    </main>
  );
}
