import Reveal from "./Reveal";

export default function ProcessTimeline({
  items,
  light = false,
}: {
  items: readonly string[];
  light?: boolean;
}) {
  return (
    <div className="relative mt-12">
      <div
        className={`absolute left-3 top-3 hidden h-[calc(100%-1.5rem)] w-px bg-gradient-to-b to-transparent lg:block ${
          light ? "from-[#1B44C9] via-[#1B44C9]/30" : "from-safety via-cyan/40"
        }`}
        aria-hidden="true"
      />
      <ol className="grid gap-8 lg:grid-cols-1">
        {items.map((item, i) => (
          <Reveal key={item} delay={i * 80}>
            <li className="relative flex items-start gap-5 pl-0 lg:pl-0">
              <span
                className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                  light ? "border-[#1B44C9] bg-white" : "border-safety bg-graphite"
                }`}
                aria-hidden="true"
              >
                <span
                  className={`h-2 w-2 rounded-full ${light ? "bg-[#1B44C9]" : "bg-safety shadow-[0_0_8px_var(--nebula-2)]"}`}
                />
              </span>
              <div>
                <span className={`eyebrow ${light ? "text-[#1B44C9]" : "text-cyan"}`}>
                  Шаг {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className={`mt-1.5 max-w-xl leading-relaxed ${
                    light ? "text-[#1E2947]/80" : "text-mist/80"
                  }`}
                >
                  {item}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
