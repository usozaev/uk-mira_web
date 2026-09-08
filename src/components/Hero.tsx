"use client";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-graphite text-mist"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="glow-blob -right-32 top-[-10%] h-[38rem] w-[38rem]" />
        <div className="glow-blob glow-blob-blue -left-40 bottom-[-15%] h-[32rem] w-[32rem]" />
        <div className="blueprint-grid absolute inset-0 opacity-70 [animation:grid-pan_10s_linear_infinite]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-graphite to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/50 to-graphite/20" />

        <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-cyan/15 via-cyan/5 to-transparent [animation:scanline_7s_ease-in-out_infinite]" />

        <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
          <line x1="0" y1="18%" x2="100%" y2="18%" stroke="var(--steel)" strokeWidth="1" strokeDasharray="2 6" opacity="0.4" />
          <line x1="12%" y1="0" x2="12%" y2="100%" stroke="var(--steel)" strokeWidth="1" strokeDasharray="2 6" opacity="0.3" />
          <line x1="88%" y1="0" x2="88%" y2="100%" stroke="var(--steel)" strokeWidth="1" strokeDasharray="2 6" opacity="0.3" />
        </svg>
      </div>

      <div className="pointer-events-none absolute left-5 top-20 hidden font-mono text-[11px] text-cyan/60 sm:left-8 sm:block lg:left-12">
        <p>MIRA / ОПЕРАТОР ИНФРАСТРУКТУРЫ</p>
        <p className="mt-1">СТАТУС: В ЭКСПЛУАТАЦИИ</p>
      </div>
      <div className="pointer-events-none absolute right-5 top-20 hidden text-right font-mono text-[11px] text-cyan/60 sm:right-8 sm:block lg:right-12">
        <p>УФА · НИЖНИЙ НОВГОРОД</p>
        <p className="mt-1">2 КАМПУСА В УПРАВЛЕНИИ</p>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-24">
        <p className="eyebrow mb-6 inline-block border-l-2 border-safety-2 pl-3 text-safety-2 [animation:fade-up_0.8s_cubic-bezier(0.16,1,0.3,1)_0.1s_both]">
          Управляющая компания MIRA
        </p>
        <h1 className="max-w-2xl font-display text-3xl font-medium uppercase leading-[1.1] tracking-tight [animation:fade-up_0.9s_cubic-bezier(0.16,1,0.3,1)_0.22s_both] sm:text-4xl lg:text-5xl">
          <span className="text-shimmer">
            Оператор сложной социальной инфраструктуры
          </span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-mist/70 [animation:fade-up_0.9s_cubic-bezier(0.16,1,0.3,1)_0.4s_both] sm:text-xl">
          MIRA берёт на себя полное операционное управление сложным объектом
          и отвечает за его работу как единой системы — от подготовки к
          запуску до эксплуатации на протяжении жизненного цикла.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-5 [animation:fade-up_0.9s_cubic-bezier(0.16,1,0.3,1)_0.56s_both]">
          <a
            href="/expertise"
            className="focus-ring eyebrow cta-pulse group relative overflow-hidden border border-safety bg-safety px-7 py-3.5 text-mist transition-colors"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-graphite">
              Наша экспертиза
            </span>
            <span className="absolute inset-0 -translate-x-full bg-safety-2 transition-transform duration-300 ease-out group-hover:translate-x-0" />
          </a>
          <a
            href="/about"
            className="focus-ring eyebrow border-b border-mist/30 pb-1 text-mist/80 transition-colors hover:border-cyan hover:text-cyan"
          >
            О компании →
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 right-5 z-10 hidden flex-col items-center gap-3 text-mist/50 sm:right-8 lg:right-12 md:flex">
        <span className="eyebrow [writing-mode:vertical-rl]">Прокрутите</span>
        <span className="h-14 w-px bg-gradient-to-b from-mist/60 to-transparent" />
      </div>
    </section>
  );
}
