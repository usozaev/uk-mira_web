import type { Metadata } from "next";
import { brand } from "@/data/content";
import Reveal from "@/components/Reveal";
import ConvergenceDiagram from "@/components/ConvergenceDiagram";
import ClientGetsPanel from "@/components/ClientGetsPanel";
import Starfield from "@/components/Starfield";

export const metadata: Metadata = {
  title: "О компании MIRA — оператор сложной социальной инфраструктуры",
  description:
    "MIRA — управляющая компания и оператор сложной социальной инфраструктуры. Берём на себя ответственность за общий результат работы объекта, а не за отдельные услуги.",
};

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-graphite pb-24 pt-28 text-mist sm:pt-32 lg:pt-36">
      <Starfield count={110} seed={21} className="opacity-70" />
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p className="eyebrow inline-block text-safety">
            {brand.whoWeAre.eyebrow}
          </p>
          <h1 className="chrome-text mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.05] sm:text-5xl lg:text-[52px]">
            Один оператор. Полная ответственность.
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
            <h3 className="font-display text-2xl font-medium text-mist sm:text-[28px]">
              {brand.whyMira.eyebrow}
            </h3>
            <div className="mt-6 grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
              <div className="grid gap-6 sm:grid-cols-2">
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
              <ConvergenceDiagram className="mx-auto w-full max-w-xl" />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-20 border-t-2 border-mist/15 pt-12">
            <h3 className="font-display text-2xl font-medium text-mist sm:text-[28px]">
              {brand.positioning.eyebrow}
            </h3>
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
            <h3 className="font-display text-2xl font-medium text-mist sm:text-[28px]">
              {brand.clientGets.eyebrow}
            </h3>
            <p className="mt-6 max-w-2xl text-mist/70 leading-relaxed">
              {brand.clientGets.lead}
            </p>
            <ClientGetsPanel items={brand.clientGets.items} />
          </div>
        </Reveal>
      </div>
    </main>
  );
}
