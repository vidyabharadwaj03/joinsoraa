'use client';
import { useEffect } from 'react';
import React from 'react';

/** Subtle floating orbs + tiny camera glyphs behind all content. */
export default function BackgroundFloaters() {
  useEffect(() => { console.log('[BG] floaters mounted'); }, []);
  const orbs = [
    { w: 300, h: 300, top: '8%',  left: '6%',  dur: '40s', delay: '0s' },
    { w: 380, h: 380, top: '20%', left: '66%', dur: '44s', delay: '2s' },
    { w: 320, h: 320, top: '64%', left: '10%', dur: '34s', delay: '1s' },
    { w: 460, h: 460, top: '60%', left: '72%', dur: '52s', delay: '3s' },
    { w: 240, h: 240, top: '36%', left: '86%', dur: '30s', delay: '5s' },
    { w: 280, h: 280, top: '34%', left: '32%', dur: '38s', delay: '4s' },
  ];

  const glyphs = [
    { top: '12%', left: '82%', scale: 1.2, dur: '32s', delay: '0s' },
    { top: '72%', left: '8%',  scale: 1.0, dur: '28s', delay: '2s' },
    { top: '28%', left: '12%', scale: 0.9, dur: '30s', delay: '3s' },
    { top: '78%', left: '78%', scale: 1.1, dur: '35s', delay: '1s' },
  ];

  return (
    <div className="bg-floaters-root" aria-hidden>
      {/* TEMP DEBUG DOT: remove after verifying */}
      <div style={{
        position:'absolute', top:16, left:16, width:18, height:18,
        borderRadius:9999, background:'#c14d5f', boxShadow:'0 0 20px rgba(193,77,95,0.8)'
      }} />
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
      {glyphs.map((g, i) => (
        <div
          key={`glyph-${i}`}
          className="bg-glyph float-v"
          style={{
            top: g.top, left: g.left, transform: `scale(${g.scale})`,
            ['--dur' as any]: g.dur, ['--delay' as any]: g.delay,
          }}
        >
          <CameraIcon />
        </div>
      ))}
    </div>
  );
}

function CameraIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 64 64" fill="none" aria-hidden>
      <rect x="8" y="18" width="48" height="32" rx="6" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M20 18l4-6h16l4 6" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <circle cx="32" cy="34" r="10" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="32" cy="34" r="5" fill="currentColor" opacity="0.25"/>
      <circle cx="48" cy="26" r="2" fill="currentColor" />
    </svg>
  );
}

