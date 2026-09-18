import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      ).filter((el) => el.offsetParent !== null);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previouslyFocused.current?.focus();
    };
  }, [onClose]);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-[100] grid place-items-center p-4 sm:p-6"
    >
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto section-surface p-6 sm:p-8"
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.98 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close project details"
          data-tooltip="Close"
          className="absolute top-4 right-4 w-9 h-9 grid place-items-center rounded-lg border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition focus-ring"
        >
          <X size={16} />
        </button>

        <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">
          {project.category}
        </span>
        <h3
          id="project-modal-title"
          className="text-2xl font-bold mt-2 mb-4 pr-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {project.title}
        </h3>

        <Block title="Overview">{project.desc}</Block>

        {project.features && project.features.length > 0 && (
          <Block title="Key Features">
            <ul className="list-disc list-inside space-y-1">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </Block>
        )}

        <Block title="Technology Stack">{project.tech}</Block>

        {project.challenges && <Block title="Challenges">{project.challenges}</Block>}
        {project.learnings && <Block title="What I Learned">{project.learnings}</Block>}

        <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-[var(--border)]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[var(--border)] text-sm font-medium hover:border-[var(--primary)] hover:text-[var(--primary)] transition focus-ring"
            >
              <GithubIcon size={15} /> GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--primary)] text-[var(--on-primary)] text-sm font-semibold hover:brightness-110 transition focus-ring"
            >
              <ExternalLink size={15} /> Live Demo
            </a>
          )}
          {project.linkedin && (
            <a
              href={project.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[var(--border)] text-sm font-medium hover:border-[var(--primary)] hover:text-[var(--primary)] transition focus-ring"
            >
              <LinkedinIcon size={15} /> Post
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h4 className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)] mb-1.5">
        {title}
      </h4>
      <div className="text-sm text-[var(--text)] leading-relaxed">{children}</div>
    </div>
  );
}
