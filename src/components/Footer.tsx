import { Mail } from "lucide-react";
import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="container-px mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <span className="font-bold" style={{ fontFamily: "var(--font-display)" }}>
          M.Furqan
        </span>
        <p className="text-xs text-[var(--muted)] text-center">
          {profile.role}
        </p>
        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            data-tooltip="GitHub"
            className="w-9 h-9 grid place-items-center rounded-full border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition focus-ring"
          >
            <GithubIcon size={15} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            data-tooltip="LinkedIn"
            className="w-9 h-9 grid place-items-center rounded-full border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition focus-ring"
          >
            <LinkedinIcon size={15} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            data-tooltip="Email"
            className="w-9 h-9 grid place-items-center rounded-full border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition focus-ring"
          >
            <Mail size={15} />
          </a>
        </div>
      </div>
      <p className="text-center text-xs text-[var(--muted)] mt-6">
        © {new Date().getFullYear()} Muhammad Furqan. Built with React, TypeScript & Tailwind CSS.
      </p>
    </footer>
  );
}
