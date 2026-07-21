import { stats } from "@/data/content";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

export default function StatsBar() {
  return (
    <section className="relative border-b border-steel/30 bg-graphite-2">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-x-6 gap-y-10 px-5 py-14 sm:px-8 lg:grid-cols-4 lg:px-12 lg:py-16">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <div className="group relative border-l-2 border-steel pl-4 transition-colors duration-300 hover:border-safety">
              <div className="flex items-baseline gap-1.5 font-display text-4xl font-medium text-mist sm:text-5xl">
                <CountUp value={s.value} />
                <span className="font-mono text-sm font-normal text-cyan">
                  {s.unit}
                </span>
              </div>
              <p className="eyebrow mt-2 text-mist/45">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
