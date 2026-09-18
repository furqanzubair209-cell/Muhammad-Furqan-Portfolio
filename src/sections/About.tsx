import { Check } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { Counter } from "../components/Counter";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { certifications } from "../data/certifications";
import { experience } from "../data/experience";
import { awards } from "../data/awards";

const STATS = [
  { label: "Projects Shipped", value: projects.length, suffix: "+" },
  { label: "Certifications", value: certifications.length, suffix: "+" },
  { label: "Experience Entries", value: experience.length },
  { label: "Awards Won", value: awards.length },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="Discovery" title="About Me" />

        <Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {STATS.map((s) => (
              <div key={s.label} className="section-surface p-5 text-center">
                <p
                  className="text-3xl sm:text-4xl font-bold text-[var(--primary)] tabular-nums"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <Counter value={s.value} suffix={s.suffix ?? ""} />
                </p>
                <p className="text-xs text-[var(--muted)] mt-1.5">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="section-surface p-8 h-full">
              <h3 className="font-semibold text-lg mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Professional Profile
              </h3>
              {profile.bio.map((p, i) => (
                <p key={i} className="text-[var(--muted)] leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              <div className="grid sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-[var(--border)]">
                <MetaItem label="Current Goal" value={profile.currentGoal} />
                <MetaItem label="Currently Learning" value={profile.currentlyLearning} />
                <MetaItem label="Interests" value={profile.interests} />
                <MetaItem label="Languages" value={profile.languages} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="section-surface p-8 h-full">
              <h3 className="font-semibold text-lg mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Soft Skills
              </h3>
              <ul className="space-y-3">
                {profile.softSkills.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-sm text-[var(--muted)]">
                    <span className="w-6 h-6 grid place-items-center rounded-full bg-[var(--surface-2)] text-[var(--success)] shrink-0">
                      <Check size={13} />
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-[var(--border)] text-sm text-[var(--muted)] space-y-2">
                <p>⚡ Enjoys building automation tools to save time on repetitive tasks.</p>
                <p>📚 Studies system architecture and AI breakthroughs outside of coding.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-[var(--muted)] mb-1">{label}</p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  );
}
