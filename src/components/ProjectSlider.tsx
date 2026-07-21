"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { artByKey, type ArtKey } from "./BlueprintArt";

type Slide = { art: ArtKey; caption: string };

export default function ProjectSlider({
  slides,
  code,
}: {
  slides: readonly Slide[];
  code: string;
}) {
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const dragState = useRef<{ startX: number } | null>(null);

  const goTo = useCallback(
    (i: number) => setIndex(((i % count) + count) % count),
    [count],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goTo(index + 1);
      if (e.key === "ArrowLeft") goTo(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, goTo]);

  const onPointerDown = (e: React.PointerEvent) => {
    dragState.current = { startX: e.clientX };
  };
  const onPointerUp = (e: React.PointerEvent) => {
    const state = dragState.current;
    if (!state) return;
    const delta = e.clientX - state.startX;
    if (delta > 50) goTo(index - 1);
    else if (delta < -50) goTo(index + 1);
    dragState.current = null;
  };

  const Active = artByKey[slides[index].art];

  return (
    <div>
      <div
        className="corner-brackets relative aspect-[4/3] w-full touch-pan-y select-none overflow-hidden border border-mist/15 bg-graphite-2 sm:aspect-[16/9]"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <div className="blueprint-grid absolute inset-0 opacity-40" />
        <div key={index} className="absolute inset-0 flex items-center justify-center p-10 [animation:fade-up_0.5s_cubic-bezier(0.16,1,0.3,1)_both]">
          <Active className="h-full w-full max-w-2xl" />
        </div>

        <div className="absolute left-4 top-4 font-mono text-[11px] text-cyan/70">
          {code} / {String(index + 1).padStart(2, "0")}—{String(count).padStart(2, "0")}
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
          <p className="eyebrow max-w-xs text-mist/70">{slides[index].caption}</p>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              aria-label="Предыдущий слайд"
              onClick={() => goTo(index - 1)}
              className="focus-ring flex h-10 w-10 items-center justify-center border border-mist/25 bg-graphite/70 text-mist transition-colors hover:border-safety hover:text-safety"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Следующий слайд"
              onClick={() => goTo(index + 1)}
              className="focus-ring flex h-10 w-10 items-center justify-center border border-mist/25 bg-graphite/70 text-mist transition-colors hover:border-safety hover:text-safety"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3" role="tablist" aria-label="Слайды проекта">
        {slides.map((slide, i) => (
          <button
            key={slide.caption}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={slide.caption}
            onClick={() => goTo(i)}
            className="focus-ring group flex-1"
          >
            <span className="block h-px w-full bg-charcoal/15">
              <span
                className="block h-px bg-safety transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ width: i === index ? "100%" : "0%" }}
              />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
