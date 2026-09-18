import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      data-tooltip="Back to top"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 grid place-items-center rounded-full bg-[var(--primary)] text-[var(--on-primary)] shadow-lg hover:brightness-110 transition focus-ring"
    >
      <ChevronUp size={18} />
    </button>
  );
}
