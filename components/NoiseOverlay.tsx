'use client';

export default function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="
        pointer-events-none fixed inset-0 z-[1]
        opacity-[0.035]          /* ~3.5% visible, never 'flashes' */
        mix-blend-overlay
      "
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.06'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px',
        // If you want ultra-subtle motion, uncomment next line + globals keyframe:
        // animation: 'grain-slow 24s steps(2) infinite',
      }}
    />
  );
}
