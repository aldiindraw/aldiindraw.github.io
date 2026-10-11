"use client";
import { PROFILE } from "@/lib/data";
import { scrollToTarget } from "@/lib/scroll";

export default function Hero() {
  const go = (id: string) => (e: React.MouseEvent) => { e.preventDefault(); scrollToTarget(id); };
  return (
    <section id="top" className="hero" aria-label="Perkenalan">
      <div className="ghost" aria-hidden>{PROFILE.first.toUpperCase()}</div>
      <figure className="arch rv">
        <img src="/images/aldi-hero.webp" width={800} height={1000} alt={`Foto ${PROFILE.name}`} fetchPriority="high" />
      </figure>
      <div className="wrap hero-copy">
        <p className="tag rv" style={{ ["--i" as string]: 1 }}>Yogyakarta · S2 Ilmu Komputer UGM</p>
        <h1>
          <span className="rv-mask" style={{ ["--i" as string]: 1 }}><span>Fullstack</span></span>
          <span className="rv-mask" style={{ ["--i" as string]: 2 }}><span>Developer<em className="it">.</em></span></span>
        </h1>
        <p className="sub rv" style={{ ["--i" as string]: 3 }}>Desain antarmuka dan <span className="it">AI agent</span>, dari ide sampai produk yang dipakai.</p>
        <div className="cta rv" style={{ ["--i" as string]: 4 }}>
          <a className="btn btn-primary" href="#work" onClick={go("work")}>Lihat proyek</a>
          <a className="btn btn-ghost" href="#contact" onClick={go("contact")}>Mari bicara</a>
        </div>
      </div>
      <button className="scrollhint" onClick={() => scrollToTarget("about")} aria-label="Gulir ke bagian Tentang"><span /></button>
      <style>{`
        .hero{position:relative;min-height:100svh;display:flex;align-items:flex-end;padding:100px 0 clamp(28px,5vh,56px);overflow:hidden}
        .ghost{position:absolute;left:50%;top:36%;transform:translate(-50%,-50%);font-weight:800;font-size:clamp(9rem,36vw,34rem);letter-spacing:-.06em;line-height:.8;color:transparent;-webkit-text-stroke:1.5px rgba(13,13,13,.12);user-select:none;white-space:nowrap;animation:drift 14s ease-in-out infinite alternate}
        @keyframes drift{from{transform:translate(-52%,-50%)}to{transform:translate(-48%,-50%)}}
        .arch{position:absolute;left:50%;top:clamp(76px,10vh,104px);translate:-50% 0;margin:0;height:min(54svh,540px);aspect-ratio:4/5;border-radius:999px 999px 28px 28px;overflow:hidden;background:var(--soft);box-shadow:0 0 0 1px var(--line),0 40px 80px -30px rgba(0,0,0,.35)}
        .arch img{width:100%;height:100%;object-fit:cover;object-position:center 22%}
        .hero-copy{position:relative;margin-top:min(54svh,540px)}
        .hero h1{font-weight:700;font-size:clamp(3rem,8.2vw,8rem);line-height:.95;letter-spacing:-.055em;margin:-.42em 0 0;white-space:nowrap;position:relative}
        .hero h1 .rv-mask{display:inline-block;margin-right:.22em;padding-bottom:.08em}
        .sub{font-size:clamp(1.05rem,2vw,1.4rem);color:var(--ink-2);margin:14px 0 22px;max-width:30em;letter-spacing:-.01em}
        .sub .it{font-size:1.15em}
        .cta{display:flex;gap:12px;flex-wrap:wrap}
        .hero-copy .tag{position:absolute;left:var(--gutter);top:-5.2em;margin:0}
        .scrollhint{position:absolute;right:var(--gutter);bottom:36px;width:28px;height:46px;border-radius:999px;box-shadow:inset 0 0 0 1.5px var(--ink)}
        .scrollhint span{position:absolute;left:50%;top:9px;width:4px;height:8px;margin-left:-2px;border-radius:2px;background:var(--ink);animation:wheel 1.8s var(--ease) infinite}
        @keyframes wheel{0%{opacity:0;transform:translateY(0)}30%{opacity:1}100%{opacity:0;transform:translateY(16px)}}
        @media (max-width:760px){.arch{height:min(46svh,400px)}.hero-copy{margin-top:min(46svh,400px)}.hero h1{white-space:normal;font-size:clamp(3rem,15vw,5rem);margin-top:-.2em}.hero h1 .rv-mask{display:block}.hero-copy .tag{position:static;margin:16px 0 12px}.scrollhint{display:none}.ghost{top:30%}}
      `}</style>
    </section>
  );
}
