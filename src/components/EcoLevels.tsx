"use client";

import { useState } from "react";

type Line = [number, number, number, number];

function NodeIcon({ lines, size = 220 }: { lines: Line[]; size?: number }) {
  const nodes = new Set<string>();
  lines.forEach(([x1, y1, x2, y2]) => {
    nodes.add(`${x1},${y1}`);
    nodes.add(`${x2},${y2}`);
  });
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className="glow"
      style={{ filter: "drop-shadow(0 0 6px #4D7CFF) drop-shadow(0 0 18px rgba(77,124,255,.6))" }}
      aria-hidden="true"
    >
      {lines.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C9D8FF" strokeWidth="2" strokeLinecap="round" />
      ))}
      {[...nodes].map((n) => {
        const [x, y] = n.split(",").map(Number);
        return <circle key={n} cx={x} cy={y} r="5.5" fill="#FFFFFF" />;
      })}
    </svg>
  );
}

function MiniNodeIcon({ lines }: { lines: Line[] }) {
  const nodes = new Set<string>();
  lines.forEach(([x1, y1, x2, y2]) => {
    nodes.add(`${x1},${y1}`);
    nodes.add(`${x2},${y2}`);
  });
  return (
    <svg viewBox="0 0 200 200" width="22" height="22" className="glow-s" aria-hidden="true">
      {lines.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C9D8FF" strokeWidth="6" strokeLinecap="round" />
      ))}
      {[...nodes].map((n) => {
        const [x, y] = n.split(",").map(Number);
        return <circle key={n} cx={x} cy={y} r="12" fill="#FFFFFF" />;
      })}
    </svg>
  );
}

const LEVELS = [
  {
    label: "Уровень 1",
    title: "Клиентский",
    subtitle: "Сервис для резидентов",
    icon: (
      <svg viewBox="0 0 200 150" width="92" height="69" aria-hidden="true">
        <rect x="20" y="6" width="76" height="138" rx="16" fill="rgba(110,155,255,.06)" stroke="#9DBBFF" strokeWidth="1.2" />
        <rect x="46" y="13" width="24" height="4" rx="2" fill="rgba(157,187,255,.45)" />
        {[0, 1, 2].map((r) =>
          [0, 1, 2].map((c) => (
            <rect
              key={`${r}-${c}`}
              x={31 + c * 19}
              y={30 + r * 19}
              width="14"
              height="14"
              rx="4"
              fill={(r === 0 && c === 0) || (r === 1 && (c === 1 || c === 2)) || (r === 2 && c === 1) ? "#6E9BFF" : "rgba(157,187,255,.08)"}
              stroke={(r === 0 && c === 0) || (r === 1 && (c === 1 || c === 2)) || (r === 2 && c === 1) ? "none" : "rgba(157,187,255,.3)"}
            />
          )),
        )}
        <rect x="31" y="92" width="52" height="40" rx="8" fill="rgba(110,155,255,.16)" />
      </svg>
    ),
    panelTitle: "Приложение резидента",
    panelSubtitle: "Мега-приложение: все сервисы кампуса на расстоянии одного клика",
    badge: "Кейс: ИТ-кампус «Неймарк»",
    tabs: [
      {
        name: "Единый доступ",
        iconLines: [
          [68, 26, 132, 26], [132, 26, 132, 174], [132, 174, 68, 174], [68, 174, 68, 26],
          [84, 62, 116, 62], [116, 62, 116, 98], [116, 98, 84, 98], [84, 98, 84, 62],
        ] as Line[],
        heading: "Один экран вместо десяти сервисов",
        points: [
          { kicker: "", title: "Лента дня", text: "Заявки, брони, события и новости кампуса в одном потоке" },
          { kicker: "", title: "Все сервисы кампуса", text: "Заселение, расписание, карта, консьерж и ИИ-ассистент" },
          { kicker: "", title: "Один вход", text: "Профиль резидента открывает все системы кампуса" },
        ],
      },
      {
        name: "Сценарии",
        iconLines: [[40, 105, 85, 150], [85, 150, 165, 55], [125, 55, 165, 55], [165, 55, 165, 95]] as Line[],
        heading: "Каждый сценарий закрывается внутри приложения",
        points: [
          { kicker: "1 мин", title: "Гостевой пропуск", text: "QR-код на входе вместо бумажной заявки" },
          { kicker: "24/7", title: "Заявка в УК", text: "Номер, статус и комментарий онлайн" },
          { kicker: "онлайн", title: "Бронь ресурса", text: "VR-гарнитура, 3D-принтер, переговорная" },
        ],
      },
      {
        name: "Стандарт кампуса",
        iconLines: [
          [100, 28, 158, 50], [158, 50, 152, 118], [152, 118, 100, 172], [100, 172, 48, 118],
          [48, 118, 42, 50], [42, 50, 100, 28], [100, 28, 100, 100], [100, 100, 100, 172],
        ] as Line[],
        heading: "Ещё 6 контрольных точек Стандарта закрывает приложение",
        points: [
          { kicker: "С1.1, С1.2", title: "Профиль и расписание", text: "Единая лента событий и сквозная авторизация" },
          { kicker: "С1.3, И2", title: "Поддержка и доступ", text: "Обращения 24/7 и электронный гостевой пропуск" },
          { kicker: "Ф8.6, С4.1", title: "Бронь и заселение", text: "Помещения, ресурсы и жильё в цифровом сервисе" },
        ],
      },
    ],
  },
  {
    label: "Уровень 2",
    title: "Платформенный",
    subtitle: "Образование, наука и бизнес",
    icon: (
      <svg viewBox="0 0 200 150" width="92" height="69" aria-hidden="true">
        <circle cx="18" cy="30" r="5" fill="#040A1C" stroke="#9DBBFF" strokeWidth="1.4" />
        <circle cx="18" cy="75" r="5" fill="#040A1C" stroke="#9DBBFF" strokeWidth="1.4" />
        <circle cx="18" cy="120" r="5" fill="#040A1C" stroke="#9DBBFF" strokeWidth="1.4" />
        <circle cx="180" cy="75" r="16" fill="rgba(110,155,255,.25)" />
        <path transform="translate(180 75) scale(.32)" d="M0 -38 C4 -6 6 -4 38 0 C6 4 4 6 0 38 C-4 6 -6 4 -38 0 C-6 -4 -4 -6 0 -38Z" fill="#FFFFFF" />
        <line x1="18" y1="30" x2="74" y2="18" stroke="#6E9BFF" strokeOpacity="0.5" />
        <line x1="18" y1="75" x2="74" y2="56" stroke="#6E9BFF" strokeOpacity="0.5" />
        <line x1="18" y1="120" x2="74" y2="132" stroke="#6E9BFF" strokeOpacity="0.5" />
        <line x1="74" y1="18" x2="130" y2="102" stroke="#6E9BFF" strokeOpacity="0.55" />
        <line x1="130" y1="48" x2="180" y2="75" stroke="#9DBBFF" strokeOpacity=".7" />
        <line x1="130" y1="102" x2="180" y2="75" stroke="#9DBBFF" strokeOpacity=".7" />
      </svg>
    ),
    panelTitle: "MIRAVERSE",
    panelSubtitle: "ИИ-платформа нового поколения: точка встречи студентов, науки и бизнеса",
    badge: "miraverse.ru",
    tabs: [
      {
        name: "МИРА.Образование",
        iconLines: [
          [40, 50, 100, 68], [100, 68, 160, 50], [100, 68, 100, 168], [40, 50, 40, 150],
          [160, 50, 160, 150], [40, 150, 100, 168], [100, 168, 160, 150],
        ] as Line[],
        heading: "Персональный ИИ-наставник для каждого студента",
        points: [
          { kicker: "", title: "Репетитор.AI", text: "Видит пробелы в знаниях и объясняет тему заново" },
          { kicker: "", title: "Блокнот.AI", text: "Превращает конспекты в тесты, подкасты и инфографику" },
          { kicker: "", title: "Карьера.AI", text: "Готовит учебный план под вакансию и пробное собеседование" },
        ],
      },
      {
        name: "МИРА.Бизнес",
        iconLines: [[30, 160, 75, 142], [75, 142, 110, 80], [110, 80, 135, 108], [135, 108, 170, 40]] as Line[],
        heading: "Кампус как R&D-центр для бизнеса",
        points: [
          { kicker: "", title: "Биржа инноваций", text: "Бизнес заказывает, учёные продают инновации" },
          { kicker: "", title: "Mira.Кадры", text: "ИИ находит сильных студентов до выхода на рынок труда" },
          { kicker: "", title: "Mira.Space", text: "Открытая витрина услуг кампуса" },
        ],
      },
      {
        name: "МИРА.Наука",
        iconLines: [[100, 30, 100, 92], [100, 92, 48, 166], [48, 166, 152, 166], [152, 166, 100, 92]] as Line[],
        heading: "Полный цикл исследования на одной платформе",
        points: [
          { kicker: "", title: "Синтезатор исследований", text: "Подбирает тему, заказчиков, лабораторию и команду" },
          { kicker: "−95%", title: "Цифровая лаборатория", text: "Времени и затрат на проверку гипотез" },
          { kicker: "−80%", title: "Цифровой соавтор", text: "Времени до публикации научной работы" },
        ],
      },
      {
        name: "CampusCoin",
        iconLines: [
          [169.3, 128.7, 128.7, 169.3], [128.7, 169.3, 71.3, 169.3], [71.3, 169.3, 30.7, 128.7],
          [30.7, 128.7, 30.7, 71.3], [30.7, 71.3, 71.3, 30.7], [71.3, 30.7, 128.7, 30.7],
          [128.7, 30.7, 169.3, 71.3], [169.3, 71.3, 169.3, 128.7],
          [128, 64, 84, 64], [84, 64, 66, 100], [66, 100, 84, 136], [84, 136, 128, 136],
        ] as Line[],
        heading: "Валюта, которая мотивирует учиться и участвовать",
        points: [
          { kicker: "1 CC = 1 ₽", title: "Начисление", text: "За учёбу, публикации и активность в кампусе" },
          { kicker: "∞", title: "Обмен", text: "Мерч, сервисы кампуса и скидки партнёров" },
          { kicker: "0 фейков", title: "Портфолио", text: "Работодатель видит только подтверждённые достижения" },
        ],
      },
    ],
  },
  {
    label: "Уровень 3",
    title: "Инфраструктурный",
    subtitle: "Управление зданием",
    icon: (
      <svg viewBox="0 0 200 150" width="92" height="69" aria-hidden="true">
        <path d="M100 22 L160 47 L100 72 L40 47 Z" fill="rgba(110,155,255,.22)" stroke="#9DBBFF" strokeWidth="1.2" />
        <path d="M40 47 L100 72 L100 142 L40 117 Z" fill="rgba(110,155,255,.08)" stroke="#6E9BFF" strokeWidth="1.2" />
        <path d="M100 72 L160 47 L160 117 L100 142 Z" fill="rgba(110,155,255,.14)" stroke="#6E9BFF" strokeWidth="1.2" />
        <circle cx="100" cy="47" r="3.5" fill="#FFFFFF" />
        <circle cx="70" cy="92" r="3" fill="#5BE3A4" />
        <circle cx="130" cy="100" r="3" fill="#9DBBFF" />
      </svg>
    ),
    panelTitle: "Цифровая инфраструктура",
    panelSubtitle: "Интеллектуальное управление зданием: три системы в одном контуре",
    badge: "Основа: BIM-модель",
    tabs: [
      {
        name: "ЕИСК",
        iconLines: [
          [100, 100, 45, 45], [100, 100, 155, 45], [100, 100, 155, 155], [100, 100, 45, 155],
          [45, 45, 100, 30], [100, 30, 155, 45], [155, 45, 170, 100], [170, 100, 155, 155],
          [155, 155, 100, 170], [100, 170, 45, 155], [45, 155, 30, 100], [30, 100, 45, 45],
        ] as Line[],
        heading: "Единая информационная система кампуса",
        points: [
          { kicker: "", title: "Портал и кабинет", text: "Информационный портал и личный кабинет резидента" },
          { kicker: "", title: "Расписания и навигация", text: "Управление расписаниями, навигация, ИИ-помощник" },
          { kicker: "", title: "Интеграционная платформа", text: "Персонал, научное оборудование и все системы кампуса" },
        ],
      },
      {
        name: "Explo-IT",
        iconLines: [
          [35, 92, 100, 38], [100, 38, 165, 92], [165, 92, 165, 168], [165, 168, 35, 168],
          [35, 168, 35, 92], [80, 168, 80, 122], [80, 122, 120, 122], [120, 122, 120, 168],
        ] as Line[],
        heading: "Цифровая эксплуатация зданий",
        points: [
          { kicker: "", title: "Паспортизация", text: "Цифровые паспорта зданий и помещений из BIM-модели" },
          { kicker: "", title: "Заявки и обходы", text: "Маршрутизация заявок, цифровые чек-листы и аудиты" },
          { kicker: "", title: "ППР и закупки", text: "График работ и план закупок формируются автоматически" },
        ],
      },
      {
        name: "АСУЗ",
        iconLines: [
          [15, 110, 55, 110], [55, 110, 75, 62], [75, 62, 105, 160], [105, 160, 130, 78],
          [130, 78, 148, 110], [148, 110, 185, 110],
        ] as Line[],
        heading: "Автоматизированная система управления зданием",
        points: [
          { kicker: "", title: "Платформа здания", text: "Единая точка управления инженерной инфраструктурой" },
          { kicker: "", title: "Диспетчеризация", text: "Автоматизация и мониторинг инженерных систем" },
          { kicker: "", title: "Интеграции", text: "Комплексная безопасность и учёт энергоресурсов и воды" },
        ],
      },
    ],
  },
];

export default function EcoLevels() {
  const [openLevel, setOpenLevel] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const level = LEVELS[openLevel];
  const tab = level.tabs[Math.min(activeTab, level.tabs.length - 1)];

  return (
    <div className="mt-10">
      <div className="relative grid gap-5 sm:grid-cols-3">
        {LEVELS.map((l, i) => (
          <button
            key={l.title}
            type="button"
            onClick={() => {
              setOpenLevel(i);
              setActiveTab(0);
            }}
            className={`focus-ring hover-glow-parent relative flex items-center gap-4 overflow-hidden rounded-3xl border p-5 text-left transition-all duration-300 ${
              openLevel === i
                ? "border-cyan bg-graphite-3/50"
                : "border-mist/10 bg-graphite-2 hover:border-cyan/40"
            }`}
            style={
              openLevel === i
                ? {
                    boxShadow:
                      "0 0 0 1px rgba(157,187,255,.25), 0 20px 60px rgba(40,90,230,.45), inset 0 0 70px rgba(60,110,255,.16)",
                  }
                : undefined
            }
          >
            {openLevel === i && (
              <span
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(90,140,255,.22), transparent 70%)",
                }}
                aria-hidden="true"
              />
            )}
            {openLevel !== i && (
              <span
                className="pointer-events-none absolute inset-0 bg-charcoal/75 transition-opacity duration-300"
                style={{ backdropFilter: "grayscale(0.8)", WebkitBackdropFilter: "grayscale(0.8)" }}
                aria-hidden="true"
              />
            )}
            <span className="relative flex h-[69px] w-[92px] shrink-0 items-center justify-center">{l.icon}</span>
            <span className="relative flex min-w-0 flex-col gap-1.5">
              <span className="text-[13px] text-cyan">{l.label}</span>
              <span className="whitespace-nowrap font-display text-lg font-medium text-mist">{l.title}</span>
              <span className="text-sm leading-snug text-mist/55">{l.subtitle}</span>
            </span>

            {openLevel === i ? (
              <span
                className="pointer-events-none absolute inset-x-0 -bottom-px mx-auto h-0.5 w-40 bg-gradient-to-r from-transparent via-white to-transparent"
                aria-hidden="true"
              />
            ) : (
              <span
                className="hover-glow-bar pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent"
                aria-hidden="true"
              />
            )}
          </button>
        ))}
      </div>

      {/* connecting beam from the active card down to the panel */}
      <div className="relative mx-auto hidden h-14 w-0.5 sm:block" style={{ marginLeft: `${(openLevel + 0.5) * (100 / 3)}%` }}>
        <span
          className="absolute inset-0 bg-gradient-to-b from-white to-[rgba(110,155,255,0.4)]"
          style={{ boxShadow: "0 0 12px #6E9BFF" }}
        />
        <span
          className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-white"
          style={{ boxShadow: "0 0 0 4px rgba(110,155,255,.35), 0 0 20px #6E9BFF" }}
        />
      </div>

      <div
        className="relative mt-2 overflow-hidden rounded-[32px] border border-cyan/25 p-8 sm:p-12"
        style={{
          background:
            "radial-gradient(ellipse 700px 400px at 20% 60%, #0C2461 0%, #050D26 60%, #040A1C 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,.07)",
        }}
      >
        <div className="relative flex flex-wrap items-start justify-between gap-6">
          <div>
            <span className="chrome-text font-display text-2xl font-semibold sm:text-[32px]">
              {level.panelTitle}
            </span>
            <p className="mt-2 max-w-md text-[15px] text-mist/60">{level.panelSubtitle}</p>
          </div>
          <span className="shrink-0 rounded-full border border-cyan/35 px-5 py-2 text-sm text-mist">
            {level.badge}
          </span>
        </div>

        <div className="relative mt-6 flex flex-wrap gap-2.5">
          {level.tabs.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`focus-ring hover-glow-parent relative flex items-center gap-3 rounded-full border px-5 py-3 text-sm transition-colors ${
                activeTab === i
                  ? "border-cyan/60 bg-safety/25 font-semibold text-mist"
                  : "border-mist/15 text-mist/55 hover:border-cyan/40 hover:text-mist/80"
              }`}
            >
              <span
                className="hover-glow-bar pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent"
                aria-hidden="true"
              />
              <MiniNodeIcon lines={t.iconLines} />
              {t.name}
            </button>
          ))}
        </div>

        <div className="relative mt-8 grid gap-8 lg:grid-cols-[220px_1fr] lg:items-center">
          <div
            className="hidden h-[220px] items-center justify-center rounded-3xl lg:flex"
            style={{ background: "radial-gradient(circle at 50% 50%, rgba(40,80,200,.35) 0%, transparent 70%)" }}
          >
            <NodeIcon lines={tab.iconLines} />
          </div>
          <div>
            <h3 className="font-display text-xl font-medium text-mist sm:text-2xl">{tab.heading}</h3>
            <div className="relative mt-8 grid gap-6 border-t border-cyan/25 pt-7 sm:grid-cols-3">
              {tab.points.map((p) => (
                <div key={p.title} className="flex flex-col gap-1.5">
                  {p.kicker && (
                    <span className="font-display text-2xl font-light tracking-tight text-cyan">
                      {p.kicker}
                    </span>
                  )}
                  <span className="font-display text-[15px] font-medium text-mist">{p.title}</span>
                  <span className="text-sm leading-relaxed text-mist/55">{p.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
