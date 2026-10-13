import Navigation from "./Navigation";
import Hero from "./hero/Hero";
import About from "./sections/About";
import Journey from "./sections/Journey";
import Skills from "./sections/Skills";
import Work from "./sections/Work";
import Design from "./sections/Design";
import Contact from "./sections/Contact";
import { RevealObserver, SmoothScroll } from "@/lib/scroll";
import { PROFILE } from "@/lib/data";

export default function App() {
  return (
    <>
      <SmoothScroll />
      <RevealObserver />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Work />
        <Design />
        <Contact />
      </main>
      <footer className="ft">
        <div className="wrap">
          <span>© {new Date().getFullYear()} {PROFILE.name}</span>
          <a href="#top">Kembali ke atas ↑</a>
          <span>Dibuat dengan Next.js</span>
        </div>
        <style>{`.ft{border-top:1px solid var(--line);padding:26px 0;font-size:14px;color:var(--mute)}.ft .wrap{display:flex;flex-wrap:wrap;gap:12px 28px;justify-content:space-between}.ft a:hover{color:var(--ink)}`}</style>
      </footer>
    </>
  );
}
