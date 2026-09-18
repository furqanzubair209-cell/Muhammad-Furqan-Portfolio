import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X, FileDown, ExternalLink } from "lucide-react";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function ResumeModal({
  resumeUrl,
  name,
  onClose,
}: {
  resumeUrl: string;
  name: string;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      ).filter((el) => el.offsetParent !== null);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previouslyFocused.current?.focus();
    };
  }, [onClose]);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-[100] grid place-items-center p-4 sm:p-6"
    >
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="relative w-full max-w-3xl h-[85vh] section-surface p-4 sm:p-6 flex flex-col"
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.98 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center justify-between mb-4 shrink-0">
          <h3
            id="resume-modal-title"
            className="text-lg font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {name} — Resume
          </h3>
          <div className="flex items-center gap-2">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--border)] text-xs font-medium hover:border-[var(--primary)] hover:text-[var(--primary)] transition focus-ring"
            >
              <ExternalLink size={14} /> Open in new tab
            </a>
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--primary)] text-[var(--on-primary)] text-xs font-semibold hover:brightness-110 transition focus-ring"
            >
              <FileDown size={14} /> Download
            </a>
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close resume preview"
              data-tooltip="Close"
              className="w-9 h-9 grid place-items-center rounded-lg border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition focus-ring shrink-0"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        <div className="flex-1 rounded-lg overflow-hidden border border-[var(--border)] bg-[var(--surface-2)]">
          <object data={resumeUrl} type="application/pdf" className="w-full h-full">
            <div className="w-full h-full grid place-items-center p-8 text-center">
              <div>
                <p className="text-sm text-[var(--muted)] mb-4">
                  Your browser can't preview PDFs inline.
                </p>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--primary)] text-[var(--on-primary)] text-sm font-semibold hover:brightness-110 transition focus-ring"
                >
                  <ExternalLink size={15} /> Open Resume
                </a>
              </div>
            </div>
          </object>
        </div>
      </motion.div>
    </div>
  );
}
