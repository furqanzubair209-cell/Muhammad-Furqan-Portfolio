import { useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { GithubIcon } from "../components/BrandIcons";
import { useTheme } from "../hooks/useTheme";
import { profile } from "../data/profile";

// Pull the GitHub username out of the profile's github URL rather than hardcoding it.
const GITHUB_USERNAME = profile.github.replace(/\/$/, "").split("/").pop() ?? "";

export function DeveloperActivity() {
  const { theme } = useTheme();
  const [graphFailed, setGraphFailed] = useState(false);
  const [statsFailed, setStatsFailed] = useState(false);

  if (!GITHUB_USERNAME) return null;

  const accent = theme === "light" ? "0891b2" : "22d3ee";
  const isDark = theme !== "light";

  return (
    <section id="activity" className="py-24">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="Open Source" title="Developer Activity" />

        <Reveal>
          <div className="section-surface p-6 sm:p-8 mb-6">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
              <h3 className="font-semibold text-sm flex items-center gap-2">
                <GithubIcon size={16} /> Contribution Graph
              </h3>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-[var(--primary)] hover:underline focus-ring rounded"
              >
                @{GITHUB_USERNAME} on GitHub →
              </a>
            </div>

            {graphFailed ? (
              <FallbackNotice username={GITHUB_USERNAME} githubUrl={profile.github} />
            ) : (
              <div className="overflow-x-auto -mx-2 px-2">
                <img
                  src={`https://ghchart.rshah.org/${accent}/${GITHUB_USERNAME}`}
                  alt={`${profile.name}'s GitHub contribution graph`}
                  className="min-w-[640px] w-full rounded-lg"
                  loading="lazy"
                  onError={() => setGraphFailed(true)}
                />
              </div>
            )}
          </div>
        </Reveal>

        {!statsFailed && (
          <Reveal delay={0.05}>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="section-surface p-4 overflow-hidden">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&hide_title=false&hide_border=true&bg_color=00000000&title_color=${accent}&icon_color=${accent}&text_color=${
                    isDark ? "94a3b8" : "475569"
                  }&ring_color=${accent}`}
                  alt={`${profile.name}'s GitHub stats`}
                  className="w-full"
                  loading="lazy"
                  onError={() => setStatsFailed(true)}
                />
              </div>
              <div className="section-surface p-4 overflow-hidden">
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&hide_border=true&background=00000000&stroke=${accent}&ring=${accent}&fire=${accent}&currStreakLabel=${accent}&sideLabels=${
                    isDark ? "94a3b8" : "475569"
                  }&currStreakNum=${isDark ? "f8fafc" : "0f172a"}&sideNums=${
                    isDark ? "f8fafc" : "0f172a"
                  }&dates=${isDark ? "94a3b8" : "475569"}`}
                  alt={`${profile.name}'s GitHub streak stats`}
                  className="w-full"
                  loading="lazy"
                  onError={() => setStatsFailed(true)}
                />
              </div>
            </div>
          </Reveal>
        )}

        <p className="text-xs text-[var(--muted)] mt-4">
          Live data pulled from GitHub — activity reflects public repositories only.
        </p>
      </div>
    </section>
  );
}

function FallbackNotice({ username, githubUrl }: { username: string; githubUrl: string }) {
  return (
    <div className="rounded-lg border border-dashed border-[var(--border)] p-6 text-center text-sm text-[var(--muted)]">
      Couldn't load the live contribution graph right now.{" "}
      <a href={githubUrl} target="_blank" rel="noreferrer" className="text-[var(--primary)] hover:underline">
        View @{username}'s activity directly on GitHub →
      </a>
    </div>
  );
}
