'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-[#1a0a0ae6] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
          <Image
            src="/NewSoraaLogo.png"
            alt="SORAA"
            width={150}
            height={60}
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white">
          <Link 
            href="/creators"
            className="text-gray-300 hover:text-white transition-colors"
          >
            For Creators
          </Link>
          <Link 
            href="/brands"
            className="text-gray-300 hover:text-white transition-colors"
          >
            For Brands
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const element = document.getElementById('waitlist');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#waitlist';
              }
            }}
            className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-red-600/50"
          >
            Join Now
          </motion.button>
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
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-[#1a0a0aff] backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4 text-sm text-white">
              <Link 
                href="/creators"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                For Creators
              </Link>
              <Link 
                href="/brands"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                For Brands
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  const element = document.getElementById('waitlist');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#waitlist';
                  }
                }}
                className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-red-600/50 text-left w-fit"
              >
                Join Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
