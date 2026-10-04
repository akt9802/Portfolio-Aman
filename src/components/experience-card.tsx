import type { Experience } from "@/data/profile";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="group relative flex h-full flex-col rounded-3xl border border-white/5 bg-white/5 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-500 hover:border-white/15 hover:bg-white/10 hover:shadow-[0_40px_140px_rgba(0,0,0,0.6),0_0_40px_rgba(129,140,248,0.15)] sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2 flex-shrink-0">
        <div>
          <p className="text-sm font-medium text-[#a5b4fc]">
            {experience.period}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
            {experience.role}
          </h3>
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">
          {experience.location}
        </span>
      </div>
      <p className="mt-3 text-lg font-medium text-white flex-shrink-0">{experience.company}</p>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">{experience.summary}</p>
      {experience.highlights && experience.highlights.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {experience.highlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#818cf8]/30 bg-[#818cf8]/10 px-3 py-1 text-xs font-medium text-[#c7d2fe]"
            >
              {item}
            </span>
          ))}
        </div>
      )}
      <ul className="mt-5 flex-1 space-y-3 text-sm leading-relaxed text-zinc-300">
        {experience.bullets.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[#818cf8]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {experience.link && (
        <a
          href={experience.link}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white flex-shrink-0"
        >
          Visit site
          <span aria-hidden>↗</span>
        </a>
      )}
    </article>
  );
}

