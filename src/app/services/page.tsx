import type { Metadata } from "next";
import { brand } from "@/data/content";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Операционное управление объектами — MIRA",
  description:
    "Подготовка объекта к запуску, операционная модель, ежедневная эксплуатация, управление подрядчиками, бюджетом, отчётностью и KPI, качество среды и пользовательский опыт.",
};

export default function ServicesPage() {
  return (
    <main className="bg-graphite pb-24 pt-28 text-mist sm:pt-32 lg:pt-36">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p className="eyebrow inline-block text-safety">
            {brand.whatWeDo.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
            Полное операционное управление объектом
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist/70 sm:text-xl">
            {brand.whatWeDo.lead}
          </p>
        </Reveal>

        <Reveal>
          <ul className="mt-12 grid gap-x-10 gap-y-4 border-t-2 border-mist/15 pt-10 sm:grid-cols-2">
            {brand.whatWeDo.items.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-4 border-b border-mist/10 pb-4 text-mist/75 leading-relaxed"
              >
                <span className="eyebrow shrink-0 text-cyan">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <div className="mt-20 border-t-2 border-mist/15 pt-12">
            <p className="eyebrow inline-block text-cyan">
              Кому MIRA создаёт ценность
            </p>
            <div className="mt-8 grid grid-cols-1 gap-px border border-steel/20 bg-steel/20 sm:grid-cols-2">
              {brand.audiences.map((a) => (
                <div key={a.title} className="bg-graphite-2 p-8">
                  <h3 className="font-display text-xl font-medium uppercase text-mist">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-mist/60 leading-relaxed">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
