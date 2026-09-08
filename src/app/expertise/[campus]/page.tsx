import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { campuses } from "@/data/content";
import PhotoSlider from "@/components/PhotoSlider";

const titles: Record<string, { h1: string; title: string; description: string }> = {
  ufa: {
    h1: "Управление кампусом в Уфе",
    title: "Кампус в Уфе — MIRA",
    description: "Полное операционное управление университетским кампусом в Уфе.",
  },
  "nizhny-novgorod": {
    h1: "Управление кампусом в Нижнем Новгороде",
    title: "Кампус в Нижнем Новгороде — MIRA",
    description:
      "Полное операционное управление университетским кампусом в Нижнем Новгороде.",
  },
};

export function generateStaticParams() {
  return campuses.map((c) => ({ campus: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ campus: string }>;
}): Promise<Metadata> {
  const { campus } = await params;
  const meta = titles[campus];
  if (!meta) return {};
  return { title: meta.title, description: meta.description };
}

export default async function CampusPage({
  params,
}: {
  params: Promise<{ campus: string }>;
}) {
  const { campus: slug } = await params;
  const campus = campuses.find((c) => c.slug === slug);
  if (!campus) notFound();

  const index = campuses.findIndex((c) => c.slug === slug);
  const next = campuses[(index + 1) % campuses.length];
  const meta = titles[slug];

  return (
    <main className="bg-concrete pb-24 pt-28 sm:pt-32 lg:pt-36">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <nav className="eyebrow flex items-center gap-2 text-mist/45">
          <Link href="/" className="focus-ring hover:text-safety">
            Главная
          </Link>
          <span>/</span>
          <Link href="/expertise" className="focus-ring hover:text-safety">
            Наша экспертиза
          </Link>
          <span>/</span>
          <span className="text-mist/70">{campus.code}</span>
        </nav>

        <div className="mt-8 flex flex-wrap items-start justify-between gap-6 border-b-2 border-mist/15 pb-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="eyebrow inline-block text-safety">
                {campus.code}
              </span>
              <p className="eyebrow inline-flex items-center gap-2 text-cyan">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
                В управлении
              </p>
            </div>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-medium uppercase leading-[0.98] text-mist sm:text-5xl lg:text-6xl">
              {meta?.h1 ?? campus.title}
            </h1>
            <p className="mt-3 font-mono text-sm text-mist/50">{campus.place}</p>
          </div>
          <p className="max-w-sm text-mist/60 leading-relaxed">{campus.summary}</p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.7fr_1fr] lg:gap-16">
          <div>
            <PhotoSlider photos={campus.photos} code={campus.code} />
          </div>

          <div>
            <p className="eyebrow text-safety">Об объекте</p>
            <p className="mt-4 text-mist/75 leading-relaxed">
              {campus.description}
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-mist/15 pt-8">
              {campus.specs.map((spec) => (
                <div key={spec.label}>
                  <dt className="eyebrow text-mist/40">{spec.label}</dt>
                  <dd className="mt-1.5 font-display text-xl font-medium text-mist">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-20">
          <Link
            href={`/expertise/${next.slug}`}
            className="shine-sweep focus-ring group relative flex items-center justify-between gap-6 overflow-hidden border border-safety/40 bg-graphite-2 p-8 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-safety hover:shadow-[10px_10px_0_0_rgba(74,129,194,0.35)] sm:p-10"
          >
            <div className="pointer-events-none absolute inset-0 opacity-15 transition-opacity duration-500 group-hover:opacity-30">
              <Image
                src={next.photos[0].src}
                alt=""
                fill
                sizes="600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-graphite-2/70" />
            </div>

            <div className="relative z-10">
              <p className="eyebrow text-cyan">Другой кампус</p>
              <p className="mt-3 font-display text-3xl font-medium uppercase text-mist transition-colors group-hover:text-safety sm:text-4xl">
                {next.title}
              </p>
              <p className="mt-2 text-sm text-mist/55">{next.place}</p>
            </div>
            <span className="eyebrow relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-safety bg-safety/10 text-2xl text-safety transition-all duration-300 group-hover:scale-110 group-hover:bg-safety group-hover:text-mist">
              →
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
