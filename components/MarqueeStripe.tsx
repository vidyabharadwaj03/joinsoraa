'use client';

import { motion } from 'framer-motion';

export default function MarqueeStripe() {
  const text = 'MICROINFLUENCERS × SMALL BRANDS';
  const repeatedText = `${text} • ${text} • ${text} • ${text}`;

  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-16 -rotate-[6deg] origin-center">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="text-brand-bone font-display text-2xl tracking-wider uppercase">
          {repeatedText}
        </div>
      </motion.div>
    </div>
  );
}
