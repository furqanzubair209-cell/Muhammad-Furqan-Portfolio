import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { CustomCursor } from "./components/CustomCursor";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Education } from "./sections/Education";
import { Certifications } from "./sections/Certifications";
import { DeveloperActivity } from "./sections/DeveloperActivity";
import { Awards } from "./sections/Awards";
import { Contact } from "./sections/Contact";
import { NotFound } from "./sections/NotFound";

function App() {
  const path = typeof window !== "undefined" ? window.location.pathname : "/";
  const isKnownRoute = path === "/" || path === "/index.html";

  if (!isKnownRoute) {
    return <NotFound />;
  }

  return (
    <>
      <CustomCursor />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[var(--primary)] focus:text-[var(--on-primary)]"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <DeveloperActivity />
        <Awards />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
