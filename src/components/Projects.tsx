import Link from "next/link";
import { projects } from "@/data/content";
import Reveal from "./Reveal";

const statusColor: Record<string, string> = {
  "В эксплуатации": "text-cyan",
  Строительство: "text-safety",
  Проектирование: "text-charcoal/45",
};

export default function Projects() {
  return (
    <section id="projects" className="bg-concrete-2 py-24 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex items-end justify-between gap-4 border-b-2 border-charcoal/15 pb-6">
            <div>
              <p className="eyebrow tag-bracket inline-block text-safety">
                Спецвыпуск 04 — Портфель
              </p>
              <h2 className="mt-4 font-display text-4xl font-medium uppercase text-charcoal sm:text-5xl">
                Проекты
              </h2>
            </div>
            <span className="eyebrow hidden text-charcoal/40 sm:inline">
              {projects.length} в портфеле
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-px border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.code} delay={(i % 3) * 80} className="h-full">
              <Link
                href={`/projects/${p.slug}`}
                className="focus-ring group relative block h-full overflow-hidden bg-concrete-2 p-8 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:z-10 hover:-translate-y-1 hover:bg-white hover:shadow-[10px_10px_0_0_rgba(21,23,26,0.12)]"
              >
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-safety transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-charcoal/40">{p.code}</span>
                  <span className="eyebrow text-charcoal/40">{p.year}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-medium leading-snug text-charcoal transition-colors group-hover:text-safety">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal/55">{p.place}</p>
                <div className="mt-6 flex items-center justify-between">
                  <p
                    className={`eyebrow inline-flex items-center gap-2 ${
                      statusColor[p.status] ?? "text-charcoal/45"
                    }`}
                  >
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
                    {p.status}
                  </p>
                  <span className="eyebrow flex items-center gap-1 text-charcoal/30 transition-all duration-300 group-hover:gap-2 group-hover:text-safety">
                    Смотреть →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
