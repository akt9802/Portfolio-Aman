import type { Education } from "@/data/profile";

type EducationCardProps = {
  entry: Education;
};

export function EducationCard({ entry }: EducationCardProps) {
  return (
    <article className="group rounded-3xl border border-white/5 bg-white/5 p-4 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur transition-all duration-500 hover:border-white/15 hover:bg-white/10 hover:shadow-[0_35px_100px_rgba(0,0,0,0.5),0_0_30px_rgba(148,163,184,0.15)] sm:p-6 sm:hover:scale-[1.02]">
      <p className="text-sm font-medium text-[#cbd5e1]">
        {entry.period}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-balance text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-300 sm:text-2xl">
        {entry.program}
      </h3>
      <p className="text-lg text-zinc-300 transition-colors duration-300 group-hover:text-zinc-200">{entry.school}</p>
      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-zinc-500">
        <span>{entry.location}</span>
        {entry.score && (
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-200">
            {entry.score}
          </span>
        )}
      </div>
      <p className="mt-4 text-sm text-zinc-300 transition-colors duration-300 group-hover:text-zinc-200">{entry.details}</p>
    </article>
  );
}

