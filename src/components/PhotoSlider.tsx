"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

type Photo = { src: string; caption: string };

export default function PhotoSlider({
  photos,
  code,
}: {
  photos: readonly Photo[];
  code: string;
}) {
  const [index, setIndex] = useState(0);
  const count = photos.length;
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

  return (
    <div>
      <div
        className="corner-brackets relative aspect-[4/3] w-full touch-pan-y select-none overflow-hidden border border-mist/15 bg-graphite-2 sm:aspect-[16/9]"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <div key={index} className="absolute inset-0 [animation:fade-up_0.5s_cubic-bezier(0.16,1,0.3,1)_both]">
          <Image
            src={photos[index].src}
            alt={photos[index].caption}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-transparent to-transparent" />
        </div>

        <div className="absolute left-4 top-4 font-mono text-[11px] text-cyan/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
          {code} / {String(index + 1).padStart(2, "0")}—{String(count).padStart(2, "0")}
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
          <p className="eyebrow max-w-xs text-mist">{photos[index].caption}</p>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              aria-label="Предыдущее фото"
              onClick={() => goTo(index - 1)}
              className="focus-ring flex h-10 w-10 items-center justify-center border border-mist/25 bg-graphite/70 text-mist transition-colors hover:border-safety hover:text-safety"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Следующее фото"
              onClick={() => goTo(index + 1)}
              className="focus-ring flex h-10 w-10 items-center justify-center border border-mist/25 bg-graphite/70 text-mist transition-colors hover:border-safety hover:text-safety"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3" role="tablist" aria-label="Фото кампуса">
        {photos.map((photo, i) => (
          <button
            key={photo.caption}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={photo.caption}
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
