"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { DESIGNS, DESIGN_CATS } from "@/lib/data";
import { lockScroll } from "@/lib/scroll";

export default function Design() {
  const [cat, setCat] = useState("Semua");
  const [view, setView] = useState<number | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const list = DESIGNS.filter((d) => cat === "Semua" || d.cat === cat);
  const cur = view !== null ? list[view] : null;

  const close = useCallback(() => { setView(null); opener.current?.focus(); }, []);
  const step = useCallback((n: number) => setView((v) => (v === null ? v : (v + n + list.length) % list.length)), [list.length]);

  useEffect(() => {
    if (view === null) return;
    lockScroll(true);
    closeBtn.current?.focus();
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", k);
    return () => { window.removeEventListener("keydown", k); lockScroll(false); };
  }, [view, close, step]);

  return (
    <section id="design" className="sec design" aria-labelledby="h-design">
      <div className="wrap">
        <p className="tag rv">04 — Desain</p>
        <h2 id="h-design" className="h2"><span className="rv-mask"><span>Karya <em>desain.</em></span></span></h2>
        <p className="lead rv">Brosur, materi edukasi, dokumen, dan model 3D yang saya buat dengan Canva dan SketchUp. Klik gambar untuk melihatnya lebih besar.</p>
        <div className="chips rv" role="group" aria-label="Filter jenis desain">
          {["Semua", ...DESIGN_CATS].map((c) => (
            <button key={c} className={cat === c ? "on" : ""} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <ul className="masonry">
          {list.map((d, i) => (
            <li key={d.src} className="item">
              <button onClick={(e) => { opener.current = e.currentTarget; setView(i); }} aria-label={`Buka ${d.title}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={d.src} width={d.w} height={d.h} alt={d.alt} loading="lazy" />
                <span className="cap"><small>{d.cat}</small><b>{d.title}</b></span>
              </button>
            </li>
          ))}
        </ul>
        <p className="note">Sebagian karya adalah materi cetak untuk institusi dan masih memuat logo atau watermark aslinya.</p>
      </div>

      {cur && (
        <div className="lb" role="dialog" aria-modal="true" aria-label={cur.title} onClick={close}>
          <div className="lb-in" onClick={(e) => e.stopPropagation()}>
            <button ref={closeBtn} className="lb-x" onClick={close} aria-label="Tutup">Tutup ✕</button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={cur.src} alt={cur.alt} />
            <div className="lb-cap">
              <div><small>{cur.cat} · {(view ?? 0) + 1}/{list.length}</small><b>{cur.title}</b><p>{cur.desc}</p></div>
              <div className="lb-nav">
                <button onClick={() => step(-1)} aria-label="Sebelumnya">←</button>
                <button onClick={() => step(1)} aria-label="Berikutnya">→</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .design .lead{max-width:36em;color:var(--ink-2);margin:22px 0 26px}
        .design .chips{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:28px}
        .design .chips button{padding:7px 16px;border-radius:999px;font-size:14px;font-weight:500;box-shadow:inset 0 0 0 1px var(--line);transition:background .3s,color .3s}
        .design .chips button:hover{box-shadow:inset 0 0 0 1px var(--ink)}
        .design .chips button.on{background:var(--ink);color:#fff}
        .masonry{list-style:none;margin:0;padding:0;columns:3;column-gap:16px}
        .item{break-inside:avoid;margin-bottom:16px}
        .item button{display:block;width:100%;text-align:left;border-radius:20px;overflow:hidden;background:var(--card);box-shadow:inset 0 0 0 1px var(--line);transition:transform .6s var(--ease),box-shadow .4s}
        .item button:hover{transform:translateY(-4px);box-shadow:inset 0 0 0 1px var(--line),0 26px 50px -26px rgba(0,0,0,.4)}
        .item img{width:100%;height:auto;display:block}
        .item .cap{display:block;padding:12px 16px 14px}
        .item small{display:block;font-family:var(--f-mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--mute)}
        .item b{display:block;font-weight:600;letter-spacing:-.015em;line-height:1.25;font-size:15px}
        .design .note{margin:22px 0 0;font-size:13px;color:var(--mute)}
        .lb{position:fixed;inset:0;z-index:80;background:rgba(244,242,238,.94);backdrop-filter:blur(8px);display:grid;place-items:center;padding:20px;animation:lbin .4s var(--ease)}
        @keyframes lbin{from{opacity:0}to{opacity:1}}
        .lb-in{position:relative;max-width:min(1100px,100%);max-height:100%;display:flex;flex-direction:column;gap:14px}
        .lb-in img{max-width:100%;max-height:calc(100svh - 190px);width:auto;height:auto;margin:0 auto;border-radius:16px;box-shadow:0 30px 80px -30px rgba(0,0,0,.5),0 0 0 1px var(--line);background:#fff}
        .lb-x{align-self:flex-end;padding:8px 18px;border-radius:999px;background:var(--ink);color:#fff;font-weight:600;font-size:14px}
        .lb-cap{display:flex;gap:20px;justify-content:space-between;align-items:flex-end}
        .lb-cap small{display:block;font-family:var(--f-mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--mute)}
        .lb-cap b{font-size:18px;letter-spacing:-.02em}
        .lb-cap p{margin:2px 0 0;font-size:14px;color:var(--ink-2);max-width:46em}
        .lb-nav{display:flex;gap:8px}
        .lb-nav button{width:44px;height:44px;border-radius:50%;box-shadow:inset 0 0 0 1px var(--ink);font-size:18px;transition:background .3s,color .3s}
        .lb-nav button:hover{background:var(--ink);color:#fff}
        @media (max-width:980px){.masonry{columns:2}}
        @media (max-width:560px){.masonry{column-gap:10px}.item{margin-bottom:10px}.item button{border-radius:14px}.item .cap{padding:8px 10px 10px}.item b{font-size:13px}.lb-cap{flex-direction:column;align-items:flex-start}.lb-in img{max-height:calc(100svh - 260px)}}
      `}</style>
    </section>
  );
}
