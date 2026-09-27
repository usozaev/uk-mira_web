import Reveal from "./Reveal";

const STEPS = [
  { n: "01", title: "Запуск объекта", text: "Проверяем готовность и закрываем риски до открытия." },
  { n: "02", title: "Операционное управление", text: "Модель, службы, стандарты и сроки. Каждый день." },
  { n: "03", title: "Экономика и KPI", text: "Подрядчики, бюджет и показатели под контролем." },
  { n: "04", title: "Сервис и среда", text: "Слушаем резидентов и улучшаем сервис." },
  { n: "05", title: "Цифровизация", text: "Цифровизируем сервисы и эксплуатацию кампуса." },
];

export default function ServicesProcessGrid() {
  return (
    <div className="mt-10">
      <div className="relative hidden h-px bg-[#1B44C9]/15 lg:block">
        <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-[#1B44C9] to-transparent" />
        {STEPS.map((_, i) => (
          <span
            key={i}
            className="absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#1B44C9] bg-white"
            style={{ left: `${(i / (STEPS.length - 1)) * 100}%` }}
          />
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 80}>
            <div
              className={`flex h-full flex-col gap-3.5 rounded-3xl border bg-white p-6 shadow-[0_18px_46px_rgba(23,54,140,0.14)] ${
                i === STEPS.length - 1 ? "border-[#6E9BFF]/45" : "border-[#1B44C9]/10"
              }`}
            >
              <span className="font-display text-4xl font-light tracking-tight text-[#1B44C9]">
                {s.n}
              </span>
              <span className="mt-6 flex min-h-[3rem] items-end font-display text-lg font-semibold leading-snug text-[#0B1A3A]">
                {s.title}
              </span>
              <span className="text-sm leading-relaxed text-[#55637F]">{s.text}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
