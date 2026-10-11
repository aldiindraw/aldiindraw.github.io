"use client";
import { useEffect, useRef, useState } from "react";
import { PROFILE } from "@/lib/data";
import { prefersReducedMotion } from "@/lib/hooks";

function Lanyard() {
  const root = useRef<HTMLDivElement>(null);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (prefersReducedMotion()) return;
    let ang = 0, vel = 0, last = 0, lastX = 0, raf = 0, hover = false;
    const sec = el.closest("section") as HTMLElement;
    const onMove = (e: PointerEvent) => {
      const dx = e.clientX - lastX; lastX = e.clientX;
      const r = el.getBoundingClientRect();
      const near = Math.abs(e.clientX - (r.left + r.width / 2)) < r.width && e.clientY > r.top - 40 && e.clientY < r.bottom + 40;
      hover = near;
      if (near) vel += Math.max(-40, Math.min(40, dx)) * 0.9;
    };
    sec.addEventListener("pointermove", onMove);
    const tick = (t: number) => {
      const dt = Math.min(0.033, (t - last) / 1000 || 0.016); last = t;
      const idle = Math.sin(t / 1400) * 1.2;
      const acc = -40 * (ang - idle) - 3.5 * vel;
      vel += acc * dt; ang += vel * dt;
      ang = Math.max(-24, Math.min(24, ang));
      el.style.transform = `rotate(${ang}deg)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    void hover;
    return () => { cancelAnimationFrame(raf); sec.removeEventListener("pointermove", onMove); };
  }, []);

  const toggle = () => setFlip((f) => !f);
  return (
    <div className="lan-wrap">
      <div className="lan" ref={root}>
        <div className="strap" aria-hidden>
          <div className="strap-in">
            {Array.from({ length: 4 }).map((_, i) => (<span key={i}>{PROFILE.name} · {PROFILE.role} · </span>))}
          </div>
        </div>
        <div className="clip" aria-hidden />
        <div
          className={`card ${flip ? "flip" : ""}`}
          role="button" tabIndex={0} aria-pressed={flip}
          aria-label="Kartu ID. Tekan untuk membalik."
          onPointerEnter={(e) => { if (e.pointerType === "mouse") setFlip(true); }}
          onPointerLeave={(e) => { if (e.pointerType === "mouse") setFlip(false); }}
          onClick={(e) => { if ((e as unknown as PointerEvent).pointerType !== "mouse" || true) toggle(); }}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } }}
        >
          <div className="face front">
            <div className="band"><span>DEVELOPER ID</span><i /></div>
            <div className="ph"><img src="/images/portrait-bust.webp" width={480} height={600} alt={`Potret ${PROFILE.name}`} loading="lazy" /></div>
            <h3>{PROFILE.name}</h3>
            <p className="role">{PROFILE.role}</p>
            <dl>
              <div><dt>Kampus</dt><dd>UGM</dd></div>
              <div><dt>Program</dt><dd>S2 Ilmu Komputer</dd></div>
              <div><dt>Lokasi</dt><dd>Yogyakarta</dd></div>
            </dl>
            <div className="foot"><div className="bars" aria-hidden /><div className="holo" aria-hidden /></div>
          </div>
          <div className="face back">
            <p className="tag">Siapa saya</p>
            <ul>
              <li>Fullstack developer</li>
              <li>Menekuni desain antarmuka</li>
              <li>Mengembangkan AI agent</li>
              <li>Mahasiswa S2 Ilmu Komputer, UGM</li>
              <li>Proyek: SiRuangan, mesin pencari medis, toko online, perpustakaan online</li>
            </ul>
            <p className="sign">{PROFILE.name}</p>
            <p className="found">Kalau kartu ini ketemu, sapa saya di {PROFILE.email}</p>
          </div>
        </div>
      </div>
      <style>{`
        .lan-wrap{position:relative;height:560px;display:flex;justify-content:center}
        .lan{position:absolute;top:-140px;left:50%;margin-left:-150px;width:300px;transform-origin:150px 0;will-change:transform;perspective:1200px;display:flex;flex-direction:column;align-items:center}
        .strap{width:30px;height:230px;background:#111;overflow:hidden;position:relative;border-radius:0 0 2px 2px}
        .strap-in{position:absolute;left:50%;top:0;writing-mode:vertical-rl;color:#fff;font-family:var(--f-mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase;white-space:nowrap;transform:translateX(-50%);animation:strapmove 14s linear infinite}
        @keyframes strapmove{from{transform:translate(-50%,0)}to{transform:translate(-50%,-50%)}}
        .clip{width:22px;height:34px;margin-top:-2px;border-radius:3px 3px 8px 8px;background:linear-gradient(90deg,#8d8d8d,#e8e8e8 40%,#9a9a9a);box-shadow:0 2px 6px rgba(0,0,0,.3);position:relative;z-index:2}
        .clip::after{content:"";position:absolute;left:50%;bottom:-6px;width:10px;height:10px;margin-left:-5px;border-radius:50%;border:2px solid #9a9a9a;background:var(--paper)}
        .card{position:relative;z-index:1;width:300px;height:404px;margin-top:-4px;transform-style:preserve-3d;transition:transform .9s var(--ease);cursor:pointer;border-radius:24px}
        .card.flip{transform:rotateY(180deg)}
        .face{position:absolute;inset:0;border-radius:24px;background:#fff;box-shadow:inset 0 0 0 1px var(--line),0 30px 60px -24px rgba(0,0,0,.35);backface-visibility:hidden;-webkit-backface-visibility:hidden;overflow:hidden;padding:0 24px 20px;display:flex;flex-direction:column;align-items:center}
        .back{transform:rotateY(180deg);align-items:flex-start;padding-top:26px}
        .band{align-self:stretch;margin:0 -24px;background:#0d0d0d;color:#fff;font-family:var(--f-mono);font-size:11px;letter-spacing:.2em;display:flex;align-items:center;justify-content:center;gap:10px;height:40px}
        .band i{width:34px;height:6px;border-radius:3px;background:#444}
        .ph{margin-top:16px;width:128px;height:156px;border-radius:20px;padding:4px;background:linear-gradient(160deg,#ddd,#9c9c9c);box-shadow:0 0 0 6px rgba(0,0,0,.04),0 14px 30px -12px rgba(0,0,0,.4);overflow:hidden}
        .ph img{width:100%;height:100%;object-fit:cover;border-radius:16px;transition:transform .8s var(--ease)}
        .card:hover .ph img{transform:scale(1.06)}
        .front h3{margin:14px 0 0;font-size:22px;font-weight:700;letter-spacing:-.03em;line-height:1.1}
        .role{margin:2px 0 10px;color:var(--mute);font-size:14px}
        .front dl{align-self:stretch;margin:0;font-size:12.5px}
        .front dl div{display:flex;justify-content:space-between;padding:4px 0;border-top:1px dashed var(--line)}
        .front dt{font-family:var(--f-mono);color:var(--mute);text-transform:uppercase;letter-spacing:.06em;font-size:10.5px;padding-top:2px}
        .front dd{margin:0;font-weight:600}
        .foot{margin-top:auto;align-self:stretch;display:flex;align-items:center;justify-content:space-between;gap:12px}
        .bars{height:26px;flex:1;background:repeating-linear-gradient(90deg,#111 0 2px,transparent 2px 4px,#111 4px 5px,transparent 5px 8px,#111 8px 11px,transparent 11px 12px)}
        .holo{width:34px;height:34px;border-radius:50%;background:conic-gradient(from 0deg,#eee,#9a9a9a,#f6f6f6,#777,#e5e5e5,#aaa,#eee);box-shadow:inset 0 0 0 1px rgba(0,0,0,.15)}
        .back .tag{margin:0 0 10px}
        .back ul{margin:0;padding-left:18px;font-size:14px;display:grid;gap:7px;color:var(--ink-2)}
        .sign{font-family:var(--f-serif);font-style:italic;font-size:30px;margin:auto 0 4px;line-height:1}
        .found{margin:0;font-size:12px;color:var(--mute)}
        @media (max-width:980px){.lan-wrap{height:520px}.lan{top:-110px}}
      `}</style>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="sec about" aria-labelledby="h-about">
      <div className="wrap grid">
        <div className="left">
          <p className="tag rv">01 — Tentang saya</p>
          <h2 id="h-about" className="h2"><span className="rv-mask"><span>Halo, saya {PROFILE.first}<em>.</em></span></span></h2>
          <p className="p rv" style={{ ["--i" as string]: 1 }}>{PROFILE.summary}</p>
          <p className="p rv" style={{ ["--i" as string]: 2 }}>{PROFILE.summary2}</p>
          <div className="row rv" style={{ ["--i" as string]: 3 }}>
            <a className="btn btn-primary" href={PROFILE.github} target="_blank" rel="noopener">GitHub ↗</a>
            <a className="btn btn-ghost" href={PROFILE.linkedin} target="_blank" rel="noopener">LinkedIn ↗</a>
          </div>
        </div>
        <Lanyard />
        <aside className="right rv" aria-label="Fakta singkat">
          <p className="tag">Fakta singkat</p>
          <dl>
            <div><dt>Lokasi</dt><dd>{PROFILE.location}</dd></div>
            <div><dt>Pendidikan</dt><dd>{PROFILE.program}, {PROFILE.campus}</dd></div>
            <div><dt>Fokus</dt><dd>Fullstack, desain antarmuka, AI agent</dd></div>
            <div><dt>Email</dt><dd><a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></dd></div>
          </dl>
          <blockquote>“{PROFILE.quote}”</blockquote>
        </aside>
      </div>
      <style>{`
        .about{overflow:hidden}
        .about .grid{display:grid;grid-template-columns:minmax(0,1fr) 320px minmax(0,1fr);gap:clamp(24px,4vw,56px);align-items:stretch}
        .about .left{align-self:center}
        .about .h2{font-size:clamp(2.2rem,4.6vw,4rem);margin-bottom:24px}
        .about .p{font-size:17px;color:var(--ink-2);margin:0 0 14px;max-width:34em}
        .about .row{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px}
        .about .right{align-self:center}
        .about .right dl{margin:0}
        .about .right dl div{padding:14px 0;border-top:1px solid var(--line)}
        .about .right dt{font-family:var(--f-mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--mute)}
        .about .right dd{margin:2px 0 0;font-weight:600;letter-spacing:-.01em;overflow-wrap:anywhere}
        .about blockquote{margin:22px 0 0;font-family:var(--f-serif);font-style:italic;font-size:26px;line-height:1.2;color:var(--ink-2)}
        @media (max-width:980px){.about .grid{grid-template-columns:1fr}.about .lan-wrap{order:-1}.about .left,.about .right{align-self:start}}
      `}</style>
    </section>
  );
}
