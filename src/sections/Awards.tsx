import { Trophy } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { awards } from "../data/awards";

export function Awards() {
  return (
    <section id="awards" className="py-24">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading eyebrow="Milestones" title="Honors & Awards" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {awards.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06}>
              <div className="section-surface p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 grid place-items-center rounded-lg bg-[var(--surface-2)] text-[var(--secondary)]">
                    <Trophy size={17} />
                  </span>
                  <span className="text-xs text-[var(--muted)]">{a.date}</span>
                </div>
                <h3 className="font-semibold text-sm mb-1">{a.title}</h3>
                <p className="text-xs text-[var(--primary)] font-medium mb-3">{a.issuer}</p>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
