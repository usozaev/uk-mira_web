"use client";

import Starfield from "./Starfield";
import OrbitArt from "./OrbitArt";
import MarqueeTicker from "./MarqueeTicker";

const STAR_D = "M50,8 L54,46 L92,50 L54,54 L50,92 L46,54 L8,50 L46,46 Z";

const HEADLINE_WORDS = [
  "Управляющая",
  "компания",
  "и",
  "оператор",
  "полного",
  "цикла",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[620px] flex-col overflow-hidden text-mist sm:min-h-[760px] lg:min-h-[900px]"
      style={{
        background:
          "radial-gradient(ellipse 420px 300px at 76% 46%, rgba(120,175,255,.45), transparent 62%), radial-gradient(ellipse 700px 520px at 88% 62%, rgba(26,72,210,.42), transparent 68%), radial-gradient(ellipse 520px 420px at 4% 96%, rgba(60,36,150,.22), transparent 70%), linear-gradient(100deg, #01030C 0%, #02061A 26%, #051032 52%, #0A1F59 78%, #123078 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <Starfield count={130} seed={7} />
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-[62%] lg:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(1,3,12,.92) 0%, rgba(1,3,12,.72) 38%, rgba(1,3,12,0) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-24">
        <div className="pointer-events-none absolute right-0 top-1/2 hidden w-[28rem] -translate-y-1/2 opacity-80 lg:block xl:right-6 xl:w-[34rem]">
          <OrbitArt />
        </div>

        <div className="flex max-w-2xl flex-col gap-10">
          <h1 className="font-display text-3xl font-medium leading-[1.08] tracking-[-0.02em] sm:text-4xl lg:text-[58px]">
            {HEADLINE_WORDS.map((word, i) => (
              <span
                key={word + i}
                className="chrome-text mr-[0.28em] inline-block [animation:fade-up_1s_cubic-bezier(0.2,0.8,0.2,1)_both]"
                style={{ animationDelay: `${0.2 + i * 0.09}s` }}
              >
                {word}
              </span>
            ))}
          </h1>

          <div className="flex flex-col items-start gap-2.5 [animation:fade-up_1s_cubic-bezier(0.2,0.8,0.2,1)_0.85s_both]">
            <div className="flex items-center gap-6">
              <div className="relative flex items-end">
                <svg viewBox="-40 -40 80 80" className="absolute -left-1 -top-4 h-5 w-5" aria-hidden="true">
                  <path d={STAR_D} fill="var(--cyan)" />
                </svg>
                <span className="chrome-text font-display text-6xl font-light leading-none tracking-tight sm:text-7xl">
                  №1
                </span>
              </div>
              <span className="h-16 w-px bg-gradient-to-b from-transparent via-cyan/60 to-transparent" />
              <span className="max-w-[220px] text-[17px] leading-snug text-mist/70">
                в управлении университетскими кампусами
              </span>
            </div>
            <svg
              width="330"
              height="22"
              viewBox="0 0 330 22"
              fill="none"
              className="ml-1"
              aria-hidden="true"
            >
              <path
                d="M2 16 C70 2 128 20 196 10 C244 3 286 8 328 14"
                stroke="var(--nebula)"
                strokeWidth="1.6"
                strokeLinecap="round"
                pathLength={1}
                style={{
                  strokeDasharray: 1,
                  strokeDashoffset: 1,
                  animation: "swoosh-draw 1.2s cubic-bezier(0.3,0.8,0.3,1) 1.5s forwards",
                }}
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <MarqueeTicker />
      </div>
    </section>
  );
}
