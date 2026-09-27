import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { campuses } from "@/data/content";

const COORDS: Record<string, string> = {
  ufa: "54°44′ с. ш., 55°58′ в. д.",
  "nizhny-novgorod": "56°19′ с. ш., 44°00′ в. д.",
};

export default function CampusesShowcase() {
  return (
    <div className="mt-10 grid gap-8 sm:grid-cols-2">
      {campuses.map((c, i) => (
        <Reveal key={c.slug} delay={i * 100}>
          <Link href={`/expertise/${c.slug}`} className="focus-ring group flex flex-col gap-5">
            <div className="relative h-[320px] overflow-hidden rounded-3xl border border-[#1B44C9]/15">
              <Image
                src={c.photos[0].src}
                alt={c.photos[0].caption}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040A1C]/70 via-transparent to-transparent" />
              <span className="absolute left-6 top-5 flex items-center gap-2 rounded-full bg-[#040A1C]/60 px-3 py-1.5 text-[13px] text-[#C9D8FF]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5BE3A4]" />
                Под управлением МИРА
              </span>
              <span className="absolute bottom-5 left-6 text-[13px] text-[#9DBBFF]">
                {COORDS[c.slug]}
              </span>
            </div>
            <div className="flex items-baseline justify-between gap-6">
              <h3 className="font-display text-2xl font-medium text-[#0B1A3A]">
                {c.title.replace("Кампус ", "")}
              </h3>
              <span className="text-sm text-[#5C6B87]">{c.specs[0].value}</span>
            </div>
            <p className="text-[15px] leading-relaxed text-[#3A4A6B]">{c.summary}</p>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
