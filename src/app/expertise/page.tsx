import type { Metadata } from "next";
import { brand } from "@/data/content";
import Reveal from "@/components/Reveal";
import ExpertiseTeaser from "@/components/ExpertiseTeaser";

export const metadata: Metadata = {
  title: "Управление университетскими кампусами — MIRA",
  description:
    "MIRA осуществляет полное операционное управление университетскими кампусами в Уфе и Нижнем Новгороде — практическая экспертиза в сегменте сложной социальной инфраструктуры.",
};

export default function ExpertisePage() {
  return (
    <main className="bg-graphite pb-0 pt-28 text-mist sm:pt-32 lg:pt-36">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p className="eyebrow tag-bracket inline-block text-safety">
            {brand.expertiseIntro.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
            Экспертиза в управлении университетскими кампусами
          </h1>
          <div className="mt-6 max-w-2xl space-y-4 text-mist/70 leading-relaxed">
            {brand.expertiseIntro.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="pt-16">
        <ExpertiseTeaser />
      </div>
    </main>
  );
}
