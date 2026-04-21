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
   Сцена: голова робота-ассистента с антеннами-сигналами и
   "глазом-объективом" — киборг как со-пилот маркетинга. */
const AiScene = () => (
  <svg {...baseProps}>
    <circle cx="60" cy="60" r="54" fill={BG_SOFT} />

    {/* radiating signal arcs (Wi-Fi style) above the head */}
    <path d="M40 24 Q60 12 80 24" stroke={RED_SOFT} strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M46 30 Q60 22 74 30" stroke={RED} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />

    {/* antennas */}
    <line x1="44" y1="40" x2="40" y2="28" stroke={GRAPHITE} strokeWidth="2" strokeLinecap="round" />
    <line x1="76" y1="40" x2="80" y2="28" stroke={GRAPHITE} strokeWidth="2" strokeLinecap="round" />
    <circle cx="40" cy="28" r="2.5" fill={RED} />
    <circle cx="80" cy="28" r="2.5" fill={RED} />

    {/* neck / connector */}
    <rect x="54" y="86" width="12" height="6" rx="1.5" fill={GRAPHITE} />
    <rect x="46" y="92" width="28" height="4" rx="2" fill={GRAPHITE} />

    {/* robot head — RED hero shell */}
    <rect x="34" y="38" width="52" height="48" rx="14" fill={RED} />

    {/* head side "ears" / speakers */}
    <rect x="30" y="54" width="6" height="16" rx="2" fill={GRAPHITE} />
    <rect x="84" y="54" width="6" height="16" rx="2" fill={GRAPHITE} />

    {/* visor / face plate — dark band like a cyborg HUD */}
    <rect x="40" y="50" width="40" height="22" rx="6" fill={GRAPHITE} />

    {/* single cyclops camera eye — glowing red */}
    <circle cx="60" cy="61" r="7" fill="hsl(var(--background))" />
    <circle cx="60" cy="61" r="5" fill={RED} />
    <circle cx="58" cy="59" r="1.5" fill="hsl(var(--background))" />

    {/* small status LEDs on the visor */}
    <circle cx="46" cy="61" r="1.5" fill={RED} />
    <circle cx="74" cy="61" r="1.5" fill="hsl(var(--background))" opacity="0.8" />

    {/* mouth / speaker grille */}
    <g stroke="hsl(var(--background) / 0.4)" strokeWidth="1.2" strokeLinecap="round">
      <line x1="50" y1="80" x2="70" y2="80" />
      <line x1="52" y1="83" x2="68" y2="83" />
    </g>

    {/* circuit dots floating around — data context */}
    <circle cx="20" cy="64" r="3" fill={RED} />
    <circle cx="100" cy="64" r="3" fill={RED} />
    <circle cx="22" cy="48" r="2" fill={GRAPHITE} />
    <circle cx="98" cy="48" r="2" fill={GRAPHITE} />
  </svg>
);

/* ───────────────────────── 4. CMO / STRATEGIC PARTNER ─────────────────────────
   Сцена: классическое блочное рукопожатие в стиле референса —
   две руки с прямоугольными манжетами и круглыми "запонками".
   Левая рука RED, правая GRAPHITE — равноправное партнёрство. */
const CmoScene = () => (
  <svg {...baseProps}>
    <circle cx="60" cy="60" r="54" fill={BG_SOFT} />

    {/* soft halo */}
    <circle cx="60" cy="60" r="42" fill="none" stroke={RED_SOFT} strokeWidth="1.5" strokeDasharray="3 4" />

    {/* spark accents */}
    <circle cx="18" cy="30" r="2.5" fill={RED} />
    <circle cx="102" cy="90" r="2.5" fill={RED} />
    <circle cx="20" cy="92" r="2" fill={GRAPHITE} />
    <circle cx="100" cy="28" r="2" fill={GRAPHITE} />

    {/* ===== LEFT cuff (RED) — slightly tilted block with stud ===== */}
    <g transform="rotate(-14 32 64)">
      <rect x="14" y="54" width="22" height="22" rx="3" fill={RED} />
      <circle cx="22" cy="65" r="3" fill="hsl(var(--background))" />
    </g>

    {/* ===== RIGHT cuff (GRAPHITE) — mirrored tilted block with stud ===== */}
    <g transform="rotate(14 88 64)">
      <rect x="84" y="54" width="22" height="22" rx="3" fill={GRAPHITE} />
      <circle cx="98" cy="65" r="3" fill="hsl(var(--background))" />
    </g>

    {/* ===== LEFT hand (RED) — palm + thumb wrapping around right hand ===== */}
    <path
      d="M30 70
         L52 56
         C56 53, 62 53, 66 56
         L74 62
         C76 63.5, 76 66, 74 67.5
         L66 73
         L60 77
         L46 84
         C42 86.5, 37 85.5, 35 82
         L30 74
         Z"
      fill={RED}
    />
    {/* left thumb on top */}
    <path
      d="M52 56
         C55 52, 60 51, 64 53
         L70 57
         C72 58.5, 72 61, 70 62
         L62 66
         Z"
      fill={RED}
      stroke="hsl(var(--background))"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />

    {/* ===== RIGHT hand (GRAPHITE) — palm + fingers gripping left hand ===== */}
    <path
      d="M90 70
         L70 58
         C66 56, 60 56, 56 58
         L46 64
         C44 65.5, 44 68, 46 69.5
         L56 75
         L62 78
         L74 84
         C78 86, 83 85, 85 82
         L90 74
         Z"
      fill={GRAPHITE}
    />

    {/* finger separation lines on right hand (the 4 fingers detail) */}
    <g stroke="hsl(var(--background))" strokeWidth="1.2" strokeLinecap="round" fill="none">
      <line x1="58" y1="72" x2="66" y2="76" />
      <line x1="62" y1="70" x2="70" y2="74" />
      <line x1="66" y1="68" x2="74" y2="72" />
      <line x1="70" y1="66" x2="78" y2="70" />
    </g>

    {/* subtle inner highlight where the two hands meet */}
    <path
      d="M52 60 C56 57, 62 57, 66 60"
      stroke="hsl(var(--background) / 0.5)"
      strokeWidth="1.2"
      strokeLinecap="round"
      fill="none"
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
