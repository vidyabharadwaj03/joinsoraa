/**
 * Build stamp component that displays commit SHA and build time.
 * Only visible on desktop (hidden on mobile).
 * Reads env vars at build time (NEXT_PUBLIC_* are embedded in the bundle).
 */
export default function BuildStamp() {
  // Read at build time from environment variables
  // NEXT_PUBLIC_* vars are embedded at build time
  const commitSha = process.env.NEXT_PUBLIC_COMMIT_SHA || 'unknown';
  const buildTime = process.env.NEXT_PUBLIC_BUILD_TIME || 'unknown';

  // Shorten SHA to 7 characters if longer
  const shortSha = commitSha.length > 7 ? commitSha.substring(0, 7) : commitSha;

  // Format build time as UTC date string
  let formattedTime = 'unknown';
  try {
    if (buildTime !== 'unknown') {
      const date = new Date(buildTime);
      formattedTime = date.toISOString().replace('T', ' ').substring(0, 16) + ' UTC';
    }
  } catch (e) {
    // Keep as unknown if parsing fails
  }

  return (
    <div 
      className="fixed bottom-3 right-4 z-[999] hidden md:block text-xs text-white/60 font-mono pointer-events-none"
      aria-hidden="true"
    >
      Build: {shortSha} • {formattedTime}
    </div>
  );
}

