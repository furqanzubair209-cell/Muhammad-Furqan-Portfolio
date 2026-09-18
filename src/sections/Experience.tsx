import { useState } from "react";
import { ChevronDown, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { ScrollTimeline } from "../components/ScrollTimeline";
import { experience } from "../data/experience";

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24">
      <div className="container-px mx-auto max-w-5xl">
        <SectionHeading eyebrow="Chronology" title="Work Experience" />
        <ScrollTimeline>
          <div className="space-y-4">
            {experience.map((exp, i) => {
              const isOpen = openIndex === i;
              return (
                <Reveal key={exp.company + exp.role} delay={i * 0.04}>
                  <div className="relative">
                    <span className="absolute -left-8 sm:-left-10 top-5 w-[10px] h-[10px] rounded-full bg-[var(--primary)] ring-4 ring-[var(--bg)]" />
                    <div className="section-surface overflow-hidden">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between gap-4 p-5 text-left focus-ring"
                      >
                        <div className="flex items-center gap-4 min-w-0">
                          <span className="w-10 h-10 shrink-0 grid place-items-center rounded-lg bg-[var(--surface-2)] text-[var(--primary)]">
                            <Briefcase size={16} />
                          </span>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-sm truncate">{exp.role}</h3>
                            <p className="text-xs text-[var(--muted)] truncate">{exp.company}</p>
                          </div>
                        </div>
                        <div className="hidden sm:flex items-center gap-3 shrink-0">
                          <span className="text-xs px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--muted)]">
                            {exp.type}
                          </span>
                          <span className="text-xs text-[var(--muted)]">{exp.dates}</span>
                        </div>
                        <ChevronDown
                          size={16}
                          className={`shrink-0 text-[var(--muted)] transition-transform ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 pt-1 border-t border-[var(--border)] text-sm text-[var(--muted)] space-y-3">
                              <p className="sm:hidden text-xs">{exp.type} · {exp.dates}</p>
                              <p><strong className="text-[var(--text)]">Responsibilities:</strong> {exp.responsibilities}</p>
                              <div>
                                <strong className="text-[var(--text)]">Key Accomplishments:</strong>
                                <ul className="list-disc list-inside mt-1 space-y-1">
                                  {exp.accomplishments.map((a, j) => (
                                    <li key={j}>{a}</li>
                                  ))}
                                </ul>
                              </div>
                              <p><strong className="text-[var(--text)]">Technologies:</strong> {exp.technologies}</p>
                              <p><strong className="text-[var(--text)]">Skills Gained:</strong> {exp.skillsGained}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </ScrollTimeline>
      </div>
    </section>
  );
}
