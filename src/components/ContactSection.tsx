export default function ContactSection() {
  return (
    <div
      className="relative overflow-hidden rounded-[40px] p-8 sm:p-14 lg:p-20"
      style={{
        background:
          "radial-gradient(ellipse 760px 520px at 12% 115%, #2A62E8 0%, #0A3190 45%, #042568 75%)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,.12)",
      }}
    >
      <svg
        viewBox="0 0 700 500"
        className="pointer-events-none absolute -bottom-32 -left-24 hidden w-[500px] opacity-70 lg:block"
        aria-hidden="true"
      >
        <g fill="none" transform="rotate(-14 350 250)">
          <ellipse cx="350" cy="250" rx="330" ry="120" stroke="rgba(201,216,255,.18)" />
          <ellipse cx="350" cy="250" rx="230" ry="80" stroke="rgba(201,216,255,.14)" />
        </g>
      </svg>

      <div className="relative grid gap-12 lg:grid-cols-[1fr_460px]">
        <div className="flex flex-col gap-6">
          <h2 className="chrome-text font-display text-3xl font-medium leading-tight sm:text-4xl lg:text-[46px]">
            Расскажите о своём проекте
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-[#C9D8FF]">
            Покажем, как объект будет работать под управлением МИРА и какие
            цифровые сервисы получат его резиденты.
          </p>
          <div className="mt-4 flex flex-col gap-2 text-base text-white">
            <a href="tel:+74957001414" className="focus-ring hover:text-cyan">
              +7 (495) 700-14-14
            </a>
            <a href="mailto:invest@mira-capital.ru" className="focus-ring hover:text-cyan">
              invest@mira-capital.ru
            </a>
          </div>
        </div>

        <form className="relative flex flex-col gap-4" aria-label="Запрос на обсуждение проекта">
          <label className="flex flex-col gap-2 text-sm text-[#C9D8FF]">
            Имя
            <input
              type="text"
              name="name"
              className="focus-ring h-14 rounded-2xl border border-[#C9D8FF]/35 bg-[#040A1C]/35 px-4 font-body text-base text-white placeholder:text-white/30"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#C9D8FF]">
            Организация и должность
            <input
              type="text"
              name="org"
              className="focus-ring h-14 rounded-2xl border border-[#C9D8FF]/35 bg-[#040A1C]/35 px-4 font-body text-base text-white placeholder:text-white/30"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#C9D8FF]">
            Телефон или почта
            <input
              type="text"
              name="contact"
              className="focus-ring h-14 rounded-2xl border border-[#C9D8FF]/35 bg-[#040A1C]/35 px-4 font-body text-base text-white placeholder:text-white/30"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#C9D8FF]">
            О проекте, если хотите
            <textarea
              name="about"
              rows={3}
              className="focus-ring resize-none rounded-2xl border border-[#C9D8FF]/35 bg-[#040A1C]/35 px-4 py-3.5 font-body text-base text-white placeholder:text-white/30"
            />
          </label>
          <button
            type="submit"
            className="focus-ring mt-2 h-14 rounded-full bg-[#6E9BFF] font-body text-base font-semibold text-[#040A1C] transition-colors hover:bg-white"
          >
            Отправить запрос
          </button>
        </form>
      </div>
    </div>
  );
}
