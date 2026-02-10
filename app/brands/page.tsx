'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BrandsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden font-sans">
      <Navigation />

      {/* Hero Section - Light Beige */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-32 px-6 bg-[#fef5ed]">
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
              <span className="px-4 py-2 rounded-full border-2 border-black text-black text-sm uppercase tracking-wide font-semibold">
                FOR BRANDS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-6xl md:text-7xl leading-tight tracking-tight mb-6 font-bold font-serif bg-gradient-to-r from-black via-[#dc2626] to-black bg-clip-text text-transparent"
            >
              Turn Influence Into Impact
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="text-xl md:text-2xl text-gray-800 mb-6 leading-relaxed max-w-4xl"
            >
              Soraa connects your brand with creators who actually move culture and conversions. We make influencer marketing simple, authentic, and performance-driven.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
              className="text-lg text-gray-700 mb-12 leading-relaxed max-w-3xl"
            >
              Some of our creators may be smaller. But that's by design. In a world driven by noise, authenticity is irreplaceable. Every creator on Soraa is thoughtfully vetted to ensure they bring real influence, trust, and a genuine connection with their audience.
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
                className="bg-gradient-to-r from-[#ef4444] to-[#ec4899] hover:from-[#dc2626] hover:to-[#db2777] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-red-500/50"
                onClick={() => {
                  // Route to brand signup page
                  window.location.href = '/signup?type=brand';
                }}
              >
                Start Your First Campaign →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const element = document.getElementById('why-choose-soraa');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-black text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-all duration-200"
              >
                See How It Works
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Soraa Section */}
      <section id="why-choose-soraa" className="relative py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center mb-16"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-red-600 text-sm uppercase tracking-widest mb-4 font-semibold"
            >
              Why Choose Soraa
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl text-gray-900 mb-4 font-bold"
            >
              Built for brands who want results, not just reach
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-600"
            >
              We've reimagined influencer marketing from the ground up
            </motion.p>
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
                description: 'Discover creators, manage collaborations, track results — all in one place.',
              },
              {
                icon: '📊',
                title: 'Data-Driven Decisions',
                description: 'Access insights on reach, engagement, and performance to maximize ROI.',
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
                  <h3 className="text-2xl text-gray-900 mb-2 font-bold">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="relative py-32 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center mb-16"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-orange-400 text-sm uppercase tracking-widest mb-4 font-semibold"
            >
              PLATFORM FEATURES
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl text-white mb-4 font-bold font-serif"
            >
              Everything you need to scale influence
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-300"
            >
              Built by marketers, for marketers
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: 'Launch campaigns in minutes',
                description: 'Set your goals, budget, and target audience. Our platform instantly surfaces creators who match your criteria.',
              },
              {
                title: 'Collaborate with micro and macro creators',
                description: 'From niche influencers to culture-shifting voices, find the perfect mix for your campaign objectives.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="bg-gradient-to-br from-[#3a1515] to-[#4a1f1f] rounded-3xl p-10 border border-white/10 relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-red-600"></div>
                <h3 className="text-3xl text-white mb-4 font-bold">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-6 mb-12"
          >
            {[
              'Launch influencer campaigns in minutes',
              'Collaborate with micro and macro creators',
              'Get high-quality content for ads & socials',
              'Track campaign performance in real time',
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-4 text-xl text-gray-300"
              >
                <span className="text-2xl">✓</span>
                <span>{item}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center"
          >
            <h3 className="text-4xl text-white mb-4 font-bold">
              Grow awareness. Build trust. Drive sales.
            </h3>
            <p className="text-xl text-gray-300">
              Soraa helps brands scale influence without losing authenticity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-[#1a0a0a] to-[#2a1414]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-5xl md:text-6xl text-white mb-6 font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join brands who are already scaling their influence with Soraa.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                window.location.href = '/signup?type=brand';
              }}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-red-600/50"
            >
              Start Your First Campaign →
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
