import type { Metadata } from "next";
import { brand } from "@/data/content";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "О компании MIRA — оператор сложной социальной инфраструктуры",
  description:
    "MIRA — управляющая компания и оператор сложной социальной инфраструктуры. Берём на себя ответственность за общий результат работы объекта, а не за отдельные услуги.",
};

export default function AboutPage() {
  return (
    <main className="bg-graphite pb-24 pt-28 text-mist sm:pt-32 lg:pt-36">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p className="eyebrow tag-bracket inline-block text-safety">
            {brand.whoWeAre.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
            Управляющая компания MIRA
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist/70 sm:text-xl">
            {brand.whoWeAre.lead}
          </p>
          <p className="mt-4 max-w-2xl text-mist/60 leading-relaxed">
            {brand.whoWeAre.body}
          </p>
          <p className="mt-4 max-w-2xl text-cyan leading-relaxed">
            {brand.whoWeAre.note}
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-20 border-t-2 border-mist/15 pt-12">
            <p className="eyebrow tag-bracket inline-block text-cyan">
              {brand.whyMira.eyebrow}
            </p>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="space-y-4 text-mist/70 leading-relaxed">
                {brand.whyMira.paragraphs.slice(0, 2).map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="space-y-4 text-mist/70 leading-relaxed">
                {brand.whyMira.paragraphs.slice(2).map((p) => (
                  <p key={p} className="font-display text-2xl font-medium uppercase text-mist">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-20 border-t-2 border-mist/15 pt-12">
            <p className="eyebrow tag-bracket inline-block text-safety">
              {brand.positioning.eyebrow}
            </p>
            <div className="mt-6 max-w-3xl space-y-4 text-mist/70 leading-relaxed">
              {brand.positioning.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-8 grid gap-4 border border-mist/15 p-6 sm:grid-cols-2 sm:gap-8">
              <p className="text-mist/50 leading-relaxed">
                {brand.positioning.contrast[0]}
              </p>
              <p className="font-display text-xl font-medium text-safety">
                {brand.positioning.contrast[1]}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-20 border-t-2 border-mist/15 pt-12">
            <p className="eyebrow tag-bracket inline-block text-cyan">
              {brand.clientGets.eyebrow}
            </p>
            <p className="mt-6 max-w-2xl text-mist/70 leading-relaxed">
              {brand.clientGets.lead}
            </p>
            <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {brand.clientGets.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-mist/10 pb-3 text-mist/75"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-safety" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
