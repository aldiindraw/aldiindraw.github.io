"use client";
import { useState } from "react";
import { PROJECTS } from "@/lib/data";
import TechLogo from "../ui/TechLogo";

export default function Work() {
  const [open, setOpen] = useState(0);
  return (
    <section id="work" className="sec work" aria-labelledby="h-work">
      <div className="wrap">
        <p className="tag rv">03 — Proyek pilihan</p>
        <h2 id="h-work" className="h2"><span className="rv-mask"><span>Yang sudah saya <em>bangun.</em></span></span></h2>
      </div>
      <div className="wrap">
        <div className="acc rv" role="list">
          {PROJECTS.map((p, i) => {
            const on = open === i;
            return (
              <article
                key={p.id} role="listitem" className={`pn ${on ? "on" : ""}`}
                onMouseEnter={(e) => { if (window.matchMedia("(hover:hover) and (min-width: 861px)").matches) setOpen(i); void e; }}
              >
                <button className="spine" onClick={() => setOpen(i)} onFocus={() => setOpen(i)} aria-expanded={on} aria-controls={`pn-${p.id}`}>
                  <span className="n">{p.index}</span>
                  <span className="v">{p.title}</span>
                  <span className="plus" aria-hidden>+</span>
                </button>
                <div className="body" id={`pn-${p.id}`} hidden={false} aria-hidden={!on}>
                  <div className="inner">
                    <div className="txt">
                      <p className="tag">{p.index} · {p.kicker}</p>
                      <h3>{p.title}</h3>
                      <p className="d">{p.description}</p>
                      <ul className="feat">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
                      <div className="chipsrow">
                        {p.tech.map((t) => (
                          <span className="chip" key={t.name}>{t.logo && <TechLogo skill={{ name: t.name, logo: t.logo }} size={16} />}{t.name}</span>
                        ))}
                      </div>
                      <a className="btn btn-primary" href={p.github} target="_blank" rel="noopener" tabIndex={on ? 0 : -1}>Lihat di GitHub ↗</a>
                    </div>
                    <div className="shots">
                      <p className="cap">Tangkapan layar asli</p>
                      {p.images.map((im) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img key={im.src} src={im.src} width={im.w} height={im.h} alt={im.alt} loading="lazy" />
                      ))}
                      <p className="note">{p.note}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <style>{`
        .acc{display:flex;gap:10px;height:min(78svh,640px);min-height:560px;margin-top:48px}
        .pn{position:relative;flex:1 1 0;min-width:0;border-radius:28px;background:var(--card);box-shadow:inset 0 0 0 1px var(--line);overflow:hidden;transition:flex-grow .9s var(--ease),box-shadow .5s}
        .pn.on{flex-grow:8;box-shadow:inset 0 0 0 1px var(--line),0 30px 70px -36px rgba(0,0,0,.35)}
        .spine{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:22px 0;transition:opacity .4s}
        .pn.on .spine{opacity:0;pointer-events:none}
        .spine .n{font-family:var(--f-mono);font-size:12px;color:var(--mute)}
        .spine .v{writing-mode:vertical-rl;transform:rotate(180deg);font-weight:700;letter-spacing:-.03em;font-size:20px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-height:70%}
        .spine .plus{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;box-shadow:inset 0 0 0 1px var(--line);font-size:18px;transition:transform .6s var(--ease),background .3s,color .3s}
        .spine:hover .plus{transform:rotate(90deg);background:var(--ink);color:#fff}
        .body{position:absolute;inset:0;opacity:0;visibility:hidden;transition:opacity .5s .15s,visibility 0s .9s}
        .pn.on .body{opacity:1;visibility:visible;transition:opacity .6s .25s,visibility 0s}
        .inner{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:28px;padding:32px;height:100%;min-width:min(900px,100%)}
        .txt{display:flex;flex-direction:column;min-height:0;overflow:auto;padding-right:6px}
        .txt .tag{margin:0 0 10px}
        .txt h3{margin:0 0 12px;font-size:clamp(1.8rem,3.2vw,2.8rem);font-weight:700;letter-spacing:-.045em;line-height:1}
        .txt .d{margin:0 0 16px;color:var(--ink-2);font-size:15.5px}
        .feat{list-style:none;margin:0 0 16px;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:6px 18px;font-size:14px}
        .feat li{position:relative;padding-left:16px}
        .feat li::before{content:"";position:absolute;left:0;top:.6em;width:6px;height:6px;border-radius:50%;background:var(--ink)}
        .chipsrow{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:18px}
        .chip{display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:500;padding:4px 12px;border-radius:999px;background:var(--paper);box-shadow:inset 0 0 0 1px var(--line)}
        .txt .btn{align-self:flex-start;margin-top:auto}
        .shots{display:flex;flex-direction:column;gap:10px;min-height:0;overflow:auto;clip-path:inset(0 0 0 100%);transition:clip-path 1s var(--ease)}
        .pn.on .shots{clip-path:inset(0 0 0 0);transition-delay:.3s}
        .shots .cap{font-family:var(--f-mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--mute);margin:0}
        .shots img{width:100%;height:auto;border-radius:14px;box-shadow:0 0 0 1px var(--line);background:var(--paper)}
        .shots .note{font-size:12px;color:var(--mute);margin:2px 0 0}
        @media (max-width:860px){
          .acc{flex-direction:column;height:auto;min-height:0}
          .pn{flex:none;transition:none}
          .spine{position:relative;inset:auto;flex-direction:row;padding:18px 20px;gap:14px;justify-content:flex-start;width:100%}
          .pn.on .spine{opacity:1;pointer-events:auto}
          .spine .v{writing-mode:horizontal-tb;transform:none;max-height:none;font-size:18px;flex:1;text-align:left}
          .spine .plus{margin-left:auto;transition:transform .4s}
          .pn.on .spine .plus{transform:rotate(45deg)}
          .body{position:relative;inset:auto;display:none;opacity:1;visibility:visible}
          .pn.on .body{display:block}
          .inner{grid-template-columns:1fr;min-width:0;height:auto;padding:4px 20px 22px}
          .txt{overflow:visible}
          .txt .tag{display:none}
          .txt h3{display:none}
          .feat{grid-template-columns:1fr}
          .txt .btn{margin-top:4px}
          .shots{clip-path:none;overflow:visible}
        }
      `}</style>
    </section>
  );
}
