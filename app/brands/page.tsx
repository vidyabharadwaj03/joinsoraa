'use client';

import { motion } from 'framer-motion';
import { Sparkles, BadgeCheck, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScheduleForm from '@/components/ScheduleForm';

export default function BrandsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden font-sans bg-gradient-to-b from-[#1a0a0a] to-[#2a1414]">
      <Navigation />

      {/* Hero Section - Dark Burgundy */}
      <section className="pt-20 md:pt-24 pb-16 px-6 bg-gradient-to-b from-[#1a0a0a] to-[#2a1414]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-block"
            >
              <div className="inline-block bg-white/10 rounded-full px-6 py-2">
                <span className="text-white text-sm font-bold tracking-widest uppercase">
                  For Brands
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="text-6xl md:text-7xl font-bold text-white leading-tight"
            >
              Turn Influence{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Into Impact
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              Find creators who move culture and run campaigns with clear outcomes.
            </motion.p>

            <div className="space-y-3 pt-2">
              {[
                { icon: BadgeCheck, text: 'Vetted creators with real audience trust' },
                { icon: Zap, text: 'Fast sourcing and simple briefs' },
                { icon: Sparkles, text: 'Performance tracking you can explain' },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.2 + index * 0.08, ease: 'easeOut' }}
                  className="flex items-center gap-3"
                >
                  <item.icon className="w-5 h-5 text-gray-300" />
                  <span className="text-lg text-gray-300">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const element = document.getElementById('brand-schedule');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all shadow-lg shadow-red-600/50"
              >
                Schedule A Call
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
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all"
              >
                See How It Works
              </motion.button>
            </motion.div>
          </div>

          {/* Right column kept intentionally simple for now (no heavy visuals) */}
        </div>
      </section>

      {/* Why Choose Soraa Section */}
      <section id="why-choose-soraa" className="py-20 px-6 bg-[#1a0a0a]">
        <div className="max-w-7xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16">
            <div className="text-red-400 text-sm font-bold tracking-widest uppercase mb-4">
              Why Choose Soraa
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built for brands who want results, not just reach
            </h2>
            <p className="text-xl text-gray-400">
              We've reimagined influencer marketing from the ground up.
            </p>
          </div>

          {/* Bullet points grid */}
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
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1), ease: 'easeOut' }}
                className="space-y-4"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
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
                Set your goals, budget, and target audience. Our platform instantly surfaces creators who match your criteria.
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

