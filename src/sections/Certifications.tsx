import { BadgeCheck, ExternalLink } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { certifications } from "../data/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Credentials Dashboard"
          title={`Certifications (${certifications.length})`}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((c, i) => (
            <Reveal key={c.id} delay={(i % 6) * 0.04}>
              <div className="section-surface p-5 h-full flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="w-9 h-9 grid place-items-center rounded-lg bg-[var(--surface-2)] text-[var(--success)] shrink-0">
                    <BadgeCheck size={17} />
                  </span>
                  <span className="text-xs text-[var(--muted)] shrink-0">{c.date}</span>
                </div>
                <h3 className="font-semibold text-sm mb-1 leading-snug">{c.name}</h3>
                <p className="text-xs text-[var(--primary)] font-medium mb-3">{c.issuer}</p>
                <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">{c.skills}</p>
                {c.verifyUrl && (
                  <a
                    href={c.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium text-[var(--primary)] hover:underline focus-ring"
                  >
                    Verify Credential <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
