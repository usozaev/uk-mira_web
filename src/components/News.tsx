import { news } from "@/data/content";
import Reveal from "./Reveal";

export default function News() {
  const [lead, ...rest] = news;

  return (
    <section id="news" className="bg-concrete py-24 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex items-end justify-between gap-4 border-b-2 border-charcoal/15 pb-6">
            <div>
              <p className="eyebrow tag-bracket inline-block text-safety">
                Спецвыпуск 01 — Хроника
              </p>
              <h2 className="mt-4 font-display text-4xl font-medium uppercase text-charcoal sm:text-5xl">
                Новости
              </h2>
            </div>
            <span className="eyebrow hidden text-charcoal/40 sm:inline">
              {news.length} записей за 2026
            </span>
          </div>
        </Reveal>

        <div className="grid gap-x-10 pt-10 lg:grid-cols-[1.1fr_1fr] lg:pt-12">
          <Reveal delay={60}>
            <a
              href="#"
              className="focus-ring group relative block border border-charcoal/15 bg-concrete-2/40 p-7 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-safety hover:bg-white hover:shadow-[8px_8px_0_0_var(--safety)]"
            >
              <span className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full bg-cyan opacity-0 shadow-[0_0_8px_var(--cyan)] transition-opacity duration-300 group-hover:opacity-100" />
              <p className="eyebrow text-charcoal/45">
                {lead.date} · {lead.tag}
              </p>
              <h3 className="mt-4 font-display text-3xl font-medium leading-snug text-charcoal transition-colors group-hover:text-safety sm:text-4xl">
                {lead.title}
              </h3>
              <p className="mt-4 max-w-lg text-charcoal/60 leading-relaxed">
                {lead.excerpt}
              </p>
              <span className="eyebrow mt-6 inline-flex items-center gap-2 text-safety">
                Читать
                <span className="transition-transform group-hover:translate-x-1.5">
                  →
                </span>
              </span>
            </a>
          </Reveal>

          <ul className="mt-10 flex flex-col gap-3 lg:mt-0">
            {rest.map((item, i) => (
              <Reveal key={item.title} delay={120 + i * 70}>
                <li>
                  <a
                    href="#"
                    className="focus-ring group relative grid grid-cols-[auto_1fr] items-baseline gap-x-4 gap-y-1.5 border border-transparent px-3 py-4 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-x-1 hover:border-l-2 hover:border-l-safety hover:bg-white hover:shadow-[4px_4px_0_0_rgba(21,23,26,0.08)]"
                  >
                    <span className="eyebrow row-span-2 self-start pt-1 text-charcoal/40">
                      {item.date}
                    </span>
                    <span className="eyebrow text-safety/80">{item.tag}</span>
                    <h4 className="col-start-2 font-body text-lg font-medium leading-snug text-charcoal transition-colors group-hover:text-safety">
                      {item.title}
                    </h4>
                  </a>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
