export default function SubtleBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 [transform:translateZ(0)]">
      {/* ultra-slow gradient pan */}
      <div
        className="
          absolute inset-0
          animate-bg-pan
          will-change-transform
          "
        style={{
          background:
            'radial-gradient(1200px 800px at 10% 20%, rgba(255,255,255,0.08), transparent 60%),' +
            'radial-gradient(800px 600px at 80% 70%, rgba(255,255,255,0.06), transparent 60%),' +
            'linear-gradient(120deg, #4a1519 0%, #6a1f28 35%, #3a0f14 100%)',
          backgroundSize: '140% 140%'
        }}
      />
      {/* static grain (very light) */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{ backgroundImage: "url('/noise.png')", backgroundSize: '200px 200px' }}
      />
    </div>
  );
}

