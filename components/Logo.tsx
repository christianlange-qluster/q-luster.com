/**
 * QLuster mark — a stylized cluster of photons (single emitter at center,
 * concentric ring of 6 surrounding photons). Uses currentColor so it can
 * inherit text color and recolor on hover.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* faint orbit ring */}
      <circle
        cx="16"
        cy="16"
        r="11"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="1"
      />
      {/* central emitter */}
      <circle cx="16" cy="16" r="3" fill="currentColor" />
      {/* surrounding photons (6, hexagonal symmetry) */}
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const r = 11;
        const rad = (deg * Math.PI) / 180;
        const cx = 16 + Math.cos(rad) * r;
        const cy = 16 + Math.sin(rad) * r;
        return (
          <circle
            key={deg}
            cx={cx}
            cy={cy}
            r={1.8}
            fill="currentColor"
            opacity={deg === 0 ? 1 : 0.55 + ((deg / 360) * 0.4)}
          />
        );
      })}
    </svg>
  );
}
