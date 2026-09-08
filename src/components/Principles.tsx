import { principles } from "@/data/content";
import Reveal from "./Reveal";

export default function Principles() {
  return (
    <section
      id="focus"
      className="relative overflow-hidden bg-graphite py-24 text-mist sm:py-28"
    >
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="border-b-2 border-mist/15 pb-6">
          <p className="eyebrow inline-block text-cyan">Наши принципы</p>
          <h2 className="mt-4 font-display text-4xl font-medium uppercase sm:text-5xl">
            Принципы MIRA
          </h2>
        </div>

        <div className="mt-20 flex flex-col gap-24 sm:mt-24 sm:gap-32">
          {principles.map((p, i) => (
            <Reveal key={p.title} direction={i % 2 === 1 ? "right" : "left"}>
              <div
                className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <div className="font-display text-7xl font-medium text-cyan/35 sm:text-8xl lg:text-9xl">
                    {p.kicker}
                  </div>
                  <h3 className="mt-4 max-w-xl font-display text-4xl font-medium uppercase leading-snug sm:text-5xl">
                    {p.title}
                  </h3>
                  <p className="mt-6 max-w-lg text-lg leading-relaxed text-mist/65 sm:text-xl">
                    {p.text}
                  </p>
                </div>

                <div className="corner-brackets relative aspect-[4/3] w-full overflow-hidden border border-mist/15 bg-graphite-2">
                  <div className="blueprint-grid absolute inset-0 opacity-40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="h-20 w-20 opacity-70">
                      <path
                        d="M50,10 L54,44 L88,50 L54,56 L50,90 L46,56 L12,50 L46,44 Z"
                        fill="var(--cyan)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
