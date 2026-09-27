import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import ConvergenceDiagram from "@/components/ConvergenceDiagram";
import ClientGetsPanel from "@/components/ClientGetsPanel";
import ServicesProcessGrid from "@/components/ServicesProcessGrid";
import EcoLevels from "@/components/EcoLevels";
import CampusesShowcase from "@/components/CampusesShowcase";
import ContactSection from "@/components/ContactSection";
import Starfield from "@/components/Starfield";
import { brand } from "@/data/content";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* О НАС */}
      <section
        id="about"
        className="relative overflow-hidden bg-graphite py-24 text-mist sm:py-28"
      >
        <Starfield count={90} seed={21} className="opacity-60" />
        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <p className="eyebrow inline-block text-safety">О нас</p>
            <div className="mt-4 grid items-end gap-10 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <h2 className="chrome-text font-display text-4xl font-medium leading-[1.05] sm:text-5xl lg:text-[52px]">
                  Один оператор. Полная ответственность.
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist/70 sm:text-xl">
                  {brand.positioning.paragraphs[0]}
                </p>
              </div>
              <ConvergenceDiagram className="mx-auto w-full max-w-xl" />
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-16 border-t-2 border-mist/15 pt-12">
              <h3 className="font-display text-2xl font-medium text-mist sm:text-[28px]">
                {brand.clientGets.eyebrow}
              </h3>
              <ClientGetsPanel items={brand.clientGets.items} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ЧТО МЫ ДЕЛАЕМ */}
      <section id="services" className="bg-graphite px-5 pb-24 sm:px-8 sm:pb-28 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[48px] px-6 pb-16 pt-14 shadow-[0_-30px_80px_rgba(30,70,190,0.18)] sm:px-10 lg:px-16"
              style={{
                background: "linear-gradient(180deg, #F6F9FF 0%, #E8EFFC 52%, #DCE7FA 100%)",
              }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[-90px] h-56 w-[820px] -translate-x-1/2 rounded-full blur-[46px]"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(90,140,255,.45), transparent 70%)",
                }}
              />
              <p className="relative text-base" style={{ color: "#1B44C9" }}>
                Что мы делаем
              </p>
              <h2
                className="relative mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.05] sm:text-5xl lg:text-[52px]"
                style={{
                  background: "linear-gradient(180deg, #0A1736 22%, #1B44C9 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Полный цикл управления
              </h2>
              <p className="relative mt-6 max-w-xl text-lg leading-relaxed" style={{ color: "#3B4664" }}>
                Заходим на объект до открытия и остаёмся с ним на весь срок эксплуатации.
              </p>

              <ServicesProcessGrid />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ЦИФРОВЫЕ СЕРВИСЫ */}
      <section id="eco" className="relative overflow-hidden bg-graphite py-24 text-mist sm:py-28">
        <Starfield count={90} seed={33} className="opacity-60" />
        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <p className="eyebrow inline-block text-safety">Цифровые сервисы</p>
            <h2 className="chrome-text mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.05] sm:text-5xl lg:text-[52px]">
              Цифровизируем услуги кампуса
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist/70 sm:text-xl">
              Единая экосистема МИРА из трёх уровней: от сервиса для резидента
              до управления инженерными системами здания.
            </p>
            <EcoLevels />
          </Reveal>
        </div>
      </section>

      {/* КАМПУСЫ */}
      <section id="campuses" className="bg-graphite px-5 pb-24 sm:px-8 sm:pb-28 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[48px] px-6 pb-16 pt-14 shadow-[0_-30px_80px_rgba(30,70,190,0.18)] sm:px-10 lg:px-16"
              style={{
                background: "linear-gradient(180deg, #F6F9FF 0%, #E8EFFC 52%, #DCE7FA 100%)",
              }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[-90px] h-56 w-[820px] -translate-x-1/2 rounded-full blur-[46px]"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(90,140,255,.45), transparent 70%)",
                }}
              />
              <h2
                className="relative max-w-3xl font-display text-4xl font-medium leading-[1.05] sm:text-5xl lg:text-[52px]"
                style={{
                  background: "linear-gradient(180deg, #0A1736 22%, #1B44C9 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Где мы уже работаем
              </h2>
              <p className="relative mt-6 max-w-xl text-lg leading-relaxed" style={{ color: "#3B4664" }}>
                Межвузовские кампусы, которые объединяют учебную, жилую,
                общественную, сервисную и инженерную инфраструктуру.
              </p>

              <CampusesShowcase />
            </div>
          </Reveal>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="contact" className="bg-graphite px-5 pb-24 sm:px-8 sm:pb-28 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <ContactSection />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
