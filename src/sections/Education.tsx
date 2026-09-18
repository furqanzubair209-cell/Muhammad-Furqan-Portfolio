import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { ScrollTimeline } from "../components/ScrollTimeline";
import { education } from "../data/education";

export function Education() {
  return (
    <section id="education" className="py-24">
      <div className="container-px mx-auto max-w-4xl">
        <SectionHeading eyebrow="Academic Timeline" title="Education" />
        <ScrollTimeline color="var(--secondary)">
          <div className="space-y-5">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 0.05}>
                <div className="relative">
                  <span className="absolute -left-8 sm:-left-10 top-5 w-[10px] h-[10px] rounded-full bg-[var(--secondary)] ring-4 ring-[var(--bg)]" />
                  <div className="section-surface p-6">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                      <h3 className="font-semibold text-sm">{e.degree}</h3>
                      <span className="text-xs text-[var(--muted)]">{e.dates}</span>
                    </div>
                    <p className="text-sm text-[var(--primary)] font-medium mb-1">{e.school}</p>
                    <p className="text-xs text-[var(--muted)] mb-3">{e.grade}</p>
                    <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">{e.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {e.skills.map((s) => (
                        <span
                          key={s}
                          className="text-[11px] px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--muted)]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </ScrollTimeline>
      </div>
    </section>
  );
}
