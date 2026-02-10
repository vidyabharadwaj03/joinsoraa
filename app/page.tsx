'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import MarqueeStripe from '@/components/MarqueeStripe';
import WaitlistForm from '@/components/WaitlistForm';
import Button from '@/components/ui/Button';

export default function Home() {
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-transparent">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-brand-bg/30 border-b border-brand-maroon/30">
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
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-brand-bone p-2"
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
          <div className="md:hidden border-t border-brand-maroon/30 bg-brand-bg/95 backdrop-blur-md">
            <div className="px-6 py-4 flex flex-col gap-4 font-sans text-sm">
              <a 
                href="#creators" 
                onClick={() => scrollToSection('creators')}
                className="text-brand-haze hover:text-brand-bone transition-colors"
              >
                For Creators
              </a>
              <a 
                href="#brands" 
                onClick={() => scrollToSection('brands')}
                className="text-brand-haze hover:text-brand-bone transition-colors"
              >
                For Brands
              </a>
              <button
                onClick={() => scrollToSection('waitlist')}
                className="text-brand-red hover:text-brand-rose transition-colors text-left"
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
              className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-brand-bone mb-6"
            >
              Gen Z Is the Future of Your Brand. Don't Get Left Behind.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl text-brand-haze mb-10 font-sans leading-relaxed max-w-4xl"
            >
              SORAA automatically matches your business with micro-creators and manages the entire collaboration using AI. No outreach. No guesswork. No huge budgets. Just results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button onClick={() => scrollToSection('waitlist')}>
                Get Early Access
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('what-is-soraa')}>
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Diagonal Marquee Stripe */}
        <MarqueeStripe />
      </section>

      {/* WHAT IS SORAA Section */}
      <section id="what-is-soraa" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-brand-bone mb-6 tracking-tight">
              WHAT IS SORAA
            </h2>
            <p className="text-lg md:text-xl text-brand-haze font-sans leading-relaxed max-w-3xl mx-auto">
              SORAA is the platform connecting local brands with micro-creators who actually influence their communities. We use AI to match the right creators to the right businesses, turning authentic content into real local growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* For Creators Column */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-brand-maroon/60 to-brand-maroon/40 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-brand-maroon hover:border-brand-red/40 transition-all cursor-pointer"
            >
              <h3 className="font-display text-4xl md:text-5xl text-brand-bone mb-4 tracking-tight">
                For Creators
              </h3>
              <p className="text-brand-haze font-sans text-lg leading-relaxed">
                Turn your authentic content into consistent income. SORAA connects you with local brands that align with your values and audience. Set your rates, define your niche, and let AI handle the matching. No more cold pitches or negotiating—just create and get paid.
              </p>
            </motion.div>

            {/* For Brands Column */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-brand-maroon/60 to-brand-maroon/40 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-brand-maroon hover:border-brand-red/40 transition-all cursor-pointer"
            >
              <h3 className="font-display text-4xl md:text-5xl text-brand-bone mb-4 tracking-tight">
                For Brands
              </h3>
              <p className="text-brand-haze font-sans text-lg leading-relaxed">
                Reach Gen Z where they actually pay attention. SORAA finds micro-creators in your area who have real influence with your target audience. AI-powered matching ensures authentic partnerships that drive local growth—without the agency markup or guesswork.
              </p>
            </motion.div>
          </div>
        </div>
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
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Image
              src="/NewSoraaLogo.png"
              alt="SORAA"
              width={300}
              height={120}
              className="h-16 md:h-20 w-auto object-contain"
            />
            <span className="font-display text-5xl md:text-6xl text-brand-bone tracking-tight">
              — COMING SOON
            </span>
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
