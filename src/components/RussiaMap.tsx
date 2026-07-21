"use client";

import { useMemo, useRef, useState } from "react";
import regionData from "@/data/russia-regions.json";
import { presenceCities } from "@/data/content";
import Reveal from "./Reveal";

type Region = { id: string; name: string; d: string };

const presenceIds = new Set(presenceCities.map((c) => c.regionId));
const hub = presenceCities.find((c) => c.name === "Москва")!;

export default function RussiaMap() {
  const regions = regionData.regions as Region[];
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pointer, setPointer] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const regionsById = useMemo(() => {
    const map = new Map<string, Region>();
    for (const r of regions) map.set(r.id, r);
    return map;
  }, [regions]);

  const hovered = hoveredId ? regionsById.get(hoveredId) : null;
  const hoveredCity = presenceCities.find((c) => c.regionId === hoveredId);

  const handlePointerOver = (e: React.PointerEvent<SVGSVGElement>) => {
    const target = e.target as SVGElement;
    const id = target.getAttribute("data-id");
    if (id) setHoveredId(id);
  };

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPointer({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handlePointerLeave = () => {
    setHoveredId(null);
    setPointer(null);
  };

  return (
    <section id="map" className="relative bg-graphite py-24 sm:py-28">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-25" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-mist/15 pb-6">
            <div>
              <p className="eyebrow tag-bracket inline-block text-cyan">
                Спецвыпуск 03 — География
              </p>
              <h2 className="mt-4 font-display text-4xl font-medium uppercase text-mist sm:text-5xl">
                Карта объектов
              </h2>
            </div>
            <p className="max-w-sm text-sm text-mist/50 leading-relaxed">
              Наведите курсор или коснитесь карты, чтобы увидеть регион.
              Отмеченные точки — города с действующими проектами МИРА.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div
            ref={containerRef}
            className="corner-brackets relative mt-10 w-full overflow-hidden border border-mist/15 bg-graphite-2"
          >
            {hovered && (
              <div
                className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-[calc(100%+14px)] whitespace-nowrap border border-cyan/40 bg-graphite px-3.5 py-2 text-mist shadow-[0_0_16px_rgba(70,232,214,0.25)]"
                style={{
                  left: pointer?.x ?? 0,
                  top: pointer?.y ?? 0,
                }}
              >
                <p className="font-body text-sm font-medium">{hovered.name}</p>
                {hoveredCity && (
                  <p className="eyebrow mt-0.5 text-safety-2">
                    {hoveredCity.coords} · {hoveredCity.projects} проектов
                  </p>
                )}
              </div>
            )}

            <svg
              viewBox={regionData.viewBox}
              className="h-auto w-full touch-none"
              onPointerOver={handlePointerOver}
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
              role="img"
              aria-label="Карта регионов России с отмеченным присутствием МИРА"
            >
              <g>
                {regions.map((r) => {
                  const isPresence = presenceIds.has(r.id);
                  const isHovered = r.id === hoveredId;
                  return (
                    <path
                      key={r.id}
                      d={r.d}
                      data-id={r.id}
                      className="transition-colors duration-150 ease-out"
                      fill={
                        isHovered
                          ? "var(--safety)"
                          : isPresence
                            ? "var(--steel-soft)"
                            : "#2c313a"
                      }
                      stroke="#181b1f"
                      strokeWidth="1"
                    />
                  );
                })}
              </g>

              <g fill="none" stroke="var(--cyan)" strokeOpacity="0.55" strokeWidth="1.4" strokeDasharray="1 6" strokeLinecap="round">
                {presenceCities
                  .filter((c) => c.name !== "Москва")
                  .map((c) => (
                    <path
                      key={c.name}
                      d={`M${hub.x},${hub.y} Q${(hub.x + c.x) / 2},${
                        (hub.y + c.y) / 2 - 40
                      } ${c.x},${c.y}`}
                    />
                  ))}
              </g>

              <g>
                {presenceCities.map((c) => (
                  <g key={c.name} transform={`translate(${c.x} ${c.y})`}>
                    <circle
                      r="9"
                      fill="var(--safety)"
                      opacity="0.35"
                      style={{
                        transformBox: "fill-box",
                        transformOrigin: "center",
                        animation: "pulse-marker 2.6s ease-out infinite",
                      }}
                    />
                    <circle r="3.5" fill="var(--safety)" stroke="#181b1f" strokeWidth="1.2" />
                  </g>
                ))}
              </g>
            </svg>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-mist/50">
            {presenceCities.map((c) => (
              <span key={c.name} className="inline-flex items-center gap-1.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-safety" />
                {c.name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
