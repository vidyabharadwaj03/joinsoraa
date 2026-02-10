'use client';

import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, CreditCard } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScheduleForm from '@/components/ScheduleForm';

export default function CreatorsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden font-sans bg-gradient-to-b from-[#1a0a0a] to-[#2a1414]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-16 px-6 bg-gradient-to-b from-[#1a0a0a] to-[#2a1414]">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-block"
          >
            <div className="inline-block border-2 border-white/30 rounded-full px-6 py-2">
              <span className="text-white text-sm font-bold tracking-widest uppercase">
                For Creators
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: 'easeOut' }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-red-400 via-pink-400 to-red-400 bg-clip-text text-transparent block max-w-3xl">
              Create. Collaborate.
              <br className="hidden sm:block" />
              <span className="whitespace-nowrap">Get Paid.</span>
            </span>
          </motion.h1>

          {/* Subcopy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="text-xl text-gray-300 leading-relaxed max-w-2xl"
          >
            One home for brand deals, rates, and relationships, on your terms.
          </motion.p>

          {/* Bullets */}
          <div className="space-y-3 pt-2">
            {[
              { icon: Sparkles, text: 'Get matched with brands that fit' },
              { icon: ShieldCheck, text: 'Keep your voice and pricing' },
              { icon: CreditCard, text: 'Get paid with clear terms' },
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

          {/* Founding story callout */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.45, ease: 'easeOut' }}
            className="mt-3 max-w-3xl border-l-2 border-red-500/60 pl-4"
          >
            <p className="text-base md:text-lg text-gray-100 font-medium mb-1">
              Founded by creators, for creators.
            </p>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              We know how hard it can be to get a foot in the door on both sides of the brief, so we built a smarter, more equitable way to connect creators and brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works (3 steps) */}
      <section className="py-16 px-6 bg-[#1a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-4xl md:text-5xl font-bold text-white mb-10 text-center"
          >
            How It Works
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Set up your profile',
                desc: 'Share your niches, platforms, and starting rates.',
              },
              {
                icon: ShieldCheck,
                title: 'Match with brands',
                desc: 'Review briefs that fit your content and audience.',
              },
              {
                icon: CreditCard,
                title: 'Create and get paid',
                desc: 'Agree on terms, deliver content, and get paid.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
                className="text-center space-y-3"
              >
                <div className="flex justify-center mb-2">
                  <item.icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Schedule (email) */}
      <section id="waitlist" className="py-18 px-6 bg-gradient-to-b from-[#1a0a0a] to-[#2a1414]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to turn your influence into income?
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Share a few details and we will reply from joinsoraa@gmail.com to help you get started.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur mb-4 text-left">
              <ScheduleForm context="creators" />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

