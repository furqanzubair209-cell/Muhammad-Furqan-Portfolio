import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal>
      <div className={align === "center" ? "text-center mb-12" : "mb-12"}>
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--primary)] mb-3">
          {eyebrow}
        </span>
        <h2
          className="text-3xl sm:text-4xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h2>
      </div>
    </Reveal>
  );
}
