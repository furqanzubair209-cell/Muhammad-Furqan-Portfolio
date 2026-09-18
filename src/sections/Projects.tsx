import { lazy, Suspense, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { projects, projectCategories, type Project } from "../data/projects";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";

const ProjectModal = lazy(() =>
  import("../components/ProjectModal").then((m) => ({ default: m.ProjectModal }))
);

const FEATURED_ID = 7; // Furqan Store — E-Commerce Platform

const difficultyColor: Record<string, string> = {
  Easy: "text-[var(--success)] border-[var(--success)]/30 bg-[var(--success)]/10",
  Medium: "text-[var(--secondary)] border-[var(--secondary)]/30 bg-[var(--secondary)]/10",
  Hard: "text-[var(--primary)] border-[var(--primary)]/30 bg-[var(--primary)]/10",
};

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<Project | null>(null);

  const featured = projects.find((p) => p.id === FEATURED_ID)!;
  const rest = projects.filter((p) => p.id !== FEATURED_ID);

  const filtered = useMemo(
    () => (filter === "All" ? rest : rest.filter((p) => p.category === filter)),
    [filter, rest]
  );

  const categories = ["All", ...projectCategories];

  return (
    <section id="projects" className="py-24">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-2">
          <SectionHeading eyebrow="Portfolio Showroom" title={`All Projects (${projects.length})`} />
        </div>

        {/* Featured project */}
        <Reveal>
          <div className="section-surface p-6 sm:p-10 mb-12 grid lg:grid-cols-2 gap-8 items-center relative overflow-hidden">
            <div
              className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-20"
              style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
            />
            <div className="relative">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-3">
                Featured Project
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
                {featured.title}
              </h3>
              <p className="text-[var(--muted)] leading-relaxed mb-5">{featured.desc}</p>
              {featured.features && (
                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 mb-6 text-sm text-[var(--muted)]">
                  {featured.features.slice(0, 6).map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              )}
              <p className="text-xs font-mono text-[var(--muted)] mb-6" style={{ fontFamily: "var(--font-mono)" }}>
                {featured.tech}
              </p>
              <div className="flex flex-wrap gap-3">
                {featured.github && (
                  <a
                    href={featured.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[var(--border)] text-sm font-medium hover:border-[var(--primary)] hover:text-[var(--primary)] transition focus-ring"
                  >
                    <GithubIcon size={15} /> GitHub
                  </a>
                )}
                <button
                  onClick={() => setActive(featured)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--primary)] text-[var(--on-primary)] text-sm font-semibold hover:brightness-110 transition focus-ring"
                >
                  View Details <ArrowRight size={15} />
                </button>
              </div>
            </div>
            <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-6 font-mono text-xs leading-relaxed" style={{ fontFamily: "var(--font-mono)" }}>
              <p><span className="text-[var(--secondary)]">const</span> <span className="text-[var(--primary)]">roles</span> = [</p>
              <p className="pl-4">"Customer", "Vendor",</p>
              <p className="pl-4">"Admin", "Super Admin"</p>
              <p>];</p>
              <p className="mt-3"><span className="text-[var(--secondary)]">const</span> <span className="text-[var(--primary)]">stack</span> = [</p>
              <p className="pl-4">"React", "TypeScript",</p>
              <p className="pl-4">"Node.js", "Express",</p>
              <p className="pl-4">"Prisma", "MySQL"</p>
              <p>];</p>
              <p className="mt-3 text-[var(--muted)]">// JWT auth · RBAC · Socket.IO</p>
              <p className="text-[var(--muted)]">// vendor commissions · inventory</p>
            </div>
          </div>
        </Reveal>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition focus-ring ${
                filter === c
                  ? "bg-[var(--primary)] text-[var(--on-primary)] border-[var(--primary)]"
                  : "border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--primary)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={(i % 6) * 0.04}>
              <button
                onClick={() => setActive(p)}
                className="text-left w-full h-full section-surface p-5 flex flex-col hover:border-[var(--primary)] transition-colors group focus-ring"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                    {p.category}
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${difficultyColor[p.difficulty]}`}>
                    {p.difficulty}
                  </span>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-[var(--primary)] transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-4 line-clamp-3">{p.desc}</p>
                <p className="text-xs font-mono text-[var(--muted)] mt-auto mb-4 line-clamp-1" style={{ fontFamily: "var(--font-mono)" }}>
                  {p.tech}
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-[var(--border)]">
                  {p.github && <GithubIcon size={14} className="text-[var(--muted)]" />}
                  {p.demo && <ExternalLink size={14} className="text-[var(--muted)]" />}
                  {p.linkedin && <LinkedinIcon size={14} className="text-[var(--muted)]" />}
                  <span className="ml-auto text-xs text-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity">
                    Details →
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <Suspense fallback={null}>
            <ProjectModal project={active} onClose={() => setActive(null)} />
          </Suspense>
        )}
      </AnimatePresence>
    </section>
  );
}
