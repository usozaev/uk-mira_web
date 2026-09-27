"use client";

import { useMemo } from "react";

const STAR_D = "M50,8 L54,46 L92,50 L54,54 L50,92 L46,54 L8,50 L46,46 Z";

function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Star = {
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  sparkle: boolean;
};

export default function Starfield({
  count = 60,
  seed = 1,
  className = "",
}: {
  count?: number;
  seed?: number;
  className?: string;
}) {
  const stars = useMemo<Star[]>(() => {
    const rand = mulberry32(seed);
    return Array.from({ length: count }, () => ({
      top: rand() * 100,
      left: rand() * 100,
      size: rand() * 2.6 + (rand() > 0.92 ? 6 : 1.4),
      delay: rand() * 4.2,
      duration: 3.2 + rand() * 3,
      opacity: rand() * 0.5 + 0.3,
      sparkle: rand() > 0.94,
    }));
  }, [count, seed]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {stars.map((s, i) =>
        s.sparkle ? (
          <svg
            key={i}
            viewBox="0 0 100 100"
            className="twinkle-star"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: s.size * 3,
              height: s.size * 3,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          >
            <path d={STAR_D} fill="var(--cyan)" opacity={s.opacity} />
          </svg>
        ) : (
          <span
            key={i}
            className="twinkle-star rounded-full"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: s.size,
              height: s.size,
              background: "var(--mist)",
              opacity: s.opacity,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          />
        ),
      )}
    </div>
  );
}
