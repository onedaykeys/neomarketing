export function HeroVisual() {
  return (
    <svg
      className="hero-visual"
      viewBox="0 0 480 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="slab" x1="80" y1="280" x2="400" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A6BFF" />
          <stop offset="0.55" stopColor="#FF3D5A" />
          <stop offset="1" stopColor="#0A0E14" />
        </linearGradient>
        <linearGradient id="glass" x1="140" y1="80" x2="360" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.05" />
        </linearGradient>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>

      <ellipse cx="240" cy="390" rx="140" ry="28" fill="#0A0E14" opacity="0.12" filter="url(#soft)" />

      {/* Lower cloud slab */}
      <path
        d="M100 300 L240 230 L380 300 L240 370 Z"
        fill="url(#slab)"
        opacity="0.95"
      />
      <path d="M100 300 L240 370 L240 400 L100 330 Z" fill="#0A0E14" opacity="0.35" />
      <path d="M380 300 L240 370 L240 400 L380 330 Z" fill="#FF3D5A" opacity="0.45" />

      {/* Dashed connectors */}
      <path
        d="M140 210 L140 280 M240 160 L240 250 M340 210 L340 280"
        stroke="#0A0E14"
        strokeWidth="1.5"
        strokeDasharray="6 8"
        opacity="0.35"
      />

      {/* Upper glass plane */}
      <path
        d="M120 180 L240 120 L360 180 L240 240 Z"
        fill="url(#glass)"
        stroke="#0A0E14"
        strokeWidth="1.75"
        opacity="0.9"
      />
      <path
        d="M120 180 L240 240 L240 255 L120 195 Z"
        fill="#1A6BFF"
        opacity="0.15"
      />
      <path
        d="M360 180 L240 240 L240 255 L360 195 Z"
        fill="#FF3D5A"
        opacity="0.2"
      />

      {/* Signal node */}
      <circle cx="240" cy="180" r="10" fill="#FF3D5A" />
      <circle cx="240" cy="180" r="18" stroke="#FF3D5A" strokeWidth="1.5" opacity="0.4" />
    </svg>
  )
}
