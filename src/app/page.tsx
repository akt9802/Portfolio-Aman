"use client";
import Image from "next/image";
import { Hero } from "@/components/hero";
import { ExperienceCard } from "@/components/experience-card";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { ContactSection } from "@/components/contact-section";
import { EducationCard } from "@/components/education-card";
import { SkillCategoryCard } from "@/components/skill-category-card";
import { ProfileHighlightCard } from "@/components/profile-highlight-card";
import { InsightCard } from "@/components/insight-card";
import {
  education,
  experiences,
  insights,
  profileHighlights,
  projects,
  skillCategories,
} from "@/data/profile";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Academics", href: "#education" },
  { label: "Profiles", href: "#profiles" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [activeSection, setActiveSection] = useState("overview");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px" }
    );

    const activeObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { threshold: [0.2, 0.45], rootMargin: "-10% 0px -40% 0px" }
    );

    sections.forEach((section) => {
      revealObserver.observe(section);
      activeObserver.observe(section);
    });

    return () => {
      revealObserver.disconnect();
      activeObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#010104] pb-16 text-white">
      <div className="bg-mesh" />
      <div className="bg-noise" />
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 pt-4 sm:gap-16 sm:px-6 sm:pt-10 lg:px-8">
        <header className="sticky top-3 z-50 sm:top-4">
          <div className="relative mx-auto max-w-6xl rounded-2xl border border-white/10 bg-[#0b0b12]/90 px-3 py-2 shadow-[0_16px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:rounded-full sm:px-5 sm:py-2.5">
            <div className="flex items-center justify-between gap-3">
              <a href="#overview" className="flex min-w-0 items-center gap-3" onClick={() => setMenuOpen(false)}>
                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-white/15">
                  <Image
                    src="/profile.png"
                    alt=""
                    fill
                    sizes="36px"
                    className="object-cover object-[center_22%]"
                  />
                </div>
                <p className="truncate text-base font-semibold tracking-tight text-white">
                  Aman Kumar
                </p>
              </a>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((open) => !open)}
              >
                <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
                {menuOpen ? (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                    <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                    <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                )}
              </button>
              <nav className="hidden items-center gap-1 text-xs font-medium text-zinc-400 lg:flex">
                {navItems.map((item) => {
                  const active = activeSection === item.href.slice(1);
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 transition ${
                        active ? "bg-white text-black" : "hover:bg-white/8 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>
            </div>
            {menuOpen && (
              <nav className="mt-2 grid gap-1 border-t border-white/10 pt-2 lg:hidden">
                {navItems.map((item) => {
                  const active = activeSection === item.href.slice(1);
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`rounded-xl px-3 py-3 text-sm font-medium transition ${
                        active ? "bg-white text-black" : "text-zinc-200 hover:bg-white/8 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>
            )}
          </div>
        </header>
        <div className="animate-fadein">
          <Hero />
        </div>
        <section id="experience" className="space-y-6 sm:space-y-10">
          <div className={`transition-all duration-1000 ${visibleSections.has('experience') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <SectionHeading kicker="Experience" title="Shipping loan systems people use every day" />
          </div>
          <div className="grid auto-rows-fr gap-6">
            {experiences.map((experience, idx) => (
              <div
                key={experience.company}
                className={`flex h-full transition-all duration-700 ease-out ${
                  visibleSections.has('experience')
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <ExperienceCard experience={experience} />
              </div>
            ))}
          </div>
        </section>
        <section id="projects" className="space-y-6 sm:space-y-10">
          <div className={`transition-all duration-1000 ${visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <SectionHeading kicker="Projects" title="Things I built end to end" />
          </div>
          <div className="grid auto-rows-fr gap-6 lg:grid-cols-2">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className={`flex h-full transition-all duration-700 ease-out ${
                  visibleSections.has('projects')
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-12 scale-95'
                }`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          <div className={`flex justify-center transition-all duration-1000 ${visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
            <a href="https://github.com/akt9802" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:scale-105 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]">
              Explore more on GitHub
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>
          </div>
        </section>

        <section id="education" className="space-y-6 sm:space-y-10">
          <div className={`transition-all duration-1000 ${visibleSections.has('education') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <SectionHeading
              kicker="Education"
              title="The foundation under the product work"
              description="B.Tech in CSE (AI & DS) at IIIT Manipur, with a stack spanning Next.js, Node, Django, and the databases those systems run on."
            />
          </div>
          <div className="space-y-6">
            {education.map((entry, idx) => (
              <div
                key={entry.school}
                className={`transition-all duration-700 ease-out ${
                  visibleSections.has('education')
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-12'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <EducationCard entry={entry} />
              </div>
            ))}
            <div className={`rounded-3xl border border-white/10 bg-white/[0.04] px-4 py-2 transition-all duration-1000 sm:px-6 ${
              visibleSections.has('education')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`} style={{ transitionDelay: '300ms' }}>
              <p className="pt-4 text-sm font-medium text-zinc-400">Skills</p>
              <div className="mt-1">
                {skillCategories.map((category) => (
                  <SkillCategoryCard key={category.title} category={category} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="profiles" className="space-y-6 sm:space-y-10">
          <div className={`transition-all duration-1000 ${visibleSections.has('profiles') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <SectionHeading
              kicker="Coding"
              title="Where the problem-solving shows up"
              description="Daily reps across LeetCode and Codeforces keep data structures sharp for real-world shipping."
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2 auto-rows-fr">
            {profileHighlights.map((highlight, idx) => (
              <div
                key={highlight.platform}
                className={`h-full transition-all duration-700 ease-out ${
                  visibleSections.has('profiles')
                    ? 'opacity-100 translate-y-0 rotate-0'
                    : 'opacity-0 translate-y-12 rotate-2'
                }`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <ProfileHighlightCard highlight={highlight} />
              </div>
            ))}
          </div>
        </section>

        <section id="achievements" className="space-y-6 sm:space-y-10">
          <div className={`transition-all duration-1000 ${visibleSections.has('achievements') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <SectionHeading
              kicker="Achievements"
              title="Contests, rankings, and hackathons"
            />
          </div>
          <div className="grid gap-6 md:grid-cols-3 auto-rows-fr">
            {insights.map((insight, idx) => (
              <div
                key={insight.title}
                className={`h-full transition-all duration-700 ease-out ${
                  visibleSections.has('achievements')
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <InsightCard insight={insight} />
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className={`transition-all duration-1000 ${visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <ContactSection />
        </section>

      </div>
    </div>
  );
}
