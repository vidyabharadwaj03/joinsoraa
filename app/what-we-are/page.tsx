'use client';

import { motion } from 'framer-motion';
import {
  Sparkles,
  HandHeart,
  Users,
  Workflow,
  BadgeCheck,
  Rocket,
  Wand2,
  ShieldCheck,
  CreditCard,
  ArrowRight,
  Search,
  Inbox,
  CalendarClock,
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

export default function WhatWeArePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden font-sans bg-gradient-to-b from-[#110607] via-[#1a0a0a] to-[#2a1414] text-white">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-24 h-80 w-80 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-red-900/30 blur-3xl" />
      </div>

      <Navigation />

      {/* HERO */}
      <section className="pt-28 md:pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-red-500/40 bg-red-900/20 text-xs font-semibold tracking-[0.2em] uppercase text-red-300 mb-4">
              <Sparkles className="w-3 h-3" />
              What We Are
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              What is <span className="text-red-400">SORAA</span> really about
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              SORAA is a home for thoughtful collaborations between brands and the creators who move their communities. 
              We match people, not just profiles, and handle the work between a great idea and a signed brief.
            </p>
          </motion.div>

          {/* Audience cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              {...fadeUp(0.1)}
              className="relative overflow-hidden rounded-3xl border border-red-500/30 bg-white/5 backdrop-blur-lg p-8 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/15 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-red-900/40 px-3 py-1 text-xs font-semibold text-red-200">
                  <HandHeart className="w-4 h-4" />
                  For Creators
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold">
                  A collective for creators who care about fit and fairness
                </h2>
                <ul className="space-y-2 text-gray-200 text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-red-300 mt-1" />
                    <span>Get matched with brands that actually respect your voice and audience.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-red-300 mt-1" />
                    <span>Clear briefs, clear rates, and support on both sides of the campaign.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CreditCard className="w-4 h-4 text-red-300 mt-1" />
                    <span>Transparent payments so you know when and how you get paid.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp(0.2)}
              className="relative overflow-hidden rounded-3xl border border-orange-400/30 bg-white/5 backdrop-blur-lg p-8 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/15 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-900/40 px-3 py-1 text-xs font-semibold text-orange-200">
                  <Users className="w-4 h-4" />
                  For Brands
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold">
                  A sharper way to work with the right creators, not just the loudest
                </h2>
                <ul className="space-y-2 text-gray-200 text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <Search className="w-4 h-4 text-orange-300 mt-1" />
                    <span>Skip endless search. We surface creators who already speak to your customers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Workflow className="w-4 h-4 text-orange-300 mt-1" />
                    <span>SORAA coordinates briefs, deadlines, and approvals so your team can focus on strategy.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="w-4 h-4 text-orange-300 mt-1" />
                    <span>Every collaboration is built for trust and measurable outcomes, not just impressions.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Why SORAA is different */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#1a0a0a] to-[#2a1414]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-red-300 mb-3">
              Why SORAA is different
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Not another influencer marketplace
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Most tools give you more noise. SORAA narrows the field to real, aligned partners and helps both sides move from idea to signed scope.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-10 items-start">
            {/* Other platforms */}
            <motion.div
              {...fadeUp(0.1)}
              className="rounded-3xl border border-gray-700 bg-black/30 p-8 space-y-4"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-gray-300">
                <Inbox className="w-4 h-4" />
                Other platforms
              </div>
              <ul className="space-y-3 text-gray-300 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <Search className="w-4 h-4 text-gray-400 mt-1" />
                  <span>Search through thousands of profiles and guess who is a real fit.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Workflow className="w-4 h-4 text-gray-400 mt-1" />
                  <span>Manage outreach, negotiation, and follow up on your own.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CreditCard className="w-4 h-4 text-gray-400 mt-1" />
                  <span>Opaque pricing, unclear fees, and payment timelines that drift.</span>
                </li>
              </ul>
            </motion.div>

            {/* Divider */}
            <div className="hidden md:flex flex-col items-center gap-4">
              <div className="h-20 w-px bg-gradient-to-b from-red-500/0 via-red-500/60 to-red-500/0" />
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                vs
              </span>
              <div className="h-20 w-px bg-gradient-to-b from-orange-400/0 via-orange-400/60 to-orange-400/0" />
            </div>

            {/* SORAA */}
            <motion.div
              {...fadeUp(0.2)}
              className="rounded-3xl border border-red-500/50 bg-gradient-to-br from-red-900/60 via-black/60 to-orange-900/60 p-8 shadow-[0_0_40px_rgba(248,113,113,0.25)] space-y-4"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-red-700/40 px-3 py-1 text-xs font-semibold text-red-100">
                <Sparkles className="w-4 h-4" />
                SORAA approach
              </div>
              <ul className="space-y-3 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <Wand2 className="w-4 h-4 text-red-300 mt-1" />
                  <span>Curated matches powered by data and context, not just follower counts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-red-300 mt-1" />
                  <span>Coordination across both sides of the brief so creators and brands stay in sync.</span>
                </li>
                <li className="flex items-start gap-3">
                  <BadgeCheck className="w-4 h-4 text-red-300 mt-1" />
                  <span>Transparent pricing where brands pay creators directly with structure and support.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: What you get */}
      <section className="py-20 px-6 bg-[#140707]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-red-300 mb-3">
              What you get
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Tools and support that feel human
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              SORAA blends product, process, and people so that every collaboration feels deliberate and easy to run.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: '🎯',
                icon: <Sparkles className="w-5 h-5 text-red-300" />,
                title: 'Precise matching',
                desc: 'We focus on fit, not just reach, so every collaboration feels natural.',
              },
              {
                emoji: '🤝',
                icon: <HandHeart className="w-5 h-5 text-red-300" />,
                title: 'Real partnership',
                desc: 'Creators and brands work as a team, with SORAA supporting both sides.',
              },
              {
                emoji: '🧭',
                icon: <Workflow className="w-5 h-5 text-red-300" />,
                title: 'Guided workflow',
                desc: 'From brief to content review, every step has structure and clarity.',
              },
              {
                emoji: '📈',
                icon: <Rocket className="w-5 h-5 text-red-300" />,
                title: 'Campaign momentum',
                desc: 'We help collaborations move forward instead of getting stuck in inboxes.',
              },
              {
                emoji: '🔒',
                icon: <ShieldCheck className="w-5 h-5 text-red-300" />,
                title: 'Trust built in',
                desc: 'Clear expectations and support reduce risk for both sides.',
              },
              {
                emoji: '💸',
                icon: <CreditCard className="w-5 h-5 text-red-300" />,
                title: 'Payment clarity',
                desc: 'Structured terms and a plan for how everyone gets paid.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.05 * index, ease: 'easeOut' }}
                className="relative overflow-hidden rounded-3xl border border-red-500/25 bg-gradient-to-br from-[#2a1010] to-[#3a1515] p-6 group"
              >
                <div className="absolute inset-px rounded-[22px] border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -top-6 -right-4 h-16 w-16 rounded-full bg-red-500/20 blur-xl group-hover:bg-red-400/25 transition-colors" />
                <div className="relative space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-black/30 px-3 py-1 text-xs text-gray-200">
                    <span>{item.emoji}</span>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: How it works */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#2a1414] to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-red-300 mb-3">
              How it works
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              A clear path from hello to signed scope
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              The details are thoughtful, the steps are simple. We keep momentum high and confusion low.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 flex justify-center">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-px bg-gradient-to-b from-red-400 via-red-600 to-red-900 origin-top"
              />
            </div>

            <div className="space-y-10">
              {[
                {
                  step: '01',
                  icon: <Inbox className="w-4 h-4" />,
                  title: 'Share what you need',
                  desc: 'Creators and brands tell us what they care about, from category to timelines.',
                },
                {
                  step: '02',
                  icon: <Search className="w-4 h-4" />,
                  title: 'We narrow the field',
                  desc: 'SORAA surfaces a short list of aligned matches instead of a giant directory.',
                },
                {
                  step: '03',
                  icon: <Users className="w-4 h-4" />,
                  title: 'Intentional intros',
                  desc: 'We make warm introductions, with context on both sides so calls start further ahead.',
                },
                {
                  step: '04',
                  icon: <Workflow className="w-4 h-4" />,
                  title: 'Co-create the plan',
                  desc: 'We help structure deliverables, timelines, and guardrails so everyone is clear.',
                },
                {
                  step: '05',
                  icon: <CalendarClock className="w-4 h-4" />,
                  title: 'Run the campaign',
                  desc: 'SORAA keeps track of milestones and check ins, and helps unblock when things stall.',
                },
                {
                  step: '06',
                  icon: <Rocket className="w-4 h-4" />,
                  title: 'Close the loop',
                  desc: 'Content goes live, payments and feedback are shared, and the relationship can grow.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                  className="relative pl-16 md:pl-20"
                >
                  {/* Node */}
                  <div className="absolute left-0 md:left-2 top-1.5 flex items-center justify-center">
                    <div className="relative">
                      <div className="h-9 w-9 rounded-full bg-black border border-red-500/60 flex items-center justify-center text-xs font-semibold">
                        {item.step}
                      </div>
                      <div className="absolute inset-0 rounded-full bg-red-500/40 blur-xl opacity-40" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 hover:border-red-400/70 transition-colors">
                    <div className="flex items-center gap-3 mb-2 text-sm text-red-200">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-900/70 border border-red-400/60">
                        {item.icon}
                      </span>
                      <span className="font-semibold tracking-wide uppercase text-[11px]">
                        Step {item.step}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="py-20 px-6 bg-[#050304]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp(0)}>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-red-300 mb-3">
              Ready to work together
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Choose the path that fits you today
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Whether you are a creator or a brand, SORAA is here to make your next collaboration easier to start and better to run.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/creators"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 tracking-wide transition-all duration-300 font-sans text-lg font-semibold bg-red-600 text-white hover:bg-red-700 hover:scale-105"
              >
                For Creators
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/brands"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 tracking-wide transition-all duration-300 font-sans text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-gray-900 hover:scale-105"
              >
                For Brands
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

