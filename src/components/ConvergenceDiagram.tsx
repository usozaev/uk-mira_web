"use client";

import { useEffect, useRef, useState } from "react";

const STAR_D = "M50,8 L54,46 L92,50 L54,54 L50,92 L46,54 L8,50 L46,46 Z";

const NODES = [
  { label: "Эксплуатация", x: 110, y: 70, size: 16 },
  { label: "Инженерные системы", x: 420, y: 50, size: 14 },
  { label: "Безопасность", x: 545, y: 195, size: 18 },
  { label: "Сервис", x: 505, y: 350, size: 13 },
  { label: "Бюджет и KPI", x: 340, y: 405, size: 16 },
  { label: "IT-системы", x: 140, y: 385, size: 14 },
  { label: "Клининг", x: 35, y: 255, size: 12 },
  { label: "Подрядчики", x: 75, y: 125, size: 15 },
];

const CENTER = { x: 300, y: 215 };

// outer constellation outline connecting neighbouring nodes
const OUTLINE: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0],
];
// a few bright spokes converging into the MIRA hub
const SPOKES = [0, 2, 4, 6];

// faint background scatter stars, purely decorative
const BG_STARS = [
  { x: 250, y: 30, r: 1.4 }, { x: 470, y: 150, r: 1 }, { x: 480, y: 280, r: 1.2 },
  { x: 230, y: 370, r: 1 }, { x: 20, y: 190, r: 1.3 }, { x: 190, y: 20, r: 1 },
  { x: 380, y: 330, r: 1.4 }, { x: 90, y: 340, r: 1 }, { x: 560, y: 80, r: 1.2 },
];

export default function ConvergenceDiagram({
  className = "",
}: {
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-3xl border border-safety/30 bg-graphite-2 ${className}`}
      style={{
        boxShadow: "0 30px 90px rgba(30,70,190,.28), inset 0 1px 0 rgba(255,255,255,.07)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 620px 320px at 50% 46%, #0F2C78 0%, #061233 55%, #040A1C 100%)",
        }}
      />
      <svg viewBox="0 0 600 440" className="relative h-full w-full" aria-hidden="true">
        {BG_STARS.map((s, i) => (
          <circle
            key={`bg-${i}`}
            cx={s.x}
            cy={s.y}
            r={s.r}
            fill="var(--mist)"
            style={{
              opacity: visible ? 0.5 : 0,
              transition: `opacity 1s ease ${0.4 + i * 0.05}s`,
              animation: visible ? `mini-star-twinkle ${3 + (i % 4)}s ease-in-out ${i * 0.3}s infinite` : "none",
            }}
          />
        ))}

        {OUTLINE.map(([a, b], i) => (
          <line
            key={`outline-${i}`}
            x1={NODES[a].x}
            y1={NODES[a].y}
            x2={NODES[b].x}
            y2={NODES[b].y}
            stroke="var(--cyan)"
            strokeWidth="1"
            strokeDasharray="2 5"
            strokeOpacity={visible ? 0.3 : 0}
            style={{ transition: `stroke-opacity 0.9s ease ${0.1 + i * 0.05}s` }}
          />
        ))}

        {SPOKES.map((n, i) => (
          <line
            key={`spoke-${i}`}
            x1={NODES[n].x}
            y1={NODES[n].y}
            x2={CENTER.x}
            y2={CENTER.y}
            stroke="var(--nebula)"
            strokeWidth="1.3"
            strokeOpacity={visible ? 0.55 : 0}
            style={{ transition: `stroke-opacity 0.9s ease ${0.35 + i * 0.08}s` }}
          />
        ))}

        {NODES.map((n, i) => (
          <g
            key={`node-${i}`}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "scale(1)" : "scale(0.4)",
              transformOrigin: `${n.x}px ${n.y}px`,
              transition: `opacity 0.5s ease ${i * 0.07}s, transform 0.5s cubic-bezier(0.2,0.8,0.2,1) ${i * 0.07}s`,
            }}
          >
            <g
              style={{
                transformBox: "fill-box",
                transformOrigin: "center",
                animation: visible ? `mini-star-twinkle ${2.6 + (i % 3) * 0.6}s ease-in-out ${i * 0.2}s infinite` : "none",
              }}
            >
              <path
                transform={`translate(${n.x - n.size / 2} ${n.y - n.size / 2}) scale(${n.size / 100})`}
                d={STAR_D}
                fill="var(--cyan)"
              />
            </g>
            <text
              x={n.x}
              y={n.y + (n.y < CENTER.y ? -14 : 24)}
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize="12"
              fill="var(--steel-soft)"
            >
              {n.label}
            </text>
          </g>
        ))}

        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.5)",
            transformOrigin: `${CENTER.x}px ${CENTER.y}px`,
            transition: "opacity 0.6s ease 0.5s, transform 0.6s cubic-bezier(0.2,0.8,0.2,1) 0.5s",
          }}
        >
          <circle cx={CENTER.x} cy={CENTER.y} r="52" fill="url(#convergence-glow)" />
          <path
            transform={`translate(${CENTER.x - 50} ${CENTER.y - 50})`}
            d={STAR_D}
            fill="var(--mist)"
          />
        </g>

        <defs>
          <radialGradient id="convergence-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--nebula)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="var(--nebula)" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <div className="relative -mt-2 flex items-center justify-between px-8 pb-6">
        <div className="flex flex-col gap-1">
          <span className="font-display text-lg font-medium text-mist">Модель МИРА</span>
          <span className="text-sm text-cyan">
            Все направления собраны в единую систему с одним центром ответственности
          </span>
        </div>
        <div className="hidden items-center gap-3 text-xs text-steel-soft sm:flex">
          <span>Хаос</span>
          <span className="relative h-0.5 w-28 overflow-hidden rounded-full bg-mist/10">
            <span
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-safety to-cyan transition-all duration-1000 ease-out"
              style={{ width: visible ? "100%" : "0%" }}
            />
          </span>
          <span className="text-cyan">Система</span>
        </div>
      </div>
    </div>
  );
}
