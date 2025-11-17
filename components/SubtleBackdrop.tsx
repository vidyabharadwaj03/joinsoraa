export default function SubtleBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 [transform:translateZ(0)]">
      {/* ultra-slow gradient pan */}
      <div
        className="
          absolute inset-0
          opacity-90
          animate-bg-pan
          will-change-transform
          "
        style={{
          background:
            'radial-gradient(1200px 800px at 10% 20%, rgba(255,255,255,0.03), transparent 60%),' +
            'radial-gradient(800px 600px at 80% 70%, rgba(255,255,255,0.02), transparent 60%),' +
            'linear-gradient(120deg, #3b0a10 0%, #5a0f18 35%, #2a070a 100%)',
          backgroundSize: '140% 140%'
        }}
      />
      {/* static grain (very light) */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{ backgroundImage: "url('/noise.png')", backgroundSize: '200px 200px' }}
      />
    </div>
  );
}

