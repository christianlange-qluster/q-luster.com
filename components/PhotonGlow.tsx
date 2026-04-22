/**
 * Animated background — two drifting, pulsing radial orbs behind the hero.
 * Pure CSS animation (see globals.css keyframes). No JS. No scroll listener.
 */
export function PhotonGlow({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Cyan orb — top left */}
      <div
        className="photon-orb absolute -top-40 -left-32 h-[70vh] w-[70vh] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0, 212, 255, 0.55), rgba(0, 212, 255, 0.08) 55%, transparent 75%)",
        }}
      />
      {/* Warm-gold orb — right, lower */}
      <div
        className="photon-orb absolute top-1/3 -right-40 h-[55vh] w-[55vh] rounded-full blur-[130px]"
        style={{
          animationDelay: "-6s",
          background:
            "radial-gradient(closest-side, rgba(244, 184, 96, 0.38), rgba(244, 184, 96, 0.06) 55%, transparent 75%)",
        }}
      />
      {/* Rb-red orb — bottom */}
      <div
        className="photon-orb absolute -bottom-40 left-1/4 h-[50vh] w-[50vh] rounded-full blur-[120px]"
        style={{
          animationDelay: "-12s",
          background:
            "radial-gradient(closest-side, rgba(230, 57, 70, 0.28), rgba(230, 57, 70, 0.04) 55%, transparent 75%)",
        }}
      />
      {/* Grid texture overlay */}
      <div className="absolute inset-0 bg-grid mask-fade opacity-60" />
    </div>
  );
}
