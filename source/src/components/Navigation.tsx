"use client";
import { useEffect, useRef, useState } from "react";
import { NAV, PROFILE } from "@/lib/data";
import { lockScroll, scrollToTarget } from "@/lib/scroll";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [prog, setProg] = useState(0);
  const [ind, setInd] = useState<{ x: number; w: number } | null>(null);
  const pill = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const on = () => {
      setScrolled(window.scrollY > 40);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProg(h > 0 ? window.scrollY / h : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }), { rootMargin: "-45% 0px -50% 0px" });
    NAV.forEach((n) => { const el = document.getElementById(n.id); if (el) io.observe(el); });
    const hero = document.getElementById("top");
    if (hero) new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(""); }, { rootMargin: "-45% 0px -50% 0px" }).observe(hero);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = pill.current?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (el) setInd({ x: el.offsetLeft, w: el.offsetWidth }); else setInd(null);
  }, [active, scrolled]);

  useEffect(() => {
    lockScroll(open);
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", k);
    return () => { window.removeEventListener("keydown", k); };
  }, [open]);

  const go = (id: string) => (e: React.MouseEvent) => { e.preventDefault(); setOpen(false); setTimeout(() => scrollToTarget(id), open ? 60 : 0); };

  return (
    <>
      <div className="nv-bar" style={{ transform: `scaleX(${prog})` }} aria-hidden />
      <header className={`nv ${scrolled ? "is-scrolled" : ""}`}>
        <a href="#top" className="nv-brand" onClick={go("top")} aria-label={`${PROFILE.name}, ke atas`}>
          <span className="nv-mark">{PROFILE.initials}</span>
          <span className="nv-name">{PROFILE.name}</span>
        </a>
        <nav className="nv-pill" ref={pill} aria-label="Navigasi utama">
          {ind && <span className="nv-ind" style={{ transform: `translateX(${ind.x}px)`, width: ind.w }} />}
          {NAV.map((n) => (
            <a key={n.id} data-id={n.id} href={`#${n.id}`} onClick={go(n.id)} className={active === n.id ? "on" : ""}>{n.label}</a>
          ))}
        </nav>
        <button className="nv-menu" onClick={() => setOpen(true)} aria-label="Buka menu" aria-expanded={open}>Menu</button>
      </header>
      <div className={`ov ${open ? "open" : ""}`} aria-hidden={!open} role="dialog" aria-label="Menu">
        <button className="ov-x" onClick={() => setOpen(false)} aria-label="Tutup menu">Tutup ✕</button>
        <ol>
          {NAV.map((n, i) => (
            <li key={n.id} style={{ ["--i" as string]: i }}>
              <a href={`#${n.id}`} onClick={go(n.id)} tabIndex={open ? 0 : -1}><small>0{i + 1}</small>{n.label}</a>
            </li>
          ))}
        </ol>
      </div>
      <style>{`
        .nv-bar{position:fixed;inset:0 0 auto 0;height:2px;background:var(--ink);transform-origin:left;z-index:60}
        .nv{position:fixed;top:14px;left:0;right:0;z-index:50;display:flex;align-items:center;justify-content:space-between;padding-inline:var(--gutter);pointer-events:none}
        .nv>*{pointer-events:auto}
        .nv-brand{display:flex;align-items:center;gap:12px}
        .nv-mark{width:42px;height:42px;border-radius:50%;display:grid;place-items:center;font-weight:700;font-size:14px;letter-spacing:-.02em;box-shadow:inset 0 0 0 1.5px var(--ink);background:transparent;color:var(--ink);transition:background .4s var(--ease),color .4s,transform .8s var(--ease)}
        .nv-brand:hover .nv-mark{transform:rotate(360deg)}
        .is-scrolled .nv-mark{background:var(--ink);color:#fff}
        .nv-name{font-weight:600;letter-spacing:-.02em;transition:opacity .4s,transform .4s var(--ease)}
        .is-scrolled .nv-name{opacity:0;transform:translateX(-8px);pointer-events:none}
        .nv-pill{position:relative;display:flex;gap:2px;padding:5px;border-radius:999px;transition:background .4s,box-shadow .4s,backdrop-filter .4s}
        .is-scrolled .nv-pill{background:rgba(255,255,255,.72);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);box-shadow:0 0 0 1px var(--line),0 10px 30px -14px rgba(0,0,0,.25)}
        .nv-pill a{position:relative;z-index:1;padding:8px 16px;font-size:14px;font-weight:500;border-radius:999px;transition:color .3s}
        .nv-pill a.on{color:#fff}
        .nv-ind{position:absolute;z-index:0;top:5px;bottom:5px;left:0;border-radius:999px;background:var(--ink);transition:transform .6s var(--ease),width .6s var(--ease)}
        .nv-menu{display:none;padding:10px 18px;border-radius:999px;font-weight:600;font-size:14px;background:rgba(255,255,255,.8);backdrop-filter:blur(10px);box-shadow:0 0 0 1px var(--line)}
        .ov{position:fixed;inset:0;z-index:70;background:var(--paper);clip-path:circle(0 at calc(100% - 50px) 36px);transition:clip-path .8s var(--ease);visibility:hidden;padding:90px var(--gutter) 40px;display:flex;flex-direction:column;justify-content:center}
        .ov.open{clip-path:circle(150% at calc(100% - 50px) 36px);visibility:visible}
        .ov-x{position:absolute;top:18px;right:var(--gutter);padding:10px 18px;border-radius:999px;box-shadow:inset 0 0 0 1px var(--line);font-weight:600;font-size:14px}
        .ov ol{list-style:none;margin:0;padding:0}
        .ov li{overflow:hidden;opacity:0;transform:translateY(30px);transition:opacity .7s var(--ease),transform .7s var(--ease);transition-delay:calc(var(--i)*70ms + 200ms)}
        .ov.open li{opacity:1;transform:none}
        .ov li a{display:flex;align-items:baseline;gap:16px;font-size:clamp(2.6rem,13vw,4.5rem);font-weight:700;letter-spacing:-.045em;line-height:1.15}
        .ov li small{font-family:var(--f-mono);font-size:13px;font-weight:400;color:var(--mute);letter-spacing:.05em}
        @media (max-width:760px){.nv-pill{display:none}.nv-menu{display:block}.nv-name{font-size:15px}}
      `}</style>
    </>
  );
}
