import { lazy, Suspense, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileDown, ArrowDown, Eye } from "lucide-react";
import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";

const ResumeModal = lazy(() =>
  import("../components/ResumeModal").then((m) => ({ default: m.ResumeModal }))
);

const STACK = ["Python", "AI/ML", "React", "Node.js", "SQL", "Automation"];
const MARQUEE = [
  "Python", "C++", "PHP", "JavaScript", "MySQL", "TensorFlow",
  "Scikit-learn", "n8n Workflow", "Gemini API", "HTML5 & CSS3", "Git & GitHub", "VS Code",
];

export function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 right-0 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
      />
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-xs font-medium text-[var(--muted)] mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--success)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--success)]" />
            </span>
            Open for Internships & Opportunities
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Hi, I'm <br />
            <span className="gradient-text">{profile.name}</span>
          </h1>

          <p className="text-lg font-medium text-[var(--secondary)] mb-5">
            {profile.role} · {profile.tagline}
          </p>

          <p className="text-[var(--muted)] leading-relaxed max-w-xl mb-8">
            {profile.bio[0]}
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--primary)] text-[var(--on-primary)] font-semibold text-sm hover:brightness-110 transition focus-ring"
            >
              View Projects
            </a>
            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[var(--border)] text-sm font-semibold hover:border-[var(--primary)] hover:text-[var(--primary)] transition focus-ring"
            >
              <Eye size={16} /> Preview Resume
            </button>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[var(--muted)] hover:text-[var(--text)] transition focus-ring"
            >
              <FileDown size={16} /> Download
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[var(--muted)] hover:text-[var(--text)] transition focus-ring"
            >
              Get In Touch <ArrowDown size={14} />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              data-tooltip="LinkedIn"
              className="w-10 h-10 grid place-items-center rounded-full border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition focus-ring"
            >
              <LinkedinIcon size={17} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              data-tooltip="GitHub"
              className="w-10 h-10 grid place-items-center rounded-full border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition focus-ring"
            >
              <GithubIcon size={17} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="section-surface p-6 sm:p-8 relative overflow-hidden">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-6">
              Engineering Stack
            </p>
            <div className="grid grid-cols-2 gap-3">
              {STACK.map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 text-sm font-mono flex items-center gap-2"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                  {s}
                </motion.div>
              ))}
            </div>
            <svg
              className="absolute inset-0 pointer-events-none opacity-30"
              width="100%"
              height="100%"
            >
              <line x1="25%" y1="25%" x2="75%" y2="75%" stroke="var(--primary)" strokeWidth="1" />
              <line x1="75%" y1="25%" x2="25%" y2="75%" stroke="var(--secondary)" strokeWidth="1" />
            </svg>
          </div>
        </motion.div>
      </div>

      <div className="mt-16 border-t border-[var(--border)] overflow-hidden">
        <div className="py-4 flex whitespace-nowrap animate-[marquee_28s_linear_infinite]">
          {[...MARQUEE, ...MARQUEE].map((t, i) => (
            <span
              key={i}
              className="mx-6 text-sm font-medium text-[var(--muted)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <AnimatePresence>
        {resumeOpen && (
          <Suspense fallback={null}>
            <ResumeModal
              resumeUrl={profile.resume}
              name={profile.name}
              onClose={() => setResumeOpen(false)}
            />
          </Suspense>
        )}
      </AnimatePresence>
    </section>
  );
}
