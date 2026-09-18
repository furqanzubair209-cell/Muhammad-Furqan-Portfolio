import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Wraps a vertical timeline list with a scroll-linked progress line that
 * fills in as the section scrolls through view. Falls back to a fully
 * static line when the user prefers reduced motion.
 */
export function ScrollTimeline({
  children,
  color = "var(--primary)",
}: {
  children: ReactNode;
  color?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <div ref={ref} className="relative pl-8 sm:pl-10">
      <div className="absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-px bg-[var(--border)]" />
      {!prefersReducedMotion && (
        <motion.div
          className="absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-px origin-top"
          style={{ scaleY, background: color, boxShadow: `0 0 8px ${color}` }}
        />
      )}
      {children}
    </div>
  );
}
