import { contactLinks } from "@/data/profile";

export function ContactSection() {
  return (
    <section className="rounded-[32px] border border-white/10 bg-[#0c0d14] p-6 sm:p-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl space-y-3">
          <p className="text-sm font-medium text-[#6ee7b7]">Contact</p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">
            Open to the next full-time role.
          </h2>
          <p className="text-base leading-relaxed text-zinc-400">
            Software Engineer in Mumbai. Happy to talk about product engineering, fintech systems, or what you’re building.
          </p>
        </div>
        <div className="w-full rounded-2xl border border-white/5 bg-white/5 p-4 sm:p-6 lg:max-w-sm">
          <ul className="space-y-4 text-sm">
            {contactLinks.map((link) => (
              <li key={link.label} className="flex flex-col gap-1">
                <span className="text-xs text-zinc-500">
                  {link.label}
                </span>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="break-words text-base font-semibold text-white hover:text-[#34d399] sm:text-lg"
                >
                  {link.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

