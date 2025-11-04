'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Particles from '@/components/Particles';
import NoiseOverlay from '@/components/NoiseOverlay';
import MarqueeStripe from '@/components/MarqueeStripe';
import WaitlistForm from '@/components/WaitlistForm';
import Button from '@/components/ui/Button';

export default function Home() {
  const howItWorksRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background layers */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at center, #1d0a0c 0%, #110607 100%)',
        }}
      />
      <Particles />
      <NoiseOverlay />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-brand-bg/30 border-b border-brand-maroon/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-display text-2xl text-brand-bone tracking-wider">
            SORAA
          </div>
          <div className="hidden md:flex items-center gap-8 font-sans text-sm">
            <a href="#creators" className="text-brand-haze hover:text-brand-bone transition-colors">
              For Creators
            </a>
            <a href="#brands" className="text-brand-haze hover:text-brand-bone transition-colors">
              For Brands
            </a>
            <button
              onClick={() => scrollToSection('waitlist')}
              className="text-brand-red hover:text-brand-rose transition-colors"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <h1 className="font-display text-[56px] md:text-[120px] leading-none tracking-tight text-brand-bone mb-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                join the collective.
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                skip the pitch.
              </motion.div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-brand-haze mb-10 font-sans leading-relaxed"
            >
              Your agency, your brands, all AI automated with SORAA.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button onClick={() => scrollToSection('waitlist')}>
                Get Early Access
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('how-it-works')}>
                See how it works
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Diagonal Marquee Stripe */}
        <MarqueeStripe />
      </section>

      {/* Split Cards: For Creators / For Brands */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* For Creators Card */}
          <motion.div
            id="creators"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -8 }}
            className="bg-brand-maroon/50 backdrop-blur-sm rounded-2xl p-10 border border-brand-maroon hover:border-brand-red/30 transition-all cursor-pointer"
          >
            <h2 className="font-display text-5xl md:text-6xl text-brand-bone mb-6 tracking-tight">
              turn content into contracts.
            </h2>
            <ul className="space-y-4 text-brand-haze font-sans text-lg">
              <li>• Auto-matching with perfect-fit brands</li>
              <li>• Transparent rates, no middleman</li>
              <li>• One-click briefs, instant approvals</li>
            </ul>
          </motion.div>

          {/* For Brands Card */}
          <motion.div
            id="brands"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="bg-brand-maroon/50 backdrop-blur-sm rounded-2xl p-10 border border-brand-maroon hover:border-brand-red/30 transition-all cursor-pointer"
          >
            <h2 className="font-display text-5xl md:text-6xl text-brand-bone mb-6 tracking-tight">
              turn fans into champions.
            </h2>
            <ul className="space-y-4 text-brand-haze font-sans text-lg">
              <li>• Niche targeting, verified performance</li>
              <li>• Direct creator relationships</li>
              <li>• No agency tax, transparent pricing</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        ref={howItWorksRef}
        className="relative py-32 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-6xl md:text-7xl text-brand-bone mb-20 text-center tracking-tight"
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
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="font-display text-6xl text-brand-red mb-4">
                  {item.step}
                </div>
                <h3 className="font-display text-3xl text-brand-bone mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-brand-haze font-sans text-lg">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Teaser Card */}
      <section className="relative py-32 px-6">
        <motion.div
          initial={{ opacity: 0, rotate: -2 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -8, rotate: 1 }}
          className="max-w-4xl mx-auto bg-brand-maroon/50 backdrop-blur-sm rounded-2xl p-12 border border-brand-red/30"
        >
          <div className="font-display text-4xl md:text-5xl text-brand-red mb-4 tracking-tight">
            BREAKING NEWS:
          </div>
          <div className="font-display text-5xl md:text-6xl text-brand-bone tracking-tight">
            SORAA — COMING SOON
          </div>
        </motion.div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="relative py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-maroon/50 backdrop-blur-sm rounded-2xl p-12 border border-brand-maroon"
          >
            <h2 className="font-display text-5xl md:text-6xl text-brand-bone mb-8 text-center tracking-tight">
              join the waitlist
            </h2>
            <WaitlistForm />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-brand-maroon/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-sans text-sm text-brand-haze">
          <div className="flex items-center gap-4">
            <a href="https://joinsoraa.com" className="hover:text-brand-bone transition-colors">
              joinsoraa.com
            </a>
            <span>•</span>
            <a href="mailto:joinsoraa@gmail.com" className="hover:text-brand-bone transition-colors">
              joinsoraa@gmail.com
            </a>
          </div>
          <div>Copyright © 2025 SORAA</div>
        </div>
      </footer>
    </main>
  );
}
