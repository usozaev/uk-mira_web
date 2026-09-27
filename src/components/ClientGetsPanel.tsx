"use client";

import { useState } from "react";

const DOT_OK = (
  <svg width="14" height="14" viewBox="0 0 18 18" aria-hidden="true">
    <circle cx="9" cy="9" r="9" fill="rgba(91,227,164,.15)" />
    <path
      d="M5 9.2 L7.8 12 L13 6.5"
      fill="none"
      stroke="#5BE3A4"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function ChecklistMockup({ rows }: { rows: { label: string; value: number }[] }) {
  return (
    <div className="flex flex-col gap-4">
      {rows.map((r) => (
        <div key={r.label} className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm text-mist">{r.label}</span>
            {DOT_OK}
          </div>
          <span className="h-1.5 overflow-hidden rounded-full bg-mist/10">
            <span
              className="block h-full rounded-full bg-gradient-to-r from-safety to-cyan"
              style={{ width: `${r.value}%` }}
            />
          </span>
        </div>
      ))}
    </div>
  );
}

function BudgetMockup({ rows }: { rows: { label: string; plan: number; fact: number }[] }) {
  return (
    <div className="flex flex-col gap-4">
      {rows.map((r) => (
        <div key={r.label} className="flex flex-col gap-1.5">
          <span className="text-xs text-mist/60">{r.label}</span>
          <span className="relative block h-2.5 overflow-hidden rounded-full bg-mist/10">
            <span
              className="absolute inset-y-0 left-0 rounded-full border border-dashed border-cyan/50"
              style={{ width: `${r.plan}%` }}
            />
            <span
              className="absolute inset-y-0.5 left-0 rounded-full bg-gradient-to-r from-safety to-cyan"
              style={{ width: `${r.fact}%` }}
            />
          </span>
        </div>
      ))}
      <div className="mt-1 flex gap-5 text-[11px] text-mist/50">
        <span className="flex items-center gap-2">
          <span className="h-2 w-4 rounded-sm border border-dashed border-cyan/60" />
          План
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-4 rounded-sm bg-safety" />
          Факт
        </span>
      </div>
    </div>
  );
}

function RiskMapMockup() {
  const cells = [
    "rgba(255,196,92,.14)", "rgba(255,122,122,.13)", "rgba(255,122,122,.18)", "rgba(255,122,122,.24)",
    "rgba(255,196,92,.10)", "rgba(255,196,92,.14)", "rgba(255,122,122,.13)", "rgba(255,122,122,.18)",
    "rgba(91,227,164,.10)", "rgba(255,196,92,.10)", "rgba(255,196,92,.14)", "rgba(255,122,122,.13)",
    "rgba(91,227,164,.16)", "rgba(91,227,164,.10)", "rgba(255,196,92,.10)", "rgba(255,196,92,.14)",
  ];
  return (
    <div className="flex items-stretch gap-3">
      <span
        className="flex shrink-0 items-center text-[11px] text-mist/40"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        Вероятность
      </span>
      <div className="flex flex-col gap-2">
        <svg viewBox="0 0 282 202" className="h-[150px] w-[210px]" aria-hidden="true">
          {cells.map((c, i) => (
            <rect
              key={i}
              x={2 + (i % 4) * 70}
              y={2 + Math.floor(i / 4) * 50}
              width="66"
              height="46"
              rx="8"
              fill={c}
            />
          ))}
          <circle cx="245" cy="30" r="7" fill="none" stroke="#FF7A7A" strokeDasharray="3 3" />
          <line x1="245" y1="30" x2="35" y2="180" stroke="rgba(201,216,255,.45)" strokeDasharray="4 5" />
          <circle cx="35" cy="180" r="7" fill="#5BE3A4" />
          <circle cx="175" cy="75" r="7" fill="none" stroke="#FF7A7A" strokeDasharray="3 3" />
          <line x1="175" y1="75" x2="105" y2="175" stroke="rgba(201,216,255,.45)" strokeDasharray="4 5" />
          <circle cx="105" cy="175" r="7" fill="#5BE3A4" />
          <circle cx="250" cy="110" r="7" fill="none" stroke="#FF7A7A" strokeDasharray="3 3" />
          <line x1="250" y1="110" x2="35" y2="130" stroke="rgba(201,216,255,.45)" strokeDasharray="4 5" />
          <circle cx="35" cy="130" r="7" fill="#5BE3A4" />
        </svg>
        <span className="text-center text-[11px] text-mist/40">Влияние</span>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-3 pl-2">
        <span className="flex items-center gap-2 text-xs text-mist/60">
          <span className="h-2.5 w-2.5 rounded-full border border-[#FF7A7A]" style={{ borderStyle: "dashed" }} />
          Риск выявлен
        </span>
        <span className="flex items-center gap-2 text-xs text-mist/60">
          <span className="h-2.5 w-2.5 rounded-full bg-[#5BE3A4]" />
          Переведён в зону контроля
        </span>
      </div>
    </div>
  );
}

function RequestsMockup({
  rows,
}: {
  rows: { label: string; place: string; status: string }[];
}) {
  return (
    <div className="flex flex-col gap-2.5">
      {rows.map((r) => (
        <div
          key={r.label}
          className="flex items-center justify-between gap-3 rounded-xl border border-mist/10 bg-mist/5 px-3.5 py-3"
        >
          <div className="flex flex-col gap-0.5">
            <span className="text-sm text-mist">{r.label}</span>
            <span className="text-xs text-mist/50">{r.place}</span>
          </div>
          <span className="shrink-0 rounded-full bg-mist/5 px-2.5 py-1 text-xs text-cyan">
            {r.status}
          </span>
        </div>
      ))}
    </div>
  );
}

// index-aligned 1:1 with brand.clientGets.items
const MOCKUPS = [
  {
    title: "Кампус",
    subtitle: "Все направления в одном контуре",
    badge: "МИРА",
    render: () => (
      <ChecklistMockup
        rows={[
          { label: "Эксплуатация", value: 100 },
          { label: "Инженерные системы", value: 100 },
          { label: "Безопасность", value: 100 },
          { label: "Сервис для резидентов", value: 100 },
        ]}
      />
    ),
  },
  {
    title: "Расходы на эксплуатацию",
    subtitle: "План и факт по статьям",
    render: () => (
      <BudgetMockup
        rows={[
          { label: "Техническое обслуживание", plan: 86, fact: 80 },
          { label: "Энергоресурсы", plan: 70, fact: 64 },
          { label: "Клининг и сервис", plan: 58, fact: 57 },
        ]}
      />
    ),
  },
  {
    title: "Кампус",
    subtitle: "Один ответственный за весь объект",
    badge: "МИРА",
    render: () => (
      <ChecklistMockup
        rows={[
          { label: "Эксплуатация", value: 100 },
          { label: "Подрядчики и закупки", value: 100 },
          { label: "Безопасность", value: 100 },
        ]}
      />
    ),
  },
  {
    title: "Показатели объекта",
    subtitle: "Отчёт для заказчика",
    badge: "в норме",
    render: () => (
      <ChecklistMockup
        rows={[
          { label: "Заявки закрыты в срок", value: 92 },
          { label: "Плановые работы по графику", value: 88 },
          { label: "Обходы и аудиты", value: 96 },
        ]}
      />
    ),
  },
  {
    title: "Карта рисков",
    subtitle: "Выявлены до запуска и переведены в зону контроля",
    render: () => <RiskMapMockup />,
  },
  {
    title: "Обращения резидентов",
    subtitle: "Каждое доходит до решения",
    badge: "24/7",
    render: () => (
      <RequestsMockup
        rows={[
          { label: "Не работает кондиционер", place: "Корпус Б, комната 412", status: "Решено" },
          { label: "Бронь переговорной", place: "Межвузовский центр", status: "Подтверждено" },
          { label: "Гостевой пропуск", place: "Главный холл", status: "Выдан" },
        ]}
      />
    ),
  },
  {
    title: "Показатели объекта",
    subtitle: "Системное управление на протяжении жизненного цикла",
    badge: "в норме",
    render: () => (
      <ChecklistMockup
        rows={[
          { label: "Заявки закрыты в срок", value: 92 },
          { label: "Плановые работы по графику", value: 88 },
          { label: "Обходы и аудиты", value: 96 },
        ]}
      />
    ),
  },
];

export default function ClientGetsPanel({
  items,
}: {
  items: readonly string[];
}) {
  const [active, setActive] = useState(0);
  const mockup = MOCKUPS[active] ?? MOCKUPS[0];

  return (
    <div className="mt-10 grid min-h-[560px] overflow-hidden rounded-3xl border border-mist/15 bg-graphite-2 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="flex flex-col justify-center gap-1.5 py-8 pl-6 pr-2 sm:pl-8">
        {items.map((item, i) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={active === i}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            className={`focus-ring hover-glow-parent relative flex items-center border-l-2 px-5 py-4 text-left text-lg transition-colors ${
              active === i
                ? "border-safety text-mist"
                : "border-mist/10 text-mist/50 hover:text-mist/80"
            }`}
          >
            <span
              className="hover-glow-bar pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent"
              aria-hidden="true"
            />
            <span className="leading-snug">{item}</span>
          </button>
        ))}
      </div>

      <div
        className="relative overflow-hidden border-t border-mist/10 p-8 sm:p-10 lg:border-l lg:border-t-0"
        style={{
          background:
            "radial-gradient(ellipse 420px 340px at 50% 50%, rgba(30,70,190,.35) 0%, transparent 75%)",
        }}
      >
        <div className="relative rounded-2xl border border-cyan/20 bg-charcoal/40 p-7 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-[17px] font-semibold text-mist">{mockup.title}</span>
              <span className="text-[13px] text-mist/50">{mockup.subtitle}</span>
            </div>
            {mockup.badge && (
              <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#5be3a4]/15 px-3 py-1 text-xs text-[#5be3a4]">
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {mockup.badge}
              </span>
            )}
          </div>
          <div className="mt-5">{mockup.render()}</div>
        </div>
      </div>
    </div>
  );
}
