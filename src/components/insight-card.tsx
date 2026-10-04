import type { Insight } from "@/data/profile";

type InsightCardProps = {
  insight: Insight;
};

export function InsightCard({ insight }: InsightCardProps) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:border-[#6ee7b7]/30 hover:bg-white/[0.07] sm:hover:-translate-y-1">
      <div>
        <p className="text-sm font-medium text-[#6ee7b7]">Achievement</p>
        <h3 className="mt-3 text-xl font-semibold text-white">{insight.title}</h3>
        <p className="mt-2 text-sm text-zinc-400">{insight.summary}</p>
      </div>
      <a
        href={insight.link}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-[#6ee7b7]"
      >
        View
        <span aria-hidden className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
      </a>
    </article>
  );
}

