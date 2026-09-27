"use client";

import { useState } from "react";

const CATEGORIES = [
  {
    title: "Отчётность и KPI",
    icon: "M6 26 L6 14 M14 26 L14 8 M22 26 L22 18",
    points: [
      "управляем подрядчиками, бюджетом, отчётностью и KPI",
      "контролируем выполнение целевых показателей и обязательств",
    ],
  },
  {
    title: "Операционная модель",
    icon: "M16 4 L27 10 L27 22 L16 28 L5 22 L5 10 Z",
    points: [
      "оцениваем готовность объекта к эксплуатации и выявляем риски до запуска",
      "выстраиваем операционную модель и систему управления",
    ],
  },
  {
    title: "Среда и сервис",
    icon: "M6 16 A10 10 0 1 1 6 16.01",
    points: [
      "отвечаем за качество среды и пользовательский опыт",
      "организуем и контролируем ежедневную эксплуатацию",
    ],
  },
];

export default function EcoPanel() {
  const [active, setActive] = useState(0);
  const category = CATEGORIES[active];

  return (
    <div className="mt-10">
      <div className="grid gap-4 sm:grid-cols-3">
        {CATEGORIES.map((c, i) => (
          <button
            key={c.title}
            type="button"
            onClick={() => setActive(i)}
            className={`focus-ring group relative overflow-hidden rounded-xl border p-6 text-left transition-all duration-300 ${
              active === i
                ? "border-safety bg-graphite-3/40"
                : "border-mist/10 bg-graphite-2 hover:border-cyan/40"
            }`}
          >
            <svg viewBox="0 0 32 32" className="h-7 w-7 text-safety" aria-hidden="true">
              <path
                d={c.icon}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="mt-4 font-display text-base font-medium uppercase text-mist">
              {c.title}
            </p>
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-mist/15 bg-graphite-2 p-6 sm:p-8">
        <ul className="grid gap-4 sm:grid-cols-2">
          {category.points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-mist/75 leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
