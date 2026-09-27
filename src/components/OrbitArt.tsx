import Image from "next/image";

const STAR_D_CENTERED = "M0,-42 L4,-4 L42,0 L4,4 L0,42 L-4,4 L-42,0 L-4,-4 Z";

function OrbitingStar({
  offsetX,
  offsetY,
  size,
  color,
  glowClass,
  duration,
  reverse,
  opacity = 1,
}: {
  offsetX: number;
  offsetY: number;
  size: number;
  color: string;
  glowClass: string;
  duration: string;
  reverse?: boolean;
  opacity?: number;
}) {
  return (
    // outer: carries the orbit motion (rotates around the art's center)
    <div
      className="absolute inset-0"
      style={{
        transformOrigin: "50% 50%",
        animation: `orbit-spin ${duration} linear infinite${reverse ? " reverse" : ""}`,
      }}
    >
      {/* middle: static offset from center, swept around by the outer rotation */}
      <div
        className={`absolute ${glowClass}`}
        style={{
          top: "50%",
          left: "50%",
          width: `${size}px`,
          height: `${size}px`,
          transform: `translate(${offsetX}px, ${offsetY}px)`,
        }}
      >
        {/* inner: counter-rotates so the star glyph stays upright while orbiting */}
        <div
          className="h-full w-full"
          style={{
            transformOrigin: "50% 50%",
            animation: `orbit-spin ${duration} linear infinite${reverse ? "" : " reverse"}`,
          }}
        >
          <svg viewBox="-40 -40 80 80" className="h-full w-full">
            <path d={STAR_D_CENTERED} fill={color} opacity={opacity} />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function OrbitArt({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none relative aspect-square w-full ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <radialGradient id="orbit-core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--nebula)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--nebula)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="orbit-platform-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--cyan)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="150" fill="url(#orbit-core-glow)" />
        <ellipse cx="200" cy="330" rx="130" ry="26" fill="url(#orbit-platform-glow)" />
        <ellipse
          cx="200"
          cy="200"
          rx="185"
          ry="72"
          fill="none"
          stroke="var(--cyan)"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="150"
          ry="150"
          fill="none"
          stroke="var(--cyan)"
          strokeOpacity="0.18"
          strokeWidth="1"
          strokeDasharray="2 6"
        />
      </svg>

      <OrbitingStar
        offsetX={118}
        offsetY={-8}
        size={16}
        color="var(--mist)"
        glowClass="glow"
        duration="16s"
      />
      <OrbitingStar
        offsetX={-98}
        offsetY={42}
        size={11}
        color="var(--cyan)"
        glowClass="glow-s"
        duration="24s"
        reverse
      />
      <OrbitingStar
        offsetX={-150}
        offsetY={-18}
        size={9}
        color="var(--mist)"
        glowClass=""
        duration="11s"
        opacity={0.85}
      />

      <div className="absolute left-1/2 top-[54%] w-[78%] -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/images/hero/city-illustration.webp"
          alt=""
          width={948}
          height={999}
          priority
          className="h-auto w-full select-none drop-shadow-[0_30px_60px_rgba(4,12,40,0.7)]"
        />
      </div>
    </div>
  );
}
