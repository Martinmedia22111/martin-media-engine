import { memo } from "react";

/**
 * Metaphorical duotone scenes for "Кому мы помогаем".
 * Same two-color system as ResultDuotoneIcon: red accents + graphite, on a soft muted base.
 * Each scene is a small narrative — not a flat icon.
 */

type SceneKey = "brands" | "vertical" | "ai" | "cmo";

const baseProps = {
  viewBox: "0 0 120 120",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true as const,
};

const GRAPHITE = "hsl(var(--foreground))";
const GRAPHITE_SOFT = "hsl(var(--foreground) / 0.12)";
const GRAPHITE_MID = "hsl(var(--foreground) / 0.45)";
const RED = "hsl(var(--primary))";
const RED_SOFT = "hsl(var(--primary) / 0.18)";
const BG_SOFT = "hsl(var(--muted))";

/* ───────────────────────── 1. BRANDS ─────────────────────────
   Сцена: щит-бренд на пьедестале, вокруг — пульс-волна (системность)
   и три "лучших" звезды. Метафора: репутация под защитой системы. */
const BrandsScene = () => (
  <svg {...baseProps}>
    <circle cx="60" cy="60" r="54" fill={BG_SOFT} />

    {/* horizon line / pedestal */}
    <line x1="14" y1="92" x2="106" y2="92" stroke={GRAPHITE_SOFT} strokeWidth="2" strokeLinecap="round" />
    <rect x="38" y="86" width="44" height="6" rx="2" fill={RED} />
    <rect x="44" y="80" width="32" height="6" rx="2" fill={RED_SOFT} />

    {/* heartbeat pulse line behind shield */}
    <path
      d="M14 56 L34 56 L40 44 L46 68 L52 50 L58 60 L106 60"
      stroke={GRAPHITE_MID}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.7"
    />

    {/* shield body — RED hero */}
    <path
      d="M60 22 L84 32 L84 54 C84 68, 74 78, 60 82 C46 78, 36 68, 36 54 L36 32 Z"
      fill={RED}
    />
    {/* shield inner soft glow */}
    <path
      d="M60 30 L78 37 L78 54 C78 65, 70 73, 60 76 C50 73, 42 65, 42 54 L42 37 Z"
      fill="none"
      stroke="hsl(var(--background) / 0.25)"
      strokeWidth="1.5"
    />
    {/* shield inner emblem — graphite M monogram */}
    <path
      d="M48 44 L48 66 M48 44 L60 56 L72 44 M72 44 L72 66"
      stroke="hsl(var(--background))"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* three stars / badges of consistency */}
    <circle cx="22" cy="34" r="3" fill={GRAPHITE} />
    <circle cx="98" cy="34" r="3" fill={GRAPHITE} />
    <circle cx="60" cy="14" r="3.5" fill={RED} />
  </svg>
);

/* ───────────────────── 2. VERTICAL / TIKTOK & REELS ─────────────────────
   Сцена: вертикальный смартфон с "play" + восходящий охват
   (концентрические дуги вирусности). */
const VerticalScene = () => (
  <svg {...baseProps}>
    <circle cx="60" cy="60" r="54" fill={BG_SOFT} />

    {/* viral arcs radiating from phone */}
    <path d="M88 60 A28 28 0 0 1 88 60" stroke="none" />
    <path
      d="M86 36 A30 30 0 0 1 86 84"
      stroke={RED_SOFT}
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M92 28 A40 40 0 0 1 92 92"
      stroke={RED_SOFT}
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M98 20 A50 50 0 0 1 98 100"
      stroke={RED}
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      opacity="0.5"
    />

    {/* phone body (vertical 9:16) */}
    <rect x="36" y="20" width="44" height="80" rx="8" fill={GRAPHITE} />
    {/* screen */}
    <rect x="40" y="28" width="36" height="64" rx="4" fill="hsl(var(--background))" />
    {/* notch */}
    <rect x="54" y="24" width="12" height="2.5" rx="1.25" fill={GRAPHITE_MID} />

    {/* play triangle */}
    <path d="M52 50 L66 60 L52 70 Z" fill={RED} />

    {/* upward content trend inside screen — small bars */}
    <rect x="44" y="80" width="3" height="6" rx="1" fill={GRAPHITE_MID} />
    <rect x="50" y="76" width="3" height="10" rx="1" fill={GRAPHITE_MID} />
    <rect x="56" y="72" width="3" height="14" rx="1" fill={RED} />
    <rect x="62" y="78" width="3" height="8" rx="1" fill={GRAPHITE_MID} />
    <rect x="68" y="74" width="3" height="12" rx="1" fill={RED} />

    {/* small floating heart (engagement) */}
    <path
      d="M22 46 C22 42, 28 42, 28 46 C28 42, 34 42, 34 46 C34 50, 28 54, 28 54 C28 54, 22 50, 22 46 Z"
      fill={RED}
    />
  </svg>
);

/* ───────────────────────── 3. AI IN MARKETING ─────────────────────────
   Сцена: мозг-схема с нейронными узлами, из которой растут
   маркетинговые "лепестки" (data → insight → action). */
const AiScene = () => (
  <svg {...baseProps}>
    <circle cx="60" cy="60" r="54" fill={BG_SOFT} />

    {/* outer orbit */}
    <circle cx="60" cy="60" r="40" fill="none" stroke={RED_SOFT} strokeWidth="1.5" strokeDasharray="3 4" />

    {/* brain — left RED hemisphere, right graphite outline */}
    <path
      d="M60 32 C44 32, 34 44, 34 58 C34 70, 42 80, 54 84 L54 86 C54 88, 56 90, 58 90 L60 90 Z"
      fill={RED}
    />
    <path
      d="M60 32 C76 32, 86 44, 86 58 C86 70, 78 80, 66 84 L66 86 C66 88, 64 90, 62 90 L60 90 Z"
      fill={RED_SOFT}
      stroke={RED}
      strokeWidth="2.5"
    />

    {/* neural circuit on right hemisphere — graphite for contrast */}
    <g stroke={GRAPHITE} strokeWidth="1.8" strokeLinecap="round" fill="none">
      <path d="M62 44 L70 50" />
      <path d="M70 50 L78 48" />
      <path d="M70 50 L72 62" />
      <path d="M72 62 L80 64" />
      <path d="M72 62 L66 74" />
    </g>
    <g fill={GRAPHITE}>
      <circle cx="62" cy="44" r="2.5" />
      <circle cx="70" cy="50" r="2.5" />
      <circle cx="78" cy="48" r="2.5" />
      <circle cx="72" cy="62" r="2.5" />
      <circle cx="80" cy="64" r="2.5" />
      <circle cx="66" cy="74" r="2.5" />
    </g>

    {/* synapse highlights on left (red) hemisphere */}
    <g fill="hsl(var(--background))">
      <circle cx="46" cy="50" r="2" />
      <circle cx="42" cy="62" r="2" />
      <circle cx="50" cy="72" r="2" />
    </g>

    {/* orbiting data nodes */}
    <circle cx="20" cy="60" r="5" fill={RED} />
    <circle cx="100" cy="60" r="5" fill={RED} />
    <circle cx="60" cy="20" r="4" fill={GRAPHITE} />
  </svg>
);

/* ───────────────────────── 4. CMO / STRATEGIC PARTNER ─────────────────────────
   Сцена: шахматная фигура (король) на доске + одна красная пешка-партнёр рядом.
   Метафора: стратегическое мышление + надёжный соратник. */
const CmoScene = () => (
  <svg {...baseProps}>
    <circle cx="60" cy="60" r="54" fill={BG_SOFT} />

    {/* chessboard plate — red base */}
    <rect x="22" y="80" width="76" height="14" rx="2" fill={RED} />
    {/* board squares pattern */}
    <g fill="hsl(var(--background))" opacity="0.6">
      <rect x="26" y="82" width="8" height="4" />
      <rect x="42" y="82" width="8" height="4" />
      <rect x="58" y="82" width="8" height="4" />
      <rect x="74" y="82" width="8" height="4" />
      <rect x="90" y="82" width="6" height="4" />
      <rect x="34" y="86" width="8" height="4" />
      <rect x="50" y="86" width="8" height="4" />
      <rect x="66" y="86" width="8" height="4" />
      <rect x="82" y="86" width="8" height="4" />
    </g>

    {/* KING — RED hero, central */}
    {/* base */}
    <path d="M44 80 L44 76 L72 76 L72 80 Z" fill={RED} />
    {/* body */}
    <path
      d="M48 76 L48 60 C48 54, 52 50, 58 50 L58 46 C58 44, 60 44, 60 46 L60 50 C66 50, 70 54, 70 60 L70 76 Z"
      fill={RED}
    />
    {/* body inner highlight */}
    <path
      d="M52 74 L52 60 C52 56, 55 53, 59 53"
      stroke="hsl(var(--background) / 0.35)"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* crown cross */}
    <rect x="56" y="32" width="6" height="14" rx="1.5" fill={RED} />
    <rect x="51" y="36" width="16" height="5" rx="1.5" fill={RED} />
    {/* graphite crown jewel — accent */}
    <circle cx="59" cy="28" r="3.5" fill={GRAPHITE} />

    {/* PAWN — graphite ally beside king */}
    <path d="M82 80 L82 78 L94 78 L94 80 Z" fill={GRAPHITE} />
    <path
      d="M84 78 L84 70 C84 66, 86 64, 88 64 L88 64 C88 60, 90 58, 88 58 C86 58, 88 60, 88 64 C90 64, 92 66, 92 70 L92 78 Z"
      fill={GRAPHITE}
    />
    <circle cx="88" cy="58" r="4" fill={GRAPHITE} />

    {/* strategic vector — diagonal sight line king→pawn (partnership) */}
    <line
      x1="64"
      y1="48"
      x2="86"
      y2="58"
      stroke={RED}
      strokeWidth="1.5"
      strokeDasharray="2 3"
      strokeLinecap="round"
      opacity="0.7"
    />
  </svg>
);

const map: Record<SceneKey, () => JSX.Element> = {
  brands: BrandsScene,
  vertical: VerticalScene,
  ai: AiScene,
  cmo: CmoScene,
};

interface Props {
  scene: SceneKey;
  className?: string;
}

const AudienceSceneIcon = ({ scene, className = "" }: Props) => {
  const Comp = map[scene];
  if (!Comp) return null;
  return (
    <div className={`w-full h-full ${className}`}>
      <Comp />
    </div>
  );
};

export type { SceneKey as AudienceSceneKey };
export default memo(AudienceSceneIcon);
