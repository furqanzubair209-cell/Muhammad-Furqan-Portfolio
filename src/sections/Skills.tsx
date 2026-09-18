import {
  BrainCircuit,
  LayoutPanelLeft,
  Server,
  Database,
  Workflow,
  Wrench,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { skillGroups } from "../data/skills";

const iconMap: Record<string, LucideIcon> = {
  "brain-circuit": BrainCircuit,
  "layout-panel-left": LayoutPanelLeft,
  server: Server,
  database: Database,
  workflow: Workflow,
  wrench: Wrench,
  "graduation-cap": GraduationCap,
};

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="Capability Matrix" title="Technical Expertise" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const IconComp = iconMap[group.icon];
            return (
              <Reveal key={group.category} delay={i * 0.05}>
                <div className="section-surface p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-9 h-9 grid place-items-center rounded-lg bg-[var(--surface-2)] text-[var(--primary)]">
                      {IconComp ? <IconComp size={17} /> : null}
                    </span>
                    <h3 className="font-semibold text-sm">{group.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {group.skills.map((s) => (
                      <li key={s.name} className="border-l-2 border-[var(--border)] pl-3">
                        <p className="text-sm font-medium">{s.name}</p>
                        {s.evidence && (
                          <p className="text-xs text-[var(--muted)] mt-0.5">{s.evidence}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
