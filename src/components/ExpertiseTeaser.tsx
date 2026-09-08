import Link from "next/link";
import Image from "next/image";
import { campuses } from "@/data/content";
import Reveal from "./Reveal";

export default function ExpertiseTeaser() {
  return (
    <section id="expertise-teaser" className="bg-concrete-2 py-24 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex items-end justify-between gap-4 border-b-2 border-mist/15 pb-6">
            <div>
              <p className="eyebrow inline-block text-safety">
                Наша экспертиза
              </p>
              <h2 className="mt-4 font-display text-4xl font-medium uppercase text-mist sm:text-5xl">
                Кампусы в управлении
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-px border border-steel/20 bg-steel/20 sm:grid-cols-2">
          {campuses.map((c, i) => (
            <Reveal key={c.slug} delay={i * 80} className="h-full">
              <Link
                href={`/expertise/${c.slug}`}
                className="shine-sweep focus-ring group relative block h-full overflow-hidden bg-concrete-2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:z-10 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_rgba(231,235,240,0.12)]"
              >
                <span className="absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 bg-safety transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={c.photos[0].src}
                    alt={c.title}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-concrete-2 via-concrete-2/10 to-transparent" />
                </div>
                <div className="p-8 pt-6">
                  <span className="eyebrow text-mist/40">{c.code}</span>
                  <h3 className="mt-3 font-display text-2xl font-medium leading-snug text-mist transition-colors group-hover:text-safety">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-mist/55">{c.place}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="eyebrow inline-flex items-center gap-2 text-cyan">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
                      В управлении
                    </p>
                    <span className="eyebrow flex items-center gap-1 text-mist/30 transition-all duration-300 group-hover:gap-2 group-hover:text-safety">
                      Смотреть →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
