"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { focusSlides } from "@/data/content";

const AUTO_MS = 5500;

export default function FocusSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const dragState = useRef<{ startX: number; dragging: boolean } | null>(null);
  const count = focusSlides.length;

  const goTo = useCallback(
    (i: number) => setIndex(((i % count) + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), AUTO_MS);
    return () => clearInterval(t);
  }, [paused, count]);

  const onPointerDown = (e: React.PointerEvent) => {
    dragState.current = { startX: e.clientX, dragging: true };
    setPaused(true);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    const state = dragState.current;
    if (!state?.dragging) return;
    const delta = e.clientX - state.startX;
    if (delta > 50) goTo(index - 1);
    else if (delta < -50) goTo(index + 1);
    dragState.current = null;
    setPaused(false);
  };

  return (
    <section
      id="focus"
      className="relative overflow-hidden bg-graphite py-24 text-mist sm:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex items-end justify-between gap-4 border-b-2 border-mist/15 pb-6">
          <div>
            <p className="eyebrow tag-bracket inline-block text-cyan">
              Спецвыпуск 02 — Направления
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium uppercase sm:text-5xl">
              В фокусе
            </h2>
          </div>
          <div className="hidden gap-3 sm:flex">
            <button
              type="button"
              aria-label="Предыдущий слайд"
              onClick={() => goTo(index - 1)}
              className="focus-ring flex h-11 w-11 items-center justify-center border border-mist/25 transition-colors hover:border-safety hover:text-safety"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Следующий слайд"
              onClick={() => goTo(index + 1)}
              className="focus-ring flex h-11 w-11 items-center justify-center border border-mist/25 transition-colors hover:border-safety hover:text-safety"
            >
              →
            </button>
          </div>
        </div>

        <div
          className="mt-10 touch-pan-y overflow-hidden select-none"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {focusSlides.map((slide, i) => (
              <article
                key={slide.title}
                className="grid w-full shrink-0 grid-cols-1 items-center gap-10 pr-2 lg:grid-cols-[1fr_auto] lg:gap-16"
                aria-hidden={i !== index}
              >
                <div>
                  <p className="eyebrow text-safety-2">{slide.kicker}</p>
                  <h3 className="mt-4 max-w-xl font-display text-3xl font-medium leading-snug sm:text-4xl">
                    {slide.title}
                  </h3>
                  <p className="mt-5 max-w-md text-mist/70 leading-relaxed">
                    {slide.text}
                  </p>
                </div>
                <div className="corner-brackets flex aspect-[4/3] w-full flex-col justify-between border border-mist/15 bg-graphite-2 p-8 lg:w-80">
                  <svg viewBox="0 0 200 140" className="h-full w-full opacity-80" aria-hidden="true">
                    <path
                      d="M10 110 C 50 40, 90 120, 130 60 S 180 30, 195 20"
                      fill="none"
                      stroke="var(--cyan)"
                      strokeWidth="1.5"
                      strokeDasharray="4 5"
                    />
                    <circle cx="10" cy="110" r="3" fill="var(--safety)" />
                    <circle cx="195" cy="20" r="3" fill="var(--cyan)" />
                  </svg>
                  <div>
                    <div className="font-display text-3xl font-medium text-cyan">
                      {slide.figure}
                    </div>
                    <p className="eyebrow mt-1 text-mist/50">
                      {slide.figureLabel}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center gap-3" role="tablist" aria-label="Слайды">
          {focusSlides.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={slide.title}
              onClick={() => goTo(i)}
              className="focus-ring group flex-1"
            >
              <span className="block h-px w-full bg-mist/20">
                <span
                  className="block h-px bg-safety transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ width: i === index ? "100%" : "0%" }}
                />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
