import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/content";
import ProjectSlider from "@/components/ProjectSlider";

const statusColor: Record<string, string> = {
  "В эксплуатации": "text-cyan",
  Строительство: "text-safety",
  Проектирование: "text-charcoal/45",
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — МИРА`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="bg-concrete pb-24 pt-28 sm:pt-32 lg:pt-36">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <nav className="eyebrow flex items-center gap-2 text-charcoal/45">
          <Link href="/" className="focus-ring hover:text-safety">
            Главная
          </Link>
          <span>/</span>
          <Link href="/#projects" className="focus-ring hover:text-safety">
            Проекты
          </Link>
          <span>/</span>
          <span className="text-charcoal/70">{project.code}</span>
        </nav>

        <div className="mt-8 flex flex-wrap items-start justify-between gap-6 border-b-2 border-charcoal/15 pb-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="eyebrow tag-bracket inline-block text-safety">
                {project.code}
              </span>
              <p
                className={`eyebrow inline-flex items-center gap-2 ${
                  statusColor[project.status] ?? "text-charcoal/45"
                }`}
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
                {project.status}
              </p>
            </div>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-medium uppercase leading-[0.98] text-charcoal sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-3 font-mono text-sm text-charcoal/50">
              {project.place} · {project.year}
            </p>
          </div>
          <p className="max-w-sm text-charcoal/60 leading-relaxed">
            {project.summary}
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <ProjectSlider slides={project.slides} code={project.code} />
          </div>

          <div>
            <p className="eyebrow text-safety">О проекте</p>
            <p className="mt-4 text-charcoal/75 leading-relaxed">
              {project.description}
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-charcoal/15 pt-8">
              {project.specs.map((spec) => (
                <div key={spec.label}>
                  <dt className="eyebrow text-charcoal/40">{spec.label}</dt>
                  <dd className="mt-1.5 font-display text-xl font-medium text-charcoal">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-20 border-t-2 border-charcoal/15 pt-8">
          <Link
            href={`/projects/${next.slug}`}
            className="focus-ring group flex items-center justify-between gap-4"
          >
            <div>
              <p className="eyebrow text-charcoal/40">Следующий проект</p>
              <p className="mt-2 font-display text-2xl font-medium uppercase text-charcoal transition-colors group-hover:text-safety sm:text-3xl">
                {next.title}
              </p>
            </div>
            <span className="eyebrow flex h-12 w-12 shrink-0 items-center justify-center border border-charcoal/20 text-xl transition-all duration-300 group-hover:border-safety group-hover:bg-safety group-hover:text-graphite">
              →
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
