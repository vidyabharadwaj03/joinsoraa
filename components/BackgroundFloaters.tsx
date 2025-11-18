'use client';
import React from 'react';

/** Subtle floating orbs + tiny camera glyphs behind all content. */
export default function BackgroundFloaters() {
  const orbs = [
    { w: 300, h: 300, top: '8%',  left: '6%',  dur: '40s', delay: '0s' },
    { w: 380, h: 380, top: '20%', left: '66%', dur: '44s', delay: '2s' },
    { w: 320, h: 320, top: '64%', left: '10%', dur: '34s', delay: '1s' },
    { w: 460, h: 460, top: '60%', left: '72%', dur: '52s', delay: '3s' },
    { w: 240, h: 240, top: '36%', left: '86%', dur: '30s', delay: '5s' },
    { w: 280, h: 280, top: '34%', left: '32%', dur: '38s', delay: '4s' },
  ];

  return (
    <div className="bg-floaters-root" aria-hidden>
      {orbs.map((o, i) => (
        <div
          key={`orb-v-${i}`}
          className="bg-orb float-v"
          style={{
            width: o.w, height: o.h, top: o.top, left: o.left,
            ['--dur' as any]: o.dur, ['--delay' as any]: o.delay,
          }}
        />
      ))}
      {/* compound motion: a smaller companion with horizontal drift */}
      {orbs.map((o, i) => (
        <div
          key={`orb-h-${i}`}
          className="bg-orb float-h"
          style={{
            width: o.w * 0.62, height: o.h * 0.62,
            top: `calc(${o.top} + 7%)`, left: `calc(${o.left} + 6%)`,
            opacity: 0.14,
            background: 'radial-gradient(closest-side, rgba(58,10,16,0.65), rgba(58,10,16,0))',
            ['--dur' as any]: o.dur, ['--delay' as any]: o.delay,
          }}
        />
      ))}
    </div>
  );
}

