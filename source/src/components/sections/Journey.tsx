"use client";
import { useRef } from "react";
import { JOURNEY } from "@/lib/data";
import { useScrollProgress } from "@/lib/hooks";

export default function Journey() {
  const box = useRef<HTMLDivElement>(null);
  const p = useScrollProgress(box);
  const n = JOURNEY.length + 1;
  return (
    <section id="journey" className="sec journey" aria-labelledby="h-journey">
      <div className="wrap">
        <p className="tag rv">02 — Pengalaman dan pendidikan</p>
        <h2 id="h-journey" className="h2"><span className="rv-mask"><span>Perjalanan <em>saya.</em></span></span></h2>
        <div className="jr-tl" ref={box}>
          <div className="jr-spine" aria-hidden><i style={{ transform: `scaleY(${p})` }} /></div>
          <ol>
            {JOURNEY.map((e, i) => (
              <li key={e.title + e.period} className={`jr-st ${p >= (i + 0.2) / n ? "jr-lit" : ""}`}>
                <span className="jr-dot" aria-hidden />
                <div className="jr-card">
                  <p className="jr-meta"><span className="k">{e.kind}</span><span>{e.period}</span></p>
                  <h3>{e.title}</h3>
                  <p className="jr-pl">{e.place}{e.where ? `, ${e.where}` : ""}</p>
                  {e.points.length > 0 && <ul>{e.points.map((x) => <li key={x}>{x}</li>)}</ul>}
                </div>
              </li>
            ))}
            <li className={`jr-st ${p >= 0.95 ? "jr-lit" : ""}`}>
              <span className="jr-dot" aria-hidden />
              <div className="jr-card jr-dash"><p className="jr-meta"><span className="k">Berikutnya</span></p><h3>Tim Anda?</h3><p className="jr-pl">Terbuka untuk kolaborasi dan peluang kerja.</p></div>
            </li>
          </ol>
        </div>
      </div>
      <style>{`
        .jr-tl{position:relative;margin-top:56px;padding-left:44px;max-width:900px}
        .jr-tl ol{list-style:none;margin:0;padding:0;display:grid;gap:22px}
        .jr-spine{position:absolute;left:11px;top:8px;bottom:8px;width:2px;background:var(--line)}
        .jr-spine i{position:absolute;inset:0;background:var(--ink);transform-origin:top;transition:transform .2s linear}
        .jr-st{position:relative}
        .jr-dot{position:absolute;left:-40px;top:26px;width:12px;height:12px;border-radius:50%;background:var(--paper);box-shadow:inset 0 0 0 2px var(--faint);transition:background .5s var(--ease),box-shadow .5s,transform .5s var(--ease)}
        .jr-st.jr-lit .jr-dot{background:var(--ink);box-shadow:inset 0 0 0 2px var(--ink);transform:scale(1.25)}
        .jr-st .jr-card{background:var(--card);border-radius:24px;padding:22px 26px;box-shadow:inset 0 0 0 1px var(--line);opacity:.5;transform:translateX(8px);transition:opacity .7s var(--ease),transform .7s var(--ease),box-shadow .5s}
        .jr-st.jr-lit .jr-card{opacity:1;transform:none;box-shadow:inset 0 0 0 1px var(--line),0 24px 50px -34px rgba(0,0,0,.35)}
        .jr-st .jr-dash{background:transparent;box-shadow:inset 0 0 0 1.5px var(--line);border-radius:24px;border:0;outline:1.5px dashed var(--faint);outline-offset:-1.5px}
        .jr-meta{display:flex;flex-wrap:wrap;gap:8px 14px;align-items:center;margin:0 0 6px;font-family:var(--f-mono);font-size:12px;letter-spacing:.04em;color:var(--mute)}
        .jr-meta .k{padding:2px 10px;border-radius:999px;background:var(--paper);box-shadow:inset 0 0 0 1px var(--line);text-transform:uppercase;font-size:10.5px;letter-spacing:.08em;color:var(--ink)}
        .jr-st h3{margin:0;font-size:clamp(1.3rem,2.4vw,1.8rem);font-weight:700;letter-spacing:-.035em;line-height:1.1}
        .jr-st .jr-pl{margin:4px 0 0;color:var(--ink-2);font-size:15.5px}
        .jr-st ul{margin:14px 0 0;padding:0;list-style:none;display:grid;gap:8px;font-size:15px;color:var(--ink-2)}
        .jr-st li ul li,.jr-st .jr-card ul li{position:relative;padding-left:16px}
        .jr-st .jr-card ul li::before{content:"";position:absolute;left:0;top:.62em;width:6px;height:6px;border-radius:50%;background:var(--ink)}
        @media (max-width:560px){.jr-tl{padding-left:32px}.jr-dot{left:-28px}.jr-spine{left:5px}.jr-st .jr-card{padding:18px 18px}}
      `}</style>
    </section>
  );
}
