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
  const [dir, setDir] = useState(1);
  const count = photos.length;
  const dragState = useRef<{ startX: number } | null>(null);

  const goTo = useCallback(
    (i: number) => {
      setDir(i > index || (i === 0 && index === count - 1) ? 1 : -1);
      setIndex(((i % count) + count) % count);
    },
    [count, index],
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
    dragState.current = null;
    if (!state) return;
    const delta = e.clientX - state.startX;
    if (Math.abs(delta) > 50) {
      if (delta > 0) goTo(index - 1);
      else goTo(index + 1);
      return;
    }
    // treat as a tap: left half -> prev, right half -> next
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const isLeftHalf = e.clientX - rect.left < rect.width / 2;
    goTo(isLeftHalf ? index - 1 : index + 1);
  };

  return (
    <div>
      <div
        className="corner-brackets relative aspect-[4/3] w-full cursor-pointer touch-pan-y select-none overflow-hidden border border-mist/15 bg-graphite-2 sm:aspect-[3/2]"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <div
          key={index}
          className={`absolute inset-0 ${
            dir >= 0 ? "photo-slide-in-right" : "photo-slide-in-left"
          }`}
        >
          <Image
            src={photos[index].src}
            alt={photos[index].caption}
            fill
            sizes="(min-width: 1024px) 65vw, 100vw"
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-transparent to-transparent" />
        </div>

        <div className="pointer-events-none absolute left-4 top-4 font-mono text-[11px] text-cyan/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
          {code} / {String(index + 1).padStart(2, "0")}—{String(count).padStart(2, "0")}
        </div>

        <div className="pointer-events-none absolute bottom-4 left-4 right-4">
          <p className="eyebrow max-w-xs text-mist">{photos[index].caption}</p>
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
