import Image from "next/image";
import type { Project } from "@/data/profile";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition hover:border-white/20 hover:bg-white/[0.07]">
      <div className="relative h-52 w-full flex-shrink-0 overflow-hidden bg-zinc-900">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain transition-all duration-700 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 transition-opacity duration-500 group-hover:opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#f97316]/0 via-[#f97316]/0 to-[#c026d3]/0 transition-all duration-700 group-hover:from-[#f97316]/10 group-hover:via-[#f97316]/5 group-hover:to-[#c026d3]/10" />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-4 sm:min-h-[280px] sm:p-6">
        <div className="flex-shrink-0">
          <p className="text-sm font-medium text-[#fdba74]">
            Project
          </p>
          <h3 className="mt-2 text-xl font-semibold text-balance text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-300 sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300 transition-colors duration-300 group-hover:text-zinc-200">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 flex-shrink-0">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-200 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/5 group-hover:scale-105"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-col gap-3">
          <div className="flex flex-wrap gap-4 text-sm font-semibold text-white">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex items-center gap-2 transition-all duration-300 hover:text-[#f97316] hover:translate-x-1"
              >
                Live demo
                <span aria-hidden className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">↗</span>
              </a>
            )}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-center gap-2 transition-all duration-300 hover:text-[#f97316] hover:translate-x-1"
            >
              View repo
              <span aria-hidden className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">↗</span>
            </a>
          </div>
          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-white/80">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-3 py-1 hover:border-white/40 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

