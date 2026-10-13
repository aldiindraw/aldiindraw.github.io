import { Skill } from "@/lib/data";

const P: Record<string, React.ReactNode> = {
  database: <><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" /></>,
  component: <><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M9 9h6M9 12h6M9 15h3" /></>,
  search: <><circle cx="11" cy="11" r="6" /><path d="m20 20-4.2-4.2" /></>,
  cross: <><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M12 8v8M8 12h8" /></>,
  api: <><path d="M8 7 3 12l5 5M16 7l5 5-5 5M14 5l-4 14" /></>,
  key: <><circle cx="8" cy="12" r="4" /><path d="M12 12h9M18 12v3M15 12v2" /></>,
  loop: <><path d="M4 12a8 8 0 0 1 14-5l2 2M20 12a8 8 0 0 1-14 5l-2-2" /><path d="M20 4v5h-5M4 20v-5h5" /></>,
  pen: <><path d="m4 20 1-4L16 5l3 3L8 19z" /><path d="m14 7 3 3" /></>,
  agent: <><rect x="5" y="8" width="14" height="11" rx="3" /><path d="M12 8V4M9 13h.01M15 13h.01M9.5 16.5h5" /><circle cx="12" cy="3.5" r="1" /></>,
  spark: <><path d="M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" /></>,
  cube: <><path d="M12 3 4 7.5v9L12 21l8-4.5v-9z" /><path d="M4 7.5 12 12l8-4.5M12 12v9" /></>,
  cloud: <><circle cx="7" cy="8" r="1.2" /><circle cx="14" cy="6" r="1.2" /><circle cx="18" cy="11" r="1.2" /><circle cx="10" cy="13" r="1.2" /><circle cx="5" cy="17" r="1.2" /><circle cx="15" cy="18" r="1.2" /><circle cx="19" cy="17" r="1.2" /></>,
  cluster: <><circle cx="7" cy="8" r="3" /><circle cx="16" cy="15" r="4" /><circle cx="18" cy="6" r="1" /><circle cx="5" cy="18" r="1" /></>,
  camera: <><rect x="3" y="7" width="18" height="12" rx="3" /><circle cx="12" cy="13" r="3.5" /><path d="M8 7l1.5-3h5L16 7" /></>,
  network: <><rect x="9" y="3" width="6" height="5" rx="1" /><rect x="3" y="16" width="6" height="5" rx="1" /><rect x="15" y="16" width="6" height="5" rx="1" /><path d="M12 8v4M6 16v-4h12v4" /></>,
  server: <><rect x="4" y="4" width="16" height="6" rx="2" /><rect x="4" y="14" width="16" height="6" rx="2" /><path d="M8 7h.01M8 17h.01M12 7h5M12 17h5" /></>,
  shield: <><path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z" /><path d="m9 12 2 2 4-4" /></>,
  wrench: <><path d="M14 6a4 4 0 0 0 5 5l-9 9a2.1 2.1 0 0 1-3-3l9-9a4 4 0 0 0-2-2z" /></>,
  chart: <><path d="M4 20V4M4 20h16" /><path d="M8 16v-4M12 16V8M16 16v-6" /></>,
  flow: <><rect x="3" y="4" width="7" height="5" rx="1.5" /><rect x="14" y="15" width="7" height="5" rx="1.5" /><path d="M6.5 9v3.5a2 2 0 0 0 2 2H14M12 14.5l2 2-2 2" /></>,
};

export function isBrand(s: Skill) { return !!s.logo; }

export default function TechLogo({ skill, size = 28 }: { skill: Pick<Skill, "name" | "logo" | "icon">; size?: number }) {
  if (skill.logo) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={`/logos/${skill.logo}.svg`} width={size} height={size} alt="" aria-hidden loading="lazy" style={{ width: size, height: size, objectFit: "contain" }} />;
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {P[skill.icon || "spark"]}
    </svg>
  );
}
