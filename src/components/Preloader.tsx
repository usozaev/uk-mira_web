"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const STAR_D =
  "M50,8 L54,46 L92,50 L54,54 L50,92 L46,54 L8,50 L46,46 Z";

const HOLD_MS = 3432;
const EXIT_MS = 1020;

const MINI_STARS: {
  top: string;
  left: string;
  size: string;
  delay: number;
  color: string;
}[] = [
  { top: "6%", left: "18%", size: "14px", delay: 0.24, color: "var(--cyan)" },
  { top: "12%", left: "80%", size: "10px", delay: 1.08, color: "var(--safety-2)" },
  { top: "48%", left: "94%", size: "16px", delay: 1.8, color: "var(--cyan)" },
  { top: "82%", left: "78%", size: "11px", delay: 0.6, color: "var(--safety-2)" },
  { top: "86%", left: "20%", size: "14px", delay: 1.32, color: "var(--cyan)" },
  { top: "46%", left: "2%", size: "10px", delay: 2.16, color: "var(--safety-2)" },
];

export default function Preloader() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<"playing" | "exiting" | "done">(() =>
    pathname === "/" ? "playing" : "done",
  );

  useEffect(() => {
    // Only ever runs once, for the document's initial mount (fresh load / F5).
    // Client-side route changes re-render this component but do not remount
    // it, so this effect intentionally does not depend on `pathname`.
    if (pathname !== "/") return;

    document.documentElement.style.overflow = "hidden";
    const exitTimer = setTimeout(() => setPhase("exiting"), HOLD_MS);
    const doneTimer = setTimeout(() => {
      setPhase("done");
      document.documentElement.style.overflow = "";
    }, HOLD_MS + EXIT_MS);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
      document.documentElement.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (phase === "done") return null;

  const exiting = phase === "exiting";

  return (
    <div
      className="preloader-overlay"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      <div
        className={`bg-graphite ${exiting ? "preloader-panel-exit-left" : ""}`}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: "50%",
        }}
      />
      <div
        className={`bg-graphite ${exiting ? "preloader-panel-exit-right" : ""}`}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: "50%",
        }}
      />

      <div
        className={`relative flex h-full w-full flex-col items-center justify-center gap-5 ${
          exiting ? "preloader-content-exit" : ""
        }`}
      >
        <div className="relative flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64">
          {MINI_STARS.map((s, i) => (
            <svg
              key={i}
              viewBox="0 0 100 100"
              className="preloader-mini-star"
              style={{
                top: s.top,
                left: s.left,
                width: s.size,
                height: s.size,
                animationDelay: `${s.delay}s`,
              }}
            >
              <path d={STAR_D} fill={s.color} />
            </svg>
          ))}

          <div className="relative flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28">
            <div
              className="preloader-star-glow absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(74,129,194,0.55), transparent 70%)",
                filter: "blur(18px)",
              }}
            />
            <svg viewBox="0 0 100 100" className="relative h-full w-full">
              <path
                d={STAR_D}
                className="preloader-star-fill"
                fill="var(--safety)"
              />
              <path
                d={STAR_D}
                className="preloader-star-path"
                fill="none"
                stroke="var(--cyan)"
                strokeWidth="2.5"
                strokeLinejoin="round"
                strokeLinecap="round"
                pathLength={1}
              />
            </svg>
          </div>
        </div>

        <p
          className="preloader-wordmark font-display text-3xl font-medium uppercase text-mist sm:text-4xl"
          style={{ letterSpacing: "0.2em" }}
        >
          МИРА
        </p>
      </div>
    </div>
  );
}
