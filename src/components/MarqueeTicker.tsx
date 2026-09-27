const STAR_D = "M50,8 L54,46 L92,50 L54,54 L50,92 L46,54 L8,50 L46,46 Z";

const ITEMS = [
  "Операционное управление",
  "Эксплуатация",
  "Инженерные системы",
  "Сервис для резидентов",
  "Экономика и KPI",
  "Цифровые платформы",
  "Безопасность",
  "Пользовательский опыт",
];

export default function MarqueeTicker() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div
      className="flex h-16 items-center overflow-hidden border-t border-cyan/10 bg-charcoal/20"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
      }}
    >
      <div
        className="flex w-max shrink-0 items-center font-display text-sm text-mist/60"
        style={{ animation: "marquee-scroll 32s linear infinite" }}
      >
        {loop.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center gap-9 whitespace-nowrap pr-9">
            <span>{item}</span>
            <svg viewBox="0 0 100 100" className="h-3 w-3 shrink-0" aria-hidden="true">
              <path d={STAR_D} fill="var(--nebula)" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
