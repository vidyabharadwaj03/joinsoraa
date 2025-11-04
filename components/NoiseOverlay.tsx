'use client';

export default function NoiseOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[2]"
      aria-hidden="true"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.06'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px',
        animation: 'noise 0.2s steps(8) infinite',
      }}
    />
  );
}
