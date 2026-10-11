"use client";
import { useRef, useState } from "react";
import { FAMILIES, Family, SKILLS } from "@/lib/data";
import { useInView } from "@/lib/hooks";
import TechLogo from "../ui/TechLogo";

const COLS = 8;
export default function Skills() {
  const [fam, setFam] = useState<Family | "Semua">("Semua");
  const [sel, setSel] = useState(0);
  const grid = useRef<HTMLDivElement>(null);
  const seen = useInView(grid, 0.1);
  const cur = SKILLS[sel];

  return (
    <section id="skills" className="sec skills" aria-labelledby="h-skills">
      <div className="wrap">
        <p className="tag rv">02 — Keahlian</p>
        <h2 id="h-skills" className="h2"><span className="rv-mask"><span>Tabel periodik <em>teknologi.</em></span></span></h2>
        <p className="lead rv">Setiap teknologi yang saya pakai jadi satu unsur. Arahkan kursor atau ketuk untuk melihat di proyek mana saya memakainya.</p>
        <div className="chips rv" role="group" aria-label="Filter keluarga teknologi">
          {(["Semua", ...FAMILIES] as const).map((f) => (
            <button key={f} className={fam === f ? "on" : ""} aria-pressed={fam === f} onClick={() => setFam(f)}>{f}</button>
          ))}
        </div>
        <div className="layout">
          <div className={`tiles ${seen ? "go" : ""}`} ref={grid}>
            {SKILLS.map((s, i) => {
              const dim = fam !== "Semua" && s.family !== fam;
              return (
                <button
                  key={s.name}
                  className={`tile ${dim ? "dim" : ""} ${sel === i ? "sel" : ""}`}
                  style={{ ["--d" as string]: `${((Math.floor(i / COLS)) + (i % COLS)) * 40}ms` }}
                  onMouseEnter={() => setSel(i)} onFocus={() => setSel(i)} onClick={() => setSel(i)}
                  aria-label={`${s.name}, ${s.family}`}
                >
                  <small>{i + 1}</small>
                  <b>{s.sym}</b>
                  <span>{s.name}</span>
                </button>
              );
            })}
          </div>
          <aside className="insp" aria-live="polite">
            <div className="big" key={cur.name}><TechLogo skill={cur} size={150} /></div>
            <p className="tag">{cur.family}</p>
            <h3>{cur.name}</h3>
            {cur.projects.length ? (
              <>
                <p className="m">Dipakai di:</p>
                <ul>{cur.projects.map((p) => <li key={p}>{p}</li>)}</ul>
              </>
            ) : (
              <p className="m">Bidang yang saya tekuni di luar proyek publik di GitHub.</p>
            )}
          </aside>
        </div>
      </div>
      <style>{`
        .skills .lead{max-width:36em;color:var(--ink-2);margin:22px 0 26px}
        .skills .chips{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:28px}
        .skills .chips button{padding:7px 16px;border-radius:999px;font-size:14px;font-weight:500;box-shadow:inset 0 0 0 1px var(--line);transition:background .3s,color .3s}
        .skills .chips button:hover{box-shadow:inset 0 0 0 1px var(--ink)}
        .skills .chips button.on{background:var(--ink);color:#fff}
        .skills .layout{display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:28px;align-items:start}
        .tiles{display:grid;grid-template-columns:repeat(${COLS},minmax(0,1fr));gap:8px}
        .tile{position:relative;aspect-ratio:1;border-radius:14px;background:var(--card);box-shadow:inset 0 0 0 1px var(--line);padding:7px 8px;text-align:left;display:flex;flex-direction:column;justify-content:space-between;opacity:0;transform:translateY(14px) scale(.96);transition:opacity .6s var(--ease),transform .6s var(--ease),background .3s,color .3s,box-shadow .3s;transition-delay:0ms}
        .tiles.go .tile{opacity:1;transform:none;transition-delay:var(--d),var(--d),0ms,0ms,0ms}
        .tiles.go .tile.dim{opacity:.22}
        .tile small{font-family:var(--f-mono);font-size:10px;color:var(--mute)}
        .tile b{font-size:clamp(1.1rem,2.4vw,1.9rem);font-weight:700;letter-spacing:-.04em;line-height:1}
        .tile span{font-size:clamp(8px,1vw,11px);line-height:1.15;color:var(--ink-2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%}
        .tile:hover,.tile.sel{background:var(--ink);color:#fff;box-shadow:none}
        .tile:hover small,.tile.sel small,.tile:hover span,.tile.sel span{color:rgba(255,255,255,.7)}
        .insp{position:sticky;top:90px;background:var(--card);border-radius:28px;padding:26px;box-shadow:inset 0 0 0 1px var(--line),0 30px 60px -34px rgba(0,0,0,.3)}
        .insp .big{height:170px;display:grid;place-items:center;border-radius:20px;background:var(--paper);margin-bottom:18px;animation:pop .6s var(--ease)}
        @keyframes pop{from{transform:scale(.8);opacity:0}to{transform:none;opacity:1}}
        .insp .tag{margin:0 0 4px}
        .insp h3{margin:0 0 12px;font-size:28px;font-weight:700;letter-spacing:-.035em;line-height:1.1}
        .insp .m{margin:0 0 6px;color:var(--mute);font-size:14px}
        .insp ul{margin:0;padding-left:18px;display:grid;gap:3px;font-size:15px}
        @media (max-width:980px){.skills .layout{grid-template-columns:1fr}.insp{position:static}.tiles{grid-template-columns:repeat(4,minmax(0,1fr))}.tile span{font-size:10px}}
      `}</style>
    </section>
  );
}
