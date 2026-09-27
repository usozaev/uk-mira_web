"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const STAR_D =
  "M0,-38 C4,-6 6,-4 38,0 C6,4 4,6 0,38 C-4,6 -6,4 -38,0 C-6,-4 -4,-6 0,-38 Z";

const HOLD_MS = 4300;
const EXIT_MS = 1000;

const MINI_STARS: {
  top: string;
  left: string;
  size: string;
  delay: number;
  color: string;
}[] = [
  { top: "8%", left: "20%", size: "12px", delay: 0.4, color: "var(--cyan)" },
  { top: "14%", left: "78%", size: "9px", delay: 1.2, color: "var(--safety-2)" },
  { top: "50%", left: "92%", size: "14px", delay: 2, color: "var(--cyan)" },
  { top: "84%", left: "76%", size: "10px", delay: 0.8, color: "var(--safety-2)" },
  { top: "88%", left: "22%", size: "12px", delay: 1.6, color: "var(--cyan)" },
  { top: "48%", left: "4%", size: "9px", delay: 2.4, color: "var(--safety-2)" },
];

const LETTERS = [
  { ch: "М", delay: 1.3 },
  { ch: "И", delay: 1.44 },
];
const RA_LETTERS = [
  { ch: "Р", delay: 1.58 },
  { ch: "А", delay: 1.72 },
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
        background:
          "radial-gradient(ellipse 700px 500px at 50% 50%, #0C2366 0%, #040A1C 70%)",
      }}
      aria-hidden="true"
    >
      <div
        className={`relative flex h-full w-full flex-col items-center justify-center gap-6 ${
          exiting ? "preloader-content-exit" : ""
        }`}
      >
        <div className="relative flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64">
          {MINI_STARS.map((s, i) => (
            <svg
              key={i}
              viewBox="-40 -40 80 80"
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

          <svg viewBox="-40 -40 80 80" className="preloader-star-in relative h-24 w-24 sm:h-28 sm:w-28">
            <path d={STAR_D} fill="var(--mist)" />
          </svg>
        </div>

        <span
          className="preloader-line-in"
          style={{
            display: "block",
            width: "260px",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, var(--cyan) 30%, var(--mist) 50%, var(--cyan) 70%, transparent)",
            boxShadow: "0 0 14px rgba(157,187,255,.8), 0 0 40px rgba(110,155,255,.5)",
          }}
        />

        <p
          className="font-display text-3xl font-medium uppercase sm:text-4xl"
          style={{ letterSpacing: "0.28em", paddingLeft: "0.28em", margin: 0, display: "flex" }}
        >
          {LETTERS.map((l) => (
            <span
              key={l.ch}
              className="preloader-letter"
              style={{ animationDelay: `${l.delay}s`, color: "var(--mist)" }}
            >
              {l.ch}
            </span>
          ))}
          <span style={{ position: "relative", display: "inline-flex" }}>
            <span className="preloader-ra-pill" />
            {RA_LETTERS.map((l) => (
              <span
                key={l.ch}
                className="preloader-letter preloader-ra-ink"
                style={{
                  animation: `preloader-letter-reveal 1s cubic-bezier(0.2,0.8,0.2,1) ${l.delay}s forwards, preloader-ra-ink-shift 1.3s linear 3s forwards`,
                }}
              >
                {l.ch}
              </span>
            ))}
          </span>
        </p>
      </div>
    </div>
  );
}
