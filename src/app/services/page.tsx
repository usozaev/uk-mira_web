import type { Metadata } from "next";
import { brand } from "@/data/content";
import Reveal from "@/components/Reveal";
import ProcessTimeline from "@/components/ProcessTimeline";
import EcoPanel from "@/components/EcoPanel";
import Starfield from "@/components/Starfield";

export const metadata: Metadata = {
  title: "Операционное управление объектами — MIRA",
  description:
    "Подготовка объекта к запуску, операционная модель, ежедневная эксплуатация, управление подрядчиками, бюджетом, отчётностью и KPI, качество среды и пользовательский опыт.",
};

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden bg-graphite pb-24 pt-28 text-mist sm:pt-32 lg:pt-36">
      <Starfield count={110} seed={33} className="opacity-70" />
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[48px] px-6 pb-16 pt-14 shadow-[0_-30px_80px_rgba(30,70,190,0.18)] sm:px-10 lg:px-16"
            style={{
              background:
                "linear-gradient(180deg, #F6F9FF 0%, #E8EFFC 52%, #DCE7FA 100%)",
            }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[-90px] h-56 w-[820px] -translate-x-1/2 rounded-full blur-[46px]"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(90,140,255,.45), transparent 70%)",
              }}
            />
            <p className="relative text-base" style={{ color: "#1B44C9" }}>
              {brand.whatWeDo.eyebrow}
            </p>
            <h1
              className="relative mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.05] sm:text-5xl lg:text-[52px]"
              style={{
                background: "linear-gradient(180deg, #0A1736 22%, #1B44C9 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Полное операционное управление объектом
            </h1>
            <p className="relative mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl" style={{ color: "#3B4664" }}>
              {brand.whatWeDo.lead}
            </p>

            <div className="relative mt-4 border-t border-[#1B44C9]/15 pt-4">
              <ProcessTimeline items={brand.whatWeDo.items} light />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-20 border-t-2 border-mist/15 pt-12">
            <h3 className="font-display text-2xl font-medium text-mist sm:text-[28px]">Цифровые сервисы</h3>
            <p className="mt-4 max-w-2xl text-mist/70 leading-relaxed">
              Единая операционная система MIRA связывает отчётность, процессы
              эксплуатации и качество среды в один контур управления.
            </p>
            <EcoPanel />
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-20 border-t-2 border-mist/15 pt-12">
            <h3 className="font-display text-2xl font-medium text-mist sm:text-[28px]">
              Кому MIRA создаёт ценность
            </h3>
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
