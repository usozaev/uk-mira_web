import Link from "next/link";
import SiteMark from "./SiteMark";
import { nav } from "@/data/content";

export default function Footer() {
  return (
    <footer id="contacts" className="relative bg-graphite text-mist">
      <div className="hazard-strip absolute inset-x-0 top-0 h-2.5" />
      <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-20 sm:px-8 lg:px-12 lg:pt-24">
        <div className="grid grid-cols-1 gap-14 border-b border-mist/15 pb-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5 text-mist">
              <SiteMark className="h-8 w-8 text-safety" />
              <span className="font-display text-2xl font-medium uppercase tracking-wide">
                МИРА
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist/60">
              МИРА строит и финансирует инфраструктуру, промышленные объекты
              и недвижимость российских регионов.
            </p>
            <p className="eyebrow mt-6 text-cyan">55.7558° N, 37.6173° E</p>
          </div>

          <div>
            <p className="eyebrow text-mist/40">Навигация</p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={`/${item.href}`}
                    className="focus-ring text-sm text-mist/70 transition-colors hover:text-safety-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-mist/40">Контакты</p>
            <ul className="mt-5 space-y-3 text-sm text-mist/70">
              <li>
                <a
                  href="tel:+74957001414"
                  className="focus-ring transition-colors hover:text-safety-2"
                >
                  +7 (495) 700-14-14
                </a>
              </li>
              <li>
                <a
                  href="mailto:invest@mira-capital.ru"
                  className="focus-ring transition-colors hover:text-safety-2"
                >
                  invest@mira-capital.ru
                </a>
              </li>
              <li className="text-mist/60">
                Москва, наб. Пресненская, 10
                <br />
                башня «Меридиан», 42 этаж
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-mist/40">Компания</p>
            <ul className="mt-5 space-y-3 text-sm text-mist/70">
              <li>
                <a href="#" className="focus-ring transition-colors hover:text-safety-2">
                  Раскрытие информации
                </a>
              </li>
              <li>
                <a href="#" className="focus-ring transition-colors hover:text-safety-2">
                  Инвесторам
                </a>
              </li>
              <li>
                <a href="#" className="focus-ring transition-colors hover:text-safety-2">
                  Карьера
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 font-mono text-xs text-mist/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} УК «МИРА». Все права защищены.</p>
          <p>Лицензия ЦБ РФ № 21-000-1-01234</p>
        </div>
      </div>
    </footer>
  );
}
