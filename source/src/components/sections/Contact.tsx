"use client";
import { useState } from "react";
import { PROFILE } from "@/lib/data";

function Hop({ text }: { text: string }) {
  return (
    <>
      {Array.from(text).map((c, i) => c === " " ? <span key={i}> </span> : (
        <span key={i} className="hop" onPointerEnter={(e) => { const t = e.currentTarget; t.classList.remove("go"); void t.offsetWidth; t.classList.add("go"); }}>{c}</span>
      ))}
    </>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(PROFILE.email); } catch { window.prompt("Salin email:", PROFILE.email); return; }
    setCopied(true); setTimeout(() => setCopied(false), 1800);
  };
  return (
    <section id="contact" className="sec contact" aria-labelledby="h-contact">
      <div className="wrap">
        <p className="tag rv">04 — Kontak</p>
        <h2 id="h-contact" className="ct" aria-label="Mari membangun sesuatu bersama.">
          <span aria-hidden><Hop text="Mari membangun" /></span><br />
          <span aria-hidden className="it"><Hop text="sesuatu bersama." /></span>
        </h2>
        <div className="mail rv">
          <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.email}&su=Halo%20Aldi`} target="_blank" rel="noopener">{PROFILE.email}</a>
          <button className="copy" onClick={copy} aria-live="polite">{copied ? "Tersalin ✓" : "Salin"}</button>
        </div>
        <div className="links rv" style={{ ["--i" as string]: 1 }}>
          <a className="btn btn-primary" href={PROFILE.phoneHref} target="_blank" rel="noopener">WhatsApp {PROFILE.phone}</a>
          <a className="btn btn-ghost" href={PROFILE.github} target="_blank" rel="noopener">GitHub ↗</a>
          <a className="btn btn-ghost" href={PROFILE.linkedin} target="_blank" rel="noopener">LinkedIn ↗</a>
          <a className="btn btn-ghost" href={PROFILE.instagram} target="_blank" rel="noopener">Instagram ↗</a>
          <a className="btn btn-ghost" href={PROFILE.researchgate} target="_blank" rel="noopener">ResearchGate ↗</a>
        </div>
        <svg className="badge" viewBox="0 0 120 120" aria-hidden>
          <defs><path id="circ" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" /></defs>
          <text><textPath href="#circ" startOffset="0">SAY HELLO · SAY HELLO · SAY HELLO · SAY HELLO · </textPath></text>
          <circle cx="60" cy="60" r="22" fill="#0d0d0d" /><path d="M52 60h16m-6-6 6 6-6 6" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <style>{`
        .contact{padding-bottom:60px}
        .ct{font-weight:700;letter-spacing:-.055em;line-height:.98;font-size:clamp(2.6rem,9vw,8rem);margin:0 0 40px}
        .ct .it{font-weight:400}
        .hop{display:inline-block}
        .hop.go{animation:hop .6s var(--ease)}
        @keyframes hop{0%{transform:none}35%{transform:translateY(-.16em)}100%{transform:none}}
        .mail{display:flex;flex-wrap:wrap;align-items:center;gap:14px;margin-bottom:26px}
        .mail a{font-size:clamp(1.2rem,3.2vw,2.2rem);font-weight:600;letter-spacing:-.03em;text-decoration:underline;text-underline-offset:6px;text-decoration-thickness:2px;overflow-wrap:anywhere}
        .copy{padding:6px 16px;border-radius:999px;font-size:13px;font-weight:600;box-shadow:inset 0 0 0 1px var(--line);transition:background .3s,color .3s}
        .copy:hover{background:var(--ink);color:#fff}
        .links{display:flex;flex-wrap:wrap;gap:10px}
        .badge{position:absolute;right:var(--gutter);top:0;width:130px;height:130px;animation:spin 18s linear infinite}
        .badge text{font-family:var(--f-mono);font-size:9.5px;letter-spacing:.14em;fill:var(--ink)}
        @keyframes spin{to{transform:rotate(360deg)}}
        @media (max-width:760px){.badge{display:none}}
      `}</style>
    </section>
  );
}
