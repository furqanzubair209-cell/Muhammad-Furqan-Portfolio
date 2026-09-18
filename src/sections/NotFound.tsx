export function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center text-center px-6">
      <div>
        <p
          className="text-7xl font-bold gradient-text mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          404
        </p>
        <h1 className="text-xl font-semibold mb-2">This route doesn't exist.</h1>
        <p className="text-[var(--muted)] mb-8">
          The page you're looking for may have been moved or removed.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--primary)] text-[var(--on-primary)] font-semibold text-sm hover:brightness-110 transition focus-ring"
        >
          Back Home
        </a>
      </div>
    </div>
  );
}
