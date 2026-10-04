import Image from "next/image";
import { heroContent, stats } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="overview"
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c0d14] p-5 sm:rounded-[32px] sm:p-8 lg:p-10"
    >
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#f97316]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[#6366f1]/20 blur-3xl" />
      <div className="relative space-y-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <p className="flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300">
              <span>{heroContent.availability}</span>
              <span className="text-zinc-600">·</span>
              <span>{heroContent.location}</span>
            </p>
            <div>
              <h1 className="text-[2rem] font-semibold leading-tight tracking-tight text-white sm:text-6xl">
                {heroContent.name}
              </h1>
              <p className="mt-3 text-lg text-zinc-200 sm:text-xl">{heroContent.headline}</p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
                {heroContent.subline}
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm font-semibold min-[420px]:flex-row min-[420px]:flex-wrap">
              <a
                href={heroContent.ctaPrimary.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-black transition hover:bg-zinc-200 min-[420px]:py-2.5"
              >
                {heroContent.ctaPrimary.label}
              </a>
              <a
                href={heroContent.ctaSecondary.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-white transition hover:border-white/40 hover:bg-white/5 min-[420px]:py-2.5"
              >
                {heroContent.ctaSecondary.label}
              </a>
              {heroContent.ctaThird && (
                <a
                  href={heroContent.ctaThird.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#f97316]/60 px-5 py-3 text-[#fdba74] transition hover:bg-[#f97316]/10 min-[420px]:py-2.5"
                >
                  {heroContent.ctaThird.label}
                </a>
              )}
            </div>
          </div>
          <div className="group relative mx-auto w-full max-w-[16rem] sm:max-w-sm">
            <div className="relative aspect-square overflow-hidden rounded-[28px] border border-white/10 bg-[#d9d6cc] shadow-[0_24px_80px_rgba(0,0,0,0.45)] transition duration-500 group-hover:border-white/30 group-hover:shadow-[0_28px_90px_rgba(249,115,22,0.18)]">
              <Image
                src={heroContent.avatar}
                alt={heroContent.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 384px"
                className="object-cover object-center transition duration-700 group-hover:scale-[1.04]"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-2xl border border-white/8 bg-white/[0.04] px-3 py-4 text-center transition duration-300 hover:-translate-y-1 hover:border-[#fdba74]/40 hover:bg-white/[0.08]"
            >
              <p className="text-2xl font-semibold tracking-tight text-white transition-colors group-hover:text-[#fdba74] sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
