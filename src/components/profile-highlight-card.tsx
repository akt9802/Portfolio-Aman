import React from "react";
import Image from "next/image";
import type { ProfileHighlight } from "@/data/profile";

type ProfileHighlightCardProps = {
  highlight: ProfileHighlight;
};

const iconMap: Record<string, React.ReactNode> = {
  LeetCode: (
    <Image
      src="/leetcode.png"
      alt="LeetCode logo"
      width={32}
      height={32}
      className="h-8 w-8 object-contain"
    />
  ),
  GeeksforGeeks: (
    <Image
      src="/gfg.png"
      alt="GeeksforGeeks logo"
      width={32}
      height={32}
      className="h-8 w-8 object-contain"
    />
  ),
  CodeChef: (
    <Image
      src="/codechef.png"
      alt="CodeChef logo"
      width={32}
      height={32}
      className="h-8 w-8 object-contain"
    />
  ),
  Codeforces: (
    <span className="text-sm font-bold tracking-tight text-white">CF</span>
  ),
};

export function ProfileHighlightCard({ highlight }: ProfileHighlightCardProps) {
  const icon = iconMap[highlight.platform];

  return (
    <a
      href={highlight.link}
      target="_blank"
      rel="noreferrer"
      className="group relative flex h-full flex-col rounded-3xl border border-white/5 bg-gradient-to-br from-white/10 to-white/0 p-5 transition-all duration-500 hover:border-white/20 hover:bg-gradient-to-br hover:from-white/15 hover:to-white/5 hover:shadow-[0_30px_100px_rgba(0,0,0,0.5),0_0_30px_rgba(56,189,248,0.2)] sm:p-6 sm:hover:scale-[1.03]"
    >
      <div className="flex items-center gap-3 flex-shrink-0">
        {icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 group-hover:scale-110 group-hover:border-white/30 group-hover:bg-white/10 group-hover:rotate-3">
            {icon}
          </div>
        )}
        <p className="text-sm font-medium text-[#7dd3fc]">
          {highlight.platform}
        </p>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#38bdf8] flex-shrink-0">
        {highlight.metric}
      </h3>
      <p className="mt-2 text-sm text-zinc-300 transition-colors duration-300 group-hover:text-zinc-200 flex-1 min-h-[3rem]">{highlight.summary}</p>
      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#38bdf8] flex-shrink-0">
        View profile <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
      </div>
    </a>
  );
}

