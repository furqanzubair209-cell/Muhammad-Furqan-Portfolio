import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { useActiveSection } from "../hooks/useActiveSection";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "activity", label: "Activity" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const active = useActiveSection(LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const handleClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[var(--bg)]/80 border-b border-[var(--border)] shadow-[0_1px_0_0_var(--border)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-16">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleClick("home");
          }}
          className="font-bold text-lg tracking-tight focus-ring"
          style={{ fontFamily: "var(--font-display)" }}
        >
          M.<span className="gradient-text">Furqan</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(l.id);
              }}
              className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors focus-ring ${
                active === l.id ? "text-[var(--primary)]" : "text-[var(--muted)] hover:text-[var(--text)]"
              }`}
            >
              {l.label}
              {active === l.id && (
                <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-[var(--primary)]" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            data-tooltip={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 grid place-items-center rounded-lg border border-[var(--border)] text-[var(--muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors focus-ring"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="lg:hidden w-9 h-9 grid place-items-center rounded-lg border border-[var(--border)] text-[var(--text)] focus-ring"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="lg:hidden border-t border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-md"
        >
          <ul className="container-px py-4 flex flex-col gap-1">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(l.id);
                  }}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium focus-ring ${
                    active === l.id
                      ? "text-[var(--primary)] bg-[var(--surface)]"
                      : "text-[var(--muted)]"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
